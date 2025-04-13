'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GridItemProps {
  children: React.ReactNode
  className?: string
  span?: number
  colStart?: number
  rowStart?: number
  delay?: number
}

export function GridItem({
  children,
  className = '',
  span = 1,
  colStart,
  rowStart,
  delay = 0,
}: GridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-50px' }}
      className={`${className}`}
      style={{
        gridColumn: colStart ? `${colStart} / span ${span}` : `span ${span}`,
        gridRow: rowStart ? `${rowStart}` : 'auto',
      }}
    >
      {children}
    </motion.div>
  )
}

interface CreativeGridProps {
  children: React.ReactNode
  className?: string
  columns?: number
}

export function CreativeGrid({ children, className = '', columns = 12 }: CreativeGridProps) {
  return (
    <div
      className={`grid gap-6 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  )
}
