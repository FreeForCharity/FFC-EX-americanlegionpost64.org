import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://staging.americanlegionpost64.org'),
  title: {
    default: 'American Legion Post 64 | Ahwatukee, Phoenix, AZ',
    template: '%s | American Legion Post 64',
  },
  description:
    'American Legion Post 64 is Ahwatukee’s only local veterans’ organization — Veterans Helping Veterans while strengthening the community around us.',
  keywords: [
    'American Legion',
    'Post 64',
    'Ahwatukee',
    'Phoenix',
    'Arizona veterans',
    'veterans organization',
    'VA benefits',
    'Be the One',
    'veterans helping veterans',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://staging.americanlegionpost64.org/',
    siteName: 'American Legion Post 64',
    title: 'American Legion Post 64 | Ahwatukee, Phoenix, AZ',
    description:
      'Ahwatukee’s only local veterans’ organization. Veterans Helping Veterans since 1919.',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'American Legion Post 64',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'American Legion Post 64 | Ahwatukee',
    description: 'Veterans Helping Veterans while strengthening the community around us.',
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
