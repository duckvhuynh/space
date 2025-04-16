'use client'

import React, { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { AtSignIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon, ArrowRightIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { MagneticButton } from './UI/MagneticButton'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

function MovingGradient() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.03
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshBasicMaterial color="white" opacity={0.05} transparent={true} />
    </mesh>
  )
}

export function PortfolioContact() {
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: false, amount: 0.3 })

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } },
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.3} />
          <MovingGradient />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-left mb-24 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6">Contact</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
          Let's Start
          <br />a Conversation
        </h2>
        <p className="text-neutral-300 font-light leading-relaxed">
          I'm open to new opportunities, collaborations, and conversations about design and
          development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="space-y-16">
            <div>
              <p className="text-sm font-light uppercase tracking-wider text-neutral-400 mb-6">
                Contact Details
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <MailIcon className="h-5 w-5" />,
                    label: 'Email',
                    content: 'hello@example.com',
                    link: 'mailto:hello@example.com',
                  },
                  {
                    icon: <PhoneIcon className="h-5 w-5" />,
                    label: 'Phone',
                    content: '+1 (234) 567-890',
                    link: 'tel:+1234567890',
                  },
                  {
                    icon: <MapPinIcon className="h-5 w-5" />,
                    label: 'Location',
                    content: 'San Francisco, CA',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-full bg-neutral-100/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="hover:text-neutral-100 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <span>{item.content}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-light uppercase tracking-wider text-neutral-400 mb-6">
                Follow Me
              </p>

              <div className="flex gap-6">
                {[
                  { label: 'Dribbble', url: '#' },
                  { label: 'Instagram', url: '#' },
                  { label: 'LinkedIn', url: '#' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    className="text-neutral-400 hover:text-white transition-colors"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          ref={formRef}
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                className="relative"
                variants={inputVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.1 }}
              >
                <Input
                  id="name"
                  placeholder=" "
                  className="border-0 border-b border-neutral-800/30 rounded-none px-0 h-12 bg-transparent focus:border-neutral-400 transition-colors focus-visible:ring-0 text-neutral-100 placeholder:text-transparent"
                />
                <Label
                  htmlFor="name"
                  className="absolute left-0 -top-6 text-sm font-light text-neutral-400 transition-all duration-200"
                >
                  Name
                </Label>
              </motion.div>

              <motion.div
                className="relative"
                variants={inputVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  className="border-0 border-b border-neutral-800/30 rounded-none px-0 h-12 bg-transparent focus:border-neutral-400 transition-colors focus-visible:ring-0 text-neutral-100 placeholder:text-transparent"
                />
                <Label
                  htmlFor="email"
                  className="absolute left-0 -top-6 text-sm font-light text-neutral-400 transition-all duration-200"
                >
                  Email
                </Label>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
            >
              <Input
                id="subject"
                placeholder=" "
                className="border-0 border-b border-neutral-800/30 rounded-none px-0 h-12 bg-transparent focus:border-neutral-400 transition-colors focus-visible:ring-0 text-neutral-100 placeholder:text-transparent"
              />
              <Label
                htmlFor="subject"
                className="absolute left-0 -top-6 text-sm font-light text-neutral-400 transition-all duration-200"
              >
                Subject
              </Label>
            </motion.div>

            <motion.div
              className="relative"
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
            >
              <Textarea
                id="message"
                placeholder=" "
                className="min-h-[120px] border-0 border-b border-neutral-800/30 rounded-none px-0 py-2 bg-transparent focus:border-neutral-400 transition-colors focus-visible:ring-0 text-neutral-100 placeholder:text-transparent resize-none"
              />
              <Label
                htmlFor="message"
                className="absolute left-0 -top-6 text-sm font-light text-neutral-400 transition-all duration-200"
              >
                Message
              </Label>
            </motion.div>

            <motion.div
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <Button
                type="submit"
                className="group flex items-center gap-2 hover:gap-4 transition-all duration-300 rounded-none px-0 text-neutral-100 font-light"
                variant="link"
              >
                Send Message <ArrowRightIcon className="h-4 w-4 transition-all duration-300" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
