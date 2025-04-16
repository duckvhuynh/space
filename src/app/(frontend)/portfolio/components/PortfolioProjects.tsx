'use client'

import React, { useState, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLinkIcon, FolderIcon, GithubIcon, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion'
import { MagneticButton } from './UI/MagneticButton'
import { projects } from '../data/projects'

export function PortfolioProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Create a spring-based scroll progress for smoother animation
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 })

  return (
    <section id="projects" className="py-24 md:py-32" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-left mb-24 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
          Selected
          <br />
          Projects
        </h2>
        <p className="text-neutral-300 font-light leading-relaxed">
          A curated selection of minimal design and development work that balances aesthetics and
          functionality.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <div className="mb-16">
          <TabsList className="justify-start h-12 shadow-none bg-transparent border-b border-neutral-800/20 rounded-none">
            {['all', 'web', 'branding', 'product'].map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-neutral-200 rounded-none text-sm uppercase tracking-wider font-light"
              >
                {category === 'all' ? 'All Work' : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
                setHovered={setHoveredProject}
                isHovered={hoveredProject === project.id}
              />
            ))}
          </div>
        </TabsContent>

        {['web', 'branding', 'product'].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
              {projects
                .filter((p) => p.category === category)
                .map((project, index) => (
                  <ProjectItem
                    key={project.id}
                    project={project}
                    index={index}
                    setHovered={setHoveredProject}
                    isHovered={hoveredProject === project.id}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

function ProjectItem({ project, index, setHovered, isHovered }) {
  // Alternate between left and right alignment for projects
  const isEven = index % 2 === 0
  const colSpan = isEven ? 'md:col-span-7' : 'md:col-span-7 md:col-start-6'
  const textAlign = isEven ? 'md:text-left' : 'md:text-right'

  return (
    <motion.div
      className={`col-span-12 ${colSpan}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="grid grid-cols-1 gap-6">
        <motion.div
          className="aspect-[16/9] overflow-hidden bg-neutral-100/5"
          whileHover={{ scale: 0.97 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="relative w-full h-full">
            <Image
              src={project.image || '/placeholder-project.jpg'}
              alt={project.title}
              fill
              className={`object-cover transition-all duration-700 ${isHovered ? 'grayscale-0 scale-105' : 'grayscale'}`}
            />
          </div>
        </motion.div>

        <div className={`${textAlign}`}>
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2">
            {project.category}
          </p>
          <h3 className="text-xl md:text-2xl font-light mb-4">{project.title}</h3>
          <p className="max-w-md text-neutral-300 font-light mb-6 text-sm leading-relaxed">
            {project.description}
          </p>

          <motion.div
            className={`flex gap-6 ${!isEven ? 'md:justify-end' : ''}`}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            <Button
              variant="link"
              className="text-neutral-300 hover:text-white p-0 flex items-center gap-2 font-light"
              asChild
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                View Project <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
