'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Extended props for the rotating border card
interface RotatingBorderCardProps extends React.ComponentProps<'div'> {
  rotateSpeed?: number;
  borderColors?: string[];
  glowIntensity?: number;
  hoverScale?: boolean;
}

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-stretch my-4 md:my-6',
        className
      )}
      {...props}
    />
  );
}

// Fixed Rotating Border Card Component
function RotatingBorderCard({
  className,
  children,
  rotateSpeed = 3,
  borderColors = [
    'rgba(255, 255, 255, 0.1)',
    'var(--primary)',
    'rgba(255, 255, 255, 0.1)',
  ],
  glowIntensity = 10,
  hoverScale = true,
  style,
  ...props
}: RotatingBorderCardProps) {
  // Create CSS variables for dynamic properties
  const dynamicStyles = {
    '--rotate-speed': `${rotateSpeed}s`,
    '--glow-intensity': `${glowIntensity}px`,
    '--border-color-1': borderColors[0],
    '--border-color-2': borderColors[1] || 'var(--primary)',
    '--border-color-3': borderColors[2] || borderColors[0],
    ...style,
  } as React.CSSProperties;

  return (
    <div className={cn('w-full flex', className)} {...props}>
      <motion.div
        className="rotating-border-card flex flex-col gap-2 p-4 md:p-6"
        style={dynamicStyles}
        whileHover={hoverScale ? { scale: 1.02 } : {}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Enhanced Card Header with icon support
interface CardHeaderProps extends React.ComponentProps<'div'> {
  icon?: React.ReactNode;
  iconClassName?: string;
}

function CardHeader({
  className,
  icon,
  iconClassName,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn('flex flex-col gap-2 md:gap-3 items-start', className)}
      {...props}
    >
      {icon && (
        <div
          className={cn(
            'text-primary text-2xl md:text-3xl bg-primary/20 w-fit rounded-full p-2 md:p-3',
            iconClassName
          )}
        >
          {icon}
        </div>
      )}
      {children}
    </div>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'leading-none font-semibold text-lg md:text-xl text-left',
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        'text-muted-foreground text-sm md:text-base m-0 leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-0', className)}
      {...props}
    />
  );
}

// Enhanced Card Footer with click indicator
interface CardFooterProps extends React.ComponentProps<'div'> {
  showClickIndicator?: boolean;
  indicatorText?: string;
}

function CardFooter({
  className,
  showClickIndicator = false,
  indicatorText = 'Click To Know More...',
  children,
  ...props
}: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex flex-col sm:flex-row items-start sm:items-center gap-2 [.border-t]:pt-4 md:[.border-t]:pt-6 mt-auto',
        className
      )}
      {...props}
    >
      {children}
      {showClickIndicator && (
        <p className="text-xs md:text-sm text-right m-0 ml-auto text-white/70 hover:text-white transition-colors">
          {indicatorText}
        </p>
      )}
    </div>
  );
}

export {
  Card,
  RotatingBorderCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
