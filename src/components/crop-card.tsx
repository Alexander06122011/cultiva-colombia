import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Crop } from "@/types";
import { ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CropCardProps {
  crop: Crop;
  onAddToDashboard?: (id: string) => void;
}

const difficultyMap = {
  easy: { text: 'Fácil', variant: 'default' as const, className: 'bg-green-600 hover:bg-green-700', description: 'Ideal para principiantes. Requiere cuidados básicos y perdona errores.' },
  medium: { text: 'Medio', variant: 'default' as const, className: 'bg-yellow-500 hover:bg-yellow-600', description: 'Necesita algo de atención y conocimientos específicos sobre riego o plagas.' },
  hard: { text: 'Difícil', variant: 'destructive' as const, description: 'Para horticultores con experiencia. Requiere condiciones muy específicas y manejo técnico.' },
};

export function CropCard({ crop, onAddToDashboard }: CropCardProps) {
  const difficulty = difficultyMap[crop.difficulty];

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={crop.imageUrl}
            alt={crop.name}
            fill
            style={{ objectFit: "cover" }}
            data-ai-hint={crop.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start">
            <CardTitle className="text-xl mb-1 font-headline">{crop.name}</CardTitle>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant={difficulty.variant} className={difficulty.className}>{difficulty.text}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{difficulty.description}</p>
              </TooltipContent>
            </Tooltip>
        </div>
        <CardDescription className="line-clamp-3">{crop.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="ghost" size="sm" asChild>
            <Link href={`/crops/${crop.id}`}>Ver Ficha <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        {onAddToDashboard && (
          <Button size="sm" onClick={() => onAddToDashboard(crop.id)}>
            Añadir a mi huerto
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
