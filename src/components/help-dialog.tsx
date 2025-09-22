'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function HelpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Microcopy Studio</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p className="text-muted-foreground">
            Generate and test button label variants with different tones. Perfect for designers and product teams.
          </p>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-foreground mb-1">How to use:</h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Select a tone from the dropdown</li>
                <li>Choose a variant suggestion</li>
                <li>Click the button to edit the text</li>
                <li>Copy or export your final label</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-1">Tones:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li><strong>Friendly:</strong> Warm, approachable, conversational</li>
                <li><strong>Formal:</strong> Professional, clear, authoritative</li>
                <li><strong>Playful:</strong> Energetic, fun, engaging</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
