'use client';

import { useState, useEffect } from 'react';
import { Tone, Variant } from '@/types';
import { getVariantsForTone, getFallbackVariants } from '@/lib/variants';
import { getUsageData, getUsageStatus } from '@/lib/usage-tracking';
import { ButtonPreview } from '@/components/button-preview';
import { Sidebar } from '@/components/sidebar';

export default function MicrocopyStudio() {
  // State management following the design system principles
  const [selectedTone, setSelectedTone] = useState<Tone>('friendly');
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [buttonText, setButtonText] = useState('Submit');
  const [variants, setVariants] = useState<Variant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usageStatus, setUsageStatus] = useState(getUsageStatus(getUsageData()));

  // Load initial variants
  useEffect(() => {
    loadVariants(selectedTone);
  }, [selectedTone]);

  // Load variants (AI or fallback)
  const loadVariants = async (tone: Tone) => {
    setIsLoading(true);
    try {
      const newVariants = await getVariantsForTone(tone);
      setVariants(newVariants);
      setSelectedVariant(null); // Reset selection when tone changes
    } catch (error) {
      console.error('Failed to load variants:', error);
      // Fallback to hardcoded variants
      setVariants(getFallbackVariants(tone));
    } finally {
      setIsLoading(false);
    }
  };

  // Handle tone change
  const handleToneChange = (tone: Tone) => {
    setSelectedTone(tone);
    loadVariants(tone);
    // Update usage status
    setUsageStatus(getUsageStatus(getUsageData()));
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
        isLoading={isLoading}
        usageStatus={usageStatus}
      />
    </div>
  );
}