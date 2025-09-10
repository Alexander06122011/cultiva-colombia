
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import type { Crop, UserCrop } from '@/types';
import { addDays, differenceInDays, format } from 'date-fns';
import { Play, Pause, RefreshCw, Trash2, CalendarDays, ExternalLink, Leaf, Save } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type UserCropWithData = Crop & UserCrop & { progress: number };

interface ProgressModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    crop: UserCropWithData;
}

export function ProgressModal({ isOpen, setIsOpen, crop: initialCrop }: ProgressModalProps) {
    const { removeCropFromUser, updateCropStatus, restartCropProgress, userCrops, updateCropNotes } = useAuth();
    const { toast } = useToast();
    
    const [crop, setCrop] = useState(initialCrop);
    const [notes, setNotes] = useState(initialCrop.notes || '');
    const [isNotesDirty, setIsNotesDirty] = useState(false);

    const calculateProgress = (userCrop: UserCrop, cropData: Crop) => {
        if (userCrop.status === 'paused') {
            const plantingDate = new Date(userCrop.addedDate);
            const today = new Date();
            const daysSincePlanting = differenceInDays(today, plantingDate);
            if (cropData.lifeCycle.totalDays > 0) {
              return Math.min(100, Math.floor((daysSincePlanting / cropData.lifeCycle.totalDays) * 100));
            }
            return 0;
        }
        
        const plantingDate = new Date(userCrop.addedDate);
        const today = new Date();
        const daysSincePlanting = differenceInDays(today, plantingDate);
        
        if (cropData.lifeCycle.totalDays > 0) {
          return Math.min(100, Math.floor((daysSincePlanting / cropData.lifeCycle.totalDays) * 100));
        }
        return 0;
    };

    useEffect(() => {
        const updatedUserCrop = userCrops.find(c => c.id === initialCrop.id);
        if (updatedUserCrop) {
            const progress = calculateProgress(updatedUserCrop, initialCrop);
            const newCropData = { ...initialCrop, ...updatedUserCrop, progress };
            setCrop(newCropData);
            setNotes(newCropData.notes || '');
            setIsNotesDirty(false);
        }
    }, [userCrops, initialCrop, isOpen]);

    const plantingDate = new Date(crop.addedDate);
    const harvestDate = addDays(plantingDate, crop.lifeCycle.totalDays);

    const handleRemove = async () => {
        setIsOpen(false); 
        await removeCropFromUser(crop.id);
        toast({
            title: "Cultivo eliminado",
            description: "Se ha quitado el cultivo de tu huerto.",
        });
    };

    const handleTogglePause = async () => {
        const newStatus = crop.status === 'active' ? 'paused' : 'active';
        await updateCropStatus(crop.id, newStatus);
        toast({
            title: `Cultivo ${newStatus === 'active' ? 'reanudado' : 'pausado'}`,
            description: `El seguimiento de tu cultivo ha sido ${newStatus === 'active' ? 'reanudado' : 'pausado'}.`,
        });
    };

    const handleRestart = async () => {
        await restartCropProgress(crop.id);
        toast({
            title: "Progreso reiniciado",
            description: "El seguimiento de tu cultivo ha comenzado desde cero.",
        });
    };

    const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(e.target.value);
        setIsNotesDirty(true);
    }

    const handleSaveNotes = async () => {
        await updateCropNotes(crop.id, notes);
        setIsNotesDirty(false);
        toast({
            title: "Notas guardadas",
            description: "Tus apuntes han sido guardados correctamente.",
        });
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-4xl p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Columna Izquierda */}
                    <div className="p-6 flex flex-col bg-muted/30">
                         <DialogHeader className="mb-4">
                            <DialogTitle className="font-headline text-3xl flex items-center gap-3">
                                <Leaf className="text-primary"/>{crop.name}
                            </DialogTitle>
                        </DialogHeader>
                        <Card className="overflow-hidden mb-4">
                             <div className="relative h-48 w-full">
                                <Image
                                    src={crop.imageUrl}
                                    alt={crop.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    data-ai-hint={crop.imageHint}
                                />
                            </div>
                            <CardContent className="p-4">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Progreso a la cosecha: {crop.progress}%</p>
                                    <Progress value={crop.progress} className="h-2" />
                                </div>
                            </CardContent>
                        </Card>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <CalendarDays className="h-5 w-5 text-primary"/>
                                <div>
                                    <span className="font-semibold">Fecha de Siembra:</span> {format(plantingDate, 'dd/MM/yyyy')}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <CalendarDays className="h-5 w-5 text-primary"/>
                                <div>
                                    <span className="font-semibold">Cosecha Estimada:</span> {format(harvestDate, 'dd/MM/yyyy')}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Columna Derecha */}
                    <div className="p-6 flex flex-col">
                        <Card>
                            <CardContent className="p-2">
                                <Calendar
                                    mode="range"
                                    selected={{ from: plantingDate, to: harvestDate }}
                                    modifiers={{ today: new Date() }}
                                    modifiersClassNames={{ today: 'bg-accent text-accent-foreground rounded-full' }}
                                    className="p-0"
                                    classNames={{
                                        day_range_start: 'bg-primary text-primary-foreground rounded-l-full',
                                        day_range_end: 'bg-primary text-primary-foreground rounded-r-full',
                                        day_range_middle: 'bg-primary/20 rounded-none',
                                    }}
                                />
                            </CardContent>
                        </Card>
                        
                        <div className="flex-grow flex flex-col justify-end mt-4 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="notes">Mis Notas</Label>
                                <Textarea id="notes" placeholder="Añade aquí tus apuntes sobre el riego, abono, plagas, etc." value={notes} onChange={handleNotesChange} />
                                {isNotesDirty && <Button onClick={handleSaveNotes} size="sm"><Save className="mr-2 h-4 w-4" />Guardar Notas</Button>}
                            </div>
                            <DialogFooter className="flex-col gap-2">
                                <Button variant="outline" asChild className="w-full">
                                    <Link href={`/crops/${crop.id}`} target="_blank">Ver Ficha Técnica <ExternalLink className="ml-2 h-4 w-4"/></Link>
                                </Button>
                                 <div className="flex gap-2 w-full">
                                    <Button variant="secondary" onClick={handleTogglePause} className="flex-1">
                                        {crop.status === 'active' ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                                        {crop.status === 'active' ? 'Pausar' : 'Reanudar'}
                                    </Button>
                                    <Button variant="secondary" onClick={handleRestart} disabled={crop.status !== 'paused'} className="flex-1">
                                        <RefreshCw className="h-4 w-4 mr-2" />
                                        Reiniciar
                                    </Button>
                                    <Button variant="destructive" onClick={handleRemove} className="flex-1">
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Eliminar
                                    </Button>
                                </div>
                            </DialogFooter>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
