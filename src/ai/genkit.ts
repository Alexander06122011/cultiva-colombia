/**
 * @fileoverview This file initializes and configures the Genkit AI platform.
 * It sets up the Google AI plugin with the necessary API key and defines a default
 * model for all generative AI operations within the application.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genk-ai/googleai';

// Define the default model to be used across the application.
const defaultModel = 'googleai/gemini-2.0-flash';

export const ai = genkit({
  plugins: [googleAI({apiKey: process.env.V2_GOOGLE_API_KEY})],
  // Set the default model for all 'ai.generate()' calls unless overridden.
  model: defaultModel,
});
