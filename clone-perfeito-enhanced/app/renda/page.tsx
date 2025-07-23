"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Rocket,
  Check,
  Sparkles,
  Shield,
  Smartphone,
  UserPlus,
  MessageSquare,
  CheckCircle2,
  DollarSign,
  Zap,
  Clock,
  Award,
  UserCheck,
  XCircle,
  Video,
  Star,
  ArrowRight,
  Play,
  Users,
  Target,
  Lightbulb,
  Timer,
  Gift,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function ClonePerfeitoEnhanced() {
  const [isBarVisible, setIsBarVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [1, 2, 3, 4, 5, 6, 7]
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]
  const beforeImages = [1, 2, 3, 4, 5]
  const afterImages = [1, 2, 3, 4, 5, 6, 7]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setIsBarVisible(true)
      } else {
        setIsBarVisible(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const courseModules = [
    {
      title: "[1] Fundamentos do Clone Perfeito",
      description:
        "Boas-vindas, visão geral do método e a preparação do ambiente para você criar seu clone em minutos.",
      duration: "15 min",
      icon: Play,
    },
    {
      title: "[2] Preparando Seu Clone Perfeito",
      description: "O segredo para escolher as fotos certas e o passo a passo para treinar a IA com seu rosto.",
      duration: "25 min",
      icon: Users,
    },
    {
      title: "[3] Gerando Ensaios Fotográficos Incríveis",
      description:
        "Como usar nossos Agentes GPT e prompts prontos para criar imagens de nível profissional em qualquer estilo.",
      duration: "30 min",
      icon: Target,
    },
    {
      title: "[4] Módulo de Vídeos com IA",
      description: "Transforme suas melhores fotos em vídeos cinematográficos e dinâmicos para Reels e TikTok.",
      status: "soon",
      duration: "20 min",
      icon: Video,
    },
    {
      title: "[5] Finalização e Qualidade 4K",
      description: "Aprenda a dar o toque final nos seus vídeos, aumentando a qualidade para um impressionante 4K.",
      status: "soon",
      duration: "15 min",
      icon: Sparkles,
    },
  ]

  const bonuses = [
    { text: "WorkShop Ensaio Grátis com ChatGPT", value: "R$57", icon: Brain },
    { text: "Suporte Individual", value: "R$47", icon: Lightbulb },
    { text: "Agente GPT Gerador de Prompts", value: "R$47", icon: Brain },
    { text: "Agente GPT Extrator de Prompts", value: "R$47", icon: Lightbulb },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Nenhum Conhecimento Prévio",
      description: "O método é 100% visual. Se você sabe usar redes sociais, está pronto.",
    },
    {
      icon: Smartphone,
      title: "Direto do Celular",
      description: "Não precisa de computador potente. Todo o processo pode ser feito pelo seu celular.",
    },
    {
      icon: UserPlus,
      title: "Suporte Pessoal",
      description: "Qualquer dúvida, você fala diretamente comigo no WhatsApp para ter ajuda.",
    },
  ]

  const stats = [
    { number: "150+", label: "Alunos Satisfeitos", icon: Users },
    { number: "4.9/5", label: "Avaliação Média", icon: Star },
    { number: "1h", label: "Suporte Rápido", icon: Timer },
  ]

  const faqItems = [
    {
      value: "item-1",
      question: "É muito difícil? Preciso entender de tecnologia?",
      answer:
        "De forma alguma! Essa é a maior vantagem do método. Ele foi desenhado para ser 100% visual e guiado, passo a passo. Se você sabe usar redes sociais e seguir instruções simples, você está mais do que preparado. Não precisa de nenhum conhecimento técnico.",
    },
    {
      value: "item-2",
      question: "Preciso de um computador da NASA?",
      answer:
        "Definitivamente não. Todo o processamento pesado é feito online, nos servidores das ferramentas que usamos. Seu computador ou celular serve apenas para acessar os sites. Se ele consegue rodar vídeos no YouTube sem travar, ele é perfeito para o curso.",
    },
    {
      value: "item-3",
      question: "Quanto tempo até eu ver minhas primeiras fotos prontas?",
      answer:
        "O aprendizado é rápido: você entende todo o método em menos de 1 hora. O treinamento da IA com suas fotos leva algumas horas (mas ela trabalha sozinha, você pode ir fazer outra coisa). Depois que sua 'versão digital' estiver pronta, você cria um ensaio completo, com dezenas de fotos, em menos de 20 minutos.",
    },
    {
      value: "item-4",
      question: "Terei outros custos além do valor do curso?",
      answer:
        "Sim, e somos 100% transparentes sobre isso. Para criar sua 'versão digital' (o chamado clone) na plataforma profissional que ensinamos, há um custo único de $10 dólares. Esse valor é pago diretamente à plataforma e cria seu modelo de forma permanente. Com ele, você pode gerar milhares de fotos, tornando o custo-benefício absurdo.",
    },
    {
      value: "item-5",
      question: "As fotos ficam realmente parecidas comigo?",
      answer:
        "Sim, o realismo é o ponto mais impressionante. O segredo está na técnica exata que ensinamos para selecionar as fotos de treino. Seguindo esse passo, o resultado são imagens que as pessoas ao seu redor jurarão que foram feitas em um estúdio profissional.",
    },
    {
      value: "item-6",
      question: "E se eu me sentir travado ou com dúvidas?",
      answer:
        "Impossível ficar travado. Ao entrar, você ganha acesso ao nosso suporte pessoal e exclusivo para alunos. Qualquer pergunta, qualquer dificuldade, nossa equipe estará a uma mensagem de distância para te ajudar a ter os melhores resultados possíveis.",
    },
  ]

  return (
    <>
      {/* Tracking Scripts */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1198526755291146');fbq('track', 'PageView');`,
        }}
      />
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "sb2ap4cj31");`,
        }}
      />

      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden min-h-screen">
        {/* Floating WhatsApp Button - Mobile Optimized */}
        <Link
          href="https://api.whatsapp.com/send?phone=5511978610717&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Clone%20Perfeito,%20pode%20me%20ajudar?"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 text-sm font-semibold group min-w-0"
          style={{ backgroundColor: "rgba(34, 197, 94, 0.9)" }}
        >
          <MessageSquare className="w-5 h-5 group-hover:animate-bounce flex-shrink-0" />
          <span className="hidden sm:block whitespace-nowrap">Precisa de ajuda?</span>
        </Link>

        {/* Sticky Top Bar - Mobile Optimized */}
        <div
          className={`fixed top-0 left-0 right-0 z-40 border-b transition-transform duration-300 ${isBarVisible ? "translate-y-0" : "-translate-y-full"}`}
          style={{
            backgroundColor: "rgba(17, 24, 39, 0.8)",
            borderColor: "rgba(71, 85, 105, 0.5)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between p-2 sm:p-3 px-3 sm:px-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <Badge
                variant="secondary"
                className="text-red-300 text-xs whitespace-nowrap"
                style={{ backgroundColor: "rgba(239, 68, 68, 0.2)", borderColor: "rgba(239, 68, 68, 0.3)" }}
              >
                <Clock className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">Oferta </span>Desconto Temporário!
              </Badge>
              <span className="text-xs sm:text-sm font-medium text-white hidden md:block truncate">
                Garanta seu acesso antes que o preço suba.
              </span>
            </div>
            <Link href="#checkout" className="flex-shrink-0">
              <Button
                size="sm"
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold text-xs px-3 py-2 sm:px-4 sm:py-2 shadow-lg whitespace-nowrap"
              >
                  <span className="hidden sm:inline">QUERO </span>GARANTIR ACESSO
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-24 space-y-16 sm:space-y-24 md:space-y-32">
          {/* Hero Section - Mobile Optimized */}
          <section className="space-y-6 sm:space-y-8 text-center">
            <div className="space-y-4 sm:space-y-6">
              <Image
                src="/images/cplogowhite.png"
                alt="Logo Clone Perfeito"
                width={180}
                height={40}
                className="mx-auto h-auto opacity-90 w-auto max-w-[180px] sm:max-w-[200px]"
              />

              <div className="relative">
                <div
                  className="absolute -inset-2 sm:-inset-4 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
                  }}
                ></div>
                <Image
                  src="/images/bg-cp.jpg"
                  alt="Galeria de retratos hiper-realistas gerados por Inteligência Artificial"
                  width={1200}
                  height={600}
                  className="relative w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                  style={{ borderColor: "rgba(71, 85, 105, 0.5)", borderWidth: "1px" }}
                  priority
                />
              </div>
            </div>

             <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-2">
              <h1 className="text-center font-bold text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Aprenda a transformar fotos comuns em ensaios fotográficos profissionais com Inteligência Artificial<br />
  <mark className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold">
    sem precisar de câmera, fotógrafo ou estúdio.
  </mark>
</h1>





              <p className="text-base sm:text-xl md:text-2xl text-slate-300 leading-relaxed px-2">
                Em menos de 2 horas você aprende a criar ensaios de fotos hiper-realistas com Inteligência Artificial usando só o celular ou computador. Já tem aluno cobrando 39 euros por pacote (e vendendo também em dólar e real).
              </p>

              {/* Stats - Mobile Optimized */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto pt-4 sm:pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-1 sm:mb-2">
                      <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-slate-400 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero CTA Button - Mobile Optimized */}
            <div className="pt-6 sm:pt-8 px-4">
              <Link href="#checkout">
                <Button
                  size="lg"
                  className="relative w-full sm:w-auto text-base sm:text-xl font-bold px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:from-red-600 hover:via-pink-600 hover:to-purple-600 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full overflow-hidden group min-h-[56px] sm:min-h-auto"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to right, rgba(251, 191, 36, 0.2), rgba(251, 146, 60, 0.2))",
                    }}
                  ></div>
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce flex-shrink-0" />
                  <span className="relative z-10 text-center leading-tight">
                    <span className="block sm:inline">Quero Aprender a Criar Ensaios</span>
                    <span className="block sm:inline sm:ml-1">Profissionais</span>
                  </span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </Button>
              </Link>
            </div>
          </section>

          {/* Product Description - Mobile Optimized */}
          <section>
            <Card
              className="rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                borderColor: "rgba(71, 85, 105, 0.5)",
                backdropFilter: "blur(4px)",
              }}
            >
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="text-center space-y-6 sm:space-y-8">
                  <div
                    className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 sm:py-3"
                    style={{
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                      borderWidth: "1px",
                    }}
                  >
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <span className="text-blue-300 font-semibold text-sm sm:text-base">O que é o Clone Perfeito?</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
                    Seu curso completo para dominar a criação de
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      {" "}
                      ensaios fotográficos com IA
                    </span>
                  </h2>

                  {/* Interactive Cards Grid - Mobile Optimized */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                    <Card
                      className="hover:border-blue-400/50 transition-all duration-300 group"
                      style={{
                        background: "linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(6, 182, 212, 0.2))",
                        borderColor: "rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            borderColor: "rgba(59, 130, 246, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <Video className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Curso em Vídeo</h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          Passo a passo visual e detalhado para você não se perder em nenhum momento
                        </p>
                      </CardContent>
                    </Card>

                    <Card
                      className="hover:border-green-400/50 transition-all duration-300 group"
                      style={{
                        background: "linear-gradient(135deg, rgba(20, 83, 45, 0.2), rgba(5, 150, 105, 0.2))",
                        borderColor: "rgba(34, 197, 94, 0.3)",
                      }}
                    >
                      <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: "rgba(34, 197, 94, 0.2)",
                            borderColor: "rgba(34, 197, 94, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Suporte Direto</h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          Acesso pessoal via WhatsApp para tirar todas as suas dúvidas
                        </p>
                      </CardContent>
                    </Card>

                    <Card
                      className="hover:border-purple-400/50 transition-all duration-300 group sm:col-span-2 md:col-span-1"
                      style={{
                        background: "linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(219, 39, 119, 0.2))",
                        borderColor: "rgba(168, 85, 247, 0.3)",
                      }}
                    >
                      <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: "rgba(168, 85, 247, 0.2)",
                            borderColor: "rgba(168, 85, 247, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Bônus Exclusivos</h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          Agentes GPT e ferramentas extras para potencializar seus resultados
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Value Proposition - Mobile Optimized */}
                  <div
                    className="rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6"
                    style={{
                      background: "linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                      borderColor: "rgba(71, 85, 105, 0.5)",
                      borderWidth: "1px",
                    }}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                      <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Para quem é este curso?</h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-slate-300 text-left">
                              Pessoas que querem <strong className="text-yellow-400">elevar sua imagem pessoal</strong>
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-slate-300 text-left">
                              Empreendedores buscando{" "}
                              <strong className="text-green-400">uma nova fonte de renda</strong>
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-slate-300 text-left">
                              Profissionais que precisam de{" "}
                              <strong className="text-blue-400">fotos de qualidade</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 146, 60, 0.2))",
                            borderColor: "rgba(251, 191, 36, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <Target className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Benefits Grid - Mobile Optimized */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:border-blue-500/50 transition-all duration-300 group"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.4))",
                  borderColor: "rgba(71, 85, 105, 0.5)",
                }}
              >
                <CardContent className="p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                      borderWidth: "1px",
                    }}
                  >
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Problem Section - Mobile Optimized */}
          <section>
            <Card
              className="rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(127, 29, 29, 0.2), rgba(159, 18, 57, 0.2))",
                borderColor: "rgba(239, 68, 68, 0.3)",
              }}
            >
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div
                    className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 sm:py-3"
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      borderColor: "rgba(239, 68, 68, 0.3)",
                      borderWidth: "1px",
                    }}
                  >
                    <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                    <span className="text-red-300 font-semibold text-sm sm:text-base">O Problema Real</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2 py-0.5">
                    O que acontece se você <span className="text-red-400">NÃO</span> dominar essa habilidade?
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Personal Impact - Mobile Optimized */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                      Impacto Pessoal
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-lg"
                        style={{
                          backgroundColor: "rgba(15, 23, 42, 0.5)",
                          borderColor: "rgba(239, 68, 68, 0.2)",
                          borderWidth: "1px",
                        }}
                      >
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base text-white font-semibold">Fotos amadoras para sempre</p>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Continuará dependendo de selfies mal iluminadas e ângulos ruins
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-lg"
                        style={{
                          backgroundColor: "rgba(15, 23, 42, 0.5)",
                          borderColor: "rgba(239, 68, 68, 0.2)",
                          borderWidth: "1px",
                        }}
                      >
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base text-white font-semibold">
                            Imagem profissional comprometida
                          </p>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Perderá oportunidades por não ter fotos de qualidade profissional
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-lg"
                        style={{
                          backgroundColor: "rgba(15, 23, 42, 0.5)",
                          borderColor: "rgba(239, 68, 68, 0.2)",
                          borderWidth: "1px",
                        }}
                      >
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base text-white font-semibold">Gastos com fotógrafos</p>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            R$ 300-800 por sessão sempre que precisar de fotos novas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Impact - Mobile Optimized */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                      <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                      Impacto Financeiro
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-lg"
                        style={{
                          backgroundColor: "rgba(15, 23, 42, 0.5)",
                          borderColor: "rgba(239, 68, 68, 0.2)",
                          borderWidth: "1px",
                        }}
                      >
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base text-white font-semibold">Oportunidade perdida</p>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Mercado de R$ 1.500-5.000/mês que você não vai acessar
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-lg"
                        style={{
                          backgroundColor: "rgba(15, 23, 42, 0.5)",
                          borderColor: "rgba(239, 68, 68, 0.2)",
                          borderWidth: "1px",
                        }}
                      >
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base text-white font-semibold">Dependência de terceiros</p>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Sempre precisará pagar outros para criar seu conteúdo visual
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-lg"
                        style={{
                          backgroundColor: "rgba(15, 23, 42, 0.5)",
                          borderColor: "rgba(239, 68, 68, 0.2)",
                          borderWidth: "1px",
                        }}
                      >
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base text-white font-semibold">Ficará para trás</p>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Enquanto outros lucram com IA, você continuará no método antigo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action - Mobile Optimized */}
                <div
                  className="rounded-xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4"
                  style={{
                    background: "linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                    borderColor: "rgba(71, 85, 105, 0.5)",
                    borderWidth: "1px",
                  }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Não deixe essa oportunidade passar!</h3>
                  <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Enquanto você hesita, outros já estão dominando essa habilidade e{" "}
                    <strong className="text-green-400">lucrando com ela</strong>. O mercado de IA está explodindo e quem
                    entrar agora sai na frente.
                  </p>
                  <div className="pt-2 sm:pt-4">
                    <Link href="#checkout">
                      <Button className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold px-6 sm:px-8 py-3 rounded-full min-h-[48px]">
                        Quero Sair na Frente Agora
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Before/After Transformation - Mobile Optimized */}
          <section>
            <Card
              className="rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                borderColor: "rgba(71, 85, 105, 0.5)",
                backdropFilter: "blur(4px)",
              }}
            >
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-8 sm:space-y-12">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Veja a transformação na prática
                  </h2>
                  <p className="text-base sm:text-xl text-slate-300">
                    De fotos simples para ensaios profissionais em minutos
                  </p>
                </div>

                <div className="space-y-8 sm:space-y-12">
                  {/* Before - Mobile Optimized */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center">
                      <Badge
                        variant="outline"
                        className="text-slate-400 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
                        style={{ borderColor: "rgba(71, 85, 105, 1)" }}
                      >
                        VOCÊ MANDA FOTOS ASSIM...
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                      {beforeImages.map((num) => (
                        <div key={num} className="relative group">
                          <Image
                            src={`/images/antes-${num}.jpg`}
                            alt={`Exemplo de foto de treino ${num}`}
                            width={200}
                            height={200}
                            className="rounded-lg sm:rounded-xl object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
                            style={{ borderColor: "rgba(71, 85, 105, 0.5)", borderWidth: "1px" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow - Mobile Optimized */}
                  <div className="flex justify-center">
                    <div
                      className="rounded-full p-3 sm:p-4"
                      style={{ background: "linear-gradient(to right, rgb(251, 191, 36), rgb(251, 146, 60))" }}
                    >
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  {/* After - Mobile Optimized */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center">
                      <Badge
                        className="text-black font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
                        style={{ background: "linear-gradient(to right, rgb(251, 191, 36), rgb(251, 146, 60))" }}
                      >
                        ✨ E A IA TE ENTREGA ENSAIOS ASSIM ✨
                      </Badge>
                    </div>
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                      <CarouselContent className="-ml-2 sm:-ml-4">
                        {afterImages.map((num) => (
                          <CarouselItem key={num} className="pl-2 sm:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                            <div
                              className="aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden group"
                              style={{ borderColor: "rgba(71, 85, 105, 0.5)", borderWidth: "1px" }}
                            >
                              <Image
  src={`/images/depois-${num}.jpg`}
  alt={`Resultado profissional gerado ${num}`}
  width={300}
  height={400}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>

                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious
                        className="hidden sm:flex text-slate-300 hover:bg-slate-700 hover:text-white"
                        style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", borderColor: "rgba(71, 85, 105, 1)" }}
                      />
                      <CarouselNext
                        className="hidden sm:flex text-slate-300 hover:bg-slate-700 hover:text-white"
                        style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", borderColor: "rgba(71, 85, 105, 1)" }}
                      />
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Course Modules - Mobile Optimized */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                O Que Você Vai Aprender Módulo a Módulo
              </h2>
              <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto">
                Conteúdo estruturado para você sair do zero ao profissional
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {courseModules.map((module, index) => (
                <Card
                  key={index}
                  className={`group transition-all duration-300 hover:scale-[1.02] ${
                    module.status === "soon" ? "border-dashed" : "hover:border-blue-500/50"
                  }`}
                  style={{
                    background:
                      module.status === "soon"
                        ? "linear-gradient(to right, rgba(88, 28, 135, 0.2), rgba(219, 39, 119, 0.2))"
                        : "linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                    borderColor: module.status === "soon" ? "rgba(168, 85, 247, 0.5)" : "rgba(71, 85, 105, 0.5)",
                  }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center`}
                        style={{
                          backgroundColor:
                            module.status === "soon" ? "rgba(168, 85, 247, 0.2)" : "rgba(59, 130, 246, 0.2)",
                          borderColor: module.status === "soon" ? "rgba(168, 85, 247, 0.3)" : "rgba(59, 130, 246, 0.3)",
                          borderWidth: "1px",
                        }}
                      >
                        <module.icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${module.status === "soon" ? "text-purple-400" : "text-blue-400"}`}
                        />
                      </div>

                      <div className="flex-1 space-y-2 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                            {module.title}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {module.duration && (
                              <Badge
                                variant="outline"
                                className="text-slate-400 text-xs"
                                style={{ borderColor: "rgba(71, 85, 105, 1)" }}
                              >
                                <Clock className="w-3 h-3 mr-1" />
                                {module.duration}
                              </Badge>
                            )}
                            {module.status === "soon" && (
                              <Badge
                                className="text-purple-300 text-xs"
                                style={{
                                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                                  borderColor: "rgba(168, 85, 247, 0.3)",
                                }}
                              >
                                Em Breve
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Social Proof - Mobile Optimized */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Alunos Ganhando em DOLÁR, REAL e EURO!
              </h2>
              <p className="text-base sm:text-xl text-slate-400">Veja o que nossos alunos estão conseguindo</p>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 sm:-ml-4">
                {testimonials.map((num) => (
                  <CarouselItem key={num} className="pl-2 sm:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                    <Card
                      className="overflow-hidden hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: "rgba(30, 41, 59, 0.5)", borderColor: "rgba(71, 85, 105, 0.5)" }}
                    >
                      <CardContent className="p-0">
                        <Image
                          src={`/images/d${num}.jpg`}
                          alt={`Depoimento de aluno ${num}`}
                          width={400}
                          height={600}
                          className="w-full h-auto"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="hidden sm:flex text-slate-300 hover:bg-slate-700 hover:text-white"
                style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", borderColor: "rgba(71, 85, 105, 1)" }}
              />
              <CarouselNext
                className="hidden sm:flex text-slate-300 hover:bg-slate-700 hover:text-white"
                style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", borderColor: "rgba(71, 85, 105, 1)" }}
              />
            </Carousel>
          </section>

          {/* Personal Support - Mobile Optimized */}
          <section>
            <Card
              className="rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(20, 83, 45, 0.2), rgba(5, 150, 105, 0.2))",
                borderColor: "rgba(34, 197, 94, 0.3)",
                borderWidth: "2px",
              }}
            >
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(5, 150, 105, 0.2))",
                        borderColor: "rgba(34, 197, 94, 0.3)",
                        borderWidth: "1px",
                      }}
                    >
                      <UserCheck className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Você nunca estará sozinho</h2>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                      Eu, Gabriel, estarei pessoalmente disponível para te ajudar. Qualquer dificuldade ou dúvida sobre
                      o método, você terá meu <strong className="text-white">contato direto no WhatsApp</strong> para
                      garantir que você tenha os melhores resultados possíveis. Aqui o suporte é de verdade.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-green-400">
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">Suporte direto via WhatsApp</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Comparison - Mobile Optimized */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Por que o Clone Perfeito é Diferente?
              </h2>
              <p className="text-base sm:text-xl text-slate-400">Compare e veja a diferença</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Others - Mobile Optimized */}
              <Card
                className="rounded-xl sm:rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(127, 29, 29, 0.2), rgba(159, 18, 57, 0.2))",
                  borderColor: "rgba(239, 68, 68, 0.3)",
                }}
              >
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">
                      <XCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                      Outros Cursos de IA
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Ensinam ferramentas caras e complexas",
                      "Prendem você em mensalidades",
                      "Suporte genérico ou inexistente",
                      "Conteúdo que fica desatualizado",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Clone Perfeito - Mobile Optimized */}
              <Card
                className="rounded-xl sm:rounded-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(6, 182, 212, 0.2))",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  borderWidth: "2px",
                }}
              >
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <Badge
                    className="text-black font-bold text-xs"
                    style={{ background: "linear-gradient(to right, rgb(251, 191, 36), rgb(251, 146, 60))" }}
                  >
                    MELHOR ESCOLHA
                  </Badge>
                </div>
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">
                      <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                      Clone Perfeito
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Usa a melhor ferramenta com custo-benefício",
                      "Acesso com pagamento único",
                      "Suporte pessoal e direto comigo no WhatsApp",
                      "Atualizações constantes e gratuitas para alunos",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Income Opportunity - Mobile Optimized */}
          <section>
            <Card
              className="rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                borderColor: "rgba(71, 85, 105, 0.5)",
              }}
            >
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div
                    className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 sm:py-3"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      borderColor: "rgba(34, 197, 94, 0.3)",
                      borderWidth: "1px",
                    }}
                  >
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    <span className="text-green-300 font-semibold text-sm sm:text-base">Oportunidade de Renda</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Além do Perfil Pessoal:
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {" "}
                      Uma Nova Fonte de Renda
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    A habilidade que você aprende vai muito além de criar suas próprias fotos. As imagens abaixo são{" "}
                    <strong className="text-white">criações de alunos nossos</strong>, que hoje já estão{" "}
                    <strong className="text-yellow-400">vendendo ensaios com IA</strong> para clientes no Brasil e no
                    exterior.
                  </p>
                </div>

                {/* Earning Potential Cards - Mobile Optimized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <Card
                    style={{
                      background: "linear-gradient(135deg, rgba(20, 83, 45, 0.2), rgba(5, 150, 105, 0.2))",
                      borderColor: "rgba(34, 197, 94, 0.3)",
                    }}
                  >
                    <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400">R$ 150-500</div>
                      <div className="text-sm sm:text-base text-white font-semibold">Por ensaio no Brasil</div>
                      <div className="text-xs sm:text-sm text-slate-400">Mercado nacional aquecido</div>
                    </CardContent>
                  </Card>

                  <Card
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(6, 182, 212, 0.2))",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-400">$50-200</div>
                      <div className="text-sm sm:text-base text-white font-semibold">Por ensaio internacional</div>
                      <div className="text-xs sm:text-sm text-slate-400">Mercado americano/europeu</div>
                    </CardContent>
                  </Card>

                  <Card
                    className="sm:col-span-2 md:col-span-1"
                    style={{
                      background: "linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(219, 39, 119, 0.2))",
                      borderColor: "rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-400">€40-150</div>
                      <div className="text-sm sm:text-base text-white font-semibold">Por ensaio na Europa</div>
                      <div className="text-xs sm:text-sm text-slate-400">Alto valor agregado</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Success Stories - Mobile Optimized */}
                <div
                  className="rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.5)",
                    borderColor: "rgba(71, 85, 105, 0.5)",
                    borderWidth: "1px",
                  }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center">Potencial de Ganhos Reais:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-slate-300">
                        <strong className="text-green-400">5 ensaios/mês</strong> = R$ 750 - R$ 2.500 extras
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-slate-300">
                        <strong className="text-blue-400">10 ensaios/mês</strong> = R$ 1.500 - R$ 5.000 extras
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-slate-300">
                        <strong className="text-purple-400">Clientes internacionais</strong> = Até 3x mais valor
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-slate-300">
                        <strong className="text-yellow-400">Trabalho remoto</strong> = Sem limitação geográfica
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {studentCreations.map((num) => (
                    <div
                      key={num}
                      className="aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
                      style={{ borderColor: "rgba(71, 85, 105, 0.5)", borderWidth: "1px" }}
                    >
                      <Image
                        src={`/images/gerada-${num}.jpg`}
                        alt={`Ensaio fotográfico gerado por aluno ${num}`}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Future Updates - Mobile Optimized */}
          <section>
            <Card
              className="rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(219, 39, 119, 0.2))",
                borderColor: "rgba(168, 85, 247, 0.5)",
                borderWidth: "2px",
              }}
            >
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div
                    className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 sm:py-3"
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      borderColor: "rgba(168, 85, 247, 0.3)",
                      borderWidth: "1px",
                    }}
                  >
                    <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    <span className="text-purple-300 font-semibold text-sm sm:text-base">Atualizações Futuras</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Compre Agora e Garanta as Futuras Atualizações
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    O curso está sempre evoluindo. Ao garantir seu acesso hoje, você assegura{" "}
                    <strong className="text-yellow-400">acesso gratuito a todas as novas aulas e módulos</strong> que
                    serão adicionados, como:
                  </p>
                </div>

                <div
                  className="rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.5)",
                    borderColor: "rgba(71, 85, 105, 0.5)",
                    borderWidth: "1px",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      "Anúncios profissionais de produto físico",
                      "Conteúdo viral utilizando VEO 3",
                      "Vídeos teaser para lançamentos/eventos",
                      "Anúncios em vídeo para venda de cursos",
                      "Vídeos de delivery & negócios locais",
                      "Como deixar os vídeos em 4K",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 sm:p-6 text-center"
                  style={{
                    background: "linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(5, 150, 105, 0.1))",
                    borderColor: "rgba(34, 197, 94, 0.3)",
                    borderWidth: "1px",
                  }}
                >
                  <p className="text-lg sm:text-xl text-white font-semibold">
                    Quem entrar <strong className="text-green-400">até o final de Julho</strong> garante tudo isso{" "}
                    <strong className="text-green-400">gratuitamente</strong>, sem nenhum custo adicional.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Pricing Section - Mobile Optimized */}
          <section id="checkout" className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                Sua Oferta Especial de Lançamento
              </h2>
              <p className="text-base sm:text-xl text-slate-400">Acesso completo com desconto exclusivo</p>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div
                className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl"
                style={{
                  background:
                    "linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))",
                }}
              ></div>
              <Card
                className="relative shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))",
                  borderColor: "rgba(71, 85, 105, 0.5)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                  {/* What's Included - Mobile Optimized */}
                  <div
                    className="rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
                    style={{
                      backgroundColor: "rgba(15, 23, 42, 0.5)",
                      borderColor: "rgba(71, 85, 105, 0.5)",
                      borderWidth: "1px",
                    }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3 sm:mb-4">
                      Acesso completo ao ecossistema Clone Perfeito:
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-white font-semibold">
                          Curso Completo Clone Perfeito (R$190)
                        </span>
                      </div>
                      <div
                        className="pt-2 sm:pt-3"
                        style={{ borderTopColor: "rgba(71, 85, 105, 1)", borderTopWidth: "1px" }}
                      >
                        <p className="text-sm sm:text-base text-white font-semibold mb-2 sm:mb-3">
                          E você ainda leva de presente:
                        </p>
                        {bonuses.map((bonus, index) => (
                          <div key={index} className="flex items-center justify-between py-1 sm:py-2">
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                              <div className="flex items-center gap-2 min-w-0">
                                <bonus.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-slate-200 truncate">{bonus.text}</span>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className="text-green-400 text-xs ml-2 flex-shrink-0"
                              style={{ borderColor: "rgba(34, 197, 94, 0.3)" }}
                            >
                              {bonus.value}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing - Mobile Optimized */}
                  <div
                    className="text-center space-y-4 sm:space-y-6 rounded-xl p-6 sm:p-8"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                      borderColor: "rgba(71, 85, 105, 0.5)",
                      borderWidth: "1px",
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-base sm:text-lg text-slate-400">
                        De <span className="line-through text-red-400">R$388</span> por apenas:
                      </p>
                      <div className="space-y-2">
                        <p className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                          12x de R$ 10,03
                        </p>
                        <p className="text-lg sm:text-xl text-white my-0 py-3">
                          ou{" "}
                          <span
                            className="text-black px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-bold"
                            style={{ background: "linear-gradient(to right, rgb(251, 191, 36), rgb(251, 146, 60))" }}
                          >
                            R$ 97 à vista
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">Economia de 75%</span>
                    </div>
                  </div>

                  {/* CTA Button - Mobile Optimized */}
                  <div className="space-y-3 sm:space-y-4">
                    <Link href="https://pay.hotmart.com/P100679254E?off=82l7lflg&checkoutMode=10">
                      <Button
                        size="lg"
                        className="w-full text-base sm:text-xl font-bold px-6 sm:px-10 py-6 sm:py-8 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full min-h-[60px] sm:min-h-auto"
                      >
                        <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-center leading-tight">
                          <span className="block sm:inline">QUERO GARANTIR MEU ACESSO</span>
                          <span className="block sm:inline sm:ml-1">COM DESCONTO</span>
                        </span>
                      </Button>
                    </Link>

                    {/* Trust Badges - Mobile Optimized */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 text-xs sm:text-sm text-slate-400">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        <span>Acesso em qualquer dispositivo</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        <span>Acesso imediato</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        <span>Pagamento 100% seguro</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* WhatsApp Support - Mobile Optimized */}
          <section>
            <Card
              className="rounded-xl sm:rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(20, 83, 45, 0.2), rgba(5, 150, 105, 0.2))",
                borderColor: "rgba(34, 197, 94, 0.3)",
              }}
            >
              <CardContent className="p-6 sm:p-8 sm:py-4">
                <div className="flex flex-col gap-4 sm:gap-6 items-start md:flex-col">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(34, 197, 94, 0.2)",
                        borderColor: "rgba(34, 197, 94, 0.3)",
                        borderWidth: "1px",
                      }}
                    >
                      <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                    </div>
                  </div>
                  <div className="text-center md:text-left space-y-2 sm:space-y-3 my-0 py-0 border-0 px-0 mx-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Ainda tem alguma dúvida?</h3>
                    <p className="text-sm sm:text-lg text-slate-300 leading-relaxed py-3.5 mx-0 px-0">
                      Se você precisa de mais alguma informação, clique no botão e fale diretamente com nossa equipe no
                      WhatsApp. Estamos aqui para ajudar!
                    </p>
                    <Link
                      href="https://api.whatsapp.com/send?phone=5511978610717&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Clone%20Perfeito,%20pode%20me%20ajudar?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto bg-transparent text-green-400 hover:text-green-300 transition-all duration-300 min-h-[48px] my-1.5"
                        style={{ borderColor: "rgba(34, 197, 94, 1)" }}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chamar no WhatsApp
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator style={{ backgroundColor: "rgba(30, 41, 59, 1)" }} />

          {/* About Mentor - Mobile Optimized */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Seu Mentor Nessa Jornada
              </h2>
              <p className="text-base sm:text-xl text-slate-400">Conheça quem vai te guiar nessa transformação</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div
                    className="absolute -inset-2 sm:-inset-4 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"
                    style={{
                      background: "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                    }}
                  ></div>
                  <Image
                    src="/images/eu-gabriel.jpg"
                    alt="Foto de Gabriel, criador do Clone Perfeito"
                    width={300}
                    height={400}
                    className="relative w-full max-w-xs sm:max-w-sm rounded-xl sm:rounded-2xl shadow-2xl"
                    style={{ borderColor: "rgba(71, 85, 105, 0.5)", borderWidth: "1px" }}
                  />
                </div>
              </div>

              <div className="max-w-2xl space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
                <div className="space-y-3 sm:space-y-4">
                  <p>
                    Prazer, sou o <strong className="text-white">Gabriel</strong>. Comecei na Engenharia da Computação,
                    mas minha paixão sempre foi o lado prático e criativo da tecnologia. Nos últimos 4 anos, gerenciei
                    mais de <strong className="text-yellow-400">R$1 milhão</strong> em campanhas visuais e mergulhei de
                    cabeça na IA.
                  </p>
                  <p>
                    Descobri que o poder de criar clones não era só uma ferramenta legal. Era uma{" "}
                    <strong className="text-green-400">nova fonte de renda, acessível e vendável.</strong> Criei o Clone
                    Perfeito para te dar esse mesmo poder.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div
                    className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center"
                    style={{
                      backgroundColor: "rgba(30, 41, 59, 0.5)",
                      borderColor: "rgba(71, 85, 105, 0.5)",
                      borderWidth: "1px",
                    }}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">R$1M+</div>
                    <div className="text-xs sm:text-sm text-slate-400">Em campanhas gerenciadas</div>
                  </div>
                  <div
                    className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center"
                    style={{
                      backgroundColor: "rgba(30, 41, 59, 0.5)",
                      borderColor: "rgba(71, 85, 105, 0.5)",
                      borderWidth: "1px",
                    }}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-blue-400">4 anos</div>
                    <div className="text-xs sm:text-sm text-slate-400">Experiência com IA</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ - Mobile Optimized */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">❓ Perguntas Frequentes</h2>
              <p className="text-base sm:text-xl text-slate-400">Tire suas dúvidas antes de começar</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="rounded-lg sm:rounded-xl px-4 sm:px-6 data-[state=open]:bg-slate-800/70"
                    style={{ backgroundColor: "rgba(30, 41, 59, 0.5)", borderColor: "rgba(71, 85, 105, 0.5)" }}
                  >
                    <AccordionTrigger className="text-white hover:no-underline text-left py-4 sm:py-6 text-base sm:text-lg font-semibold hover:text-blue-300 transition-colors [&[data-state=open]>svg]:rotate-180">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-slate-300 leading-relaxed pb-4 sm:pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Final Quote - Mobile Optimized */}
          <section className="text-center space-y-4 sm:space-y-6 py-12 sm:py-16">
            <Separator style={{ backgroundColor: "rgba(30, 41, 59, 1)" }} className="mb-8 sm:mb-12" />
            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
              <blockquote className="text-lg sm:text-2xl md:text-3xl italic text-slate-400 leading-relaxed px-4">
                "A tecnologia não é nada. O importante é que você tenha fé nas pessoas... se você lhes der ferramentas,
                elas farão coisas maravilhosas com elas."
              </blockquote>
              <cite className="text-base sm:text-lg text-slate-500 not-italic">- Steve Jobs</cite>
            </div>
          </section>

          {/* Footer - Mobile Optimized */}
          <footer
            className="text-center text-slate-500 pt-12 sm:pt-16 space-y-4 sm:space-y-6"
            style={{ borderTopColor: "rgba(30, 41, 59, 1)", borderTopWidth: "1px" }}
          >
            <div className="space-y-2">
              <p className="text-base sm:text-lg">© {new Date().getFullYear()} Clone Perfeito</p>
              <p className="text-xs sm:text-sm">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm">
              <Link href="https://www.notion.so/Pol-tica-de-Privacidade-2239d41a264b80bc9e7ed941f22fc4a5?pvs=25" className="hover:text-white transition-colors hover:underline">
                Política de Privacidade
              </Link>
              <Link href="https://www.notion.so/Termos-de-Uso-2239d41a264b80069db5f927a86d1657?pvs=25" className="hover:text-white transition-colors hover:underline">
                Termos de Uso
              </Link>
            </div>
          </footer>
        </main>
      </div>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1198526755291146&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  )
}
