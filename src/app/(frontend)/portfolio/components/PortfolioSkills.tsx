'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export const PortfolioSkills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  const frontendSkills = [
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'GSAP', category: 'frontend' },
  ]

  const backendSkills = [
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'MongoDB', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'GraphQL', category: 'backend' },
  ]

  const tools = [
    { name: 'Git', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'AWS', category: 'tools' },
    { name: 'Figma', category: 'tools' },
    { name: 'CI/CD', category: 'tools' },
  ]

  const allSkills = [...frontendSkills, ...backendSkills, ...tools]

  return (
    <section
      id="skills"
      className="min-h-screen bg-background text-foreground py-24 relative overflow-hidden"
      ref={containerRef}
    >
      <motion.div style={{ opacity, scale }} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative z-10"
          ref={sectionRef}
        >
          <span className="block text-xs uppercase tracking-widest mb-4 text-foreground/50">
            Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Skills &<br />
            <span className="font-bold">Capabilities</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2 }}
              className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full border border-foreground"
            ></motion.div>
            <motion.div
              animate={isInView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full border border-foreground"
            ></motion.div>
          </div>

          {/* Interactive skill display */}
          <div className="relative z-10">
            <motion.div className="flex flex-wrap max-w-4xl mx-auto">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`
                    m-2 px-4 py-2 backdrop-blur-sm border 
                    ${
                      skill.category === 'frontend'
                        ? 'border-foreground text-foreground'
                        : skill.category === 'backend'
                          ? 'border-foreground/50 text-foreground/80'
                          : 'border-foreground/30 text-foreground/60'
                    }
                    rounded-full inline-flex items-center justify-center
                    hover:bg-foreground/5 transition-all duration-300
                  `}
                >
                  <span className="text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-24 max-w-2xl mx-auto text-center text-foreground/60 font-light"
            >
              <p className="text-lg">
                Balancing <span className="font-normal text-foreground">frontend aesthetics</span>{' '}
                with <span className="font-normal text-foreground">backend logic</span>, creating
                seamless experiences through modern technology.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
