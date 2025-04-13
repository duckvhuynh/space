'use client'

import React, { useState, useRef } from 'react'
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
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion'
import { CreativeGrid, GridItem } from './UI/CreativeGrid'
import { MagneticButton } from './UI/MagneticButton'
import { projects } from '../data/projects'

export function PortfolioProjects() {
  // Reference for scroll-based animations
  const containerRef = useRef<HTMLDivElement>(null)

  // For hover states
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Create a spring-based scroll progress for smoother animation
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 })

  // Create a subtle rotation based on scroll position
  const rotate = useTransform(smoothProgress, [0, 1], [-2, 2])

  // Custom hook to determine screen size
  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    React.useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      checkIsMobile()
      window.addEventListener('resize', checkIsMobile)

      return () => {
        window.removeEventListener('resize', checkIsMobile)
      }
    }, [])

    return isMobile
  }

  const isMobile = useIsMobile()

  return (
    <motion.section id="projects" className="py-12" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto px-4 md:px-0"
      >
        <motion.div
          className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <FolderIcon className="h-6 w-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground">
          A selection of my recent work and personal projects.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 md:mb-12 flex justify-center h-10 md:h-12 shadow-sm backdrop-blur bg-background/50 rounded-full max-w-sm mx-auto overflow-x-auto no-scrollbar">
          <TabsTrigger value="all" className="rounded-full text-sm">
            All
          </TabsTrigger>
          <TabsTrigger value="web" className="rounded-full text-sm">
            Web
          </TabsTrigger>
          <TabsTrigger value="mobile" className="rounded-full text-sm">
            Mobile
          </TabsTrigger>
          <TabsTrigger value="data" className="rounded-full text-sm">
            Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="px-4 md:px-0">
          {isMobile ? (
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onHover={() => setHoveredCard(project.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    isHovered={hoveredCard === project.id}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <CreativeGrid>
              {projects.map((project, index) => {
                // Create a staggered, creative layout
                const span = index % 3 === 0 ? 7 : index % 3 === 1 ? 5 : 6
                const colStart = index % 3 === 0 ? 1 : index % 3 === 1 ? 8 : 3

                return (
                  <GridItem key={project.id} span={span} colStart={colStart} delay={index * 0.1}>
                    <ProjectCard
                      project={project}
                      index={index}
                      onHover={() => setHoveredCard(project.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      isHovered={hoveredCard === project.id}
                    />
                  </GridItem>
                )
              })}
            </CreativeGrid>
          )}
        </TabsContent>

        {['web', 'mobile', 'data'].map((category) => (
          <TabsContent key={category} value={category} className="px-4 md:px-0">
            {isMobile ? (
              <div className="grid grid-cols-1 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ProjectCard
                        project={project}
                        index={index}
                        onHover={() => setHoveredCard(project.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                        isHovered={hoveredCard === project.id}
                      />
                    </motion.div>
                  ))}
              </div>
            ) : (
              <CreativeGrid>
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => {
                    // Create a staggered, creative layout
                    const span = index % 3 === 0 ? 7 : index % 3 === 1 ? 5 : 6
                    const colStart = index % 3 === 0 ? 1 : index % 3 === 1 ? 8 : 3

                    return (
                      <GridItem
                        key={project.id}
                        span={span}
                        colStart={colStart}
                        delay={index * 0.1}
                      >
                        <ProjectCard
                          project={project}
                          index={index}
                          onHover={() => setHoveredCard(project.id)}
                          onHoverEnd={() => setHoveredCard(null)}
                          isHovered={hoveredCard === project.id}
                        />
                      </GridItem>
                    )
                  })}
              </CreativeGrid>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </motion.section>
  )
}

function ProjectCard({ project, index, onHover, onHoverEnd, isHovered }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  // Card hover effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        rotateX: mousePosition.y * -5,
        rotateY: mousePosition.x * 5,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all border-none bg-background/60 backdrop-blur h-full flex flex-col group">
        <div className="relative h-48 w-full overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <Image
              src={project.image || '/placeholder-image.jpg'}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {project.featured && (
            <motion.div
              className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded flex items-center gap-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <StarIcon className="h-3 w-3" />
              <span>Featured</span>
            </motion.div>
          )}

          {/* Add a slight overlay when hovered */}
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none"
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-lg relative">
            {project.title}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={isHovered ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.3 }}
            />
          </CardTitle>
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
          <MagneticButton
            size="sm"
            variant="outline"
            asChild
            className="flex-1 rounded-full shadow-sm hover:shadow-md transition-shadow bg-background/50"
            strength={30}
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              Code
            </a>
          </MagneticButton>
          <MagneticButton
            size="sm"
            asChild
            className="flex-1 rounded-full shadow-sm hover:shadow-md transition-shadow"
            strength={30}
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Demo
            </a>
          </MagneticButton>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
