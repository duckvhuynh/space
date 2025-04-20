'use client'

import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface ProgressIndicatorProps {
  color?: string
  height?: number
  position?: 'top' | 'bottom'
  showPercentage?: boolean
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  color = '#ffffff',
  height = 2,
  position = 'top',
  showPercentage = false,
}) => {
  const { scrollYProgress } = useScroll()

  // Apply spring physics for smooth progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 z-50"
        style={{
          top: position === 'top' ? 0 : 'auto',
          bottom: position === 'bottom' ? 0 : 'auto',
          height,
          backgroundColor: color,
          transformOrigin: 'left',
          scaleX,
        }}
      />

      {showPercentage && (
        <motion.div
          className="fixed right-6 z-50 px-3 py-2 text-xs rounded-full bg-black/80 text-white font-mono"
          style={{
            top: position === 'top' ? '20px' : 'auto',
            bottom: position === 'bottom' ? '20px' : 'auto',
          }}
        >
          <motion.span>
            {scrollYProgress.get() ? Math.round(scrollYProgress.get() * 100) : 0}%
          </motion.span>
        </motion.div>
      )}
    </>
  )
}
