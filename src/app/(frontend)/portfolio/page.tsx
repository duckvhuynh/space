import type { Metadata } from 'next'
import React from 'react'

import { PortfolioHero } from './components/PortfolioHero'
import { PortfolioProjects } from './components/PortfolioProjects'
import { PortfolioContact } from './components/PortfolioContact'
import { generateMeta } from '@/utilities/generateMeta'
import { PortfolioSkills } from './components'

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
    <main className="portfolio-page">
      <PortfolioHero />
      <PortfolioSkills />
      <PortfolioProjects />
      <PortfolioContact />
    </main>
  )
}
