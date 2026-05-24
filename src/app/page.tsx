import Layout from '@/components/Layout'
import HeroSection from '@/sections/HeroSection'
import { ProjectsSection, SkillsSection } from '@/sections/ProjectsSkills'
import { AboutSection, ContactSection } from '@/sections/ContactAbout'

export const metadata = {
  title: 'Rohan Kirdak - Full Stack MERN Developer',
  description: 'Premium portfolio of Rohan Kirdak, a full stack MERN developer specializing in modern web applications',
  keywords: 'MERN, React, Next.js, Web Developer, Portfolio',
  openGraph: {
    title: 'Rohan Kirdak - Full Stack Developer',
    description: 'Discover amazing web applications and projects',
    type: 'website',
    url: 'https://rohan-portfolio.vercel.app'
  }
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}
