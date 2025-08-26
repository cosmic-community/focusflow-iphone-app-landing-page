import { LandingPage } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

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
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
              <CardHeader className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <a 
                  href={`mailto:${metadata.contact_email}`}
                  className="text-purple-600 hover:text-purple-800 transition-colors font-medium"
                >
                  {metadata.contact_email}
                </a>
              </CardContent>
            </Card>
            
            {/* Phone */}
            {metadata.contact_phone && (
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
                <CardHeader className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Phone</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <a 
                    href={`tel:${metadata.contact_phone}`}
                    className="text-green-600 hover:text-green-800 transition-colors font-medium"
                  >
                    {metadata.contact_phone}
                  </a>
                </CardContent>
              </Card>
            )}
            
            {/* Address */}
            {metadata.contact_address && (
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <CardHeader className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Address</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-blue-600 whitespace-pre-line font-medium">
                    {metadata.contact_address}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}