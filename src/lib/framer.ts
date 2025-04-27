'use client'

/**
 * This file centralizes framer-motion imports to avoid "export *" errors in client components
 * Next.js 14+ doesn't support "export *" statements in client boundaries
 */

// Export specific components and hooks from framer-motion
export { motion } from 'framer-motion'
export { useInView } from 'framer-motion'
export type { Variant, Variants } from 'framer-motion'
export { AnimatePresence } from 'framer-motion'
