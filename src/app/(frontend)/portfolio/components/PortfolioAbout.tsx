'use client'

import React, { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BriefcaseIcon, GraduationCapIcon, UserIcon, HeartIcon, AwardIcon } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function PortfolioAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Create animated values for parallax effect
  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" className="py-12 relative" ref={containerRef}>
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-5 pointer-events-none">
        <motion.div
          className="w-full h-full flex items-center justify-center text-[12rem] md:text-[20rem] font-bold text-primary"
          style={{ y: contentY }}
          aria-hidden="true"
        >
          ABOUT
        </motion.div>
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
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', damping: 10 }}
        >
          <UserIcon className="h-6 w-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          Get to know my background, experience, and what drives me as a developer.
        </p>
      </motion.div>

      <div className="px-4 md:px-0">
        <Tabs defaultValue="bio" className="w-full">
          <div className="overflow-x-auto no-scrollbar">
            <TabsList className="grid w-full min-w-[640px] md:min-w-0 grid-cols-4 mb-8 md:mb-12 mx-auto h-12 md:h-14 shadow-sm backdrop-blur bg-background/50 rounded-full max-w-md md:max-w-2xl">
              {[
                { value: 'bio', label: 'Bio' },
                { value: 'experience', label: 'Experience' },
                { value: 'education', label: 'Education' },
                { value: 'interests', label: 'Interests' },
              ].map((tab, i) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:shadow-md rounded-full"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tab.label}
                  </motion.span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TabsContent value="bio">
              <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
                <CardContent className="pt-6 space-y-4 md:space-y-6 text-base md:text-lg">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    I am a passionate full-stack developer with over 5 years of experience building
                    web applications. With a focus on creating clean, efficient, and user-centered
                    designs, I specialize in React, Next.js, Node.js, and TypeScript.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    My approach to development focuses on creating intuitive, accessible, and
                    performant applications that solve real-world problems. I'm dedicated to writing
                    clean, maintainable code and constantly learning new technologies to stay at the
                    forefront of web development.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    When I'm not coding, you can find me exploring the outdoors, reading about new
                    technologies, or contributing to open-source projects that make the web a better
                    place.
                  </motion.p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-none bg-background/60 backdrop-blur">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                          <div>
                            <h3 className="font-bold text-base md:text-lg relative inline-block">
                              {job.role}
                              <motion.div
                                className="absolute bottom-0 left-0 h-[2px] bg-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                              />
                            </h3>
                            <p className="text-primary font-medium text-sm md:text-base">
                              {job.company}
                            </p>
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {job.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-4 md:space-y-6">
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-md hover:shadow-lg transition-shadow border-none bg-background/60 backdrop-blur">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                          <div>
                            <h3 className="font-bold text-base md:text-lg">{edu.degree}</h3>
                            <p className="text-primary font-medium text-sm md:text-base">
                              {edu.school}
                            </p>
                          </div>
                          <motion.span
                            className="text-xs md:text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            {edu.period}
                          </motion.span>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interests">
              <Card className="shadow-lg border-none bg-background/60 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                        description:
                          'Mentoring junior developers and creating educational content.',
                      },
                    ].map((interest, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                        }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <motion.div
                          className="mt-1 bg-primary/10 p-1.5 md:p-2 rounded-full"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {interest.icon}
                        </motion.div>
                        <div>
                          <h3 className="font-medium text-sm md:text-base">{interest.title}</h3>
                          <p className="text-muted-foreground text-xs md:text-sm">
                            {interest.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </section>
  )
}
