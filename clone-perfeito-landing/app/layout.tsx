import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Clone Perfeito",
  description: "Crie fotos profissionais com IA sem sair de casa",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
