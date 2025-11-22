import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Aspirasi FRISQ",
  description: "Sampaikan Aspirasi Mu",
  generator: "Aspirasi FRISQ System",
  icons: {
    icon: [
      {
        url: "/smk bazma Sekunder.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/smk bazma alternatif putih-19.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Logo Web RGB.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
