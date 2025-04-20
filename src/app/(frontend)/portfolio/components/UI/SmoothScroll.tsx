'use client'

import React, { useEffect, useRef, ReactNode } from 'react'
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'

interface SmoothScrollProps {
  children: ReactNode
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Content height state
  const [contentHeight, setContentHeight] = React.useState(0)

  useEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.getBoundingClientRect().height
        setContentHeight(height)

        // Apply the height to the body to enable scrolling
        document.body.style.height = `${height}px`
      }
    }

    // Update on mount and window resize
    updateContentHeight()
    window.addEventListener('resize', updateContentHeight)

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateContentHeight)
      document.body.style.height = ''
    }
  }, [])

  // Scroll progress
  const { scrollY } = useScroll()

  // Apply smooth scrolling with spring physics
  const transform = useTransform(scrollY, [0, contentHeight], [0, -contentHeight])

  const smoothTransform = useSpring(transform, {
    damping: 15,
    mass: 0.1,
    stiffness: 100,
  })

  return (
    <div ref={wrapperRef} className="fixed inset-0 overflow-hidden">
      <motion.div ref={contentRef} style={{ y: smoothTransform }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
