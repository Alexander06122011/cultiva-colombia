import { config } from 'dotenv';
config();

import '@/ai/flows/detect-plant-health.ts';
import '@/ai/flows/get-crop-varieties.ts';
import '@/ai/flows/submit-suggestion.ts';
