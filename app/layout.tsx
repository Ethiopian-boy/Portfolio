import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mulubrhan | Full-Stack Web Developer",
  description: "Personal portfolio of Mulubrhan, a full-stack web developer showcasing projects and work experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
