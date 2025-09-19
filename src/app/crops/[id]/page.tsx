
'use client';

import { useParams, useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { CROP_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, Sprout, Sun, Thermometer, Droplets, Ruler, AlertTriangle, Lightbulb, Users, DollarSign, XCircle, Share2, Leaf } from 'lucide-react';
import { GlossaryTerm } from '@/components/glossary-term';
import React from 'react';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from '@/components/ui/table';
import jsPDF from 'jspdf';
import type { Crop, PlantingStep } from '@/types';

const difficultyMap = {
  easy: { text: 'Fácil', className: 'bg-green-600 hover:bg-green-700 text-primary-foreground' },
  medium: { text: 'Medio', className: 'bg-yellow-500 hover:bg-yellow-600 text-primary-foreground' },
  hard: { text: 'Difícil', className: 'bg-red-600 hover:bg-red-700 text-destructive-foreground' },
};

const renderWithGlossary = (text: string) => {
    const regex = /(\b(?:tutor|tutores|NFT \(Nutrient Film Technique\)|mulching|compost|humus de lombriz|rotación de cultivos|hidroponía|sustrato|pH|aporque|semillero)\b)/gi;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;
      const lowerPart = part.toLowerCase();
      
      if (lowerPart === 'tutor' || lowerPart === 'tutores') {
        return <GlossaryTerm key={index} termId="tutor">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'nft (nutrient film technique)') {
          return <GlossaryTerm key={index} termId="nft">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'mulching') {
          return <GlossaryTerm key={index} termId="mulching">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'compost') {
        return <GlossaryTerm key={index} termId="compost">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'humus de lombriz') {
        return <GlossaryTerm key={index} termId="humus-lombriz">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'rotación de cultivos') {
        return <GlossaryTerm key={index} termId="rotacion-cultivos">{part}</GlossaryTerm>;
      }
       if (lowerPart === 'hidroponía') {
        return <GlossaryTerm key={index} termId="hidroponia">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'sustrato') {
        return <GlossaryTerm key={index} termId="sustrato">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'ph') {
        return <GlossaryTerm key={index} termId="ph">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'aporque') {
        return <GlossaryTerm key={index} termId="aporque">{part}</GlossaryTerm>;
      }
      if (lowerPart === 'semillero') {
        return <GlossaryTerm key={index} termId="semillero">{part}</GlossaryTerm>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }).filter(Boolean);
  };


