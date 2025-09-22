// Variants system with AI integration and fallback to hardcoded variants
import { Tone, Variant, ToneOption } from '@/types';
import { generateAIVariants } from './ai-service';
import { canGenerateAI, getUsageData, incrementUsage } from './usage-tracking';

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

// Hardcoded fallback variants for each tone
// These are used when AI limit is reached or API fails
export const fallbackVariants: Record<Tone, Variant[]> = {
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

// Get variants for a specific tone (AI or fallback)
export const getVariantsForTone = async (tone: Tone): Promise<Variant[]> => {
  const usage = getUsageData();
  
  // If user can generate AI variants, try AI first
  if (canGenerateAI(usage)) {
    try {
      const aiVariants = await generateAIVariants(tone);
      // Increment usage count after successful AI generation
      incrementUsage();
      return aiVariants;
    } catch (error) {
      console.error('AI generation failed, falling back to hardcoded variants:', error);
      // Fall back to hardcoded variants if AI fails
      return fallbackVariants[tone] || [];
    }
  }
  
  // Use hardcoded variants if limit reached
  return fallbackVariants[tone] || [];
};

// Get fallback variants synchronously (for immediate display)
export const getFallbackVariants = (tone: Tone): Variant[] => {
  return fallbackVariants[tone] || [];
};

// Get a specific variant by ID
export const getVariantById = (id: string): Variant | null => {
  for (const toneVariants of Object.values(fallbackVariants)) {
    const variant = toneVariants.find(v => v.id === id);
    if (variant) return variant;
  }
  return null;
};
