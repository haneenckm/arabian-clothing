import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-serif" })
const _lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Alyara - Premium Arabian Clothing",
  description: "Discover authentic Arabian thobs, luxurious accessories, and traditional craftsmanship",
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.svg", type: "image/svg+xml" },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${_lora.variable} ${_playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
