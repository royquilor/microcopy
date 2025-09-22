'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ButtonPreviewProps {
  buttonText: string;
  onTextChange: (text: string) => void;
}

export function ButtonPreview({ buttonText, onTextChange }: ButtonPreviewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(buttonText);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update edit text when button text changes externally
  useEffect(() => {
    setEditText(buttonText);
  }, [buttonText]);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(buttonText);
  };

  const handleSave = () => {
    onTextChange(editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(buttonText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="w-full h-full bg-primary/5 flex items-center justify-center">
      {isEditing ? (
        <Input
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="text-center text-base h-10 min-w-[120px]"
        />
      ) : (
        <Button
          onClick={handleEdit}
          className="text-base px-6 py-2 h-10 min-w-[120px]"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}
