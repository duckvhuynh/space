'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDownIcon, ArrowRightIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { MagneticButton } from './UI/MagneticButton'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Create a Three.js component for the Avatar instead of using HTML inside Canvas
function ThreeAvatar({ imageUrl }) {
  const texture = new THREE.TextureLoader().load(imageUrl || '/placeholder-avatar.jpg')

  return (
    <mesh>
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export function PortfolioHero() {
  const controls = useAnimation()
  const { scrollY } = useScroll()

  // Create scroll-based animations
  const avatarScale = useTransform(scrollY, [0, 300], [1, 0.8])
  const avatarOpacity = useTransform(scrollY, [0, 300], [1, 0.5])
  const titleY = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    // Staggered entrance animation
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
    }
    sequence()
  }, [controls])

  // Split text animation variants
  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const title = "Hi, I'm Your Name"
  const letters = Array.from(title)

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-16 pb-24 md:py-12 relative overflow-hidden px-4 md:px-0">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="flex-1 space-y-6 md:space-y-8 z-10 text-center md:text-left">
        <motion.div initial={{ opacity: 0 }} animate={controls} className="space-y-4">
          <Badge
            variant="outline"
            className="px-3 py-1 text-sm font-medium backdrop-blur bg-background/50 shadow-sm"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 2, times: [0, 0.4, 0.5, 0.6], delay: 1 }}
              className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"
            ></motion.span>
            Available for hire
          </Badge>

          <motion.h1
            style={{ y: titleY }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
          >
            <motion.span
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    color:
                      letter === "'"
                        ? 'var(--primary)'
                        : letter === 'N' || letter === 'Y'
                          ? 'var(--primary)'
                          : 'inherit',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium"
          >
            Full Stack Developer
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed"
        >
          I build{' '}
          <motion.span className="px-1 relative inline-block" whileHover={{ scale: 1.05 }}>
            <motion.span
              className="absolute inset-0 bg-primary/10 -z-10 rounded"
              layoutId="highlight"
            ></motion.span>
            exceptional
          </motion.span>{' '}
          and accessible digital experiences for the web, focusing on minimalism and usability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center md:justify-start"
        >
          <MagneticButton
            size="lg"
            className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow"
          >
            Contact Me
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            size="lg"
            variant="outline"
            className="w-full sm:w-auto backdrop-blur bg-background/50 shadow-sm hover:shadow-md transition-shadow"
          >
            View Resume
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center gap-4 pt-4 justify-center md:justify-start"
        >
          {[
            { icon: <GithubIcon className="h-5 w-5" />, label: 'GitHub' },
            { icon: <LinkedinIcon className="h-5 w-5" />, label: 'LinkedIn' },
            { icon: <TwitterIcon className="h-5 w-5" />, label: 'Twitter' },
          ].map((social, i) => (
            <MagneticButton
              key={social.label}
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-primary/10 transition-colors"
              strength={40}
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ scale: avatarScale, opacity: avatarOpacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-shrink-0 relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto mt-8 md:mt-0"
      >
        <div className="absolute inset-0 -z-10 bg-primary/20 rounded-full blur-3xl opacity-30"></div>

        <Avatar className="w-full h-full border-4 border-background shadow-2xl ring-2 ring-primary/20">
          <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
          <AvatarFallback className="text-4xl md:text-5xl bg-primary/10">YN</AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex md:hidden rounded-full shadow-md backdrop-blur bg-background/50"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDownIcon className="h-6 w-6" />
          </motion.div>
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  )
}
