
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, ScanLine, ArrowRight, Search } from 'lucide-react';
import { CultivaColombiaIcon } from '@/components/icons';
import { useAuth } from '@/context/auth-context';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <CultivaColombiaIcon className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline tracking-tight text-foreground">
            CultivaColombia
          </span>
        </Link>
        <nav className="flex items-center gap-4">
           {loading ? (
             <div className="flex items-center gap-4">
                <Skeleton className="h-9 w-24 rounded-md" />
                <Skeleton className="h-9 w-28 rounded-md" />
            </div>
           ) : user ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/map">Explorar</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">Mi Huerto</Link>
              </Button>
            </>
           ) : (
             <>
              <Button variant="ghost" asChild>
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Registrarse</Link>
              </Button>
             </>
           )}
        </nav>
      </header>
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4">
            Cultiva con conciencia. Conoce lo que crece en tu tierra
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Tu guía interactiva para cultivar tus propios alimentos en Colombia. Descubre qué sembrar según tu región, aprende a cuidar tus cultivos y únete a una comunidad que cultiva futuro.
          </p>
          <Button size="lg" asChild>
            <Link href="/map#crop-list">
              Explora los cultivos <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>

        <section className="bg-secondary/50 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold">Empieza tu camino</h2>
              <p className="text-muted-foreground mt-2">Herramientas para cada paso de tu aventura agrícola.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Search className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Buscar Cultivos</CardTitle>
                  <CardDescription>Encuentra tu próximo cultivo</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">Explora nuestra base de datos. Filtra por región, clima y dificultad para encontrar la planta perfecta.</p>
                  <Button variant="outline" asChild>
                    <Link href="/map#crop-list">Buscar ahora</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Map className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Mapa Interactivo</CardTitle>
                  <CardDescription>Explora la riqueza de Colombia</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">Descubre qué cultivos son ideales para tu zona agroclimática y aprende sobre sus particularidades.</p>
                  <Button variant="outline" asChild>
                    <Link href="/map">Explorar mapa</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <ScanLine className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Diagnóstico con IA</CardTitle>
                  <CardDescription>¿Tu planta se ve enferma?</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">Sube una foto y nuestra inteligencia artificial te ayudará a identificar la especie y su estado de salud.</p>
                  <Button variant="outline" asChild>
                    <Link href="/detect">Analizar planta</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} CultivaColombia. Un proyecto para la soberanía alimentaria.</p>
      </footer>
    </div>
  );
}
