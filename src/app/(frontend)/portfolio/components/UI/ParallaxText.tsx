'use client'

import React, { ReactNode, useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ParallaxTextProps {
  children: ReactNode
  baseVelocity?: number
  direction?: 'left' | 'right'
  className?: string
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  baseVelocity = 3,
  direction = 'left',
  className = '',
}) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const containerRef = useRef<HTMLDivElement>(null)

  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`)

  const directionFactor = direction === 'right' ? -1 : 1

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor * baseVelocity * (delta / 1000)

    // Add some movement based on scroll velocity
    moveBy += directionFactor * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div
      className={`relative flex overflow-hidden whitespace-nowrap ${className}`}
      ref={containerRef}
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
      </motion.div>
    </div>
  )
}

export default ParallaxText
