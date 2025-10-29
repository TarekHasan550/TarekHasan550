'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { GiPerpendicularRings } from 'react-icons/gi';

export default function Logo() {
  const router = useRouter();
  return (
    <div className="cursor-pointer" onClick={() => router.push('/')}>
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

      <div className="flex items-center gap-x-4 cursor-pointer">
        <GiPerpendicularRings
          size={65}
          className="[animation:spin_8s_linear_infinite] bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_8px_var(--primary)]"
          fill="url(#icon-gradient)"
        />
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Tarak Hasan
        </h1>
      </div>
    </div>
  );
}
