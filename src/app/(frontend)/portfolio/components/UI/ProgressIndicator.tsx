'use client'

import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

interface ProgressIndicatorProps {
  color?: string
  height?: number
  position?: 'top' | 'bottom' | 'left' | 'right'
  showPercentage?: boolean
  className?: string
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  color = 'currentColor',
  height = 2,
  position = 'top',
  showPercentage = false,
  className = '',
}) => {
  const { scrollYProgress } = useScroll()

  // Apply spring physics for smooth progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // For vertical indicators
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform scroll percentage to readable text
  const percentage = useTransform(scrollYProgress, (value) => `${Math.round(value * 100)}%`)

  const isVertical = position === 'left' || position === 'right'

  const progressStyle = {
    top: position === 'top' ? 0 : 'auto',
    bottom: position === 'bottom' ? 0 : 'auto',
    left: position === 'left' ? 0 : 'auto',
    right: position === 'right' ? 0 : 'auto',
    width: isVertical ? height : 'auto',
    height: isVertical ? 'auto' : height,
    background: color,
    transformOrigin:
      position === 'right'
        ? 'bottom'
        : position === 'left'
          ? 'top'
          : position === 'bottom'
            ? 'left'
            : 'left',
    scaleX: isVertical ? 1 : scaleX,
    scaleY: isVertical ? scaleY : 1,
  }

  return (
    <>
      <motion.div
        className={`fixed z-50 ${className}`}
        style={
          isVertical
            ? { top: 0, bottom: 0, ...progressStyle }
            : { left: 0, right: 0, ...progressStyle }
        }
      />

      {showPercentage && (
        <motion.div
          className="fixed z-50 px-3 py-2 text-xs rounded bg-background/80 text-foreground font-mono"
          style={{
            top: position === 'top' ? '20px' : 'auto',
            bottom: position === 'bottom' ? '20px' : 'auto',
            left: position === 'left' ? '20px' : 'auto',
            right:
              position === 'right'
                ? '20px'
                : position === 'top' || position === 'bottom'
                  ? '20px'
                  : 'auto',
          }}
        >
          {percentage}
        </motion.div>
      )}
    </>
  )
}
