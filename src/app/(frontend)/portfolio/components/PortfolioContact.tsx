'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MailIcon, GithubIcon, LinkedinIcon, ArrowRightIcon, SendIcon } from 'lucide-react'

export const PortfolioContact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    focus: null as string | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFocus = (field: string) => {
    setFormState((prev) => ({ ...prev, focus: field }))
  }

  const handleBlur = () => {
    setFormState((prev) => ({ ...prev, focus: null }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState({ name: '', email: '', message: '', focus: null })
      alert('Form submitted! (This is just a simulation)')
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-background text-foreground py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-foreground"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full border border-foreground"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="block text-xs uppercase tracking-widest mb-4 text-foreground/50">
            Connect
          </span>
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Let's <span className="font-bold">Talk</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <motion.div
                  initial={false}
                  animate={{
                    height: formState.focus === 'name' || formState.name ? '0%' : '100%',
                    opacity: formState.focus === 'name' || formState.name ? 0 : 0.1,
                  }}
                  className="absolute inset-0 bg-foreground pointer-events-none"
                ></motion.div>

                <label className="block text-xs uppercase tracking-wider text-foreground/50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div className="relative">
                <motion.div
                  initial={false}
                  animate={{
                    height: formState.focus === 'email' || formState.email ? '0%' : '100%',
                    opacity: formState.focus === 'email' || formState.email ? 0 : 0.1,
                  }}
                  className="absolute inset-0 bg-foreground pointer-events-none"
                ></motion.div>

                <label className="block text-xs uppercase tracking-wider text-foreground/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div className="relative">
                <motion.div
                  initial={false}
                  animate={{
                    height: formState.focus === 'message' || formState.message ? '0%' : '100%',
                    opacity: formState.focus === 'message' || formState.message ? 0 : 0.1,
                  }}
                  className="absolute inset-0 bg-foreground pointer-events-none"
                ></motion.div>

                <label className="block text-xs uppercase tracking-wider text-foreground/50 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-8 py-3 bg-transparent overflow-hidden group"
              >
                <div className="absolute inset-0 w-3 bg-foreground group-hover:w-full transition-all duration-300 ease-out"></div>
                <div className="relative flex items-center gap-2">
                  <span className="text-foreground group-hover:text-background transition-colors duration-300 ease-out uppercase text-sm tracking-wider">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {isSubmitting ? (
                    <SendIcon className="h-4 w-4 text-foreground group-hover:text-background transition-colors duration-300 ease-out" />
                  ) : (
                    <ArrowRightIcon className="h-4 w-4 text-foreground group-hover:text-background transition-colors duration-300 ease-out" />
                  )}
                </div>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light mb-6">Connect Directly</h3>

                <div className="space-y-6">
                  <motion.a
                    href="mailto:your-email@example.com"
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center mr-4 group-hover:border-foreground/40 transition-colors">
                      <MailIcon className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <span className="block text-xs text-foreground/50 uppercase tracking-wider">
                        Email
                      </span>
                      <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                        your-email@example.com
                      </span>
                    </div>
                  </motion.a>

                  <div className="w-full h-px bg-foreground/10"></div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6">Social Profiles</h3>

                <div className="space-y-6">
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center mr-4 group-hover:border-foreground/40 transition-colors">
                      <GithubIcon className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <span className="block text-xs text-foreground/50 uppercase tracking-wider">
                        Github
                      </span>
                      <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                        github.com/yourusername
                      </span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center mr-4 group-hover:border-foreground/40 transition-colors">
                      <LinkedinIcon className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <span className="block text-xs text-foreground/50 uppercase tracking-wider">
                        LinkedIn
                      </span>
                      <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                        linkedin.com/in/yourusername
                      </span>
                    </div>
                  </motion.a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-8"
              >
                <span className="text-foreground/40 italic text-sm">
                  "The details are not the details. They make the design." — Charles Eames
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
