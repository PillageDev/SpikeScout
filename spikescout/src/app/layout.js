import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SpikeScout',
  description: 'A scouting application for FRC teams.',
  visualViewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
