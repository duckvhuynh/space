'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/providers/Theme'

interface CustomCursorProps {
  lightModeColor?: string
  darkModeColor?: string
  size?: number
  ringSize?: number
  magnetic?: boolean
  blend?: boolean
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  lightModeColor = '#000000',
  darkModeColor = '#ffffff',
  size = 8,
  ringSize = 36,
  magnetic = true,
  blend = true,
}) => {
  const { theme } = useTheme()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClickable, setIsClickable] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)
  const [magneticElement, setMagneticElement] = useState<Element | null>(null)
  const [magneticElementRect, setMagneticElementRect] = useState<DOMRect | null>(null)
  const [elementCenter, setElementCenter] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  // Determine current color based on theme
  const cursorColor = theme === 'dark' ? darkModeColor : lightModeColor

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true)

      // Handle normal cursor positioning
      if (!magneticElement) {
        setPosition({ x: e.clientX, y: e.clientY })
        return
      }

      // Handle magnetic effect
      if (magneticElement && magneticElementRect) {
        const distanceFromCenter = {
          x: e.clientX - elementCenter.x,
          y: e.clientY - elementCenter.y,
        }

        // Calculate magnetic pull based on distance from center
        const magneticStrength = 0.4
        const pull = {
          x: distanceFromCenter.x * magneticStrength,
          y: distanceFromCenter.y * magneticStrength,
        }

        // Set position with magnetic pull
        setPosition({
          x: elementCenter.x + pull.x,
          y: elementCenter.y + pull.y,
        })
      }
    }

    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)

    // Handle cursor over interactive elements
    const handleElementDetection = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Get computed style
      const computedStyle = window.getComputedStyle(target)

      // Check if element is clickable
      const isTargetClickable =
        computedStyle.cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.getAttribute('role') === 'button'

      setIsPointer(computedStyle.cursor === 'pointer')
      setIsClickable(isTargetClickable)

      // Check if element has magnetic property
      const hasMagnetic = target.getAttribute('data-magnetic') === 'true'

      if (isTargetClickable && hasMagnetic && magnetic) {
        setMagneticElement(target)
        const rect = target.getBoundingClientRect()
        setMagneticElementRect(rect)
        setElementCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      } else {
        setMagneticElement(null)
        setMagneticElementRect(null)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousemove', handleElementDetection)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', handleElementDetection)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasMoved, magneticElement, magneticElementRect, elementCenter, magnetic])

  // Handle mouse down/up events
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  if (!hasMoved) return null

  return (
    <>
      {/* Hide the default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      <AnimatePresence>
        {visible && (
          <>
            {/* Main dot cursor */}
            <motion.div
              ref={cursorRef}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: isPressed ? 0.6 : 1,
                x: position.x - size / 2,
                y: position.y - size / 2,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                x: { duration: 0.15, ease: 'circOut' },
                y: { duration: 0.15, ease: 'circOut' },
                scale: { duration: 0.15, ease: 'circOut' },
                opacity: { duration: 0.15 },
              }}
              className="fixed top-0 left-0 rounded-full pointer-events-none z-[100]"
              style={{
                width: size,
                height: size,
                backgroundColor: cursorColor,
                mixBlendMode: blend ? (theme === 'dark' ? 'difference' : 'darken') : 'normal',
                boxShadow: theme === 'light' ? '0 0 5px rgba(0,0,0,0.3)' : 'none',
              }}
            />

            {/* Outer ring cursor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 0.5,
                scale: isPressed ? 0.8 : isClickable ? 1.2 : 1,
                x: position.x - ringSize / 2,
                y: position.y - ringSize / 2,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                x: { duration: 0.25, ease: 'circOut' },
                y: { duration: 0.25, ease: 'circOut' },
                scale: { duration: 0.3, ease: 'circOut' },
                opacity: { duration: 0.15 },
              }}
              className="fixed top-0 left-0 rounded-full border pointer-events-none z-[99]"
              style={{
                width: ringSize,
                height: ringSize,
                borderColor: cursorColor,
                borderWidth: '1px',
                mixBlendMode: blend ? (theme === 'dark' ? 'difference' : 'darken') : 'normal',
                boxShadow: theme === 'light' ? '0 0 5px rgba(0,0,0,0.15)' : 'none',
              }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
