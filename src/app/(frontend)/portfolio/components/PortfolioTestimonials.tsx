'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon, MessageSquareIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    content:
      'Working with this developer was a game-changer for our company. They delivered a flawless website that exceeded our expectations in both functionality and design.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: '/placeholder-avatar-1.jpg',
  },
  {
    id: 2,
    content:
      'Incredibly skilled and professional. They took our vague idea and transformed it into a beautiful, functional application that our users love. Would hire again in a heartbeat.',
    author: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    avatar: '/placeholder-avatar-2.jpg',
  },
  {
    id: 3,
    content:
      "Not only is their code clean and efficient, but they also have an eye for design that sets them apart. They're truly a full-stack developer in every sense of the word.",
    author: 'Emily Rodriguez',
    role: 'CTO, Digital Solutions',
    avatar: '/placeholder-avatar-3.jpg',
  },
  {
    id: 4,
    content:
      'They exceeded our expectations at every turn. Their attention to detail and commitment to quality resulted in a product that has significantly increased our conversion rates.',
    author: 'David Kim',
    role: 'Marketing Director, GrowthHackers',
    avatar: '/placeholder-avatar-4.jpg',
  },
]

export function PortfolioTestimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  // Add a state to prevent rapid clicking
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrevious = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection(-1)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handleNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection(1)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handleDotClick = (index) => {
    if (isAnimating || index === current) return

    setIsAnimating(true)
    setDirection(index > current ? 1 : -1)
    setCurrent(index)

    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <section id="testimonials" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <MessageSquareIcon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-muted-foreground">What people say about working with me.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative max-w-4xl mx-auto px-8">
          {/* Fixed height container to prevent layout shift */}
          <div className="overflow-hidden relative h-[320px] md:h-[280px]">
            {/* Position absolute to avoid layout shift */}
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={testimonials[current].id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smoother motion
                  opacity: { duration: 0.3 },
                }}
                className="absolute w-full top-0 left-0"
              >
                <Card className="shadow-xl border-none bg-background/60 backdrop-blur max-w-3xl mx-auto">
                  <CardContent className="p-8 md:p-12 relative">
                    <QuoteIcon className="absolute text-primary/10 h-24 w-24 -top-6 -left-6 transform -rotate-12" />
                    <div className="relative z-10">
                      <p className="text-lg md:text-xl mb-8 leading-relaxed italic text-center">
                        "{testimonials[current].content}"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/10 shadow-md">
                          <AvatarImage
                            src={testimonials[current].avatar}
                            alt={testimonials[current].author}
                          />
                          <AvatarFallback>
                            {testimonials[current].author
                              .split(' ')
                              .map((name) => name[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                          <p className="font-medium">{testimonials[current].author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[current].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={isAnimating}
              className={`shadow-sm hover:shadow-md rounded-full transition-shadow bg-background/50 ${isAnimating ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              <ChevronLeftIcon className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  disabled={isAnimating}
                  className={`w-2 h-2 p-0 rounded-full transition-colors ${
                    index === current ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/30'
                  } ${isAnimating ? 'cursor-not-allowed' : ''}`}
                  onClick={() => handleDotClick(index)}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={isAnimating}
              className={`shadow-sm hover:shadow-md rounded-full transition-shadow bg-background/50 ${isAnimating ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              <ChevronRightIcon className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
