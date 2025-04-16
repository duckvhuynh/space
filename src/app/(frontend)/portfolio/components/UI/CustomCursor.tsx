'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the element or its parents have cursor-pointer class or are clickable elements
      if (
        target.closest('a, button, [role="button"], .cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Only show the custom cursor on desktop
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-neutral-200 z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          mass: 0.2,
          stiffness: 100,
          damping: 20,
          scale: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-neutral-400/30 z-50 pointer-events-none"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isHovering ? 0.8 : 0.4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          mass: 0.5,
          stiffness: 70,
          damping: 20,
          scale: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
      />
    </>
  )
}
