import React from 'react';
import UnderLine from '../shared/UnderLine';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { FeaturedEssayCard, ExplorationCard } from '../DRY_ui/essay_card';

export default function Psychology() {
  const featuredEssay = {
    title: 'Why Systems Fail',
    description: '(And What That Teaches Us About Code)',
    preview:
      "Most developers focus on making systems work. I'm fascinated by why they fail. Because in failure patterns, we find design lessons that success often hides. The most robust architectures emerge from understanding breakdown points, not just celebrating smooth operation.",
    readTime: '8 min read',
    slug: 'why-systems-fail',
  };

  const explorations = [
    {
      icon: '📌',
      title: 'The Paradox of Choice in Development',
      description: "Why more tools doesn't mean better solutions...",
      readTime: '5 min',
      slug: 'paradox-of-choice',
    },
    {
      icon: '🧠',
      title: 'Learning in Public: My First Year',
      description: 'What 365 days of documenting my learning taught me...',
      readTime: '6 min',
      slug: 'learning-in-public',
    },
    {
      icon: '🔗',
      title: 'Connecting Dots: Code, Design, Systems',
      description: 'Why the best solutions live at intersections...',
      readTime: '7 min',
      slug: 'connecting-dots',
    },
    {
      icon: '🎯',
      title: "What I'm Learning Right Now",
      description:
        'Current explorations in mechatronics, IoT, and physical computing...',
      readTime: '4 min',
      slug: 'current-learning',
    },
    {
      icon: '💭',
      title: "Questions I'm Pondering",
      description: 'Big questions without easy answers that guide my work...',
      readTime: '3 min',
      slug: 'questions-pondering',
    },
  ];

  return (
    <section id="beyond-the-code" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Beyond The Code
          </h2>
          <UnderLine />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Essays, observations, and questions I&apos;m exploring about
            technology, systems, and continuous growth
          </p>
        </div>

        {/* Featured Essay */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <FeaturedEssayCard essay={featuredEssay} />
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8 sm:my-10 md:my-12"></div>

        {/* More Explorations */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-7 md:mb-8 text-center">
            MORE EXPLORATIONS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {explorations.map((exploration, index) => (
              <ExplorationCard
                key={index}
                exploration={exploration}
                variant="compact"
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 text-sm sm:text-base"
          >
            <a href="/essays">
              View All Essays
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
