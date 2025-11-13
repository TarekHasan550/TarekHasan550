// app/projects/page.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowUpRight,
  Users,
  Github,
  ExternalLink,
  FileText,
  Clock,
  Zap,
} from 'lucide-react';
import UnderLine from '@/components/shared/UnderLine';
import ParticlesBackground from '@/components/animations/BgPartical';
import Glow from '@/components/shared/Glow';
import Navbar from '@/components/shared/navbar/Navbar';
import { Footer } from '@/components/shared/Footer';

export default function ProjectsPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      focusedArea: ['Full-Stack', 'System Design'],
      hook: 'A full-stack e-commerce solution with real-time inventory and AI-powered recommendations',
      description: `Built a scalable e-commerce platform serving 10,000+ daily active users. The platform features real-time inventory management, personalized product recommendations, and seamless checkout experience.\n\nThe architecture leverages microservices for better scalability and uses Redis for caching to ensure sub-100ms response times even during peak traffic.`,
      image:
        'https://softwaresindemand.com/assets/images/how_it_works_images/6780c93b22a5e1736493371.png',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
      category: ['Full-Stack', 'E-Commerce'],
      status: 'completed',
      statusText: '🚀 Completed',
      timeline: '6 months',
      teamSize: '4 developers',
      metrics: [
        '40% faster page load times with optimized images and caching',
        '35% reduction in cart abandonment rate',
        '99.9% platform uptime over 12 months',
        '500+ daily active merchants',
      ],
      highlights: [
        'Implemented real-time inventory sync across multiple warehouses',
        'Reduced cart abandonment by 35% through optimized checkout flow',
        'Achieved 99.9% uptime with automated scaling and monitoring',
      ],
      challenges: [
        'Handling peak traffic during flash sales',
        'Real-time inventory synchronization',
        'Payment gateway integration and security',
      ],
      links: {
        caseStudy: '/projects/ecommerce-case-study',
        liveDemo: 'https://demo-ecommerce.example.com',
        github: 'https://github.com/TarekHasan550/ecommerce-platform',
      },
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      focusedArea: ['System Design', 'Frontend', 'Mobile'],
      hook: 'AI-powered fitness coaching platform with personalized workout plans',
      description: `Developed a mobile-first fitness application that provides personalized workout routines and nutrition plans using machine learning algorithms.\n\nThe app includes progress tracking, social features, and integrates with wearable devices for real-time health monitoring and insights.`,
      image:
        'https://thewritelife.com/wp-content/uploads/2016/07/health-magazines.jpg',
      techStack: [
        'React Native',
        'Python',
        'MongoDB',
        'TensorFlow',
        'Firebase',
        'Node.js',
      ],
      category: ['Mobile', 'AI/ML'],
      status: 'updating',
      statusText: '🔄 Continuously Updating',
      timeline: '4 months',
      teamSize: '3 developers',
      metrics: [
        '92% accuracy in workout recommendations',
        '45% increase in user retention',
        '50,000+ active users in first 6 months',
        '4.8/5 average app store rating',
      ],
      highlights: [
        'Built ML model for personalized workout recommendations with 92% accuracy',
        'Implemented real-time sync with 10+ wearable device APIs',
        'Designed intuitive UI that increased user retention by 45%',
      ],
      challenges: [
        'Integrating multiple wearable device APIs',
        'Real-time data synchronization',
        'Battery optimization for continuous tracking',
      ],
      links: {
        liveDemo: 'https://fitness-app.example.com',
        github: 'https://github.com/TarekHasan550/fitness-app',
      },
    },
    {
      id: 3,
      title: 'Smart Home IoT System',
      focusedArea: ['System Design', 'IoT', 'Full-Stack'],
      hook: 'End-to-end smart home automation with real-time monitoring and control',
      description: `Designed and implemented a comprehensive IoT ecosystem for smart home automation, featuring real-time sensor monitoring, automated routines, and energy optimization.\n\nThe system integrates multiple protocols including MQTT, WebSocket, and REST APIs for seamless device communication and control.`,
      image:
        'https://fitnessfastindia.com/wp-content/uploads/2025/06/Fitness-Fast-India-Bangalore-fitness.webp',
      techStack: [
        'React',
        'Node.js',
        'Python',
        'MQTT',
        'MongoDB',
        'Raspberry Pi',
        'AWS IoT',
      ],
      category: ['IoT', 'Full-Stack'],
      status: 'in-progress',
      statusText: '⚡ In Development',
      timeline: '3 months (ongoing)',
      teamSize: '2 developers',
      metrics: [
        '95% device connectivity reliability',
        '40% energy savings through smart automation',
        'Sub-200ms real-time control response',
        'Support for 50+ connected devices',
      ],
      highlights: [
        'Real-time device monitoring and control',
        'Energy consumption optimization algorithms',
        'Cross-platform mobile and web dashboard',
        'Voice control integration (Alexa, Google Assistant)',
      ],
      challenges: [
        'Device interoperability across different manufacturers',
        'Real-time data processing and analytics',
        'Security and privacy concerns',
      ],
      links: {
        github: 'https://github.com/TarekHasan550/smart-home-iot',
      },
    },
  ];

  const statusColors = {
    completed: 'bg-green-500/20 text-green-600 border-green-500/30',
    'in-progress': 'bg-blue-500/20 text-blue-600 border-blue-500/30',
    updating: 'bg-purple-500/20 text-purple-600 border-purple-500/30',
    planned: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <ParticlesBackground />
      <div className="mt-20 space-y-20">
        <Glow top={-9} left={90} size={15} opacity={30} />
        <Glow top={39} left={70} opacity={35} size={10} />

        {/* Header Section */}
        <div className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1>
                PROJECT ARCHIVE
              </h1>
              <UnderLine />
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
                Building at the intersection of code, design, and systems
                thinking from concept to deployment, with purpose at every
                stage.
              </p>
            </div>

            {/* Modern Sorting UI */}
            <Card className="bg-background border-2 mb-8 md:mb-12">
              <CardContent className="px-4 py-1 sm:py-1 sm:px-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground/80">
                      FILTER & SORT
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                    {/* Category Filter */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <label className="text-xs font-medium text-foreground/70">
                        CATEGORY
                      </label>
                      <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="border border-border rounded-lg px-3 py-2 text-sm bg-background hover:border-primary/50 transition-colors"
                      >
                        <option value="all">All Categories</option>
                        <option value="full-stack">Full-Stack</option>
                        <option value="mobile">Mobile</option>
                        <option value="ai-ml">AI/ML</option>
                        <option value="iot">IoT</option>
                        <option value="ecommerce">E-Commerce</option>
                      </select>
                    </div>

                    {/* Status Filter */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <label className="text-xs font-medium text-foreground/70">
                        STATUS
                      </label>
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="border border-border rounded-lg px-3 py-2 text-sm bg-background hover:border-primary/50 transition-colors"
                      >
                        <option value="all">All Status</option>
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                        <option value="updating">Updating</option>
                        <option value="planned">Planned</option>
                      </select>
                    </div>

                    {/* Sort By */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <label className="text-xs font-medium text-foreground/70">
                        SORT BY
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-border rounded-lg px-3 py-2 text-sm bg-background hover:border-primary/50 transition-colors"
                      >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="name">Name A-Z</option>
                        <option value="timeline">Timeline</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects Grid */}
            <div className="space-y-12 md:space-y-16">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="border-2 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Large Image on Left */}
                    <div className="lg:w-2/5 p-4 sm:p-6">
                      <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className={`${ 
                              statusColors[project.status as keyof typeof statusColors]
                            } border font-medium`}
                          >
                            {project.statusText}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Details on Right */}
                    <div className="lg:w-3/5 p-4 sm:p-6 lg:p-8">
                      <CardHeader className="p-0 pb-4 sm:pb-6">
                        {/* Focused Area Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.focusedArea.map((area, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-primary/10 text-primary text-xs"
                            >
                              {area}
                            </Badge>
                          ))}
                        </div>

                        <CardTitle className="text-xl sm:text-2xl md:text-3xl mb-3 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                          {project.title}
                        </CardTitle>

                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-medium">
                          {project.hook}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        {/* Project Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-medium">Timeline:</span>
                            <span className="text-muted-foreground">
                              {project.timeline}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="font-medium">Team:</span>
                            <span className="text-muted-foreground">
                              {project.teamSize}
                            </span>
                          </div>
                        </div>

                        {/* Full Description */}
                        <div>
                          <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            PROJECT OVERVIEW
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">
                            TECH STACK
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-black"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Highlights */}
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">
                            KEY HIGHLIGHTS
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {project.highlights.map((highlight, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">
                            KEY RESULTS
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.metrics.map((metric, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-muted-foreground">
                                  {metric}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4">
                          {project.links.liveDemo && (
                            <Button
                              asChild
                              variant="default"
                              className="gap-2 text-xs sm:text-sm"
                            >
                              <a
                                href={project.links.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button
                              asChild
                              variant="outline"
                              className="gap-2 text-xs sm:text-sm"
                            >
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                                Source Code
                              </a>
                            </Button>
                          )}
                          {project.links.caseStudy && (
                            <Button
                              asChild
                              variant="outline"
                              className="gap-2 text-xs sm:text-sm"
                            >
                              <a href={project.links.caseStudy}>
                                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                                Case Study
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12 md:mt-16">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 text-sm sm:text-base"
              >
                <a href="/project-archive">
                  Explore Full Project Archive
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
