// Type definitions for Microcopy Studio MVP

export type Tone = 'friendly' | 'formal' | 'playful';

export interface Variant {
  id: string;
  text: string;
  tone: Tone;
}

export interface AppState {
  selectedTone: Tone;
  selectedVariant: Variant | null;
  currentButtonText: string;
  isEditing: boolean;
}

export interface ToneOption {
  value: Tone;
  label: string;
  description: string;
}
