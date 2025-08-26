import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CosmicBadge from '@/components/CosmicBadge'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FocusFlow - Master Your Focus, Amplify Your Productivity',
  description: 'FocusFlow is the revolutionary iPhone app that combines cutting-edge neuroscience with beautiful design to help you achieve deep focus and peak productivity.',
  keywords: 'productivity, focus, iPhone app, neuroscience, deep work, time management',
  authors: [{ name: 'FocusFlow Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Access environment variable on server side
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        {/* Pass bucket slug as prop to client component */}
        <CosmicBadge bucketSlug={bucketSlug} />
        <Toaster />
      </body>
    </html>
  )
}