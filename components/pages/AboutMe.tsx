import Image from 'next/image';
import { PointTimeline } from '../animations/PointTimeLine';
import UnderLine from '../shared/UnderLine';

export default function AboutMe() {
  const aboutMyValue = [
    { title: 'I believe strength comes from truth, not aggression.' },
    { title: 'I value logic over impulse, but never ignore human emotion.' },
    { title: 'I question everything not to resist, but to understand.' },
  ];
  return (
    <div>
      <div id="about-me">
        <h2>Who Am I? / About Me</h2>
        <UnderLine />
        <div className="flex gap-20 w-full py-10 items-center">
          <div className="relative rounded-4xl overflow-hidden w-[45%] h-[30vw]">
            <Image
              src="/green_hue.webp"
              fill
              alt="Picture of the author"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="border border-primary  rounded-4xl drop-shadow-[1px_1px_3px_var(--primary)] shadow-[0_0_0_10px_var(--primary)] grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-[75%]">
            <p>
              I see myself as someone who creates order from chaos; A person who
              learns, adapts, but never breaks when life turns unpredictable.
            </p>

            <PointTimeline items={aboutMyValue} />
            <p>
              Wherever I go, I bring structure, discipline, and calm energy. I
              don’t just join systems, I refine them. I challenge ideas
              respectfully and find solutions that balance reason with empathy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
