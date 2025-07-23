import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clone Perfeito',
  description: 'Aprenda a criar ensaios hiper-realistas com IA em minutos.',
  generator: 'v0.dev',
  icons: {
    icon: '/images/fav-clone.png', // ✅ Caminho correto, sem "public"
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
        {/* ✅ Garantia que o favicon será carregado corretamente */}
        <link rel="icon" href="/images/fav-clone.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
