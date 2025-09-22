'use client';

import { Tone } from '@/types';
import { toneOptions } from '@/lib/variants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

interface ToneSelectorProps {
  selectedTone: Tone;
  onToneChange: (tone: Tone) => void;
}

export function ToneSelector({ selectedTone, onToneChange }: ToneSelectorProps) {
  return (
    <Card className="border-0 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Choose Tone</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {toneOptions.map((option) => (
          <div key={option.value} className="flex items-start space-x-3">
            <input
              type="radio"
              id={option.value}
              name="tone"
              value={option.value}
              checked={selectedTone === option.value}
              onChange={(e) => onToneChange(e.target.value as Tone)}
              className="mt-1 h-4 w-4 text-foreground focus:ring-2 focus:ring-ring"
            />
            <div className="flex-1">
              <Label 
                htmlFor={option.value} 
                className="text-base font-medium cursor-pointer"
              >
                {option.label}
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
