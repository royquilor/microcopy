// AI service for generating button label variants using OpenAI GPT-4o-mini
import { Tone } from '@/types';

export interface AIVariant {
  id: string;
  text: string;
  tone: Tone;
}

// Generate AI variants for a given tone
export const generateAIVariants = async (tone: Tone): Promise<AIVariant[]> => {
  try {
    const response = await fetch('/api/generate-variants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tone }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate AI variants');
    }

    const data = await response.json();
    return data.variants;
  } catch (error) {
    console.error('AI generation error:', error);
    throw error;
  }
};

// Create prompt for tone-based variant generation
export const createPrompt = (tone: Tone): string => {
  const toneDescriptions = {
    friendly: 'warm, approachable, conversational, and encouraging',
    formal: 'professional, clear, authoritative, and business-appropriate',
    playful: 'energetic, fun, engaging, and creative'
  };

  return `Generate 3 different primary button labels for a web application that are ${toneDescriptions[tone]}. 

Requirements:
- Each label should be 1-4 words
- Make them distinct from each other
- Focus on action-oriented language
- Keep them concise and clear
- Examples of good button labels: "Get Started", "Learn More", "Try Now"

Return only the 3 labels, one per line, without numbering or bullets.`;
};
