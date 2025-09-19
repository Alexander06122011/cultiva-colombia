
"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { CROP_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ProgressModal } from "./progress-modal";
import type { UserCrop } from "@/types";
import type { Crop } from "@/types";

type UserCropWithData = Crop & UserCrop & { progress: number };

export default function DashboardPage() {
  const { user, userCrops, loading, authEnabled } = useAuth();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState<UserCropWithData | null>(null);

  useEffect(() => {
    if (authEnabled && !loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router, authEnabled]);
  
  const calculateProgress = (userCrop: UserCrop, cropData: Crop) => {
    if (userCrop.status === 'paused') return cropData.progress;
    
    const plantingDate = new Date(userCrop.addedDate);
    const today = new Date();
    const daysSincePlanting = Math.floor((today.getTime() - plantingDate.getTime()) / (1000 * 3600 * 24));
    
    if (cropData.lifeCycle.totalDays > 0) {
      return Math.min(100, Math.floor((daysSincePlanting / cropData.lifeCycle.totalDays) * 100));
    }
    return 0;
  };

  const myCrops: UserCropWithData[] = userCrops.map(userCrop => {
      const cropData = CROP_DATA.find(c => c.id === userCrop.id);
      if (!cropData) return null;
      
      const progress = calculateProgress(userCrop, { ...cropData, ...userCrop });

      return {
          ...cropData,
          ...userCrop,
          progress,
      };
  }).filter((c): c is UserCropWithData => c !== null);

  const handleOpenModal = (crop: UserCropWithData) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };
  
  if (loading) {
    return null;
  }

  if (authEnabled && !user) {
    return null;
  }

  return (
    <TooltipProvider>
      <div className="container mx-auto">
        {myCrops.length > 0 ? (
          <>
          <p className="mb-6 text-muted-foreground">
              Estos son los cultivos que has añadido para seguimiento. ¡Gestiona su progreso y recibe recordatorios!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myCrops.map((crop) => (
              <Card key={crop.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                <CardHeader className="p-0 relative">
                  <Link href={`/crops/${crop.id}`}>
                    <div className="relative h-40 w-full bg-secondary" />
                  </Link>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col">
                    <CardTitle className="font-bold font-headline text-lg">{crop.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                        <Badge variant={crop.status === 'active' ? 'default' : 'secondary'} className={crop.status === 'active' ? 'bg-green-600' : ''}>
                           {crop.status === 'active' ? 'Activo' : 'Pausado'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{crop.progress}% completado</span>
                    </div>
                    <Progress value={crop.progress} className="mt-2 h-2" />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                   <Button variant="outline" className="w-full" onClick={() => handleOpenModal(crop)}>
                      Gestionar Progreso
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20 bg-card rounded-lg">
            <Sprout className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-2xl font-bold font-headline mb-2">Tu huerto está esperando</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Aún no has añadido ningún cultivo. Empieza por encontrar tu cultivo ideal o explora nuestro mapa interactivo.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/recommendation">Encontrar cultivo</Link>
              </Button>
              <Button variant="secondary" asChild>
                  <Link href="/map">Explorar mapa</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      {selectedCrop && (
        <ProgressModal 
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            crop={selectedCrop}
        />
      )}
    </TooltipProvider>
  );
}
