'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { GiPerpendicularRings } from 'react-icons/gi';

export default function Logo() {
  const router = useRouter();
  return (
    <div
      className="drop-shadow-[0_0_8px_var(--primary)] cursor-pointer"
      onClick={() => router.push('/')}
    >
      <svg width="0" height="0" className="cursor-none">
        <defs>
          <linearGradient
            id="icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={'#00f050'} />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>

      <GiPerpendicularRings
        size={65}
        className="[animation:spin_8s_linear_infinite] bg-clip-text bg-gradient-to-r from-primary to-secondary"
        fill="url(#icon-gradient)"
      />
    </div>
  );
}
