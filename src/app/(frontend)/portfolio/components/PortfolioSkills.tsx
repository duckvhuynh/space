import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export const PortfolioSkills: React.FC = () => {
  const frontendSkills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Redux/Zustand', level: 85 },
    { name: 'React Query', level: 88 },
  ]

  const backendSkills = [
    { name: 'Node.js/Express', level: 92 },
    { name: 'MongoDB/Mongoose', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'GraphQL', level: 75 },
    { name: 'Payload CMS', level: 88 },
  ]

  const otherSkills = [
    'AWS',
    'Docker',
    'CI/CD',
    'Jest/Vitest',
    'Storybook',
    'Figma',
    'Git',
    'Agile',
    'RESTful APIs',
    'Performance Optimization',
    'Accessibility',
    'SEO',
    'Vercel',
    'Netlify',
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional toolkit has been refined through years of hands-on experience across
            various projects and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Backend Development</h3>
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
