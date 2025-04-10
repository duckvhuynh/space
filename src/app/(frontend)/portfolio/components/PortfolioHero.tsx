import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Code, Monitor, Laptop } from 'lucide-react'

export const PortfolioHero: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">Full Stack Developer</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I am <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              <Monitor className="h-4 w-4" />
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Laptop className="h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[500px] rounded-full md:rounded-2xl overflow-hidden border border-muted">
          {/* Replace with your profile image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background/0"></div>
          <div className="h-full w-full bg-muted flex items-center justify-center">
            <span className="text-2xl text-muted-foreground">Your Photo</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Button variant="ghost" size="icon">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
