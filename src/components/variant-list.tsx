'use client';

import { Variant } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface VariantListProps {
  variants: Variant[];
  selectedVariant: Variant | null;
  onVariantSelect: (variant: Variant) => void;
}

export function VariantList({ variants, selectedVariant, onVariantSelect }: VariantListProps) {
  if (variants.length === 0) {
    return (
      <Card className="border-0 bg-muted/30">
        <CardContent className="p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Select a tone to see variant suggestions
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-muted/30">
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Choose a variant
          </h3>
          {variants.map((variant) => (
            <Button
              key={variant.id}
              variant={selectedVariant?.id === variant.id ? "default" : "outline"}
              onClick={() => onVariantSelect(variant)}
              className="w-full justify-start h-auto p-3 text-left"
            >
              <span className="text-base">{variant.text}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
