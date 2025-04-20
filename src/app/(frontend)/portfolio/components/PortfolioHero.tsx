'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export const PortfolioHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const elements = containerRef.current.querySelectorAll('.parallax-element')
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0')
        const xOffset = x * speed * 20
        const yOffset = y * speed * 20
        ;(el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-foreground parallax-element"
          data-speed="0.5"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-foreground parallax-element"
          data-speed="0.3"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-foreground/5 parallax-element"
          data-speed="0.8"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-sm uppercase tracking-widest mb-4 text-foreground/70 parallax-element"
              data-speed="0.2"
            >
              Full Stack Developer
            </motion.span>
          </motion.div>

          <div className="relative">
            {/* Layered typography */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 relative z-10 parallax-element"
              data-speed="0.2"
            >
              YOUR<span className="italic font-extralight mix-blend-difference">NAME</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-lg text-foreground/70 max-w-md mt-8 parallax-element"
              data-speed="0.1"
            >
              <p className="font-light">
                Creating elegant digital experiences where logic meets aesthetics —{' '}
                <span className="font-normal italic">form follows function</span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 inline-block relative parallax-element"
            data-speed="0.3"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-foreground opacity-20 rounded-full blur-sm group-hover:opacity-40 transition duration-500"></div>
              <button className="relative px-5 py-2 bg-background border border-foreground/20 rounded-full text-foreground/80 text-sm tracking-wider group-hover:text-foreground transition duration-500">
                EXPLORE WORK
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="h-6 w-6 text-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
