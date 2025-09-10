"use server";

import {
  detectPlantHealth as detectPlantHealthFlow,
  type DetectPlantHealthInput,
  type DetectPlantHealthOutput,
} from "@/ai/flows/detect-plant-health";
import { z } from "zod";

const actionSchema = z.object({
  photoDataUri: z.string(),
});

export async function detectPlantHealth(
  input: DetectPlantHealthInput
): Promise<DetectPlantHealthOutput> {
  const parsedInput = actionSchema.safeParse(input);

  if (!parsedInput.success) {
    throw new Error("Entrada inválida.");
  }

  try {
    const result = await detectPlantHealthFlow(parsedInput.data);
    return result;
  } catch (error) {
    console.error("Error in AI flow:", error);
    throw new Error("No se pudo analizar la imagen de la planta.");
  }
}
