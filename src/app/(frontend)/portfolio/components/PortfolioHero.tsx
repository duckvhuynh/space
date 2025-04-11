'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDownIcon, ArrowRightIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'

export function PortfolioHero() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center gap-16 py-12">
      <div className="flex-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Badge
            variant="outline"
            className="px-3 py-1 text-sm font-medium backdrop-blur bg-background/50 shadow-sm"
          >
            Available for hire
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed"
        >
          I build exceptional and accessible digital experiences for the web, focusing on minimalism
          and usability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 pt-4"
        >
          <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            Contact Me
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur bg-background/50 shadow-sm hover:shadow-md transition-shadow"
          >
            View Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 pt-4"
        >
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-primary/10 transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-primary/10 transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-primary/10 transition-colors"
          >
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
          <Avatar className="h-72 w-72 border-4 border-background shadow-2xl ring-2 ring-primary/20">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback className="text-5xl bg-primary/10">YN</AvatarFallback>
          </Avatar>
        </div>
      </motion.div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex animate-bounce rounded-full shadow-md backdrop-blur bg-background/50"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ArrowDownIcon className="h-6 w-6" />
        <span className="sr-only">Scroll down</span>
      </Button>
    </section>
  )
}
