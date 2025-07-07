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
  Check,
  Puzzle,
  Briefcase,
  Star,
  Users,
  Target,
  Lightbulb,
  Settings,
  Shield,
  GraduationCap,
  Package,
  Gem,
  DollarSign,
  Euro,
  BookOpen,
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
      title: "Módulo Bônus: Comece Sem Investir (Clone com ChatGPT)",
      description: "Construa seu portfólio do zero e sem custos. Neste módulo, revelo o método para criar um clone e gerar seu primeiro ensaio de forma 100% gratuita, ideal para validar a técnica e conquistar seu primeiro cliente.",
    },
    {
      id: "item-2",
      imageSrc: "/images/modulo-2.jpg",
      title: "Módulo 1: A Base do Seu Negócio de IA",
      description: "Preparamos o terreno para o sucesso. Você vai entender o potencial de mercado, ajustar sua mentalidade e configurar as ferramentas essenciais. Aqui nasce sua nova fonte de renda.",
    },
    {
      id: "item-3",
      imageSrc: "/images/modulo-3.jpg",
      title: "Módulo 2: A Criação do Clone Perfeito",
      description: "O coração do método. Aprenda o passo a passo para selecionar as fotos ideais, treinar a IA e criar um clone hiper-realista do seu cliente. Este é o seu ativo digital.",
    },
    {
      id: "item-4",
      imageSrc: "/images/modulo-4.jpg",
      title: "Módulo 3: Geração de Ensaios de Alto Impacto",
      description: "Transforme o clone em arte. Domine a criação de prompts para gerar ensaios em qualquer cenário. Você terá acesso ao nosso Agente GPT exclusivo para replicar qualquer estilo de imagem com perfeição.",
    },
    {
      id: "item-5",
      imageSrc: "/images/modulo-5.jpg",
      title: "Módulo 4: Estrutura de Vendas e Escala",
      description: "Transforme sua habilidade em lucro. Aprenda a empacotar, precificar e vender seus serviços de forma irresistível. Mostrarei como encontrar clientes e escalar seu negócio.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Scripts (Meta Pixel, Clarity) - Mantidos como no original */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <noscript>{`...`}</noscript>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
              Crie Ensaios com IA em 1 Hora e Fature em Reais, Dólar e Euro
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)]">
              Transforme fotos comuns em ensaios profissionais e crie um novo negócio digital de alta demanda, sem precisar de câmera ou estúdio.
            </p>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto text-lg px-10 py-7 bg-teal-500 hover:bg-teal-600 text-white font-bold shadow-lg transform hover:scale-105 transition-transform">
                  QUERO CRIAR MEU NEGÓCIO DE IA
                </Button>
              </Link>
              <p className="text-base font-medium text-white text-center md:text-left">
                De <span className="line-through">R$157</span> por apenas <span className="font-bold text-xl text-teal-400">R$47</span> à vista
                <br />
                <span className="text-sm">ou 12x de R$5,22.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Antes e Depois Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">A Transformação é Real e Imediata</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
              Veja como fotos comuns de celular se tornam ativos visuais de alto valor que clientes pagam para ter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Antes */}
            <div className="space-y-4">
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-xl font-semibold text-gray-200">O PONTO DE PARTIDA: Fotos amadoras.</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} src={`/images/antes-${i}.jpg`} alt="Foto antes" className="rounded-lg shadow-md aspect-square object-cover" />
                ))}
                <div className="rounded-lg shadow-md aspect-square bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-500 text-center text-sm p-2">Selfies comuns...</p>
                </div>
              </div>
            </div>
            {/* Depois */}
            <div className="space-y-4">
              <div className="bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <p className="text-xl font-semibold text-gray-200">O RESULTADO FINAL: Ensaios profissionais.</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                 {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} src={`/images/depois-${i}.jpg`} alt="Foto depois" className="rounded-lg shadow-lg aspect-square object-cover" />
                ))}
                 <div className="rounded-lg shadow-lg aspect-square bg-teal-500/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mim (Autoridade) Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <img src="/images/gabriel-autoridade.jpg" alt="Gabriel, criador do método Clone Perfeito" className="rounded-lg w-full max-w-sm mx-auto shadow-2xl shadow-teal-500/10" />
            </div>
            <div className="md:col-span-3">
              <p className="text-teal-400 font-bold mb-2">QUEM VAI TE GUIAR</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prazer, sou Gabriel.</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Como profissional de marketing, eu estava cansado de usar fotos de banco de imagem genéricas e da logística cara e demorada de sessões fotográficas. Eu precisava de imagens de alta qualidade, rápido e com custo baixo.
                </p>
                <p>
                  Foi quando mergulhei no universo da IA generativa e descobri uma forma de "clonar" qualquer pessoa e criar ensaios fotográficos ilimitados. Os resultados foram tão impressionantes que transformei isso em um serviço e, agora, em um método.
                </p>
                <p className="font-semibold text-white">
                  O Clone Perfeito não é teoria. É o exato passo a passo que eu uso para criar um negócio lucrativo e que agora está ao seu alcance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Oportunidade Global Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <Globe className="w-12 h-12 text-teal-400 mx-auto mb-4"/>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Quebre Barreiras: Fature em Dólar e Euro</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Este não é apenas um negócio local. É a sua porta de entrada para o mercado global, onde seu serviço tem um valor percebido altíssimo.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-center p-6">
              <h3 className="text-2xl font-bold text-white">Brasil</h3>
              <p className="text-gray-400 mt-2">Venda pacotes de ensaios a partir de</p>
              <p className="text-4xl font-bold text-teal-400 my-4">R$300</p>
              <p className="text-gray-500">Um ótimo valor para o mercado nacional com alta margem de lucro.</p>
            </Card>
            <Card className="bg-teal-900/30 border-2 border-teal-500 text-center p-6 shadow-2xl shadow-teal-500/10 scale-105">
               <p className="text-xs font-bold text-teal-400 tracking-widest mb-2">MAIOR OPORTUNIDADE</p>
              <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">EUA <DollarSign className="w-6 h-6" /></h3>
              <p className="text-gray-300 mt-2">Ofereça os mesmos pacotes por</p>
              <p className="text-4xl font-bold text-teal-300 my-4">$29 USD</p>
              <p className="text-gray-400">Um preço "barato" para eles, que se converte em um lucro excelente para você.</p>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center p-6">
              <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">Europa <Euro className="w-6 h-6" /></h3>
              <p className="text-gray-400 mt-2">Atraia clientes europeus com ensaios por</p>
              <p className="text-4xl font-bold text-teal-400 my-4">€29 EUR</p>
              <p className="text-gray-500">Posicione-se em mercados de alta renda e ganhe em moeda forte.</p>
            </Card>
          </div>
           <p className="text-gray-400 mt-12 max-w-2xl mx-auto">
             No curso, você vai entender como acessar esses mercados através de plataformas de freelancers e marketing digital.
           </p>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Esta Habilidade é um Ativo Poderoso Para...</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <Briefcase className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Designers e Social Medias</h3>
                <p className="text-gray-400">Ofereça um banco de imagens infinito e personalizado para seus clientes, aumentando drasticamente seu ticket médio.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <Target className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Gestores de Tráfego e Agências</h3>
                <p className="text-gray-400">Crie anúncios de altíssima conversão com o rosto dos clientes em qualquer cenário, com velocidade e custo imbatíveis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <Camera className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Fotógrafos</h3>
                <p className="text-gray-400">Adicione um serviço digital inovador ao seu portfólio, como um produto de entrada ou um upsell valioso.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <Star className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Freelancers e Empreendedores</h3>
                <p className="text-gray-400">Comece um novo negócio de baixo custo, alta margem e demanda explosiva no mercado digital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social (Depoimentos) */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">O Método Já Está Gerando Resultados</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-2">
              Veja o que os primeiros alunos estão dizendo sobre o Clone Perfeito.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-md bg-gray-800 border-gray-700 rounded-2xl">
                    <CardContent className="flex justify-center items-center p-2">
                      <img src={`/images/d${num}.jpg`} alt={`Depoimento de aluno ${num}`} className="w-full h-auto rounded-lg"/>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-gray-700 hover:bg-gray-600 text-white border-gray-600" />
            <CarouselNext className="hidden md:flex bg-gray-700 hover:bg-gray-600 text-white border-gray-600" />
          </Carousel>
        </div>
      </section>

      {/* O que você vai aprender na prática */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <GraduationCap className="w-10 h-10 text-teal-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white">O Exato Passo a Passo Para o Lucro</h2>
                <p className="text-lg text-gray-400 mt-2">Isso é tudo que você vai dominar:</p>
            </div>
            <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
                  <Bot className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Criar Clones Digitais Hiper-Realistas</h3>
                    <p className="text-gray-400">O passo a passo para treinar a IA com as fotos de qualquer cliente, garantindo um resultado profissional e idêntico.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
                  <Lightbulb className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Gerar Ensaios Completos com Prompts</h3>
                    <p className="text-gray-400">Acesso a prompts validados e ao nosso Agente GPT exclusivo para extrair o "código" de qualquer imagem de referência.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
                  <Package className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Empacotar e Precificar seu Serviço</h3>
                    <p className="text-gray-400">Aprenda a estruturar pacotes, quanto cobrar e como apresentar essa solução de forma irresistível para fechar vendas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
                  <Settings className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Repetir o Processo de Forma Escalável</h3>
                    <p className="text-gray-400">O método será seu. Replique o processo para dezenas de clientes e transforme a habilidade em um negócio real.</p>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Estrutura do Curso (Módulos) */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">A Estrutura Completa do Clone Perfeito</h2>
            <p className="text-lg text-gray-400 mt-2">Cada módulo foi desenhado para te levar do zero absoluto a um profissional pronto para vender.</p>
          </div>
          <Card className="border-gray-700 bg-gray-800/50">
            <CardContent className="p-4 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {modules.map((module) => (
                  <AccordionItem key={module.id} value={module.id} className="border-b last:border-b-0 border-gray-700">
                    <AccordionTrigger className="text-left text-lg hover:no-underline p-4 text-white">
                      <div className="flex items-center gap-4 w-full">
                        <img src={module.imageSrc} alt={`Capa do ${module.title}`} className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover shadow-sm flex-shrink-0"/>
                        <span className="flex-1 font-semibold">{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-base leading-relaxed p-4 pt-0 pl-24 md:pl-28">
                      {module.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preço e Oferta Final */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800 to-black border border-gray-700 shadow-2xl shadow-teal-500/10">
            <CardContent className="p-8 md:p-12 text-center">
              <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-48 mx-auto mb-6 invert brightness-0" />
              <h2 className="text-3xl font-bold text-white mb-4">Seu Acesso Completo ao Futuro</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Um único ensaio fotográfico para um cliente paga o seu investimento várias vezes. Hoje, você adquire a habilidade para criar um negócio por um valor simbólico.
              </p>
              
              <div className="bg-gray-800 p-6 rounded-lg mb-8 max-w-md mx-auto">
                <p className="text-gray-400">De <span className="line-through">R$157</span> por</p>
                <p className="text-5xl font-extrabold text-white my-2">R$47<span className="text-lg font-normal text-gray-300"> à vista</span></p>
                <p className="text-gray-300">ou 12x de <span className="font-bold text-teal-400">R$5,22</span> no cartão</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto mb-8 text-gray-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-400"/> Acesso vitalício ao curso</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-400"/> Módulo Bônus Gratuito</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-400"/> Agente GPT Exclusivo</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-400"/> Suporte Prioritário</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-400"/> Atualizações Futuras</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-400"/> Acesso à Comunidade</div>
              </div>
              
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button size="lg" className="w-full max-w-md text-lg px-10 py-7 bg-teal-500 hover:bg-teal-600 text-white font-bold shadow-lg transform hover:scale-105 transition-transform">
                  SIM, QUERO GARANTIR MINHA VAGA
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <Shield className="w-24 h-24 text-teal-500 flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-bold text-white">Sua Garantia de Risco Zero</h2>
            <p className="text-lg text-gray-400 mt-4">
              Você tem 7 dias para acessar todo o material. Se por qualquer motivo não for para você, é só pedir o reembolso. Devolveremos 100% do seu dinheiro, sem perguntas. O risco é todo meu.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-700">
              <AccordionTrigger className="text-left text-lg text-white hover:no-underline">Preciso ser expert em tecnologia?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base">Não. O curso foi feito para iniciantes. Ensino o passo a passo de forma clara, do zero. Você só precisa seguir as aulas.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-700">
              <AccordionTrigger className="text-left text-lg text-white hover:no-underline">Funciona com qualquer tipo de pessoa?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base">Sim. O método funciona com homens, mulheres, de qualquer idade ou etnia. O segredo está em seguir as orientações do curso para coletar as fotos certas do cliente.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-gray-700">
              <AccordionTrigger className="text-left text-lg text-white hover:no-underline">Preciso pagar ferramentas caras?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base">Não. A ferramenta principal tem um custo acessível (cerca de R$50 por projeto), que é facilmente coberto no valor que você cobra. Além disso, no bônus, ensinamos um método 100% gratuito para começar.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-gray-700">
              <AccordionTrigger className="text-left text-lg text-white hover:no-underline">Posso fazer tudo pelo celular?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base">Sim. Todo o processo, da criação do clone à geração das imagens, pode ser feito 100% pelo celular, te dando total liberdade.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-gray-700">
              <AccordionTrigger className="text-left text-lg text-white hover:no-underline">Em quanto tempo consigo meu primeiro cliente?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base">Você termina o curso em menos de 2 horas. A partir daí, já terá a habilidade e o portfólio para prospectar. Muitos alunos conseguem o primeiro cliente na mesma semana, pagando o investimento de volta imediatamente.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b-0 border-gray-700">
              <AccordionTrigger className="text-left text-lg text-white hover:no-underline">Terei suporte se tiver dúvidas?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base">Sim. Você terá acesso ao nosso suporte prioritário por e-mail e WhatsApp para qualquer dúvida técnica ou estratégica.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-gray-800 bg-black">
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
