// API route for generating AI variants using OpenAI
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Tone } from '@/types';
import { createPrompt } from '@/lib/ai-service';

// Lazy initialization of OpenAI client
const getOpenAI = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
};

export async function POST(request: NextRequest) {
  try {
    const { tone } = await request.json();

    if (!tone || !['friendly', 'formal', 'playful'].includes(tone)) {
      return NextResponse.json(
        { error: 'Invalid tone provided' },
        { status: 400 }
      );
    }

    // Initialize OpenAI client lazily
    const openai = getOpenAI();
    const prompt = createPrompt(tone as Tone);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a UX copywriter specializing in button labels and microcopy. Generate concise, action-oriented button labels that are clear and effective.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 100,
      temperature: 0.7,
    });

    const generatedText = completion.choices[0]?.message?.content || '';
    const variants = generatedText
      .split('\n')
      .map((line) => line.trim())
      .filter(line => line.length > 0)
      .slice(0, 3) // Ensure we only get 3 variants
      .map((text, index) => ({
        id: `ai-${tone}-${index + 1}`,
        text,
        tone: tone as Tone
      }));

    return NextResponse.json({ variants });
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Handle missing API key gracefully
    if (error instanceof Error && error.message.includes('API key not configured')) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to generate variants' },
      { status: 500 }
    );
  }
}
