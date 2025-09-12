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
import { getFirebaseFirestore } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

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
    
    // Generar el mensaje de agradecimiento primero, para que el usuario obtenga una respuesta rápida.
    const {output} = await prompt(input);
    
    // Guardar la sugerencia en Firestore en segundo plano.
    const db = getFirebaseFirestore();
    if (db) {
        try {
            const suggestionsCollection = collection(db, 'sugerencias');
            await addDoc(suggestionsCollection, {
                suggestion: input.suggestion,
                createdAt: serverTimestamp()
            });
            console.log('Sugerencia guardada en Firestore.');
        } catch (error) {
            console.error("Error al guardar la sugerencia en Firestore:", error);
            // Opcional: manejar el error, aunque para el usuario la operación ya fue exitosa.
        }
    } else {
        console.warn('Firestore no está configurado. La sugerencia solo se ha registrado en los logs.');
    }
    
    return output!;
  }
);
