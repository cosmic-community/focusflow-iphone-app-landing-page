import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import TeamMissionSection from '@/components/TeamMissionSection'
import InvestorSection from '@/components/InvestorSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { getLandingPageContent } from '@/lib/cosmic'

export default async function HomePage() {
  const landingPageContent = await getLandingPageContent()
  
  if (!landingPageContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Available</h1>
          <p className="text-gray-600">Please check your Cosmic CMS configuration.</p>
        </div>
      </div>
    )
  }
  
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection landingPage={landingPageContent} />
      <AboutSection landingPage={landingPageContent} />
      <TeamMissionSection landingPage={landingPageContent} />
      <InvestorSection landingPage={landingPageContent} />
      <ContactSection landingPage={landingPageContent} />
      <Footer />
    </main>
  )
}