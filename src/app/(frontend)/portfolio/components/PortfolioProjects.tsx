import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'

export const PortfolioProjects: React.FC = () => {
  const projects = [
    {
      title: 'EcoTrack Dashboard',
      description:
        'A comprehensive sustainability monitoring platform that helps companies track and reduce their carbon footprint with real-time analytics and actionable insights.',
      image: '/portfolio/ecotrack.jpg',
      tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB', 'AWS'],
      liveUrl: 'https://ecotrack-demo.vercel.app',
      githubUrl: 'https://github.com/duckvhuynh/ecotrack',
    },
    {
      title: 'HealthConnect Portal',
      description:
        'A HIPAA-compliant telehealth platform connecting patients with healthcare providers, featuring secure video consultations, appointment scheduling, and medical record management.',
      image: '/portfolio/healthconnect.jpg',
      tags: ['Next.js', 'Express', 'PostgreSQL', 'WebRTC', 'Stripe', 'Auth0'],
      liveUrl: 'https://health-connect.vercel.app',
      githubUrl: 'https://github.com/duckvhuynh/health-connect',
    },
    {
      title: 'TravelMate App',
      description:
        'An AI-powered travel companion app that creates personalized itineraries based on user preferences, local attractions, and real-time availability.',
      image: '/portfolio/travelmate.jpg',
      tags: ['React Native', 'Firebase', 'Google Maps API', 'OpenAI', 'Expo'],
      liveUrl: 'https://travelmate-expo.dev',
      githubUrl: 'https://github.com/duckvhuynh/travelmate',
    },
    {
      title: 'StreamCraft CMS',
      description:
        'A headless CMS built for content creators and streamers to manage their multi-platform content, schedule posts, and analyze audience engagement metrics.',
      image: '/portfolio/streamcraft.jpg',
      tags: ['PayloadCMS', 'React', 'TypeScript', 'MongoDB', 'GraphQL', 'AWS S3'],
      liveUrl: 'https://streamcraft-demo.netlify.app',
      githubUrl: 'https://github.com/duckvhuynh/streamcraft',
    },
    {
      title: 'FinVision Analytics',
      description:
        'A financial analytics dashboard for investment professionals with advanced data visualization, algorithmic trading models, and real-time market data integration.',
      image: '/portfolio/finvision.jpg',
      tags: ['Vue.js', 'D3.js', 'Express', 'Redis', 'WebSockets', 'Docker'],
      liveUrl: 'https://finvision.app',
      githubUrl: 'https://github.com/duckvhuynh/finvision',
    },
    {
      title: 'ArtisanMarket Platform',
      description:
        'An e-commerce marketplace connecting artisans with customers globally, featuring secure payments, AR product previews, and integrated shipping logistics.',
      image: '/portfolio/artisanmarket.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'i18n'],
      liveUrl: 'https://artisan-market.com',
      githubUrl: 'https://github.com/duckvhuynh/artisanmarket',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/40">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work showcasing my technical skills and problem-solving
            approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col h-full border border-muted group hover:shadow-md transition-all"
            >
              <div className="aspect-video w-full bg-muted relative overflow-hidden">
                {/* Replace with actual images */}
                <div className="h-full w-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">{project.title} Screenshot</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" /> Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="grow pb-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <Badge variant="secondary" key={i}>
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="outline">+{project.tags.length - 4}</Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <div className="flex justify-between w-full">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-4 w-4 mr-2" /> Source
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
