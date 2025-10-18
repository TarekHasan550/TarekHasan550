'use client';

import { Engine } from '@tsparticles/engine';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine:Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        options={{
          background: {
            color: {
              value: 'transparent', // Black background
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: '#00f050', // White dots
            },
            move: {
              enable: true,
              speed: 0.6, // Slower movement
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'bounce', // Dots disappear when they go out of screen
              },
            },
            number: {
              value: 50, // Number of dots
            },
            opacity: {
              value: 0.5 // Semi-transparent
            },
            shape: {
              type: 'circle', // Simple dots
            },
            size: {
              value: { min: 1, max: 3.5 }, // Random sizes between 1-3.5px
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticlesBackground;
