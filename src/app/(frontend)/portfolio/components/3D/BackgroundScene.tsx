'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface BackgroundSceneProps {
  className?: string
  dotColor?: string
  lineColor?: string
  density?: number
}

export const BackgroundScene: React.FC<BackgroundSceneProps> = ({
  className = '',
  dotColor = 'currentColor',
  lineColor = 'currentColor',
  density = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.4])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions with DPI adjustment
    const setCanvasSize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      ctx.globalAlpha = 0.7
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create particles
    const particleCount = Math.min(window.innerWidth / density, 100)
    const particles: Array<{
      x: number
      y: number
      size: number
      speed: { x: number; y: number }
    }> = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: {
          x: (Math.random() - 0.5) * 0.7,
          y: (Math.random() - 0.5) * 0.7,
        },
      })
    }

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speed.x
        particle.y += particle.speed.y

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.fill()
      })

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = lineColor
            ctx.globalAlpha = 0.2 * (1 - distance / 120)
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [dotColor, lineColor, density])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`fixed inset-0 -z-10 ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}

export default BackgroundScene
