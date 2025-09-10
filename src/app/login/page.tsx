
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/auth-context';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const loginSchema = z.object({
  email: z.string().email('Correo electrónico inválido.'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres.'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { authEnabled } = useAuth();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
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
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push('/dashboard');
    } catch (error: any) {
      let description = 'Ocurrió un error. Por favor, inténtalo de nuevo.';
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/invalid-credential':
           description = 'El correo o la contraseña no son correctos. Por favor, verifica los datos e inténtalo de nuevo.';
           break;
        case 'auth/invalid-email':
          description = 'El formato del correo electrónico no es válido.';
          break;
        case 'auth/configuration-not-found':
          description = 'Error de configuración de Firebase. Parece que el inicio de sesión por correo electrónico no está habilitado.';
          break;
        default:
          console.error("Firebase login error:", error);
          description = 'Ocurrió un error inesperado. Revisa la consola para más detalles.';
          break;
      }
      toast({
        variant: 'destructive',
        title: 'Error al iniciar sesión',
        description,
      });
      setLoading(false);
    }
  };

  if (!authEnabled) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Función Deshabilitada</CardTitle>
              <CardDescription>
                El inicio de sesión no está disponible en este momento.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Configuración de Firebase Requerida</AlertTitle>
                  <AlertDescription>
                    Para habilitar la autenticación de usuarios, el administrador de la aplicación debe configurar las credenciales de Firebase en el archivo <code>.env</code>.
                  </AlertDescription>
                </Alert>
            </CardContent>
             <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                    <Link href="/">Volver al Inicio</Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
          <CardDescription>Ingresa a tu cuenta para ver tu huerto.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                    ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Ingresando...' : 'Iniciar Sesión'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{' '}
            <Link href="/signup" className="underline">
              Regístrate
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
