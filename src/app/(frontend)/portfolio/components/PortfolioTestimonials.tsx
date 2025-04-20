'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export const PortfolioTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  const testimonials = [
    {
      quote:
        'Working with this developer was a revelation. Their ability to translate complex requirements into elegant, functional code exceeded our expectations.',
      author: 'Alex Johnson',
      position: 'Product Manager, TechVision',
      image: '/placeholder-avatar-1.jpg',
    },
    {
      quote:
        'Remarkable attention to detail and an exceptional eye for design. They transformed our concept into a beautiful, high-performing application that our users love.',
      author: 'Sarah Chen',
      position: 'Creative Director, DesignCraft',
      image: '/placeholder-avatar-2.jpg',
    },
    {
      quote:
        "Technical excellence combined with clear communication made our project a success. They're not just a developer but a thoughtful problem-solver.",
      author: 'Michael Rivera',
      position: 'CTO, InnovateX',
      image: '/placeholder-avatar-3.jpg',
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="min-h-screen bg-background text-foreground py-24 relative overflow-hidden"
    >
      <motion.div style={{ opacity, y }} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="block text-xs uppercase tracking-widest mb-4 text-foreground/50">
            Feedback
          </span>
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Client <span className="font-bold">Testimonials</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Background elements */}
            <motion.div
              animate={{ opacity: 0.03 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4"
            >
              <Quote className="w-64 h-64" />
            </motion.div>

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : activeIndex > index ? -100 : 100,
                    position: activeIndex === index ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-md p-10 md:p-16"
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <div className="md:w-1/3">
                      <div className="aspect-square w-24 md:w-32 rounded-full overflow-hidden bg-foreground/5 mb-6">
                        <div className="h-full w-full bg-background/60 flex items-center justify-center">
                          <span className="text-foreground/30 text-xs">Photo</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-medium">{testimonial.author}</h3>
                      <p className="text-foreground/50 text-sm">{testimonial.position}</p>
                    </div>

                    <div className="md:w-2/3">
                      <Quote className="h-8 w-8 text-foreground/20 mb-4" />
                      <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-foreground/20 rounded-full hover:border-foreground/40 transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        activeIndex === index
                          ? 'var(--foreground)'
                          : 'rgba(var(--foreground), 0.2)',
                      transform: activeIndex === index ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-foreground/20 rounded-full hover:border-foreground/40 transition"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-16 h-16 border border-foreground/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border border-foreground/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-foreground/5 rounded-full opacity-20"></div>
      </div>
    </section>
  )
}
