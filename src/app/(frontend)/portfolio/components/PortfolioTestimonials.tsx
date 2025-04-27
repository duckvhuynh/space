'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Quote, Star } from 'lucide-react'
// Fix motion import to use specific imports
import { motion as m } from 'framer-motion'
import { TabsContent, TabsList, TabsTrigger, Tabs } from '@/components/ui/tabs'

interface Testimonial {
  content: string
  author: string
  position: string
  company: string
  avatar?: string
  category: 'client' | 'colleague' | 'partner'
  rating: number
}

export const PortfolioTestimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Example testimonials data - replace with your actual testimonials
  const testimonials: Testimonial[] = [
    {
      content:
        "Duck's technical expertise and problem-solving abilities are exceptional. He quickly grasped our complex requirements and delivered a solution that exceeded our expectations. His attention to performance optimization resulted in a 40% increase in our application speed.",
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechSolutions Inc.',
      avatar: '/testimonials/sarah-johnson.jpg',
      category: 'client',
      rating: 5,
    },
    {
      content:
        "Working with Duck transformed our project. His deep knowledge of React and state management solved critical UI challenges we had been struggling with for months. He's not just a developer; he's a technical partner who genuinely cares about delivering value.",
      author: 'Michael Chen',
      position: 'Product Director',
      company: 'InnovateSoft',
      avatar: '/testimonials/michael-chen.jpg',
      category: 'client',
      rating: 5,
    },
    {
      content:
        "Duck stands out for his technical excellence and communication skills. He proactively identified potential issues in our architecture and proposed elegant solutions. Our team's productivity improved significantly with the development patterns he introduced.",
      author: 'Alex Rodriguez',
      position: 'Engineering Lead',
      company: 'WebFusion',
      avatar: '/testimonials/alex-rodriguez.jpg',
      category: 'colleague',
      rating: 5,
    },
    {
      content:
        "I've worked with many developers, but Duck's combination of technical skill and business understanding is rare. He delivered our e-commerce platform with impeccable code quality while suggesting features that increased our conversion rate by 28%.",
      author: 'Emily Taylor',
      position: 'Founder & CEO',
      company: 'StartupVision',
      avatar: '/testimonials/emily-taylor.jpg',
      category: 'client',
      rating: 4,
    },
    {
      content:
        "Duck's expertise in both frontend and backend technologies allowed us to consolidate our development team while increasing output. His work on our API architecture and React component system has become the foundation for all our new projects.",
      author: 'David Wilson',
      position: 'VP of Engineering',
      company: 'CloudScale Systems',
      avatar: '/testimonials/david-wilson.jpg',
      category: 'partner',
      rating: 5,
    },
    {
      content:
        "We hired Duck to revamp our legacy application's performance issues. Not only did he reduce load times by 65%, but he also implemented a comprehensive testing strategy that has virtually eliminated production bugs. A true professional.",
      author: 'Jennifer Patel',
      position: 'Technical Director',
      company: 'DataViz Analytics',
      avatar: '/testimonials/jennifer-patel.jpg',
      category: 'client',
      rating: 5,
    },
  ]

  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory)

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60"></div>

      <div className="container relative z-10">
        <m.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-base font-medium">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-muted-foreground max-w-2xl">
            Don't just take my word for it - here's what clients and colleagues have to say about
            working with me.
          </p>
        </m.div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="client">Clients</TabsTrigger>
            <TabsTrigger value="colleague">Colleagues</TabsTrigger>
            <TabsTrigger value="partner">Partners</TabsTrigger>
          </TabsList>
        </Tabs>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <m.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all relative overflow-hidden group">
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tr from-primary/5 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-br from-primary/5 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <CardContent className="p-6 flex flex-col h-full relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-primary">
                          <Quote className="h-8 w-8 opacity-50" />
                        </div>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 italic flex-grow line-clamp-6 group-hover:line-clamp-none transition-all">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.author
                              .split(' ')
                              .map((name) => name[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-6">
            <CarouselPrevious className="relative static hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="relative static hover:bg-primary hover:text-white transition-colors" />
          </div>
        </Carousel>

        <div className="mt-16 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 px-4 py-2 text-base transition-colors">
              <span className="font-semibold">100% Satisfaction Rate</span> &nbsp;•&nbsp; 25+ Happy
              Clients
            </Badge>
          </m.div>
        </div>
      </div>
    </section>
  )
}
