'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import { IoHome, IoPerson, IoSettingsSharp } from 'react-icons/io5'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
// import { MdArticle } from 'react-icons/md'
import { AnimatePresence, motion } from 'motion/react'
import Logo from './Logo'
// import Glow from '../Glow'

export default function Navbar() {
  const [actId, setActId] = useState<string | null>(null)
  const navItems = [
    { label: "Welcome", icon: <IoHome />, id: "welcome", toolTip: "Welcome" },
    { label: "Who I'am?", icon: <IoPerson />, id: "about-me", toolTip: "About Me" },
    { label: "Things I've Done", icon: <HiWrenchScrewdriver />, id: "work-dimension", toolTip: "My Work Dimension" },
    { label: "How I Build", icon: <IoSettingsSharp />, id: "skill", toolTip: "Skills" },
    // { label: "Learn With Me", icon: <MdArticle />, id: "blog", toolTip: "Blog" },
  ]

  return (
    <div className="relative">
      <Logo />
      <div className="fixed top-5 left-0 w-full z-50 bg-transparent">
        <div className="flex justify-center py-5">
          <div className="backdrop-blur-sm bg-white/8 flex items-center justify-around gap-8 p-4 px-6 rounded-md max-w-fit border border-primary/15 drop-shadow-[0_0_10px_rgba(0,255,0,0.4)]">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 hover:drop-shadow-[0_0_0.8px_var(--primary)]"
                onMouseEnter={() => setActId(item.id)}
                onMouseLeave={() => setActId(null)}
                onClick={() => setActId(item.id)}
                data-tooltip-id="nav-tooltip"
                data-tooltip-content={item.toolTip}
              >
                <span className="text-3xl">{item.icon}</span>
                <AnimatePresence>
                  {actId === item.id && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeOut',
                        delay: 0.1,
                      }}
                      className="text-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>
        </div>

        {/* single shared Tooltip */}
        <Tooltip id="nav-tooltip" place="bottom" offset={8} arrowColor='#00f050'/>
      </div>
    </div>
  );
}
