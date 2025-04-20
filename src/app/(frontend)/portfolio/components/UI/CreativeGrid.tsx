'use client'

import React, { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface GridItem {
  id: string | number
  content: ReactNode
  colSpan?: number
  rowSpan?: number
  bgColor?: string
}

interface CreativeGridProps {
  items: GridItem[]
  className?: string
  columns?: number
  gap?: number
}

export const CreativeGrid: React.FC<CreativeGridProps> = ({
  items,
  className = '',
  columns = 12,
  gap = 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Create staggered animations for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-${columns} gap-${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: `${gap * 0.25}rem`,
      }}
    >
      {items.map((item, index) => {
        // Apply some interesting transforms based on scroll
        const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -20 : 20])

        const rotate = useTransform(
          scrollYProgress,
          [0, 1],
          [0, index % 3 === 0 ? 3 : index % 3 === 1 ? -3 : 0],
        )

        const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

        return (
          <motion.div
            key={item.id}
            className="relative overflow-hidden"
            style={{
              gridColumn: `span ${item.colSpan || 1} / span ${item.colSpan || 1}`,
              gridRow: `span ${item.rowSpan || 1} / span ${item.rowSpan || 1}`,
              backgroundColor: item.bgColor || 'transparent',
              y,
              rotate,
              scale,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={itemVariants}
          >
            {item.content}
          </motion.div>
        )
      })}
    </div>
  )
}

export default CreativeGrid
