import { LandingPage } from '@/types'

interface AboutSectionProps {
  landingPage: LandingPage
}

export default function AboutSection({ landingPage }: AboutSectionProps) {
  const { metadata } = landingPage
  const screenshots = metadata.app_screenshots || []
  
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About <span className="gradient-text">FocusFlow</span>
            </h2>
            <div 
              className="prose prose-xl max-w-4xl mx-auto text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: metadata.about_section }}
            />
          </div>
          
          {/* App Screenshots Gallery */}
          {screenshots.length > 0 && (
            <div className="mt-20">
              <div className="grid md:grid-cols-3 gap-8">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                        <img
                          src={`${screenshot.imgix_url}?w=576&h=1152&fit=crop&auto=format,compress`}
                          alt={`${metadata.app_name} Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                          width="288"
                          height="576"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}