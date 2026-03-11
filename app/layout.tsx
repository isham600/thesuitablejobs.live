import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Thesuitablejobs - Find Your Dream Job',
  description: 'Search and apply for the best job opportunities across India. Browse jobs by location, role, and company on Thesuitablejobs.',
  keywords: ['jobs', 'careers', 'employment', 'job search', 'hiring', 'recruitment'],
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
