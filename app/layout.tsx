import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://braidpay.com'),
  title: 'LA Wildfire Relief Fund - Emergency Donations | BraidPay',
  description: 'Support Los Angeles wildfire victims and emergency responders through secure USDC donations. Every contribution helps provide shelter, food, and essential supplies to affected families.',
  openGraph: {
    title: 'LA Wildfire Relief Fund - Emergency Donations | BraidPay',
    description: 'Support Los Angeles wildfire victims and emergency responders through secure USDC donations. Every contribution helps provide shelter, food, and essential supplies to affected families.',
    images: [
      {
        url: '/LAFire/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'LA Wildfire Relief Fund',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LA Wildfire Relief Fund - Emergency Donations | BraidPay',
    description: 'Support Los Angeles wildfire victims and emergency responders through secure USDC donations.',
    images: ['/LAFire/images/og.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 