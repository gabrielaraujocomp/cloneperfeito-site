import type { Metadata } from 'next'
import './globals.css'

// Arquivo: app/layout.js

// Substitua seu objeto metadata por este.
// Esta versão injeta a tag de verificação manualmente para garantir que ela seja renderizada.
export const metadata = {
  // Metadados básicos
  title: 'Clone Perfeito',
  description: 'Aprenda a criar um Clone seu com IA e gere ensaios profissionais sem câmera, fotógrafo ou estúdio.',
  
  // AQUI ESTÁ A CORREÇÃO PRINCIPAL: Injetando a tag manualmente
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
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
