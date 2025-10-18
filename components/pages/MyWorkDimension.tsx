'use client';
import UnderLine from '../shared/UnderLine';
import { TbDeviceImacCode } from 'react-icons/tb';
import { PiCompassToolBold } from 'react-icons/pi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbDeviceImacCog } from 'react-icons/tb';

type WorkDimensionType = {
  dimensionName: string;
  icon: React.ReactNode;
  description?: string;
};

export default function MyWorkDimension() {
  const Dimensions: WorkDimensionType[] = [
    {
      dimensionName: 'Web Development',
      icon: <TbDeviceImacCode />,
      description:
        'Where logic meets creation, this is the field where I turn raw ideas into active digital systems.',
    },
    {
      dimensionName: 'Creative Tools',
      icon: <PiCompassToolBold />,
      description:
        'A place where vision becomes real, where each tool serves as a way to express what words cannot.',
    },
    {
      dimensionName: 'Finance & Operations',
      icon: <GiTakeMyMoney />,
      description:
        'Where real work meets real numbers. learning the language of finance not from books, but from the front line of daily operations.',
    },
    {
      dimensionName: 'Support & Systems',
      icon: <TbDeviceImacCog />,
      description:
        'The silent backbone of progress, solving, sustaining, and strengthening everything that keeps motion alive.',
    },
  ];

  return (
    <div id="work-dimension">
      <div>
        <h2>What Ive Do? / Work Dimension</h2>
        <UnderLine />
        <p>
          Every dimension of my work adds to a bigger system, where logic meets
          creativity and ideas become real. I focus not only on what to build
          but also on why it matters and how it endures. From structure to
          innovation, everything I create connects with specific purposes.
        </p>
        <div>
          <div className="flex gap-8 justify-center items-stretch my-6">
            {Dimensions.map((dimension, index) => (
              <div key={index} className="w-full flex">
                <style jsx>{`
                  @keyframes rotate {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }

                  .rotating-border-card {
                    position: relative;
                    background: transparent;
                    border-radius: 2rem;
                    padding: 1.5rem;
                    cursor: pointer;
                    width: 100%,
                    height: 100%,
                    flex: 1;
                    overflow: hidden;
                  }

                  .rotating-border-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: conic-gradient(
                      from 0deg,
                      rgba(255, 255, 255, 0.1) 0%,
                      // var(--secondary) 25%,
                      rgba(255, 255, 255, 0.1) 50%,
                      var(--primary) 75% // rgba(255, 255, 255, 0.1) 100%
                    );
                    z-index: 0;
                    animation: rotate 3s linear infinite;
                  }

                  .rotating-border-card::after {
                    content: '';
                    position: absolute;
                    inset: 1px;
                    background: rgba(38, 38, 38);
                    border-radius: calc(2rem - 1px);
                    z-index: 1;
                  }

                  .rotating-border-card > * {
                    position: relative;
                    z-index: 2;
                  }
                `}</style>
                <div className="rotating-border-card flex flex-col gap-2 hover:scale-103 transition-transform duration-300">
                  <div className="text-primary text-4xl bg-primary/20 w-fit rounded-full p-3">
                    {dimension.icon}
                  </div>
                  <h2 className="text-xl text-left font-semibold">
                    {dimension.dimensionName}
                  </h2>
                  <p className="m-0 text-base">{dimension.description}</p>
                  <p className="text-sm text-right m-0 justify-self-end text-white/70 hover:text-white transition-colors mt-auto">
                    Click To Know More...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
