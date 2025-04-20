'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Code, Coffee, Book } from 'lucide-react'
import Image from 'next/image'

export const PortfolioAbout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Experience timeline data
  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Design Studio X',
      period: '2021 - Present',
      description:
        'Leading development of interactive web applications with React, Next.js and TypeScript.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Tech Innovations',
      period: '2019 - 2021',
      description: 'Built scalable applications using React, Node.js, and MongoDB.',
    },
    {
      role: 'Junior Developer',
      company: 'Digital Agency',
      period: '2017 - 2019',
      description: 'Developed responsive websites and implemented UI designs.',
    },
  ]

  return (
    <section
      ref={containerRef}
      id="about"
      className="min-h-screen bg-background text-foreground py-24 relative overflow-hidden"
    >
      <motion.div style={{ opacity }} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="block text-xs uppercase tracking-widest mb-4 text-foreground/50">
            Biography
          </span>
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            About <span className="font-bold">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div style={{ y: y1 }} className="lg:w-1/2 relative">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square max-w-md"
              >
                <div className="absolute inset-0 border border-foreground/20 -rotate-3"></div>
                <div className="absolute inset-0 bg-foreground/5 rotate-3 overflow-hidden backdrop-blur-sm">
                  <div className="h-full w-full bg-background/60 flex items-center justify-center">
                    <span className="text-foreground/30">Your Photo</span>
                  </div>
                </div>

                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-4 left-0 h-1 bg-foreground"
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12"
              >
                <a
                  href="/path-to-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span className="mr-4 text-sm uppercase tracking-wide">Download CV</span>
                  <span className="p-2 border border-foreground/20 rounded-full group-hover:border-foreground/40 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-foreground/80"
            >
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Career Path</h3>
                  <p className="font-light leading-relaxed">
                    I am a passionate full-stack developer with 5+ years of experience crafting
                    digital experiences. My journey began with a deep curiosity about how things
                    work on the web, which evolved into a career dedicated to building elegant,
                    functional applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Approach</h3>
                  <p className="font-light leading-relaxed">
                    I believe in creating solutions that balance form and function. Every project is
                    an opportunity to merge technical excellence with thoughtful design, resulting
                    in experiences that resonate with users on multiple levels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Book className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Beyond Code</h3>
                  <p className="font-light leading-relaxed">
                    When not immersed in code, I enjoy minimal photography, exploring architectural
                    design, and reading about human-computer interaction. These interests
                    continuously inform and enhance my approach to development.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16"
            >
              <h3 className="text-xl font-medium text-foreground mb-8">Experience Timeline</h3>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-foreground/10"
                  >
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-foreground"></div>
                    <span className="text-sm text-foreground/50">{exp.period}</span>
                    <h4 className="text-lg font-medium mt-1">{exp.role}</h4>
                    <p className="text-foreground/70 text-sm mb-1">{exp.company}</p>
                    <p className="text-foreground/60 text-sm font-light">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
