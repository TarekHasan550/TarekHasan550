import React from 'react'
import { Badge } from '../Ui/badge'
import { Button } from '../Ui/button'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from 'react-icons/md';


export default function Hero() {
  return (
    <div id='#welcome' className='min-w-[100vh]'>
      <div className='flex items-center justify-around text-white [&>*]:flex-1'>
        <div>
          <Badge className='bg-[linear-gradient(60deg,#00f050_20%,#22D3EE_100%)] p-2'>👋 Hello, I'm</Badge>
          <h1>Tarek Hasan</h1>
          <p>I build web apps that solve real problems and move businesses forward. I believe that great software and great businesses should exist to solve real-world problems. That’s why I don’t just write code. I build solutions that work, scale, and evolve with time.
            Driven by purpose, I build clean, modern apps that are fast to deliver and make a real impact. Whether it’s an idea, a business goal, or a technical challenge I build with clarity, purpose, and results.</p>
          <div className='flex items-center gap-5 [&>*]:bg-[gradient-bg] [&>*]:cursor-pointer'>
            <Button>Explore My Work</Button>
            <Button>Preview My CV</Button>
            <Button>Contact Me</Button>
          </div>

          <div className='flex items-center gap-2 text-3xl [&>*]:bg-white/20 [&>*]:rounded-full [&>*]:p-1'>
            <FiGithub />
            <FiLinkedin />
            <MdOutlineEmail />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

