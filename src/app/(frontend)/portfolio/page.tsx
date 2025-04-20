import React from 'react'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { draftMode } from 'next/headers'
import PageClient from '@/app/(frontend)/[slug]/page.client'
import { PortfolioHero } from './components/PortfolioHero'
import { PortfolioSkills } from './components/PortfolioSkills'
import { PortfolioProjects } from './components/PortfolioProjects'
import { PortfolioContact } from './components/PortfolioContact'
import { PortfolioAbout } from './components/PortfolioAbout'
import { PortfolioTestimonials } from './components/PortfolioTestimonials'
import { SmoothScroll } from './components/UI/SmoothScroll'
import { CustomCursor } from './components/UI/CustomCursor'
import { ProgressIndicator } from './components/UI/ProgressIndicator'
import { BackgroundScene } from './components/3D/BackgroundScene'

export default function PortfolioPage() {
  const { isEnabled: draft } = draftMode()

  return (
    <>
      <SmoothScroll>
        <main className="portfolio-page">
          <PageClient />
          {draft && <LivePreviewListener />}
          <BackgroundScene />
          <PortfolioHero />
          <PortfolioAbout />
          <PortfolioSkills />
          <PortfolioProjects />
          <PortfolioTestimonials />
          <PortfolioContact />
        </main>
      </SmoothScroll>
      <CustomCursor lightModeColor="#000000" darkModeColor="#ffffff" blend={false} />
      <ProgressIndicator position="top" color="hsl(var(--foreground))" height={2} />
    </>
  )
}
