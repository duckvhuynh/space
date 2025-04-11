import type { Metadata } from 'next'
import React from 'react'

import { PortfolioHero } from './components/PortfolioHero'
import { PortfolioProjects } from './components/PortfolioProjects'
import { PortfolioContact } from './components/PortfolioContact'
import { generateMeta } from '@/utilities/generateMeta'
import { PortfolioSkills } from './components/PortfolioSkills'
import { PortfolioAbout } from './components/PortfolioAbout'
import { Separator } from '@/components/ui/separator'
import { PortfolioTestimonials } from './components/PortfolioTestimonials'

export async function generateStaticParams() {
  return [{}] // No dynamic params for the portfolio page
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: 'Portfolio - Your Name',
    description: 'Welcome to my portfolio. Explore my projects and get in touch!',
  })
}

export default function PortfolioPage() {
  return (
    <main className="portfolio-page min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container max-w-6xl mx-auto px-4 py-12 space-y-32">
        <PortfolioHero />
        <div className="space-y-32">
          <PortfolioAbout />
          <Separator className="max-w-md mx-auto opacity-50" />
          <PortfolioSkills />
          <Separator className="max-w-md mx-auto opacity-50" />
          <PortfolioProjects />
          <Separator className="max-w-md mx-auto opacity-50" />
          <PortfolioTestimonials />
          <Separator className="max-w-md mx-auto opacity-50" />
          <PortfolioContact />
        </div>
      </div>
    </main>
  )
}
