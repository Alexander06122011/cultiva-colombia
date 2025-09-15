
import type { Crop } from '@/types';

export const CROP_DATA: Crop[] = [
  {
    id: 'tomate-chonto',
    name: 'Tomate Chonto',
    species: 'Solanum lycopersicum',
    description: 'El Tomate Chonto, también conocido como tomate de guiso, es una variedad robusta y carnosa, fundamental en la preparación de hogao y guisos en Colombia. Su sabor es más concentrado que el del tomate de ensalada.',
    imageUrl: 'https://i.imgur.com/2MV0w1a.jpeg',
    imageHint: 'roma tomato plant',
    difficulty: 'easy',
    lifeCycle: {
      planting: '2-3 semanas en semillero.',
      growth: '60-80 días hasta la floración.',
      harvest: 'A partir de los 90-100 días.',
      totalDays: 100,
    },
    requirements: {
      irrigation: 'Moderado. Mantener el suelo húmedo pero no encharcado. 2-3 veces por semana.',
      climate: 'Climas templados a cálidos. Requiere al menos 6 horas de sol directo.',
      space: 'pot',
      pests: 'Mosca blanca, pulgones, mildiu.',
      fertilizers: 'Rico en potasio y fósforo. Usar compost o humus de lombriz.',
    },
    plantingGuide: {
      pot: [
        { text: 'Usa una maceta de al menos 20 litros.' },
        { 
          text: 'Asegura un buen drenaje con agujeros en la base.',
          imageUrl: 'https://i.imgur.com/yvM7s34.jpeg',
          imageHint: 'pot drainage holes'
        },
        { text: 'Coloca un tutor para guiar el crecimiento de la planta.' },
        { text: 'Riega regularmente sin mojar las hojas.' },
      ],
      soil: [
        { text: 'Prepara el suelo con compost y materia orgánica.' },
        { text: 'Deja un espacio de 40-60 cm entre plantas.' },
        { 
          text: 'Instala tutores o enrejados para soportar las plantas.',
          imageUrl: 'https://i.imgur.com/dZc4zJc.jpeg',
          imageHint: 'tomato plant stakes'
        },
        { text: 'Aplica mulching para conservar la humedad.' },
      ],
      hydroponics: [
        { text: 'Utiliza un sistema de goteo o NFT (Nutrient Film Technique).' },
        { text: 'Mantén un pH de la solución nutritiva entre 5.5 y 6.5.' },
        { text: 'Asegura una buena oxigenación de las raíces.' },
        { text: 'Controla la concentración de nutrientes constantemente.' },
      ],
    },
    compatibility: ['Albahaca', 'Cebolla', 'Zanahoria', 'Lechuga'],
    incompatibility: ['Papa', 'Maíz', 'Hinojo'],
    warnings: 'Evita mojar las hojas para prevenir hongos. La rotación de cultivos es clave para evitar plagas.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas', price: '$3,000 - $7,000 COP' },
        { item: 'Sustrato/Abono inicial', price: '$10,000 - $20,000 COP' },
      ],
      note: 'Requiere tutores, que pueden ser reutilizados.'
    },
    recommendations: 'Ideal para principiantes. La albahaca plantada cerca puede mejorar su sabor y repeler plagas.',
    regions: ['Región Andina', 'Región Caribe', 'Región Orinoquía'],
    notifications: {
      irrigation: 'Tu {cropName} podría necesitar agua. ¡Revisa la humedad del sustrato!',
    },
  },
  {
    id: 'lechuga',
    name: 'Lechuga',
    species: 'Lactuca sativa',
    description: 'La lechuga es una hortaliza de hoja verde, base de ensaladas y platos frescos. Es de crecimiento rápido y se adapta bien a pequeños espacios, siendo perfecta para huertos urbanos.',
    imageUrl: 'https://i.imgur.com/S8WJz4y.jpeg',
    imageHint: 'lettuce patch',
    difficulty: 'easy',
    lifeCycle: {
      planting: '7-10 días para germinar.',
      growth: '30-40 días para desarrollo de hojas.',
      harvest: 'Entre 45 y 70 días.',
      totalDays: 70,
    },
    requirements: {
      irrigation: 'Frecuente y ligero. El suelo debe estar siempre húmedo.',
      climate: 'Climas frescos a templados. Tolera sombra parcial.',
      space: 'garden',
      pests: 'Pulgones, babosas y caracoles.',
      fertilizers: 'Nitrógeno para el desarrollo de hojas. El humus de lombriz es excelente.',
    },
    plantingGuide: {
      pot: [
        { text: 'Elige macetas anchas y poco profundas.' },
        { text: 'Siembra las semillas a 0.5 cm de profundidad.' },
        { 
          text: 'Puedes cosechar hojas exteriores para que la planta siga produciendo.',
          imageUrl: 'https://i.imgur.com/qM6Jg7d.jpeg',
          imageHint: 'harvesting lettuce leaves'
        },
        { text: 'Mantén la maceta en un lugar fresco.' },
      ],
      soil: [
        { text: 'Siembra en hileras, con 20-30 cm de separación.' },
        { text: 'El suelo debe ser suelto y rico en materia orgánica.' },
        { text: 'Cuidado con el sol directo muy intenso, puede quemar las hojas.' },
        { text: 'Cosecha por la mañana para obtener hojas más crujientes.' },
      ],
      hydroponics: [
        { 
          text: 'Sistemas de raíz flotante o NFT son ideales.',
          imageUrl: 'https://i.imgur.com/eB31T1H.jpeg',
          imageHint: 'lettuce hydroponics'
        },
        { text: 'La solución nutritiva debe tener un pH entre 6.0 y 7.0.' },
        { text: 'Cosecha toda la planta o por hojas según el sistema.' },
        { text: 'Requiere menos agua que el cultivo en suelo.' },
      ],
    },
    compatibility: ['Zanahorias', 'Rábanos', 'Fresas', 'Pepinos'],
    incompatibility: ['Apio', 'Perejil', 'Brócoli'],
    warnings: 'Las altas temperaturas pueden hacer que la lechuga florezca prematuramente (se "espigue"), volviendo las hojas amargas.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Semillas', price: '$2,000 - $5,000 COP' },
        { item: 'Sustrato (en maceta)', price: '$10,000 - $15,000 COP' },
      ],
    },
    recommendations: 'Cosecha las hojas exteriores de forma continua para prolongar la producción. Ideal para espacios pequeños.',
    regions: ['Región Andina', 'Región Insular'],
    notifications: {
      irrigation: 'A la {cropName} le gusta la humedad. ¡Es hora de un riego ligero!',
    },
  },
  {
    id: 'maiz',
    name: 'Maíz',
    species: 'Zea mays',
    description: 'El maíz es un pilar de la alimentación en Colombia y América Latina. Su cultivo es un acto cultural y de soberanía. Requiere más espacio, pero la recompensa de cosechar tus propias mazorcas es inigualable.',
    imageUrl: 'https://i.imgur.com/Z4N3bC5.jpeg',
    imageHint: 'corn field',
    difficulty: 'medium',
    lifeCycle: {
      planting: '5-10 días para germinar y emerger.',
      growth: '60-90 días de crecimiento vegetativo y floración.',
      harvest: '90-120 días para el desarrollo de la mazorca.',
      totalDays: 120,
    },
    requirements: {
      irrigation: 'Abundante, especialmente durante la floración y formación de la mazorca.',
      climate: 'Climas cálidos y mucho sol. Es sensible a las heladas.',
      space: 'patio',
      pests: 'Gusano cogollero, áfidos.',
      fertilizers: 'Alto requerimiento de nitrógeno.',
    },
    plantingGuide: {
      pot: [
        { text: 'No recomendado. El maíz necesita mucho espacio y se poliniza por viento.' },
        { text: 'Si se intenta, usar macetas muy grandes (mínimo 40L) y plantar varias juntas.' },
        { text: 'Polinización manual será necesaria, agitando las flores masculinas sobre las femeninas.' },
        { text: 'Asegurar riego y nutrientes constantes.' },
      ],
      soil: [
        { 
          text: 'Plantar en bloques (ej. 4x4) en lugar de una sola fila para facilitar la polinización por viento.',
          imageUrl: 'https://i.imgur.com/N74D2tN.jpeg',
          imageHint: 'corn planting block'
        },
        { text: 'Separación de 20-30 cm entre plantas.' },
        { text: 'El suelo debe ser profundo, fértil y bien drenado.' },
        { text: 'Eliminar malezas para evitar competencia.' },
      ],
      hydroponics: [
        { text: 'Complejo y poco común para el maíz a nivel doméstico.' },
        { text: 'Se pueden usar sistemas de goteo en sustratos como fibra de coco.' },
        { text: 'Requiere un monitoreo estricto de nutrientes.' },
        { text: 'El soporte para las plantas es crucial.' },
      ],
    },
    compatibility: ['Frijol', 'Calabaza (Asociación "Tres Hermanas")', 'Pepino', 'Papa'],
    incompatibility: ['Tomate', 'Apio'],
    warnings: 'La polinización es crucial. Plantar en bloques es la mejor estrategia para asegurar mazorcas llenas.',
    costs: {
      range: 'Medio',
      items: [
        { item: 'Semillas', price: '$5,000 - $10,000 COP' },
        { item: 'Fertilizante/Abono', price: '$15,000 - $25,000 COP' },
      ],
      note: 'Mayor consumo de agua.'
    },
    recommendations: 'Intenta la siembra de "Las Tres Hermanas": maíz, frijol y calabaza. El maíz da soporte al frijol, el frijol fija nitrógeno y la calabaza cubre el suelo.',
    regions: ['Región Andina', 'Región Caribe', 'Región Orinoquía'],
    notifications: {
      irrigation: 'Tu {cropName} necesita bastante agua, especialmente ahora. ¡A regar!',
    },
  },
  {
    id: 'frijol-cargamanto',
    name: 'Frijol Cargamanto',
    species: 'Phaseolus vulgaris',
    description: 'El Frijol Cargamanto es una variedad de frijol de mata baja, muy apreciada en la gastronomía andina por su grano grande y cremoso. Al ser de arbusto, no requiere estructuras para trepar.',
    imageUrl: 'https://i.imgur.com/p1d3xJ3.jpeg',
    imageHint: 'bush bean plant',
    difficulty: 'medium',
    lifeCycle: {
      planting: '5-10 días para germinar.',
      growth: '40-50 días hasta la floración.',
      harvest: 'A los 80-100 días, cuando las vainas están secas.',
      totalDays: 100,
    },
    requirements: {
      irrigation: 'Moderado. Evitar encharcamiento que pudre las raíces.',
      climate: 'Climas templados (15-24°C).',
      space: 'garden',
      pests: 'Pulgones, mosca blanca, gorgojos en el grano almacenado.',
      fertilizers: 'Bajo requerimiento, ya que fija su propio nitrógeno. Un poco de fósforo (fósforo) al inicio ayuda.',
    },
    plantingGuide: {
      pot: [
        { text: 'Usa macetas de al menos 15-20 litros.' },
        { text: 'Siembra 3-4 semillas por maceta, a 3 cm de profundidad.' },
        { text: 'No necesita tutor, ya que es una planta de tipo arbustivo.' },
        { text: 'Coloca la maceta en un lugar con pleno sol.' },
      ],
      soil: [
        { text: 'Siembra directamente en el suelo, en hileras separadas por 40-50 cm.' },
        { text: 'Coloca una semilla cada 10-15 cm dentro de la hilera.' },
        { text: 'Inocular las semillas con Rhizobium puede mejorar la fijación de nitrógeno.' },
        { text: 'Cosecha la planta entera cuando las vainas estén secas y déjalas secar al sol antes de desgranar.' },
      ],
      hydroponics: [
        { text: 'No es una práctica común, pero es posible en sistemas de goteo con sustrato.' },
        { text: 'Requiere una formulación de nutrientes específica para leguminosas.' },
        { text: 'El control de plagas es más sencillo que en suelo.' },
        { text: 'El sabor puede ser diferente al cultivado en tierra.' },
      ],
    },
    compatibility: ['Maíz', 'Calabaza', 'Zanahoria', 'Pepino'],
    incompatibility: ['Cebolla', 'Ajo', 'Hinojo'],
    warnings: 'Las vainas y granos deben cocinarse siempre, ya que crudos contienen lectinas que pueden ser tóxicas.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas', price: '$4,000 - $8,000 COP' },
      ],
      note: 'Enriquece el suelo con nitrógeno, beneficiando cultivos futuros.'
    },
    recommendations: 'Ideal para rotación de cultivos. Siémbralo donde antes tuviste un cultivo exigente en nitrógeno como el maíz.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: '¿Tu planta de {cropName} tiene el sustrato seco? Dale un poco de agua.',
    },
  },
  {
    id: 'frijol-bola-roja',
    name: 'Frijol Bola Roja',
    species: 'Phaseolus vulgaris',
    description: 'El Frijol Bola Roja es una variedad trepadora muy popular en Colombia. Su grano es redondeado y de color rojo intenso. Al ser una enredadera, es fundamental proporcionarle una estructura de soporte.',
    imageUrl: 'https://i.imgur.com/G5g2fN4.jpeg',
    imageHint: 'climbing bean plant',
    difficulty: 'medium',
    lifeCycle: {
        planting: '5-10 días para germinar.',
        growth: '50-60 días hasta la floración, mientras trepa.',
        harvest: '90-110 días, cuando las vainas se secan en la planta.',
        totalDays: 110,
    },
    requirements: {
        irrigation: 'Moderado y constante, especialmente durante la floración.',
        climate: 'Climas templados a cálidos.',
        space: 'garden',
        pests: 'Pulgones, araña roja, trips.',
        fertilizers: 'Bajo en nitrógeno. Fija su propio nitrógeno del aire.',
    },
    plantingGuide: {
        pot: [
            { text: 'Requiere una maceta grande (mínimo 30 litros) y un tutor robusto de al menos 1.5 metros.' },
            { 
              text: 'Instala el tutor (puede ser una vara de bambú o una malla) en el centro de la maceta.',
              imageUrl: 'https://i.imgur.com/XwFvI2L.jpeg',
              imageHint: 'bean plant trellis'
            },
            { text: 'Siembra 3-4 semillas alrededor de la base del tutor.' },
            { text: 'Guía las plantas jóvenes para que empiecen a trepar por el soporte.' },
        ],
        soil: [
            { text: 'Prepara el suelo e instala los tutores o la estructura de soporte ANTES de sembrar.' },
            { text: 'Siembra 2-3 semillas en la base de cada tutor o cada 20 cm si usas una malla.' },
            { text: 'Ideal para asociar con maíz ("Las Tres Hermanas"), usando el tallo del maíz como tutor natural.' },
            { text: 'Cosecha las vainas cuando estén completamente secas para obtener el grano seco.' },
        ],
        hydroponics: [
            { text: 'Posible en sistemas de goteo en bolsas de sustrato, pero requiere una estructura de soporte externa.' },
            { text: 'El manejo de la planta (guiado y poda) es más intensivo.' },
            { text: 'La solución nutritiva debe ser cuidadosamente balanceada.' },
            { text: 'No es una práctica común a nivel doméstico.' },
        ],
    },
    compatibility: ['Maíz', 'Calabaza', 'Zanahoria'],
    incompatibility: ['Cebolla', 'Ajo', 'Puerro'],
    warnings: 'Asegúrate de que la estructura de soporte sea lo suficientemente fuerte para aguantar el peso de la planta cargada de vainas.',
    costs: {
      range: 'Bajo-Medio',
      items: [
        { item: 'Semillas', price: '$4,000 - $8,000 COP' },
        { item: 'Tutores o malla', price: '$10,000 - $25,000 COP (puede ser reutilizable).' }
      ]
    },
    recommendations: 'Aprovecha su crecimiento vertical para maximizar el espacio en huertos pequeños. Una excelente opción para jardines verticales.',
    regions: ['Región Andina'],
    notifications: {
        irrigation: 'Tu planta de {cropName} está trepando alto. ¡No olvides su riego!',
    },
  },
  {
    id: 'cilantro',
    name: 'Cilantro',
    species: 'Coriandrum sativum',
    description: 'El cilantro es una hierba aromática indispensable en la cocina colombiana, especialmente en sopas y ají. Es de crecimiento rápido y se puede cultivar fácilmente en macetas.',
    imageUrl: 'https://i.imgur.com/uC0v3qJ.jpeg',
    imageHint: 'cilantro plant',
    difficulty: 'easy',
    lifeCycle: {
      planting: '7-10 días para germinar.',
      growth: '30-40 días para desarrollo de hojas.',
      harvest: 'A partir de los 45-60 días.',
      totalDays: 60,
    },
    requirements: {
      irrigation: 'Regular. Mantener el suelo húmedo sin encharcar.',
      climate: 'Climas templados. Prefiere sol parcial, especialmente en climas cálidos para no florecer prematuramente.',
      space: 'pot',
      pests: 'Pulgones.',
      fertilizers: 'No muy exigente. Un poco de compost al inicio es suficiente.',
    },
    plantingGuide: {
      pot: [
        { text: 'Usa una maceta de al menos 15-20 cm de profundidad.' },
        { 
            text: 'Esparce las semillas sobre la superficie y cúbrelas con una fina capa de tierra (0.5 cm).',
            imageUrl: 'https://i.imgur.com/4g5s8sT.jpeg',
            imageHint: 'planting seeds pot'
        },
        { text: 'Riega suavemente para no desenterrar las semillas.' },
        { text: 'Coloca en un lugar con luz solar indirecta o sol de la mañana.' },
      ],
      soil: [
        { text: 'Siembra directamente en el suelo, en hileras separadas por 20 cm.' },
        { text: 'El suelo debe ser ligero y bien drenado.' },
        { text: 'Cosecha las hojas exteriores para permitir que la planta siga creciendo.' },
        { text: 'Evita el calor extremo para que no florezca rápido.' },
      ],
      hydroponics: [
        { text: 'Funciona bien en sistemas de balsa flotante (raíz flotante) o NFT.' },
        { text: 'Mantener el pH de la solución nutritiva entre 6.0 y 6.8.' },
        { text: 'Es sensible a la falta de oxigeno en las raíces.' },
        { text: 'Cosechar antes de que la planta desarrolle el tallo floral.' },
      ],
    },
    compatibility: ['Tomate', 'Anís', 'Espinaca'],
    incompatibility: ['Hinojo', 'Perejil'],
    warnings: 'Tiende a florecer rápidamente con mucho calor ("espigarse"). Cosecha las hojas con frecuencia para retrasar este proceso.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Semillas', price: '$2,000 - $4,000 COP' },
        { item: 'Sustrato (en maceta)', price: '$10,000 - $15,000 COP' },
      ],
    },
    recommendations: 'Siembra de forma escalonada cada 2-3 semanas para tener un suministro continuo de hojas frescas.',
    regions: ['Región Andina', 'Región Caribe', 'Región Insular'],
    notifications: {
      irrigation: 'Recordatorio para tu {cropName}. ¡Mantén la tierra húmeda para hojas frescas!',
    },
  },
  {
    id: 'papa-criolla',
    name: 'Papa Criolla (Amarilla)',
    species: 'Solanum phureja',
    description: 'La Papa Criolla es un tesoro de los Andes colombianos. Pequeña, de piel fina y carne amarilla y cremosa, es famosa por su rápida cocción y su papel estelar en el ajiaco. No tiene periodo de dormancia, lo que la diferencia de otras papas.',
    imageUrl: 'https://i.imgur.com/YwNqJbS.jpeg',
    imageHint: 'yellow potatoes',
    difficulty: 'medium',
    lifeCycle: {
        planting: '15-20 días para brotar.',
        growth: '60-80 días de desarrollo foliar.',
        harvest: 'A los 90-110 días, cuando el follaje se marchita.',
        totalDays: 110,
    },
    requirements: {
        irrigation: 'Moderado y constante, especialmente durante la formación de tubérculos.',
        climate: 'Climas fríos (10-18°C). Es muy sensible al calor y a las heladas.',
        space: 'garden',
        pests: 'Tizón tardío (gota), polilla guatemalteca.',
        fertilizers: 'Rico en potasio y fósforo. El compost es fundamental.',
    },
    plantingGuide: {
        pot: [
            { text: 'Usa macetas grandes y profundas o sacos de cultivo (mínimo 40L).' },
            { text: 'Siembra tubérculos enteros a unos 10 cm de profundidad.' },
            { text: 'A medida que la planta crece, añade más tierra ("aporque") para cubrir la base del tallo y promover la formación de más papas.' },
            { text: 'Cosecha con cuidado cuando la planta se seque, vaciando el contenedor.' },
        ],
        soil: [
            { text: 'Prefiere suelos sueltos, bien drenados y ricos en materia orgánica.' },
            { 
              text: 'Realiza el "aporque" (amontonar tierra en la base) dos veces durante el ciclo de crecimiento.',
              imageUrl: 'https://i.imgur.com/rM1O0H3.jpeg',
              imageHint: 'hilling potatoes field'
            },
            { text: 'La rotación de cultivos es vital para evitar la acumulación de plagas y enfermedades en el suelo.' },
            { text: 'Cosecha en un día seco y deja que las papas se sequen un poco antes de almacenarlas.' },
        ],
        hydroponics: [
            { text: 'No es una práctica común para la papa, especialmente para variedades tradicionales.' },
            { text: 'Se limita a investigación en aeroponía para la producción de semillas libres de virus.' },
            { text: 'Inviable para un huerto casero.' },
            { text: 'El desarrollo de los tubérculos requiere un medio sólido.' },
        ],
    },
    compatibility: ['Frijol de mata baja', 'Repollo', 'Rábano'],
    incompatibility: ['Tomate', 'Calabaza', 'Girasol'],
    warnings: 'Extremadamente susceptible a la "gota" (tizón tardío). Evita mojar el follaje al regar y asegura una buena circulación de aire.',
    costs: {
      range: 'Medio',
      items: [
        { item: 'Papa de siembra (tubérculos)', price: '$6,000 - $15,000 COP/kg' },
        { item: 'Compost/Abono', price: '$20,000 - $30,000 COP' },
      ],
      note: 'La calidad del material de siembra es clave para una buena cosecha.'
    },
    recommendations: 'La rotación de cultivos es tu mejor aliada. Nunca siembres papa donde cultivaste tomate el año anterior (o viceversa).',
    regions: ['Región Andina'],
    notifications: {
        irrigation: 'Las plantas de {cropName} están formando sus tubérculos. ¡Un riego constante es clave!',
    },
  },
    {
    id: 'papa-pastusa',
    name: 'Papa Pastusa (Blanca)',
    species: 'Solanum tuberosum (Grupo Andigenum)',
    description: 'La Papa Pastusa es una de las variedades más consumidas en Colombia. Es grande, de piel parda y carne blanca y harinosa, ideal para caldos, sopas y purés. Tiene un ciclo más largo que la papa criolla.',
    imageUrl: 'https://i.imgur.com/4h4A9V3.jpeg',
    imageHint: 'white potatoes',
    difficulty: 'medium',
    lifeCycle: {
        planting: '20-30 días para brotar (requiere superar la dormancia).',
        growth: '90-120 días de desarrollo vegetativo.',
        harvest: 'A los 140-170 días. Es un cultivo de ciclo más largo.',
        totalDays: 170,
    },
    requirements: {
        irrigation: 'Moderado. Constante durante la tuberización.',
        climate: 'Climas fríos (10-18°C).',
        space: 'garden',
        pests: 'Gota (tizón tardío), polilla guatemalteca, gusano blanco.',
        fertilizers: 'Exigente en potasio y fósforo. Se beneficia de abonos orgánicos.',
    },
    plantingGuide: {
        pot: [
            { text: 'Posible en cajones de cultivo muy grandes y profundos, pero el rendimiento será limitado.' },
            { text: 'Usa un tubérculo-semilla con brotes definidos.' },
            { text: 'Requiere "aporques" sucesivos para asegurar que los nuevos tubérculos no queden expuestos a la luz.' },
            { text: 'El ciclo largo hace que el manejo en maceta sea más complejo.' },
        ],
        soil: [
            { text: 'Usa "semilla" certificada para evitar enfermedades virales.' },
            { text: 'Siembra en surcos profundos, con una distancia de 30-40 cm entre tubérculos y 80-90 cm entre surcos.' },
            { text: 'El aporque es una práctica obligatoria y crucial para obtener una buena cosecha y proteger los tubérculos.' },
            { text: 'La cosecha se realiza cuando el follaje se ha secado por completo.' },
        ],
        hydroponics: [
            { text: 'Inviable y no se practica a nivel comercial ni doméstico.' },
            { text: 'El desarrollo de tubérculos de este tamaño es imposible sin un suelo o sustrato profundo.' },
            { text: 'Limitado a investigación.' },
            { text: 'No aplicable para huertos.' },
        ],
    },
    compatibility: ['Frijol', 'Maíz', 'Repollo'],
    incompatibility: ['Tomate', 'Calabaza', 'Pepino'],
    warnings: 'No consumas papas que se hayan puesto verdes. La coloración verde indica la presencia de solanina, un alcaloide tóxico.',
    costs: {
      range: 'Medio',
      items: [
        { item: 'Papa de siembra', price: '$5,000 - $12,000 COP/kg' },
        { item: 'Abonos y preparación de suelo', price: '$25,000 - $40,000 COP' },
      ],
      note: 'Requiere una buena cantidad de suelo o sustrato para el aporque.'
    },
    recommendations: 'Aprende a realizar un buen "aporque". Esta técnica es la clave para una cosecha abundante y de calidad con esta variedad.',
    regions: ['Región Andina'],
    notifications: {
        irrigation: 'Tu cultivo de {cropName} está en pleno desarrollo. ¡Mantén el riego uniforme!',
    },
  },
  {
    id: 'aguacate-hass',
    name: 'Aguacate Hass',
    species: 'Persea americana "Hass"',
    description: 'El "oro verde" de exportación de Colombia. El aguacate Hass es famoso por su piel rugosa que se torna oscura al madurar, su textura cremosa y su larga vida post-cosecha. Requiere paciencia y condiciones específicas.',
    imageUrl: 'https://i.imgur.com/xO8s0Ym.jpeg',
    imageHint: 'hass avocado tree',
    difficulty: 'hard',
    lifeCycle: {
      planting: '3-6 meses para germinar. Se recomienda plantar árboles injertados.',
      growth: '3-4 años para la primera floración (injerto) u 8-10 años (semilla).',
      harvest: '6-9 meses desde la floración hasta el fruto maduro.',
      totalDays: 1460, // 4 years for first fruit from grafted tree
    },
    requirements: {
      irrigation: 'Riego profundo y poco frecuente. No tolera el encharcamiento en absoluto.',
      climate: 'Climas templados (17-24°C), sin heladas fuertes. Requiere buena luminosidad.',
      space: 'patio',
      pests: 'Ácaros, trips, barrenadores del tallo.',
      fertilizers: 'Abonos balanceados ricos en nitrógeno, fósforo, potasio y microelementos como zinc y boro.',
    },
    plantingGuide: {
      pot: [
        { text: 'Posible solo durante los primeros 1-2 años, luego necesita trasplante a suelo.' },
        { text: 'Usa una maceta muy grande (mínimo 60L) con excelente drenaje.' },
        { 
          text: 'Germina la semilla en agua o directamente en tierra.',
          imageUrl: 'https://i.imgur.com/kS9j7wM.jpeg',
          imageHint: 'avocado seed germination'
        },
        { text: 'El árbol no fructificará de forma viable en una maceta.' },
      ],
      soil: [
        { text: 'Elige un lugar soleado y protegido del viento fuerte. El suelo debe ser franco y con drenaje perfecto.' },
        { text: 'Plantar un arbolito injertado de un vivero certificado es la única forma recomendada para asegurar la producción y la variedad.' },
        { text: 'Deja un espacio de al menos 5-8 metros entre árboles.' },
        { text: 'El mulching ayuda a proteger las raíces superficiales y a mantener la humedad.' },
      ],
      hydroponics: [
        { text: 'No es una práctica común para árboles frutales como el aguacate a nivel doméstico.' },
        { text: 'Se requeriría un sistema muy grande y complejo.' },
        { text: 'El manejo de nutrientes y soporte sería un desafío.' },
        { text: 'Experimentalmente, se usan sistemas de goteo en sustratos.' },
      ],
    },
    compatibility: ['Comino', 'Borraja', 'Hierbas aromáticas'],
    incompatibility: ['Otras plantas de raíces profundas que compitan por espacio.'],
    warnings: 'El exceso de agua es la principal causa de muerte de los árboles de aguacate jóvenes. La pudrición de la raíz es un problema grave. Asegura un drenaje perfecto.',
    costs: {
      range: 'Alto',
      items: [
        { item: 'Árbol injertado', price: '$30,000 - $60,000 COP' },
        { item: 'Preparación del suelo y abonos', price: 'Inversión significativa' },
      ],
      note: 'Es una inversión a largo plazo que requiere paciencia y cuidado.'
    },
    recommendations: 'Para obtener frutos, es prácticamente obligatorio comprar un árbol injertado de un vivero. Empezar desde la semilla es un experimento divertido, pero es poco probable que dé frutos de calidad.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu árbol de {cropName} necesita un riego profundo. ¡Recuerda, odia el encharcamiento!',
    },
  },
  {
    id: 'cafe',
    name: 'Café',
    species: 'Coffea arabica',
    description: 'El cultivo insignia de Colombia. El café es un arbusto que produce cerezas rojas, cuyas semillas se tuestan para crear una de las bebidas más famosas del mundo. Prefiere las laderas de las montañas.',
    imageUrl: 'https://i.imgur.com/eQxL9zP.jpeg',
    imageHint: 'coffee plant beans',
    difficulty: 'hard',
    lifeCycle: {
      planting: '6-12 semanas para germinar.',
      growth: '3-4 años para alcanzar la madurez y la primera cosecha importante.',
      harvest: 'La cosecha principal ocurre una vez al año, con una secundaria ("mitaca").',
      totalDays: 1460, // 4 years
    },
    requirements: {
      irrigation: 'Regular, especialmente en épocas secas. Buen drenaje es vital.',
      climate: 'Clima templado de montaña (18-24°C), con estaciones húmedas y secas definidas.',
      space: 'patio',
      pests: 'Broca del café, roya.',
      fertilizers: 'Requiere fertilizantes balanceados, ricos en nitrógeno, fósforo y potasio.',
    },
    plantingGuide: {
      pot: [
        { text: 'Se puede mantener como planta ornamental en maceta.' },
        { 
          text: 'Usa una maceta grande con tierra ácida y buen drenaje.',
          imageUrl: 'https://i.imgur.com/4q9XqgK.jpeg',
          imageHint: 'coffee plant pot'
        },
        { text: 'Prefiere luz brillante pero indirecta. El sol directo puede quemar las hojas.' },
        { text: 'Es poco probable que produzca una cantidad significativa de café.' },
      ],
      soil: [
        { text: 'Se cultiva tradicionalmente bajo sombra de otros árboles como guamos o plátanos.' },
        { text: 'El suelo debe ser volcánico, rico en materia orgánica y con buen drenaje.' },
        { text: 'Se siembra en laderas con una altitud entre 1.200 y 1.800 msnm.' },
        { text: 'La recolección se hace a mano, seleccionando solo las cerezas maduras.' },
      ],
      hydroponics: [
        { text: 'No es un método comercialmente viable ni común para el café.' },
        { text: 'Los requerimientos de sustrato y soporte para un arbusto grande son complejos.' },
        { text: 'Se limita a investigación o cultivos experimentales.' },
        { text: 'Mantener la acidez del medio sería un reto.' },
      ],
    },
    compatibility: ['Plátano', 'Guamo', 'Árboles leguminosos'],
    incompatibility: ['Cultivos que requieran pleno sol y compitan agresivamente por nutrientes.'],
    warnings: 'El café es susceptible a enfermedades como la roya, que puede devastar una plantación. Es clave elegir variedades resistentes.',
    costs: {
      range: 'Alto',
      items: [
        { item: 'Plántulas (chapolas)', price: '$500 - $1,500 COP c/u' },
        { item: 'Fertilizantes y fungicidas', price: 'Inversión continua y significativa' },
      ],
      note: 'Requiere conocimientos técnicos y condiciones específicas.'
    },
    recommendations: 'Cultivar café es un arte. Empieza con pocas plantas para aprender su ciclo. Visita una finca cafetera para entender el proceso completo, desde la siembra hasta la taza.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu planta de {cropName} aprecia la humedad constante. ¡Es hora de regar!',
    },
  },
  {
    id: 'platano',
    name: 'Plátano',
    species: 'Musa paradisiaca',
    description: 'El plátano es un alimento básico en toda Colombia. Esta planta de gran tamaño, similar a un banano pero para cocción, es generosa y su cultivo es relativamente sencillo en climas cálidos.',
    imageUrl: 'https://i.imgur.com/kS9j7wM.jpeg',
    imageHint: 'plantain tree',
    difficulty: 'medium',
    lifeCycle: {
      planting: 'Crece a partir de cormos o "colinos".',
      growth: '9-12 meses para que la planta principal produzca un racimo.',
      harvest: 'El racimo se cosecha cuando los plátanos están llenos y verdes.',
      totalDays: 365,
    },
    requirements: {
      irrigation: 'Alta demanda de agua. Necesita humedad constante.',
      climate: 'Climas cálidos y húmedos. No tolera las heladas.',
      space: 'patio',
      pests: 'Picudo negro, sigatoka negra.',
      fertilizers: 'Muy exigente en potasio.',
    },
    plantingGuide: {
      pot: [
        { text: 'No es viable. La planta es demasiado grande para una maceta.' },
        { text: 'Existen variedades enanas de banano que sí pueden vivir en macetas grandes, pero no de plátano.' },
        { text: 'Requiere un volumen de suelo que una maceta no puede proporcionar.' },
        { text: 'La producción de fruta sería nula o muy pobre.' },
      ],
      soil: [
        { text: 'Planta los "colinos" (brotes de la base) en hoyos grandes y ricos en materia orgánica.' },
        { text: 'Deja un espacio de al menos 3x3 metros entre plantas.' },
        { text: 'Aplica mulching grueso para mantener la humedad y controlar malezas.' },
        { 
          text: 'Una vez cosechado el racimo, se corta el tallo principal para dar paso a los hijos.',
          imageUrl: 'https://i.imgur.com/rM1O0H3.jpeg',
          imageHint: 'harvesting plantain'
        },
      ],
      hydroponics: [
        { text: 'Impráctico y no se utiliza a nivel comercial ni doméstico debido al tamaño y peso de la planta.' },
        { text: 'El anclaje de la planta sería un problema mayúsculo.' },
        { text: 'Solo se realiza en contextos de investigación muy específicos.' },
        { text: 'Requeriría una cantidad enorme de solución nutritiva.' },
      ],
    },
    compatibility: ['Café (como sombra)', 'Yuca', 'Frijol de mata'],
    incompatibility: ['Hortalizas que necesiten mucho sol directo.'],
    warnings: 'El viento fuerte puede derribar las plantas, especialmente cuando tienen el racimo. Siembra en lugares protegidos.',
    costs: {
      range: 'Medio',
      items: [
        { item: 'Colinos', price: '$5,000 - $15,000 COP c/u' },
        { item: 'Fertilizante rico en potasio', price: '$20,000 - $40,000 COP' },
      ],
      note: 'Una vez establecida, la planta produce sus propios colinos para replantar.'
    },
    recommendations: 'Aprende a identificar el punto de cosecha correcto. Los plátanos deben verse "llenos" y angulosos, pero aún verdes.',
    regions: ['Región Andina', 'Región Caribe', 'Región Pacífica', 'Región Orinoquía', 'Región Amazonía'],
    notifications: {
      irrigation: 'Al {cropName} le encanta el agua. ¡Asegúrate de que tenga suficiente!',
    },
  },
  {
    id: 'yuca',
    name: 'Yuca',
    species: 'Manihot esculenta',
    description: 'La yuca, también conocida como mandioca o casabe, es un arbusto cuya raíz es una fuente de carbohidratos fundamental en las zonas tropicales. Es un cultivo rústico y muy resistente a la sequía.',
    imageUrl: 'https://i.imgur.com/YwNqJbS.jpeg',
    imageHint: 'cassava plant roots',
    difficulty: 'easy',
    lifeCycle: {
      planting: 'Se planta a partir de estacas del tallo.',
      growth: '8-12 meses para que las raíces alcancen un buen tamaño.',
      harvest: 'Se cosecha desenterrando las raíces con cuidado.',
      totalDays: 365,
    },
    requirements: {
      irrigation: 'Muy poca. Tolera muy bien la sequía una vez establecida.',
      climate: 'Climas cálidos. Requiere sol.',
      space: 'patio',
      pests: 'Ácaros, mosca blanca.',
      fertilizers: 'Poco exigente. Responde bien a la materia orgánica al inicio.',
    },
    plantingGuide: {
      pot: [
        { text: 'Difícil por el espacio que requieren las raíces para engrosar.' },
        { text: 'Se necesitaría un contenedor extremadamente grande y profundo (tipo cajón de cultivo).' },
        { text: 'El rendimiento sería probablemente bajo.' },
        { text: 'Se puede intentar como experimento.' },
      ],
      soil: [
        { text: 'Prepara el suelo para que esté suelto y profundo, sin piedras.' },
        { 
          text: 'Corta estacas de 20-30 cm de tallos maduros y entiérralas a la mitad, en ángulo o verticalmente.',
          imageUrl: 'https://i.imgur.com/p1d3xJ3.jpeg',
          imageHint: 'planting cassava cutting'
        },
        { text: 'Deja un metro de distancia entre plantas.' },
        { text: 'Mantén el área libre de malezas durante los primeros meses.' },
      ],
      hydroponics: [
        { text: 'No es un método adecuado para cultivos de raíz tuberosa como la yuca.' },
        { text: 'Las raíces no se desarrollarían correctamente sin un medio de suelo.' },
        { text: 'Completamente inviable para fines productivos.' },
        { text: 'Se limita estrictamente a la investigación científica.' },
      ],
    },
    compatibility: ['Maíz', 'Frijol', 'Leguminosas'],
    incompatibility: ['Cultivos que sombreen demasiado el suelo.'],
    warnings: 'Existen variedades de yuca "dulce" y "amarga". La amarga contiene altos niveles de cianuro y DEBE ser procesada adecuadamente (rallar, exprimir, cocinar) para ser consumida de forma segura.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Estacas', price: 'A menudo gratis o $1,000 - $3,000 c/u' },
        { item: 'Abono inicial', price: '$10,000 - $20,000 COP' },
      ],
      note: 'Es un cultivo de subsistencia muy eficiente.'
    },
    recommendations: 'Asegúrate de saber qué variedad estás plantando (dulce o amarga). Es uno de los cultivos más resilientes y una gran garantía de seguridad alimentaria.',
    regions: ['Región Caribe', 'Región Pacífica', 'Región Orinoquía', 'Región Amazonía'],
    notifications: {
      irrigation: 'La {cropName} es resistente, pero un poco de agua de vez en cuando le viene bien.',
    },
  },
  {
    id: 'cebolla-larga',
    name: 'Cebolla Larga',
    species: 'Allium fistulosum',
    description: 'Conocida también como cebolla de verdeo o cebollín, es un ingrediente esencial en la cocina colombiana para guisos y hogao. Es fácil de cultivar y se puede cosechar de forma continua.',
    imageUrl: 'https://i.imgur.com/G5g2fN4.jpeg',
    imageHint: 'scallions green onion',
    difficulty: 'easy',
    lifeCycle: {
      planting: 'Se puede plantar desde semilla o usando la base de una cebolla comprada.',
      growth: '60-90 días para estar lista para la cosecha.',
      harvest: 'Se pueden cortar las hojas verdes dejando la base, y volverán a crecer.',
      totalDays: 90,
    },
    requirements: {
      irrigation: 'Constante. El suelo debe mantenerse húmedo.',
      climate: 'Climas templados a fríos. Tolera bien el sol.',
      space: 'pot',
      pests: 'Pocas plagas importantes, a veces trips.',
      fertilizers: 'Moderadamente exigente en nitrógeno y materia orgánica.',
    },
    plantingGuide: {
      pot: [
        { 
          text: 'Planta las bases con raíces de cebollas compradas en una maceta con buena tierra.',
          imageUrl: 'https://i.imgur.com/YwNqJbS.jpeg',
          imageHint: 'regrowing green onion'
        },
        { text: 'Cúbrelas con tierra dejando la parte superior expuesta.' },
        { text: 'En pocos días verás cómo empiezan a crecer hojas nuevas.' },
        { text: 'Mantén en un lugar soleado y riega con regularidad.' },
      ],
      soil: [
        { text: 'Siembra en surcos, con 15 cm de separación entre plantas.' },
        { text: 'Asegúrate de que el suelo esté suelto y rico en compost.' },
        { text: 'Puedes "aporcar" ligeramente para blanquear la base del tallo.' },
        { text: 'Cosecha las plantas enteras o corta las hojas a 3 cm del suelo.' },
      ],
      hydroponics: [
        { text: 'Muy fácil de cultivar en sistemas hidropónicos como NFT o raíz flotante.' },
        { text: 'Incluso se pueden hacer crecer las bases en un simple vaso con agua en la ventana de la cocina.' },
        { text: 'La solución nutritiva debe estar bien balanceada.' },
        { text: 'La producción es rápida y limpia.' },
      ],
    },
    compatibility: ['Zanahoria', 'Lechuga', 'Tomate'],
    incompatibility: ['Frijol', 'Arveja'],
    warnings: 'Evita el exceso de agua para prevenir la pudrición de las raíces.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Semillas/Bases', price: 'Casi gratis si se reutilizan' },
        { item: 'Sustrato', price: '$10,000 - $15,000 COP' },
      ],
      note: 'Es uno de los cultivos más rentables para espacios pequeños.'
    },
    recommendations: '¡El huerto urbano perfecto! Guarda las bases de las cebollas que compres en el supermercado y siémbralas. Tendrás un suministro casi infinito.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu {cropName} está creciendo. ¡Mantén el riego para que no pare!',
    },
  },
  {
    id: 'pimenton',
    name: 'Pimentón',
    species: 'Capsicum annuum',
    description: 'El pimentón o pimiento morrón es una hortaliza vibrante y dulce, rica en vitamina C. Se usa en una infinidad de platos por su color y sabor. Madura de verde a rojo, amarillo o naranja.',
    imageUrl: 'https://i.imgur.com/p1d3xJ3.jpeg',
    imageHint: 'bell pepper plant',
    difficulty: 'medium',
    lifeCycle: {
      planting: '8-10 días para germinar en semillero.',
      growth: '60-90 días desde el trasplante hasta la cosecha.',
      harvest: 'Los frutos se pueden cosechar verdes o esperar a que maduren a su color final.',
      totalDays: 90,
    },
    requirements: {
      irrigation: 'Regular. No le gusta la sequía ni el encharcamiento.',
      climate: 'Climas cálidos y mucho sol.',
      space: 'pot',
      pests: 'Pulgones, mosca blanca, araña roja.',
      fertilizers: 'Necesita un suelo rico en materia orgánica y un aporte balanceado de nutrientes.',
    },
    plantingGuide: {
      pot: [
        { text: 'Usa macetas de al menos 15-20 litros.' },
        { text: 'Necesita un lugar muy soleado (mínimo 6-8 horas de sol directo).' },
        { text: 'Puede necesitar un tutor pequeño para soportar el peso de los frutos.' },
        { text: 'Riega de forma consistente para evitar estrés en la planta.' },
      ],
      soil: [
        { text: 'Trasplanta las plántulas cuando tengan 15-20 cm de altura.' },
        { text: 'Deja 40-50 cm de separación entre plantas.' },
        { 
          text: 'El mulching ayuda a mantener la humedad del suelo.',
          imageUrl: 'https://i.imgur.com/2MV0w1a.jpeg',
          imageHint: 'mulch around pepper plant'
        },
        { text: 'Cosecha cortando el tallo del fruto con tijeras para no dañar la planta.' },
      ],
      hydroponics: [
        { text: 'Se adapta muy bien a sistemas de goteo en sustratos como fibra de coco o perlita.' },
        { text: 'Requiere un control preciso del pH (5.8-6.3) y de la conductividad eléctrica.' },
        { text: 'La polinización puede necesitar ayuda en interiores (vibrando las flores).' },
        { text: 'Produce frutos limpios y de alta calidad.' },
      ],
    },
    compatibility: ['Tomate', 'Albahaca', 'Cebolla', 'Zanahoria'],
    incompatibility: ['Hinojo', 'Frijol (algunas variedades)'],
    warnings: 'Son plantas muy susceptibles al frío. No las trasplantes al exterior hasta que el clima sea consistentemente cálido.',
    costs: {
      range: 'Bajo-Medio',
      items: [
        { item: 'Semillas', price: '$3,000 - $8,000 COP' },
        { item: 'Sustrato/Abono', price: '$15,000 - $25,000 COP' },
      ],
    },
    recommendations: 'Dejar que los pimentones maduren en la planta (de verde a rojo, por ejemplo) aumenta su dulzura y contenido de vitaminas.',
    regions: ['Región Andina', 'Región Caribe', 'Región Orinoquía'],
    notifications: {
      irrigation: '¡No dejes que tu {cropName} pase sed! Un riego regular es importante.',
    },
  },
  {
    id: 'lulo',
    name: 'Lulo',
    species: 'Solanum quitoense',
    description: 'El lulo o naranjilla es una fruta emblemática de Colombia, con un sabor ácido y exótico inconfundible, ideal para jugos. La planta es un arbusto con hojas grandes y espinas.',
    imageUrl: 'https://i.imgur.com/G5g2fN4.jpeg',
    imageHint: 'lulo fruit plant',
    difficulty: 'hard',
    lifeCycle: {
      planting: '3-4 semanas para germinar.',
      growth: '10-12 meses para la primera cosecha.',
      harvest: 'La producción es continua una vez la planta madura.',
      totalDays: 365,
    },
    requirements: {
      irrigation: 'Alta humedad y riego regular.',
      climate: 'Clima fresco de montaña (14-18°C), en semisombra.',
      space: 'patio',
      pests: 'Nematodos, mosca de la fruta, gusanos.',
      fertilizers: 'Muy exigente en materia orgánica y nutrientes.',
    },
    plantingGuide: {
      pot: [
        { text: 'Difícil de mantener a largo plazo debido a su tamaño y exigencias.' },
        { text: 'Requeriría una maceta muy grande (>70L) y un sustrato muy rico.' },
        { text: 'Necesitaría un lugar con semisombra y alta humedad ambiental.' },
        { text: 'La producción de fruta sería limitada.' },
      ],
      soil: [
        { text: 'Prefiere suelos sueltos, con muchísima materia orgánica y buen drenaje.' },
        { text: 'Se cultiva idealmente bajo la sombra de otros árboles más grandes.' },
        { text: 'Deja un espacio de 2.5 x 2.5 metros entre plantas.' },
        { text: 'Ten cuidado con las espinas en el tallo y las hojas.' },
      ],
      hydroponics: [
        { text: 'No es una práctica común para el lulo.' },
        { text: 'El tamaño del arbusto y su sistema radicular lo hacen inviable para sistemas domésticos.' },
        { text: 'El control de las condiciones de semisombra y humedad sería complejo.' },
        { text: 'Limitado a investigación.' },
      ],
    },
    compatibility: ['Árboles de sombra que no compitan directamente.'],
    incompatibility: ['Cultivos que requieran pleno sol.'],
    warnings: 'El lulo es muy susceptible a nematodos, que atacan las raíces. Es crucial tener un suelo muy sano y rotar los cultivos.',
    costs: {
      range: 'Medio-Alto',
      items: [
        { item: 'Semillas/Plántulas', price: '$5,000 - $15,000 COP' },
        { item: 'Abono y materia orgánica', price: 'Requiere grandes cantidades' },
      ],
      note: 'Es un cultivo delicado que requiere experiencia.'
    },
    recommendations: 'Si quieres probar, busca variedades sin espinas, son más fáciles de manejar. Asegúrate de que tu clima es el adecuado: fresco y húmedo.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Al {cropName} le gusta el ambiente húmedo. ¡Revisa que no le falte agua!',
    },
  },
  {
    id: 'maracuya',
    name: 'Maracuyá',
    species: 'Passiflora edulis',
    description: 'El maracuyá es una fruta de la pasión, una enredadera vigorosa que produce frutos ácidos y muy aromáticos, perfectos para jugos, postres y salsas. Su flor es espectacular.',
    imageUrl: 'https://i.imgur.com/uC0v3qJ.jpeg',
    imageHint: 'passion fruit vine',
    difficulty: 'medium',
    lifeCycle: {
      planting: '2-4 semanas para germinar.',
      growth: '6-9 meses para llegar a la estructura de soporte y florecer.',
      harvest: 'Los frutos se forman y maduran en 2-3 meses. Se cosechan cuando caen al suelo.',
      totalDays: 270,
    },
    requirements: {
      irrigation: 'Regular, especialmente en floración y fructificación.',
      climate: 'Climas cálidos a templados, con mucho sol.',
      space: 'patio',
      pests: 'Pulgones, mosca de la fruta.',
      fertilizers: 'Requiere fertilizantes ricos en fósforo y potasio para la floración y fructificación.',
    },
    plantingGuide: {
      pot: [
        { text: 'Posible, pero requiere una maceta muy grande (mínimo 50L) y una estructura de soporte robusta.' },
        { text: 'La producción será menor que en suelo.' },
        { text: 'Coloca la maceta a pleno sol.' },
        { text: 'La polinización manual puede ser necesaria.' },
      ],
      soil: [
        { text: 'Necesita una estructura fuerte para trepar, como una pérgola, espaldera o cerca.' },
        { text: 'Planta al pie de la estructura de soporte.' },
        { 
          text: 'Guía los tallos principales hasta la parte superior de la estructura y luego deja que cuelguen.',
          imageUrl: 'https://i.imgur.com/S8WJz4y.jpeg',
          imageHint: 'passion fruit trellis'
        },
        { text: 'La polinización la realizan abejas grandes (abejorros) o se puede hacer a mano.' },
      ],
      hydroponics: [
        { text: 'No es una práctica común por el tamaño y vigor de la planta.' },
        { text: 'Se podría adaptar a sistemas de goteo en sacos de sustrato, pero requiere mucho espacio aéreo.' },
        { text: 'El manejo de la enredadera sería el principal desafío.' },
        { text: 'Inviabilidad a nivel doméstico.' },
      ],
    },
    compatibility: ['Plantas de cobertura de bajo crecimiento que no compitan.'],
    incompatibility: ['Árboles grandes que le den demasiada sombra.'],
    warnings: 'La polinización es clave. Si no hay suficientes abejas grandes en tu zona, tendrás que polinizar a mano usando un pincel para transferir polen de una flor a otra.',
    costs: {
      range: 'Medio',
      items: [
        { item: 'Semillas/Plántulas', price: '$5,000 - $15,000 COP' },
        { item: 'Estructura de soporte', price: 'Puede ser costosa si no se tiene' },
      ],
      note: 'La estructura es la mayor inversión.'
    },
    recommendations: 'La flor del maracuyá es una de las más bellas. ¡Cultívala aunque sea solo por verla! Para polinizar a mano, hazlo al mediodía, que es cuando las flores están más receptivas.',
    regions: ['Región Andina', 'Región Caribe', 'Región Orinoquía', 'Región Amazonía', 'Región Insular'],
    notifications: {
      irrigation: 'Tu enredadera de {cropName} está creciendo rápido. ¡Dale agua para que siga así!',
    },
  },
  {
    id: 'arracacha',
    name: 'Arracacha',
    species: 'Arracacia xanthorrhiza',
    description: 'Un tubérculo andino por excelencia, con un sabor único a medio camino entre la zanahoria y el apio. Se usa en sopas, purés y fritos. Es un cultivo de clima frío.',
    imageUrl: 'https://i.imgur.com/Z4N3bC5.jpeg',
    imageHint: 'arracacha root vegetable',
    difficulty: 'medium',
    lifeCycle: {
      planting: 'Se propaga a través de los "colinos" o brotes de la corona.',
      growth: '10-14 meses para que las raíces engrosen.',
      harvest: 'Se cosecha cuando las hojas empiezan a amarillear.',
      totalDays: 420,
    },
    requirements: {
      irrigation: 'Moderada. No tolera el encharcamiento.',
      climate: 'Clima frío (12-18°C), típico de las zonas altas andinas.',
      space: 'garden',
      pests: 'Pocas plagas significativas, es bastante rústica.',
      fertilizers: 'Requiere suelos muy sueltos y ricos en materia orgánica.',
    },
    plantingGuide: {
      pot: [
        { text: 'No es recomendable, ya que necesita mucho espacio subterráneo para formar las raíces.' },
        { text: 'Un cajón de cultivo muy profundo podría ser una alternativa experimental.' },
        { text: 'El rendimiento sería muy bajo.' },
        { text: 'Las condiciones de clima frío son difíciles de replicar en maceta.' },
      ],
      soil: [
        { text: 'El suelo debe ser muy suelto, arenoso y con excelente drenaje para permitir el desarrollo de las raíces.' },
        { text: 'Se siembran los brotes (colinos) en la parte superior de surcos o camas elevadas.' },
        { text: 'Deja una distancia de 50 cm entre plantas.' },
        { text: 'Es un cultivo de ciclo largo, requiere paciencia.' },
      ],
      hydroponics: [
        { text: 'Completamente inadecuado para este tipo de tubérculo.' },
        { text: 'Las raíces no se desarrollarían correctamente sin un medio de suelo.' },
        { text: 'No existe una metodología establecida para ello.' },
        { text: 'Inviable.' },
      ],
    },
    compatibility: ['Cultivos de ciclo corto que se puedan cosechar antes de que la arracacha ocupe todo el espacio.'],
    incompatibility: ['Cultivos que compacten el suelo.'],
    warnings: 'Es muy específica en cuanto a clima. No intentes cultivarla en tierras cálidas, no producirá raíces.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Colinos (material de siembra)', price: '$3,000 - $8,000 COP' },
        { item: 'Preparación del suelo', price: 'Puede requerir arena o compost' },
      ],
      note: 'El mayor costo es el tiempo de espera.'
    },
    recommendations: 'Si vives en una zona alta y fría de la región Andina, este es un cultivo tradicional que vale la pena preservar. Su sabor es inigualable en un buen sancocho.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Recordatorio para tu {cropName}. Un suelo bien drenado es clave, ¡sin encharcar!',
    },
  },
  {
    id: 'aji',
    name: 'Ají',
    species: 'Capsicum (varias especies)',
    description: 'El ají es el alma de muchas salsas y preparaciones en Colombia. Desde el pequeño ají pajarito hasta variedades más grandes, estas plantas son fáciles de cultivar y producen frutos durante mucho tiempo.',
    imageUrl: 'https://i.imgur.com/rM1O0H3.jpeg',
    imageHint: 'chili pepper plant',
    difficulty: 'easy',
    lifeCycle: {
      planting: '7-14 días para germinar.',
      growth: '60-90 días para empezar a producir.',
      harvest: 'Producción continua mientras el clima sea favorable.',
      totalDays: 90,
    },
    requirements: {
      irrigation: 'Regular. Mantener el suelo húmedo pero no encharcado.',
      climate: 'Climas cálidos y soleados.',
      space: 'pot',
      pests: 'Pulgones, araña roja, mosca blanca.',
      fertilizers: 'Compost o humus al inicio, y un fertilizante rico en potasio durante la producción.',
    },
    plantingGuide: {
      pot: [
        { text: 'Ideal para macetas. Una maceta de 10-15 litros es suficiente para la mayoría de variedades.' },
        { 
          text: 'Colócala en el lugar más soleado que tengas.',
          imageUrl: 'https://i.imgur.com/4h4A9V3.jpeg',
          imageHint: 'potted plant sunlight'
        },
        { text: 'Riega cuando la capa superior del sustrato esté seca.' },
        { text: 'Cosecha los ajíes cuando alcancen su color maduro para fomentar más producción.' },
      ],
      soil: [
        { text: 'Trasplanta al suelo cuando haya pasado el riesgo de frío.' },
        { text: 'Deja unos 40 cm de espacio entre plantas.' },
        { text: 'Un suelo bien drenado y rico en materia orgánica es ideal.' },
        { text: 'Las plantas pueden vivir varios años si el clima no es demasiado frío en invierno.' },
      ],
      hydroponics: [
        { text: 'Excelente candidato para hidroponía, especialmente sistemas de goteo.' },
        { text: 'Produce frutos muy limpios y la producción puede ser muy alta.' },
        { text: 'Requiere un buen control de la solución nutritiva.' },
        { text: 'En interiores, puede necesitar polinización manual o vibración.' },
      ],
    },
    compatibility: ['Tomate', 'Albahaca', 'Cebolla', 'Zanahoria'],
    incompatibility: ['Hinojo', 'Frijol'],
    warnings: 'Usa guantes al manipular ajíes muy picantes para evitar irritación en la piel y los ojos.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Semillas', price: '$2,000 - $6,000 COP' },
        { item: 'Sustrato para maceta', price: '$10,000 - $15,000 COP' },
      ],
      note: 'Una sola planta puede darte ajíes durante meses (o años).'
    },
    recommendations: '¡Experimenta con distintas variedades! Hay un mundo de sabores y niveles de picante por descubrir. Secar los ajíes es una excelente forma de conservarlos.',
    regions: ['Región Andina', 'Región Caribe', 'Región Pacífica', 'Región Orinoquía', 'Región Amazonía', 'Región Insular'],
    notifications: {
      irrigation: '¡Dale sol y agua a tu {cropName} para que pique con ganas!',
    },
  },
  {
    id: 'zanahoria',
    name: 'Zanahoria',
    species: 'Daucus carota',
    description: 'La zanahoria es una hortaliza de raíz muy popular y nutritiva. Para obtener raíces rectas y bien formadas, requiere un suelo muy suelto y profundo, libre de piedras y terrones.',
    imageUrl: 'https://i.imgur.com/xO8s0Ym.jpeg',
    imageHint: 'carrot patch garden',
    difficulty: 'easy',
    lifeCycle: {
      planting: '14-21 días para germinar.',
      growth: '50-60 días de desarrollo de la raíz.',
      harvest: 'A partir de los 70-80 días.',
      totalDays: 80,
    },
    requirements: {
      irrigation: 'Regular y profundo para que las raíces crezcan hacia abajo.',
      climate: 'Climas templados a frescos.',
      space: 'garden',
      pests: 'Mosca de la zanahoria.',
      fertilizers: 'Bajo en nitrógeno pero rico en potasio y fósforo.',
    },
    plantingGuide: {
      pot: [
        { text: 'Elige una maceta muy profunda (mínimo 30 cm) para que la raíz pueda crecer.' },
        { text: 'Utiliza un sustrato muy ligero y arenoso.' },
        { text: 'Siembra las semillas directamente y muy espaciadas.' },
        { text: 'Cuando las plántulas tengan unos 5 cm, aclara dejando un espacio de 5-7 cm entre ellas.' },
      ],
      soil: [
        { 
          text: 'El secreto es un suelo muy trabajado, suelto y sin piedras.',
          imageUrl: 'https://i.imgur.com/kS9j7wM.jpeg',
          imageHint: 'loose garden soil'
        },
        { text: 'Siembra en hileras finas y luego aclara las plántulas.' },
        { text: 'Mantén el suelo húmedo para evitar que las raíces se agrieten.' },
        { text: 'La punta de la raíz es muy sensible, evita dañar las plántulas al aclarar.' },
      ],
      hydroponics: [
        { text: 'No es un cultivo común para hidroponía por el desarrollo de la raíz.' },
        { text: 'Se puede intentar en sistemas de goteo con sustratos muy profundos y ligeros como la vermiculita.' },
        { text: 'El rendimiento y la forma de la raíz pueden no ser óptimos.' },
        { text: 'Inviable para sistemas caseros comunes.' },
      ],
    },
    compatibility: ['Lechuga', 'Cebolla', 'Rábano', 'Tomate'],
    incompatibility: ['Eneldo', 'Apio', 'Hinojo'],
    warnings: 'Un exceso de nitrógeno producirá mucho follaje y raíces pequeñas o deformes.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Semillas', price: '$2,000 - $5,000 COP' },
      ],
      note: 'El mayor costo es la preparación del suelo para que esté bien suelto.'
    },
    recommendations: 'La siembra intercalada con cebolla puede ayudar a repeler la mosca de la zanahoria. No esperes a que sean enormes para cosechar; las zanahorias jóvenes son más dulces.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu cultivo de {cropName} necesita un riego profundo para que sus raíces no se pongan duras. ¡A regar!',
    },
  },
  {
    id: 'pepino',
    name: 'Pepino',
    species: 'Cucumis sativus',
    description: 'El pepino es una planta trepadora o rastrera que produce frutos refrescantes, perfectos para ensaladas y bebidas. Es un cultivo de clima cálido que necesita mucho sol y agua.',
    imageUrl: 'https://i.imgur.com/eQxL9zP.jpeg',
    imageHint: 'cucumber vine fruit',
    difficulty: 'easy',
    lifeCycle: {
      planting: '3-10 días para germinar.',
      growth: '50-70 días para empezar a producir.',
      harvest: 'Producción continua durante varias semanas.',
      totalDays: 70,
    },
    requirements: {
      irrigation: 'Mucha agua. El suelo debe estar constantemente húmedo.',
      climate: 'Climas cálidos y soleados.',
      space: 'garden',
      pests: 'Mildiu polvoroso, pulgones.',
      fertilizers: 'Abono equilibrado durante el crecimiento y más potasio durante la fructificación.',
    },
    plantingGuide: {
      pot: [
        { text: 'Usa una maceta grande (mínimo 20L) y una estructura de soporte o enrejado.' },
        { 
          text: 'Coloca el enrejado en la maceta antes de sembrar.',
          imageUrl: 'https://i.imgur.com/4q9XqgK.jpeg',
          imageHint: 'trellis potted plant'
        },
        { text: 'Mantén la maceta a pleno sol.' },
        { text: 'Riega abundantemente, especialmente en días calurosos.' },
      ],
      soil: [
        { text: 'Entrenar la planta en un enrejado vertical ahorra espacio y mantiene los frutos limpios.' },
        { text: 'Prepara el suelo con abundante compost.' },
        { text: 'Deja un espacio de 50-60 cm entre plantas.' },
        { text: 'Cosecha los pepinos cuando tengan el tamaño deseado; si se dejan demasiado tiempo, se vuelven amargos.' },
      ],
      hydroponics: [
        { text: 'Se adapta bien a sistemas de goteo en sustratos como la fibra de coco.' },
        { text: 'El soporte vertical es aún más importante en hidroponía.' },
        { text: 'La polinización puede necesitar asistencia manual en invernaderos.' },
        { text: 'Es una forma muy eficiente de producir pepinos de alta calidad.' },
      ],
    },
    compatibility: ['Maíz', 'Frijol', 'Lechuga', 'Rábano'],
    incompatibility: ['Hierbas aromáticas fuertes', 'Papa'],
    warnings: 'El riego irregular puede causar que los pepinos se amarguen. Mantén una humedad constante.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas', price: '$3,000 - $6,000 COP' },
        { item: 'Enrejado (si es necesario)', price: '$15,000 - $30,000 COP' },
      ]
    },
    recommendations: 'Cosecha con frecuencia para estimular a la planta a producir más frutos. Un pepino cosechado a tiempo da lugar a tres nuevos.',
    regions: ['Región Andina', 'Región Caribe', 'Región Orinoquía'],
    notifications: {
      irrigation: '¡El {cropName} es casi todo agua! No dejes que le falte riego.',
    },
  },
  {
    id: 'repollo',
    name: 'Repollo',
    species: 'Brassica oleracea var. capitata',
    description: 'El repollo es una hortaliza de hoja robusta que forma una cabeza compacta. Es un cultivo de clima fresco y la base de muchas ensaladas y platos cocidos.',
    imageUrl: 'https://i.imgur.com/kS9j7wM.jpeg',
    imageHint: 'cabbage head plant',
    difficulty: 'medium',
    lifeCycle: {
      planting: '4-6 semanas en semillero.',
      growth: '60-100 días desde el trasplante hasta la formación de la cabeza.',
      harvest: 'Cuando la cabeza está firme y compacta.',
      totalDays: 100,
    },
    requirements: {
      irrigation: 'Regular y constante para evitar que la cabeza se parta.',
      climate: 'Climas frescos. El calor excesivo puede impedir que se forme la cabeza.',
      space: 'garden',
      pests: 'Gusanos de la col, pulgones.',
      fertilizers: 'Exigente en nitrógeno y potasio.',
    },
    plantingGuide: {
      pot: [
        { text: 'Usa una maceta grande, de al menos 20-25 litros.' },
        { text: 'Asegúrate de que tenga un buen drenaje.' },
        { text: 'Requiere sol, pero agradece algo de sombra en las horas más calurosas en climas templados.' },
        { text: 'El tamaño de la cabeza será probablemente menor que en suelo.' },
      ],
      soil: [
        { text: 'Trasplanta las plántulas dejando un espacio de 40-50 cm entre ellas.' },
        { text: 'El suelo debe ser rico en materia orgánica.' },
        { text: 'Un riego constante es crucial; la sequía seguida de mucha agua puede hacer que las cabezas se rajen.' },
        { text: 'Usa mallas para proteger las plantas de las mariposas de la col.' },
      ],
      hydroponics: [
        { text: 'Posible en sistemas NFT o de goteo, aunque no es muy común a nivel casero.' },
        { text: 'El control de nutrientes es clave para una buena formación de la cabeza.' },
        { text: 'Es más común en operaciones comerciales a gran escala.' },
        { text: 'El espacio requerido lo hace poco práctico para la mayoría de sistemas domésticos.' },
      ],
    },
    compatibility: ['Cebolla', 'Papas', 'Hierbas aromáticas (eneldo, romero)'],
    incompatibility: ['Tomate', 'Frijol trepador', 'Fresas'],
    warnings: 'Es muy atractivo para las plagas, especialmente las orugas. La inspección regular es fundamental.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas/Plántulas', price: '$4,000 - $8,000 COP' },
        { item: 'Abono', price: '$15,000 - $25,000 COP' },
      ],
    },
    recommendations: 'Plantar hierbas aromáticas como el romero o la menta cerca puede ayudar a repeler algunas plagas. La rotación de cultivos es muy importante para evitar enfermedades.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Un riego constante para tu {cropName} evitará que su cabeza se parta. ¡A regar!',
    },
  },
  {
    id: 'calabacin',
    name: 'Calabacín (Zucchini)',
    species: 'Cucurbita pepo',
    description: 'El calabacín es una de las plantas más productivas del huerto. Es un cultivo de verano que crece rápidamente y produce una gran cantidad de frutos versátiles, ideales para asar, saltear o en cremas.',
    imageUrl: 'https://i.imgur.com/rM1O0H3.jpeg',
    imageHint: 'zucchini plant fruit',
    difficulty: 'easy',
    lifeCycle: {
      planting: '7-10 días para germinar.',
      growth: '40-50 días hasta la primera cosecha.',
      harvest: 'Producción muy abundante y continua durante 4-6 semanas.',
      totalDays: 50,
    },
    requirements: {
      irrigation: 'Necesita mucha agua y de forma regular.',
      climate: 'Climas cálidos y soleados.',
      space: 'garden',
      pests: 'Mildiu polvoroso, pulgones.',
      fertilizers: 'Muy exigente. Necesita un suelo muy rico en compost y materia orgánica.',
    },
    plantingGuide: {
      pot: [
        { text: 'Usa una maceta grande (mínimo 25-30 litros). Elige variedades de tipo arbustivo.' },
        { text: 'Colócala a pleno sol.' },
        { text: 'Riega abundantemente, directamente en la base para no mojar las hojas.' },
        { text: 'Abona con compost líquido cada 2 semanas una vez que empiece a producir.' },
      ],
      soil: [
        { text: 'Siembra en montículos de tierra enriquecida con compost.' },
        { 
          text: 'Deja un espacio de al menos 1 metro cuadrado por planta, ya que crecen mucho.',
          imageUrl: 'https://i.imgur.com/YwNqJbS.jpeg',
          imageHint: 'zucchini plant spacing'
        },
        { text: 'Aplica mulching para conservar la humedad.' },
        { text: 'Cosecha los frutos cuando son jóvenes (15-20 cm) para un mejor sabor y para estimular más producción.' },
      ],
      hydroponics: [
        { text: 'Posible en sistemas de goteo en sacos de sustrato grandes.' },
        { text: 'Requiere mucho espacio y un manejo cuidadoso de los nutrientes.' },
        { text: 'La polinización manual es casi siempre necesaria, transfiriendo polen de las flores macho (tallo fino) a las hembra (con un pequeño fruto en la base).' },
        { text: 'El control del mildiu es más fácil.' },
      ],
    },
    compatibility: ['Maíz', 'Frijol', 'Lechuga'],
    incompatibility: ['Papa'],
    warnings: 'El mildiu polvoroso es su principal enemigo. Asegura una buena circulación de aire y evita mojar las hojas al regar.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas', price: '$3,000 - $7,000 COP' },
        { item: 'Abono/Compost', price: '$20,000 - $30,000 COP' },
      ],
      note: 'Requiere una buena cantidad inicial.'
    },
    recommendations: '¡No te descuides! Un calabacín pequeño se puede convertir en un monstruo gigante en un par de días. Cosecha a menudo. Las flores también son comestibles.',
    regions: ['Región Andina', 'Región Caribe', 'Región Orinoquía'],
    notifications: {
      irrigation: 'Tu {cropName} es una planta muy sedienta. ¡Revisa su riego, especialmente si hace calor!',
    },
  },
  {
    id: 'remolacha',
    name: 'Remolacha (Betabel)',
    species: 'Beta vulgaris',
    description: 'La remolacha es una hortaliza de raíz dulce y terrosa, conocida por su intenso color. Es versátil en la cocina, usándose tanto la raíz en ensaladas o cocida, como las hojas (similares a la acelga).',
    imageUrl: 'https://i.imgur.com/p1d3xJ3.jpeg',
    imageHint: 'beetroot plant garden',
    difficulty: 'easy',
    lifeCycle: {
      planting: '10-15 días para germinar.',
      growth: '50-70 días para que la raíz engrose.',
      harvest: 'Cuando la raíz tiene el tamaño de una pelota de tenis pequeña.',
      totalDays: 70,
    },
    requirements: {
      irrigation: 'Regular para un crecimiento uniforme.',
      climate: 'Climas templados a frescos.',
      space: 'garden',
      pests: 'Pulgones, mosca de la remolacha.',
      fertilizers: 'No muy exigente. Un suelo rico en materia orgánica es suficiente.',
    },
    plantingGuide: {
      pot: [
        { text: 'Elige una maceta profunda (mínimo 25-30 cm).' },
        { text: 'Cada "semilla" es en realidad un fruto con varias semillas, por lo que tendrás que aclarar, dejando la plántula más fuerte cada 8-10 cm.' },
        { text: 'Mantén el sustrato húmedo.' },
        { text: 'Puedes cosechar algunas hojas jóvenes para ensaladas sin afectar mucho a la raíz.' },
      ],
      soil: [
        { text: 'Siembra directamente en un suelo suelto y sin piedras.' },
        { 
          text: 'Aclara las plántulas cuando tengan unos pocos centímetros de altura.',
          imageUrl: 'https://i.imgur.com/G5g2fN4.jpeg',
          imageHint: 'thinning seedlings garden'
        },
        { text: 'Asegúrate de que la parte superior de la raíz no quede expuesta al sol; cúbrela con un poco de tierra si es necesario.' },
        { text: 'Cosecha antes de que las raíces se vuelvan leñosas.' },
      ],
      hydroponics: [
        { text: 'No es un cultivo ideal para hidroponía casera due al desarrollo de la raíz.' },
        { text: 'Se puede cultivar por sus hojas ("baby leaves") en sistemas NFT o de balsa flotante.' },
        { text: 'El desarrollo de la raíz requiere un medio de soporte profundo.' },
        { text: 'Inviable para producción de raíces a nivel doméstico.' },
      ],
    },
    compatibility: ['Lechuga', 'Cebolla', 'Repollo'],
    incompatibility: ['Frijol trepador', 'Maíz'],
    warnings: 'Las semillas múltiples pueden sorprender a los principiantes. El aclareo es un paso crucial para obtener raíces de buen tamaño.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Semillas', price: '$3,000 - $6,000 COP' },
        { item: 'Sustrato', price: '$10,000 - $15,000 COP' },
      ],
    },
    recommendations: 'No tires las hojas, ¡son deliciosas! Cocínalas como si fueran espinacas o acelgas. La variedad "Chioggia", con anillos blancos y rojos, es visualmente espectacular.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu {cropName} necesita agua constante para que sus raíces no se pongan duras. ¡A regar!',
    },
  },
  {
    id: 'arveja',
    name: 'Arveja (Guisante)',
    species: 'Pisum sativum',
    description: 'La arveja es una leguminosa de clima frío que produce vainas llenas de deliciosos granos. Hay variedades de mata baja y otras trepadoras que necesitan soporte. Enriquece el suelo fijando nitrógeno.',
    imageUrl: 'https://i.imgur.com/2MV0w1a.jpeg',
    imageHint: 'pea plant pods',
    difficulty: 'easy',
    lifeCycle: {
      planting: '7-14 días para germinar.',
      growth: '60-70 días hasta la cosecha.',
      harvest: 'La cosecha dura 2-3 semanas. Se recogen las vainas cuando están llenas y tiernas.',
      totalDays: 70,
    },
    requirements: {
      irrigation: 'Regular, especialmente durante la floración y formación de las vainas.',
      climate: 'Clima fresco a frío. No tolera el calor.',
      space: 'garden',
      pests: 'Pulgones, oídio.',
      fertilizers: 'No necesita nitrógeno. Un poco de fósforo al inicio es beneficioso.',
    },
    plantingGuide: {
      pot: [
        { text: 'Elige una variedad de mata baja para macetas.' },
        { text: 'Usa una maceta ancha y de unos 20-25 cm de profundidad.' },
        { text: 'Incluso las variedades enanas agradecen tener algunas ramitas secas como soporte.' },
        { text: 'Colócala en un lugar soleado pero fresco.' },
      ],
      soil: [
        { 
          text: 'Para variedades trepadoras, instala un enrejado o malla ANTES de sembrar.',
          imageUrl: 'https://i.imgur.com/dZc4zJc.jpeg',
          imageHint: 'garden trellis peas'
        },
        { text: 'Siembra las semillas a 3-5 cm de profundidad y a 5-8 cm de distancia entre sí.' },
        { text: 'Inocular las semillas con Rhizobium mejora la fijación de nitrógeno.' },
        { text: 'Cosecha con frecuencia para estimular más producción.' },
      ],
      hydroponics: [
        { text: 'Se pueden cultivar en sistemas verticales con soporte.' },
        { text: 'El control del oídio (un hongo) es más sencillo.' },
        { text: 'Requiere una formulación de nutrientes baja en nitrógeno.' },
        { text: 'Una opción interesante para huertos hidropónicos de interior.' },
      ],
    },
    compatibility: ['Zanahoria', 'Rábano', 'Lechuga', 'Pepino'],
    incompatibility: ['Cebolla', 'Ajo', 'Papa'],
    warnings: 'Siembra en el momento adecuado. El calor hace que la planta deje de producir y las vainas se vuelvan fibrosas.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas', price: '$3,000 - $7,000 COP' },
      ],
      note: 'El soporte se puede hacer con ramas o cuerdas.'
    },
    recommendations: '¡Nada se compara con el sabor de una arveja recién cosechada! Son increíblemente dulces. Cosecha cuando las vainas se sientan llenas al tacto.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tus plantas de {cropName} están floreciendo. ¡Un riego constante asegura vainas jugosas!',
    },
  },
  {
    id: 'hierbabuena',
    name: 'Hierbabuena',
    species: 'Mentha spicata',
    description: 'La hierbabuena es una hierba aromática increíblemente popular para infusiones, bebidas y salsas. Es muy fácil de cultivar, pero ¡cuidado! Es invasiva y puede apoderarse de tu jardín si no la controlas.',
    imageUrl: 'https://i.imgur.com/yvM7s34.jpeg',
    imageHint: 'spearmint plant pot',
    difficulty: 'easy',
    lifeCycle: {
      planting: 'Se propaga fácilmente por esquejes o división de raíces.',
      growth: 'Crecimiento muy rápido y vigoroso.',
      harvest: 'Se pueden cosechar hojas continuamente una vez la planta está establecida.',
      totalDays: 45,
    },
    requirements: {
      irrigation: 'Le gusta la humedad. Riego regular.',
      climate: 'Muy adaptable. Prefiere sol parcial pero tolera sol completo si tiene suficiente agua.',
      space: 'pot',
      pests: 'Pocas plagas, a veces pulgones u óxido.',
      fertilizers: 'No es exigente. Un poco de compost una vez al año es suficiente.',
    },
    plantingGuide: {
      pot: [
        { 
          text: '¡LA MEJOR OPCIÓN! Plantarla en maceta es la forma ideal de controlar su crecimiento invasivo.',
          imageUrl: 'https://i.imgur.com/qM6Jg7d.jpeg',
          imageHint: 'mint plant container'
        },
        { text: 'Usa una maceta ancha para que pueda extenderse.' },
        { text: 'Poda regularmente para mantenerla compacta y estimular el crecimiento de hojas nuevas.' },
        { text: 'Cada 2-3 años, puedes dividir la planta para rejuvenecerla y tener nuevas macetas.' },
      ],
      soil: [
        { text: 'Piénsalo dos veces. Si la plantas en suelo, se extenderá por todas partes a través de sus raíces (rizomas).' },
        { text: 'Si decides hacerlo, puedes enterrar una maceta sin fondo para limitar su expansión.' },
        { text: 'Elige un rincón del jardín donde no te importe que se naturalice.' },
        { text: 'Es muy difícil de erradicar una vez establecida.' },
      ],
      hydroponics: [
        { text: 'Funciona excepcionalmente bien en cualquier sistema hidropónico (NFT, balsa flotante, etc.).' },
        { text: 'Crece de forma muy rápida y limpia.' },
        { text: 'Puedes empezar simplemente poniendo un esqueje en un vaso de agua hasta que eche raíces.' },
        { text: 'Ideal para tener hierbas frescas en la cocina.' },
      ],
    },
    compatibility: ['Tomate', 'Repollo (repele la mariposa de la col)'],
    incompatibility: ['No plantar cerca de otras hierbas delicadas, ya que las puede ahogar.'],
    warnings: 'Su naturaleza invasiva es su principal característica. Sé consciente de esto antes de plantarla directamente en el suelo.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Esqueje/Planta', price: 'A menudo gratis o ~$5,000 COP' },
        { item: 'Maceta', price: '$10,000 - $20,000 COP' },
      ],
    },
    recommendations: 'Cultívala en una maceta y colócala cerca de la cocina para tenerla siempre a mano. Pódala sin miedo, cuanto más la cortes, más crecerá.',
    regions: ['Región Andina', 'Región Caribe', 'Región Pacífica', 'Región Orinoquía', 'Región Amazonía', 'Región Insular'],
    notifications: {
      irrigation: 'A la {cropName} le encanta el agua. ¡Mantén su maceta húmeda para hojas frescas y aromáticas!',
    },
  },
  {
    id: 'ahuyama',
    name: 'Ahuyama (Calabaza)',
    species: 'Cucurbita moschata',
    description: 'La ahuyama es una calabaza de invierno, un pilar en la cocina colombiana para sopas, cremas y purés. Sus plantas son grandes y rastreras, por lo que necesitan mucho espacio para extenderse por el suelo.',
    imageUrl: 'https://i.imgur.com/eB31T1H.jpeg',
    imageHint: 'pumpkin patch vine',
    difficulty: 'easy',
    lifeCycle: {
      planting: '7-10 días para germinar.',
      growth: '80-120 días desde la siembra hasta la cosecha.',
      harvest: 'Cuando el tallo que une el fruto a la planta se seca y la cáscara está dura.',
      totalDays: 120,
    },
    requirements: {
      irrigation: 'Riego profundo y regular, especialmente durante la formación del fruto.',
      climate: 'Climas cálidos y mucho sol.',
      space: 'patio',
      pests: 'Pulgones, gusanos barrenadores de la guía.',
      fertilizers: 'Muy exigente. Necesita un suelo muy rico en materia orgánica.',
    },
    plantingGuide: {
      pot: [
        { text: 'No recomendable por el gran espacio que requiere la planta.' },
        { text: 'Existen variedades enanas o de arbusto ("bush") que podrían funcionar en contenedores muy grandes (mínimo 70-100L).' },
        { text: 'El rendimiento será muy limitado.' },
        { text: 'Necesitaría mucho sol, agua y nutrientes.' },
      ],
      soil: [
        { text: 'Dale mucho, mucho espacio. Las guías pueden crecer varios metros.' },
        { text: 'Siembra en montículos de tierra muy abonada con compost.' },
        { text: 'Coloca una tabla o un trozo de teja debajo de los frutos en desarrollo para evitar que se pudran por el contacto con el suelo húmedo.' },
        { text: 'La polinización la realizan las abejas. Puedes ayudar a mano si ves que no se forman frutos.' },
      ],
      hydroponics: [
        { text: 'Completamente inviable para sistemas caseros debido al enorme tamaño de la planta.' },
        { text: 'El soporte de los frutos pesados sería un problema logístico importante.' },
        { text: 'Limitado a proyectos experimentales a gran escala.' },
        { text: 'No aplicable.' },
      ],
    },
    compatibility: ['Maíz', 'Frijol (Asociación "Tres Hermanas")'],
    incompatibility: ['Papa'],
    warnings: 'Asegúrate de tener suficiente espacio antes de sembrar. Una sola planta puede cubrir una gran área de tu jardín.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas', price: '$3,000 - $8,000 COP' },
        { item: 'Abono/Compost', price: '$20,000 - $30,000 COP' },
      ],
      note: 'Requiere una buena cantidad inicial.'
    },
    recommendations: 'La ahuyama es un cultivo ideal para la asociación de "Las Tres Hermanas" junto al maíz y el frijol. Sus grandes hojas cubren el suelo, conservando la humedad y evitando malas hierbas.',
    regions: ['Región Andina', 'Región Caribe', 'Región Orinoquía'],
    notifications: {
      irrigation: 'Tu planta de {cropName} está creciendo mucho. ¡Un buen riego profundo ayudará a formar frutos grandes!',
    },
  },
  {
    id: 'fresa',
    name: 'Fresa',
    species: 'Fragaria × ananassa',
    description: 'La fresa es una de las frutas más populares del mundo. Es una planta perenne de bajo crecimiento que se extiende mediante estolones. Perfecta para macetas colgantes y huertos verticales.',
    imageUrl: 'https://i.imgur.com/N74D2tN.jpeg',
    imageHint: 'strawberry plant fruit',
    difficulty: 'medium',
    lifeCycle: {
      planting: 'Se planta a partir de plántulas o estolones.',
      growth: '4-6 semanas para establecerse y empezar a florecer.',
      harvest: 'La cosecha comienza unos 60-90 días después de plantar y puede durar varias semanas.',
      totalDays: 90,
    },
    requirements: {
      irrigation: 'Constante y regular. El suelo debe estar siempre húmedo pero no encharcado.',
      climate: 'Climas templados. Necesita sol pero aprecia algo de sombra en las tardes calurosas.',
      space: 'pot',
      pests: 'Babosas, caracoles, araña roja, pájaros.',
      fertilizers: 'Abono rico en potasio para promover la fructificación. Humus de lombriz es ideal.',
    },
    plantingGuide: {
      pot: [
        { text: 'Ideal para macetas, jardineras o cestas colgantes.' },
        { text: 'Usa un sustrato de buena calidad con excelente drenaje.' },
        { text: 'Planta con la corona (el punto de donde salen las hojas) justo al nivel del suelo, sin enterrarla.' },
        { text: 'El mulching con paja ayuda a mantener los frutos limpios y lejos de la humedad del suelo.' },
      ],
      soil: [
        { text: 'Planta en camas elevadas para asegurar un buen drenaje.' },
        { text: 'Deja un espacio de 30-40 cm entre plantas.' },
        { text: 'Elimina los estolones si quieres frutos más grandes; déjalos si quieres que la planta se extienda.' },
        { text: 'Protege los frutos de los pájaros con una red si es necesario.' },
      ],
      hydroponics: [
        { text: 'Se adapta excelentemente a sistemas verticales y NFT.' },
        { text: 'Permite producir frutos muy limpios y de alta calidad.', },
        { text: 'Requiere un control preciso del pH (5.5-6.0) y de los nutrientes.' },
        { text: 'Es un cultivo muy popular en la hidroponía comercial y doméstica.' },
      ],
    },
    compatibility: ['Lechuga', 'Espinaca', 'Cebolla'],
    incompatibility: ['Repollo', 'Brócoli', 'Coliflor'],
    warnings: 'Los frutos son muy atractivos para babosas y pájaros. La vigilancia y protección son clave. Evita mojar los frutos al regar.',
    costs: {
      range: 'Medio',
      items: [
        { item: 'Plántulas', price: '$2,000 - $5,000 COP c/u' },
        { item: 'Sustrato de calidad', price: '$15,000 - $25,000 COP' },
      ],
    },
    recommendations: 'Renueva las plantas cada 2-3 años para mantener una producción vigorosa. Usar los estolones que produce la propia planta es una forma fácil y gratuita de hacerlo.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Las fresas necesitan humedad constante. ¡No dejes que tu planta de {cropName} se seque!',
    },
  },
  {
    id: 'espinaca',
    name: 'Espinaca',
    species: 'Spinacia oleracea',
    description: 'La espinaca es una hortaliza de hoja verde muy nutritiva y de crecimiento increíblemente rápido. Es un cultivo de clima frío, perfecto para las temporadas más frescas del año.',
    imageUrl: 'https://i.imgur.com/XwFvI2L.jpeg',
    imageHint: 'spinach patch garden',
    difficulty: 'easy',
    lifeCycle: {
      planting: '5-10 días para germinar.',
      growth: '30-40 días para el desarrollo de hojas.',
      harvest: 'A partir de los 40-50 días.',
      totalDays: 50,
    },
    requirements: {
      irrigation: 'Regular. Mantener el suelo húmedo.',
      climate: 'Clima fresco. El calor provoca la floración prematura.',
      space: 'pot',
      pests: 'Pulgones, mildiu.',
      fertilizers: 'Rico en nitrógeno para un buen desarrollo de las hojas.',
    },
    plantingGuide: {
      pot: [
        { text: 'Funciona muy bien en macetas y jardineras de al menos 15 cm de profundidad.' },
        { text: 'Siembra las semillas directamente y de forma espaciada.' },
        { text: 'Puedes cosechar las hojas exteriores, permitiendo que la planta siga produciendo desde el centro.' },
        { text: 'Colócala en un lugar que reciba sol de la mañana y sombra por la tarde en climas templados.' },
      ],
      soil: [
        { text: 'Siembra en hileras o al voleo en camas de cultivo.' },
        { text: 'El suelo debe ser rico en compost y tener buen drenaje.' },
        { text: 'Realiza siembras sucesivas cada 2 semanas para una cosecha continua.' },
        { text: 'Cosecha antes de que la planta desarrolle un tallo floral, ya que las hojas se vuelven amargas.' },
      ],
      hydroponics: [
        { text: 'Ideal para sistemas de balsa flotante (DWC) o NFT.' },
        { text: 'El crecimiento es extremadamente rápido y limpio.' },
        { text: 'Permite cosechas continuas de "baby leaf" (hojas tiernas).' },
        { text: 'Mantener la solución nutritiva fresca es clave.' },
      ],
    },
    compatibility: ['Fresas', 'Repollo', 'Lechuga'],
    incompatibility: ['Papa'],
    warnings: 'El calor es su principal enemigo. En climas cálidos, siémbrala en la temporada más fresca o en lugares con sombra parcial.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Semillas', price: '$2,000 - $5,000 COP' },
      ],
    },
    recommendations: 'Para una cosecha continua, corta solo las hojas exteriores y deja que las del centro sigan creciendo. Es mucho más productivo que cortar la planta entera.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu {cropName} crece rápido con agua constante. ¡Es hora de regar!',
    },
  },
  {
    id: 'brocoli',
    name: 'Brócoli',
    species: 'Brassica oleracea var. italica',
    description: 'El brócoli es una inflorescencia comestible de la familia de la col. Es un cultivo de clima fresco muy nutritivo. Después de cortar la cabeza principal, la planta suele producir cabezas secundarias más pequeñas.',
    imageUrl: 'https://i.imgur.com/4g5s8sT.jpeg',
    imageHint: 'broccoli plant head',
    difficulty: 'medium',
    lifeCycle: {
      planting: '4-6 semanas en semillero.',
      growth: '60-90 días desde el trasplante hasta la cosecha.',
      harvest: 'Cuando la cabeza principal está compacta y de color verde oscuro, antes de que las flores amarillas se abran.',
      totalDays: 90,
    },
    requirements: {
      irrigation: 'Regular y profundo. El estrés hídrico puede afectar la formación de la cabeza.',
      climate: 'Clima fresco. El calor extremo puede hacer que florezca prematuramente.',
      space: 'garden',
      pests: 'Pulgones, gusanos de la col.',
      fertilizers: 'Exigente en nutrientes, especialmente nitrógeno y boro.',
    },
    plantingGuide: {
      pot: [
        { text: 'Requiere una maceta grande y profunda (mínimo 20-25 litros).' },
        { text: 'Una planta por maceta para asegurar suficiente espacio y nutrientes.' },
        { text: 'Necesita un lugar soleado pero que no se sobrecaliente.' },
        { text: 'Fertilización regular con compost líquido es necesaria.' },
      ],
      soil: [
        { text: 'Trasplanta las plántulas dejando un espacio de 45-60 cm entre ellas.' },
        { text: 'El suelo debe ser muy rico en materia orgánica y tener un buen drenaje.' },
        { text: 'Corta la cabeza principal con un cuchillo, dejando el resto de la planta en su sitio.' },
        { text: 'Continúa cuidando la planta para cosechar los brotes laterales.' },
      ],
      hydroponics: [
        { text: 'No es un cultivo común para sistemas hidropónicos caseros due a su tamaño y ciclo largo.' },
        { text: 'Posible en sistemas de goteo o DWC con suficiente espacio.' },
        { text: 'Requiere un manejo cuidadoso de la solución nutritiva para evitar deficiencias de micronutrientes como el boro.' },
        { text: 'Se practica en entornos comerciales controlados.' },
      ],
    },
    compatibility: ['Cebolla', 'Papas', 'Romero', 'Menta'],
    incompatibility: ['Tomate', 'Fresa', 'Frijol trepador'],
    warnings: 'Cosecha en el momento justo. Si esperas demasiado, las cabezas se abrirán y florecerán, perdiendo su textura y sabor.',
    costs: {
      range: 'Bajo-Medio',
      items: [
        { item: 'Semillas/Plántulas', price: '$4,000 - $8,000 COP' },
        { item: 'Abono rico en nutrientes', price: '$15,000 - $25,000 COP' },
      ],
    },
    recommendations: 'No deseches la planta después de cortar la cabeza principal. Con buen cuidado, te dará una segunda cosecha de pequeños y tiernos brotes laterales.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu {cropName} está formando su cabeza. ¡Un riego constante es vital para que no se estrese!',
    },
  },
  {
    id: 'ajo',
    name: 'Ajo',
    species: 'Allium sativum',
    description: 'El ajo es un pilar en cocinas de todo el mundo. Se cultiva a partir de los dientes individuales y tiene un ciclo de vida largo, requiriendo paciencia. Cada diente plantado se convierte en una cabeza de ajo completa.',
    imageUrl: 'https://i.imgur.com/YwNqJbS.jpeg',
    imageHint: 'garlic plant bulbs',
    difficulty: 'easy',
    lifeCycle: {
      planting: 'Se plantan los dientes en otoño o a principios de primavera.',
      growth: '6-9 meses. El crecimiento es lento y requiere un período de frío.',
      harvest: 'Cuando las hojas inferiores empiezan a ponerse amarillas y a secarse.',
      totalDays: 240,
    },
    requirements: {
      irrigation: 'Moderado. Reducir el riego cerca de la cosecha.',
      climate: 'Necesita un período de frío para la correcta formación del bulbo.',
      space: 'pot',
      pests: 'Pocas plagas, a veces roya.',
      fertilizers: 'No muy exigente. Un suelo bien drenado y con materia orgánica es suficiente.',
    },
    plantingGuide: {
      pot: [
        { text: 'Funciona bien en macetas de al menos 20 cm de profundidad.' },
        { text: 'Planta los dientes de ajo con la punta hacia arriba, a unos 5 cm de profundidad y 10 cm de separación.' },
        { text: 'Usa los dientes más grandes y sanos de una cabeza de ajo.' },
        { text: 'Coloca la maceta en un lugar soleado.' },
      ],
      soil: [
        { text: 'Elige un lugar soleado con suelo muy bien drenado para evitar que los bulbos se pudran.' },
        { text: 'Planta los dientes con una separación de 10-15 cm.' },
        { text: 'Deja de regar 2-3 semanas antes de la cosecha para ayudar al proceso de curado.' },
        { text: 'Cosecha con cuidado y deja secar los bulbos en un lugar sombreado y aireado durante varias semanas.' },
      ],
      hydroponics: [
        { text: 'No es un cultivo adecuado para sistemas hidropónicos, ya que requiere un ciclo de secado en el suelo.' },
        { text: 'El desarrollo del bulbo y el proceso de curado son incompatibles con la hidroponía.' },
        { text: 'Se puede cultivar por sus hojas verdes (ajo tierno), pero no para producir cabezas.' },
        { text: 'No aplicable para la producción de bulbos.' },
      ],
    },
    compatibility: ['Tomate', 'Zanahoria', 'Remolacha'],
    incompatibility: ['Frijoles', 'Arvejas'],
    warnings: 'El ciclo es largo, así que no te impacientes. El momento de la cosecha es crucial para un buen almacenamiento.',
    costs: {
      range: 'Muy Bajo',
      items: [
        { item: 'Cabeza de ajo para plantar', price: '$1,000 - $3,000 COP' },
      ],
      note: 'Puedes usar ajos comprados en el supermercado, preferiblemente orgánicos.'
    },
    recommendations: 'Plantar ajos alrededor de otras plantas (como rosales) puede ayudar a repeler pulgones. Es un excelente compañero de huerto.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu {cropName} está creciendo lentamente. ¡Recuerda no regar en exceso!',
    },
  },
  {
    id: 'cebolla-huevo',
    name: 'Cebolla de Huevo (Bulbo)',
    species: 'Allium cepa',
    description: 'La cebolla de bulbo es otra hortaliza fundamental en la cocina. Requiere un ciclo largo y condiciones específicas de luz (días largos o cortos según la variedad) para formar el bulbo.',
    imageUrl: 'https://i.imgur.com/p1d3xJ3.jpeg',
    imageHint: 'onion bulb patch',
    difficulty: 'medium',
    lifeCycle: {
      planting: 'Se puede empezar desde semilla (largo), o desde bulbillos (más fácil).',
      growth: '90-120 días para la formación y maduración del bulbo.',
      harvest: 'Cuando el cuello se ablanda y las hojas se caen y se secan.',
      totalDays: 120,
    },
    requirements: {
      irrigation: 'Regular al principio, reducir al final para el curado.',
      climate: 'Templado. La formación del bulbo depende de la duración del día (fotoperiodo).',
      space: 'garden',
      pests: 'Trips, mosca de la cebolla.',
      fertilizers: 'Requiere fósforo para el desarrollo de la raíz y potasio para el bulbo.',
    },
    plantingGuide: {
      pot: [
        { text: 'Posible en macetas o cajones de al menos 20 cm de profundidad.' },
        { text: 'Planta los bulbillos (cebollas pequeñas) dejando la punta expuesta.' },
        { text: 'Deja unos 10 cm de espacio entre cada bulbo.' },
        { text: 'El tamaño final del bulbo dependerá del espacio y los nutrientes disponibles.' },
      ],
      soil: [
        { text: 'Elige una variedad adecuada para el fotoperiodo de tu región (en Colombia, suelen ser de día corto).' },
        { text: 'El suelo debe estar suelto y bien drenado.' },
        { text: 'Mantén el área libre de malezas, ya que las cebollas no compiten bien.' },
        { text: 'Cosecha en un día seco y cura las cebollas al sol por uno o dos días antes de almacenarlas.' },
      ],
      hydroponics: [
        { text: 'No es un cultivo práctico para hidroponía si el objetivo es producir bulbos secos.' },
        { text: 'El proceso de curado y secado es incompatible con un medio acuoso.' },
        { text: 'Se pueden cultivar para obtener cebollas tiernas o verdes.' },
        { text: 'No aplicable para la producción de bulbos de almacenamiento.' },
      ],
    },
    compatibility: ['Zanahoria', 'Lechuga', 'Remolacha', 'Fresa'],
    incompatibility: ['Frijoles', 'Arvejas'],
    warnings: 'Elegir la variedad correcta (de día corto, intermedio o largo) según tu latitud es el factor más importante para tener éxito.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas o bulbillos', price: '$5,000 - $10,000 COP' },
      ],
    },
    recommendations: 'Plantar cebollas junto a las zanahorias puede ser beneficioso para ambas, ya que se repelen mutuamente sus respectivas moscas.',
    regions: ['Región Andina', 'Región Caribe'],
    notifications: {
      irrigation: 'Tu cultivo de {cropName} necesita agua para formar sus bulbos. ¡Mantén el riego!',
    },
  },
  {
    id: 'habichuela',
    name: 'Habichuela',
    species: 'Phaseolus vulgaris',
    description: 'La habichuela, también conocida como judía verde, es una leguminosa cuyas vainas tiernas son comestibles. Es un cultivo muy productivo y existen variedades de mata baja (arbustivas) y de enrame (trepadoras).',
    imageUrl: 'https://i.imgur.com/G5g2fN4.jpeg',
    imageHint: 'green bean plant pods',
    difficulty: 'easy',
    lifeCycle: {
      planting: '5-10 días para germinar.',
      growth: '50-70 días para empezar la producción.',
      harvest: 'Cosecha continua durante varias semanas. Recoger las vainas estimula más producción.',
      totalDays: 70,
    },
    requirements: {
      irrigation: 'Regular y constante, especialmente durante la floración.',
      climate: 'Climas templados a cálidos. Sensible a las heladas.',
      space: 'pot',
      pests: 'Pulgones, araña roja.',
      fertilizers: 'Bajo en nitrógeno, ya que lo fija del aire. Un suelo con compost es suficiente.',
    },
    plantingGuide: {
      pot: [
        { text: 'Elige variedades de mata baja para macetas. Un contenedor de 20L es adecuado.' },
        { text: 'Las variedades trepadoras necesitan una maceta más grande y un tutor o enrejado.' },
        { text: 'Coloca en un lugar soleado.' },
        { text: 'Cosecha las vainas cuando estén tiernas, antes de que los granos se marquen demasiado.' },
      ],
      soil: [
        { text: 'Para variedades trepadoras, instala el soporte antes de sembrar.' },
        { text: 'Siembra las semillas a 3-5 cm de profundidad.' },
        { text: 'Para variedades de mata, siembra en hileras separadas 40-50 cm.' },
        { text: 'La cosecha frecuente es clave para una producción prolongada.' },
      ],
      hydroponics: [
        { text: 'Las variedades de mata baja se adaptan bien a sistemas de goteo.' },
        { text: 'Las variedades trepadoras pueden cultivarse en sistemas verticales.' },
        { text: 'La producción es limpia y de alta calidad.' },
        { text: 'Requiere una formulación de nutrientes específica para leguminosas.' },
      ],
    },
    compatibility: ['Maíz', 'Zanahoria', 'Pepino', 'Fresa'],
    incompatibility: ['Cebolla', 'Ajo', 'Hinojo'],
    warnings: 'Cosecha las habichuelas con regularidad. Si dejas que las vainas maduren y se sequen en la planta, esta dejará de producir vainas nuevas.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas', price: '$3,000 - $7,000 COP' },
      ],
    },
    recommendations: 'Las variedades trepadoras son excelentes para maximizar el espacio vertical en huertos pequeños. Las de mata baja son más rápidas y no necesitan soporte.',
    regions: ['Región Andina', 'Región Caribe'],
    notifications: {
      irrigation: 'Tus {cropName} están floreciendo. ¡Un riego constante es clave para tener vainas tiernas y crujientes!',
    },
  },
  {
    id: 'jengibre',
    name: 'Jengibre',
    species: 'Zingiber officinale',
    description: 'El jengibre es un rizoma aromático y picante usado como especia y medicina. Es una planta tropical que crece bien en condiciones de calor y humedad, ideal para climas cálidos o para cultivar en maceta en interiores.',
    imageUrl: 'https://i.imgur.com/2MV0w1a.jpeg',
    imageHint: 'ginger plant root',
    difficulty: 'medium',
    lifeCycle: {
      planting: 'Se planta a partir de un trozo de rizoma fresco.',
      growth: '8-10 meses para que el rizoma madure y desarrolle su sabor completo.',
      harvest: 'Cuando las hojas se vuelven amarillas y se secan.',
      totalDays: 300,
    },
    requirements: {
      irrigation: 'Mantener el suelo consistentemente húmedo pero no encharcado.',
      climate: 'Clima cálido y húmedo. Prefiere la semisombra o luz filtrada.',
      space: 'pot',
      pests: 'Pocas plagas, a veces ácaros o pudrición del rizoma.',
      fertilizers: 'Requiere un suelo muy rico en materia orgánica y con buen drenaje.',
    },
    plantingGuide: {
      pot: [
        { text: 'Excelente para el cultivo en macetas. Usa una maceta ancha y poco profunda.' },
        { text: 'Planta un trozo de rizoma de unos 5 cm con varios "ojos" o brotes, a unos 5-10 cm de profundidad.' },
        { text: 'Coloca la maceta en un lugar cálido y con luz indirecta brillante.' },
        { text: 'El riego es clave: el sustrato debe estar siempre húmedo.' },
      ],
      soil: [
        { text: 'Elige un lugar con semisombra y protegido del viento.' },
        { text: 'El suelo debe ser muy suelto y enriquecido con mucho compost para un buen drenaje.' },
        { text: 'Planta los rizomas a una distancia de 20-30 cm.' },
        { text: 'Cosecha con cuidado desenterrando parte del rizoma o la planta entera.' },
      ],
      hydroponics: [
        { text: 'No es una práctica común, pero se puede intentar en sistemas de goteo con sustratos como fibra de coco o perlita.' },
        { text: 'Requeriría un control muy cuidadoso de la humedad para evitar la pudrición del rizoma.' },
        { text: 'El ciclo largo lo hace un cultivo poco práctico para la mayoría de sistemas hidropónicos.' },
        { text: 'Experimental y no recomendado para principiantes.' },
      ],
    },
    compatibility: ['Plantas que disfruten de condiciones similares de sombra y humedad.'],
    incompatibility: ['Plantas que requieran pleno sol y suelo seco.'],
    warnings: 'La pudrición del rizoma por exceso de riego es el principal problema. Asegura un drenaje impecable.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Rizoma de jengibre para plantar', price: '$2,000 - $5,000 COP' },
        { item: 'Sustrato de alta calidad', price: '$15,000 - $25,000 COP' },
      ],
    },
    recommendations: 'Puedes empezar con un trozo de jengibre del supermercado. Déjalo en un lugar luminoso hasta que le empiecen a salir pequeños brotes verdes, y luego siémbralo.',
    regions: ['Región Caribe', 'Región Pacífica', 'Región Orinoquía', 'Región Amazonía'],
    notifications: {
      irrigation: 'Al {cropName} le encanta la humedad. ¡Asegúrate de que su tierra esté siempre húmeda!',
    },
  },
  {
    id: 'gulupa',
    name: 'Gulupa',
    species: 'Passiflora edulis f. edulis',
    description: 'La gulupa es una fruta de la pasión de piel morada, más pequeña y dulce que el maracuyá. Es una enredadera que requiere soporte y es apreciada por su sabor exótico y sus propiedades antioxidantes.',
    imageUrl: 'https://i.imgur.com/dZc4zJc.jpeg',
    imageHint: 'purple passion fruit',
    difficulty: 'medium',
    lifeCycle: {
      planting: '2-4 semanas para germinar.',
      growth: '6-9 meses para alcanzar la madurez y empezar a florecer.',
      harvest: 'La producción es continua. Los frutos se cosechan cuando la piel se arruga ligeramente.',
      totalDays: 270,
    },
    requirements: {
      irrigation: 'Regular, especialmente en épocas de floración y fructificación.',
      climate: 'Climas templados a fríos de altura (1,500 - 2,200 msnm).',
      space: 'patio',
      pests: 'Mosca de la fruta, ácaros.',
      fertilizers: 'Requiere suelos ricos en materia orgánica y fertilización balanceada.',
    },
    plantingGuide: {
      pot: [
        { text: 'Posible en macetas muy grandes (mínimo 50L) con un enrejado o soporte robusto.' },
        { text: 'La producción será limitada en comparación con el cultivo en suelo.' },
        { text: 'Requiere pleno sol y buena circulación de aire.' },
        { text: 'La polinización manual puede ser necesaria para asegurar una buena cosecha.' },
      ],
      soil: [
        { text: 'Necesita una estructura de soporte fuerte, como una espaldera o pérgola.' },
        { text: 'Planta al pie de la estructura y guía los tallos jóvenes hacia ella.' },
        { text: 'La polinización es realizada por abejas grandes. Un huerto diverso ayuda a atraer polinizadores.' },
        { text: 'Realiza podas de formación y mantenimiento para controlar el crecimiento y estimular la producción.' },
      ],
      hydroponics: [
        { text: 'No es una práctica común debido al gran tamaño y vigor de la planta.' },
        { text: 'Inviabilidad a nivel doméstico debido a los requerimientos de espacio y soporte.' },
        { text: 'Limitado a proyectos de investigación.' },
        { text: 'No aplicable para huertos caseros.' },
      ],
    },
    compatibility: ['Plantas de cobertura que no compitan por nutrientes.'],
    incompatibility: ['Árboles que proyecten demasiada sombra.'],
    warnings: 'Al igual que otras pasifloras, la polinización es fundamental. Sin los polinizadores adecuados, no obtendrás frutos.',
    costs: {
      range: 'Medio',
      items: [
        { item: 'Plántulas', price: '$8,000 - $20,000 COP' },
        { item: 'Estructura de soporte', price: 'Variable, puede ser una inversión importante' },
      ],
    },
    recommendations: 'La poda es clave para mantener la planta productiva y bajo control. Investiga sobre podas de formación para guiar el crecimiento inicial.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu planta de {cropName} está floreciendo. ¡Un riego regular ayudará a formar frutos deliciosos!',
    },
  },
  {
    id: 'uchuva',
    name: 'Uchuva',
    species: 'Physalis peruviana',
    description: 'La uchuva, también conocida como alquequenje o physalis, es un arbusto que produce un pequeño fruto anaranjado envuelto en un capacho de papel. Su sabor es agridulce y es muy popular en postres y como fruta fresca.',
    imageUrl: 'https://i.imgur.com/yvM7s34.jpeg',
    imageHint: 'cape gooseberry plant',
    difficulty: 'easy',
    lifeCycle: {
      planting: '2-3 semanas para germinar.',
      growth: '3-4 meses para empezar a producir.',
      harvest: 'Producción continua. Se cosecha cuando el capacho que envuelve la fruta se seca y se vuelve pajizo.',
      totalDays: 120,
    },
    requirements: {
      irrigation: 'Moderado. Tolera períodos cortos de sequía una vez establecida.',
      climate: 'Climas templados a fríos de altura (1,800 - 2,800 msnm).',
      space: 'garden',
      pests: 'Pulgones, mosca blanca.',
      fertilizers: 'No es muy exigente. Un suelo bien drenado y con algo de compost es suficiente.',
    },
    plantingGuide: {
      pot: [
        { text: 'Se adapta bien a macetas grandes (mínimo 20L).' },
        { text: 'Puede necesitar un tutor para soportar el peso de la planta cuando está cargada de frutos.' },
        { text: 'Colócala en un lugar a pleno sol.' },
        { text: 'Es una planta atractiva y fácil de cuidar en un balcón o patio.' },
      ],
      soil: [
        { text: 'Crece como un arbusto que puede alcanzar 1-1.5 metros de altura.' },
        { text: 'Deja un espacio de al menos 1 metro entre plantas.' },
        { text: 'Se resiembra muy fácilmente por sí misma si los frutos caen al suelo.' },
        { text: 'Cosecha los frutos regularmente para estimular la producción.' },
      ],
      hydroponics: [
        { text: 'Posible en sistemas de goteo con sustrato, pero no es una práctica común a nivel doméstico.' },
        { text: 'El manejo del arbusto y el soporte serían necesarios.' },
        { text: 'Una opción viable pero que requiere más manejo que el cultivo en suelo o maceta.' },
        { text: 'No aplicable para sistemas NFT o de balsa flotante.' },
      ],
    },
    compatibility: ['Hortalizas de bajo crecimiento.'],
    incompatibility: ['Papa', 'Tomate (por ser de la misma familia y compartir plagas).'],
    warnings: 'No consumas el fruto si no está maduro (de color verde), ya que puede ser tóxico.',
    costs: {
      range: 'Bajo',
      items: [
        { item: 'Semillas/Plántulas', price: '$5,000 - $10,000 COP' },
      ],
    },
    recommendations: 'Es una planta muy agradecida y productiva. Una vez que la tienes, es probable que tengas uchuvas por años, ya que se resiembra sola con facilidad.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'Tu planta de {cropName} es resistente, pero un poco de agua le vendrá bien para seguir produciendo.',
    },
  },
  {
    id: 'granadilla',
    name: 'Granadilla',
    species: 'Passiflora ligularis',
    description: 'La granadilla es una de las pasifloras más dulces y apreciadas. Su pulpa gelatinosa y sus semillas comestibles la hacen una fruta deliciosa para comer fresca. Es una enredadera vigorosa que necesita un clima específico.',
    imageUrl: 'https://i.imgur.com/qM6Jg7d.jpeg',
    imageHint: 'sweet granadilla vine',
    difficulty: 'hard',
    lifeCycle: {
      planting: '3-5 semanas para germinar.',
      growth: '8-12 meses para llegar a la madurez y florecer.',
      harvest: 'Los frutos se cosechan cuando tienen un color amarillo anaranjado uniforme.',
      totalDays: 365,
    },
    requirements: {
      irrigation: 'Regular. Requiere buena humedad pero sin encharcamiento.',
      climate: 'Clima templado de montaña (15-20°C y 1,700-2,500 msnm). Muy sensible a temperaturas extremas.',
      space: 'patio',
      pests: 'Mosca de la fruta, trips.',
      fertilizers: 'Requiere suelos fértiles, con buen drenaje y ricos en materia orgánica.',
    },
    plantingGuide: {
      pot: [
        { text: 'No recomendable. Su sistema de raíces y el vigor de la enredadera la hacen inviable para macetas.' },
        { text: 'El control de las condiciones climáticas específicas sería muy difícil en una maceta.' },
        { text: 'No produciría frutos de manera viable.' },
        { text: 'Inviable.' },
      ],
      soil: [
        { text: 'Requiere una estructura de soporte muy robusta, como parrales o pérgolas altas.' },
        { text: 'La polinización es crucial y la realizan abejas y otros insectos.' },
        { text: 'El manejo de podas es fundamental para la producción y la salud de la planta.' },
        { text: 'Es un cultivo de largo plazo que requiere dedicación y conocimientos específicos.' },
      ],
      hydroponics: [
        { text: 'No es una práctica comercial ni doméstica para este cultivo.' },
        { text: 'El tamaño y los requerimientos de la planta lo hacen inviable.' },
        { text: 'Limitado a investigación.' },
        { text: 'No aplicable.' },
      ],
    },
    compatibility: ['Plantas de cobertura de bajo crecimiento.'],
    incompatibility: ['Árboles grandes que le den demasiada sombra.'],
    warnings: 'Es muy específica en cuanto a clima y altitud. No intentes cultivarla fuera de su rango ideal, ya que probablemente no producirá frutos.',
    costs: {
      range: 'Alto',
      items: [
        { item: 'Plántulas certificadas', price: '$10,000 - $25,000 COP' },
        { item: 'Estructura de soporte (parral)', price: 'Inversión muy significativa' },
      ],
      note: 'Es un cultivo comercial que requiere una inversión y manejo técnico considerables.'
    },
    recommendations: 'Si tienes las condiciones climáticas y el espacio, es una de las frutas más deliciosas que puedes cultivar. Considera visitar un cultivo comercial para aprender sobre su manejo.',
    regions: ['Región Andina'],
    notifications: {
      irrigation: 'La {cropName} necesita condiciones estables. ¡Revisa el riego para mantenerla feliz!',
    },
  }
];

