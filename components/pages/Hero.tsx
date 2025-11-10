import Link from 'next/link';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlineHandshake } from 'react-icons/md';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BsPersonWorkspace } from 'react-icons/bs';
import { PointTimeline } from '../animations/PointTimeLine';

export default function Hero() {
  return (
    <div id="#welcome" className="!max-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around w-full gap-8 lg:gap-12 [&>*]:flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-2xl">
          <Badge className="p-2 text-xs sm:text-sm w-fit">👋 Welcome</Badge>
          <h1 className="m-0 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text w-fit leading-[1.1] sm:leading-[1]">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block text-nowrap">
              A Thinker. Explorer. Coder.
            </span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl block mt-2 sm:mt-3">
              Building bridges between code and possibility.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            No bullshit, see my works and see if I am your guy. Reach out to me
            if you are interested for following tasks: <br />
            <PointTimeline
              className='!p-0 !mt-4'
              showLine={false}
              showPoints={ false }
              itemSpacing='4px'
              contentSpacing='0'
              items={[
                { title: "StartUp Employee's" },
                { title: 'Find a guy for your Tech Team' },
                { title: "Freelance Project's Or Others..." },
              ]}
            />
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 [&>*]:bg-[gradient-bg] [&>*]:cursor-pointer mb-2 w-full sm:w-auto">
            <Button
              asChild
              className="w-full sm:w-auto gap-2 text-sm sm:text-base"
            >
              <Link href={'#work-dimension'}>
                <BsPersonWorkspace className="w-4 h-4 sm:w-5 sm:h-5" />
                View My Work
              </Link>
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto gap-2 text-sm sm:text-base"
            >
              <Link href={'#connect'}>
                <MdOutlineHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                Lets Connect
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 [&>*]:bg-primary/5 [&>*]:size-10 sm:[&>*]:size-12 [&>*]:rounded-full [&>*]:p-2 sm:[&>*]:p-3 [&>*]:cursor-pointer [&>*]:hover:bg-primary/90 [&>*]:hover:text-background [&>*]:hover:shadow-[0_0_10px_rgba(0,255,0,0.4)] [&>*]:overflow-visible [&>a>*]:size-full transition duration-300 ease-in-out">
            <Link
              href="https://github.com/TarekHasan550"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </Link>

            <Link
              href="https://www.facebook.com/tarak.hasan.411096"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </Link>

            <Link
              href="mailto:tarakhasan505@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineEmail />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}
