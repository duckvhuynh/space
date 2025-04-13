'use client'

import React, { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeIcon, ServerIcon, SettingsIcon } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ParallaxText } from './UI/ParallaxText'
import Image from 'next/image'

// Interface for skills with icon support
interface Skill {
  name: string
  icon?: string // Path to the icon image
  description?: string // Brief description or area of expertise
}

// Interface for skill categories
interface SkillCategory {
  name: string
  skills: Skill[]
}

export function PortfolioSkills() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Define skill categories with their respective skills
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      skills: [
        {
          name: 'React',
          icon: '/icons/react.svg',
          description: 'Component architecture, hooks, state management',
        },
        {
          name: 'Next.js',
          icon: '/icons/nextjs.svg',
          description: 'SSR, ISR, API routes, app router',
        },
        {
          name: 'TypeScript',
          icon: '/icons/typescript.svg',
          description: 'Type safety, interfaces, generics',
        },
        {
          name: 'CSS/Tailwind',
          icon: '/icons/tailwind.svg',
          description: 'Responsive design, animations, custom theming',
        },
        {
          name: 'UI/UX Design',
          icon: '/icons/figma.svg',
          description: 'Wireframing, prototyping, accessibility',
        },
      ],
    },
    {
      name: 'Backend Development',
      skills: [
        {
          name: 'Node.js',
          icon: '/icons/nodejs.svg',
          description: 'API development, middleware, async patterns',
        },
        {
          name: 'Express',
          icon: '/icons/express.svg',
          description: 'Routing, middleware, REST API design',
        },
        {
          name: 'PostgreSQL',
          icon: '/icons/postgresql.svg',
          description: 'Database design, complex queries, indexing',
        },
        {
          name: 'MongoDB',
          icon: '/icons/mongodb.svg',
          description: 'Document modeling, aggregation, indexing',
        },
        {
          name: 'RESTful APIs',
          icon: '/icons/api.svg',
          description: 'API design, documentation, versioning',
        },
      ],
    },
  ]

  const tools: Skill[] = [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Jest', icon: '/icons/jest.svg' },
    { name: 'CI/CD', icon: '/icons/cicd.svg' },
    { name: 'AWS', icon: '/icons/aws.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Webpack', icon: '/icons/webpack.svg' },
    { name: 'GraphQL', icon: '/icons/graphql.svg' },
    { name: 'Redux', icon: '/icons/redux.svg' },
    { name: 'Storybook', icon: '/icons/storybook.svg' },
    { name: 'Cypress', icon: '/icons/cypress.svg' },
    { name: 'Firebase', icon: '/icons/firebase.svg' },
  ]

  // Adjust transforms for smaller screens
  const offsetLeft = useTransform(scrollYProgress, [0, 0.5], ['-10%', '0%'])
  const offsetRight = useTransform(scrollYProgress, [0, 0.5], ['10%', '0%'])

  return (
    <section id="skills" className="py-12 relative" ref={containerRef}>
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
          <ParallaxText className="opacity-5 text-4xl font-bold mt-20" baseVelocity={-1}>
            HTML CSS JavaScript TypeScript React NextJS Node Express
          </ParallaxText>
          <ParallaxText
            className="opacity-5 text-4xl font-bold mt-16"
            baseVelocity={1}
            direction="right"
          >
            MongoDB PostgreSQL AWS Docker GraphQL Redux
          </ParallaxText>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto px-4 md:px-0"
      >
        <motion.div
          className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <CodeIcon className="h-6 w-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground">
          A comprehensive overview of my technical skills and competencies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            style={{ x: categoryIndex === 0 ? offsetLeft : offsetRight }}
            initial={{ opacity: 0, x: categoryIndex === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card className="shadow-lg border-none bg-background/60 backdrop-blur h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  {categoryIndex === 0 ? (
                    <CodeIcon className="h-5 w-5 text-primary" />
                  ) : (
                    <ServerIcon className="h-5 w-5 text-primary" />
                  )}
                  {category.name}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-3 bg-muted/20 hover:bg-muted/30 p-3 rounded-lg transition-all duration-300">
                        {skill.icon && (
                          <motion.div
                            className="relative w-8 h-8 flex-shrink-0 mt-1 bg-background/60 rounded-md p-1 shadow-sm group-hover:shadow-md transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              fill
                              className="object-contain p-1"
                            />
                          </motion.div>
                        )}
                        <div>
                          <h4 className="font-medium text-base md:text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>
                          {skill.description && (
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 md:mt-8 px-4 md:px-0"
      >
        <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-2 text-sm shadow-sm bg-muted/50 hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    {tool.icon && (
                      <div className="relative w-4 h-4 flex-shrink-0">
                        <Image
                          src={tool.icon}
                          alt={`${tool.name} icon`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    {tool.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Add example path for icon images */}
      <div className="mt-8 text-center text-sm text-muted-foreground px-4">
        <p>
          Note: Place your skill icons in the /public/icons/ directory (e.g.,
          /public/icons/react.svg)
        </p>
      </div>
    </section>
  )
}
