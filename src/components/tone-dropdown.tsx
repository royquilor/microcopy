'use client';

import { Tone } from '@/types';
import { toneOptions } from '@/lib/variants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface ToneDropdownProps {
  selectedTone: Tone;
  onToneChange: (tone: Tone) => void;
}

export function ToneDropdown({ selectedTone, onToneChange }: ToneDropdownProps) {
  const selectedOption = toneOptions.find(option => option.value === selectedTone);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span className="text-sm">
            {selectedOption?.label || 'Tone'}
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
        {toneOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onToneChange(option.value)}
            className="flex flex-col items-start space-y-1 p-3"
          >
            <span className="font-medium">{option.label}</span>
            <span className="text-xs text-muted-foreground">
              {option.description}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
