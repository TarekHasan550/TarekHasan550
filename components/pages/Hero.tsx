import Link from 'next/link';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlineHandshake } from 'react-icons/md';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BsPersonWorkspace } from 'react-icons/bs';

export default function Hero() {
  return (
    <div id="#welcome" className="min-w-[100vh]">
      <div className="flex items-center justify-around [&>*]:flex-1">
        <div className="flex flex-col gap-4">
          <Badge className="p-2 text-sm">👋 Wellcome</Badge>
          <h1 className="m-0 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text w-fit text-nowrap leading-[1]">
            Technologist. Thinker. Explorer. <br />
            <p className='text-3xl'>Building bridges between code and possibility.</p>
          </h1>
          <p>
            I’m not built to follow paths; I create my own and walk them with
            reason, integrity, and quiet strength. <br />I believe truth has no
            side, and Emotions only have value when guided by logic. I adapt
            fast, but never compromise who I am. Those who meet me often find
            clarity, not because I persuade them, but because I make them
            question what truly matters. I work, think, and decide with purpose.
          </p>
          <div className="flex items-center gap-5 [&>*]:bg-[gradient-bg] [&>*]:cursor-pointer mb-2">
            <Button asChild>
              <Link href={'#work-dimension'}>
                <BsPersonWorkspace />View My Work
              </Link>
            </Button>
            <Button asChild>
              <Link href={'#connect'}>
                <MdOutlineHandshake /> Lets Connect
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-8 [&>*]:bg-primary/5 [&>*]:size-12 [&>*]:rounded-full [&>*]:p-3 [&>*]:cursor-pointer [&>*]:hover:bg-primary/90 [&>*]:hover:text-background [&>*]:hover:shadow- [0_0_10px_rgba(0,255,0,0.4)] [&>*]:overflow-visible [&>a>*]:size-full transition duration-300 ease-in-out">
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
        <div></div>
      </div>
    </div>
  );
}
