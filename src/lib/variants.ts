// Hardcoded variants for each tone - following design system principles
import { Tone, Variant, ToneOption } from '@/types';

// Tone options with descriptions
export const toneOptions: ToneOption[] = [
  {
    value: 'friendly',
    label: 'Friendly',
    description: 'Warm, approachable, conversational'
  },
  {
    value: 'formal',
    label: 'Formal',
    description: 'Professional, clear, authoritative'
  },
  {
    value: 'playful',
    label: 'Playful',
    description: 'Energetic, fun, engaging'
  }
];

// Hardcoded variants for each tone
// These are carefully curated to demonstrate clear differences
export const variants: Record<Tone, Variant[]> = {
  friendly: [
    { id: 'friendly-1', text: "Let's go!", tone: 'friendly' },
    { id: 'friendly-2', text: 'Get started', tone: 'friendly' },
    { id: 'friendly-3', text: 'Try it out', tone: 'friendly' }
  ],
  formal: [
    { id: 'formal-1', text: 'Submit', tone: 'formal' },
    { id: 'formal-2', text: 'Continue', tone: 'formal' },
    { id: 'formal-3', text: 'Proceed', tone: 'formal' }
  ],
  playful: [
    { id: 'playful-1', text: 'Go for it!', tone: 'playful' },
    { id: 'playful-2', text: 'Make it happen', tone: 'playful' },
    { id: 'playful-3', text: "Let's do this!", tone: 'playful' }
  ]
};

// Get variants for a specific tone
export const getVariantsForTone = (tone: Tone): Variant[] => {
  return variants[tone] || [];
};

// Get a specific variant by ID
export const getVariantById = (id: string): Variant | null => {
  for (const toneVariants of Object.values(variants)) {
    const variant = toneVariants.find(v => v.id === id);
    if (variant) return variant;
  }
  return null;
};
