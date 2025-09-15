
import type { SVGProps } from "react";

export interface GlossaryTermData {
  id: string;
  name: string;
  definition: string;
  imageUrl: string;
  imageHint: string;
}

export const GLOSSARY_DATA: GlossaryTermData[] = [
  {
    id: 'tutor',
    name: 'Tutor',
    definition: 'Un tutor es una estaca, caña, enrejado o cualquier estructura vertical que se coloca cerca de una planta para guiar y soportar su crecimiento, especialmente en plantas trepadoras o de tallo débil como el tomate o el frijol.',
    imageUrl: 'https://i.imgur.com/dZc4zJc.jpeg',
    imageHint: 'plant stake',
  },
  {
    id: 'nft',
    name: 'NFT (Técnica de Película Nutritiva)',
    definition: 'Es un método de cultivo hidropónico donde las raíces de las plantas están en un canal o tubo por el que fluye una fina película de agua con nutrientes. Esto permite una excelente oxigenación y absorción de nutrientes sin necesidad de sustrato.',
    imageUrl: 'https://i.imgur.com/eB31T1H.jpeg',
    imageHint: 'hydroponic system',
  },
  {
    id: 'mulching',
    name: 'Mulching (Acolchado)',
    definition: 'El mulching o acolchado consiste en cubrir la superficie del suelo alrededor de las plantas con una capa de material orgánico (paja, hojas secas, corteza) o inorgánico. Ayuda a conservar la humedad, regular la temperatura del suelo y suprimir las malas hierbas.',
    imageUrl: 'https://i.imgur.com/yvM7s34.jpeg',
    imageHint: 'garden mulch',
  },
  {
    id: 'compost',
    name: 'Compost',
    definition: 'Abono orgánico obtenido de la descomposición controlada de materia orgánica como restos de cocina, hojas y pasto. Mejora la estructura del suelo y aporta nutrientes a las plantas.',
    imageUrl: 'https://i.imgur.com/qM6Jg7d.jpeg',
    imageHint: 'compost pile',
  },
  {
    id: 'humus-lombriz',
    name: 'Humus de Lombriz',
    definition: 'Excremento de las lombrices de tierra, es uno de los fertilizantes orgánicos más ricos y completos. Mejora la fertilidad del suelo, la retención de agua y la salud general de las plantas.',
    imageUrl: 'https://i.imgur.com/N74D2tN.jpeg',
    imageHint: 'worm castings soil',
  },
  {
    id: 'rotacion-cultivos',
    name: 'Rotación de Cultivos',
    definition: 'Práctica de alternar los tipos de plantas cultivadas en un mismo lugar en temporadas sucesivas. Ayuda a prevenir el agotamiento de nutrientes del suelo y a controlar plagas y enfermedades.',
    imageUrl: 'https://i.imgur.com/XwFvI2L.jpeg',
    imageHint: 'crop rotation diagram',
  },
  {
    id: 'hidroponia',
    name: 'Hidroponía',
    definition: 'Técnica de cultivo de plantas sin utilizar suelo. Las raíces reciben una solución nutritiva equilibrada disuelta en agua, lo que permite un control preciso sobre la nutrición y un crecimiento eficiente.',
    imageUrl: 'https://i.imgur.com/4g5s8sT.jpeg',
    imageHint: 'hydroponic lettuce',
  },
  {
    id: 'sustrato',
    name: 'Sustrato',
    definition: 'Material sólido distinto del suelo (ej. fibra de coco, perlita, turba) que sirve como soporte para las raíces de la planta, permitiendo el anclaje y la correcta aireación y retención de la solución nutritiva.',
    imageUrl: 'https://i.imgur.com/YwNqJbS.jpeg',
    imageHint: 'potting soil bag',
  },
  {
    id: 'ph',
    name: 'pH',
    definition: 'Medida que indica el nivel de acidez o alcalinidad de una solución (en este caso, del suelo o del agua de riego). Es crucial porque las plantas solo pueden absorber nutrientes dentro de un rango de pH específico.',
    imageUrl: 'https://i.imgur.com/p1d3xJ3.jpeg',
    imageHint: 'soil ph test',
  },
  {
    id: 'aporque',
    name: 'Aporque',
    definition: 'Acción de amontonar tierra alrededor de la base del tallo de una planta. Se hace para protegerla del frío, favorecer el desarrollo de más raíces (como en el maíz) o para evitar que los tubérculos (como la papa) se pongan verdes por la exposición a la luz.',
    imageUrl: 'https://i.imgur.com/rM1O0H3.jpeg',
    imageHint: 'hilling potatoes',
  },
  {
    id: 'semillero',
    name: 'Semillero',
    definition: 'Un lugar o recipiente con condiciones controladas (luz, temperatura, humedad) donde se siembran las semillas para que germinen y se desarrollen las plántulas en sus primeras etapas, antes de ser trasplantadas a su ubicación definitiva.',
    imageUrl: 'https://i.imgur.com/4h4A9V3.jpeg',
    imageHint: 'seedling tray',
  }
];

