import { LandingPage } from '@/types'

interface ContactSectionProps {
  landingPage: LandingPage
}

export default function ContactSection({ landingPage }: ContactSectionProps) {
  const { metadata } = landingPage
  
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Contact <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with the FocusFlow team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
              <a 
                href={`mailto:${metadata.contact_email}`}
                className="text-purple-600 hover:text-purple-800 transition-colors font-medium"
              >
                {metadata.contact_email}
              </a>
            </div>
            
            {/* Phone */}
            {metadata.contact_phone && (
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
                <a 
                  href={`tel:${metadata.contact_phone}`}
                  className="text-green-600 hover:text-green-800 transition-colors font-medium"
                >
                  {metadata.contact_phone}
                </a>
              </div>
            )}
            
            {/* Address */}
            {metadata.contact_address && (
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>
                <p className="text-blue-600 whitespace-pre-line font-medium">
                  {metadata.contact_address}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}