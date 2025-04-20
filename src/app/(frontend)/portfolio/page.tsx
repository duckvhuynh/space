import React from 'react'
import {
  PortfolioHero,
  PortfolioAbout,
  PortfolioSkills,
  PortfolioProjects,
  PortfolioContact,
  PortfolioTestimonials,
} from './components'
import { PortfolioBackground } from './components/PortfolioBackground'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Duck V. Huynh',
  description: 'Full Stack Developer showcasing projects and skills',
}

export default function PortfolioPage() {
  return (
    <main className="relative">
      <PortfolioBackground />
      <div className="relative z-10">
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioSkills />
        <PortfolioProjects />
        <PortfolioTestimonials />
        <PortfolioContact />
      </div>
    </main>
  )
}
