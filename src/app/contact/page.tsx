
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { submitSuggestion } from './actions';
import { Loader2, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  suggestion: z.string().min(10, { message: "Por favor, escribe al menos 10 caracteres." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      suggestion: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const result = await submitSuggestion(data);
      setSuccessMessage(result.thankYouMessage);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error desconocido.");
    } finally {
      setLoading(false);
    }
  };
  
  if (successMessage) {
    return (
        <div className="container mx-auto max-w-2xl">
            <Alert variant="default" className="border-green-500 text-green-700">
              <CheckCircle className="h-4 w-4 !text-green-700" />
              <AlertTitle>¡Gracias por tu sugerencia!</AlertTitle>
              <AlertDescription>
                {successMessage}
              </AlertDescription>
            </Alert>
            <Button variant="link" onClick={() => setSuccessMessage(null)} className="mt-4">Enviar otra sugerencia</Button>
        </div>
    )
  }

  return (
    <div className="container mx-auto max-w-2xl">
        <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
                <MessageSquare className="h-8 w-8 text-primary" />
                Buzón de Sugerencias
            </h1>
            <p className="text-muted-foreground">
                ¿Tienes alguna idea para mejorar CultivaColombia? ¿Encontraste un error? ¡Nos encantaría saberlo! Tu opinión es muy valiosa para nosotros.
            </p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Envíanos tu sugerencia</CardTitle>
          <CardDescription>Tu feedback es anónimo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="suggestion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sugerencia</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Me gustaría que la aplicación tuviera..."
                        className="resize-none"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar Sugerencia
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
