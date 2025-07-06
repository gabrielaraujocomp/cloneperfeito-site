import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Quote,
  MessageCircle,
  Sparkles,
  Bot,
  Camera,
  Globe,
  Wallet,
  Check,
  Package,
  DollarSign,
  Star,
  ArrowRight,
  BookOpen,
  Brain,
  Shield,
  GraduationCap,
  Gem,
  Users,
  Target,
  Briefcase,
  Lightbulb,
  Settings,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7]
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]

  const modules = [
    {
      id: "item-1",
      imageSrc: "/images/modulo-1.jpg",
      title: "Módulo Bônus: Começo Rápido (Custo Zero)",
      description: "Construa seu portfólio sem gastar R$1. Neste módulo, você aprende a criar seu primeiro ensaio de forma 100% gratuita com o ChatGPT. A maneira perfeita de conseguir seu primeiro cliente sem nenhum investimento.",
    },
    {
      id: "item-2",
      imageSrc: "/images/modulo-2.jpg",
      title: "Módulo 1: A Base do Negócio",
      description: "Entenda o mercado, a mentalidade correta e configure as ferramentas profissionais. Preparamos o terreno para você não apenas aprender uma técnica, mas construir uma fonte de renda.",
    },
    {
      id: "item-3",
      imageSrc: "/images/modulo-3.jpg",
      title: "Módulo 2: A Criação do Clone Perfeito",
      description: "O coração do método. Aprenda o passo a passo para treinar a IA com as fotos do seu cliente, criando um 'ativo digital' hiper-realista que será a base para todos os ensaios.",
    },
    {
      id: "item-4",
      imageSrc: "/images/modulo-4.jpg",
      title: "Módulo 3: A Fábrica de Ensaios",
      description: "Domine a arte dos prompts. Gere ensaios em qualquer cenário imaginável e use nosso Agente GPT exclusivo para extrair o estilo de qualquer imagem de referência, entregando resultados que impressionam.",
    },
    {
      id: "item-5",
      imageSrc: "/images/modulo-5.jpg",
      title: "Módulo 4: Transformando Habilidade em Dinheiro",
      description: "A técnica não vale nada sem vendas. Aprenda a empacotar, precificar e vender seu serviço. Mostro como abordar clientes e fechar seus primeiros projetos de R$300, R$600 ou mais.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 overflow-x-hidden">
      {/* Scripts (Meta, Clarity) */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>
      {/* (Seus scripts de rastreamento permanecem aqui) */}

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
              Sua Fábrica de Ensaios Fotográficos com IA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)]">
              Transforme simples selfies em ensaios profissionais e venda um serviço de alta demanda sem precisar de câmera, estúdio ou experiência. Aprenda o método em <strong>menos de 2 horas.</strong>
            </p>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg font-bold px-10 py-7 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/50 transform hover:scale-105 transition-transform">
                  <Sparkles className="mr-3 h-6 w-6" />
                  QUERO FATURAR COM IA
                </Button>
              </Link>
              <p className="font-medium text-white text-center md:text-left">
                De <span className="line-through text-red-400">R$157</span> por apenas <span className="font-bold text-xl text-cyan-400">R$47</span>
                <br />
                <span className="text-sm">(ou 12x de R$5,22)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Clone Perfeito */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                De Habilidade Desconhecida a Negócio Lucrativo
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                O <strong className="text-cyan-400">Clone Perfeito</strong> não é mais um curso teórico. É um treinamento prático, direto ao ponto, que te entrega uma habilidade para colocar dinheiro no bolso: criar e vender ensaios fotográficos com Inteligência Artificial.
              </p>
              <div className="bg-gray-800 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-200">
                  Em menos de 2 horas, você domina a técnica e já pode vender seu primeiro ensaio. Simples assim.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <Cpu className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white text-lg">Crie o Clone Digital</h3>
                  <p className="text-gray-400">Aprenda a treinar a IA com o rosto de qualquer pessoa e gerar um clone hiper-realista.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <Camera className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white text-lg">Produza Ensaios Ilimitados</h3>
                  <p className="text-gray-400">Gere imagens profissionais em qualquer cenário, estilo ou profissão que seu cliente desejar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <Wallet className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white text-lg">Estruture e Venda</h3>
                  <p className="text-gray-400">Entenda como empacotar, precificar e vender esse serviço para lucrar de verdade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* NOVA SEÇÃO: Conheça seu Mentor */}
      <section id="mentor" className="py-20 px-4 bg-gray-950">
          <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Conheça seu Mentor</h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
                      Eu não vou te ensinar apenas a usar uma ferramenta. Vou te entregar o caminho que eu mesmo trilhei.
                  </p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-cyan-900/10">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-1 flex justify-center">
                          {/* SUBSTITUA PELA SUA FOTO */}
                          <img src="/images/sua-foto.jpg" alt="Gabriel, criador do Clone Perfeito" className="w-48 h-48 rounded-full object-cover border-4 border-cyan-500 shadow-lg"/>
                      </div>
                      <div className="md:col-span-2 space-y-4 text-center md:text-left">
                          <h3 className="text-2xl font-bold text-white">Gabriel M.</h3>
                          <p className="text-cyan-400 font-semibold">Especialista em IA e Negócios Digitais</p>
                          <p className="text-gray-400 leading-relaxed">
                              "Depois de anos no marketing digital, percebi que a maior barreira para empreendedores e criadores de conteúdo era a produção de imagens de qualidade. Era caro, demorado e complexo. Quando a IA generativa surgiu, eu mergulhei de cabeça para encontrar uma solução. O <strong className="text-white">Clone Perfeito</strong> é o resultado disso: um método simplificado que eu testei e validei para criar um negócio de baixo custo e alta lucratividade. Agora, estou compartilhando esse atalho com você."
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Prova Social (Depoimentos) */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">O Método Já Foi Validado. Veja os Resultados.</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">Alunos comuns estão transformando essa habilidade em fonte de renda.</p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                    <img src={`/images/d${num}.jpg`} alt={`Depoimento ${num}`} className="w-full h-auto"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-gray-800 hover:bg-gray-700 text-white border-gray-600" />
            <CarouselNext className="hidden md:flex bg-gray-800 hover:bg-gray-700 text-white border-gray-600" />
          </Carousel>
        </div>
      </section>

      {/* Potencial de Faturamento (Brasil) */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Seu Plano de Ação para Faturar no Brasil</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">Isso não é sobre sorte. É um plano de negócios. Veja o potencial de lucro com apenas UM cliente.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border border-gray-800 text-center flex flex-col">
              <CardContent className="p-8 flex-grow flex flex-col">
                <h3 className="font-bold text-xl text-cyan-400">Pacote Essencial</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">(Ex: 15 fotos para LinkedIn)</p>
                <p className="text-gray-400 mb-4 flex-grow">Ideal para profissionais que buscam uma imagem de autoridade rápida.</p>
                <p className="text-gray-400">Preço de venda: <strong className="text-white text-lg">R$ 197,00</strong></p>
                <p className="text-xs text-gray-500">Custo da ferramenta: ~R$ 50,00</p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="font-bold text-green-400 text-2xl">~R$ 147,00 de Lucro</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-2 border-cyan-500 text-center shadow-2xl shadow-cyan-900/20 flex flex-col">
              <CardContent className="p-8 flex-grow flex flex-col">
                <h3 className="font-bold text-xl text-cyan-400">Pacote Conteúdo</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">(Ex: 40 fotos, 2 estilos)</p>
                <p className="text-gray-400 mb-4 flex-grow">Perfeito para criadores de conteúdo que precisam de volume e variedade para redes sociais.</p>
                <p className="text-gray-400">Preço de venda: <strong className="text-white text-lg">R$ 347,00</strong></p>
                <p className="text-xs text-gray-500">Custo da ferramenta: ~R$ 50,00</p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="font-bold text-green-400 text-2xl">~R$ 297,00 de Lucro</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border border-gray-800 text-center flex flex-col">
              <CardContent className="p-8 flex-grow flex flex-col">
                <h3 className="font-bold text-xl text-cyan-400">Retainer Mensal</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">(Ex: 20 fotos novas/mês)</p>
                <p className="text-gray-400 mb-4 flex-grow">O jogo dos profissionais. Forneça imagens sob demanda para clientes fixos.</p>
                <p className="text-gray-400">Preço de venda: <strong className="text-white text-lg">R$ 400-900/mês</strong></p>
                <p className="text-xs text-gray-500">Custo da ferramenta: ~R$ 50,00/mês</p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="font-bold text-green-400 text-2xl">~R$ 850/mês de Lucro</p>
                  <p className="text-sm text-gray-500">(por cliente)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Expanda suas Fronteiras */}
      <section id="global" className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Expanda suas Fronteiras: Fature em Dólar e Euro</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
              Por que se limitar ao Brasil? O custo da ferramenta é em dólar, mas seu lucro pode ser também. A demanda por esse serviço é GLOBAL.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-950 p-8 rounded-2xl border border-gray-800">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">A Lógica é Simples e Poderosa</h3>
              <p className="text-gray-400">
                Para clientes nos EUA e Europa, pagar <strong className="text-white">$29 Dólares</strong> ou <strong className="text-white">€29 Euros</strong> por um pacote de fotos profissionais é um valor irrisório, quase um cafezinho.
              </p>
              <p className="text-gray-400">
                Para você, no Brasil, essa mesma venda de <strong className="text-cyan-400">$29 USD</strong> se transforma em aproximadamente <strong className="text-green-400">R$150</strong>. Um lucro altíssimo por um trabalho que você faz em minutos.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-white">Onde vender?</p>
                <p className="text-gray-400">Plataformas como Upwork, Fiverr, ou prospectando diretamente no LinkedIn e Instagram de profissionais gringos.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/images/global-mockup.png" alt="Exemplo de venda internacional" className="rounded-lg shadow-2xl shadow-black" />
            </div>
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto space-y-16">
          <div>
            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <p className="text-xl font-semibold text-white"><strong>O PONTO DE PARTIDA:</strong> Fotos amadoras que não conectam e não vendem.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map(i => <img key={i} src={`/images/antes-${i}.jpg`} className="aspect-[3/4] rounded-xl object-cover" alt="Foto amadora"/>)}
            </div>
          </div>
          <div>
            <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <p className="text-xl font-semibold text-white"><strong>O RESULTADO FINAL:</strong> Imagens de alto impacto que geram autoridade e lucro.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {[1, 2, 3, 4, 5].map(i => <img key={i} src={`/images/depois-${i}.jpg`} className="aspect-[3/4] rounded-xl object-cover" alt="Foto profissional com IA"/>)}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Esta Oportunidade é Para Você, Se...</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <Briefcase className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-300"><strong className="text-white">Designer ou Social Media</strong> que quer parar de sofrer com fotos ruins de clientes e oferecer um upsell de alto valor.</p>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <Target className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-300"><strong className="text-white">Gestor de Tráfego ou Agência</strong> que precisa de criativos infinitos com o rosto do cliente para escalar campanhas.</p>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <Camera className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-300"><strong className="text-white">Fotógrafo</strong> que deseja adicionar um serviço digital inovador, sem custos de deslocamento ou equipamento.</p>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <Star className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-300"><strong className="text-white">Empreendedor ou Freelancer</strong> buscando um novo negócio com baixo custo, alta margem e demanda explosiva.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura do Curso */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">A Estrutura Completa do Clone Perfeito</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">Um passo a passo lógico para te levar do zero absoluto à sua primeira venda.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-2">
            <Accordion type="single" collapsible defaultValue="item-3" className="w-full">
              {modules.map((module) => (
                <AccordionItem key={module.id} value={module.id} className="border-b border-gray-800 last:border-b-0">
                  <AccordionTrigger className="text-left text-lg hover:no-underline p-4 text-white hover:bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-4 w-full">
                      <img src={module.imageSrc} alt={module.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0"/>
                      <span className="flex-1 font-semibold">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed p-4 pt-0 pl-24">
                    {module.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final e Oferta */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500 shadow-2xl shadow-cyan-900/30">
            <CardContent className="p-8 md:p-12 text-center">
              <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-48 mx-auto mb-6 brightness-0 invert" />
              <h2 className="text-3xl font-bold text-white mb-4">Seu Kit Completo para Faturar com IA</h2>
              <div className="max-w-md mx-auto space-y-3 text-left my-8">
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">Acesso vitalício ao método Clone Perfeito</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300"><strong>Bônus:</strong> Módulo de início rápido com Custo Zero</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300"><strong>Bônus:</strong> Agente GPT exclusivo para extrair prompts</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">Suporte direto por e-mail e WhatsApp</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">Acesso a todas as atualizações futuras</span></div>
              </div>
              <p className="text-gray-400 mb-6">Um único ensaio vendido já paga seu investimento e ainda te dá lucro. O risco é não começar.</p>
              
              <div className="bg-gray-950/50 p-6 rounded-lg">
                <p className="text-gray-400">De <span className="line-through text-red-400">R$157</span> por Investimento Único de:</p>
                <h3 className="text-5xl font-bold text-cyan-400 my-2">R$47</h3>
                <p className="text-gray-300">ou 12x de R$ 5,22 no cartão</p>
              </div>

              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full mt-8 inline-block">
                <Button size="lg" className="w-full text-lg font-bold px-10 py-7 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/50 transform hover:scale-105 transition-transform">
                  <Sparkles className="mr-3 h-6 w-6" />
                  DESTRAVAR MEU ACESSO IMEDIATO
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <Shield className="w-24 h-24 text-green-400 flex-shrink-0" />
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">Sua Garantia Blindada de 7 Dias</h2>
                <p className="text-gray-400 mt-2 leading-relaxed">
                    Acesse todo o curso, explore o método e veja o potencial com seus próprios olhos. Se em 7 dias, por qualquer motivo, você achar que não é para você, basta um único e-mail para ter 100% do seu dinheiro de volta. Sem perguntas, sem burocracia. O risco é todo meu.
                </p>
            </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Adicionei mais FAQs relevantes */}
            <AccordionItem value="item-1" className="bg-gray-900 border border-gray-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline">Preciso ser designer ou entender de tecnologia?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0">Absolutamente não. O curso é 100% para iniciantes. Eu te guio com cliques e comandos simples. Se você sabe usar o celular, você consegue aplicar o método.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-gray-900 border border-gray-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline">Posso fazer tudo pelo celular?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0">Sim. Todo o processo, da criação à entrega para o cliente, pode ser feito 100% pelo celular, te dando total liberdade para trabalhar de onde quiser.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-gray-900 border border-gray-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline">Vou ter que gastar muito com ferramentas?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0">Não. A ferramenta principal tem um custo-benefício excelente (cerca de R$50 para um volume enorme de imagens), que é facilmente coberto na sua primeira venda. Além disso, o módulo bônus te ensina a começar com CUSTO ZERO.</AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4" className="bg-gray-900 border border-gray-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline">As fotos ficam realmente boas e realistas?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0">Sim. O realismo depende de seguir o método de treinamento que ensino no curso. Seguindo o passo a passo, os resultados são hiper-realistas e impressionam qualquer cliente. Os exemplos na página foram todos criados com o método.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-gray-900 border border-gray-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline">Terei suporte se tiver dúvidas?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0">Com certeza. Você terá acesso ao nosso suporte prioritário por e-mail e WhatsApp para tirar qualquer dúvida técnica ou estratégica.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-32 mx-auto mb-6 brightness-0 invert" />
          <p className="text-gray-500 mb-2">© 2025 Clone Perfeito. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-sm mb-4">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="https://..." target="_blank" className="hover:text-cyan-400 transition-colors">Política de Privacidade</Link>
            <Link href="https://..." target="_blank" className="hover:text-cyan-400 transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
