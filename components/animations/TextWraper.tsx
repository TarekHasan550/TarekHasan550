'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface CollapsibleTextProps {
  text: string;
  maxLines?: number;
  triggerText?: string;
}

export function CollapsibleText({
  text,
  maxLines = 3,
  triggerText = 'Read more...',
}: CollapsibleTextProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={isOpen ? 'leading-8 tracking-wide' : 'line-clamp-3'}
        style={
          isOpen
            ? {}
            : {
                display: '-webkit-box',
                WebkitLineClamp: maxLines,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }
        }
      >
        {text}
      </div>

      <Button
        variant="link"
        className="p-0 h-auto text-primary mt-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Show less' : triggerText}
      </Button>
    </div>
  );
}
