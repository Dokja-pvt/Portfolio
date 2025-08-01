import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Furqan Mohammad - Portfolio",
  description:
    "Computer Application Student & Developer specializing in web development, data science, and creative design.",
  keywords: ["Furqan Mohammad", "Portfolio", "Web Developer", "Data Science", "BCA Student", "Graphic Design"],
  authors: [{ name: "Furqan Mohammad" }],
  creator: "Furqan Mohammad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furqan-mohammad.vercel.app",
    title: "Furqan Mohammad - Portfolio",
    description:
      "Computer Application Student & Developer specializing in web development, data science, and creative design.",
    siteName: "Furqan Mohammad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furqan Mohammad - Portfolio",
    description:
      "Computer Application Student & Developer specializing in web development, data science, and creative design.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
