import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hungary Volleyball',
    template: '%s | Hungary Volleyball',
  },
  description:
    'Fedezze fel a magyar röplabda világ gazdagságát, történetét, technikáját és szenvedélyét. Átfogó forrás a magyarországi röplabdáról.',
  keywords: ['röplabda', 'Magyarország', 'volleyball', 'Hungary', 'sport', 'technika', 'szabályok'],
  metadataBase: new URL('https://hungaryvolleyball.com'),
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://hungaryvolleyball.com',
    siteName: 'Hungary Volleyball',
    title: 'Hungary Volleyball',
    description:
      'Fedezze fel a magyar röplabda világ gazdagságát, történetét, technikáját és szenvedélyét.',
  },
  alternates: {
    canonical: 'https://hungaryvolleyball.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F1EA',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
