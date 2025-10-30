import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Clock } from 'lucide-react';

interface EssayProps {
  essay: {
    title: string;
    description: string;
    preview?: string;
    readTime: string;
    slug: string;
    category?: string;
  };
}

// Featured Essay Card Component
export function FeaturedEssayCard({ essay }: EssayProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
          <span className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm">
            📝 FEATURED
          </span>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">
          {essay.title}
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-foreground/80 leading-relaxed">
          {essay.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-6">
        {/* Preview Text */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-foreground/70 leading-relaxed italic text-base sm:text-lg">
            &quot;{essay.preview}&quot;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-4">
          <Button
            asChild
            variant="default"
            className="gap-2 group/btn w-full sm:w-auto"
          >
            <a href={`/essays/${essay.slug}`}>
              Read Full Essay
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>

          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{essay.readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Exploration Card Component
export function ExplorationCard({
  exploration,
  variant = 'default',
}: {
  exploration: EssayProps['essay'] & { icon: string };
  variant?: 'default' | 'compact';
}) {
  if (variant === 'compact') {
    return (
      <Card className="group hover:shadow-md transition-all duration-300 hover:border-primary/20">
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base sm:text-lg">{exploration.icon}</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 text-sm sm:text-base">
                  {exploration.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 leading-relaxed">
                {exploration.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {exploration.readTime}
                </span>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-7 sm:h-8 gap-1"
                >
                  <a href={`/essays/${exploration.slug}`}>
                    Read
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl">{exploration.icon}</span>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors line-clamp-1">
              {exploration.title}
            </h3>
            {exploration.category && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full mt-1">
                {exploration.category}
              </span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4">
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {exploration.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 pt-2">
          <span className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            {exploration.readTime}
          </span>

          <Button asChild variant="ghost" size="sm" className="gap-2 group/btn">
            <a href={`/essays/${exploration.slug}`}>
              Read
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
