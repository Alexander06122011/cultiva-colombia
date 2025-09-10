
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CROP_DATA, REGIONS, SPACES, EXPERIENCE_LEVELS } from "@/lib/data";
import { CropCard } from "@/components/crop-card";
import type { Crop, Difficulty } from "@/types";
import { useAuth } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";

const formSchema = z.object({
  region: z.string().min(1, "Debes seleccionar tu región."),
  space: z.enum(["pot", "garden", "patio"]),
  experience: z.string().min(1, "Debes seleccionar tu nivel de experiencia."),
});

type FormData = z.infer<typeof formSchema>;

export default function RecommendationPage() {
  const [recommendedCrops, setRecommendedCrops] = useState<Crop[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { user, userCrops, addCropToUser } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      region: "",
      space: "pot",
      experience: "beginner",
    },
  });

  const onSubmit = (data: FormData) => {
    let results = CROP_DATA;

    // 1. Filter by region
    results = results.filter((crop) => crop.regions.includes(data.region));
    
    // 2. Filter by space
    results = results.filter((crop) => {
        if (data.space === 'pot') return ['pot'].includes(crop.requirements.space);
        if (data.space === 'garden') return ['pot', 'garden'].includes(crop.requirements.space);
        if (data.space === 'patio') return true; // all crops fit in a patio
        return false;
    });

    // 3. Filter by experience
    const difficultyMap: Record<string, Difficulty> = {
      beginner: 'easy',
      intermediate: 'medium',
      advanced: 'hard'
    }
    const targetDifficulty = difficultyMap[data.experience];
    results = results.filter(crop => crop.difficulty === targetDifficulty);
    
    setRecommendedCrops(results);
    setFormSubmitted(true);
  };

  const handleAddToDashboard = async (id: string) => {
    if (!user) {
        router.push('/login');
        return;
    }
    if (userCrops.some(c => c.id === id)) {
      toast({
        title: "Cultivo ya añadido",
        description: "Este cultivo ya se encuentra en tu huerto.",
        variant: "default"
      });
      return;
    }
    await addCropToUser(id);
    const crop = CROP_DATA.find(c => c.id === id);
    toast({
        title: "¡Cultivo añadido!",
        description: `${crop?.name} ha sido añadido a tu huerto.`,
        action: (
          <div className="p-1 bg-green-500 rounded-full">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        ),
      });
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setRecommendedCrops([]);
    form.reset();
  }

  return (
    <TooltipProvider>
      <div className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-headline">
              {!formSubmitted ? 'Encuentra tu Cultivo Ideal' : '¡Estos son los cultivos recomendados para ti!'}
            </CardTitle>
            <CardDescription>
              {!formSubmitted 
                ? 'Responde estas tres preguntas para darte una recomendación personalizada.' 
                : 'Basado en tus respuestas, estos son los cultivos que se adaptan mejor a tus condiciones.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!formSubmitted ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">1. ¿En qué región de Colombia te encuentras?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona tu región" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {REGIONS.map((region) => (
                              <SelectItem key={region.id} value={region.name}>{region.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="space"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg">2. ¿De qué espacio dispones para sembrar?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col md:flex-row gap-4"
                          >
                              {SPACES.map(space => (
                                  <FormItem key={space.id} className="flex-1">
                                      <FormControl>
                                          <label className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-accent/50 has-[:checked]:bg-accent/80 has-[:checked]:border-primary transition-colors">
                                              <RadioGroupItem value={space.id} />
                                              <span>{space.name}</span>
                                          </label>
                                      </FormControl>
                                  </FormItem>
                              ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">3. ¿Cuál es tu nivel de experiencia sembrando?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona tu nivel de experiencia" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {EXPERIENCE_LEVELS.map((level) => (
                              <SelectItem key={level.id} value={level.id}>{level.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full">Obtener recomendación</Button>
                </form>
              </Form>
            ) : (
              <div>
                {recommendedCrops.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedCrops.map((crop) => (
                      <CropCard key={crop.id} crop={crop} onAddToDashboard={handleAddToDashboard} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No encontramos cultivos que coincidan con todos tus criterios. Intenta con otras opciones.</p>
                )}
                 <Button onClick={resetForm} variant="outline" className="mt-8 w-full">Hacer el test de nuevo</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
