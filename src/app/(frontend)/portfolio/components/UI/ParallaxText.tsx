'use client'

import React, { useRef, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'

interface ParallaxTextProps {
  children: React.ReactNode
  baseVelocity?: number
  className?: string
  direction?: 'left' | 'right'
}

export function ParallaxText({
  children,
  baseVelocity = 100,
  className = '',
  direction = 'left',
}: ParallaxTextProps) {
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

  const directionFactor = direction === 'left' ? -1 : 1

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor * baseVelocity * (delta / 1000)

    // Add scroll velocity if available
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor * velocityFactor.get() * 20
    }

    baseX.set(baseX.get() + moveBy)

    // Reset position when off screen to create infinite loop
    if (baseX.get() <= -100) {
      baseX.set(0)
    } else if (baseX.get() >= 0) {
      baseX.set(-100)
    }
  })

  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div className="flex whitespace-nowrap" style={{ x: baseX.get() + '%' }}>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block">{children}</span>
      </motion.div>
    </div>
  )
}
