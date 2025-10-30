'use client';

import { Engine } from '@tsparticles/engine';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
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
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: '#00f050',
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'bounce',
              },
            },
            number: {
              value: 50,
              density: {
                enable: true,
                width: window.innerWidth,
                height: window.innerHeight,
              },
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: {
                min: 1,
                max:
                  typeof window !== 'undefined' && window.innerWidth < 768
                    ? 4
                    : 3.5,
              },
            },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 30, // Fewer particles on mobile for better performance
                  },
                  size: {
                    value: {
                      min: 1.5,
                      max: 4, // Slightly larger dots on mobile for better visibility
                    },
                  },
                  move: {
                    speed: 0.4, // Slower movement on mobile
                  },
                },
              },
            },
            {
              maxWidth: 1024,
              options: {
                particles: {
                  number: {
                    value: 40, // Medium number for tablets
                  },
                },
              },
            },
          ],
        }}
      />
    )
  );
};

export default ParticlesBackground;
