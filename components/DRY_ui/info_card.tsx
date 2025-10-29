import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    focusedArea: string[];
    hook: string;
    image: string;
    techStack: string[];
    highlights: string[];
    metrics?: string[];
    links: {
      caseStudy?: string;
      liveDemo?: string;
      github?: string;
    };
  };
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'w-full max-w-4xl mx-auto overflow-hidden group hover:shadow-primary transition-all duration-300 pt-0 gap-3',
        className
      )}
    >
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden mb-2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>

      <CardHeader className="">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          {/* Project Title */}
          <div className="flex-1">
            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
              {project.title}
            </CardTitle>
          </div>

          {/* Focused Area */}
          <div className="flex flex-wrap gap-2 justify-start md:justify-end items-center">
            {project.focusedArea.map((area, index) => (
              <Badge key={index} variant="default" className="text-base">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {/* One-line Hook */}
        <CardDescription className="text-lg font-medium text-foreground/90">
          {project.hook}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Two-paragraph Description */}
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            {project.description.split('\n')[0]}
          </p>
          {project.description.split('\n')[1] && (
            <p className="text-foreground/80 leading-relaxed">
              {project.description.split('\n')[1]}
            </p>
          )}
        </div>

          {/* Tech Stack Tags */}
        <div>
          <h4 className="font-semibold text-lg -mb-1">Tech Stacks:</h4>
          <div className="flex flex-wrap gap-2 justify-start">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs text-background">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* 3 Key Highlights */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">Key Highlights</h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-foreground/80 leading-relaxed">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">Impact & Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pt-6 border-t">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.links.caseStudy && (
            <Button asChild variant="default" className="gap-2">
              <a
                href={project.links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Study
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          )}
          {project.links.liveDemo && (
            <Button asChild variant="outline" className="gap-2">
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button asChild variant="outline" className="gap-2">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