export const REGIONS = [
  { 
    id: 'andina', 
    name: 'Región Andina', 
    position: [4.7110, -74.0721] as [number, number]
  },
  { 
    id: 'caribe', 
    name: 'Región Caribe', 
    position: [10.9639, -74.7964] as [number, number]
  },
  { 
    id: 'pacifica', 
    name: 'Región Pacífica', 
    position: [3.4516, -76.5320] as [number, number]
  },
  { 
    id: 'orinoquia', 
    name: 'Región Orinoquía', 
    position: [4.1483, -72.9350] as [number, number]
  },
  { 
    id: 'amazonia', 
    name: 'Región Amazonía', 
    position: [-0.9918, -72.0577] as [number, number]
  },
   { 
    id: 'insular', 
    name: 'Región Insular', 
    position: [12.5847, -81.7006] as [number, number]
  },
];

export const SPACES = [
    { id: 'pot', name: 'Maceta' },
    { id: 'garden', name: 'Huerto/Jardín' },
    { id: 'patio', name: 'Patio grande' },
];

export const EXPERIENCE_LEVELS = [
    { id: 'beginner', name: 'Principiante (cultivos de bajo mantenimiento)' },
    { id: 'intermediate', name: 'Intermedio (busco algo más de variedad)' },
    { id: 'advanced', name: 'Avanzado (listo para un reto)' },
];

export const DIFFICULTY_OPTIONS = [
  { value: 'easy', label: 'Fácil' },
  { value: 'medium', label: 'Medio' },
  { value: 'hard', label: 'Difícil' },
];

export const SPACE_OPTIONS = [
  { value: 'pot', label: 'Maceta' },
  { value: 'garden', label: 'Huerto/Jardín' },
  { value: 'patio', label: 'Patio grande' },
];

