'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface BackgroundSceneProps {
  className?: string
}

export const BackgroundScene: React.FC<BackgroundSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // For parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }> = []

    const createParticles = () => {
      const totalParticles = Math.min(window.innerWidth / 15, 100)

      for (let i = 0; i < totalParticles; i++) {
        const radius = Math.random() * 1.5 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const color = `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`

        const angle = Math.random() * Math.PI * 2
        const velocity = {
          x: Math.cos(angle) * 0.2,
          y: Math.sin(angle) * 0.2,
        }

        particles.push({ x, y, radius, color, velocity })
      }
    }

    createParticles()

    // Animation
    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Boundary checking
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 1 - distance / 100
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.05})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className={`fixed inset-0 -z-10 ${className || ''}`}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}

export default BackgroundScene
