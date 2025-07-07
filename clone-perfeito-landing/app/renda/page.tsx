import React from 'react';
import Image from 'next/image'; // Usado para otimização de imagens
import { 
  Camera, 
  Film, 
  BookOpen, 
  MessageSquare, 
  HelpCircle, 
  Shield, 
  ChevronRight, 
  CheckCircle,
  ArrowRight,
  BrainCircuit,
  Mail,
  Globe,
  Gift
} from 'lucide-react';

// --- COMPONENTES AUXILIARES PARA MANTER O CÓDIGO LIMPO ---

// Componente para o Card de Depoimento
const TestimonialCard = ({ name, role, quote, imgSrc }: { name: string, role: string, quote: string, imgSrc: string }) => (
  <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#1F1F1F] flex flex-col">
    <p className="text-gray-300 italic flex-grow">"{quote}"</p>
    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#1F1F1F]">
      <Image src={imgSrc} alt={name} width={48} height={48} className="rounded-full object-cover" />
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

// Componente para o Item do FAQ (usando <details> para não precisar de JS)
const FaqItem = ({ question, children }: { question: string, children: React.ReactNode }) => (
  <details className="group bg-[#1A1A1A] rounded-lg border border-[#1F1F1F] p-4 cursor-pointer">
    <summary className="flex items-center justify-between font-semibold text-white list-none">
      {question}
      <ChevronRight className="transform transition-transform duration-300 group-open:rotate-90" />
    </summary>
    <div className="mt-4 text-gray-300">
      {children}
    </div>
  </details>
);

// --- COMPONENTE PRINCIPAL DA PÁGINA ---

export default function ClonePerfeitoPage() {
  return (
    <div className="bg-[#0D0D0D] text-white font-sans antialiased">
      {/* 1. Navbar Fixa */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <Camera size={20} />
            <span>Clone Perfeito</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#apresentacao" className="hover:text-white transition-colors">🎥 Apresentação</a>
            <a href="#ensaios" className="hover:text-white transition-colors">🖼️ Ensaios</a>
            <a href="#metodo" className="hover:text-white transition-colors">📚 O que você aprende</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">💬 Depoimentos</a>
            <a href="#faq" className="hover:text-white transition-colors">❓ FAQ</a>
          </div>
          <a href="#cta-final" className="hidden sm:inline-block border border-white text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-white hover:text-black">
            Quero Começar
          </a>
        </div>
      </nav>

      <main id="top" className="pt-[60px]">

        {/* 2. Hero Section */}
        <section id="apresentacao" className="min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a]/30 to-[#0D0D0D]">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="text-[#3DFF8D]">#</span> Crie Ensaios Profissionais com IA
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
                Venda por R$300, R$600 ou mais — direto do seu quarto, com IA.
              </p>
              <ul className="mt-6 space-y-2 text-left inline-block">
                <li className="flex items-center gap-2"><CheckCircle size={20} className="text-[#3DFF8D]" /> Sem câmera</li>
                <li className="flex items-center gap-2"><CheckCircle size={20} className="text-[#3DFF8D]" /> Sem estúdio</li>
                <li className="flex items-center gap-2"><CheckCircle size={20} className="text-[#3DFF8D]" /> Sem seguidores</li>
              </ul>
              <div className="mt-8">
                <a href="#cta-final" className="inline-block bg-[#3DFF8D] text-black font-bold py-3 px-6 rounded-xl text-lg w-full sm:w-auto max-w-[280px] text-center shadow-lg shadow-green-500/10 transition-transform hover:scale-105">
                  Quero Começar Agora – R$47
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://images.unsplash.com/photo-1678484893901-b57ffa75b6a7?q=80&w=800&auto=format&fit=crop"
                alt="Exemplo de ensaio gerado por IA"
                width={450}
                height={550}
                className="rounded-xl object-cover shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        </section>

        {/* 3. Apresentação Pessoal */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-bold text-3xl sm:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Antes de tudo, deixa eu te mostrar o que tá rolando agora...
            </h2>
            <p className="text-lg text-gray-300">
              Você provavelmente nunca ouviu falar de mim. Mas eu tô te mostrando algo que ainda pouca gente conhece:
            </p>
            <div className="bg-[#121212] p-8 rounded-2xl mt-10 text-left text-lg sm:text-xl border border-[#1F1F1F]">
              <p>
                👉 Pessoas comuns criando <strong>ensaios profissionais</strong> usando <strong>IA</strong>, e vendendo esses ensaios por <strong>R$300 a R$1000</strong> cada.
              </p>
              <p className="mt-4">
                Sem estúdio, sem câmera, sem sair de casa.
              </p>
            </div>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-6">
          <hr className="border-t border-[#1F1F1F]" />
        </div>

        {/* 4. Galeria de Prova Visual */}
        <section id="ensaios" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-bold text-3xl sm:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Veja com seus olhos: Ensaios reais gerados com o Clone Perfeito
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400', after: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400', price: 247 },
                { before: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=400', after: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400', price: 300 },
                { before: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400', after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400', price: 280 },
              ].map((ensaio, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative aspect-[3/4]">
                    {/* Imagem do "DEPOIS" */}
                    <Image src={ensaio.after} alt={`Ensaio Depois ${index + 1}`} layout="fill" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    {/* Overlay do "ANTES" */}
                    <div className="absolute top-2 left-2 bg-black/60 p-2 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-semibold mb-1">ANTES</p>
                      <Image src={ensaio.before} alt={`Ensaio Antes ${index + 1}`} width={80} height={100} className="rounded-md object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-sm font-semibold">Transformado com IA</p>
                    </div>
                  </div>
                  <div className="p-4 text-center bg-[#1F1F1F]">
                    <p className="font-mono text-sm text-gray-300">vendido por R${ensaio.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="mt-16 text-center text-xl italic text-gray-300 max-w-3xl mx-auto">
              "Se isso impressionou você, imagine o impacto nos seus futuros clientes."
            </blockquote>
          </div>
        </section>

        {/* 5. Explicação do Método */}
        <section id="metodo" className="py-20 px-6 bg-[#121212]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
                <h2 className="font-bold text-3xl sm:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>O que é o Clone Perfeito?</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                É um treinamento 100% prático, onde você aprende uma habilidade extremamente lucrativa:
                </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#2a2a2a]">
                    <CheckCircle className="text-[#3DFF8D] mb-4" size={32} />
                    <h3 className="font-semibold text-xl mb-2">Criar clones digitais realistas</h3>
                    <p className="text-gray-400">Aprenda o passo a passo para treinar a IA com fotos simples e gerar um avatar digital idêntico.</p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#2a2a2a]">
                    <Film className="text-[#3DFF8D] mb-4" size={32} />
                    <h3 className="font-semibold text-xl mb-2">Gerar ensaios com qualidade de estúdio</h3>
                    <p className="text-gray-400">Domine os prompts e técnicas para criar qualquer estilo de ensaio: corporativo, casual, temático e mais.</p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#2a2a2a]">
                    <Globe className="text-[#3DFF8D] mb-4" size={32} />
                    <h3 className="font-semibold text-xl mb-2">Vender para o Brasil, EUA e Europa</h3>
                    <p className="text-gray-400">Receba scripts e estratégias prontas para prospectar clientes em qualquer lugar do mundo.</p>
                </div>
            </div>
          </div>
        </section>

        {/* 6. Simulação de Ganhos */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center font-bold text-3xl sm:text-4xl mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>Agora vamos falar de grana? 💡</h2>
            <div className="bg-[#1A1A1A] border-2 border-[#3DFF8D] rounded-2xl p-8 shadow-2xl shadow-green-900/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-lg">
                  <p>📦 <strong>Pacote com 15 fotos</strong> → vendido por <strong>R$300 a R$600</strong></p>
                  <p>💰 <strong>Custo de geração:</strong> ~R$50</p>
                  <p>⌛ <strong>Tempo de produção:</strong> menos de 1 hora</p>
                  <p className="mt-4 pt-4 border-t border-[#1F1F1F]">Fazendo só <strong>3 por semana</strong> = <span className="text-[#3DFF8D] font-bold">R$3.000+/mês</span></p>
                  <p>Fazendo <strong>1 por dia</strong> = <span className="text-[#3DFF8D] font-bold">R$5.000+/mês</span></p>
                </div>
                <div className="mt-8 md:mt-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="border-b border-[#1F1F1F]">
                        <tr>
                          <th className="p-2 font-semibold">N° Ensaios/Mês</th>
                          <th className="p-2 font-semibold">Ganho Total</th>
                          <th className="p-2 font-semibold">Tempo Total</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr>
                          <td className="p-2">4</td>
                          <td className="p-2">R$1.200</td>
                          <td className="p-2">~4h</td>
                        </tr>
                        <tr className="bg-[#1F1F1F]/50">
                          <td className="p-2">8</td>
                          <td className="p-2">R$2.400</td>
                          <td className="p-2">~8h</td>
                        </tr>
                        <tr>
                          <td className="p-2">15</td>
                          <td className="p-2">R$4.500</td>
                          <td className="p-2">~15h</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Scripts + Estratégias */}
        <section className="py-20 px-6 bg-[#121212]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center font-bold text-3xl sm:text-4xl mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Você recebe tudo pronto pra começar HOJE:
            </h2>
            <div className="space-y-4">
              <FaqItem question="🧠 Estratégia de prospecção nacional e internacional">
                <p>Receba o mapa completo para encontrar clientes no Instagram, LinkedIn e plataformas de freelancer, tanto no Brasil quanto no exterior.</p>
              </FaqItem>
              <FaqItem question="📩 Mensagens prontas (é só copiar e colar)">
                <p>Templates de abordagem testados e validados para você apenas adaptar com o nome do cliente e enviar. Aumente sua taxa de resposta em até 70%.</p>
              </FaqItem>
              <FaqItem question="🌍 Tática para vender em dólar e euro">
                <p>Aprenda como configurar pagamentos internacionais e adaptar sua oferta para o mercado estrangeiro, multiplicando seus ganhos.</p>
              </FaqItem>
              <FaqItem question="🎁 Truque de venda promocional para os 3 primeiros clientes">
                <p>Uma estratégia simples para conseguir seus primeiros clientes pagantes em tempo recorde, construindo seu portfólio e gerando prova social.</p>
              </FaqItem>
            </div>
          </div>
        </section>

        {/* 8. Depoimentos */}
        <section id="depoimentos" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-bold text-3xl sm:text-4xl mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Eles aplicaram. Eles lucraram.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard 
                name="João S., 22 anos"
                role="Estudante"
                quote="Fechei dois ensaios em 48h depois de maratonar o curso. Nunca tinha vendido nada online na vida. Surreal."
                imgSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
              />
              <TestimonialCard 
                name="Marina F., 26 anos"
                role="Autônoma"
                quote="Transformei umas selfies minhas em um ensaio 'europeu' como teste. Postei no Instagram e uma amiga que mora na Irlanda comprou. Vendi meu primeiro pacote por 39 euros."
                imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              />
            </div>
          </div>
        </section>

        {/* 9. Garantia */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto bg-[#121212] rounded-2xl p-10 text-center border border-[#1F1F1F]">
            <div className="inline-block p-4 border-2 border-[#3DFF8D] rounded-full">
              <Shield size={48} className="text-[#3DFF8D]" />
            </div>
            <h2 className="mt-6 font-bold text-3xl sm:text-4xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>7 Dias de Garantia Total</h2>
            <p className="mt-4 text-lg text-gray-300">
              Se você entrar, assistir, e por qualquer motivo não achar que valeu cada centavo, eu devolvo 100% do seu dinheiro. Sem letras miúdas. Sem enrolação. O risco é todo meu.
            </p>
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center font-bold text-3xl sm:text-4xl mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              <FaqItem question="❓ Preciso saber mexer com IA?">
                <p>Absolutamente não. O treinamento é desenhado para iniciantes. Mostramos o clique a clique em ferramentas intuitivas. Se você sabe usar um smartphone, você consegue aplicar o método.</p>
              </FaqItem>
              <FaqItem question="❓ Como gero as imagens?">
                <p>Nós ensinamos você a usar as plataformas mais poderosas e custo-efetivas do mercado. Você terá um passo a passo para treinar o modelo e gerar as imagens com prompts que nós fornecemos.</p>
              </FaqItem>
              <FaqItem question="❓ Posso vender para gringo mesmo sem falar inglês?">
                <p>Sim! Entregamos scripts de mensagem em inglês e mostramos como usar ferramentas de tradução para se comunicar. O trabalho é visual, o que quebra a barreira do idioma.</p>
              </FaqItem>
              <FaqItem question="❓ Em quanto tempo vejo resultado?">
                <p>Isso depende da sua dedicação. Alunos dedicados conseguem os primeiros clientes na primeira semana, como você viu nos depoimentos. O método é rápido de aplicar.</p>
              </FaqItem>
              <FaqItem question="❓ E se eu não vender nada?">
                <p>Se você aplicar o método de prospecção que ensinamos e não conseguir fechar nenhum cliente em 30 dias, nós oferecemos uma consultoria individual para analisar seu caso. E claro, você sempre tem a garantia de 7 dias para pedir o reembolso sem questionamentos.</p>
              </FaqItem>
            </div>
          </div>
        </section>
        
        {/* 11. Chamada Final */}
        <section id="cta-final" className="py-20 px-6 text-center bg-gradient-to-t from-[#121212] to-transparent">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bold text-4xl sm:text-5xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Está pronto pra começar?</h2>
            <p className="mt-6 text-lg text-gray-300">
              Você viu o método. Viu os resultados. Viu que é simples e possível. Agora só falta você decidir sair do zero e criar uma nova fonte de renda com a habilidade mais quente do momento.
            </p>
            <a href="#" className="mt-10 inline-block bg-[#3DFF8D] text-black font-bold py-4 px-8 rounded-xl text-xl w-full sm:w-auto shadow-lg shadow-green-500/20 transition-transform hover:scale-105">
              ACESSAR O CLONE PERFEITO – R$47
            </a>
          </div>
        </section>

      </main>

      {/* Botão Fixo no Rodapé */}
      <div className="sticky bottom-0 left-0 right-0 z-40 bg-[#1A1A1A]/90 backdrop-blur-sm border-t border-[#1F1F1F] p-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-center sm:text-left">🧠 Aprenda a lucrar com IA — Comece por R$47</p>
          <a href="#cta-final" className="bg-[#3DFF8D] text-black font-bold py-2 px-6 rounded-lg text-md w-full sm:w-auto text-center flex-shrink-0">
            Começar Agora
          </a>
        </div>
      </div>

      {/* 12. Rodapé */}
      <footer className="bg-[#0A0A0A] py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto text-sm text-gray-400">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Suporte</a>
          </div>
          <p>© 2025 Clone Perfeito™. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
