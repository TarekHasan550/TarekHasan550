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
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
            📝 FEATURED
          </span>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {essay.title}
        </CardTitle>
        <CardDescription className="text-lg text-foreground/80">
          {essay.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Preview Text */}
        <div className="space-y-4">
          <p className="text-foreground/70 leading-relaxed italic text-lg">
            &quot;{essay.preview}&quot;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <Button asChild variant="default" className="gap-2 group/btn">
            <a href={`/essays/${essay.slug}`}>
              Read Full Essay
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
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
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{exploration.icon}</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {exploration.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {exploration.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {exploration.readTime}
                </span>
                <Button asChild variant="ghost" size="sm" className="h-8 gap-1">
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
          <span className="text-2xl">{exploration.icon}</span>
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {exploration.title}
            </h3>
            {exploration.category && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {exploration.category}
              </span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {exploration.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {exploration.readTime}
          </span>

          <Button asChild variant="ghost" size="sm" className="gap-2 group/btn">
            <a href={`/essays/${exploration.slug}`}>
              Read
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
