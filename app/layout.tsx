import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FocusFlow - Master Your Focus, Amplify Your Productivity',
  description: 'FocusFlow is the revolutionary iPhone app that combines cutting-edge neuroscience with beautiful design to help you achieve deep focus and peak productivity.',
  keywords: 'focus, productivity, iPhone app, neuroscience, pomodoro, deep work',
  authors: [{ name: 'FocusFlow Team' }],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}