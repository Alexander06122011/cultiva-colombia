
'use client';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { useState, useMemo, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CropCard } from "@/components/crop-card";
import { CROP_DATA, DIFFICULTY_OPTIONS, SPACE_OPTIONS, REGIONS } from "@/lib/data";
import type { Difficulty, Crop } from "@/types";
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { X, MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { Map as LeafletMap } from 'leaflet';
import { useToast } from '@/hooks/use-toast';

const ColombiaMap = dynamic(
  () => import('@/components/colombia-map').then(mod => mod.ColombiaMap),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-[500px] w-full rounded-lg" />
  }
);

export default function MapPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedSpace, setSelectedSpace] = useState<string>('all');
  const [mapCenter, setMapCenter] = useState<[number, number]>([4.5709, -74.2973]);
  const [mapZoom, setMapZoom] = useState<number>(5);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const { toast } = useToast();

  const handleRegionSelect = (regionName: string) => {
    if (regionName === 'all') {
      clearFilters();
      return;
    }
    const region = REGIONS.find(r => r.name === regionName);
    if (region) {
      setMapCenter(region.position);
      setMapZoom(7);
      setSelectedRegion(regionName);
    }
  };

  const clearFilters = () => {
    setSelectedRegion('all');
    setSelectedDifficulty('all');
    setSelectedSpace('all');
    setMapCenter([4.5709, -74.2973]);
    setMapZoom(5);
    setUserLocation(null);
  };
  
  useEffect(() => {
    if (selectedDifficulty === 'all') {
      return;
    }

    const counts: { [key: string]: number } = {};
    REGIONS.forEach(r => {
      counts[r.name] = 0;
    });

    CROP_DATA.forEach(crop => {
      if (crop.difficulty === selectedDifficulty) {
        crop.regions.forEach(regionName => {
          if (counts[regionName] !== undefined) {
            counts[regionName]++;
          }
        });
      }
    });

    let maxCount = -1;
    let mostFrequentRegion = '';

    for (const regionName in counts) {
      if (counts[regionName] > maxCount) {
        maxCount = counts[regionName];
        mostFrequentRegion = regionName;
      }
    }

    if (mostFrequentRegion) {
      const region = REGIONS.find(r => r.name === mostFrequentRegion);
      if (region) {
        setMapCenter(region.position);
        setMapZoom(7);
        setSelectedRegion(region.name);
      }
    }
  }, [selectedDifficulty]);

  const difficultyOrder: Record<Difficulty, number> = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const filteredCrops = useMemo(() => {
    let crops = CROP_DATA;

    if (selectedRegion !== 'all') {
      crops = crops.filter(crop => crop.regions.includes(selectedRegion));
    }
    
    if (selectedDifficulty !== 'all') {
      crops = crops.filter(crop => crop.difficulty === selectedDifficulty);
    }
    
    if (selectedSpace !== 'all') {
      crops = crops.filter(crop => crop.requirements.space === selectedSpace);
    }

    return crops.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }, [selectedRegion, selectedDifficulty, selectedSpace]);
  
  const activeFilters = selectedRegion !== 'all' || selectedDifficulty !== 'all' || selectedSpace !== 'all';
  
  const haversineDistance = (
    coords1: [number, number],
    coords2: [number, number]
  ): number => {
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371; // Earth radius in km
  
    const dLat = toRad(coords2[0] - coords1[0]);
    const dLon = toRad(coords2[1] - coords1[1]);
    const lat1 = toRad(coords1[0]);
    const lat2 = toRad(coords2[0]);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c;
  };

  const findNearestRegion = (userCoords: [number, number]): string => {
    let closestRegion: string = '';
    let minDistance = Infinity;

    REGIONS.forEach(region => {
      const distance = haversineDistance(userCoords, region.position);
      if (distance < minDistance) {
        minDistance = distance;
        closestRegion = region.name;
      }
    });
    return closestRegion;
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: 'Geolocalización no soportada',
        description: 'Tu navegador no permite acceder a la ubicación.',
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const userCoords: [number, number] = [latitude, longitude];
        const nearestRegion = findNearestRegion(userCoords);
        
        toast({
          title: `¡Ubicación encontrada!`,
          description: `La región más cercana a ti es la ${nearestRegion}.`,
        });
        
        setUserLocation(userCoords);
        handleRegionSelect(nearestRegion);
      },
      () => {
        toast({
          variant: 'destructive',
          title: 'Ubicación denegada',
          description: 'No se pudo acceder a tu ubicación. Por favor, revisa los permisos de tu navegador.',
        });
      }
    );
  };
  
  return (
    <TooltipProvider>
      <div className="container mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold font-headline">Mapa Agroclimático de Colombia</h1>
          <p className="text-muted-foreground">
            Usa los filtros o haz clic en los marcadores del mapa para encontrar los cultivos ideales para ti.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
                <CardTitle>Mapa de Colombia</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <ColombiaMap 
                  center={mapCenter}
                  zoom={mapZoom}
                  userLocation={userLocation}
                  onRegionSelect={handleRegionSelect}
              />
            </CardContent>
          </Card>

          <div>
              <div id="crop-list" className="scroll-mt-20 mb-4">
                <h2 className="text-2xl font-bold font-headline mb-4">
                    {selectedRegion !== 'all' ? `Cultivos para la ${selectedRegion}` : 'Explora Nuestros Cultivos'}
                </h2>
                <div className="flex flex-col md:flex-row gap-4 items-center flex-wrap">
                    <Select value={selectedRegion} onValueChange={handleRegionSelect}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filtrar por región" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas las regiones</SelectItem>
                            {REGIONS.map(opt => <SelectItem key={opt.id} value={opt.name}>{opt.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    
                    <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filtrar por dificultad" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Toda dificultad</SelectItem>
                            {DIFFICULTY_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                        </SelectContent>
                    </Select>

                    <Select value={selectedSpace} onValueChange={setSelectedSpace}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filtrar por espacio" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Cualquier espacio</SelectItem>
                             {SPACE_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    
                    <Button variant="outline" onClick={handleLocateMe} className="w-full md:w-auto">
                        <MapPin className="mr-2 h-4 w-4"/>
                        Ubicar Cerca de Mí
                    </Button>
                    
                    {activeFilters && (
                      <Button variant="ghost" onClick={clearFilters} className="w-full md:w-auto text-destructive hover:text-destructive">
                        <X className="mr-2 h-4 w-4"/>
                        Limpiar filtros
                      </Button>
                    )}
                </div>
              </div>
              
              {filteredCrops.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredCrops.map(crop => (
                          <CropCard key={crop.id} crop={crop} />
                      ))}
                  </div>
              ) : (
                  <p className="text-muted-foreground text-center py-10 bg-card rounded-lg">
                      No se encontraron cultivos que coincidan con los filtros seleccionados. Intenta con otras opciones.
                  </p>
              )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
