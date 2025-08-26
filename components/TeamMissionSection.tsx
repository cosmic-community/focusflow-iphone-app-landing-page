import { LandingPage } from '@/types'

interface TeamMissionSectionProps {
  landingPage: LandingPage
}

export default function TeamMissionSection({ landingPage }: TeamMissionSectionProps) {
  const { metadata } = landingPage
  
  return (
    <section id="team-mission" className="py-32 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Team & <span className="gradient-text">Mission</span>
          </h2>
          <div 
            className="prose prose-xl max-w-4xl mx-auto text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: metadata.team_mission }}
          />
        </div>
      </div>
    </section>
  )
}