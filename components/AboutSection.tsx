import { LandingPage } from '@/types'

interface AboutSectionProps {
  landingPage: LandingPage
}

export default function AboutSection({ landingPage }: AboutSectionProps) {
  const { metadata } = landingPage
  const screenshots = metadata.app_screenshots || []
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: metadata.about_section }}
          />
          
          {/* App Screenshots Gallery */}
          {screenshots.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                App Screenshots
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-xl">
                      <div className="w-full h-full rounded-[2rem] overflow-hidden">
                        <img
                          src={`${screenshot.imgix_url}?w=500&h=1000&fit=crop&auto=format,compress`}
                          alt={`${metadata.app_name} Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                          width="250"
                          height="500"
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