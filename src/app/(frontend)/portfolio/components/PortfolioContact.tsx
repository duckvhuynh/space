'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  SendIcon,
  Loader2,
} from 'lucide-react'
// Fix motion import to use specific imports
import { motion as m } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

export const PortfolioContact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast.success('Message sent successfully!', {
        description: "I'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-base font-medium">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? I'm always open to
            new challenges and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <Card className="border border-border">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Collaboration" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="I'd like to discuss a potential project..."
                              rows={6}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <SendIcon className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <Card className="border border-border shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-6">
                  <m.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <MailIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <a
                        href="mailto:duck.huynh@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        duck.huynh@example.com
                      </a>
                    </div>
                  </m.div>

                  <m.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <PhoneIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <a
                        href="tel:+14155552671"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (415) 555-2671
                      </a>
                    </div>
                  </m.div>

                  <m.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPinIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">San Francisco Bay Area, California</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Available for remote work worldwide
                      </p>
                    </div>
                  </m.div>
                </CardContent>
              </Card>

              <div>
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <m.a
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    href="https://github.com/duckvhuynh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </m.a>
                  <m.a
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    href="https://linkedin.com/in/duckvhuynh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </m.a>
                  <m.a
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    href="https://twitter.com/duckvhuynh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </m.a>
                  <m.a
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    href="https://instagram.com/duckvhuynh.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </m.a>
                </div>
              </div>

              <Card className="border border-primary/20 bg-primary/5 shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <span className="inline-block p-1 rounded-full bg-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 2v8" />
                        <path d="m4.93 10.93 1.41 1.41" />
                        <path d="M2 18h2" />
                        <path d="M20 18h2" />
                        <path d="m19.07 10.93-1.41 1.41" />
                        <path d="M22 22H2" />
                        <path d="m8 22 4-10 4 10" />
                        <path d="M12 14v4" />
                      </svg>
                    </span>
                    Available for Freelance
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently accepting new projects and consulting opportunities. Let's discuss how
                    I can help bring your ideas to life.
                  </p>
                  <Button variant="default" size="sm" asChild>
                    <a href="mailto:duck.huynh@example.com?subject=Freelance%20Opportunity">
                      Discuss a Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
