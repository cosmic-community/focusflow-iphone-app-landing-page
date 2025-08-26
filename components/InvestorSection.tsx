import { LandingPage } from '@/types'

interface InvestorSectionProps {
  landingPage: LandingPage
}

export default function InvestorSection({ landingPage }: InvestorSectionProps) {
  const { metadata } = landingPage
  
  return (
    <section id="investors" className="py-20 bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: metadata.for_investors }}
          />
        </div>
      </div>
    </section>
  )
}