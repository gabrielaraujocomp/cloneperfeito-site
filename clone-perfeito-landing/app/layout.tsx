import type { Metadata } from 'next'
import './globals.css'

// Arquivo: app/layout.js

export const metadata: Metadata = {
  // Metadados básicos
  title: 'Clone Perfeito',
  description: 'Aprenda a criar um Clone seu com IA e gere ensaios profissionais sem câmera, fotógrafo ou estúdio.',
  
  // ✅ FAVICON PARA O NAVEGADOR VAI AQUI
  icons: {
    icon: '/fav-clone.png', // Caminho para sua imagem na pasta /public
  },

  // Injetando a tag de verificação do Facebook manualmente
  other: {
    'facebook-domain-verification': '10nf38xc0ux482u2qa1a51e5m3ay6q',
  },

  // As tags Open Graph para um bom compartilhamento em redes sociais
  openGraph: {
    title: 'Clone Perfeito',
    description: 'Aprenda a criar um Clone seu com IA e gere ensaios profissionais sem câmera, fotógrafo ou estúdio.',
    url: 'https://www.cloneperfeito.com',
    siteName: 'Clone Perfeito',
    images: [
      {
        url: 'https://www.cloneperfeito.com/images/bg-cp.jpg',
        width: 1200,
        height: 630, // Proporção padrão para compartilhamento
        alt: 'Galeria de retratos hiper-realistas gerados por Inteligência Artificial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

// O resto do seu arquivo layout.js continua igual
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