export default function CropDetailPage() {
  const params = useParams<{ id: string }>();
  const crop = CROP_DATA.find((c) => c.id === params.id);
  const router = useRouter();
  const { toast } = useToast();
  const { user, userCrops, addCropToUser } = useAuth();
  
  const spaceMap: Record<Crop['requirements']['space'], string> = {
    pot: 'Maceta',
    garden: 'Huerto/Jardín',
    patio: 'Patio grande'
  };

  if (!crop) {
    notFound();
  }

  const handleAddToDashboard = async () => {
    if (!user) {
        router.push('/login');
        return;
    }
    if (userCrops.some(c => c.id === crop.id)) {
      toast({
        title: 'Cultivo ya añadido',
        description: 'Este cultivo ya se encuentra en tu huerto.',
      });
      return;
    }
    
    await addCropToUser(crop.id);
    
    toast({
      title: '¡Cultivo añadido!',
      description: `${crop.name} ha sido añadido a tu huerto.`,
      action: (
        <div className="p-1 bg-green-500 rounded-full">
          <CheckCircle className="h-5 w-5 text-white" />
        </div>
      ),
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: '¡Enlace copiado!',
      description: 'El enlace a esta página ha sido copiado al portapapeles.',
    });
  };
  
  const handleDownloadPdf = async () => {
    const doc = new jsPDF();
    const margin = 15;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;
    const lineHeight = 5;

    // --- Colores ---
    const primaryColor = '#6AB04C';
    const textColor = '#333333';
    const lightGray = '#F3F4F6';

    const checkPageBreak = (spaceNeeded: number) => {
      if (y + spaceNeeded > doc.internal.pageSize.getHeight() - margin - 15) {
        doc.addPage();
        y = margin;
      }
    };
    
    // --- Helper para dibujar texto con auto-wrap ---
    const addWrappedText = (text: string, x: number, currentY: number, maxWidth: number) => {
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, currentY);
        return currentY + lines.length * lineHeight;
    };
    
    // --- Helper para dibujar una sección con fondo tipo "Card" ---
    const addSection = (title: string, contentFn: (doc: jsPDF, startY: number) => number) => {
        checkPageBreak(30);
        
        const sectionStartY = y;
        let tempY = y + 22; // Start content y
        
        // Render content once off-screen to calculate height
        const dummyDoc = new jsPDF();
        const contentEndY = contentFn(dummyDoc, tempY);
        const contentHeight = contentEndY - tempY;
        const totalSectionHeight = contentHeight + 25; 

        checkPageBreak(totalSectionHeight);
        
        doc.setFillColor(lightGray);
        doc.rect(margin, y, contentWidth, totalSectionHeight, 'F');
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(primaryColor);
        doc.text(title, margin + 5, y + 12);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(textColor);
        y = contentFn(doc, y + 22);

        y = sectionStartY + totalSectionHeight + 10;
    };

    // --- Título y Descripción Principal ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(textColor);
    doc.text(crop.name, margin, y);
    y += 8;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(14);
    doc.text(crop.species, margin, y);
    y += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    y = addWrappedText(crop.description, margin, y, contentWidth) + 5;
    
    checkPageBreak(10);
    doc.setTextColor('#0000FF');
    doc.setFontSize(10);
    doc.textWithLink('Ver ficha online', margin, y, { url: window.location.href });
    doc.setTextColor(textColor);
    y += 10;


    // --- Secciones ---

    addSection('Requerimientos Técnicos', (doc, startY) => {
        let currentY = startY;
        const reqs = [
            `Riego: ${crop.requirements.irrigation}`,
            `Clima: ${crop.requirements.climate}`,
            `Espacio: ${spaceMap[crop.requirements.space]}`,
            `Fertilizantes: ${crop.requirements.fertilizers}`,
            `Plagas Comunes: ${crop.requirements.pests}`,
        ];
        reqs.forEach(req => {
            const lines = doc.splitTextToSize(`• ${req}`, contentWidth - 15);
            doc.text(lines, margin + 10, currentY);
            currentY += lines.length * lineHeight + 2;
        });
        return currentY;
    });

    addSection('Ciclo de Vida', (doc, startY) => {
        let currentY = startY;
        const lifeCycleItems = [
            { title: 'Siembra:', text: crop.lifeCycle.planting },
            { title: 'Crecimiento:', text: crop.lifeCycle.growth },
            { title: 'Cosecha:', text: crop.lifeCycle.harvest },
        ];
        lifeCycleItems.forEach(item => {
            doc.setFont('helvetica', 'bold');
            doc.text(item.title, margin + 10, currentY);
            doc.setFont('helvetica', 'normal');
            const textLines = doc.splitTextToSize(item.text, contentWidth - 40);
            doc.text(textLines, margin + 10 + 25, currentY);
            currentY += textLines.length * lineHeight + 4;
        });
        return currentY;
    });
    
    addSection('Guía de Siembra', (doc, startY) => {
        let currentY = startY;
        const addGuide = (title: string, steps: PlantingStep[]) => {
            if (!steps || steps.length === 0) return;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.text(title, margin + 10, currentY);
            currentY += lineHeight + 2;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            steps.forEach(step => {
                const stepText = `- ${step.text}`;
                const lines = doc.splitTextToSize(stepText, contentWidth - 20);
                doc.text(lines, margin + 15, currentY);
                currentY += lines.length * lineHeight + 2;
            });
            currentY += 5;
        };

        addGuide('En Maceta', crop.plantingGuide.pot);
        addGuide('En Suelo', crop.plantingGuide.soil);
        addGuide('En Hidroponía', crop.plantingGuide.hydroponics);
        return currentY;
    });

    addSection('Costos Aproximados', (doc, startY) => {
        let currentY = startY;
        doc.text(`Rango de costo: ${crop.costs.range}`, margin + 10, currentY);
        currentY += lineHeight + 5;
        
        // Table Header
        const tableColWidths = [contentWidth * 0.6, contentWidth * 0.4];
        const tableX = margin + 5;
        doc.setFillColor(primaryColor);
        doc.rect(tableX, currentY, contentWidth - 10, 8, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setTextColor('#FFFFFF');
        doc.text('Insumo', tableX + 2, currentY + 6);
        doc.text('Precio (COP)', tableX + tableColWidths[0] + 2, currentY + 6);
        currentY += 8;
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(textColor);
        crop.costs.items.forEach((item, index) => {
            const isEven = index % 2 === 0;
            const itemLines = doc.splitTextToSize(item.item, tableColWidths[0] - 4);
            const priceLines = doc.splitTextToSize(item.price, tableColWidths[1] - 4);
            const rowHeight = Math.max(itemLines.length, priceLines.length) * lineHeight + 4;
            
            doc.setFillColor(isEven ? '#FFFFFF' : lightGray);
            doc.rect(tableX, currentY, contentWidth - 10, rowHeight, 'F');
            doc.text(itemLines, tableX + 2, currentY + lineHeight + 1);
            doc.text(priceLines, tableX + tableColWidths[0] + 2, currentY + lineHeight + 1);
            currentY += rowHeight;
        });

        if (crop.costs.note) {
            currentY += 5;
            doc.setFont('helvetica', 'italic');
            doc.text(`Nota: ${crop.costs.note}`, tableX, currentY);
            currentY += lineHeight;
        }
        return currentY;
    });

    // --- FOOTER ---
    const pageCount = doc.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150);
        const footerText = `Página ${i} de ${pageCount} | Generado desde CultivaColombia`;
        doc.text(footerText, margin, doc.internal.pageSize.getHeight() - 10);
    }

    doc.save(`Ficha_Tecnica_${crop.name.replace(/\s/g, '_')}.pdf`);
  };

  const difficulty = difficultyMap[crop.difficulty];

  const renderPlantingGuide = (steps: typeof crop.plantingGuide.pot) => {
    return (
      <ul className="list-disc pl-5 space-y-4">
        {steps.map((step, i) => (
          <li key={i}>
            {renderWithGlossary(step.text)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl space-y-8">
      <Card className="overflow-hidden">
        <div className="relative h-64 md:h-80 w-full bg-secondary">
          {/* Image removed */}
        </div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-headline">{crop.name}</CardTitle>
            <Badge className={difficulty.className}>{difficulty.text}</Badge>
          </div>
          <p className="text-muted-foreground italic">{crop.species}</p>
        </CardHeader>
        <CardContent>
          <p>{crop.description}</p>
          <Button className="w-full mt-4" onClick={handleAddToDashboard}>Añadir a mi huerto</Button>
          <div className="flex gap-2 mt-2">
            <Button variant="outline" className="w-full" onClick={handleShare}><Share2 className="mr-2 h-4 w-4" /> Compartir</Button>
            <Button variant="outline" className="w-full" onClick={handleDownloadPdf}><Download className="mr-2 h-4 w-4" /> PDF</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sprout className="text-primary"/> Ciclo de Vida</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4 divide-y divide-border/60">
            <li className="pt-4 first:pt-0">
              <strong className="font-semibold text-card-foreground block">Siembra</strong>
              <p className="text-sm text-muted-foreground">{crop.lifeCycle.planting}</p>
            </li>
            <li className="pt-4">
              <strong className="font-semibold text-card-foreground block">Crecimiento</strong>
              <p className="text-sm text-muted-foreground">{crop.lifeCycle.growth}</p>
            </li>
            <li className="pt-4">
              <strong className="font-semibold text-card-foreground block">Cosecha</strong>
              <p className="text-sm text-muted-foreground">{crop.lifeCycle.harvest}</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sun className="text-accent"/> Requerimientos Técnicos</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3"><Droplets className="text-accent mt-1 h-5 w-5 shrink-0" /><div><strong className="block">Riego:</strong> {crop.requirements.irrigation}</div></div>
          <div className="flex items-start gap-3"><Thermometer className="text-accent mt-1 h-5 w-5 shrink-0" /><div><strong className="block">Clima:</strong> {crop.requirements.climate}</div></div>
          <div className="flex items-start gap-3"><Ruler className="text-accent mt-1 h-5 w-5 shrink-0" /><div><strong className="block">Espacio:</strong> {spaceMap[crop.requirements.space]}</div></div>
          <div className="flex items-start gap-3"><Users className="text-accent mt-1 h-5 w-5 shrink-0" /><div><strong className="block">Fertilizantes:</strong> {renderWithGlossary(crop.requirements.fertilizers)}</div></div>
          <div className="flex items-start gap-3 md:col-span-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1 h-5 w-5 shrink-0"><path d="M15 6.202a2 2 0 0 1 3.464 0l6.062 10.5a2 2 0 0 1-1.732 3H1.196a2 2 0 0 1-1.732-3L5.526 6.202a2 2 0 0 1 3.464 0L12 12.002l3-5.8z" /><path d="m12 12 3 5.8" /><path d="M12 17.8v-5.8" /><path d="m10.062 14.5 3.464-6" /></svg><div><strong className="block">Plagas Comunes:</strong> {crop.requirements.pests}</div></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Guía de Siembra</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="pot">
            <AccordionItem value="pot">
              <AccordionTrigger>En Maceta</AccordionTrigger>
              <AccordionContent>
                {renderPlantingGuide(crop.plantingGuide.pot)}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="soil">
              <AccordionTrigger>En Suelo</AccordionTrigger>
              <AccordionContent>
                {renderPlantingGuide(crop.plantingGuide.soil)}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hydroponics">
              <AccordionTrigger>En Hidroponía</AccordionTrigger>
              <AccordionContent>
                {renderPlantingGuide(crop.plantingGuide.hydroponics)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Compatibilidad</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {crop.compatibility.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
            </div>
            <p className="text-xs text-muted-foreground mt-3">Estas plantas se benefician mutuamente cuando se siembran cerca (asociación de cultivos).</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><XCircle className="text-destructive"/> Incompatibilidad</CardTitle></CardHeader>
          <CardContent>
              <div className="flex flex-wrap gap-2">
                  {crop.incompatibility.map(item => <Badge key={item} variant="destructive" className='bg-destructive/80'>{item}</Badge>)}
              </div>
              <p className="text-xs text-muted-foreground mt-3">Evita sembrar estas plantas juntas, ya que pueden competir o afectarse negativamente.</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><DollarSign className="text-primary"/> Costos Aproximados</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='text-sm text-muted-foreground mb-4'>Rango de costo: <Badge variant="secondary">{crop.costs.range}</Badge></div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Insumo</TableHead>
                        <TableHead className="text-right">Precio (COP)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {crop.costs.items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.item}</TableCell>
                            <TableCell className="text-right">{item.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {crop.costs.note && <p className="text-xs text-muted-foreground mt-4"><strong>Nota:</strong> {crop.costs.note}</p>}
        </CardContent>
      </Card>

      <Card className="border-accent bg-accent/10">
        <CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="text-accent"/> Cuidados y Advertencias</CardTitle></CardHeader>
        <CardContent><p>{renderWithGlossary(crop.warnings)}</p></CardContent>
      </Card>

      <Card className="border-primary bg-primary/10">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="text-primary"/> Recomendaciones Finales</CardTitle></CardHeader>
        <CardContent><p>{crop.recommendations}</p></CardContent>
      </Card>
    </div>
  );
}

    
