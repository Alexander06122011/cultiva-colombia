
'use server';

/**
 * @fileOverview Herramienta con IA para detectar especies de plantas y su estado de salud a partir de imágenes.
 *
 * - detectPlantHealth - Una función que maneja el proceso de detección de plantas y diagnóstico de salud.
 * - DetectPlantHealthInput - El tipo de entrada para la función detectPlantHealth.
 * - DetectPlantHealthOutput - El tipo de retorno para la función detectPlantHealth.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetectPlantHealthInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "Una foto de una planta, como un URI de datos que debe incluir un tipo MIME y usar codificación Base64. Formato esperado: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type DetectPlantHealthInput = z.infer<typeof DetectPlantHealthInputSchema>;

const DetectPlantHealthOutputSchema = z.object({
  isPlant: z.boolean().describe('Indica si la imagen contiene una planta.'),
  species: z.string().describe('La especie identificada de la planta.'),
  healthStatus: z
    .string()
    .describe('El estado de salud de la planta (ej. Saludable, Enferma).'),
  recommendations: z
    .string()
    .optional()
    .describe(
      'Si la planta no está saludable, proporciona una lista de recomendaciones para mejorar su salud. Si está saludable, este campo puede omitirse.'
    ),
});
export type DetectPlantHealthOutput = z.infer<typeof DetectPlantHealthOutputSchema>;

export async function detectPlantHealth(input: DetectPlantHealthInput): Promise<DetectPlantHealthOutput> {
  return detectPlantHealthFlow(input);
}

const prompt = ai.definePrompt({
  name: 'detectPlantHealthPrompt',
  input: {schema: DetectPlantHealthInputSchema},
  output: {schema: DetectPlantHealthOutputSchema},
  prompt: `Eres un botánico experto. Tu tarea es analizar la imagen de una planta y proporcionar un diagnóstico completo en español.

1.  **Determina si la imagen es una planta.** Si no lo es, establece el campo 'isPlant' en 'false' y deja los otros campos vacíos.
2.  **Si es una planta, identifica la especie** en la foto y pon 'isPlant' a 'true'.
3.  **Evalúa su estado de salud** (por ejemplo, Saludable, Enferma, Deficiencia de nutrientes, etc.).
4.  **Si la planta NO está saludable**, proporciona una lista de recomendaciones claras y accionables para mejorar su condición en el campo 'recommendations'. Describe los posibles problemas (plagas, enfermedades, deficiencias) y los pasos a seguir para solucionarlos. Si la planta está saludable, no es necesario que des recomendaciones.

TODAS TUS RESPUESTAS DEBEN ESTAR EN ESPAÑOL.

Foto: {{media url=photoDataUri}}`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_NONE',
      },
    ],
  },
});

const detectPlantHealthFlow = ai.defineFlow(
  {
    name: 'detectPlantHealthFlow',
    inputSchema: DetectPlantHealthInputSchema,
    outputSchema: DetectPlantHealthOutputSchema,
  },
  async (input) => {
    const response = await prompt(input);
    const output = response.output;

    if (!output) {
      console.error('AI model failed to produce valid output.', { text: response.text });
      throw new Error(
        'La IA no pudo procesar la imagen. Por favor, intenta con una foto más clara o diferente.'
      );
    }

    if (!output.isPlant) {
        return {
            isPlant: false,
            species: "Imagen no reconocida",
            healthStatus: "La imagen analizada no parece ser una planta.",
        }
    }

    return output;
  }
);
