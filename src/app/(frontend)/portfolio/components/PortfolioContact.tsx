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
} from 'lucide-react'

export const PortfolioContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? I'm always open to
            new challenges and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Project Collaboration" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="I'd like to discuss a potential project..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto gap-2">
                <SendIcon className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
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
                  </div>

                  <div className="flex items-start gap-4">
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
                  </div>

                  <div className="flex items-start gap-4">
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
                  </div>
                </CardContent>
              </Card>

              <div>
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/duckvhuynh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/duckvhuynh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/duckvhuynh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/duckvhuynh.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
