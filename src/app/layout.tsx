import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Padova - Luxury Fashion",
  description: "Premium Colombian fashion brand - Mediterranean-inspired luxury with Colombian craftsmanship",
  keywords: ["fashion", "luxury", "Colombian", "Padova", "designer", "clothing"],
  authors: [{ name: "Padova Fashion" }],
  creator: "Padova Fashion",
  publisher: "Padova Fashion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Padova",
  },
  openGraph: {
    type: "website",
    siteName: "Padova",
    title: "Padova - Luxury Fashion",
    description: "Premium Colombian fashion brand - Mediterranean-inspired luxury with Colombian craftsmanship",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padova - Luxury Fashion",
    description: "Premium Colombian fashion brand - Mediterranean-inspired luxury with Colombian craftsmanship",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-900 dark:to-stone-900`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <Navigation />
        </div>
      </body>
    </html>
  );
}
