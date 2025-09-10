
"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/context/auth-context";
import { getFirebaseAuth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

const getTitle = (pathname: string) => {
    if (pathname.startsWith('/crops/')) return 'Ficha Técnica';
    switch (pathname) {
        case '/dashboard': return 'Mi Huerto';
        case '/map': return 'Mapa de Cultivos';
        case '/recommendation': return 'Recomendador de Cultivos';
        case '/detect': return 'Diagnóstico con IA';
        case '/resources': return 'Recursos Educativos';
        case '/glossary': return 'Glosario';
        case '/settings': return 'Ajustes';
        default: return 'CultivaColombia';
    }
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, authEnabled } = useAuth();
  const title = getTitle(pathname);

  const handleLogout = async () => {
      const auth = getFirebaseAuth();
      if (!auth) return;
      await signOut(auth);
      router.push('/');
  }

  const getInitials = (name?: string | null, email?: string | null) => {
    if (name) {
      return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
    }
    if (email) {
      return email[0].toUpperCase();
    }
    return 'U';
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
       <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold font-headline">{title}</h1>
      </div>
      <div className="flex-1" />
      <div>
        {authEnabled && user ? (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>{getInitials(user.displayName, user.email)}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{user.displayName || 'Usuario'}</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {user.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <Settings className="mr-2 h-4 w-4"/>
                        Ajustes
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4"/>
                        Cerrar sesión
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ) : authEnabled ? (
            <Button variant="outline" onClick={() => router.push('/login')}>
                Iniciar Sesión
            </Button>
        ) : null}
      </div>
    </header>
  );
}
