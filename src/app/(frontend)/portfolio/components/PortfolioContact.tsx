'use client'

import React, { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { AtSignIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { MagneticButton } from './UI/MagneticButton'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

function MovingGradient() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    // Create gentle wave motion
    meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.05
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshBasicMaterial color="white" opacity={0.1} transparent={true} />
    </mesh>
  )
}

export function PortfolioContact() {
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-12 relative">
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.5} />
          <MovingGradient />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4 md:px-0"
      >
        <motion.div
          className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(var(--primary), 0)',
              '0 0 0 10px rgba(var(--primary), 0.1)',
              '0 0 0 20px rgba(var(--primary), 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <MailIcon className="h-6 w-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="shadow-lg border-none bg-background/60 backdrop-blur h-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  icon: <MailIcon className="h-5 w-5 text-primary" />,
                  title: 'Email',
                  content: 'hello@example.com',
                  link: 'mailto:hello@example.com',
                },
                {
                  icon: <PhoneIcon className="h-5 w-5 text-primary" />,
                  title: 'Phone',
                  content: '+1 (234) 567-890',
                  link: 'tel:+1234567890',
                },
                {
                  icon: <MapPinIcon className="h-5 w-5 text-primary" />,
                  title: 'Location',
                  content: 'San Francisco, CA',
                  link: null,
                },
                {
                  icon: <AtSignIcon className="h-5 w-5 text-primary" />,
                  title: 'Social',
                  content: '@yourusername',
                  link: 'https://twitter.com/yourusername',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="hover:text-primary transition-colors break-all"
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span>{item.content}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div className="pt-4" variants={itemVariants}>
                <p className="text-muted-foreground">
                  I'm currently open to freelance opportunities and full-time positions. If you have
                  a project that needs some creative work, I'd love to hear about it!
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          ref={formRef}
        >
          <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="shadow-sm bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="shadow-sm bg-background/50"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="shadow-sm bg-background/50"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    required
                    className="min-h-[120px] md:min-h-[150px] shadow-sm resize-none bg-background/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <MagneticButton
                    type="submit"
                    className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow"
                    strength={30}
                  >
                    <SendIcon className="mr-2 h-4 w-4" />
                    Send Message
                  </MagneticButton>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
