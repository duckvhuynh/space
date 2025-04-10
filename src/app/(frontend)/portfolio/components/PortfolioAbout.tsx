import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, GraduationCap, Briefcase, Code, Coffee, Book } from 'lucide-react'
import Image from 'next/image'

export const PortfolioAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Background</h2>
          <p className="text-muted-foreground max-w-2xl">
            Learn more about my journey, experience, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden border border-muted order-2 lg:order-1">
            {/* Replace with your image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background/0"></div>
            <div className="h-full w-full bg-muted flex items-center justify-center">
              <span className="text-2xl text-muted-foreground">Your Photo</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-6">Who Am I?</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>
                  I am a passionate full-stack developer with X years of experience building web
                  applications. My journey in tech began when I [your story here].
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>
                  I specialize in building responsive, accessible, and performant web applications
                  using modern technologies like React, Next.js, and Node.js.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Book className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>When I am not coding, you can find me [your interests/hobbies].</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">
                    <strong className="block text-foreground">Computer Science Degree</strong>
                    University Name, 2015-2019
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <strong className="block text-foreground">Web Development Bootcamp</strong>
                    Program Name, 2020
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Experience
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">
                    <strong className="block text-foreground">Senior Developer</strong>
                    Company Name, 2021-Present
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <strong className="block text-foreground">Frontend Developer</strong>
                    Company Name, 2019-2021
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <a href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
