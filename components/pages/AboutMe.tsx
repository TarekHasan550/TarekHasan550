import Image from 'next/image';
import { BsPersonHeart } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { IoCompassSharp } from 'react-icons/io5';
import { PiLinkDuotone } from 'react-icons/pi';
import { RiSeedlingFill } from 'react-icons/ri';
import { CollapsibleText } from '../animations/TextWraper';
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
      title: 'Question First, Code Second',
      description:
        'Every technical decision starts with "Why?" Understanding the problem deeply prevents solving the wrong thing elegantly. Curiosity shapes better solutions than assumptions ever will.',
    },
    {
      icon: <BsPersonHeart />,
      title: 'Build for Humans, Not Résumés',
      description:
        "Technology exists to serve people. If a solution is technically impressive but fails the actual user, it's not a solution, it's a showcase. I prioritize usability and real impact over clever complexity.",
    },
    {
      icon: <RiSeedlingFill />,
      title: 'Learn in Public',
      description:
        "Growth happens at the edges of comfort. I document failures as much as successes because that's where real learning lives. Sharing the journey builds better work and stronger connections.",
    },
    {
      icon: <PiLinkDuotone />,
      title: 'Connect the Dots',
      description:
        'The best solutions often emerge from unexpected intersections. Design informs code. Psychology shapes interfaces. Systems thinking reveals patterns. I look for connections others might miss.',
    },
  ];

  return (
    <div>
      <div id="about-me" className="scroll-mt-20">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
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
            <div className="relative rounded-3xl md:rounded-4xl overflow-hidden w-full max-w-sm md:max-w-none lg:w-full h-[50vw] sm:h-[45vw] md:h-[40vw] lg:h-[35vw]">
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
              <p className="text-lg sm:text-xl md:text-xl font-bold text-primary tracking-wide uppercase text-center lg:text-left">
                I BUILD AT THE INTERSECTION OF LOGIC AND CURIOSITY.
              </p>

              <div className="text-sm sm:text-base md:text-lg">
                <CollapsibleText
                  text="Most developers see problems as puzzles to solve. I see them as questions to ask. Before writing a single line of code, I ask: Why does this problem exist? Who does it effect? What assumptions are we making? This systems-thinking approach shapes everything I create from architecture decisions to user interface choices. As a MERN stack eveloper, I've learned that technical excellence isn't just about writing clean code. It's about understanding the human context around that code. That's why I combine evelopment skills with design thinking and a genuine curiosity about how people interact with technology. The best solutions don't just work they make sense to the people sing them. 
                  I'm currently exploring the boundaries between software engineering and mechatronics, fascinated by how digital and physical systems can work together. This isn't bout mastering everything—it's about understanding connections that others might miss. My goal is to deepen this perspective through advanced study in Europe, where I can engage with research communities exploring human-computer interaction and systems engineering. 
                  My approach is simple: Build with purpose. Question assumptions. Stay curious. And always remember that technology serves people, not the other way around."
                  maxLines={2}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-primary/10 my-6 md:my-8"></div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 px-2 sm:px-4 md:px-6">
              {MyPrinciples.map((principle, index) => (
                <RotatingBorderCard key={index}>
                  <CardHeader icon={principle.icon}>
                    <CardTitle className="text-base sm:text-lg md:text-xl">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-sm sm:text-base">
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
