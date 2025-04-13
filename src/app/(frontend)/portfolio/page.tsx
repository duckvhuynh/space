import {
  PortfolioHero,
  PortfolioAbout,
  PortfolioSkills,
  PortfolioProjects,
  PortfolioTestimonials,
  PortfolioContact,
  BackgroundScene,
} from './components'

export default function Portfolio() {
  return (
    <>
      <BackgroundScene />
      <div className="container px-4 md:px-6">
        <PortfolioHero />
        <PortfolioSkills />
        <PortfolioProjects />
        <PortfolioAbout />
        <PortfolioTestimonials />
        <PortfolioContact />
      </div>
    </>
  )
}
