
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendPasswordResetEmail } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Por favor, ingresa un correo electrónico válido.' }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const { authEnabled } = useAuth();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setLoading(true);
    const auth = getFirebaseAuth();
    if (!auth) {
        toast({
            variant: 'destructive',
            title: 'Error de configuración',
            description: 'La autenticación de Firebase no está habilitada.',
        });
        setLoading(false);
        return;
    }
    try {
      await sendPasswordResetEmail(auth, data.email);
      setSubmitted(true);
    } catch (error: any) {
        console.error("Firebase password reset error:", error);
        // Prevent user enumeration by showing success message even for 'user-not-found'.
        if (error.code === 'auth/user-not-found') {
             setSubmitted(true);
        } else {
             toast({
              variant: 'destructive',
              title: 'Error al enviar el correo',
              description: error.message || 'Ocurrió un error inesperado. Por favor, inténtalo más tarde.',
            });
        }
    } finally {
      setLoading(false);
    }
  };
  
  if (!authEnabled) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Función Deshabilitada</CardTitle>
            </CardHeader>
            <CardContent>
               <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Configuración de Firebase Requerida</AlertTitle>

                  <AlertDescription>
                    Esta función requiere credenciales de Firebase para enviar correos electrónicos.
                  </AlertDescription>
                </Alert>
            </CardContent>
             <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                    <Link href="/login">Volver a Iniciar Sesión</Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      )
  }

  if (submitted) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Revisa tu correo</CardTitle>
                <CardDescription>
                  Si la dirección <span className="font-semibold">{getValues("email")}</span> está registrada, recibirás un enlace para restablecer tu contraseña.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Si no lo ves, revisa tu carpeta de spam.
                </p>
            </CardContent>
            <CardFooter>
                 <Button asChild className="w-full">
                    <Link href="/login">Volver a Iniciar Sesión</Link>
                </Button>
            </CardFooter>
            </Card>
        </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>¿Olvidaste tu contraseña?</CardTitle>
          <CardDescription>No te preocupes. Ingresa tu correo y te enviaremos un enlace para recuperarla.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</> : 'Enviar enlace de recuperación'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
             <Button variant="link" asChild>
                <Link href="/login">Volver a Iniciar Sesión</Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
