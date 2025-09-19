
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GLOSSARY_DATA } from '@/lib/glossary';
import { BookOpen } from 'lucide-react';

export default function GlossaryPage() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Glosario de Términos
        </h1>
        <p className="text-muted-foreground">
          Aquí encontrarás definiciones de términos comunes en la agricultura y jardinería para ayudarte en tu camino.
        </p>
      </div>

      <div className="grid gap-6">
        {GLOSSARY_DATA.map((term) => (
          <Card key={term.id} className="flex flex-col md:flex-row overflow-hidden w-full">
            <div className="md:w-full">
              <CardHeader>
                <CardTitle>{term.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{term.definition}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
