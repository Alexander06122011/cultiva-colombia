
'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { REGIONS } from '@/lib/data';

interface ColombiaMapProps {
    center: [number, number];
    zoom: number;
    userLocation?: [number, number] | null;
    onRegionSelect?: (regionName: string) => void;
}

// Custom Icon for Region Markers
const regionIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export function ColombiaMap({ center, zoom, userLocation, onRegionSelect }: ColombiaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  
  const userLocationIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Initialize map
  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      const southWest = L.latLng(-4.225, -81.749);
      const northEast = L.latLng(13.383, -66.869);
      const bounds = L.latLngBounds(southWest, northEast);

      const standardMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });
      
      mapInstance.current = L.map(mapRef.current, {
        center: center,
        zoom: zoom,
        maxBounds: bounds,
        minZoom: 5,
        layers: [standardMap]
      });

      // Add region markers
      REGIONS.forEach(region => {
        const marker = L.marker(region.position, { icon: regionIcon })
          .addTo(mapInstance.current!)
          .bindPopup(`<b>${region.name}</b>`);
        
        if (onRegionSelect) {
            marker.on('click', () => {
                onRegionSelect(region.name);
            });
        }
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pan and zoom map
  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.flyTo(center, zoom, {
        duration: 1.5
      });
    }
  }, [center, zoom]);

  // Handle user location marker
  useEffect(() => {
    if (mapInstance.current) {
      // Remove existing marker if it's there
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }
      
      // Add new marker if userLocation is provided
      if (userLocation) {
        userMarkerRef.current = L.marker(userLocation, { icon: userLocationIcon })
          .addTo(mapInstance.current)
          .bindPopup("<b>Tu ubicación</b>")
          .openPopup();
      }
    }
  }, [userLocation, userLocationIcon]);


  return <div ref={mapRef} style={{ height: '500px', width: '100%', borderRadius: '0.5rem', zIndex: 0 }} />;
}
