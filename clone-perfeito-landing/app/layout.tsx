import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clone Perfeito',
  description: 'Crie fotos profissionais com IA sem sair de casa',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


// Local: /app/layout.js

// Supondo que você tenha imports de fontes ou CSS aqui...
// Ex: import { Inter } from 'next/font/google'
// Ex: import './globals.css'

// AQUI ESTÁ A ADIÇÃO IMPORTANTE
export const metadata = {
  // Você pode adicionar outros metadados aqui se quiser
  title: 'Clone Perfeito',
  description: 'Aprenda a criar um Clone seu com IA e gere ensaios profissionais sem câmera, fotógrafo ou estúdio.',
  
  // Esta é a chave específica para verificação de domínio
  verification: {
    // O Next.js sabe que 'facebook' deve ser renderizado como <meta name="facebook-domain-verification" ...>
    facebook: '10nf38xc0ux482u2qa1a51e5m3ay6q',
    
    // Se você tiver outras verificações no futuro (ex: Google), pode adicionar aqui
    // google: 'sua-outra-chave-de-verificacao', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* O Next.js irá inserir a tag <head> com os metadados automaticamente aqui */}
      <body>{children}</body>
    </html>
  );
}
