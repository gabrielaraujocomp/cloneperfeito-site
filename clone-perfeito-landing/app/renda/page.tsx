'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ChevronDown, 
  PlayCircle,
  Users,
  BarChart,
  Target,
  BrainCircuit
} from 'lucide-react';

// --- COMPONENTES AUXILIARES ---

const SectionTitle = ({ children, highlight }: { children: React.ReactNode, highlight: string }) => {
  const text = children as string;
  const parts = text.split(highlight);
  
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-center text-white leading-tight"
    >
      {parts[0]}<span className="text-[#EF478C] text-glow">{highlight}</span>{parts[1]}
    </motion.h2>
  );
};

const FaqItem = ({ question, children }: { question: string, children: React.ReactNode }) => (
    <motion.details
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      className="group bg-[#1E1C2A] border border-gray-700/50 rounded-lg"
    >
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
        <span className="font-semibold text-white">{question}</span>
        <ChevronDown className="text-gray-500 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5 text-gray-400 border-t border-gray-700/50">
        <p className="pt-4">{children}</p>
      </div>
    </motion.details>
);

const CtaButton = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <a href="#" className={`inline-block bg-[#EF478C] text-white font-bold py-4 px-10 rounded-lg text-center transition-transform hover:scale-105 shadow-lg shadow-[#EF478C]/20 ${className}`}>
    {children}
  </a>
);


// --- COMPONENTE PRINCIPAL DA PÁGINA ---

