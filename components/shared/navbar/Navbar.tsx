'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import { IoHome, IoPerson, IoClose, IoMenu } from 'react-icons/io5';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'motion/react';
import { FaLightbulb } from 'react-icons/fa';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { MdHandshake, MdOutlineHandshake } from 'react-icons/md';

export default function Navbar() {
  const [actId, setActId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Welcome', icon: <IoHome />, id: 'welcome', toolTip: 'Welcome' },
    {
      label: 'Approach',
      icon: <IoPerson />,
      id: 'about-me',
      toolTip: 'About Me',
    },
    {
      label: 'Portfolio',
      icon: <HiWrenchScrewdriver />,
      id: 'work-dimension',
      toolTip: 'My Work Dimension',
    },
    {
      label: 'Thinking',
      icon: <FaLightbulb />,
      id: 'beyond-the-code',
      toolTip: 'Beyond The Code',
    },
    {
      label: 'Connect',
      icon: <MdHandshake />,
      id: 'connect',
      toolTip: 'Lets Connect',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (itemId: string) => {
    setActId(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Logo */}
      <div className="z-51">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex fixed top-10 left-[41.5%] w-full z-50 bg-transparent pointer-events-none">
        <div className="flex justify-center py-5 pointer-events-auto">
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
                <span className="text-2xl lg:text-3xl">{item.icon}</span>
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
                      className="text-nowrap text-sm lg:text-base"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Connect Button */}
      <Link href="#connect" className="z-51 hidden lg:block">
        <Button className="!py-3 !px-4 rounded-md text-sm lg:text-md cursor-pointer gap-2">
          Lets Connect <MdOutlineHandshake className="w-4 h-4" />
        </Button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-51 p-2 rounded-md bg-white/8 backdrop-blur-sm border border-primary/15"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <IoClose className="w-6 h-6 text-foreground" />
        ) : (
          <IoMenu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-20 right-4 left-4 z-50 bg-background/90 backdrop-blur-md border border-primary/20 rounded-lg shadow-lg lg:hidden"
            >
              <div className="p-4 space-y-3">
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    href={`#${item.id}`}
                    className={`flex items-center gap-3 p-3 rounded-md transition-all duration-200 ${
                      actId === item.id
                        ? 'bg-primary/20 text-primary'
                        : 'text-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}

                {/* Mobile Connect Button */}
                <div className="pt-2 border-t border-border/50">
                  <Link
                    href="#connect"
                    className="flex items-center justify-center gap-2 p-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MdOutlineHandshake className="w-5 h-5" />
                    Lets Connect
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Tooltip (Desktop only) */}
      <Tooltip
        id="nav-tooltip"
        place="bottom"
        offset={8}
        arrowColor="#00f050"
      />
    </div>
  );
}
