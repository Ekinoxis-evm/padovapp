import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Padova - Luxury Fashion",
  description: "Premium Colombian fashion brand - Mediterranean-inspired luxury with Colombian craftsmanship",
  keywords: "luxury fashion, Colombian fashion, Mediterranean style, Padova, premium clothing",
  authors: [{ name: "Padova" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#6b7c59",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/icon-144x144.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Padova" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#6b7c59" />
      </head>
      <body className="font-inter antialiased bg-padova-cream">
        <Navigation />
        <main className="lg:ml-64">
          {children}
        </main>
      </body>
    </html>
  )
}
