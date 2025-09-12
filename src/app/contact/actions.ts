"use server";

import {
  submitSuggestion as submitSuggestionFlow,
  type SubmitSuggestionInput,
  type SubmitSuggestionOutput,
} from "@/ai/flows/submit-suggestion";
import { z } from "zod";

const actionSchema = z.object({
  suggestion: z.string().min(10, { message: "Tu sugerencia debe tener al menos 10 caracteres." }),
});

export async function submitSuggestion(
  input: SubmitSuggestionInput
): Promise<SubmitSuggestionOutput> {
  const parsedInput = actionSchema.safeParse(input);

  if (!parsedInput.success) {
    const errorMessages = parsedInput.error.errors.map(e => e.message).join(', ');
    throw new Error(errorMessages);
  }

  try {
    const result = await submitSuggestionFlow(parsedInput.data);
    return result;
  } catch (error) {
    console.error("Error in AI flow:", error);
    throw new Error("No se pudo enviar la sugerencia en este momento.");
  }
}
