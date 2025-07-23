import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clone Perfeito',
  description: 'Aprenda a criar ensaios de fotos hiper-realistas com IA em minutos.',
  generator: 'v0.dev',
  icons: {
    icon: '/images/fav-clone.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  )
}
