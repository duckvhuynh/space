'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Code, Monitor, Laptop, ChevronRight } from 'lucide-react'
import { motion as m } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

// Define bubble positions outside of component to avoid hydration mismatch
const decorativeBubbles = [
  {
    position: { top: '15%', left: '20%' },
    size: { width: '120px', height: '120px' },
  },
  {
    position: { top: '70%', left: '80%' },
    size: { width: '150px', height: '150px' },
  },
  {
    position: { top: '40%', left: '60%' },
    size: { width: '100px', height: '100px' },
  },
  {
    position: { top: '80%', left: '30%' },
    size: { width: '130px', height: '130px' },
  },
  {
    position: { top: '25%', left: '75%' },
    size: { width: '110px', height: '110px' },
  },
]

export const PortfolioHero: React.FC = () => {
  // State to track if we're on client-side for animations
  const [isMounted, setIsMounted] = useState(false)

  // Only run animations after component is mounted on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 z-10">
        <m.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-base font-medium backdrop-blur-md bg-background/30"
          >
            <Code className="h-4 w-4 text-primary mr-2" />
            Full Stack Developer & UX Enthusiast
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I am <span className="text-primary">Duck V. Huynh</span>
          </h1>

          <div className="h-12 md:h-16">
            <TypeAnimation
              sequence={[
                'Building modern web applications',
                1500,
                'Crafting beautiful user interfaces',
                1500,
                'Architecting scalable backends',
                1500,
                'Creating digital experiences',
                1500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-xl md:text-2xl text-muted-foreground"
            />
          </div>

          <p className="text-lg text-muted-foreground backdrop-blur-sm bg-background/30 p-4 rounded-lg border border-border">
            Building innovative digital experiences with a focus on performance, accessibility, and
            beautiful UI. Specializing in React, Next.js, and modern web architectures.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 group" asChild>
              <a href="#projects">
                <Monitor className="h-4 w-4" />
                View Projects
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 group" asChild>
              <a href="#contact">
                <Laptop className="h-4 w-4" />
                Contact Me
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/duckvhuynh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/duckvhuynh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://twitter.com/duckvhuynh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </m.div>

        <m.div
          className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[500px] rounded-full md:rounded-2xl overflow-hidden border border-border backdrop-blur-sm bg-background/40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Replace with your profile image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-background/0"></div>
          <div className="h-full w-full bg-muted/20 flex items-center justify-center relative overflow-hidden">
            <span className="text-2xl text-muted-foreground">Professional Portrait</span>

            {/* Decorative bubbles with consistent positions */}
            <div className="absolute w-full h-full">
              {decorativeBubbles.map((bubble, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-primary/10"
                  style={{
                    top: bubble.position.top,
                    left: bubble.position.left,
                    width: bubble.size.width,
                    height: bubble.size.height,
                    // Apply animations only after client-side hydration is complete
                    ...(isMounted && {
                      animation: `float ${10 + i * 2}s infinite ease-in-out`,
                      animationDelay: `${i * 0.8}s`,
                    }),
                  }}
                />
              ))}
            </div>
          </div>
        </m.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Button
          variant="ghost"
          size="icon"
          className="backdrop-blur-sm bg-background/30 rounded-full"
          asChild
        >
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </div>

      {/* CSS for the float animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
