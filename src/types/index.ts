
export type Difficulty = 'easy' | 'medium' | 'hard';
export type UserRole = 'teacher' | 'student' | 'enthusiast';

export interface PlantingStep {
  text: string;
}

export interface Crop {
  id: string;
  name: string;
  species: string;
  description: string;
  difficulty: Difficulty;
  lifeCycle: {
    planting: string;
    growth: string;
    harvest: string;
    totalDays: number;
  };
  requirements: {
    irrigation: string;
    climate: string;
    space: 'pot' | 'garden' | 'patio';
    pests: string;
    fertilizers: string;
  };
  plantingGuide: {
    pot: PlantingStep[];
    soil: PlantingStep[];
    hydroponics: PlantingStep[];
  };
  compatibility: string[];
  incompatibility: string[];
  warnings: string;
  costs: {
    range: string;
    items: { item: string; price: string }[];
    note?: string;
  };
  recommendations: string;
  regions: string[];
  notifications?: {
    irrigation?: string;
    harvest?: string;
  }
}

export interface UserCrop {
  id: string;
  addedDate: string; // ISO Date String
  status: 'active' | 'paused';
  progress: number;
  notes?: string;
}

export interface UserProfile {
  displayName: string;
  email: string;
  role: UserRole;
}
