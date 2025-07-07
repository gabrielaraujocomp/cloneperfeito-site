import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

// --- COMPONENTES DE UI REUTILIZÁVEIS ---

/**
 * Cria um título de seção padronizado para manter a consistência visual.
 */
const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
    {children}
  </h2>
);

// --- DADOS DA PÁGINA (Centralizados para fácil manutenção) ---

const visualTestimonials = [
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

export default function CompletePage() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans antialiased">
      <main className="relative isolate overflow-hidden">
        {/* Efeito de fundo com gradiente */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8000ff] to-[#3300ff] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>

        {/* Container principal para centralizar o conteúdo */}
        <div className="max-w-5xl mx-auto px-6 space-y-24 md:space-y-32">

          {/* === Cabeçalho e CTA Principal === */}
          <header className="pt-24 pb-12 sm:pt-32 text-center space-y-8">
            <Image
              src="/images/logocp.svg"
              alt="Logo Clone Perfeito"
              width={80}
              height={80}
              className="h-20 w-20 mx-auto"
              priority
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              🚨 Se você busca uma forma <span className="text-cyan-400">rápida e prática</span> de fazer dinheiro com algo novo...
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              ...então pare tudo e leia essa página até o fim. Porque se você entender o que vou te mostrar agora, sua vida pode mudar completamente — e não estou exagerando.
            </p>
            <Link
                href="#"
                className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              Quero criar meu clone! [ Apenas R$97 ]
            </Link>
          </header>

          {/* === Seção de Depoimentos em Texto === */}
          <section>
            <SectionTitle>Dá uma olhada no que algumas pessoas estão fazendo 👇</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <blockquote className="text-gray-300">
                  “Fechei meu primeiro pacote com uma gringa por $49 usando só o script que ele dá. Nem precisei aparecer.”
                </blockquote>
                <footer className="mt-4 text-sm text-gray-500">— Lucas, 24 anos</footer>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <blockquote className="text-gray-300">
                  “Eu nunca editei uma imagem na vida. Mesmo assim gerei um ensaio meu, postei no Instagram e uma menina do Canadá me chamou. Fechei por $39 em dois dias.”
                </blockquote>
                <footer className="mt-4 text-sm text-gray-500">— Mari, 19 anos</footer>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <blockquote className="text-gray-300">
                  “Fiz 6 vendas no primeiro mês. Uma delas foi um pacote de €59. Tudo só usando os exemplos e mensagens do curso.”
                </blockquote>
                <footer className="mt-4 text-sm text-gray-500">— Caio, 27 anos</footer>
              </div>
            </div>
          </section>

          {/* === Seção da Oportunidade === */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white">Deixa eu te perguntar…</h2>
            <p className="mt-4 text-lg text-gray-400">
              Quantas vezes você já ficou com aquela sensação de: “Se eu tivesse entrado nisso quando ainda era novidade… hoje estaria ganhando dinheiro fácil com isso.”
            </p>
            <div className="mt-8 max-w-2xl mx-auto text-gray-400 text-left space-y-3 border-l-2 border-cyan-500 pl-6">
              <p>Lembra de quando começaram os primeiros vídeos no TikTok?</p>
              <p>Ou quando as pessoas começaram a vender na Shopee e ganharam rios de dinheiro?</p>
              <p>Ou quando a galera começou a usar o ChatGPT e virou referência só porque aprendeu antes?</p>
            </div>
            <p className="mt-8 text-2xl font-semibold text-white">
              Pois é. <span className="text-cyan-400">Essa página aqui é exatamente esse momento.</span>
            </p>
            <p className="mt-2 text-xl font-semibold text-white">A diferença? É que dessa vez você chegou a tempo.</p>
          </section>

          {/* === Seção Quem Sou Eu === */}
          <section>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">G</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Antes de mais nada: quem sou eu para te falar isso?</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Meu nome é Gabriel, e nos últimos meses, eu vivi uma obsessão silenciosa. Descobri uma ferramenta de IA que gera imagens fotográficas com realismo assustador. Mas não me contentei. Fucei cada configuração, testei, errei dezenas de vezes... até descobrir um conjunto de técnicas que transformam essas imagens em ensaios dignos de capa de revista.
                </p>
                <p className="mt-4 font-semibold text-white">Foi aí que nasceu o Clone Perfeito.</p>
              </div>
            </div>
          </section>

          {/* === Seção O que é o Clone Perfeito === */}
          <section>
            <SectionTitle>O que é o <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Clone Perfeito</span>?</SectionTitle>
            <p className="mt-4 text-center text-lg text-gray-400 max-w-3xl mx-auto">É um método completo, passo a passo, onde eu ensino você a:</p>
            <ul className="mt-10 max-w-2xl mx-auto space-y-4">
              <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Criar ensaios de fotos ultra-realistas com IA (sem saber nada de design).</span></li>
              <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Usar configurações secretas que desbloqueiam qualidade absurda nas imagens.</span></li>
              <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Fazer prospecção ativa no Instagram, com scripts prontos.</span></li>
              <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Montar pacotes de ensaio e precificar de forma inteligente.</span></li>
              <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Vender em reais, dólares e euros.</span></li>
              <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>E principalmente: transformar tudo isso numa fonte de renda real.</span></li>
            </ul>
          </section>
          
          {/* === Seção dos Módulos do Curso === */}
          <section>
            <SectionTitle>📚 O caminho completo, passo a passo</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <Link href="#" key={index} className="block group">
                  <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 group-hover:border-cyan-400/50 transition-all shadow-lg group-hover:shadow-cyan-500/10">
                    <Image src={module.src} alt={module.alt} width={800} height={450} className="w-full h-auto" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* === Seção da Galeria de Alunos === */}
          <section>
            <SectionTitle>🖼️ O que você vai ser capaz de criar</SectionTitle>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-800 shadow-md">
                  <Image src={image.src} alt={image.alt} width={500} height={700} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </section>
          
          {/* === Seção de Depoimentos Visuais === */}
          <section>
            <SectionTitle>💬 Mais provas de quem já está no campo de batalha</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visualTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 p-1.5 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                  <div className="overflow-hidden rounded-lg">
                    <Image src={testimonial.src} alt={testimonial.alt} width={500} height={500} className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* === Seção de FAQ === */}
          <section>
            <SectionTitle>❓ Perguntas Frequentes</SectionTitle>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                  <h3 className="text-lg font-semibold text-white">Isso é um curso de inteligência artificial?</h3>
                  <p className="mt-2 text-gray-400">Não. É um método prático de renda com IA. Você aprende a gerar ensaios e vender como serviço visual.</p>
              </div>
              <div>
                  <h3 className="text-lg font-semibold text-white">Preciso saber programar, editar ou ser designer?</h3>
                  <p className="mt-2 text-gray-400">Nada disso. Tudo é passo a passo. Qualquer pessoa consegue seguir.</p>
              </div>
              <div>
                  <h3 className="text-lg font-semibold text-white">Tenho que aparecer ou ter seguidores?</h3>
                  <p className="mt-2 text-gray-400">Não. Você pode usar um perfil anônimo e as estratégias de prospecção funcionam com 0 seguidores.</p>
              </div>
              <div>
                  <h3 className="text-lg font-semibold text-white">Quanto eu gasto depois que compro?</h3>
                  <p className="mt-2 text-gray-400">A única despesa é criar seu clone com IA, que custa $10 dólares (explicado no curso). Depois disso, só reinvestir das próprias vendas.</p>
              </div>
            </div>
          </section>

          {/* === CTA Final === */}
          <section className="text-center pb-24 md:pb-32">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-green-500 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Agora é com você.</h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                    O Clone Perfeito é o tipo de oportunidade que daqui a 6 meses vai estar em todo lugar. Mas hoje, ainda é você quem chega primeiro.
                </p>
                <div className="pt-4">
                  <Link
                      href="#"
                      className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
                  >
                    🔥 Garanta seu acesso por apenas R$97
                  </Link>
                </div>
            </div>
          </section>
        </div>

        {/* === Rodapé === */}
        <footer className="text-center py-12 border-t border-gray-800">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Clone Perfeito. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}
