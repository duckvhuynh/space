'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from 'lucide-react'

export const PortfolioProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const projects = [
    {
      title: 'Minimalist Dashboard',
      description:
        'A refined analytics platform with dynamic data visualization and real-time metrics tracking.',
      tags: ['React', 'TypeScript', 'D3.js', 'Firebase'],
      image: '/placeholder-project-1.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'E-Commerce Architecture',
      description:
        'A headless commerce solution with microservices architecture and serverless functions.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'AWS Lambda'],
      image: '/placeholder-project-2.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Motion Design System',
      description:
        'An interactive component library with animation patterns and accessibility guidelines.',
      tags: ['React', 'Framer Motion', 'Storybook', 'Jest'],
      image: '/placeholder-project-3.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="min-h-screen bg-background text-foreground py-24 relative overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="block text-xs uppercase tracking-widest mb-4 text-foreground/50">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Selected <span className="font-bold">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              className="relative"
            >
              <div
                className={`flex flex-col md:flex-row gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="md:w-1/2"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted/30 border border-foreground/10">
                    <div className="h-full w-full bg-background flex items-center justify-center text-foreground/20">
                      <span className="text-sm">Project Image</span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeProject === index ? 1 : 0 }}
                      className="absolute inset-0 bg-background/60 flex items-center justify-center"
                    >
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-sm hover:bg-primary/90 transition"
                        >
                          <ExternalLinkIcon className="h-4 w-4 inline-block mr-2" />
                          View Live
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-foreground text-foreground text-sm rounded-sm hover:bg-foreground/10 transition"
                        >
                          <GithubIcon className="h-4 w-4 inline-block mr-2" />
                          Source
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="md:w-1/2 flex flex-col justify-center"
                >
                  <span className="text-foreground/40 text-sm">0{index + 1}</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                  <p className="text-foreground/70 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs border border-foreground/20 text-foreground/70 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-foreground/80 hover:text-foreground group transition-colors w-fit"
                    whileHover={{ x: 5 }}
                  >
                    View Project Details
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: activeProject === index ? 5 : 0 }}
                      className="ml-2"
                    >
                      <ArrowRightIcon className="h-4 w-4" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Project number background */}
              <motion.div
                initial={{ opacity: 0.02 }}
                whileInView={{ opacity: 0.04 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`absolute -z-10 top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}
              >
                <span className="text-[20rem] font-bold text-foreground leading-none">
                  {index + 1}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
