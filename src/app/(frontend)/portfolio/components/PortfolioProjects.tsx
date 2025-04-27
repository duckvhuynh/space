'use client'

import React, { useState } from 'react'
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
import { ExternalLinkIcon, GithubIcon, Filter } from 'lucide-react'
// Fix motion import to use specific imports
import { motion as m } from 'framer-motion'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export const PortfolioProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: 'EcoTrack Dashboard',
      description:
        'A comprehensive sustainability monitoring platform that helps companies track and reduce their carbon footprint with real-time analytics and actionable insights.',
      image: '/portfolio/ecotrack.jpg',
      tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB', 'AWS'],
      category: 'frontend',
      liveUrl: 'https://ecotrack-demo.vercel.app',
      githubUrl: 'https://github.com/duckvhuynh/ecotrack',
      fullDescription: `EcoTrack Dashboard is a comprehensive sustainability monitoring platform designed to help companies track and reduce their carbon footprint. The application provides real-time analytics and actionable insights, allowing businesses to make data-driven decisions about their environmental impact.

Key features include:
• Real-time carbon emission tracking
• Interactive data visualization using D3.js
• Customizable reporting and analytics
• Integration with IoT sensors for automated data collection
• Personalized recommendations for reducing environmental impact

Technical implementation involved a React/TypeScript frontend with a Node.js backend, MongoDB for data storage, and AWS for cloud infrastructure.`,
    },
    {
      title: 'HealthConnect Portal',
      description:
        'A HIPAA-compliant telehealth platform connecting patients with healthcare providers, featuring secure video consultations, appointment scheduling, and medical record management.',
      image: '/portfolio/healthconnect.jpg',
      tags: ['Next.js', 'Express', 'PostgreSQL', 'WebRTC', 'Stripe', 'Auth0'],
      category: 'fullstack',
      liveUrl: 'https://health-connect.vercel.app',
      githubUrl: 'https://github.com/duckvhuynh/health-connect',
      fullDescription: `HealthConnect Portal is a HIPAA-compliant telehealth platform that bridges the gap between patients and healthcare providers. The application enables secure video consultations, streamlined appointment scheduling, and comprehensive medical record management.

Key features include:
• Secure, encrypted video consultations using WebRTC
• Integrated appointment scheduling system
• Electronic health record (EHR) management
• Secure messaging between patients and providers
• Integrated payment processing with Stripe
• Multi-factor authentication and robust security measures

The platform was built using Next.js for the frontend, Express for the backend API, PostgreSQL for data storage, and Auth0 for authentication and authorization.`,
    },
    {
      title: 'TravelMate App',
      description:
        'An AI-powered travel companion app that creates personalized itineraries based on user preferences, local attractions, and real-time availability.',
      image: '/portfolio/travelmate.jpg',
      tags: ['React Native', 'Firebase', 'Google Maps API', 'OpenAI', 'Expo'],
      category: 'mobile',
      liveUrl: 'https://travelmate-expo.dev',
      githubUrl: 'https://github.com/duckvhuynh/travelmate',
      fullDescription: `TravelMate App is an AI-powered travel companion that transforms how users plan their trips. The application creates personalized itineraries based on user preferences, local attractions, and real-time availability, ensuring a unique and hassle-free travel experience.

Key features include:
• AI-generated custom itineraries using OpenAI's GPT
• Integration with Google Maps for navigation and location discovery
• Real-time updates on attraction availability and wait times
• User preference learning for increasingly personalized recommendations
• Offline mode for travelers without constant internet access
• Social sharing for itineraries and travel experiences

The app was developed using React Native and Expo for cross-platform compatibility, with Firebase providing backend services and database functionality.`,
    },
    {
      title: 'StreamCraft CMS',
      description:
        'A headless CMS built for content creators and streamers to manage their multi-platform content, schedule posts, and analyze audience engagement metrics.',
      image: '/portfolio/streamcraft.jpg',
      tags: ['PayloadCMS', 'React', 'TypeScript', 'MongoDB', 'GraphQL', 'AWS S3'],
      category: 'backend',
      liveUrl: 'https://streamcraft-demo.netlify.app',
      githubUrl: 'https://github.com/duckvhuynh/streamcraft',
      fullDescription: `StreamCraft CMS is a specialized headless content management system designed specifically for content creators and streamers. It enables efficient management of multi-platform content, automated post scheduling, and comprehensive audience engagement analytics.

Key features include:
• Unified dashboard for managing content across multiple platforms
• Advanced content scheduling with platform-specific optimizations
• Custom fields and content models for different content types
• Integrated analytics for tracking audience engagement
• Automatic content formatting for different platforms
• Media management with AWS S3 integration

The system was built using PayloadCMS as a foundation, with React and TypeScript for the admin interface, MongoDB for data storage, and GraphQL for the API layer.`,
    },
    {
      title: 'FinVision Analytics',
      description:
        'A financial analytics dashboard for investment professionals with advanced data visualization, algorithmic trading models, and real-time market data integration.',
      image: '/portfolio/finvision.jpg',
      tags: ['Vue.js', 'D3.js', 'Express', 'Redis', 'WebSockets', 'Docker'],
      category: 'frontend',
      liveUrl: 'https://finvision.app',
      githubUrl: 'https://github.com/duckvhuynh/finvision',
      fullDescription: `FinVision Analytics is a sophisticated financial dashboard designed for investment professionals. It features advanced data visualization capabilities, algorithmic trading models, and seamless integration with real-time market data sources.

Key features include:
• Complex financial visualizations using D3.js
• Real-time market data updates via WebSockets
• Algorithmic trading model backtesting
• Portfolio performance analysis and forecasting
• Customizable dashboards and reports
• Data export in multiple formats for further analysis

The application was developed using Vue.js for the frontend, with Express powering the backend API. Redis was used for caching and real-time data handling, and the entire stack was containerized with Docker for easy deployment.`,
    },
    {
      title: 'ArtisanMarket Platform',
      description:
        'An e-commerce marketplace connecting artisans with customers globally, featuring secure payments, AR product previews, and integrated shipping logistics.',
      image: '/portfolio/artisanmarket.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'i18n'],
      category: 'fullstack',
      liveUrl: 'https://artisan-market.com',
      githubUrl: 'https://github.com/duckvhuynh/artisanmarket',
      fullDescription: `ArtisanMarket Platform is a specialized e-commerce marketplace that connects skilled artisans with customers worldwide. The platform features secure payment processing, augmented reality product previews, and comprehensive shipping and logistics integration.

Key features include:
• Multilingual support with i18n for global accessibility
• AR product preview functionality for immersive shopping
• Integrated Stripe payment processing with multi-currency support
• Sophisticated search and discovery algorithms
• Seller dashboard with analytics and inventory management
• International shipping and logistics integration

The platform was built using Next.js and Tailwind CSS for the frontend, with Prisma as the ORM and PostgreSQL for data storage. The application supports multiple languages through i18n integration.`,
    },
  ]

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="flex flex-col items-center mb-8 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-base font-medium">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A selection of my recent work showcasing my technical skills and problem-solving
            approach.
          </p>

          <div className="w-full max-w-xs mb-8 flex items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter projects" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="all">All Projects</SelectItem>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="fullstack">Full Stack</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <m.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredProjects.map((project, index) => (
            <m.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden flex flex-col h-full border border-muted group hover:shadow-lg transition-all hover:border-primary/20">
                <div className="aspect-video w-full bg-muted relative overflow-hidden">
                  {/* Replace with actual images */}
                  <div className="h-full w-full bg-gradient-to-br from-primary/5 to-muted/80 flex items-center justify-center">
                    <span className="text-xl font-medium text-foreground/70">{project.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-4 w-4 mr-2" /> Live Demo
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
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge variant="secondary" key={i}>
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline">+{project.tags.length - 3}</Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 flex justify-between">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" /> Demo
                    </a>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project)}>
                        Details
                      </Button>
                    </DialogTrigger>
                    {selectedProject && (
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>{selectedProject.title}</DialogTitle>
                          <DialogDescription>A detailed look at this project</DialogDescription>
                        </DialogHeader>
                        <div className="py-6">
                          <div className="aspect-video w-full bg-muted relative overflow-hidden rounded-lg mb-4">
                            <div className="h-full w-full bg-gradient-to-br from-primary/10 to-muted flex items-center justify-center">
                              <span className="text-xl font-medium text-foreground/70">
                                {selectedProject.title} Screenshot
                              </span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {selectedProject.tags.map((tag: string, i: number) => (
                                <Badge key={i} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="whitespace-pre-line text-muted-foreground">
                              {selectedProject.fullDescription}
                            </div>
                            <div className="flex justify-between pt-4">
                              <Button variant="outline" asChild>
                                <a
                                  href={selectedProject.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <GithubIcon className="h-4 w-4 mr-2" /> View Code
                                </a>
                              </Button>
                              <Button asChild>
                                <a
                                  href={selectedProject.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLinkIcon className="h-4 w-4 mr-2" /> Live Demo
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>
                </CardFooter>
              </Card>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
