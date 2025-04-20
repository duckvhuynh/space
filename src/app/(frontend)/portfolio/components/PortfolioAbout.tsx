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
            With over 8 years in tech, I've evolved from a curious programmer to a passionate
            full-stack developer focused on creating impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden border border-muted order-2 lg:order-1">
            {/* Replace with your image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background/0"></div>
            <div className="h-full w-full bg-muted flex items-center justify-center">
              <span className="text-2xl text-muted-foreground">Professional Profile Photo</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-6">Who Am I?</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>
                  I'm a full-stack developer with 8+ years of experience creating scalable web
                  applications and digital products. My journey began with a passion for
                  problem-solving, which led me to explore software engineering as a way to build
                  solutions that impact people's lives.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>
                  I've mastered TypeScript, React, Node.js, and modern cloud architectures. I'm
                  particularly passionate about creating accessible, performant applications with
                  clean, maintainable code. I believe great software should be both technically
                  excellent and delightful to use.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Book className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing
                  to open-source, hiking in nature, or experimenting with photography. I'm also an
                  avid reader of sci-fi and technical books, always looking to expand my horizons.
                </p>
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
                    <strong className="block text-foreground">MSc in Computer Science</strong>
                    Stanford University, 2014-2016
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <strong className="block text-foreground">BSc in Software Engineering</strong>
                    University of California, 2010-2014
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
                    <strong className="block text-foreground">Senior Full Stack Engineer</strong>
                    TechVision Global, 2020-Present
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <strong className="block text-foreground">Frontend Developer</strong>
                    InnovateSoft Solutions, 2016-2020
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <a href="/duck-huynh-resume.pdf" target="_blank" rel="noopener noreferrer">
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
