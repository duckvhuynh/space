'use client'

import React, { useLayoutEffect, useRef, ReactNode, useState } from 'react'
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'

interface SmoothScrollProps {
  children: ReactNode
}

// Simple debounce function to limit resize calculations
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Content height state
  const [contentHeight, setContentHeight] = useState(0)

  useLayoutEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.getBoundingClientRect().height
        setContentHeight(height)

        // Apply the height to the body to enable scrolling
        document.body.style.height = `${height}px`
      }
    }

    // Initial update
    updateContentHeight()

    // Debounced resize handler for better performance
    const debouncedUpdateHeight = debounce(updateContentHeight, 200)
    window.addEventListener('resize', debouncedUpdateHeight)

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedUpdateHeight)
      document.body.style.height = ''
    }
  }, [])

  // Scroll progress with improved configuration
  const { scrollY } = useScroll({
    // More efficient update strategy
    layoutEffect: true,
  })

  // Apply smooth scrolling with optimized spring physics
  const transform = useTransform(scrollY, [0, contentHeight], [0, -contentHeight])

  const smoothTransform = useSpring(transform, {
    // Optimized spring configuration for smoother performance
    damping: 25,
    mass: 0.5,
    stiffness: 120,
    // Reduce unnecessary precision for better performance
    restDelta: 0.01,
    // Limit update frequency
    restSpeed: 0.01,
  })

  return (
    <div ref={wrapperRef} className="fixed inset-0 overflow-hidden">
      <motion.div
        ref={contentRef}
        style={{
          y: smoothTransform,
          // Add GPU acceleration
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}
