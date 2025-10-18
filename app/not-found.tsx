'use client';

import ParticlesBackground from '@/components/animations/BgPartical';
import Logo from '@/components/shared/navbar/Logo';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Logo />
      <ParticlesBackground />
    </>
  );
}
