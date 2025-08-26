import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/Toaster'
import CosmicBadge from '@/components/CosmicBadge'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FocusFlow - Master Your Focus, Amplify Your Productivity',
  description: 'FocusFlow is the revolutionary iPhone app that combines cutting-edge neuroscience with beautiful design to help you achieve deep focus and peak productivity.',
  keywords: 'focus, productivity, iPhone app, neuroscience, deep work, concentration',
  authors: [{ name: 'FocusFlow Team' }],
  creator: 'FocusFlow',
  publisher: 'FocusFlow Inc.',
  openGraph: {
    title: 'FocusFlow - Master Your Focus, Amplify Your Productivity',
    description: 'Join thousands of users who have transformed their work habits with FocusFlow.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FocusFlow - Master Your Focus, Amplify Your Productivity',
    description: 'Join thousands of users who have transformed their work habits with FocusFlow.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" defer />
        {/* Console capture script for dashboard debugging */}
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}