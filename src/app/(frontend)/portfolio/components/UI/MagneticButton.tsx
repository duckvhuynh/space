'use client'

import React, { useState, useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
  as?: 'button' | 'a' | 'div'
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 40,
  onClick,
  href,
  as = 'button',
}) => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth animation
  const springConfig = { damping: 20, stiffness: 300 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)

  // Transform values for the button and its children
  const buttonTranslateX = useTransform(xSpring, (x) => x / 2)
  const buttonTranslateY = useTransform(ySpring, (y) => y / 2)

  const contentTranslateX = useTransform(xSpring, (x) => x / 4)
  const contentTranslateY = useTransform(ySpring, (y) => y / 4)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return

    const bounds = buttonRef.current.getBoundingClientRect()
    const centerX = bounds.left + bounds.width / 2
    const centerY = bounds.top + bounds.height / 2

    const x = e.clientX - centerX
    const y = e.clientY - centerY

    // Scale the effect by the strength prop
    mouseX.set(x / strength)
    mouseY.set(y / strength)
  }

  const resetPosition = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  // Render different elements based on the 'as' prop
  const renderElement = () => {
    const sharedProps = {
      ref: buttonRef,
      className: `relative inline-block ${className}`,
      onMouseMove: handleMouseMove,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: resetPosition,
      onClick,
      style: {
        x: buttonTranslateX,
        y: buttonTranslateY,
      },
    }

    const content = (
      <motion.div
        style={{
          x: contentTranslateX,
          y: contentTranslateY,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    )

    if (as === 'a' && href) {
      return (
        <motion.a href={href} {...sharedProps}>
          {content}
        </motion.a>
      )
    } else if (as === 'button') {
      return (
        <motion.button type="button" {...sharedProps}>
          {content}
        </motion.button>
      )
    } else {
      return <motion.div {...sharedProps}>{content}</motion.div>
    }
  }

  return renderElement()
}

export default MagneticButton
