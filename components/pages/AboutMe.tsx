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
      <div id="about-me">
        <h2>Who Am I? / About Me</h2>
        <UnderLine />
        <h3 className="flex justify-center items-center gap-2 text-2xl font-normal text-primary">
          <IoCompassSharp /> The principles that guide my work and growth
        </h3>
        <div className="flex gap-20 w-full py-10 items-center">
          <div className="relative rounded-4xl overflow-hidden w-[45%] h-[35vw]">
            <Image
              src="/green_hue.webp"
              fill
              alt="Picture of the author"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="border border-primary  rounded-4xl drop-shadow-[1px_1px_3px_var(--primary)] shadow-[0_0_0_10px_var(--primary)] grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-[75%]">
            <div>
              <p className='text-xl font-bold text-primary tracking-wide uppercase text-left"'>
                I BUILD AT THE INTERSECTION OF LOGIC AND CURIOSITY.
              </p>
              <CollapsibleText
                text="Most developers see problems as puzzles to solve. I see them as questions to ask. Before writing a single line of code, I ask: Why does this problem exist? Who does it effect? What assumptions are we making? This systems-thinking approach shapes everything I create from architecture decisions to user interface choices. As a MERN stack eveloper, I've learned that technical excellence isn't just about writing clean code. It's about understanding the human context around that code. That's why I combine evelopment skills with design thinking and a genuine curiosity about how people interact with technology. The best solutions don't just work they make sense to the people sing them. 
                I'm currently exploring the boundaries between software engineering and mechatronics, fascinated by how digital and physical systems can work together. This isn't bout mastering everything—it's about understanding connections that others might miss. My goal is to deepen this perspective through advanced study in Europe, where I can engage with research communities exploring human-computer interaction and systems engineering. 
                My approach is simple: Build with purpose. Question assumptions. Stay curious. And always remember that technology serves people, not the other way around."
                maxLines={2}
              />
            </div>

            {/* Divider */}
            <div className="border-t border-primary/10 my-8"></div>

            <div className="grid grid-cols-2 gap-3 px-6">
              {MyPrinciples.map((principle, index) => (
                <RotatingBorderCard key={index}>
                  <CardHeader icon={principle.icon}>
                    <CardTitle>{principle.title}</CardTitle>
                  </CardHeader>
                  <CardDescription>{principle.description}</CardDescription>
                </RotatingBorderCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
