// Imports
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Imported Components
import Header from '../components/Header'

// Stlyes
import './globals.css'
import Background from '../components/Background'

// Fonts
const inter = Inter({ subsets: ['latin'] })

// SEO
export const metadata: Metadata = {
  title: 'Caique Morales - React Developer Portfolio',
  robots: 'index, follow',
  description:
    'Explore meu portfólio de desenvolvimento web com React, Next.js, HTML e CSS. Veja como transformo ideias em experiências digitais impressionantes.',
  authors: [{ name: 'Caique Morales', url: 'https://caiquemorales.com/' }],
  publisher: 'Vercel',
  keywords:
    'React, Next.js, desenvolvimento web, HTML5, CSS3, portfólio de desenvolvedor web',
  alternates: {
    canonical: 'https://light-films.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Background />
        {children}
      </body>
    </html>
  )
}
