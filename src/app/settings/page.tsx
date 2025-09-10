
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Loader2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter } from 'next/navigation';

const profileSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function SettingsPage() {
  const { user, updateUserProfile, deleteUserAccount, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [notificationPermission, setNotificationPermission] = useState('default');


  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
        name: user?.displayName || '',
    }
  });

  useEffect(() => {
      if (user) {
          setValue('name', user.displayName || '');
      }
  }, [user, setValue]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [authLoading, user, router]);

  useEffect(() => {
    if ("Notification" in window) {
        setNotificationPermission(Notification.permission);
    }
  }, []);

  if (authLoading || !user) {
    return null; // Or a skeleton loader
  }

  const handleProfileUpdate = async (data: ProfileFormValues) => {
    setLoading(true);
    try {
      await updateUserProfile(data.name);
      toast({
        title: '¡Perfil actualizado!',
        description: 'Tu nombre ha sido cambiado correctamente.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error al actualizar',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
      if (deleteConfirmation !== 'ELIMINAR') {
          toast({
              variant: 'destructive',
              title: 'Confirmación incorrecta',
              description: 'Por favor, escribe "ELIMINAR" para confirmar.',
          });
          return;
      }
    setDeleteLoading(true);
    try {
      await deleteUserAccount();
      toast({
        title: 'Cuenta eliminada',
        description: 'Tu cuenta y todos tus datos han sido eliminados.',
      });
      // No need to redirect here, the auth context will handle it.
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error al eliminar',
        description: error.message,
      });
      setDeleteLoading(false);
    }
  };

  const handleNotificationRequest = async () => {
    if (!("Notification" in window)) {
        toast({ title: "Navegador no compatible", description: "Tu navegador no soporta notificaciones."});
        return;
    }

    if (notificationPermission === 'granted') {
        toast({ title: "Permiso ya concedido", description: "Ya has habilitado las notificaciones."});
        return;
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);

    if (permission === 'granted') {
        toast({ title: "¡Gracias!", description: "Has activado las notificaciones." });
        new Notification("¡Notificaciones activadas!", { body: "Recibirás recordatorios de tus cultivos." });
    } else {
        toast({ title: "Permiso denegado", description: "No enviaremos notificaciones. Puedes cambiar esto en los ajustes de tu navegador." });
    }
  }

  return (
    <div className="container mx-auto max-w-4xl space-y-8">
       <div className="space-y-2">
            <h1 className="text-3xl font-bold font-headline">Ajustes</h1>
            <p className="text-muted-foreground">
            Gestiona la información de tu cuenta y las preferencias de la aplicación.
            </p>
        </div>
        <Separator />
      
      <Card>
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
          <CardDescription>Esta es la información que se mostrará en la aplicación.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" {...register('name')} />
                    {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" value={user.email || ''} disabled />
                     <p className="text-xs text-muted-foreground">El correo electrónico no se puede cambiar.</p>
                </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
                <Button type="submit" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Guardar cambios
                </Button>
            </CardFooter>
        </form>
      </Card>

      <Card>
          <CardHeader>
              <CardTitle>Apariencia</CardTitle>
              <CardDescription>Personaliza cómo se ve la aplicación en tu dispositivo.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
                <Label>Tema</Label>
                <RadioGroup defaultValue={theme} onValueChange={setTheme} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="light" />
                        <Label htmlFor="light">Claro</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="dark" />
                        <Label htmlFor="dark">Oscuro</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="system" id="system" />
                        <Label htmlFor="system">Sistema</Label>
                    </div>
                </RadioGroup>
            </div>
          </CardContent>
      </Card>
      
      <Card>
          <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Gestiona cómo te enviamos notificaciones y recordatorios.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                    <h4 className="font-semibold">Notificaciones Push</h4>
                    <p className="text-sm text-muted-foreground">Recibe recordatorios de riego y cosecha.</p>
                </div>
                <Button 
                    variant="secondary" 
                    onClick={handleNotificationRequest}
                    disabled={notificationPermission === 'granted'}
                >
                    {notificationPermission === 'granted' ? 'Activado' : 'Activar'}
                </Button>
            </div>
          </CardContent>
      </Card>

      <Card className="border-destructive">
          <CardHeader>
              <CardTitle className="text-destructive">Zona de Peligro</CardTitle>
              <CardDescription>Estas acciones no se pueden deshacer. Ten mucho cuidado.</CardDescription>
          </CardHeader>
          <CardContent>
              <AlertDialog>
                  <AlertDialogTrigger asChild>
                      <Button variant="destructive">Eliminar mi cuenta</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                      <AlertDialogHeader>
                          <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                          <AlertDialogDescription>
                              Esta acción es irreversible. Se eliminarán permanentemente tu cuenta y todos los datos asociados, incluyendo tu huerto personalizado.
                          </AlertDialogDescription>
                      </AlertDialogHeader>
                      <div className="space-y-2">
                        <Label htmlFor="delete-confirm">Para confirmar, escribe <strong>ELIMINAR</strong> en el campo de abajo.</Label>
                        <Input
                            id="delete-confirm"
                            value={deleteConfirmation}
                            onChange={(e) => setDeleteConfirmation(e.target.value)}
                        />
                      </div>
                      <AlertDialogFooter>
                          <AlertDialogCancel onClick={() => setDeleteConfirmation('')}>Cancelar</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={handleDeleteAccount} 
                            disabled={deleteLoading || deleteConfirmation !== 'ELIMINAR'} 
                            className="bg-destructive hover:bg-destructive/90"
                          >
                             {deleteLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              Sí, eliminar mi cuenta
                          </AlertDialogAction>
                      </AlertDialogFooter>
                  </AlertDialogContent>
              </AlertDialog>
          </CardContent>
      </Card>
    </div>
  );
}
