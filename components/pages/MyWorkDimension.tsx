'use client';
import UnderLine from '../shared/UnderLine';
import { ProjectCard } from '../DRY_ui/info_card';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';


export default function MyWorkDimension() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      focusedArea: ['Full-Stack'],
      hook: 'A full-stack e-commerce solution with real-time inventory and AI-powered recommendations',
      description: `Built a scalable e-commerce platform serving 10,000+ daily active users. The platform features real-time inventory management, personalized product recommendations, and seamless checkout experience.\n\nThe architecture leverages microservices for better scalability and uses Redis for caching to ensure sub-100ms response times even during peak traffic.`,
      image:
        'https://softwaresindemand.com/assets/images/how_it_works_images/6780c93b22a5e1736493371.png',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
      highlights: [
        'Implemented real-time inventory sync across multiple warehouses',
        'Reduced cart abandonment by 35% through optimized checkout flow',
        'Achieved 99.9% uptime with automated scaling and monitoring',
      ],
      metrics: [
        '40% faster page load times with optimized images and caching',
        '35% reduction in cart abandonment rate',
        '99.9% platform uptime over 12 months',
        '500+ daily active merchants',
      ],
      links: {
        caseStudy: '/projects/ecommerce-case-study',
        liveDemo: 'https://demo-ecommerce.example.com',
        github: 'https://github.com/username/ecommerce-platform',
      },
    },
    {
      title: 'Health & Fitness App',
      focusedArea: ['System Design', 'Frontend'],
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
      ],
      highlights: [
        'Built ML model for personalized workout recommendations with 92% accuracy',
        'Implemented real-time sync with 10+ wearable device APIs',
        'Designed intuitive UI that increased user retention by 45%',
      ],
      metrics: [
        '92% accuracy in workout recommendations',
        '45% increase in user retention',
        '50,000+ active users in first 6 months',
        '4.8/5 average app store rating',
      ],
      links: {
        liveDemo: 'https://fitness-app.example.com',
        github: 'https://github.com/username/fitness-app',
      },
    },
    {
      title: 'Health & Fitness App',
      focusedArea: ['System Design', 'Frontend'],
      hook: 'AI-powered fitness coaching platform with personalized workout plans',
      description: `Developed a mobile-first fitness application that provides personalized workout routines and nutrition plans using machine learning algorithms.\n\nThe app includes progress tracking, social features, and integrates with wearable devices for real-time health monitoring and insights.`,
      image:
        'https://fitnessfastindia.com/wp-content/uploads/2025/06/Fitness-Fast-India-Bangalore-fitness.webp',
      techStack: [
        'React Native',
        'Python',
        'MongoDB',
        'TensorFlow',
        'Firebase',
      ],
      highlights: [
        'Built ML model for personalized workout recommendations with 92% accuracy',
        'Implemented real-time sync with 10+ wearable device APIs',
        'Designed intuitive UI that increased user retention by 45%',
      ],
      metrics: [
        '92% accuracy in workout recommendations',
        '45% increase in user retention',
        '50,000+ active users in first 6 months',
        '4.8/5 average app store rating',
      ],
      links: {
        liveDemo: 'https://fitness-app.example.com',
        github: 'https://github.com/username/fitness-app',
      },
    },
  ];

  return (
    <>
      <div id="work-dimension">
        <h2>What Ive Do? / Work Dimension</h2>
        <UnderLine />
        <p className="text-center uppercase mb-12 text-xl text-muted-foreground max-w-3xl mx-auto">
          Building at the intersection of code, design, and systems thinking,
          from concept to deployment, with purpose at every stage.
        </p>

        <div className="space-y-12 grid grid-cols-2 gap-x-[3%] gap-y-[1%]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} className="mb-8" />
          ))}
        </div>

        <div className="justify-center text-center mt-8">
          <Button asChild variant="outline" size="xl" className="gap-2">
            <a href="/essays">
              Explore Project Achive
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
