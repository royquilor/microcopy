'use client';

import { Tone, Variant } from '@/types';
import { ToneDropdown } from '@/components/tone-dropdown';
import { VariantDropdown } from '@/components/variant-dropdown';
import { ExportDropdown } from '@/components/export-dropdown';
import { HelpDialog } from '@/components/help-dialog';

interface SidebarProps {
  selectedTone: Tone;
  onToneChange: (tone: Tone) => void;
  variants: Variant[];
  selectedVariant: Variant | null;
  onVariantSelect: (variant: Variant) => void;
  buttonText: string;
}

export function Sidebar({
  selectedTone,
  onToneChange,
  variants,
  selectedVariant,
  onVariantSelect,
  buttonText
}: SidebarProps) {
  return (
    <div className="w-80 bg-muted/10 border-l border-border/50 h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-muted-foreground">Controls</h2>
          <HelpDialog />
        </div>
      </div>

      {/* Controls */}
      <div className="flex-1 p-6 space-y-6">
        <div className="space-y-3">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Tone
          </label>
          <ToneDropdown
            selectedTone={selectedTone}
            onToneChange={onToneChange}
          />
        </div>

        <div className="space-y-3">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Variant
          </label>
          <VariantDropdown
            variants={variants}
            selectedVariant={selectedVariant}
            onVariantSelect={onVariantSelect}
          />
        </div>

        <div className="space-y-3">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Export
          </label>
          <ExportDropdown buttonText={buttonText} />
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-border/50">
        <p className="text-xs text-muted-foreground">
          {selectedTone} tone • {variants.length} variants
        </p>
      </div>
    </div>
  );
}
