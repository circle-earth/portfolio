import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Premium Web Consultant',
  description: 'High-performance web experiences that convert',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}