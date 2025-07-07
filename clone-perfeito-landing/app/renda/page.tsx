import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

// --- COMPONENTES DE UI REUTILIZÁVEIS ---

/**
 * Cria um título de seção padronizado para manter a consistência visual.
 * @param {string} icon - O emoji a ser usado como ícone.
 * @param {ReactNode} children - O texto do título.
 */
const SectionTitle = ({ icon, children }: { icon: string; children: ReactNode }) => (
  <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
    <span className="mr-3">{icon}</span>
    {children}
  </h2>
);

// --- DADOS DA PÁGINA (Centralizados para fácil manutenção) ---

const testimonials = [
  { src: '/images/d1.jpg', alt: 'Depoimento de aluno 1' },
  { src: '/images/d2.jpg', alt: 'Depoimento de aluno 2' },
  { src: '/images/d3.jpg', alt: 'Depoimento de aluno 3' },
  { src: '/images/d4.jpg', alt: 'Depoimento de aluno 4' },
  { src: '/images/d5.jpg', alt: 'Depoimento de aluno 5' },
  { src: '/images/d6.jpg', alt: 'Depoimento de aluno 6' },
  { src: '/images/d7.jpg', alt: 'Depoimento de aluno 7' },
];

const galleryImages = [
  { src: '/images/gerada-1.jpg', alt: 'Foto de ensaio gerada por IA 1' },
  { src: '/images/gerada-2.jpg', alt: 'Foto de ensaio gerada por IA 2' },
  { src: '/images/gerada-3.jpg', alt: 'Foto de ensaio gerada por IA 3' },
  { src: '/images/gerada-4.jpg', alt: 'Foto de ensaio gerada por IA 4' },
  { src: '/images/gerada-5.jpg', alt: 'Foto de ensaio gerada por IA 5' },
  { src: '/images/gerada-6.jpg', alt: 'Foto de ensaio gerada por IA 6' },
  { src: '/images/gerada-7.jpg', alt: 'Foto de ensaio gerada por IA 7' },
  { src: '/images/gerada-8.jpg', alt: 'Foto de ensaio gerada por IA 8' },
];

const modules = [
  { src: '/images/modulo-1.jpg', alt: 'Módulo 1 do curso Clone Perfeito' },
  { src: '/images/modulo-2.jpg', alt: 'Módulo 2 do curso Clone Perfeito' },
  { src: '/images/modulo-3.jpg', alt: 'Módulo 3 do curso Clone Perfeito' },
  { src: '/images/modulo-4.jpg', alt: 'Módulo 4 do curso Clone Perfeito' },
  { src: '/images/modulo-5.jpg', alt: 'Módulo 5 do curso Clone Perfeito' },
];

// --- COMPONENTE PRINCIPAL DA PÁGINA ---

export default function GithubStylePage() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans antialiased">
      <main className="relative isolate overflow-hidden">
        {/* Efeito de fundo com gradiente */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8000ff] to-[#3300ff] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>

        {/* Container principal para centralizar o conteúdo */}
        <div className="max-w-5xl mx-auto px-6">

          {/* === Cabeçalho e CTA Principal === */}
          <header className="py-24 sm:py-32 text-center space-y-8">
            <Image
              src="/images/logocp.svg"
              alt="Logo Clone Perfeito"
              width={80}
              height={80}
              className="h-20 w-20 mx-auto"
              priority
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Pessoas comuns faturando em <span className="text-cyan-400">dólar, euro e real</span> com IA.
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Descubra o método inédito que ensina a criar e vender ensaios fotográficos hiper-realistas para o mundo todo, mesmo que você seja um completo iniciante.
            </p>
            <Link
                href="#"
                className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              Quero criar meu clone! [ Apenas R$97 ]
            </Link>
          </header>

          {/* === Seção de Depoimentos === */}
          <section className="py-16 md:py-24">
            <SectionTitle icon="💬">Aprovação máxima. Veja o que dizem.</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 p-1.5 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.alt}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === Seção da Galeria de Alunos === */}
          <section className="py-16 md:py-24">
            <SectionTitle icon="🖼️">O que você vai ser capaz de criar</SectionTitle>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-800 shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={700}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* === Seção dos Módulos do Curso === */}
          <section className="py-16 md:py-24">
            <SectionTitle icon="📚">O caminho completo, passo a passo</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <Link href="#" key={index} className="block group">
                  <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 group-hover:border-cyan-400/50 transition-all shadow-lg group-hover:shadow-cyan-500/10">
                      <Image
                        src={module.src}
                        alt={module.alt}
                        width={800}
                        height={450}
                        className="w-full h-auto"
                      />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* === CTA Final === */}
          <section className="py-24 sm:py-32 text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-green-500 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Pronto para começar?</h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                    Essa é a sua chance de entrar em um mercado novo, com alta demanda e pouca concorrência. Chegue primeiro.
                </p>
                <div className="pt-4">
                  <Link
                      href="#"
                      className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
                  >
                    🔥 Garanta seu acesso agora!
                  </Link>
                </div>
            </div>
          </section>
        </div>

        {/* === Rodapé === */}
        <footer className="text-center py-12">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Clone Perfeito. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}
