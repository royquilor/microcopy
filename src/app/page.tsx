'use client';

import { useState } from 'react';
import { Tone, Variant } from '@/types';
import { getVariantsForTone } from '@/lib/variants';
import { ButtonPreview } from '@/components/button-preview';
import { Sidebar } from '@/components/sidebar';

export default function MicrocopyStudio() {
  // State management following the design system principles
  const [selectedTone, setSelectedTone] = useState<Tone>('friendly');
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [buttonText, setButtonText] = useState('Submit');

  // Get variants for the selected tone
  const variants = getVariantsForTone(selectedTone);

  // Handle tone change
  const handleToneChange = (tone: Tone) => {
    setSelectedTone(tone);
    setSelectedVariant(null); // Reset selection when tone changes
  };

  // Handle variant selection
  const handleVariantSelect = (variant: Variant) => {
    setSelectedVariant(variant);
    setButtonText(variant.text);
  };

  // Handle button text change (from inline editing)
  const handleButtonTextChange = (text: string) => {
    setButtonText(text);
    // Clear selected variant if user manually edits
    if (selectedVariant && selectedVariant.text !== text) {
      setSelectedVariant(null);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main Content - Full Screen Button Container */}
      <div className="flex-1 flex items-center justify-center bg-muted/5">
        <ButtonPreview
          buttonText={buttonText}
          onTextChange={handleButtonTextChange}
        />
      </div>

      {/* Right Sidebar */}
      <Sidebar
        selectedTone={selectedTone}
        onToneChange={handleToneChange}
        variants={variants}
        selectedVariant={selectedVariant}
        onVariantSelect={handleVariantSelect}
        buttonText={buttonText}
      />
    </div>
  );
}