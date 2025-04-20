'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CustomCursorProps {
  color?: string
  size?: number
  ringSize?: number
  delay?: number
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  color = '#ffffff',
  size = 8,
  ringSize = 40,
  delay = 0.1,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check if cursor is over clickable element
      const target = e.target as HTMLElement
      const computedStyle = window.getComputedStyle(target)
      setIsPointer(computedStyle.cursor === 'pointer')
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Hide the default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Small dot cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          duration: 0.1,
          ease: 'linear',
        }}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />

      {/* Larger ring cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - ringSize / 2,
          y: mousePosition.y - ringSize / 2,
          opacity: isVisible ? 0.5 : 0,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          duration: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: color,
          borderWidth: '1px',
        }}
      />
    </>
  )
}
