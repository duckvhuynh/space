import React from 'react'
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
import { Quote } from 'lucide-react'

interface Testimonial {
  content: string
  author: string
  position: string
  company: string
  avatar?: string
}

export const PortfolioTestimonials: React.FC = () => {
  // Example testimonials data - replace with your actual testimonials
  const testimonials: Testimonial[] = [
    {
      content:
        "Duck's technical expertise and problem-solving abilities are exceptional. He quickly grasped our complex requirements and delivered a solution that exceeded our expectations. His attention to performance optimization resulted in a 40% increase in our application speed.",
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechSolutions Inc.',
      avatar: '/testimonials/sarah-johnson.jpg',
    },
    {
      content:
        "Working with Duck transformed our project. His deep knowledge of React and state management solved critical UI challenges we had been struggling with for months. He's not just a developer; he's a technical partner who genuinely cares about delivering value.",
      author: 'Michael Chen',
      position: 'Product Director',
      company: 'InnovateSoft',
      avatar: '/testimonials/michael-chen.jpg',
    },
    {
      content:
        "Duck stands out for his technical excellence and communication skills. He proactively identified potential issues in our architecture and proposed elegant solutions. Our team's productivity improved significantly with the development patterns he introduced.",
      author: 'Alex Rodriguez',
      position: 'Engineering Lead',
      company: 'WebFusion',
      avatar: '/testimonials/alex-rodriguez.jpg',
    },
    {
      content:
        "I've worked with many developers, but Duck's combination of technical skill and business understanding is rare. He delivered our e-commerce platform with impeccable code quality while suggesting features that increased our conversion rate by 28%.",
      author: 'Emily Taylor',
      position: 'Founder & CEO',
      company: 'StartupVision',
      avatar: '/testimonials/emily-taylor.jpg',
    },
    {
      content:
        "Duck's expertise in both frontend and backend technologies allowed us to consolidate our development team while increasing output. His work on our API architecture and React component system has become the foundation for all our new projects.",
      author: 'David Wilson',
      position: 'VP of Engineering',
      company: 'CloudScale Systems',
      avatar: '/testimonials/david-wilson.jpg',
    },
    {
      content:
        "We hired Duck to revamp our legacy application's performance issues. Not only did he reduce load times by 65%, but he also implemented a comprehensive testing strategy that has virtually eliminated production bugs. A true professional.",
      author: 'Jennifer Patel',
      position: 'Technical Director',
      company: 'DataViz Analytics',
      avatar: '/testimonials/jennifer-patel.jpg',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-muted-foreground max-w-2xl">
            Don't just take my word for it - here's what clients and colleagues have to say about
            working with me.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Card className="h-full border border-primary/10 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 text-primary">
                        <Quote className="h-8 w-8 opacity-50" />
                      </div>
                      <p className="text-muted-foreground mb-6 italic flex-grow">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