export default function Stories10xStylePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };

  const results = [
    { before: '/path-to-your-before-image-1.jpg', after: '/path-to-your-after-image-1.jpg', desc: 'Transformou fotos de celular em um ensaio corporativo e fechou um contrato de R$1.200.' },
    { before: '/path-to-your-before-image-2.jpg', after: '/path-to-your-after-image-2.jpg', desc: 'Criou um portfólio de viagens sem sair de casa e vendeu pacotes de presets por 50 euros.' },
    { before: '/path-to-your-before-image-3.jpg', after: '/path-to-your-after-image-3.jpg', desc: 'Aumentou o engajamento do seu perfil de nutrição em 300% com imagens profissionais diárias.' },
  ];

  return (
    <div className="bg-[#110F18] text-gray-300 font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#583D9C]/30 via-[#110F18]/0 to-[#110F18] -z-0"></div>
      
      <main className="relative z-10">
        
        {/* 1. Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <SectionTitle highlight="ENSAIOS COM IA">CRIE E VENDA ENSAIOS COM IA QUE PARECEM REAIS</SectionTitle>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            Aprenda a habilidade mais lucrativa de 2025: transformar fotos comuns em ensaios profissionais e vender por R$300, R$600 ou mais.
          </p>
          <motion.div {...fadeIn} className="mt-12 max-w-4xl mx-auto bg-[#1E1C2A]/50 border border-gray-700/50 rounded-2xl p-6 md:p-8">
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <Image src="https://images.unsplash.com/photo-1678484893901-b57ffa75b6a7?q=80&w=1200" alt="Exemplo de ensaio gerado por IA" layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircle size={80} className="text-white/80 group-hover:text-white transition-colors group-hover:scale-110" />
              </div>
              <p className="absolute bottom-4 left-4 font-bold text-white text-xl">Assista ao vídeo de apresentação</p>
            </div>
          </motion.div>
        </section>

        {/* 2. O Método */}
        <section className="container mx-auto px-4 py-24">
          <SectionTitle highlight="MÉTODO MAIS PODEROSO">O CLONE PERFEITO É O MÉTODO MAIS PODEROSO PARA CRIAR UMA NOVA FONTE DE RENDA COM IA</SectionTitle>
          <p className="mt-6 text-center max-w-3xl mx-auto text-lg text-gray-400">
            Ensinamos você a criar e monetizar uma habilidade de alto valor que poucos dominam. Depois, mostramos como construir uma oferta irresistível para vender todos os dias.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, title: 'Atrair Clientes Qualificados', desc: 'Aprenda a encontrar pessoas e empresas que pagariam para ter ensaios profissionais.' },
              { icon: BrainCircuit, title: 'Dominar a IA Generativa', desc: 'Mesmo sem saber nada, você vai aprender o passo a passo para gerar imagens ultra-realistas.' },
              { icon: Target, title: 'Criar Ofertas Irresistíveis', desc: 'Receba scripts prontos e estratégias para vender seus pacotes de ensaios facilmente.' }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.6 }} className="text-center p-8 bg-[#1E1C2A] border border-gray-700/50 rounded-2xl">
                <item.icon className="mx-auto text-[#EF478C]" size={40} />
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Prova Social (Antes/Depois) */}
        <section className="py-24">
          <SectionTitle highlight="EFEITO DO CLONE PERFEITO">ESSE É O EFEITO DO CLONE PERFEITO EM NEGÓCIOS REAIS</SectionTitle>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
            {results.map((result, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.6 }} className="bg-white rounded-xl p-1">
                <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                  <div>
                    <p className="font-bold text-xs text-gray-400 mb-2">ANTES: FOTO COMUM</p>
                    <Image src={result.before} alt="Foto Antes" width={400} height={400} className="rounded-md w-full object-cover aspect-square bg-gray-200" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-green-600 mb-2">DEPOIS: ENSAIO COM IA</p>
                    <Image src={result.after} alt="Foto Depois" width={400} height={400} className="rounded-md w-full object-cover aspect-square bg-gray-200" />
                  </div>
                  <p className="text-sm text-gray-700 pt-2 border-t border-gray-200">{result.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CtaButton>QUERO TER RESULTADOS ASSIM</CtaButton>
          </div>
        </section>

        {/* 4. Comparação de Métodos */}
        <section className="container mx-auto px-4 py-24">
          <SectionTitle highlight="NINGUÉM NO MERCADO ENSINA">VOCÊ VAI APRENDER O QUE NINGUÉM NO MERCADO ENSINA</SectionTitle>
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeIn} className="bg-[#1E1C2A] border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white text-center">Método Tradicional</h3>
              <ul className="mt-6 space-y-4 text-gray-400">
                <li className="flex gap-3"><span className="text-red-500">❌</span> Precisa de câmeras e lentes caras (R$5.000+).</li>
                <li className="flex gap-3"><span className="text-red-500">❌</span> Exige conhecimento de fotografia e edição.</li>
                <li className="flex gap-3"><span className="text-red-500">❌</span> Depende de estúdio, locação e logística.</li>
                <li className="flex gap-3"><span className="text-red-500">❌</span> Leva horas ou dias para produzir e entregar.</li>
              </ul>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2, duration: 0.6 }} className="bg-[#1E1C2A] border-2 border-[#EF478C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white text-center">Método Clone Perfeito</h3>
              <ul className="mt-6 space-y-4 text-gray-300">
                <li className="flex gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Não precisa de câmera, apenas um celular.</li>
                <li className="flex gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /> A IA faz 90% do trabalho técnico para você.</li>
                <li className="flex gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Custo de geração baixíssimo (centavos por imagem).</li>
                <li className="flex gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Entrega em menos de 1 hora, de qualquer lugar do mundo.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 5. Conheça o Especialista */}
        <section className="container mx-auto px-4 py-24">
          <SectionTitle highlight="ESPECIALISTA">CONVERSE COM UM ESPECIALISTA</SectionTitle>
          <p className="mt-6 text-center max-w-3xl mx-auto text-lg text-gray-400">
            Ainda tem dúvidas? Nosso time está pronto para tirar todas as suas dúvidas e te ajudar a seguir sua jornada com mais confiança.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <a href="#" className="inline-block bg-green-500 text-white font-bold py-4 px-10 rounded-lg text-center transition-transform hover:scale-105 shadow-lg shadow-green-500/20">
              CONVERSAR NO WHATSAPP
            </a>
            <CtaButton>QUERO ENTRAR NO CLONE PERFEITO</CtaButton>
          </div>
          <div className="mt-24 grid md:grid-cols-5 gap-8 items-center">
            <motion.div {...fadeIn} className="md:col-span-2">
              <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" alt="[Seu Nome]" width={800} height={1000} className="rounded-2xl object-cover" />
            </motion.div>
            <div className="md:col-span-3">
              <h3 className="text-4xl font-bold text-white">[SEU NOME]</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[#1E1C2A] border border-gray-700/50 text-xs px-3 py-1 rounded-full">Criador do Método Clone Perfeito</span>
                <span className="bg-[#1E1C2A] border border-gray-700/50 text-xs px-3 py-1 rounded-full">Especialista em IA Generativa</span>
              </div>
              <p className="mt-6 text-gray-400">
                [Seu Nome] é uma das maiores referências em monetização de Inteligência Artificial no Brasil. Cansado do marketing digital tradicional, ele desenvolveu um método prático que permite qualquer pessoa, mesmo sem conhecimento técnico, criar uma fonte de renda sólida e escalável...
              </p>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="container mx-auto px-4 py-24">
          <SectionTitle highlight="PERGUNTAS FREQUENTES">FAQ - PERGUNTAS FREQUENTES</SectionTitle>
          <div className="mt-16 max-w-3xl mx-auto space-y-4">
            <FaqItem question="Funciona para mim?">Se você quer uma nova fonte de renda, usando uma habilidade de altíssimo valor e baixo custo, sim. Não importa sua idade ou profissão.</FaqItem>
            <FaqItem question="A estratégia Clone Perfeito serve para todos os nichos?">Sim. Advogados, médicos, influencers, arquitetos, coaches... qualquer profissional que precise de uma imagem forte pode ser seu cliente.</FaqItem>
            <FaqItem question="Em quanto tempo começo a ver os resultados?">Você pode aplicar o método e prospectar seu primeiro cliente no mesmo dia. Alunos dedicados fecham a primeira venda na primeira semana.</FaqItem>
            <FaqItem question="Que garantia eu tenho de resultado?">Você tem 7 dias de garantia incondicional. Se não gostar, por qualquer motivo, devolvemos 100% do seu dinheiro. O risco é todo nosso.</FaqItem>
          </div>
          <div className="text-center mt-12">
            <CtaButton>QUERO ENTRAR AGORA COM GARANTIA</CtaButton>
          </div>
        </section>

        {/* 7. Footer */}
        <footer className="border-t border-gray-800/50">
          <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-gray-500">© 2025 Clone Perfeito. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-white">Política de Privacidade</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
