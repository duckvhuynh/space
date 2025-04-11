'use client'

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLinkIcon, FolderIcon, GithubIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform built with Next.js and Node.js, featuring product catalog, cart, checkout with Stripe, and admin dashboard.',
    image: '/placeholder-project-1.jpg',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'web',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A drag-and-drop task management application with real-time updates, multiple workspaces, and team collaboration features.',
    image: '/placeholder-project-2.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'web',
    featured: true,
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    description:
      'A cross-platform fitness tracking application built with React Native, featuring workout plans, progress tracking, and social sharing.',
    image: '/placeholder-project-3.jpg',
    tags: ['React Native', 'Redux', 'GraphQL', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'mobile',
    featured: true,
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description:
      'An interactive dashboard for visualizing complex datasets with multiple chart types, filtering, and export capabilities.',
    image: '/placeholder-project-4.jpg',
    tags: ['D3.js', 'React', 'Express', 'Material UI'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'data',
    featured: false,
  },
  {
    id: 5,
    title: 'AI Content Generator',
    description:
      'A web application using OpenAI APIs to help users generate and refine content for various purposes.',
    image: '/placeholder-project-5.jpg',
    tags: ['React', 'OpenAI API', 'Express', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'web',
    featured: false,
  },
  {
    id: 6,
    title: 'IoT Home Dashboard',
    description:
      'A dashboard to monitor and control smart home devices with real-time data updates and automation rules.',
    image: '/placeholder-project-6.jpg',
    tags: ['React', 'Node.js', 'MQTT', 'WebSockets'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'data',
    featured: false,
  },
]

export function PortfolioProjects() {
  return (
    <section id="projects" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <FolderIcon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground">
          A selection of my recent work and personal projects.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-12 flex justify-center h-12 shadow-sm backdrop-blur bg-background/50 rounded-full max-w-lg mx-auto">
          <TabsTrigger value="all" className="rounded-full">
            All
          </TabsTrigger>
          <TabsTrigger value="web" className="rounded-full">
            Web
          </TabsTrigger>
          <TabsTrigger value="mobile" className="rounded-full">
            Mobile
          </TabsTrigger>
          <TabsTrigger value="data" className="rounded-full">
            Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </TabsContent>

        {['web', 'mobile', 'data'].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === category)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all border-none bg-background/60 backdrop-blur h-full flex flex-col group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || '/placeholder-image.jpg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.featured && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded flex items-center gap-1">
              <StarIcon className="h-3 w-3" />
              <span>Featured</span>
            </div>
          )}
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2 h-10">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow pb-2">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs bg-muted/50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 pt-2">
          <Button
            size="sm"
            variant="outline"
            asChild
            className="flex-1 rounded-full shadow-sm hover:shadow-md transition-shadow bg-background/50"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="flex-1 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
