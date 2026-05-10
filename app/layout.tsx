import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import BackToTop from "@/components/BackToTop"

export const metadata: Metadata = {
  metadataBase: new URL("https://penandtongueacademy.com"),
  title: {
    default: "The Pen & Tongue Academy | Islamic Education in Ibadan",
    template: "%s | The Pen & Tongue Academy",
  },
  description:
    "The Pen & Tongue Academy is a premier Islamic educational institution in Ibadan, Nigeria. Offering Qur'an memorization, Arabic language, Fiqh, Hadeeth studies, and more. Connecting Arabic to Your Deen.",
  keywords: [
    "Islamic school in Ibadan",
    "Arabic academy in Nigeria",
    "Qur'an memorization school",
    "Learn Arabic in Ibadan",
    "Islamic education Nigeria",
    "Islamic studies Ibadan",
    "Arabic language school",
    "Quran Hifz Nigeria",
    "Islamic academy",
    "Deen education",
  ],
  authors: [{ name: "The Pen & Tongue Academy" }],
  creator: "The Pen & Tongue Academy",
  publisher: "The Pen & Tongue Academy",
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://penandtongueacademy.com",
    siteName: "The Pen & Tongue Academy",
    title: "The Pen & Tongue Academy | Islamic Education in Ibadan",
    description:
      "Premier Islamic educational institution in Ibadan, Nigeria. Qur'an memorization, Arabic language, Fiqh, Hadeeth studies, and more.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Pen & Tongue Academy - Islamic Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pen & Tongue Academy | Islamic Education in Ibadan",
    description:
      "Premier Islamic educational institution in Ibadan, Nigeria. Connecting Arabic to Your Deen.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://penandtongueacademy.com",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
