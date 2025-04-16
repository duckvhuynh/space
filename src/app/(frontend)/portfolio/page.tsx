import {
  PortfolioHero,
  PortfolioAbout,
  PortfolioSkills,
  PortfolioProjects,
  PortfolioTestimonials,
  PortfolioContact,
  BackgroundScene,
  SmoothScroll,
  CustomCursor,
  ProgressIndicator,
} from './components'

export default function Portfolio() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ProgressIndicator />
      <BackgroundScene />
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioSkills />
        <PortfolioProjects />
        <PortfolioTestimonials />
        <PortfolioContact />
      </div>
    </SmoothScroll>
  )
}
