
"use client";

import { useState, useRef, useMemo, Fragment } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { detectPlantHealth } from "./actions";
import { Loader2, UploadCloud, Leaf, HeartPulse, AlertCircle, X, Lightbulb, Sprout, CheckCircle } from "lucide-react";
import { type DetectPlantHealthOutput } from "@/ai/flows/detect-plant-health";
import { Badge } from "@/components/ui/badge";
import { CROP_DATA } from "@/lib/data";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const renderRecommendations = (text: string) => {
    const parts = text.split(/(\*.*?\*)/g); // Split by bold markers
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }
      return part.split('\n').map((line, i) => (
        <Fragment key={`${index}-${i}`}>
          {line}
          {i < part.split('\n').length - 1 && <br />}
        </Fragment>
      ));
    });
  };

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<DetectPlantHealthOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { addCropToUser, userCrops, user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  
  const clearSelection = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      setError("Por favor, selecciona un archivo primero.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const dataUri = reader.result as string;
      try {
        const res = await detectPlantHealth({ photoDataUri: dataUri });
        setResult(res);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ocurrió un error desconocido.");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const matchingCrop = useMemo(() => {
    if (!result || !result.isPlant) return null;
    return CROP_DATA.find(crop => crop.name.toLowerCase() === result.species.toLowerCase());
  }, [result]);

  const handleAddToDashboard = async () => {
    if (!matchingCrop) return;

    if (!user) {
      router.push('/login');
      return;
    }
    if (userCrops.some(c => c.id === matchingCrop.id)) {
      toast({
        title: "Cultivo ya añadido",
        description: "Este cultivo ya se encuentra en tu huerto.",
      });
      return;
    }
    
    await addCropToUser(matchingCrop.id);
    
    toast({
      title: '¡Cultivo añadido!',
      description: `${matchingCrop.name} ha sido añadido a tu huerto.`,
      action: (
        <div className="p-1 bg-green-500 rounded-full">
          <CheckCircle className="h-5 w-5 text-white" />
        </div>
      ),
    });
  };
  
  const isHealthy = result?.isPlant && result.healthStatus.toLowerCase() === 'saludable';
  const isNotAPlant = result && !result.isPlant;

  return (
    <div className="space-y-6">
      {!preview && (
        <div
          className="flex justify-center items-center flex-col w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadCloud className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-muted-foreground">Haz clic o arrastra una imagen</p>
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}

      {preview && (
        <div className="relative w-full max-w-sm mx-auto">
          <Image
            src={preview}
            alt="Vista previa de la planta"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
           <Button variant="destructive" size="icon" className="absolute -top-3 -right-3 rounded-full h-8 w-8" onClick={clearSelection}>
                <X className="h-4 w-4"/>
                <span className="sr-only">Borrar selección</span>
           </Button>
        </div>
      )}

      {file && (
        <div className="text-center">
            <Button onClick={handleSubmit} disabled={loading} size="lg">
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> <span className="font-bold">Analizando...</span>
                    </>
                ) : (
                    "Analizar Planta"
                )}
            </Button>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle>Resultados del Análisis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Leaf className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">{ isNotAPlant ? "Detección" : "Especie Identificada" }</p>
                <p className="text-lg">{result.species}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <HeartPulse className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Estado de Salud</p>
                <Badge 
                  className={`text-lg px-3 py-1 ${isHealthy ? 'bg-green-600' : isNotAPlant ? 'bg-gray-500' : 'bg-yellow-600'}`}
                >
                  {result.healthStatus}
                </Badge>
              </div>
            </div>
            {result.isPlant && !isHealthy && result.recommendations && (
                <div className="flex items-start gap-3 pt-4 border-t border-primary/20">
                    <Lightbulb className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                        <p className="font-semibold">Recomendaciones</p>
                        <p className="text-sm">{renderRecommendations(result.recommendations)}</p>
                    </div>
                </div>
            )}
            {matchingCrop && (
                <div className="pt-4 border-t border-primary/20">
                    <Button onClick={handleAddToDashboard} className="w-full">
                        <Sprout className="mr-2 h-4 w-4"/>
                        Añadir {matchingCrop.name} a mi huerto
                    </Button>
                </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
