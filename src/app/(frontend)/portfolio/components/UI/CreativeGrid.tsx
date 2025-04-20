'use client'

import React, { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

interface GridItem {
  id: string | number
  content: ReactNode
  colSpan?: number
  rowSpan?: number
  className?: string
  delay?: number
}

interface CreativeGridProps {
  items: GridItem[]
  className?: string
  gap?: number
}

export const CreativeGrid: React.FC<CreativeGridProps> = ({ items, className = '', gap = 4 }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${className}`}
      style={{ gap: `${gap * 0.25}rem` }}
    >
      {items.map((item, index) => {
        // Create varied animations based on item index
        const y = useTransform(scrollYProgress, [0, 1], [50 * (index % 3), -30 * (index % 3)])

        const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.6])

        const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95])

        return (
          <motion.div
            key={item.id}
            style={{ opacity, scale, y }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: item.delay || index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              ${item.colSpan ? `md:col-span-${item.colSpan}` : ''}
              ${item.rowSpan ? `md:row-span-${item.rowSpan}` : ''}
              ${item.className || ''}
            `}
          >
            {item.content}
          </motion.div>
        )
      })}
    </div>
  )
}

export default CreativeGrid
