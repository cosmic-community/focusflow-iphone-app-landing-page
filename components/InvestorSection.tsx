import { LandingPage } from '@/types'

interface InvestorSectionProps {
  landingPage: LandingPage
}

export default function InvestorSection({ landingPage }: InvestorSectionProps) {
  const { metadata } = landingPage
  
  return (
    <section id="investors" className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container-max section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            For <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Investors</span>
          </h2>
          <div 
            className="prose prose-xl prose-invert max-w-4xl mx-auto text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: metadata.for_investors }}
          />
        </div>
      </div>
    </section>
  )
}