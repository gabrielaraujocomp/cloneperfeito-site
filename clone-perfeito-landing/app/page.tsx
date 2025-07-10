'use client'; // Adiciona a diretiva para indicar que este é um Componente de Cliente

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Brain,
  Wand2,
  Rocket,
  Check,
  Cpu,
  Palette,
  MessageSquare,
  Sparkles,
  Users,
  Film,
  Shield,
  Smartphone,
  Lock,
  LayoutDashboard,
  UserPlus,
  ImageIcon,
  GraduationCap,
  ShoppingBag,
  TrendingUp,
  Lightbulb,
  Camera,
  Briefcase,
  Instagram,
  Star
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function ClonePerfeitoFinalPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7];
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8];

  // ===== LÓGICA PARA A BARRA DE CHECKOUT FLUTUANTE =====
  const [isBarVisible, setIsBarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Aparece ao rolar pra cima, e se não estiver no topo
      if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setIsBarVisible(true);
      } else {
        setIsBarVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  // ===== FIM DA LÓGICA =====


  const modules = [
    { icon: <Rocket className="text-sky-400"/>, title: "Módulo 1: A Preparação", description: "Boas-vindas, a mentalidade certa e como preparar seu ambiente para a criação." },
    { icon: <UserPlus className="text-sky-400"/>, title: "Módulo 2: A Seleção Perfeita", description: "Como escolher e preparar suas melhores fotos para treinar a IA com perfeição." },
    { icon: <Cpu className="text-sky-400"/>, title: "Módulo 3: Treinando seu Clone Digital", description: "O passo a passo para treinar seu clone, entendendo as configurações para um resultado hiper-realista." },
    { icon: <Wand2 className="text-sky-400"/>, title: "Módulo 4: A Mágica dos Prompts", description: "Como usar nossos prompts prontos e criar os seus para gerar qualquer estilo de imagem que você sonhar." },
    { icon: <ImageIcon className="text-sky-400"/>, title: "Módulo 5: Gerando seus Ensaios", description: "Dando vida às suas ideias: gerando dezenas de fotos em cenários e estilos incríveis." },
    { icon: <Sparkles className="text-sky-400"/>, title: "Módulo 6: Toques Finais e Qualidade Máxima", description: "Como aprimorar e exportar suas imagens com qualidade profissional para as redes sociais." }
  ];

  const bonuses = [
    { icon: <Brain />, title: "Bônus 1 – Agente GPT de Prompts Criativos", description: "Gere prompts ultra detalhados com seu nome, estilo e iluminação com 1 clique, mesmo sem ter ideias." },
    { icon: <Film />, title: "Bônus 2 – Crie Ensaios Gratuitamente com o ChatGPT", description: "Aprenda a criar seus primeiros ensaios de forma 100% gratuita para começar a experimentar." },
  ];

  const upcomingUpdates = [
    { icon: <Film className="text-purple-400"/>, title: "Ensaios virando Vídeos com Qualidade Cinematográfica", description: "Você vai aprender a transformar suas fotos em vídeos emocionantes e imersivos, ideais pra reels, TikToks e anúncios. É outro nível de conteúdo." },
    { icon: <Sparkles className="text-purple-400"/>, title: "Conversão dos vídeos em 4K para Instagram e TikTok", description: "Chega de vídeo “meia boca”. Agora você vai aprender a entregar em altíssima qualidade, com aquele visual de estúdio de cinema direto do seu notebook." },
    { icon: <ShoppingBag className="text-purple-400"/>, title: "Módulo de Produtos com IA (Mockups + Vídeos Profissionais)", description: "Vamos além dos ensaios: você vai aprender a criar mockups realistas e vídeos promocionais para seus projetos, marca pessoal ou loja." }
  ];
  
  const faqItems = [
    { value: "item-1", question: "Isso é só um curso de inteligência artificial?", answer: "Não apenas. É um método prático focado em uma única coisa: te ensinar a criar seus próprios ensaios fotográficos incríveis, passo a passo, mesmo que você nunca tenha usado IA antes." },
    { value: "item-2", question: "Preciso saber editar fotos ou programar?", answer: "De forma alguma. O método é todo guiado, com passo a passo e templates prontos. Você não precisa de nenhuma experiência técnica." },
    { value: "item-3", question: "Preciso ter um computador muito potente?", answer: "Não! Todo o processamento pesado é feito na nuvem, não no seu computador. Se você consegue assistir a vídeos no YouTube, consegue criar seus ensaios." },
    { value: "item-4", question: "Quanto eu preciso investir além do curso?", answer: "O custo para treinar seu clone digital é de $10 dólares (cerca de R$50). Esse clone é seu para sempre e você pode gerar milhares de fotos com ele. O curso te mostra como aproveitar esse investimento ao máximo." },
    { value: "item-5", question: "Em quanto tempo consigo criar minhas primeiras fotos?", answer: "Depois de assistir às aulas (que são rápidas e diretas), o processo de treinar o clone leva algumas horas. Feito isso, você consegue gerar um ensaio completo em menos de 20 minutos!" },
    { value: "item-6", question: "Posso usar no celular?", answer: "O ideal é usar um computador para o treinamento e a geração das imagens, pois as plataformas são otimizadas para desktop, o que torna o processo muito mais fácil e rápido." }
  ];

  const offerItems = [
    { text: "Curso Clone Perfeito Completo", value: "R$197" },
    { text: "Acesso Vitalício e Suporte", value: "R$97" },
    { text: "Bônus 1 - Agente GPT de Prompts", value: "R$47" },
    { text: "Bônus 2 - Ensaios com ChatGPT", value: "R$29" },
    { text: "Futuras Atualizações Garantidas", value: "Inestimável" }
  ];


  return (
    <>
      {/* ===== CÓDIGOS DE RASTREAMENTO ===== */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1198526755291146');
          fbq('track', 'PageView');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sb2ap4cj31");
        `}
      </Script>

      <div className="bg-[#191919] text-neutral-300 font-sans antialiased overflow-x-hidden">

        {/* ===== BARRA DE CHECKOUT FLUTUANTE ===== */}
        <div className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-700/50 transition-transform duration-300 ${isBarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="max-w-3xl mx-auto flex items-center justify-between p-3 px-4">
            <span className="text-sm font-medium text-neutral-200 hidden sm:block">A estética que você sempre quis, com 80% OFF.</span>
            <span className="text-sm font-medium text-neutral-200 sm:hidden">Seu acesso com 80% OFF</span>
            <Link href="#checkout">
              <Button size="sm" className="bg-rose-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm">
                QUERO CRIAR MINHAS FOTOS
              </Button>
            </Link>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 space-y-12 md:space-y-16">

          <section className="text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-100 leading-tight">
              Crie ensaios fotográficos seus que parecem feitos por um profissional.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              Mesmo sem câmera, sem estúdio e sem saber nada de edição. Só com o seu computador e nossa ajuda.
            </p>
          </section>

          <div className="w-full flex justify-center">
            <Link href="#checkout">
              <Button size="lg" className="w-full md:w-auto text-lg font-semibold px-8 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 focus-visible:bg-green-600">
                QUERO CRIAR MINHAS FOTOS
              </Button>
            </Link>
          </div>

          <section className="py-8">
            <div className="text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">De selfies comuns a um perfil de capa de revista.</h2>
              <p className="text-lg text-neutral-400">Veja a mágica acontecer com o método Clone Perfeito.</p>
            </div>
            <div className="mt-12 space-y-12">
              <div className="space-y-4">
                <h3 className="text-left text-lg font-semibold text-neutral-400 tracking-wider">ANTES</h3>
                <Image src="/images/antescp.jpg" alt="Fotos de selfie usadas como base para o treinamento da IA" width={1200} height={343} className="rounded-xl shadow-lg w-full h-auto" />
                <p className="text-left text-neutral-500 text-sm">Apenas algumas fotos comuns do seu celular.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-left text-xl font-bold text-yellow-400 tracking-wider">✨ DEPOIS ✨</h3>
                <Image src="/images/depoiscp.jpg" alt="Ensaios fotográficos profissionais gerados por inteligência artificial" width={1200} height={343} className="rounded-xl shadow-2xl shadow-yellow-500/10 w-full h-auto" />
                <p className="text-left text-neutral-500 text-sm">Ensaios incríveis gerados com o seu clone.</p>
              </div>
            </div>
          </section>
          
          <Separator className="bg-neutral-700" />
          
          <section className="space-y-8 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">Deixa eu te perguntar…</h2>
            <p className="text-lg leading-relaxed">Quantas vezes você viu alguém com um perfil lindo no Instagram, fotos super estéticas, feed organizado… e pensou:</p>
            <blockquote className="border-l-4 border-neutral-700 pl-6 my-4 text-xl italic text-neutral-400">
              “Se eu tivesse fotos assim, meu perfil também chamaria mais atenção.”
            </blockquote>
            
            <Card className="bg-neutral-800/50 border-neutral-700 my-8">
                <CardHeader><CardTitle className="text-neutral-200 text-xl">Você já percebeu como...</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-4"><Star className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" /><p className="text-neutral-300 text-lg">...as pessoas com as fotos certas se destacam <strong className="font-medium text-white">naturalmente?</strong></p></div>
                    <div className="flex items-start gap-4"><TrendingUp className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" /><p className="text-neutral-300 text-lg">...as oportunidades, convites e até o respeito mudam quando você parece mais <strong className="font-medium text-white">profissional e estiloso</strong> online?</p></div>
                </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-xl leading-relaxed"><strong className="text-yellow-400">Pois é.</strong> Esse é o poder da imagem bem feita.</p>
              <p className="text-xl leading-relaxed">E agora você pode ter esse poder nas suas mãos — sem depender de fotógrafo, estúdio, ou edições complicadas.</p>
            </div>
          </section>

          <section className="space-y-8 text-left">
            <p className="text-xl font-medium text-neutral-100 bg-neutral-800 p-6 rounded-lg">
             Estou falando de um método inédito, direto ao ponto, onde você vai aprender a criar seu <strong className='text-yellow-300'>clone digital hiper-realista</strong> e gerar ensaios completos com IA — com fotos impressionantes, em <strong className='text-yellow-300'>qualquer estilo e cenário que imaginar.</strong>
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-8">Sim, você mesmo pode ter imagens como estas:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Briefcase className="w-8 h-8 text-sky-400 flex-shrink-0"/><p className='text-lg'>Retratos corporativos para o LinkedIn</p></CardContent></Card>
                <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Camera className="w-8 h-8 text-sky-400 flex-shrink-0"/><p className='text-lg'>Lifestyle no café, na praia ou em Paris</p></CardContent></Card>
                <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Instagram className="w-8 h-8 text-sky-400 flex-shrink-0"/><p className='text-lg'>Fotos estéticas para um feed incrível</p></CardContent></Card>
                <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Lightbulb className="w-8 h-8 text-sky-400 flex-shrink-0"/><p className='text-lg'>Visuais criativos para seu projeto ou marca</p></CardContent></Card>
            </div>
            <p className='text-lg text-center text-neutral-400 pt-4'>Tudo com realismo surreal, feito por IA em poucas horas.</p>
          </section>

          <div className="pt-8"><h2 className="text-2xl font-bold text-left md:text-center text-neutral-100 mb-8 flex items-center justify-start md:justify-center gap-3"><Sparkles className="text-yellow-400"/> Criações dos Nossos Alunos</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{studentCreations.map((num) => (<div key={num} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg"><Image src={`/images/gerada-${num}.jpg`} alt={`Ensaio gerado por aluno ${num}`} width={300} height={400} className="w-full h-full object-cover transition-transform hover:scale-105" /></div>))}</div></div>
          
          <Separator className="bg-neutral-700" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-neutral-100">O que você vai aprender passo a passo</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700 border-l-4 border-l-sky-400 overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                  <span className="text-neutral-400">{module.icon}</span>
                  <CardTitle className="text-xl text-left text-neutral-100">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-300 pl-16 pb-4 text-left">{module.description}</CardContent>
              </Card>
            ))}
          </div>

          <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-neutral-300 text-lg">
            Não importa se você nunca mexeu com IA antes. <strong className="text-white not-italic">O curso foi feito para pessoas comuns</strong> — que querem se destacar, ter um feed bonito ou só brincar com o visual de uma forma única e criativa.
          </blockquote>
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-neutral-100 pt-8 border-b border-neutral-800 pb-4">E ainda leva 2 Bônus Especiais</h2>
          <div className="space-y-4">{bonuses.map((bonus, index) => (<Card key={index} className="bg-neutral-800/50 border-neutral-700"><CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4"><Check className="w-6 h-6 text-green-400" /><CardTitle className="text-xl text-left text-neutral-100">{bonus.title}</CardTitle></CardHeader><CardContent className="text-neutral-300 pl-16 pb-4 text-left">{bonus.description}</CardContent></Card>))}</div>
          
          <section className="pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8 text-left">
                  Prazer, sou o Gabriel. E eu criei o Clone Perfeito.
              </h2>
              <Image src="/images/eu-gabriel.jpg" alt="Foto de Gabriel, criador do Clone Perfeito" width={800} height={500} className="w-full max-w-lg rounded-xl shadow-2xl shadow-black/40 mb-8" />
              <div className="max-w-2xl space-y-4 text-lg text-neutral-300 leading-relaxed text-left">
                  <p>Comecei na faculdade de Engenharia da Computação, mas logo vi que minha paixão era outra: o lado prático, visual e criativo da tecnologia.</p>
                  <p>Nos últimos 4 anos, mergulhei no marketing digital, explorando design, copy e tráfego. Foi nessa jornada que me apaixonei pelo poder da imagem e me especializei em campanhas visuais.</p>
                  <p>Quando descobri a IA para criar imagens hiper-realistas, tudo mudou. Vi que não era só uma ferramenta de trabalho, mas algo que podia <strong className="text-yellow-400">transformar completamente a forma como as pessoas se veem e se apresentam online.</strong></p>
                  <p>Por isso, criei o Clone Perfeito: para compartilhar esse poder e te ajudar a criar uma estética única, com total autonomia e criatividade.</p>
              </div>
          </section>

          <div className="pt-8 mb-8 md:mb-12">
              <h2 className="text-2xl font-bold text-left md:text-center text-neutral-100 mb-8 flex items-center justify-start md:justify-center gap-3"><Users className="text-yellow-400"/> A prova de que o método funciona para todos</h2>
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                  <CarouselContent className="-ml-4">
                      {testimonials.map((num) => (
                          <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                              <Card className="bg-neutral-800/50 border-neutral-700 overflow-hidden"><CardContent className="p-0"><Image src={`/images/d${num}.jpg`} alt={`Depoimento de aluno ${num}`} width={400} height={800} className="w-full h-auto" /></CardContent></Card>
                          </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" /><CarouselNext className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
              </Carousel>
          </div>
          
          <section className="pt-16 space-y-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
                  🚨 ATUALIZAÇÕES PODEROSAS A CAMINHO 🚨
                </h2>
                <p className="text-lg text-neutral-400 mt-2">(E tudo incluso pra quem entrar agora)</p>
            </div>
            <p className="text-lg text-center max-w-2xl mx-auto text-neutral-300">
              O Clone Perfeito está sempre evoluindo. Se liga no que vem por aí para expandir ainda mais seu potencial criativo:
            </p>
            <div className="space-y-4 pt-4">
              {upcomingUpdates.map((update, index) => (
                <Card key={index} className="bg-neutral-800/50 border-neutral-700/80 border-l-4 border-l-purple-500 overflow-hidden shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                    <span className="text-neutral-400">{update.icon}</span>
                    <CardTitle className="text-xl text-left text-neutral-100">{update.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-300 pl-16 pb-4 text-left">{update.description}</CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-lg bg-green-950/40 border border-green-800/50 text-center">
              <p className="text-xl text-neutral-200 leading-relaxed">
                Todas essas atualizações serão <strong className="font-bold text-green-400">adicionadas sem nenhum custo extra</strong> para quem já é aluno.
              </p>
            </div>
          </section>

          <h2 id="checkout" className="text-3xl md:text-4xl font-bold text-left text-neutral-100 pt-12 border-b border-neutral-800 pb-4">A estética certa muda tudo.</h2>

          <div className="relative mt-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur-xl opacity-15"></div>
              <Card className="relative bg-neutral-800/60 backdrop-blur-md border border-neutral-700/50 shadow-2xl shadow-black/30 rounded-xl">
                  <CardContent className="p-6 md:p-8 space-y-6">
                      <div className="space-y-4 text-neutral-200">
                        {offerItems.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <p className="text-base sm:text-lg">{item.text}</p>
                            </div>
                            {item.value !== "Inestimável" ? (
                              <p className="text-neutral-400 font-normal text-sm sm:text-base whitespace-nowrap ml-2">(vale {item.value})</p>
                            ) : (
                              <p className="text-neutral-400 font-normal text-sm sm:text-base whitespace-nowrap ml-2">({item.value})</p>
                            )}
                          </div>
                        ))}
                      </div>

                      <Separator className="bg-neutral-700/50"/>
                      
                      <div className="text-center space-y-4">
                          <div className="inline-block bg-green-500/10 text-green-400 font-bold py-1 px-3 rounded-full text-sm">DESCONTO DE 80%</div>
                          <p className="text-lg text-neutral-400">De <span className="line-through">R$370</span> por apenas:</p>
                          <p className="text-4xl sm:text-5xl font-bold text-white">R$ 97</p>
                          <p className="text-2xl font-bold text-yellow-400">ou 12x de R$ 9,74</p>
                      </div>
                      
                      <div className="pt-4">
                          <Link href="https://pay.hotmart.com/P100679254E?checkoutMode=10">
                              <Button size="lg" className="w-full text-base sm:text-lg font-semibold px-4 sm:px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 focus-visible:bg-green-600">
                                  Quero criar minhas fotos com desconto
                              </Button>
                          </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-6 text-sm text-neutral-400">
                          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Garantia sem risco</span></div>
                          <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Assista de qualquer lugar</span></div>
                          <div className="flex items-center gap-2"><Rocket className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Acesso imediato</span></div>
                          <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Pagamento 100% seguro</span></div>
                      </div>
                  </CardContent>
              </Card>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 text-left p-6 rounded-lg bg-sky-950/30 border border-sky-800/40">
              <Shield className="w-16 h-16 text-sky-400 flex-shrink-0" />
              <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Garantia Incondicional de 7 Dias</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed">Seu resultado garantido ou seu dinheiro de volta. Se, por qualquer motivo, você não ficar maravilhado com o que é possível criar, basta enviar um e-mail e nós devolveremos todo o seu investimento. <strong className="text-yellow-400">O risco é todo nosso.</strong></p>
              </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 text-left p-6 rounded-lg bg-green-950/30 border border-green-800/40">
              <MessageSquare className="w-16 h-16 text-green-400 flex-shrink-0" />
              <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ainda tem alguma dúvida?</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                      Se você precisa de mais alguma informação, clique no botão abaixo e fale diretamente com nossa equipe no WhatsApp. Estamos aqui para ajudar!
                  </p>
                  <Link href="https://api.whatsapp.com/send?phone=5511978610717" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="bg-transparent border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-300">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Chamar no WhatsApp
                      </Button>
                  </Link>
              </div>
          </div>

          <Separator className="bg-neutral-700 my-12" />

          <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center text-neutral-100">❓ Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full text-lg">
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className="border-b-neutral-800">
                    <AccordionTrigger className="text-neutral-100 hover:no-underline text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 text-base text-left">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
          
          <footer className="text-center text-neutral-500 pt-16 border-t border-neutral-800 space-y-4">
              <p>© {new Date().getFullYear()} Clone Perfeito</p>
              <p className="text-sm">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
              <div className="flex justify-center space-x-6 text-sm text-neutral-400"><Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link><Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></div>
          </footer>
          
        </main>
      </div>

      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1198526755291146&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  )
}
