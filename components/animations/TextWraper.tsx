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
    <div className="w-full">
      <div
        className={`
          ${isOpen ? 'leading-8 tracking-wide' : 'line-clamp-3'}
          text-base md:text-lg
          break-words
          hyphens-auto
        `}
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
        className="p-0 h-auto text-primary mt-2 text-sm md:text-base"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Show less' : triggerText}
      </Button>
    </div>
  );
}
