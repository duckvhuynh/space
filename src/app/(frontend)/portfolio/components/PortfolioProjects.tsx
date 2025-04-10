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
      title: 'Project One',
      description:
        'A full-stack web application with authentication, database integration and real-time features.',
      image: '/placeholder.jpg',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Project Two',
      description:
        'An e-commerce platform with payment processing, inventory management and analytics dashboard.',
      image: '/placeholder.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Project Three',
      description:
        'A mobile-responsive dashboard for data visualization and business intelligence.',
      image: '/placeholder.jpg',
      tags: ['Vue.js', 'D3.js', 'Firebase', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
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
            Check out some of my recent projects where I have applied my skills and knowledge.
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
                  <span className="text-muted-foreground">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button variant="secondary" size="sm">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" /> Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <GithubIcon className="h-4 w-4 mr-2" /> Code
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="grow pb-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge variant="secondary" key={i}>
                      {tag}
                    </Badge>
                  ))}
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
