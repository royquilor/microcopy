'use client';

import { Variant } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface VariantDropdownProps {
  variants: Variant[];
  selectedVariant: Variant | null;
  onVariantSelect: (variant: Variant) => void;
}

export function VariantDropdown({ variants, selectedVariant, onVariantSelect }: VariantDropdownProps) {
  if (variants.length === 0) {
    return (
      <Button variant="outline" className="w-full justify-between" disabled>
        <span className="text-sm text-muted-foreground">Variant</span>
        <svg
          className="h-4 w-4 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span className="text-sm">
            {selectedVariant?.text || 'Variant'}
          </span>
          <svg
            className="h-4 w-4 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {variants.map((variant) => (
          <DropdownMenuItem
            key={variant.id}
            onClick={() => onVariantSelect(variant)}
            className="p-3"
          >
            <span className="text-sm">{variant.text}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
