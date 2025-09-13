import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rrocksthread.com"),
  alternates: {
    canonical: "/",
  },
  title: 'RRocks Thread – Leading Sewing & Embroidery Thread Manufacturer in India',
  description: 'RRocks Thread Co. Ltd. is a premier manufacturer of high-quality sewing and embroidery threads in India, offering polyester, rayon, metallic, and specialty threads with ISO certifications for quality and sustainability.',
  generator: 'RRocks Technology',
  keywords: [
    'RRocks Thread',
    'rrocksthread',
    'r rocks thread',
    'rrocks thread',
    'Sewing thread manufacturer India',
    'Embroidery thread supplier',
    'Polyester embroidery thread',
    'Rayon embroidery thread',
    'Metallic thread manufacturer',
    'ISO certified thread factory',
    'Textile threads India',
    'High-quality sewing threads',
    'Embroidery threads India'
  ],
  authors: [{ name: 'RRocks Thread Co. Ltd.' }],
  openGraph: {
    title: 'RRocks Thread – High-Quality Sewing & Embroidery Threads',
    description: 'Manufacturing premium sewing and embroidery threads in India with ISO-certified quality and sustainable production.',
    url: 'https://www.rrocksthread.com', // replace with your website URL
    siteName: 'RRocks Thread',
    images: [
      {
        url: 'https://www.rrocksthread.com/final/hero3.jpg', // replace with an image URL
        width: 1200,
        height: 630,
        alt: 'RRocks Thread Factory and Products'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: 'final/rrocks_logo.png',                // standard favicon
    shortcut: 'final/rrocks_logo.png',      // browser shortcut
    apple: 'final/rrocks_logo.png',      // iOS home screen
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'RRocks Thread – Premium Sewing & Embroidery Threads',
  //   description: 'Leading manufacturer of high-quality sewing and embroidery threads in India with ISO-certified quality.',
  //   images: ['https://www.rrocksthread.com/og-image.jpg'], // replace with your image URL
  // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
