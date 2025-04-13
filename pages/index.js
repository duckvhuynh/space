import { useEffect } from 'react'
import Head from 'next/head'
import SmoothScroll from '../components/UI/SmoothScroll'
import BackgroundCanvas from '../components/3D/BackgroundCanvas'
import Hero from '../components/Sections/Hero'
import Projects from '../components/Sections/Projects'
import { projects } from '../data/projects'

export default function Home() {
  const heroData = {
    title: 'Creative Developer',
    subtitle: 'Portfolio',
    description:
      'I design and build unique digital experiences that blend artistic expression with technical excellence, creating memorable and functional interfaces.',
  }

  return (
    <div>
      <Head>
        <title>Creative Portfolio</title>
        <meta
          name="description"
          content="Creative developer portfolio with minimalist black and white design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundCanvas />

      <SmoothScroll>
        <main className="min-h-screen bg-black text-white">
          <Hero data={heroData} />
          <Projects projects={projects} />

          {/* Add more sections as needed */}
        </main>
      </SmoothScroll>
    </div>
  )
}
