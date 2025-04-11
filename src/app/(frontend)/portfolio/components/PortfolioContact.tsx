'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { AtSignIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export function PortfolioContact() {
  return (
    <section id="contact" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <MailIcon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm group-hover:bg-primary/20 transition-colors">
                  <MailIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-primary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm group-hover:bg-primary/20 transition-colors">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm group-hover:bg-primary/20 transition-colors">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm group-hover:bg-primary/20 transition-colors">
                  <AtSignIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Social</p>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @yourusername
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground">
                  I'm currently open to freelance opportunities and full-time positions. If you have
                  a project that needs some creative work, I'd love to hear about it!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="shadow-sm bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    required
                    className="min-h-[150px] shadow-sm resize-none bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow"
                >
                  <SendIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
