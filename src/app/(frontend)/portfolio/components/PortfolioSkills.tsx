'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// Fix motion import to use specific imports
import { motion as m } from 'framer-motion'

export const PortfolioSkills: React.FC = () => {
  const frontendSkills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Redux/Zustand', level: 85 },
    { name: 'React Query', level: 88 },
  ]

  const backendSkills = [
    { name: 'Node.js/Express', level: 92 },
    { name: 'MongoDB/Mongoose', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'GraphQL', level: 75 },
    { name: 'Payload CMS', level: 88 },
  ]

  const otherSkills = [
    'AWS',
    'Docker',
    'CI/CD',
    'Jest/Vitest',
    'Storybook',
    'Figma',
    'Git',
    'Agile',
    'RESTful APIs',
    'Performance Optimization',
    'Accessibility',
    'SEO',
    'Vercel',
    'Netlify',
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-base font-medium">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional toolkit has been refined through years of hands-on experience across
            various projects and domains.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-4">
            <Card className="border border-border shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Additional Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {otherSkills.map((skill, index) => (
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      key={index}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-1.5 px-3 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </m.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-card border border-border rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">My Learning Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>
            <div className="space-y-12 relative">
              <TimelineItem year="2016" title="Started with React" side="right">
                Built my first single-page applications with React and Redux
              </TimelineItem>
              <TimelineItem year="2018" title="Full Stack Development" side="left">
                Expanded to Node.js backends, MongoDB, and API design
              </TimelineItem>
              <TimelineItem year="2020" title="Modern Frontend" side="right">
                Mastered TypeScript, Next.js, and state management patterns
              </TimelineItem>
              <TimelineItem year="2022" title="Cloud & DevOps" side="left">
                Deployed and scaled applications with AWS, Docker, and CI/CD
              </TimelineItem>
              <TimelineItem year="Present" title="Continuous Learning" side="right">
                Exploring AI integration, WebAssembly, and edge computing
              </TimelineItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: { name: string; level: number }
  delay: number
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Card className="border border-border hover:shadow-md transition-all hover:border-primary/30 cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="mb-4">
                  <h4 className="text-lg font-medium mb-1">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">Proficiency: {skill.level}%</p>
                  <Progress value={skill.level} className="h-2" />
                </div>
                <div className="flex justify-end">
                  <Badge variant={skill.level >= 90 ? 'default' : 'secondary'}>
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>Experience level: {skill.level}%</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </m.div>
  )
}

interface TimelineItemProps {
  year: string
  title: string
  side: 'left' | 'right'
  children: React.ReactNode
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, side, children }) => {
  return (
    <div className={`flex items-center ${side === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`relative w-1/2 ${side === 'right' ? 'order-2 pl-8' : 'order-1 pr-8 text-right'}`}
      >
        <Card className="border border-border hover:border-primary/20 transition-all">
          <CardContent className="p-4">
            <Badge variant="outline" className="mb-2">
              {year}
            </Badge>
            <h4 className="text-lg font-medium mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{children}</p>
          </CardContent>
        </Card>
      </div>
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 bg-background border-primary z-10`}
      />
      <div className={`w-1/2 ${side === 'left' ? 'order-2 pl-8' : 'order-1 pr-8'}`}></div>
    </div>
  )
}
