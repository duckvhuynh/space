'use client'

import React, { ReactNode, useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion'

interface ParallaxTextProps {
  children: ReactNode
  baseVelocity?: number
  direction?: 'left' | 'right'
  className?: string
  repeat?: number
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  baseVelocity = 3,
  direction = 'left',
  className = '',
  repeat = 4,
}) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useMotionValue(0)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  const directionFactor = direction === 'right' ? -1 : 1
  const containerRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor * baseVelocity * (delta / 1000)

    // Add scroll velocity influence to create a parallax effect
    const scrollVelocityFactor = smoothVelocity.get() * 0.2
    moveBy += directionFactor * scrollVelocityFactor

    baseX.set((baseX.get() + moveBy) % 100)
  })

  // Update scroll velocity
  useAnimationFrame(() => {
    const currentScrollY = scrollY.get()
    const previousScrollY = scrollY.getPrevious() || currentScrollY
    const scrollDelta = currentScrollY - previousScrollY

    // Calculate velocity based on scroll delta
    scrollVelocity.set(scrollDelta / 10)
  })

  // Create an array of repeated children
  const repeatedChildren = Array(repeat).fill(children)

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex whitespace-nowrap"
        style={{
          x: useTransform(baseX, (value) => `${-value}%`),
        }}
      >
        {repeatedChildren.map((child, i) => (
          <span key={i} className="mr-6 inline-block">
            {child}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default ParallaxText
