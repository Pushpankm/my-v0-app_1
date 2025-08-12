import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { BUSINESS_INFO } from "@/lib/business-info"
import { OrganizationSchema } from "@/components/seo/organization-schema"
import "./globals.css"

export const metadata: Metadata = {
  title: `Professional Plumbing Services in Avondale, AZ | ${BUSINESS_INFO.name}`,
  description: `Expert plumbing services in Avondale, Goodyear, Litchfield Park & surrounding areas. 24/7 emergency plumber, water heater repair, drain cleaning, leak detection. Licensed & insured by ${BUSINESS_INFO.name}.`,
  keywords:
    "plumber Avondale AZ, emergency plumbing, water heater repair, drain cleaning, leak detection, plumbing services Arizona, licensed plumber",
  generator: "v0.dev",
  metadataBase: new URL(BUSINESS_INFO.website),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Professional Plumbing Services in Avondale, AZ | ${BUSINESS_INFO.name}`,
    description: `Expert plumbing services in Avondale, Goodyear, Litchfield Park & surrounding areas. 24/7 emergency plumber by ${BUSINESS_INFO.name}.`,
    type: "website",
    locale: "en_US",
    url: BUSINESS_INFO.website,
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Professional Plumbing Services in Avondale, AZ`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Professional Plumbing Services in Avondale, AZ | ${BUSINESS_INFO.name}`,
    description: `Expert plumbing services in Avondale, Goodyear, Litchfield Park & surrounding areas. 24/7 emergency plumber by ${BUSINESS_INFO.name}.`,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // User should replace with real verification code
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "geo.region": "US-AZ",
    "geo.placename": "Avondale",
    "geo.position": `${BUSINESS_INFO.geo.latitude};${BUSINESS_INFO.geo.longitude}`,
    ICBM: `${BUSINESS_INFO.geo.latitude}, ${BUSINESS_INFO.geo.longitude}`,
    "business:contact_data:street_address": BUSINESS_INFO.address.street,
    "business:contact_data:locality": BUSINESS_INFO.address.city,
    "business:contact_data:region": BUSINESS_INFO.address.state,
    "business:contact_data:postal_code": BUSINESS_INFO.address.zip,
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": BUSINESS_INFO.phone,
    "business:contact_data:website": BUSINESS_INFO.website,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Added performance optimization meta tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />

        {/* Added Core Web Vitals optimization */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />

        {/* Added theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Added security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Added referrer policy for privacy */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* Added organization schema at root level */}
        <OrganizationSchema />
        {children}
      </body>
    </html>
  )
}
