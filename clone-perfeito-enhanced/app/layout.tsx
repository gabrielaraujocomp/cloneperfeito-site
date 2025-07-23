import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clone Perfeito',
  description: 'Aprenda a criar ensaios hiper-realistas com IA em minutos.',
  generator: 'v0.dev',
  icons: {
    icon: 'public/images/fav-clone.png', // ✅ Caminho correto relativo à pasta public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/fav-clone.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
