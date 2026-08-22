import HeroFuturistic from './components/ui/hero-futuristic'
import AboutSection from './components/ui/about-section'
import SkillsSection from './components/ui/skills-section'
import WhyMeSection from './components/ui/why-me-section'
import ProjectsSection from './components/ui/projects-section'
import ContactSection from './components/ui/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <HeroFuturistic />
      <AboutSection />
      <SkillsSection />
      <WhyMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
