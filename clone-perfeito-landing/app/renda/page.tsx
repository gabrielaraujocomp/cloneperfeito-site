import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

// --- COMPONENTES DE UI REUTILIZÁVEIS (Estilo Notion) ---

/**
 * Cria um título de seção padronizado com um ícone.
 * @param {string} icon - O emoji a ser usado como ícone.
 * @param {ReactNode} children - O texto do título.
 */
const SectionTitle = ({ icon, children }: { icon: string; children: ReactNode }) => (
  <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-slate-100 mb-8 md:mb-12">
    <span>{icon}</span>
    {children}
  </h2>
);

/**
 * Renderiza o botão principal de Call-to-Action (CTA) da página.
 */
const MainCTAButton = () => (
    <Link href="#" className="block group w-full">
        <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-lg px-6 py-4 transition-all duration-200 group-hover:border-slate-600 group-hover:text-slate-100">
            <span>👉</span>
            <div>
                <span className="underline decoration-slate-500 group-hover:decoration-slate-400 transition-all">
                    Quero criar meu clone!
                </span>
                <span className="text-slate-400"> [ Apenas R$97 no mês de julho ]</span>
            </div>
        </div>
    </Link>
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

export default function NotionStylePage() {
  return (
    <div className="bg-slate-950 text-slate-300 antialiased selection:bg-cyan-300/20">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-24 md:space-y-32">
        
        {/* === Cabeçalho e CTA Principal === */}
        <header className="flex flex-col items-center text-center space-y-8">
          <Image
            src="/images/logocp.svg"
            alt="Logo Clone Perfeito"
            width={80}
            height={80}
            className="h-16 w-16 md:h-20 md:w-20"
            priority // Carrega o logo mais rápido
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 leading-tight tracking-tight">
            Pessoas comuns estão faturando em dólar com IA.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-slate-400 leading-relaxed">
            E você pode ser o próximo, mesmo que não saiba nada de tecnologia. Aprenda a criar e vender ensaios fotográficos hiper-realistas para o mundo todo, sem sair de casa.
          </p>
          <div className="w-full max-w-2xl pt-4">
             <MainCTAButton />
          </div>
        </header>

        {/* === Seção de Depoimentos === */}
        <section>
          <SectionTitle icon="💬">O que eles dizem</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* === Seção da Galeria de Alunos === */}
        <section>
          <SectionTitle icon="🖼️">O que você vai criar</SectionTitle>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-slate-800">
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
        <section>
          <SectionTitle icon="📚">O caminho, passo a passo</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {modules.map((module, index) => (
              <Link href="#" key={index} className="block group">
                 <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 group-hover:border-slate-700 transition-all shadow-md group-hover:shadow-xl group-hover:shadow-slate-900/50">
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
        <section className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Pronto para começar?</h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Essa é a sua chance de entrar em um mercado novo, com alta demanda e pouca concorrência. Chegue primeiro.
            </p>
            <div className="w-full max-w-2xl mx-auto pt-4">
             <MainCTAButton />
          </div>
        </section>

      </main>
      
      {/* === Rodapé === */}
      <footer className="text-center py-12">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Clone Perfeito. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
