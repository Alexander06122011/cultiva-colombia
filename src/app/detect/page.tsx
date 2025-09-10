import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadForm } from "./upload-form";

export default function DetectPage() {
  return (
    <div className="container mx-auto max-w-2xl">
      <div className="space-y-2 mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Diagnóstico de Plantas con IA</h1>
        <p className="text-muted-foreground">
          ¿No estás seguro de qué planta es o si está saludable? Sube una foto y deja que nuestra IA te ayude.
        </p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Sube una foto de tu planta</CardTitle>
        </CardHeader>
        <CardContent>
            <UploadForm />
        </CardContent>
      </Card>
    </div>
  );
}
