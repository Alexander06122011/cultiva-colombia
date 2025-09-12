'use server';
/**
 * @fileOverview Un flow de Genkit para manejar el envío de sugerencias de usuarios.
 *
 * - submitSuggestion - Una función que procesa la sugerencia enviada por un usuario.
 * - SubmitSuggestionInput - El tipo de entrada para la función submitSuggestion.
 * - SubmitSuggestionOutput - El tipo de retorno para la función submitSuggestion.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SubmitSuggestionInputSchema = z.object({
  suggestion: z.string().describe('El texto de la sugerencia del usuario.'),
});
export type SubmitSuggestionInput = z.infer<typeof SubmitSuggestionInputSchema>;

const SubmitSuggestionOutputSchema = z.object({
  thankYouMessage: z.string().describe('Un mensaje de agradecimiento para el usuario.'),
});
export type SubmitSuggestionOutput = z.infer<typeof SubmitSuggestionOutputSchema>;

export async function submitSuggestion(input: SubmitSuggestionInput): Promise<SubmitSuggestionOutput> {
  return submitSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'submitSuggestionPrompt',
  input: {schema: SubmitSuggestionInputSchema},
  output: {schema: SubmitSuggestionOutputSchema},
  prompt: `Un usuario ha enviado la siguiente sugerencia para la aplicación CultivaColombia. 
  
  Sugerencia: "{{suggestion}}"
  
  Tu tarea es generar un mensaje de agradecimiento corto, amigable y positivo para el usuario, confirmando que su sugerencia ha sido recibida. El mensaje debe estar en español.`,
});

const submitSuggestionFlow = ai.defineFlow(
  {
    name: 'submitSuggestionFlow',
    inputSchema: SubmitSuggestionInputSchema,
    outputSchema: SubmitSuggestionOutputSchema,
  },
  async (input) => {
    console.log(`Nueva sugerencia recibida: ${input.suggestion}`);
    
    const {output} = await prompt(input);
    
    // Aquí es donde en el futuro se podría guardar la sugerencia en una base de datos (Firestore).
    
    return output!;
  }
);
