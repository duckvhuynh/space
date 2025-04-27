'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// Fix motion import to use specific imports
import { motion as m } from 'framer-motion'
import { useTheme } from '@/providers/Theme'

export const PortfolioSkills: React.FC = () => {
  const { theme } = useTheme()
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

        {/* Improved learning journey component */}
        <div className="mt-12 bg-card border border-border rounded-lg p-4 md:p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">My Learning Journey</h3>

          {/* Mobile timeline (visible on small screens only) */}
          <div className="md:hidden space-y-6">
            {[
              {
                year: '2016',
                title: 'Started with React',
                description: 'Built my first single-page applications with React and Redux',
              },
              {
                year: '2018',
                title: 'Full Stack Development',
                description: 'Expanded to Node.js backends, MongoDB, and API design',
              },
              {
                year: '2020',
                title: 'Modern Frontend',
                description: 'Mastered TypeScript, Next.js, and state management patterns',
              },
              {
                year: '2022',
                title: 'Cloud & DevOps',
                description: 'Deployed and scaled applications with AWS, Docker, and CI/CD',
              },
              {
                year: 'Present',
                title: 'Continuous Learning',
                description: 'Exploring AI integration, WebAssembly, and edge computing',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border border-border hover:border-primary/20 transition-all overflow-hidden"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge
                      variant="outline"
                      className={`
                        ${theme === 'dark' ? 'border-primary bg-primary/10' : 'border-primary/50 bg-primary/5'} 
                        text-primary
                      `}
                    >
                      {item.year}
                    </Badge>
                    <div
                      className={`w-full h-[1px] ${theme === 'dark' ? 'bg-border' : 'bg-border/70'}`}
                    ></div>
                  </div>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop timeline (hidden on mobile) */}
          <div className="hidden md:block relative">
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 
                ${theme === 'dark' ? 'bg-muted' : 'bg-muted/70 shadow-[0_0_3px_rgba(0,0,0,0.05)]'}
              `}
            ></div>
            <div className="space-y-12 relative">
              <TimelineItem year="2016" title="Started with React" side="right" theme={theme}>
                Built my first single-page applications with React and Redux
              </TimelineItem>
              <TimelineItem year="2018" title="Full Stack Development" side="left" theme={theme}>
                Expanded to Node.js backends, MongoDB, and API design
              </TimelineItem>
              <TimelineItem year="2020" title="Modern Frontend" side="right" theme={theme}>
                Mastered TypeScript, Next.js, and state management patterns
              </TimelineItem>
              <TimelineItem year="2022" title="Cloud & DevOps" side="left" theme={theme}>
                Deployed and scaled applications with AWS, Docker, and CI/CD
              </TimelineItem>
              <TimelineItem year="Present" title="Continuous Learning" side="right" theme={theme}>
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
  theme: string | undefined
  children: React.ReactNode
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, side, theme, children }) => {
  return (
    <div className={`flex items-center ${side === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`relative w-1/2 ${side === 'right' ? 'order-2 pl-8' : 'order-1 pr-8 text-right'}`}
      >
        <Card
          className={`
            border border-border hover:border-primary/20 transition-all 
            ${side === 'right' ? 'hover:translate-x-1' : 'hover:-translate-x-1'} 
            hover:-translate-y-1 duration-300
          `}
        >
          <CardContent className="p-4">
            <Badge
              variant="outline"
              className={`
                mb-2 
                ${theme === 'dark' ? 'border-primary/50 bg-primary/10' : 'border-primary/30 bg-primary/5'}
                text-primary
              `}
            >
              {year}
            </Badge>
            <h4 className="text-lg font-medium mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{children}</p>
          </CardContent>
        </Card>
      </div>
      <div
        className={`
          absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full 
          border-4 bg-background 
          ${theme === 'dark' ? 'border-primary' : 'border-primary/70 shadow-[0_0_8px_rgba(0,0,0,0.1)]'}
          z-10
        `}
      />
      <div className={`w-1/2 ${side === 'left' ? 'order-2 pl-8' : 'order-1 pr-8'}`}></div>
    </div>
  )
}
