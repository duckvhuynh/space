'use client'

import React, { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BriefcaseIcon, GraduationCapIcon, UserIcon, HeartIcon, AwardIcon } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function PortfolioAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Create animated values for parallax effect
  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={containerRef}>
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-[0.02] pointer-events-none">
        <motion.div
          className="w-full h-full flex items-center justify-center text-[20rem] md:text-[28rem] font-thin text-neutral-400"
          style={{ y: contentY }}
          aria-hidden="true"
        >
          ABOUT
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-left mb-24 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6">About</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
          A brief
          <br />
          introduction
        </h2>
        <p className="text-neutral-300 font-light leading-relaxed">
          Get to know my approach to design and development, where minimalism meets functionality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <motion.div
          className="md:col-span-5 lg:col-span-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="grid grid-cols-4 mb-12 mx-auto h-12 shadow-none bg-transparent border-b border-neutral-800/20 rounded-none w-full">
              {[
                { value: 'bio', label: 'Bio' },
                { value: 'experience', label: 'Experience' },
                { value: 'education', label: 'Education' },
                { value: 'interests', label: 'Interests' },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-neutral-200 rounded-none text-sm uppercase tracking-wider font-light"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TabsContent value="bio" className="mt-0">
                <div className="space-y-6 text-base text-neutral-300 font-light leading-relaxed">
                  <p>
                    I am a designer and developer who creates minimal digital experiences where form
                    follows function.
                  </p>
                  <p>
                    With a focus on typography, white space, and clean interactions, I craft
                    websites and applications that prioritize content and user experience above all.
                  </p>
                  <p>
                    My approach involves reducing design to its essential elements, focusing on
                    subtle details that create polished, premium digital products.
                  </p>
                </div>
              </TabsContent>

              {/* Other tabs content follows the same structure */}
              <TabsContent value="experience">{/* Experience content */}</TabsContent>

              <TabsContent value="education">{/* Education content */}</TabsContent>

              <TabsContent value="interests">{/* Interests content */}</TabsContent>
            </motion.div>
          </Tabs>
        </motion.div>

        <motion.div
          className="md:col-span-7 lg:col-span-8 relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="aspect-[4/3] bg-neutral-100/5 relative overflow-hidden">
            <motion.img
              src="/about-image.jpg"
              alt="About me"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-24 md:mt-40 md:ml-[33.33%] max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
          <p>"Design is not just what it looks like and feels like. Design is how it works."</p>
          <p className="text-sm text-neutral-400 mt-4">— Steve Jobs</p>
        </div>
      </motion.div>
    </section>
  )
}
