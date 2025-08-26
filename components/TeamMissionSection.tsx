'use client'

import { LandingPage } from '@/types'
import { Target, Users, Lightbulb, Award } from 'lucide-react'

interface TeamMissionSectionProps {
  landingPage: LandingPage
}

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    description: 'Former neuroscientist at Stanford, passionate about translating research into practical applications.',
    icon: Lightbulb,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder', 
    description: 'Ex-Apple engineer with 10+ years of iOS development experience and a love for pixel-perfect design.',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Research',
    description: 'Cognitive psychologist and productivity expert who ensures our methods are scientifically sound.',
    icon: Award,
    gradient: 'from-green-500 to-teal-500'
  }
]

export default function TeamMissionSection({ landingPage }: TeamMissionSectionProps) {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                We believe that everyone deserves to experience the satisfaction of deep, meaningful work. 
                Our mission is to combat the attention crisis by providing tools that actually work, 
                backed by science and refined through real user feedback.
              </p>
              <div className="flex items-center justify-center mt-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we've spent over 3 years researching, designing, and testing 
              FocusFlow with beta users around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <div className="text-sm font-semibold text-purple-600 mb-4 uppercase tracking-wide">
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Achievement Stats */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-purple-100">Years of Research</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-purple-100">Beta Testers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="text-purple-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}