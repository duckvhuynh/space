import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Code, Monitor, Laptop } from 'lucide-react'

export const PortfolioHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">Full Stack Developer & UX Enthusiast</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I am <span className="text-primary">Duck V. Huynh</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md backdrop-blur-sm bg-background/30 p-4 rounded-lg">
            Building innovative digital experiences with a focus on performance, accessibility, and
            beautiful UI. Specializing in React, Next.js, and modern web architectures.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 backdrop-blur-sm" asChild>
              <a href="#projects">
                <Monitor className="h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 backdrop-blur-sm" asChild>
              <a href="#contact">
                <Laptop className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[500px] rounded-full md:rounded-2xl overflow-hidden border border-muted backdrop-blur-sm bg-background/40">
          {/* Replace with your profile image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background/0"></div>
          <div className="h-full w-full bg-muted/50 flex items-center justify-center">
            <span className="text-2xl text-muted-foreground">Professional Portrait</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Button variant="ghost" size="icon" className="backdrop-blur-sm bg-background/30" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  )
}
