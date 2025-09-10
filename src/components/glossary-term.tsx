
"use client";

import * as React from 'react';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { GLOSSARY_DATA } from '@/lib/glossary';

interface GlossaryTermProps {
  termId: string;
  children: React.ReactNode;
}

export function GlossaryTerm({ termId, children }: GlossaryTermProps) {
  const term = GLOSSARY_DATA.find((t) => t.id === termId);

  if (!term) {
    return <>{children}</>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          className="p-0 h-auto text-base md:text-sm font-semibold text-primary underline decoration-dotted underline-offset-4 inline-block align-baseline"
        >
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{term.name}</h4>
            <p className="text-sm text-muted-foreground">{term.definition}</p>
          </div>
          <div className="relative h-40 w-full">
            <Image
              src={term.imageUrl}
              alt={term.name}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-md"
              data-ai-hint={term.imageHint}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
