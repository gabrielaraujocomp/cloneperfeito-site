import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Quote,
  Sparkles,
  Bot,
  Camera,
  Globe,
  Check,
  Star,
  Users,
  Target,
  Lightbulb,
  Shield,
  GraduationCap,
  Package,
  Gem,
  DollarSign,
  Euro,
  BookOpen,
  Palette,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

// Componente para os cards com efeito Glassmorphism
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg ${className}`}>
    {children}
  </div>
);

export default function LandingPageV2() {
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Mais imagens para a galeria
  
  return (
    <div className="min-h-screen bg-zinc-950 text-gray-300 font-sans overflow-x-hidden">
      {/* Scripts (Meta Pixel, Clarity) */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
              Transforme Fotos Comuns em um Negócio de Ensaios com IA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)]">
              Aprenda a criar avatares de IA hiper-realistas e venda ensaios fotográficos ilimitados para clientes no Brasil e no exterior, faturando em Reais, Dólar e Euro.
            </p>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto text-lg px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-lg shadow-pink-600/30 transform hover:scale-105 transition-all duration-300">
                  QUERO CRIAR MEU NEGÓCIO COM IA
                </Button>
              </Link>
              <p className="text-base font-medium text-white text-center md:text-left">
                De <span className="line-through">R$157</span> por apenas <span className="font-bold text-xl text-pink-400">R$47</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim (Autoridade) */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className="md:col-span-2">
                <img src="/images/gabriel-autoridade.jpg" alt="Gabriel, criador do método Clone Perfeito" className="rounded-lg w-full max-w-sm mx-auto shadow-2xl shadow-black/50" />
              </div>
              <div className="md:col-span-3">
                <p className="text-pink-400 font-bold mb-2 tracking-wider">QUEM VAI TE GUIAR</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prazer, sou Gabriel.</h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Cansado de fotos genéricas e do custo de sessões fotográficas, mergulhei em IA para criar imagens de alta qualidade para meus projetos de marketing. O resultado foi tão poderoso que transformei a técnica em um serviço.
                  </p>
                  <p className="font-semibold text-white">
                    O Clone Perfeito não é teoria. É o exato passo a passo, simplificado e sem jargões, que eu uso para criar um negócio lucrativo do zero. E agora, vou te ensinar a fazer o mesmo.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Nova Seção: Galeria de Trabalhos de Alunos */}
      <section className="py-24 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                  <Sparkles className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white">A Criatividade dos Nossos Alunos em Ação</h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
                      De fotos corporativas a avatares para redes sociais, veja a qualidade que você também poderá criar.
                  </p>
              </div>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                  {studentCreations.map((num) => (
                      <div key={num} className="overflow-hidden rounded-lg break-inside-avoid">
                          <img
                              src={`/images/gerada-${num < 9 ? num : 1}.jpg`} // Reutiliza imagens se não tiver 12
                              alt={`Ensaio gerado por aluno`}
                              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                          />
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Nova Seção Global - Totalmente Reformulada */}
      <section 
        className="py-24 px-4 bg-zinc-900 bg-cover bg-center" 
        style={{backgroundImage: "url('/images/world-map-dark.svg')"}}
      >
        <div className="max-w-6xl mx-auto text-center">
            <Globe className="w-12 h-12 text-pink-500 mx-auto mb-4"/>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Seu Estúdio Fotográfico Sem Fronteiras</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
                Aprenda a prospectar clientes no mundo todo e seja pago em moedas que valem 5x mais. Enquanto um serviço de R$300 é um investimento considerável no Brasil, $29 dólares é um valor irrisório para americanos e europeus.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <GlassCard className="p-6">
                    <img src="/flags/br.svg" alt="Bandeira do Brasil" className="w-10 h-10 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">Brasil</h3>
                    <p className="text-gray-400 mt-2">Venda ensaios por</p>
                    <p className="text-4xl font-bold text-white my-3">R$ 300+</p>
                    <p className="text-sm text-gray-500">Alta margem de lucro no mercado nacional.</p>
                </GlassCard>

                <div className="bg-pink-600/20 backdrop-blur-xl border-2 border-pink-500 rounded-2xl shadow-lg p-6 transform md:scale-110 shadow-pink-500/20">
                    <img src="/flags/us.svg" alt="Bandeira dos EUA" className="w-10 h-10 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">EUA</h3>
                    <p className="text-gray-300 mt-2">Ofereça por</p>
                    <p className="text-5xl font-bold text-pink-400 my-2">$29+</p>
                    <p className="text-sm text-gray-400">Um preço de impulso para eles, um lucro gigante para você.</p>
                </div>
                
                <GlassCard className="p-6">
                    <img src="/flags/eu.svg" alt="Bandeira da Europa" className="w-10 h-10 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">Europa</h3>
                    <p className="text-gray-400 mt-2">Atraia clientes por</p>
                    <p className="text-4xl font-bold text-white my-3">€29+</p>
                    <p className="text-sm text-gray-500">Receba em moeda forte e diversifique sua renda.</p>
                </GlassCard>
            </div>
        </div>
      </section>

      {/* Seção de Bônus Dedicada */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <Gem className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Leve 3 Bônus Para Acelerar Seus Resultados</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
                    Além do método completo, você receberá um arsenal de ferramentas para começar a faturar ainda mais rápido.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <GlassCard className="p-8 text-center flex flex-col items-center">
                    <Bot className="w-12 h-12 text-pink-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Bônus #1: Método Gratuito</h3>
                    <p className="text-gray-400">Um módulo completo para criar seu primeiro ensaio usando ferramentas 100% gratuitas. Perfeito para montar seu portfólio sem gastar nada.</p>
                </GlassCard>
                <GlassCard className="p-8 text-center flex flex-col items-center">
                    <Globe className="w-12 h-12 text-pink-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Bônus #2: Prospecção Global</h3>
                    <p className="text-gray-400">Aprenda onde e como encontrar clientes internacionais em plataformas de freelancers, e comece a faturar em Dólar e Euro.</p>
                </GlassCard>
                <GlassCard className="p-8 text-center flex flex-col items-center">
                    <Lightbulb className="w-12 h-12 text-pink-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Bônus #3: Agente de Prompts</h3>
                    <p className="text-gray-400">Um Agente GPT exclusivo que transforma qualquer imagem de referência em um prompt detalhado. Copie o estilo que quiser com um clique.</p>
                </GlassCard>
            </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Uma Habilidade de Alto Valor Para...</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
              <GlassCard className="p-6 flex items-start space-x-4">
                  <Palette className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                      <h3 className="text-lg font-bold text-white">Designers e Social Medias</h3>
                      <p className="text-gray-400">Ofereça um banco de imagens infinito e personalizado, aumentando seu faturamento recorrente.</p>
                  </div>
              </GlassCard>
              <GlassCard className="p-6 flex items-start space-x-4">
                  <Target className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                      <h3 className="text-lg font-bold text-white">Gestores de Tráfego e Agências</h3>
                      <p className="text-gray-400">Crie anúncios de alta conversão com o rosto dos clientes em qualquer cenário, com velocidade e custo imbatíveis.</p>
                  </div>
              </GlassCard>
              <GlassCard className="p-6 flex items-start space-x-4">
                  <Camera className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                      <h3 className="text-lg font-bold text-white">Fotógrafos</h3>
                      <p className="text-gray-400">Adicione um serviço digital inovador ao seu portfólio como um produto de entrada ou um upsell valioso.</p>
                  </div>
              </GlassCard>
              <GlassCard className="p-6 flex items-start space-x-4">
                  <Star className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                      <h3 className="text-lg font-bold text-white">Freelancers e Empreendedores</h3>
                      <p className="text-gray-400">Comece um novo negócio de baixo custo, alta margem e demanda explosiva no mercado digital.</p>
                  </div>
              </GlassCard>
          </div>
        </div>
      </section>

      {/* Estrutura do Curso (Módulos) */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-10 h-10 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">A Estrutura Completa do Clone Perfeito</h2>
            <p className="text-lg text-gray-400 mt-2">Cada módulo foi desenhado para te levar do zero à primeira venda.</p>
          </div>
          <GlassCard className="p-4 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {[{
                    id: "item-1",
                    title: "Módulo 1: A Base do Seu Negócio",
                    description: "Preparamos o terreno para o sucesso. Você vai entender o potencial de mercado, ajustar sua mentalidade e configurar as ferramentas essenciais.",
                  }, {
                    id: "item-2",
                    title: "Módulo 2: Criando o Avatar de IA",
                    description: "O coração do método. Aprenda o passo a passo para selecionar as fotos ideais e treinar a IA para criar uma versão digital hiper-realista do seu cliente.",
                  }, {
                    id: "item-3",
                    title: "Módulo 3: Geração de Ensaios de Alto Impacto",
                    description: "Transforme o avatar em arte. Domine a criação de prompts para gerar ensaios em qualquer cenário e estilo que seu cliente desejar.",
                  }, {
                    id: "item-4",
                    title: "Módulo 4: Vendas, Precificação e Escala",
                    description: "Transforme sua habilidade em lucro. Aprenda a empacotar, precificar e vender seus serviços de forma irresistível para clientes no Brasil e no exterior.",
                }].map((module) => (
                  <AccordionItem key={module.id} value={module.id} className="border-b last:border-b-0 border-white/10">
                    <AccordionTrigger className="text-left text-lg hover:no-underline p-4 text-white font-semibold">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-base leading-relaxed p-4 pt-0">
                      {module.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
        </div>
      </section>

      {/* Preço e Oferta Final */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
            <GlassCard className="p-8 md:p-12 text-center">
                <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-48 mx-auto mb-6 invert brightness-0" />
                <h2 className="text-3xl font-bold text-white mb-4">Seu Acesso Completo ao Negócio do Futuro</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Com um único ensaio vendido a $29 para um cliente gringo, você já lucra 3x o valor do seu investimento hoje.
                </p>
                
                <div className="bg-black/20 p-6 rounded-lg mb-8 max-w-md mx-auto">
                  <p className="text-gray-400">De <span className="line-through">R$157</span> por um pagamento único de</p>
                  <p className="text-5xl font-extrabold text-white my-2">R$47</p>
                  <p className="text-gray-300">ou 12x de <span className="font-bold text-pink-400">R$5,22</span> no cartão</p>
                </div>

                <div className="space-y-3 text-left max-w-sm mx-auto mb-8 text-gray-300">
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-pink-500 flex-shrink-0"/><span>Método Completo com 4 Módulos</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-pink-500 flex-shrink-0"/><span><strong>Bônus:</strong> Método Gratuito com ChatGPT</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-pink-500 flex-shrink-0"/><span><strong>Bônus:</strong> Aula de Prospecção Global</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-pink-500 flex-shrink-0"/><span><strong>Bônus:</strong> Agente de Prompts Exclusivo</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-pink-500 flex-shrink-0"/><span>Acesso Vitalício e Atualizações</span></div>
                </div>
                
                <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                  <Button size="lg" className="w-full max-w-md text-lg px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-lg shadow-pink-600/30 transform hover:scale-105 transition-all duration-300">
                    QUERO GARANTIR MEU ACESSO AGORA
                  </Button>
                </Link>
            </GlassCard>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <Shield className="w-24 h-24 text-pink-500 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-white">Sua Garantia Blindada de 7 Dias</h2>
                <p className="text-lg text-gray-400 mt-4">
                  Acesse todo o material. Se em 7 dias você achar que não é para você, por qualquer motivo, basta pedir o reembolso. Devolveremos 100% do seu dinheiro, sem perguntas. O risco é todo meu.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-white/10 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-40 mx-auto mb-6 invert brightness-0" />
          <p className="text-gray-400 mb-2">© 2024 Clone Perfeito - Todos os direitos reservados.</p>
          <p className="text-gray-500 text-sm mb-4">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
