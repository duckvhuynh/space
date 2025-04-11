'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  ServerIcon,
  SettingsIcon,
  StarIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'

export function PortfolioSkills() {
  const frontendSkills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'CSS/Tailwind', level: 90 },
    { name: 'UI/UX Design', level: 80 },
  ]

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'RESTful APIs', level: 90 },
  ]

  const tools = [
    'Git',
    'Docker',
    'Jest',
    'CI/CD',
    'AWS',
    'Figma',
    'Webpack',
    'GraphQL',
    'Redux',
    'Storybook',
    'Cypress',
    'Firebase',
  ]

  return (
    <section id="skills" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <CodeIcon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground">
          A comprehensive overview of my technical skills and competencies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-lg border-none bg-background/60 backdrop-blur h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <LayoutIcon className="h-5 w-5 text-primary" />
                Frontend Development
              </h3>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center">
                        {Array.from({ length: Math.floor(skill.level / 20) }).map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                        {skill.level % 20 > 10 && (
                          <StarIcon className="h-4 w-4 fill-primary/50 text-primary" />
                        )}
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-lg border-none bg-background/60 backdrop-blur h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ServerIcon className="h-5 w-5 text-primary" />
                Backend Development
              </h3>
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center">
                        {Array.from({ length: Math.floor(skill.level / 20) }).map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                        {skill.level % 20 > 10 && (
                          <StarIcon className="h-4 w-4 fill-primary/50 text-primary" />
                        )}
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm shadow-sm bg-muted/50 hover:bg-muted transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
