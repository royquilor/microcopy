'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ActionButtonsProps {
  buttonText: string;
}

export function ActionButtons({ buttonText }: ActionButtonsProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buttonText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleExport = () => {
    const exportData = {
      primary_button_label: buttonText
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'button-label.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 2000);
  };

  return (
    <Card className="border-0 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Export</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleCopy}
            variant="outline"
            className="w-full"
          >
            {copySuccess ? 'Copied!' : 'Copy Text'}
          </Button>
          
          <Button
            onClick={handleExport}
            variant="outline"
            className="w-full"
          >
            {exportSuccess ? 'Exported!' : 'Export JSON'}
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground space-y-1">
          <p><strong>Copy:</strong> Copies just the button text</p>
          <p><strong>Export:</strong> Downloads JSON with key-value format</p>
        </div>
      </CardContent>
    </Card>
  );
}
