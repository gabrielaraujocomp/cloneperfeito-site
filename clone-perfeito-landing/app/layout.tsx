import type { Metadata } from 'next';
import './globals.css';

// Arquivo: app/layout.js

export const metadata: Metadata = {
  title: 'Clone Perfeito',
  description: 'Aprenda a criar um Clone seu com IA e gere ensaios profissionais sem câmera, fotógrafo ou estúdio.',
  other: {
    'facebook-domain-verification': '10nf38xc0ux482u2qa1a51e5m3ay6q',
  },
  openGraph: {
    title: 'Clone Perfeito',
    description: 'Aprenda a criar um Clone seu com IA e gere ensaios profissionais sem câmera, fotógrafo ou estúdio.',
    url: 'https://www.cloneperfeito.com',
    siteName: 'Clone Perfeito',
    images: [
      {
        url: 'https://www.cloneperfeito.com/images/bg-cp.jpg',
        width: 1200,
        height: 630,
        alt: 'Galeria de retratos hiper-realistas gerados por Inteligência Artificial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* ✅ CORREÇÃO: O caminho agora inclui /images/ */}
        <link rel="icon" href="/images/fav-clone.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/fav-clone.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
