'use client'

import React, { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { Button, ButtonProps } from '@/components/ui/button'

type MagneticButtonProps = ButtonProps & {
  strength?: number
  damping?: number
  className?: string
  children: React.ReactNode
  as?: string
}

export function MagneticButton({
  strength = 25,
  damping = 10,
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [active, setActive] = useState(false)

  // Motion values for x and y
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Add spring physics
  const springConfig = { damping, stiffness: 150 }
  const xMotion = useSpring(mousePosition.x, springConfig)
  const yMotion = useSpring(mousePosition.y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const x = (e.clientX - centerX) / strength
    const y = (e.clientY - centerY) / strength

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setActive(false)
  }

  const handleMouseEnter = () => {
    setActive(true)
  }

  // Touch event handlers for mobile support
  const handleTouchStart = () => {
    setActive(true)
  }

  const handleTouchEnd = () => {
    setMousePosition({ x: 0, y: 0 })
    setActive(false)
  }

  return (
    <motion.div
      style={{
        display: 'inline-block',
        x: xMotion,
        y: yMotion,
      }}
    >
      <Button
        ref={buttonRef}
        className={`transition-shadow ${active ? 'shadow-xl' : 'shadow-md'} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  )
}
