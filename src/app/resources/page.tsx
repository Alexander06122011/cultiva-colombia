
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/auth-context';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, PencilRuler, Microscope, BookCopy, Users, Leaf, Download, Gamepad2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import type { jsPDF } from 'jspdf';

type Resource = {
  title: string;
  description: string;
  icon: React.ElementType;
  actionText: string;
  href?: string;
  id: string;
};

const teacherResources: Resource[] = [
  {
    id: 'teacher-guide',
    title: 'Guía del Docente: El Huerto Escolar',
    description: 'Un plan de estudios completo para integrar el huerto en el aula, con objetivos de aprendizaje, cronogramas y evaluación.',
    icon: BookCopy,
    actionText: 'Descargar Guía',
  },
  {
    id: 'teacher-germination',
    title: 'Proyecto: La Germinación',
    description: 'Una actividad práctica paso a paso para que los estudiantes observen el milagro de la germinación con frijoles o lentejas.',
    icon: Microscope,
    actionText: 'Descargar Actividad',
  },
  {
    id: 'teacher-template',
    title: 'Plantilla: Diario de un Cultivo',
    description: 'Un formato para que los alumnos documenten el crecimiento de su planta, registrando riegos, altura y observaciones.',
    icon: FileText,
    actionText: 'Descargar Plantilla',
  },
];

const studentResources: Resource[] = [
  {
    id: 'student-pests',
    title: 'Reto: Identifica 5 Plagas Comunes',
    description: 'Aprende a reconocer a los pequeños invasores de tu huerto y cómo manejarlos de forma orgánica. ¿Puedes encontrarlos todos?',
    icon: Leaf,
    actionText: 'Descargar Reto',
  },
  {
    id: 'student-experiment',
    title: 'Experimento: ¿Cuánta agua necesita mi lechuga?',
    description: 'Descubre la importancia del riego. Sigue esta guía para entender cuánta agua es mucha y cuánta es poca.',
    icon: PencilRuler,
    actionText: 'Ver Experimento',
  },
  {
    id: 'student-game',
    title: 'Juego: El Ciclo de Vida del Tomate',
    description: 'Un juego interactivo para aprender todas las etapas por las que pasa un tomate, desde la semilla hasta tu plato.',
    icon: Gamepad2,
    actionText: 'Jugar Ahora',
    href: '#'
  },
];

const enthusiastResources: Resource[] = [
  {
    id: 'enthusiast-compost',
    title: 'Guía Avanzada de Compostaje',
    description: 'Perfecciona tu técnica de compostaje. Aprende sobre la relación carbono-nitrógeno, aireación y cómo acelerar el proceso.',
    icon: BookCopy,
    actionText: 'Descargar Guía',
  },
  {
    id: 'enthusiast-seedbeds',
    title: 'Técnica: Cómo hacer tus propios semilleros',
    description: 'Ahorra dinero y reduce el plástico creando tus propios semilleros biodegradables con materiales que ya tienes en casa.',
    icon: PencilRuler,
    actionText: 'Descargar Técnica',
  },
  {
    id: 'enthusiast-vertical',
    title: 'Consejo Pro: Maximizando el espacio vertical',
    description: 'Aprovecha cada centímetro de tu balcón o patio con técnicas de cultivo vertical para hierbas, fresas y más.',
    icon: Leaf,
    actionText: 'Aprender Más',
  },
];

// --- Helper Functions for PDF Generation ---
const addWrappedText = (doc: jsPDF, text: string, x: number, y: number, maxWidth: number, lineHeight: number = 5) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * lineHeight;
};

const addSectionTitle = (doc: jsPDF, title: string, y: number, margin: number) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(title, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    return y + 10;
};

const checkAndAddPage = (doc: jsPDF, y: number, spaceNeeded: number = 20, margin: number = 20) => {
    if (y > doc.internal.pageSize.getHeight() - margin - spaceNeeded) {
        doc.addPage();
        return margin;
    }
    return y;
};


// --- Specific PDF Generation Functions ---

const generateTeacherGuidePdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Guía del Docente: El Huerto Escolar', margin, y);
    y += 15;

    y = addSectionTitle(doc, '1. Introducción', y, margin);
    y += addWrappedText(doc, 'Este documento es una guía para ayudar a los docentes a integrar un huerto escolar en su currículo. El huerto es un laboratorio vivo que ofrece oportunidades de aprendizaje interdisciplinario, conectando a los estudiantes con la naturaleza y la producción de alimentos.', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, '2. Objetivos de Aprendizaje', y, margin);
    y += addWrappedText(doc, '• Cognitivos: Entender el ciclo de vida de las plantas, la importancia de la luz solar, el agua y los nutrientes. Identificar diferentes hortalizas y sus partes.', margin, y, contentWidth);
    y += addWrappedText(doc, '• Prácticos: Aprender a preparar la tierra, sembrar, regar, cuidar y cosechar. Desarrollar habilidades de observación y registro de datos.', margin, y, contentWidth);
    y += addWrappedText(doc, '• Actitudinales: Fomentar la paciencia, la responsabilidad, el trabajo en equipo y el respeto por el medio ambiente.', margin, y, contentWidth);
    y += 10;

    y = checkAndAddPage(doc, y, 40);
    y = addSectionTitle(doc, '3. Cronograma Sugerido (Ejemplo 12 semanas)', y, margin);
    y += addWrappedText(doc, '• Semana 1-2: Planificación. Diseño del huerto, selección de cultivos. Preparación del terreno o macetas, enriquecimiento con compost.', margin, y, contentWidth);
    y += addWrappedText(doc, '• Semana 3-4: Siembra. Siembra directa de algunos cultivos (rábano, cilantro) y siembra en semilleros de otros (tomate, pimentón).', margin, y, contentWidth);
    y += addWrappedText(doc, '• Semana 5-8: Mantenimiento. Riego, deshierbe, monitoreo de plagas, trasplante de plántulas de semilleros al huerto.', margin, y, contentWidth);
    y += addWrappedText(doc, '• Semana 9-12: Cosecha y Cierre. Cosecha escalonada, degustación, preparación de una receta simple. Reflexión sobre el proceso.', margin, y, contentWidth);

    y = checkAndAddPage(doc, y, 30);
    y = addSectionTitle(doc, '4. Evaluación Sugerida', y, margin);
    y += addWrappedText(doc, '• Diario de Cultivo: Evaluar los registros de los estudiantes.\n• Observación directa: Participación, trabajo en equipo y cuidado de las plantas.\n• Presentación final: Pequeño proyecto sobre un cultivo investigado.', margin, y, contentWidth);

    doc.save('Guia_del_Docente.pdf');
}

const generateGerminationProjectPdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Actividad: El Milagro de la Germinación', margin, y);
    y += 15;

    y = addSectionTitle(doc, 'Materiales', y, margin);
    y += addWrappedText(doc, '• Un frasco de vidrio transparente.\n• Servilletas de papel o algodón.\n• Granos de frijol o lenteja (déjalos remojando en agua la noche anterior).\n• Agua.', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, 'Procedimiento', y, margin);
    y += addWrappedText(doc, '1. Humedece las servilletas de papel o el algodón y colócalas dentro del frasco, pegadas a la pared.\n2. Coloca 2 o 3 frijoles entre el vidrio y el papel húmedo, para que puedas verlos.\n3. Asegúrate de que el papel se mantenga húmedo, pero sin que haya agua acumulada en el fondo del frasco.\n4. Coloca el frasco en un lugar cálido y con luz indirecta.', margin, y, contentWidth);
    y += 15;

    y = checkAndAddPage(doc, y, 40);
    y = addSectionTitle(doc, 'Tabla de Observación', y, margin);
    y += addWrappedText(doc, 'Dibuja y anota los cambios que veas cada dos días. ¿Qué sale primero? ¿La raíz o el tallo? ¿Cuándo aparecen las primeras hojas?', margin, y, contentWidth);
    doc.rect(margin, y, contentWidth, 30); // Draw a box for observations
    doc.line(margin, y + 10, margin + contentWidth, y + 10);
    doc.line(margin, y + 20, margin + contentWidth, y + 20);
    doc.text('Día 1:', margin + 2, y + 7);
    doc.text('Día 3:', margin + 2, y + 17);
    doc.text('Día 5:', margin + 2, y + 27);

    doc.save('Proyecto_Germinacion.pdf');
};

const generateDiaryTemplatePdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Diario de Mi Cultivo', doc.internal.pageSize.getWidth() / 2, 30, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    doc.text('Nombre de mi planta:', margin, 50);
    doc.line(margin + 50, 50, margin + 150, 50);
    
    doc.text('Fecha de siembra:', margin, 60);
    doc.line(margin + 50, 60, margin + 150, 60);

    doc.setFont('helvetica', 'bold');
    doc.text('Registro de Observaciones', margin, 80);
    
    let y = 90;
    for (let i = 0; i < 4; i++) {
        doc.rect(margin, y, doc.internal.pageSize.getWidth() - 2 * margin, 40);
        doc.text('Fecha:', margin + 5, y + 8);
        doc.text('Altura (cm):', margin + 80, y + 8);
        doc.text('Observaciones (¿hojas nuevas?, ¿flores?, ¿bichos?):', margin + 5, y + 18);
        y += 45;
    }
    
    doc.save('Plantilla_Diario_Cultivo.pdf');
};

const generateStudentPestChallengePdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Reto: Identifica 5 Plagas Comunes', margin, y);
    y += 15;
    
    y = addSectionTitle(doc, '1. Pulgones', y, margin);
    y += addWrappedText(doc, 'Son pequeños insectos verdes, negros o amarillos que chupan la savia de las hojas tiernas. Remedio: Un chorro de agua jabonosa (jabón de loza diluido) o liberar mariquitas (depredadores naturales).', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, '2. Mosca Blanca', y, margin);
    y += addWrappedText(doc, 'Pequeñas moscas blancas que se agitan al tocar la planta. Se esconden en el envés de las hojas. Remedio: Trampas cromáticas amarillas (cartulinas amarillas con pegamento).', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, '3. Babosas y Caracoles', y, margin);
    y += addWrappedText(doc, 'Dejan rastros brillantes y se comen las hojas por la noche. Remedio: Colocar un recipiente con un poco de cerveza a ras de suelo para atraerlos, o barreras de cáscaras de huevo trituradas alrededor de las plantas.', margin, y, contentWidth);
    y += 10;
    
    doc.save('Reto_Plagas.pdf');
};

const generateStudentExperimentPdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Experimento: ¿Cuánta agua necesita mi lechuga?', margin, y);
    y += 15;
    
    y = addSectionTitle(doc, 'Objetivo', y, margin);
    y += addWrappedText(doc, 'Entender cómo afecta la cantidad de riego al crecimiento de una planta.', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, 'Materiales', y, margin);
    y += addWrappedText(doc, '• 3 plantas de lechuga pequeñas e iguales.\n• 3 macetas iguales con el mismo tipo de tierra.\n• Marcadores para etiquetar las macetas.', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, 'Procedimiento', y, margin);
    y += addWrappedText(doc, '1. Etiqueta las macetas: "Poca Agua", "Agua Correcta", "Mucha Agua".\n2. Planta una lechuga en cada maceta.\n3. Riego: A la primera, ponle muy poquita agua cada 3 días. A la segunda, mantén la tierra húmeda pero no mojada. A la tercera, riégala en exceso todos los días.\n4. Observa por 2 semanas y anota las diferencias. ¿Cuál crece mejor? ¿Qué le pasa a las otras?', margin, y, contentWidth);

    doc.save('Experimento_Riego.pdf');
};

const generateEnthusiastCompostPdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Guía Avanzada de Compostaje', margin, y);
    y += 15;
    
    y = addSectionTitle(doc, 'La Relación Carbono/Nitrógeno (C/N)', y, margin);
    y += addWrappedText(doc, 'El secreto de un buen compost es balancear los "verdes" (ricos en nitrógeno) y los "cafés" (ricos en carbono). Una buena regla es usar 2 o 3 partes de cafés por cada parte de verdes.', margin, y, contentWidth);
    y += 10;

    y = addSectionTitle(doc, 'Materiales Cafés (Carbono)', y, margin);
    y += addWrappedText(doc, 'Hojas secas, paja, cartón corrugado en trozos, aserrín, ramas pequeñas.', margin, y, contentWidth);
    y += 10;

    y = addSectionTitle(doc, 'Materiales Verdes (Nitrógeno)', y, margin);
    y += addWrappedText(doc, 'Restos de frutas y verduras, césped recién cortado, posos de café, estiércol de herbívoros.', margin, y, contentWidth);
    y += 10;

    y = addSectionTitle(doc, 'Qué NO compostar', y, margin);
    y += addWrappedText(doc, 'Carnes, lácteos, grasas o aceites, excrementos de perros o gatos, plantas enfermas.', margin, y, contentWidth);
    y += 10;

    doc.save('Guia_Compostaje.pdf');
};

const generateEnthusiastSeedbedsPdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Técnica: Semilleros Biodegradables Caseros', margin, y);
    y += 15;
    
    y = addSectionTitle(doc, 'Opción 1: Tubos de Papel Higiénico', y, margin);
    y += addWrappedText(doc, '1. Guarda los tubos de cartón del papel higiénico o de cocina.\n2. Haz cuatro cortes en un extremo y dobla las solapas hacia adentro para crear una base.\n3. Rellena con sustrato, siembra tu semilla y ¡listo! Puedes plantar el tubo directamente en la tierra, ya que se descompondrá.', margin, y, contentWidth);
    y += 15;

    y = addSectionTitle(doc, 'Opción 2: Cáscaras de Huevo', y, margin);
    y += addWrappedText(doc, '1. Con cuidado, parte los huevos por la mitad superior. Enjuaga las cáscaras.\n2. Haz un pequeño agujero de drenaje en el fondo con una aguja.\n3. Rellena con sustrato y siembra. Al trasplantar, simplemente rompe un poco la cáscara para que las raíces puedan salir.', margin, y, contentWidth);
    
    doc.save('Tecnica_Semilleros.pdf');
};

const generateEnthusiastVerticalPdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const margin = 20;
    const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    let y = margin;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Consejo Pro: Maximizando el espacio vertical', margin, y);
    y += 15;
    
    y = addSectionTitle(doc, '¿Por qué vertical?', y, margin);
    y += addWrappedText(doc, 'Ideal para balcones, patios pequeños o muros soleados. Permite cultivar más en menos espacio horizontal.', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, 'Ideas y Sistemas', y, margin);
    y += addWrappedText(doc, '• Estanterías: Usa una estantería vieja para colocar macetas a diferentes alturas.\n• Jardines de Pared: Compra o construye sistemas de bolsillos de tela o módulos de plástico.\n• Torres de Macetas: Apila macetas de diferentes tamaños.\n• Enrejados y Mallas: Indispensable para plantas trepadoras como frijoles, pepinos o maracuyá.', margin, y, contentWidth);
    y += 10;
    
    y = addSectionTitle(doc, 'Consideraciones', y, margin);
    y += addWrappedText(doc, '• Riego: Las macetas de arriba se secan más rápido. Considera un sistema de riego por goteo.\n• Luz: Asegúrate de que todas las plantas reciban suficiente luz.', margin, y, contentWidth);
    
    doc.save('Consejo_Cultivo_Vertical.pdf');
};


export default function ResourcesPage() {
  const { profile, user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  const handleResourceAction = async (resource: Resource) => {
    if (resource.id === 'student-game') {
      toast({
        title: "¡Próximamente!",
        description: "Estamos desarrollando este juego interactivo.",
      });
      return;
    }
    
    toast({
        title: "Descarga iniciada",
        description: `Se está generando "${resource.title}.pdf".`
    });
    
    switch (resource.id) {
        case 'teacher-guide':
            await generateTeacherGuidePdf();
            break;
        case 'teacher-germination':
            await generateGerminationProjectPdf();
            break;
        case 'teacher-template':
            await generateDiaryTemplatePdf();
            break;
        case 'student-pests':
            await generateStudentPestChallengePdf();
            break;
        case 'student-experiment':
            await generateStudentExperimentPdf();
            break;
        case 'enthusiast-compost':
            await generateEnthusiastCompostPdf();
            break;
        case 'enthusiast-seedbeds':
            await generateEnthusiastSeedbedsPdf();
            break;
        case 'enthusiast-vertical':
            await generateEnthusiastVerticalPdf();
            break;
        default:
             const { default: jsPDF } = await import('jspdf');
             const doc = new jsPDF();
             doc.text('Recurso no encontrado.', 20, 20);
             doc.save('error.pdf');
    }
  }


  if (loading || !user) {
    return null; // O un esqueleto de carga
  }

  const getResources = () => {
    switch (profile?.role) {
      case 'teacher':
        return teacherResources;
      case 'student':
        return studentResources;
      case 'enthusiast':
      default:
        return enthusiastResources;
    }
  };

  const getTitle = () => {
     switch (profile?.role) {
      case 'teacher':
        return 'Recursos para Docentes';
      case 'student':
        return 'Actividades para Estudiantes';
      case 'enthusiast':
      default:
        return 'Recursos para Entusiastas';
    }
  }

  const resources = getResources();

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold font-headline">{getTitle()}</h1>
        <p className="text-muted-foreground">
          Aquí encontrarás guías, actividades y proyectos para profundizar tus conocimientos en la agricultura urbana y la soberanía alimentaria.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} className="flex flex-col">
            <CardHeader className="flex-grow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                    <resource.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center">{resource.title}</CardTitle>
              <CardDescription className="text-center">{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => handleResourceAction(resource)}>
                {resource.id.includes('game') ? null : <Download className="mr-2 h-4 w-4" />}
                {resource.actionText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
