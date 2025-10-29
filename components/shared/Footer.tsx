'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUp,
} from 'lucide-react';
import { LiaTelegramPlane } from 'react-icons/lia';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Brand Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            {/* Your Logo/Name */}
            <h3 className="text-3xl font-bold text-primary">
              Tarek Hasan
            </h3>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer exploring the intersection of code, design, and
            systems thinking. Preparing for opportunities in Europe.
          </p>
        </div>

        {/* Footer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Navigate Card */}
          <Card className="bg-muted/30 border-2 hover:border-primary/20 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">🧭</span>
                NAVIGATE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '#about-me', label: 'Approach' },
                  { href: '#work-dimension', label: 'Work' },
                  { href: '#beyond-the-code', label: 'Thinking' },
                  { href: '#connect', label: 'Connect' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Connect Card */}
          <Card className="bg-muted/30 border-2 hover:border-primary/20 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">🔗</span>
                CONNECT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    href: 'mailto:tarakhasan505@gmail.com',
                    icon: <Mail className="w-4 h-4" />,
                    label: 'Email',
                  },
                  {
                    href: 'https://www.linkedin.com/in/tarekhasan550/',
                    icon: <Linkedin className="w-4 h-4" />,
                    label: 'LinkedIn',
                  },
                  {
                    href: 'https://github.com/TarekHasan550',
                    icon: <Github className="w-4 h-4" />,
                    label: 'GitHub',
                  },
                  {
                    href: 'https://t.me/tarekhasan550',
                    icon: <LiaTelegramPlane className="w-4 h-4" />,
                    label: 'Telegram',
                  },
                  {
                    href: '/cv',
                    icon: <FileText className="w-4 h-4" />,
                    label: 'CV (PDF)',
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* About This Site Card */}
          <Card className="bg-muted/30 border-2 hover:border-primary/20 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">🌐</span>
                ABOUT THIS SITE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed text-sm">
                Built with React and intention. Designed to showcase not just
                what I build, but how I think.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 w-full"
              >
                <a
                  href="https://github.com/TarekHasan550/tarekhasan550"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        {/* Bottom Divider */}
        <div className="border-t border-border my-6 -mx-30"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Tarek Hasan. Built with intention.
          </div>

          <div className="flex items-center gap-6">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <a href="#">Privacy & Cookies</a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
