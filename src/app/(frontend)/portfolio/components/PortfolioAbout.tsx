'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BriefcaseIcon, GraduationCapIcon, UserIcon, HeartIcon, AwardIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export function PortfolioAbout() {
  return (
    <section id="about" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <UserIcon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          Get to know my background, experience, and what drives me as a developer.
        </p>
      </motion.div>

      <Tabs defaultValue="bio" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-12 max-w-2xl mx-auto h-14 shadow-sm backdrop-blur bg-background/50 rounded-full">
          <TabsTrigger value="bio" className="data-[state=active]:shadow-md rounded-full">
            Bio
          </TabsTrigger>
          <TabsTrigger value="experience" className="data-[state=active]:shadow-md rounded-full">
            Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="data-[state=active]:shadow-md rounded-full">
            Education
          </TabsTrigger>
          <TabsTrigger value="interests" className="data-[state=active]:shadow-md rounded-full">
            Interests
          </TabsTrigger>
        </TabsList>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TabsContent value="bio">
            <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
              <CardContent className="pt-6 space-y-6 text-lg">
                <p>
                  I am a passionate full-stack developer with over 5 years of experience building
                  web applications. With a focus on creating clean, efficient, and user-centered
                  designs, I specialize in React, Next.js, Node.js, and TypeScript.
                </p>
                <p>
                  My approach to development focuses on creating intuitive, accessible, and
                  performant applications that solve real-world problems. I'm dedicated to writing
                  clean, maintainable code and constantly learning new technologies to stay at the
                  forefront of web development.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the outdoors, reading about new
                  technologies, or contributing to open-source projects that make the web a better
                  place.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  role: 'Senior Developer',
                  company: 'TechCorp Inc.',
                  period: '2021 - Present',
                  description:
                    'Leading development of enterprise web applications, mentoring junior developers, and implementing best practices across teams.',
                },
                {
                  role: 'Frontend Developer',
                  company: 'WebSolutions LLC',
                  period: '2018 - 2021',
                  description:
                    'Developed responsive web applications using React and modern JavaScript, improving user experience and performance metrics.',
                },
                {
                  role: 'Junior Developer',
                  company: 'StartupX',
                  period: '2016 - 2018',
                  description:
                    'Built and maintained features for a SaaS platform, collaborating with designers and product managers.',
                },
                {
                  role: 'Freelance Developer',
                  company: 'Self-employed',
                  period: '2015 - 2016',
                  description:
                    'Worked with small businesses to create custom websites and web applications tailored to their specific needs.',
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-none bg-background/60 backdrop-blur"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{job.role}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              {[
                {
                  degree: 'MSc Computer Science',
                  school: 'University of Technology',
                  period: '2016 - 2018',
                  description:
                    'Specialized in Human-Computer Interaction and Machine Learning, graduating with honors. Thesis focused on developing accessible web interfaces.',
                },
                {
                  degree: 'BSc Computer Science',
                  school: 'University of Technology',
                  period: '2012 - 2016',
                  description:
                    'Fundamental education in programming concepts, algorithms, data structures, and software development methodologies.',
                },
                {
                  degree: 'Web Development Bootcamp',
                  school: 'CodeAcademy',
                  period: 'Summer 2015',
                  description:
                    'Intensive 12-week program covering full-stack web development technologies and best practices.',
                },
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="shadow-md hover:shadow-lg transition-shadow border-none bg-background/60 backdrop-blur"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.school}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interests">
            <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <HeartIcon className="h-5 w-5 text-primary" />,
                      title: 'Open Source',
                      description:
                        'Contributing to open source projects and the developer community.',
                    },
                    {
                      icon: <AwardIcon className="h-5 w-5 text-primary" />,
                      title: 'UI/UX Design',
                      description:
                        'Creating beautiful and functional interfaces with clean aesthetics.',
                    },
                    {
                      icon: <BriefcaseIcon className="h-5 w-5 text-primary" />,
                      title: 'AI & Machine Learning',
                      description:
                        'Exploring how AI can enhance web applications and user experiences.',
                    },
                    {
                      icon: <GraduationCapIcon className="h-5 w-5 text-primary" />,
                      title: 'Teaching',
                      description: 'Mentoring junior developers and creating educational content.',
                    },
                  ].map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">{interest.icon}</div>
                      <div>
                        <h3 className="font-medium">{interest.title}</h3>
                        <p className="text-muted-foreground text-sm">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </motion.div>
      </Tabs>
    </section>
  )
}
