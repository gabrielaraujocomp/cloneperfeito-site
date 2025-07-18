'use client'; // Adiciona a diretiva para indicar que este é um Componente de Cliente

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Brain,
  Wand2,
  Rocket,
  Check,
  Cpu,
  Sparkles,
  Shield,
  Smartphone,
  Lock,
  LayoutDashboard,
  UserPlus,
  ImageIcon,
  MessageSquare,
  CheckCircle2,
  Film,
  TrendingUp,
  ImageUp,
  BrainCircuit,
  Download,
  DollarSign,
  Zap,
  Clock,
  Award,
  HelpCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ClonePerfeitoFinalPage() {
  const [isBarVisible, setIsBarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const testimonials = [1, 2, 3, 4, 5, 6, 7];
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8];
  const beforeImages = [1, 2, 3, 4, 5];
  const afterImages = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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

  const modules = [
    { icon: <LayoutDashboard className="w-6 h-6 text-sky-300"/>, title: "Comece Aqui", description: "O guia inicial para preparar seu ambiente de criação e dar os primeiros passos em poucos minutos." },
    { icon: <UserPlus className="w-6 h-6 text-sky-300"/>, title: "A Escolha das Fotos", description: "O segredo para selecionar as imagens que garantirão um clone hiper-realista e impressionante." },
    { icon: <Cpu className="w-6 h-6 text-sky-300"/>, title: "Treinando a Inteligência Artificial", description: "O passo a passo para ensinar a IA a criar sua versão digital, com configurações simples e otimizadas." },
    { icon: <Wand2 className="w-6 h-6 text-sky-300"/>, title: "A Mágica Acontece", description: "Como usar nossos comandos prontos (prompts) para gerar dezenas de fotos em qualquer estilo que você sonhar." },
    { icon: <ImageIcon className="w-6 h-6 text-sky-300"/>, title: "Seu Primeiro Ensaio", description: "Dando vida às suas ideias, gerando suas primeiras imagens e aplicando os toques finais para um resultado profissional." },
  ];

  const bonuses = [
    { icon: <Brain />, title: "Bônus 1 – Agente GPT de Prompts Criativos", description: "Um robô que cria os comandos para você. Gere ideias de ensaios com seu nome, estilo e iluminação com 1 clique." },
    { icon: <DollarSign />, title: "Bônus 2 – Renda Extra com Ensaios (Aula Bônus)", description: "Aprenda como você pode oferecer esse serviço e fazer uma renda extra, vendendo ensaios para pessoas e empresas." },
  ];

  const upcomingUpdates = [
    { icon: <Film className="text-purple-400"/>, title: "Ensaios virando Vídeos Cinematográficos", description: "Transforme suas fotos em vídeos emocionantes e imersivos, ideais para Reels e TikToks." },
    { icon: <Sparkles className="text-purple-400"/>, title: "Conversão dos vídeos em 4K", description: "Entregue vídeos em altíssima qualidade, com aquele visual de cinema direto do seu notebook." },
    { icon: <Rocket className="text-purple-400"/>, title: "Módulo de Produtos com IA (Mockups)", description: "Crie mockups realistas de produtos para marcas, lojas e criadores, abrindo uma nova fonte de renda." }
  ];
  
  const faqItems = [
    { value: "item-1", question: "É muito difícil? Preciso entender de tecnologia?", answer: "De forma alguma! Essa é a maior vantagem do método. Ele foi desenhado para ser 100% visual e guiado, passo a passo. Se você sabe usar redes sociais e seguir instruções simples, você está mais do que preparado. Não precisa de nenhum conhecimento técnico." },
    { value: "item-2", question: "Preciso de um computador da NASA?", answer: "Definitivamente não. Todo o processamento pesado é feito online, nos servidores das ferramentas que usamos. Seu computador serve apenas para acessar os sites. Se ele consegue rodar vídeos no YouTube sem travar, ele é perfeito para o curso." },
    { value: "item-3", question: "Quanto tempo até eu ver minhas primeiras fotos prontas?", answer: "O aprendizado é rápido: você entende todo o método em menos de 1 hora. O treinamento da IA com suas fotos leva algumas horas (mas ela trabalha sozinha, você pode ir fazer outra coisa). Depois que sua 'versão digital' estiver pronta, você cria um ensaio completo, com dezenas de fotos, em menos de 20 minutos." },
    { value: "item-4", question: "Terei outros custos além do valor do curso?", answer: "Sim, e somos 100% transparentes sobre isso. Para criar sua 'versão digital' (o chamado clone) na plataforma profissional que ensinamos, há um custo único de $10 dólares. Esse valor é pago diretamente à plataforma e cria seu modelo de forma permanente. Com ele, você pode gerar milhares de fotos, tornando o custo-benefício absurdo." },
    { value: "item-5", question: "As fotos ficam realmente parecidas comigo?", answer: "Sim, o realismo é o ponto mais impressionante. O segredo está no Módulo 2, onde ensinamos a técnica exata para selecionar as fotos de treino. Seguindo esse passo, o resultado são imagens que as pessoas ao seu redor jurarão que foram feitas em um estúdio profissional." },
    { value: "item-6", question: "E se eu me sentir travado ou com dúvidas?", answer: "Impossível ficar travado. Ao entrar, você ganha acesso ao nosso suporte exclusivo para alunos. Qualquer pergunta, qualquer dificuldade, nossa equipe estará a uma mensagem de distância para te ajudar a ter os melhores resultados possíveis." }
  ];

  const offerItems = [
    { text: "Curso Clone Perfeito (5 Módulos)", value: "R$197" },
    { text: "Bônus 1 - Agente GPT de Prompts", value: "R$47" },
    { text: "Bônus 2 - Aula de Renda Extra", value: "R$97" },
    { text: "Futura Atualização de Vídeos", value: "R$150" },
    { text: "Suporte Individual", value: "Inestimável" }
  ];

  return (
    <>
      {/* --- CÓDIGOS DE TRACKING --- */}
      <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1198526755291146');fbq('track', 'PageView');` }} />
      <Script id="microsoft-clarity" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "sb2ap4cj31");` }} />
      
      <div className="bg-[#191919] text-neutral-300 font-sans antialiased overflow-x-hidden">

        <div className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-700/50 transition-transform duration-300 ${isBarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="max-w-4xl mx-auto flex items-center justify-between p-3 px-4">
            <span className="text-sm font-medium text-white hidden sm:block">Garanta seu acesso antes que o preço suba.</span>
            <span className="text-sm font-medium text-white sm:hidden">Acesso com 80% OFF</span>
            <Link href="#checkout"><Button size="sm" className="bg-rose-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm">QUERO MEU ACESSO</Button></Link>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-24 md:space-y-32">
          
          <section className="space-y-6 md:space-y-8 text-center">
              <Image src="/images/bg-cp.jpg" alt="Galeria de retratos hiper-realistas gerados por Inteligência Artificial" width={1200} height={500} className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-black/30" priority />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mt-8">
                  Transforme selfies comuns em ensaios fotográficos profissionais com IA — <br className="hidden md:block" />
                  <span className="text-yellow-400">sem precisar de câmera, fotógrafo ou estúdio.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-300">
                  Em menos de 1 hora, você aprende o passo a passo para criar retratos hiper-realistas que impressionam — usando apenas seu celular e a IA.
              </p>
              <div className="w-full flex justify-center pt-4"><Link href="#checkout"><Button size="lg" className="w-full md:w-auto text-lg font-semibold px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">Quero aprender a criar ensaios com IA agora</Button></Link></div>
          </section>
          
          {/* 🔥 SEÇÃO DE TRANSFORMAÇÃO - REFEITA COM IMAGENS INDIVIDUAIS */}
          <section>
             <Card className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 md:p-8 space-y-10">
                <CardHeader className='p-0 text-center'><CardTitle className="text-3xl font-bold text-white">Essa é a transformação que o Clone Perfeito oferece:</CardTitle></CardHeader>
                <CardContent className='p-0 space-y-10'>
                    <div className="space-y-4">
                        <h3 className="text-center text-lg font-semibold text-neutral-400 tracking-wider">VOCÊ MANDA FOTOS ASSIM...</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {beforeImages.map(num => (
                                <Image key={num} src={`/images/antes-${num}.jpg`} alt={`Exemplo de foto de treino ${num}`} width={200} height={200} className="rounded-lg object-cover w-full aspect-square" />
                            ))}
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-center text-xl font-bold text-yellow-400 tracking-wider">✨ E A IA TE ENTREGA ENSAIOS ASSIM ✨</h3>
                        <Carousel opts={{ align: "start", loop: true }} className="w-full">
                            <CarouselContent className="-ml-4">
                                {afterImages.map(num => (
                                    <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                                            <Image src={`/images/depois-${num}.jpg`} alt={`Resultado profissional gerado ${num}`} width={300} height={400} className="w-full h-full object-cover" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
                            <CarouselNext className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
                        </Carousel>
                    </div>

                    <p className="text-center text-neutral-300 text-lg leading-relaxed pt-4 max-w-2xl mx-auto">
                        Com este método, em minutos você será capaz de colocar <strong className="text-white">seu próprio rosto</strong> em qualquer <strong className="text-yellow-400">cenário, roupa ou iluminação</strong> que imaginar — com um realismo impressionante.
                    </p>
                </CardContent>
            </Card>
          </section>

          {/* ✅ SEÇÃO DE BENEFÍCIOS - MELHORADA */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <Card className="group bg-neutral-800/40 border-neutral-700/80 p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-900/50">
                <div className="bg-neutral-900/50 rounded-full p-3 border border-neutral-700"><Clock className="w-10 h-10 text-sky-400 transition-transform duration-300 group-hover:scale-110"/></div>
                <h3 className="text-xl font-bold text-white">Crie retratos em 1 hora</h3><p className="text-neutral-400">Aprenda o método e crie ensaios completos em poucos minutos.</p>
              </Card>
              <Card className="group bg-neutral-800/40 border-neutral-700/80 p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-900/50">
                <div className="bg-neutral-900/50 rounded-full p-3 border border-neutral-700"><Zap className="w-10 h-10 text-sky-400 transition-transform duration-300 group-hover:scale-110"/></div>
                <h3 className="text-xl font-bold text-white">Fácil para Iniciantes</h3><p className="text-neutral-400">Passo a passo visual, à prova de erros, feito para quem nunca usou IA.</p>
              </Card>
              <Card className="group bg-neutral-800/40 border-neutral-700/80 p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-900/50">
                <div className="bg-neutral-900/50 rounded-full p-3 border border-neutral-700"><Award className="w-10 h-10 text-sky-400 transition-transform duration-300 group-hover:scale-110"/></div>
                <h3 className="text-xl font-bold text-white">Qualidade de Estúdio</h3><p className="text-neutral-400">Use a mesma tecnologia de estúdios com apenas 10 a 15 selfies.</p>
              </Card>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Como a mágica funciona:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><ImageUp className="w-8 h-8 text-sky-400"/></div><h3 className="text-xl font-bold text-white mb-2">1. Envie suas fotos</h3><p className="text-neutral-400">Escolha de 10 a 15 fotos suas (selfies funcionam!) e faça o upload na plataforma.</p></Card>
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><BrainCircuit className="w-8 h-8 text-sky-400"/></div><h3 className="text-xl font-bold text-white mb-2">2. Crie seu Clone</h3><p className="text-neutral-400">Com um clique, a IA estuda suas fotos e cria seu "clone digital" em poucas horas.</p></Card>
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><Wand2 className="w-8 h-8 text-sky-400"/></div><h3 className="text-xl font-bold text-white mb-2">3. Descreva o estilo</h3><p className="text-neutral-400">Use nossos modelos prontos para pedir o que quiser (em Paris, no escritório, etc).</p></Card>
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><Download className="w-8 h-8 text-sky-400"/></div><h3 className="text-xl font-bold text-white mb-2">4. Receba o ensaio</h3><p className="text-neutral-400">Em minutos, a IA entrega dezenas de fotos profissionais, prontas para usar.</p></Card>
            </div>
          </section>

          {/* 🛑 SEÇÃO DE OBJEÇÕES - MELHORADA */}
          <section>
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-700 p-8">
                <CardTitle className="text-3xl font-bold text-white text-center flex items-center justify-center gap-3 border-b border-neutral-700 pb-6 mb-8"><HelpCircle className="w-8 h-8 text-sky-400"/> Mas, e se...?</CardTitle>
                <ul className="space-y-6 text-lg">
                    <li className="flex items-start gap-4"><CheckCircle2 className="w-7 h-7 text-green-400 flex-shrink-0 mt-1" /><div><strong className="text-white">... eu nunca usei IA, vou conseguir?</strong><br/><span className="text-neutral-400">Perfeito. O método é 100% guiado, passo a passo, e foi feito para iniciantes. Se você sabe seguir instruções visuais, está pronto.</span></div></li>
                    <li className="flex items-start gap-4"><CheckCircle2 className="w-7 h-7 text-green-400 flex-shrink-0 mt-1" /><div><strong className="text-white">... meu computador é fraco?</strong><br/><span className="text-neutral-400">Não importa. Todo o trabalho pesado é feito na nuvem, não no seu PC. Se ele abre o YouTube, ele serve para o curso.</span></div></li>
                    <li className="flex items-start gap-4"><CheckCircle2 className="w-7 h-7 text-green-400 flex-shrink-0 mt-1" /><div><strong className="text-white">... eu tiver medo de não conseguir?</strong><br/><span className="text-neutral-400">O método é à prova de erros e você tem nosso suporte individual para tirar qualquer dúvida. É impossível ficar travado.</span></div></li>
                </ul>
            </Card>
          </section>
          
          <div className="w-full flex justify-center"><Link href="#checkout"><Button size="lg" className="w-full md:w-auto text-lg font-semibold px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">EU QUERO E CONSIGO! (Ver Oferta)</Button></Link></div>
          
          <Separator className="bg-neutral-800" />
          
          <section className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Alunos Comuns, Resultados Extraordinários</h2>
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                  <CarouselContent className="-ml-4">{testimonials.map((num) => (<CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3"><Card className="bg-neutral-800/50 border-neutral-700 overflow-hidden"><CardContent className="p-0"><Image src={`/images/d${num}.jpg`} alt={`Depoimento de aluno ${num}`} width={400} height={800} className="w-full h-auto" /></CardContent></Card></CarouselItem>))}</CarouselContent>
                  <CarouselPrevious className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" /><CarouselNext className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
              </Carousel>
          </section>

          <section className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Criações Incríveis Feitas por Alunos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{studentCreations.map((num) => (<div key={num} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"><Image src={`/images/gerada-${num}.jpg`} alt={`Ensaio fotográfico gerado por aluno ${num}`} width={300} height={400} className="w-full h-full object-cover" /></div>))}</div>
          </section>
          
          {/* 🚀 SEÇÃO DE MÓDULOS - RESPONSIVA */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">O passo a passo da mágica que você vai aprender</h2>
            <div className="relative max-w-3xl mx-auto px-4">
                <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-neutral-700/70 -translate-x-1/2"></div>
                {modules.map((module, index) => (
                    <div key={index} className="relative pl-12 md:pl-0 mb-16 last:mb-0">
                        <div className={`flex items-center md:grid md:grid-cols-2 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                            <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                <Card className="bg-neutral-800/80 border border-neutral-700 shadow-lg backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="text-sm font-semibold text-sky-400 tracking-wider">MÓDULO {index + 1}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                                        <p className="text-neutral-400 leading-relaxed">{module.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-sky-500 border-4 border-neutral-900 shadow-xl">
                            {module.icon}
                        </div>
                    </div>
                ))}
            </div>
          </section>
          
          {/* 🎁 SEÇÃO DE BÔNUS - MELHORADA */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">E ainda leva 2 Bônus para acelerar seus resultados:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="bg-neutral-800/50 border border-green-500/30">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-5">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <CardTitle className="text-xl text-left text-white">{bonus.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-300 pl-16 pb-5 text-left">{bonus.description}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card className="bg-purple-950/40 border-2 border-purple-700 rounded-xl p-8 text-center space-y-6 shadow-2xl shadow-purple-950/50">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">🚨 ATUALIZAÇÕES PODEROSAS A CAMINHO 🚨</h3>
                <p className="text-lg text-neutral-300 max-w-3xl mx-auto">(E tudo incluso pra quem entrar agora na fase de lançamento)</p>
                <div className="space-y-4 pt-4 text-left">
                  {upcomingUpdates.map((update, index) => (
                    <div key={index} className="flex items-start gap-4"><span className="mt-1">{update.icon}</span><div><strong className="text-white">{update.title}</strong><p className="text-neutral-400">{update.description}</p></div></div>
                  ))}
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg mt-6 space-y-2">
                    <p className="text-xl text-white font-semibold">Quem entrar AGORA garante tudo isso <strong className="text-green-400">GRATUITAMENTE</strong> antes do preço subir.</p>
                    <p className="text-neutral-400">Disponível apenas nesta oferta. Depois, será vendido separadamente.</p>
                </div>
            </Card>
          </section>

          <section className="pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Prazer, sou o Gabriel. E eu criei o Clone Perfeito.</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image src="/images/eu-gabriel.jpg" alt="Foto de Gabriel, criador do Clone Perfeito" width={800} height={500} className="w-full max-w-xs md:max-w-sm rounded-xl shadow-2xl shadow-black/40" />
                <div className="max-w-2xl space-y-4 text-lg text-neutral-300 leading-relaxed text-left">
                    <p>Comecei na faculdade de Engenharia da Computação, mas logo vi que minha paixão era o lado prático, visual e criativo da tecnologia. Nos últimos 4 anos, mergulhei no marketing digital, gerenciando mais de <strong className="text-white">R$1 milhão</strong> em campanhas visuais.</p>
                    <p>Foi aí que descobri o potencial da IA para criar imagens hiper-realistas. A princípio, a ideia era só ensinar como gerar esses clones, mas ao testar a venda desses ensaios, percebi que isso não era só uma ferramenta legal. Era uma <strong className="text-yellow-400">nova fonte de renda, acessível, estética e vendável.</strong></p>
                    <p>Criei o Clone Perfeito para compartilhar esse poder e te ajudar a criar uma estética única, com total autonomia e criatividade.</p>
                </div>
              </div>
          </section>

          <h2 id="checkout" className="text-4xl md:text-5xl font-bold text-center text-white pt-12">Sua Oferta Especial (e Única)</h2>
          
          <div className="relative mt-2">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-yellow-500 rounded-2xl blur-xl opacity-20"></div>
              <Card className="relative bg-neutral-800/60 backdrop-blur-md border border-neutral-700/50 shadow-2xl shadow-black/30 rounded-xl">
                  <CardContent className="p-6 md:p-8 space-y-6">
                      <div className="space-y-4 text-neutral-200">{offerItems.map((item, index) => (<div key={index} className="flex items-center justify-between"><div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p className="text-base sm:text-lg text-white">{item.text}</p></div>{item.value !== "Inestimável" ? (<p className="text-neutral-400 font-normal text-sm sm:text-base whitespace-nowrap ml-2">(<span className="line-through">{item.value}</span>)</p>) : (<p className="text-green-400 font-bold text-sm sm:text-base whitespace-nowrap ml-2">INCLUSO</p>)}</div>))}</div>
                      <Separator className="bg-neutral-700/50"/>
                      <div className="text-center space-y-4">
                          <p className="text-lg text-neutral-400">De <span className="line-through">R$591</span> por apenas:</p>
                          <p className="text-4xl sm:text-5xl font-bold text-yellow-400">9x de R$ 8,80</p>
                          <p className="text-xl font-medium text-white">ou R$ 67 à vista</p>
                      </div>
                      <p className="text-center text-yellow-200/90 text-md md:text-lg !-mb-2 !mt-6">Você está a 1 hora de distância de fotos que podem mudar sua imagem online para sempre.</p>
                      <div className="pt-4"><Link href="https://pay.hotmart.com/P100679254E?off=82l7lflg&checkoutMode=10"><Button size="lg" className="w-full text-base sm:text-lg font-semibold px-4 sm:px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">GARANTIR MEU ACESSO COM DESCONTO</Button></Link></div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-6 text-sm text-neutral-400">
                          <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Acesso em qualquer dispositivo</span></div>
                          <div className="flex items-center gap-2"><Rocket className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Acesso imediato</span></div>
                          <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Pagamento 100% seguro</span></div>
                      </div>
                  </CardContent>
              </Card>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-left p-6 rounded-lg bg-green-950/30 border border-green-800/40">
              <MessageSquare className="w-16 h-16 text-green-400 flex-shrink-0" />
              <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ainda tem alguma dúvida?</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-4">Se você precisa de mais alguma informação, clique no botão abaixo e fale diretamente com nossa equipe no WhatsApp. Estamos aqui para ajudar!</p>
                  <Link href="https://api.whatsapp.com/send?phone=5511978610717&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Clone%20Perfeito,%20pode%20me%20ajudar?" target="_blank" rel="noopener noreferrer"><Button variant="outline" className="bg-transparent border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-300"><MessageSquare className="w-4 h-4 mr-2" />Chamar no WhatsApp</Button></Link>
              </div>
          </div>

          <Separator className="bg-neutral-800 my-12" />

          <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center text-white">❓ Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full text-lg">
                {faqItems.map(item => (<AccordionItem key={item.value} value={item.value} className="border-b-neutral-800"><AccordionTrigger className="text-white hover:no-underline text-left py-6">{item.question}</AccordionTrigger><AccordionContent className="text-neutral-300 text-base text-left leading-relaxed pb-6">{item.answer}</AccordionContent></AccordionItem>))}
              </Accordion>
          </div>
          
          <footer className="text-center text-neutral-500 pt-16 border-t border-neutral-800 space-y-4">
              <p>© {new Date().getFullYear()} Clone Perfeito</p>
              <p className="text-sm">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
              <div className="flex justify-center space-x-6 text-sm text-neutral-400"><Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link><Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></div>
          </footer>
          
        </main>
      </div>

      <noscript><img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=1198526755291146&ev=PageView&noscript=1" /></noscript>
    </>
  )
}
