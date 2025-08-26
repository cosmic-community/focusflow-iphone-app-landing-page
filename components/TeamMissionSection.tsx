import { LandingPage } from '@/types'

interface TeamMissionSectionProps {
  landingPage: LandingPage
}

export default function TeamMissionSection({ landingPage }: TeamMissionSectionProps) {
  const { metadata } = landingPage
  
  return (
    <section id="team-mission" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: metadata.team_mission }}
          />
        </div>
      </div>
    </section>
  )
}