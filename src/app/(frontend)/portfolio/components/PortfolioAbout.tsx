'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Code,
  Coffee,
  Book,
  CheckCircle2,
} from 'lucide-react'
// Fix motion import to use specific imports
import { motion as m } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export const PortfolioAbout: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-base font-medium">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Background</h2>
          <p className="text-muted-foreground max-w-2xl">
            With over 8 years in tech, I've evolved from a curious programmer to a passionate
            full-stack developer focused on creating impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <m.div
            className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden border border-border order-2 lg:order-1 group"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Replace with your image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background/0 z-10"></div>
            <div className="h-full w-full bg-muted/20 flex items-center justify-center relative">
              <span className="text-2xl text-muted-foreground z-10">
                Professional Profile Photo
              </span>
              <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>

              {/* Decorative elements */}
              <div
                className="absolute top-6 right-6 w-20 h-20 border-4 border-primary/20 rounded-lg z-0 
                        group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
              ></div>
              <div
                className="absolute bottom-6 left-6 w-20 h-20 border-4 border-primary/20 rounded-full z-0 
                        group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
              ></div>

              {/* Add subtle animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </m.div>

          <m.div
            className="order-1 lg:order-2"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="expertise">Expertise</TabsTrigger>
                <TabsTrigger value="education">Background</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6">Who Am I?</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      I'm a full-stack developer with 8+ years of experience creating scalable web
                      applications and digital products. My journey began with a passion for
                      problem-solving, which led me to explore software engineering as a way to
                      build solutions that impact people's lives.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      I've mastered TypeScript, React, Node.js, and modern cloud architectures. I'm
                      particularly passionate about creating accessible, performant applications
                      with clean, maintainable code. I believe great software should be both
                      technically excellent and delightful to use.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Book className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      When I'm not coding, you'll find me exploring the latest tech trends,
                      contributing to open-source, hiking in nature, or experimenting with
                      photography. I'm also an avid reader of sci-fi and technical books, always
                      looking to expand my horizons.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="expertise" className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ExpertiseCard
                    title="Frontend Development"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m18 16 4-4-4-4" />
                        <path d="m6 8-4 4 4 4" />
                        <path d="m14.5 4-5 16" />
                      </svg>
                    }
                    skills={[
                      'Component-based architecture',
                      'State management',
                      'Responsive design',
                      'Performance optimization',
                    ]}
                  />
                  <ExpertiseCard
                    title="Backend Systems"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M2 19V8.7a1.94 1.94 0 0 1 .3-1A6.18 6.18 0 0 1 6 5a8.26 8.26 0 0 1 8 3.3A7.51 7.51 0 0 1 18 5a6.18 6.18 0 0 1 3.7 2.7c.2.3.3.6.3 1V19" />
                        <path d="M2 19h20" />
                        <path d="M18 19v-7" />
                        <path d="M22 19v-7" />
                        <path d="M6 19v-7" />
                        <path d="M2 19v-7" />
                        <path d="M12 19v-7" />
                        <path d="M10 8l4 4" />
                        <path d="M8 8l8 8" />
                        <path d="M2 8l20 20" />
                      </svg>
                    }
                    skills={[
                      'API design',
                      'Database modeling',
                      'Authentication/Authorization',
                      'Serverless architecture',
                    ]}
                  />
                  <ExpertiseCard
                    title="UX Engineering"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    }
                    skills={[
                      'Accessibility (WCAG)',
                      'UI animation',
                      'User flows',
                      'Usability testing',
                    ]}
                  />
                  <ExpertiseCard
                    title="DevOps & Cloud"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M20 16.7a4 4 0 0 0-4.1-4 4 4 0 0 0-7.76 2A3 3 0 0 0 9 21h9.5a2.5 2.5 0 0 0 1.5-4.5" />
                      </svg>
                    }
                    skills={[
                      'CI/CD pipelines',
                      'Container orchestration',
                      'Infrastructure as code',
                      'Monitoring & logging',
                    ]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Education
                    </h4>
                    <EducationItem
                      degree="MSc in Computer Science"
                      school="Stanford University"
                      years="2014-2016"
                      description="Specialized in distributed systems and machine learning applications."
                    />
                    <EducationItem
                      degree="BSc in Software Engineering"
                      school="University of California"
                      years="2010-2014"
                      description="Graduated with honors, focusing on web technologies and databases."
                    />
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Experience
                    </h4>
                    <ExperienceItem
                      title="Senior Full Stack Engineer"
                      company="TechVision Global"
                      years="2020-Present"
                      description="Leading architecture decisions for enterprise platforms serving millions of users."
                    />
                    <ExperienceItem
                      title="Frontend Developer"
                      company="InnovateSoft Solutions"
                      years="2016-2020"
                      description="Developed responsive web applications with modern JavaScript frameworks."
                    />
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border">
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    Certifications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">AWS Certified Solutions Architect</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Google Cloud Professional Developer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">MongoDB Certified Developer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">React Advanced Concepts Certification</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Button className="group" asChild>
                <a href="/duck-huynh-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

interface ExpertiseCardProps {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, icon, skills }) => {
  return (
    <Card className="hover:shadow-md transition-all border border-border hover:border-primary/20">
      <CardContent className="p-4 pt-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-md bg-primary/10 text-primary">{icon}</div>
          <h4 className="font-medium">{title}</h4>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

interface EducationItemProps {
  degree: string
  school: string
  years: string
  description: string
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, school, years, description }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="p-3 border border-border rounded-lg hover:border-primary/20 cursor-pointer transition-all">
          <strong className="block text-foreground">{degree}</strong>
          <span className="text-sm text-muted-foreground">
            {school}, {years}
          </span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={`/logos/${school.toLowerCase().replace(/\s+/g, '')}.png`} />
            <AvatarFallback>
              {school
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{degree}</h4>
            <p className="text-sm text-muted-foreground">
              {school}, {years}
            </p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  years: string
  description: string
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, years, description }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="p-3 border border-border rounded-lg hover:border-primary/20 cursor-pointer transition-all">
          <strong className="block text-foreground">{title}</strong>
          <span className="text-sm text-muted-foreground">
            {company}, {years}
          </span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={`/logos/${company.toLowerCase().replace(/\s+/g, '')}.png`} />
            <AvatarFallback>
              {company
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm text-muted-foreground">
              {company}, {years}
            </p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
