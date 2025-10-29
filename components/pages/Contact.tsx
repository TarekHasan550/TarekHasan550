import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  FileText,
  Linkedin,
  Github,
  MessageCircle,
  Calendar,
} from 'lucide-react';
import { LiaTelegramPlane } from 'react-icons/lia';
import UnderLine from '../shared/UnderLine';
import { IoLogoReddit } from 'react-icons/io5';

export function Contact() {
  return (
    <section id="connect" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">LET&apos;S CONNECT</h2>
          <UnderLine />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m open to meaningful opportunities and conversations about
            collaboration, European study, or ideas worth exploring
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* What Brings You Here */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            WHAT BRINGS YOU HERE?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Academic Opportunities Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎓</span>
                  <CardTitle className="text-xl">
                    Academic Opportunities
                  </CardTitle>
                </div>
                <CardDescription className="text-foreground/80 text-base leading-relaxed">
                  &quot;If you&apos;re from a European university, research institution,
                  or know of study opportunities in HCI, Systems Engineering, or
                  related fields; I&apos;d love to connect.&quot;
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="default" size="sm" className="gap-2">
                    <a href="mailto:tarakhasan505@gmail.com">
                      <Mail className="w-4 h-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href="/cv">
                      <FileText className="w-4 h-4" />
                      View CV
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/tarekhasan550/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional Collaboration Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💼</span>
                  <CardTitle className="text-xl">
                    Professional Collaboration
                  </CardTitle>
                </div>
                <CardDescription className="text-foreground/80 text-base leading-relaxed">
                  &quot;Looking for a full-stack developer who thinks in systems and
                  brings design sensibility? Let&apos;s discuss your project.&quot;
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button asChild variant="default" size="sm" className="gap-2">
                    <a href="mailto:tarakhasan505@gmail.com">
                      <MessageCircle className="w-4 h-4" />
                      Conversation
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href="/projects">
                      <FileText className="w-4 h-4" />
                      View Work
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://github.com/TarekHasan550"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Networking & Ideas Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🤝</span>
                  <CardTitle className="text-xl">Networking & Ideas</CardTitle>
                </div>
                <CardDescription className="text-foreground/80 text-base leading-relaxed">
                  &quot;Interested in discussing technology, systems thinking, or
                  collaborative ideas? I&apos;m always open to meaningful
                  connections.&quot;
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/tarekhasan550/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://t.me/tarekhasan550"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiaTelegramPlane className="w-4 h-4" />
                      Telegram
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href="/schedule">
                      <Calendar className="w-4 h-4" />
                      Schedule Chat
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Direct Contact */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6">📧 DIRECT CONTACT</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Prefer email? Reach me at:
          </p>
          <div className="mb-8">
            <Button
              asChild
              variant="default"
              size="lg"
              className="gap-2 text-lg"
            >
              <a href="mailto:tarakhasan505@gmail.com">
                <Mail className="w-5 h-5" />
                tarakhasan505@gmail.com
              </a>
            </Button>
          </div>

          <p className="text-lg text-muted-foreground mb-4">Or find me on:</p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <a
                href="https://www.linkedin.com/in/tarekhasan550/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <a
                href="https://github.com/TarekHasan550"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <a
                href="https://t.me/tarekhasan550"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaTelegramPlane className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <a
                href="https://www.reddit.com/user/TarekHasan550/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoReddit className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Quick Facts Strip */}
        <Card className="bg-background border-2">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl">📍</div>
                <div className="font-semibold">Location</div>
                <div className="text-sm text-muted-foreground">Dubai, UAE</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">💼</div>
                <div className="font-semibold">Experience</div>
                <div className="text-sm text-muted-foreground">1+ Years</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🎯</div>
                <div className="font-semibold">Focus</div>
                <div className="text-sm text-muted-foreground">
                  MERN + System
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">✉️</div>
                <div className="font-semibold">Status</div>
                <div className="text-sm text-green-600 font-medium">
                  Available
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
