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

  const title = 'YOUR NAME'
  const role = 'Digital Designer & Developer'
  const letters = Array.from(title)

  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-neutral-100/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neutral-100/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center space-y-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto relative"
        >
          <div className="absolute inset-0 rounded-full border border-neutral-800/20 animate-pulse"></div>
          <Avatar className="w-full h-full border-2 border-neutral-800/10 shadow-2xl">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" className="grayscale" />
            <AvatarFallback className="text-4xl bg-neutral-100/5">YN</AvatarFallback>
          </Avatar>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter leading-none"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{
                  opacity: letter === ' ' ? 0 : 1,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-base uppercase tracking-[0.25em] text-neutral-400 font-light">
              {role}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center space-y-8"
        >
          <p className="max-w-md text-neutral-300 font-light">
            Creating minimal and elegant digital experiences that balance form and function.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex gap-8 pt-4"
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
                className="rounded-full hover:bg-neutral-100/10 transition-colors"
                strength={40}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDownIcon className="h-6 w-6 text-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
