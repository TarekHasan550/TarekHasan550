import Image from 'next/image';
import { BsPersonHeart } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { IoCompassSharp } from 'react-icons/io5';
import { PiLinkDuotone } from 'react-icons/pi';
import { RiSeedlingFill } from 'react-icons/ri';
import {
  CardDescription,
  CardHeader,
  CardTitle,
  RotatingBorderCard,
} from '../DRY_ui/card';
import UnderLine from '../shared/UnderLine';

export default function AboutMe() {
  const MyPrinciples = [
    {
      icon: <GiMagnifyingGlass />,
      title: 'Understand the problem first',
      description:
        'Clarify requirements before coding. Saves time, prevents wrong solutions.',
    },
    {
      icon: <BsPersonHeart />,
      title: 'Build for actual users',
      description: 'Clear, usable code beats clever complexity.',
    },
    {
      icon: <RiSeedlingFill />,
      title: 'Document what I learn',
      description:
        'Write about failures and wins. Faster learning, better community.',
    },
    {
      icon: <PiLinkDuotone />,
      title: 'Look for connections',
      description:
        'Combine design, logic, and user behavior for stronger solutions',
    },
  ];

  return (
    <div>
      <div className="scroll-mt-10">
        {/* Header Section */}
        <div id="about-me" className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Who Am I? / About Me
          </h2>
          <UnderLine />
          <h3 className="flex flex-col sm:flex-row justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl font-normal text-primary mt-4 md:mt-6">
            <IoCompassSharp className="text-xl sm:text-2xl" />
            The principles that guide my work and growth
          </h3>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 w-full py-6 md:py-8 lg:py-10 items-center">
          {/* Profile Image */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative rounded-3xl hidden md:block md:rounded-4xl overflow-hidden w-full max-w-sm md:max-w-2xl lg:w-full h-[50vw] md:h-[80vw] lg:h-[35vw]">
              <Image
                src="/green_hue.webp"
                fill
                alt="Picture of the author"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                className="border border-primary rounded-3xl md:rounded-4xl drop-shadow-[1px_1px_3px_var(--primary)] shadow-[0_0_0_5px_rgba(0,240,80,0.3)] md:shadow-[0_0_0_10px_var(--primary)] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[75%] order-1 lg:order-2">
            {/* Core Philosophy */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg">
                Thinker-coder at logic, curiosity crossroads. Question problems deeply as MERN dev. blend with design for human-centric tech. Explore mechatronics. Purposeful build, always curious.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-primary/10 my-6 md:my-8"></div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-2 sm:px-4 md:px-6">
              {MyPrinciples.map((principle, index) => (
                <RotatingBorderCard key={index}>
                  <CardHeader icon={principle.icon}>
                    <CardTitle className="text-base sm:text-lg md:text-xl">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-base sm:text-md">
                    {principle.description}
                  </CardDescription>
                </RotatingBorderCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
