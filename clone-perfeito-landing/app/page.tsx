'use client'; // Adiciona a diretiva para indicar que este é um Componente de Cliente

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  AlertTriangle,
  Flame,
  Brain,
  Wand2,
  Target,
  Package,
  Rocket,
  Check,
  Cpu,
  Palette,
  MessageSquare,
  Globe,
  Plus,
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
  DollarSign,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ClonePerfeitoFinalPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7];
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8];

  const [isBarVisible, setIsBarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      { icon: <LayoutDashboard className="text-sky-400"/>, title: "Módulo 1: A Base de Tudo", description: "Boas-vindas, visão geral do método e a preparação do ambiente para criar clones de alta qualidade." },
      { icon: <UserPlus className="text-sky-400"/>, title: "Módulo 2: Treinando seu Clone Perfeito", description: "O segredo para escolher as fotos certas e o passo a passo para treinar a IA com qualquer rosto." },
      { icon: <ImageIcon className="text-sky-400"/>, title: "Módulo 3: Criando Ensaios Incríveis", description: "Como usar nossos Agentes GPT e prompts prontos para criar imagens de nível profissional em qualquer estilo." },
      { icon: <Film className="text-purple-400"/>, title: "Módulo 4: Transformando Fotos em Vídeos", description: "Aprenda a dar vida às suas criações, transformando fotos estáticas em vídeos cinematográficos.", status: "Em breve" },
      { icon: <Wand2 className="text-purple-400"/>, title: "Módulo 5: Finalização e Qualidade 4K", description: "O toque final para elevar a qualidade das suas criações para um nível impressionante de cinema.", status: "Em breve" },
      { icon: <DollarSign className="text-yellow-400"/>, title: "Módulo 6: Como Vender seus Ensaios (Opcional)", description: "Scripts prontos e estratégia de prospecção para conseguir seus primeiros clientes no Brasil e no exterior." },
      { icon: <Globe className="text-yellow-400"/>, title: "Módulo 7: Vendas Internacionais (Opcional)", description: "Como receber em Dólar e Euro, usando as plataformas e carteiras certas para clientes gringos." },
  ];

  const bonuses = [
    { icon: <Brain />, title: "Bônus 1 – Agente GPT Gerador de Prompts", description: "Gere prompts ultra detalhados com seu nome, estilo e iluminação com 1 clique." },
    { icon: <Rocket />, title: "Bônus 2 – Estratégia de Renda Rápida com IA", description: "Como fazer sua primeira venda em 72h com um perfil novo." },
    { icon: <ShoppingBag />, title: "Bônus 3 – Módulo de Produtos com IA", description: "Aprenda a criar mockups realistas e vídeos promocionais de produtos físicos para expandir seus serviços." },
  ];

  const faqItems = [
    { value: "item-1", question: "É um curso para fazer dinheiro ou para melhorar minhas fotos?", answer: "Os dois! O método ensina uma habilidade central: criar ensaios com IA. Você pode usar essa habilidade para elevar sua própria imagem ou para vender como um serviço altamente lucrativo. O curso te prepara para ambos os caminhos." },
    { value: "item-2", question: "É muito difícil? Preciso entender de tecnologia?", answer: "De forma alguma. O método foi desenhado para ser 100% visual e guiado. Se você sabe seguir um passo a passo, está pronto. Não precisa de nenhum conhecimento técnico prévio." },
    { value: "item-3", question: "As fotos ficam realmente parecidas comigo?", answer: "Sim, o realismo é impressionante. O segredo está na técnica que ensinamos para selecionar as fotos de treino. Seguindo esse passo, o resultado são imagens que as pessoas jurarão que foram feitas em um estúdio profissional." },
    { value: "item-4", question: "Preciso ter seguidores para vender?", answer: "Não. O curso ensina como prospectar clientes qualificados com mensagens diretas, mesmo que você comece com um perfil do zero." },
    { value: "item-5", question: "Quanto eu preciso investir além do curso?", answer: "Para criar o clone na plataforma profissional que ensinamos, há um custo único de $10 dólares. Esse valor é pago diretamente à plataforma e permite gerar milhares de imagens, tornando o custo-benefício para você ou para vender, absurdo." },
    { value: "item-6", question: "Posso vender pra fora do Brasil?", answer: "Sim! Um dos módulos é dedicado a te ensinar como receber em euro e dólar, além de fornecer scripts de prospecção para clientes internacionais." }
  ];

  const offerItems = [
    { text: "Curso Clone Perfeito (Criação + Vendas)", value: "R$297" },
    { text: "Acesso Vitalício e Atualizações Futuras", value: "R$197" },
    { text: "Bônus 1 - Agente GPT de Prompts", value: "R$47" },
    { text: "Bônus 2 - Estratégia de Renda Rápida", value: "R$97" },
    { text: "Bônus 3 - Módulo de Produtos com IA", value: "R$97" }
  ];

  return (
    <>
      {/* ===== CÓDIGOS DE RASTREAMENTO ===== */}
      <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1198526755291146');fbq('track', 'PageView');`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "sb2ap4cj31");`}</Script>

      <div className="bg-[#191919] text-neutral-300 font-sans antialiased overflow-x-hidden">

        {/* ===== BARRA DE CHECKOUT FLUTUANTE ===== */}
        <div className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-700/50 transition-transform duration-300 ${isBarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="max-w-3xl mx-auto flex items-center justify-between p-3 px-4">
            <span className="text-sm font-medium text-neutral-200 hidden sm:block">Garanta seu acesso com desconto.</span>
            <span className="text-sm font-medium text-neutral-200 sm:hidden">Acesso com Desconto</span>
            <Link href="#checkout"><Button size="sm" className="bg-rose-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm">QUERO MEU ACESSO</Button></Link>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">

          <section className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Domine a IA para Criar Ensaios Fotográficos Impossíveis...
              <br className="hidden md:block" />
              <span className="text-yellow-400">E Transforme essa Habilidade em sua Nova Fonte de Renda.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto">
              Para você que quer uma imagem profissional impecável, e para você que quer faturar em <strong className="text-white">dólar, euro e real</strong> com um serviço inovador.
            </p>
            <div className="w-full flex justify-center pt-4">
              <Link href="#checkout">
                <Button size="lg" className="w-full md:w-auto text-lg font-semibold px-8 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 focus-visible:bg-green-600">
                    QUERO APRENDER A HABILIDADE
                </Button>
              </Link>
            </div>
          </section>

          <section>
             <Card className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 md:p-8 space-y-10">
                <CardHeader className='p-0 text-center'><CardTitle className="text-3xl font-bold text-white">A Transformação na Prática</CardTitle></CardHeader>
                <CardContent className='p-0 space-y-10'>
                    <div className="space-y-4">
                        <h3 className="text-center text-lg font-semibold text-neutral-400 tracking-wider">VOCÊ MANDA FOTOS ASSIM...</h3>
                        <Image src="/images/antescp.jpg" alt="Fotos de selfie usadas como base" width={1200} height={343} className="rounded-xl shadow-lg w-full h-auto"/>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-center text-xl font-bold text-yellow-400 tracking-wider">✨ E A IA TE ENTREGA ENSAIOS ASSIM ✨</h3>
                        <Image src="/images/depoiscp.jpg" alt="Ensaios profissionais gerados por IA" width={1200} height={343} className="rounded-xl shadow-2xl shadow-yellow-500/10 w-full h-auto"/>
                    </div>
                </CardContent>
            </Card>
          </section>

          <section className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">Uma Habilidade, Duas Oportunidades Poderosas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="bg-sky-950/30 border-2 border-sky-500 p-6 flex flex-col">
                <CardHeader className="p-0 mb-4">
                  <h3 className="text-2xl font-bold text-sky-400 flex items-center gap-2"><Heart/> Para seu Perfil Pessoal</h3>
                </CardHeader>
                <CardContent className="p-0 space-y-3 text-lg text-neutral-300 flex-grow">
                  <p>Crie uma imagem de autoridade, com retratos profissionais que parecem ter saído de um estúdio caro.</p>
                  <p>Tenha um arsenal de fotos incríveis para redes sociais, LinkedIn, Tinder ou para guardar de recordação.</p>
                </CardContent>
              </Card>
              <Card className="bg-green-950/30 border-2 border-green-500 p-6 flex flex-col">
                <CardHeader className="p-0 mb-4">
                  <h3 className="text-2xl font-bold text-green-400 flex items-center gap-2"><TrendingUp/> Para uma Nova Fonte de Renda</h3>
                </CardHeader>
                <CardContent className="p-0 space-y-3 text-lg text-neutral-300 flex-grow">
                  <p>Venda ensaios como serviço e seja pago em Real, Dólar ou Euro por um trabalho que leva minutos para fazer.</p>
                  <p>Entre em um mercado novo, com baixíssima concorrência e alta demanda por um visual profissional e único.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-neutral-700" />
          
          <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Essa é a sua chance de chegar na frente.</h2>
              <p className="text-xl leading-relaxed max-w-2xl mx-auto">Lembre-se de quando o TikTok explodiu ou de quando o dropshipping era ouro puro. A oportunidade de vender ensaios com IA é o <strong className="text-yellow-400">agora</strong>. Você está no lugar certo, na hora certa.</p>
          </div>

          <div className="pt-8">
              <h2 className="text-2xl font-bold text-center text-neutral-100 mb-8">Veja o que nossos alunos estão fazendo com o método:</h2>
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                  <CarouselContent className="-ml-4">{testimonials.map((num) => (<CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3"><Card className="bg-neutral-800/50 border-neutral-700 overflow-hidden"><CardContent className="p-0"><Image src={`/images/d${num}.jpg`} alt={`Depoimento de aluno ${num}`} width={400} height={800} className="w-full h-auto" /></CardContent></Card></CarouselItem>))}</CarouselContent>
                  <CarouselPrevious className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" /><CarouselNext className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
              </Carousel>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-100 pt-12">O Passo a Passo Completo do Clone Perfeito</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <Card key={index} className={`bg-neutral-800 border-neutral-700 border-l-4 ${module.title.includes("Opcional") ? "border-l-yellow-400" : "border-l-sky-400"} overflow-hidden`}>
                <CardHeader className="flex flex-row items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    {module.icon}
                    <CardTitle className="text-xl text-left text-neutral-100">{module.title}</CardTitle>
                  </div>
                  {module.status && <span className="text-xs font-bold uppercase text-purple-400 bg-purple-950/80 px-2 py-1 rounded">{module.status}</span>}
                </CardHeader>
                <CardContent className="text-neutral-300 pl-16 pb-4 -mt-2 text-left">{module.description}</CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-100 pt-12">E ainda leva 3 Bônus para acelerar seus resultados</h2>
          <div className="space-y-4">{bonuses.map((bonus, index) => (<Card key={index} className="bg-neutral-800/50 border-neutral-700"><CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2"><Plus className="w-5 h-5 text-green-400" /><CardTitle className="text-xl text-left text-neutral-100">{bonus.title}</CardTitle></CardHeader><CardContent className="text-neutral-300 pl-12 text-left">{bonus.description}</CardContent></Card>))}</div>

          <section className="pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8 text-center">
                  Seu Mentor Nessa Jornada
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8 text-left bg-neutral-800/40 p-8 rounded-lg">
                <Image src="/images/eu-gabriel.jpg" alt="Foto de Gabriel, criador do Clone Perfeito" width={800} height={500} className="w-full max-w-xs rounded-xl shadow-2xl shadow-black/40" />
                <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
                    <p>Prazer, sou o Gabriel. Nos últimos 4 anos, gerenciei mais de <strong className="text-white">R$1 milhão</strong> em campanhas visuais e mergulhei de cabeça na IA.</p>
                    <p>Criei o Clone Perfeito para entregar uma habilidade prática. Percebi que o poder de criar ensaios incríveis não era só para benefício próprio, mas uma <strong className="text-yellow-400">nova fonte de renda, acessível e vendável.</strong> Meu objetivo é te dar esse mesmo poder.</p>
                </div>
              </div>
          </section>
          
          <h2 id="checkout" className="text-3xl md:text-4xl font-bold text-center text-neutral-100 pt-12">Sua Oferta Especial de Acesso</h2>
          <div className="relative mt-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-sky-500 rounded-2xl blur-xl opacity-20"></div>
              <Card className="relative bg-neutral-800/60 backdrop-blur-md border border-neutral-700/50 shadow-2xl shadow-black/30 rounded-xl">
                  <CardContent className="p-6 md:p-8 space-y-6">
                      <p className="text-xl font-bold text-white text-center">O que você leva ao entrar hoje:</p>
                      <div className="space-y-3 text-neutral-200 bg-neutral-900/40 border border-neutral-700/70 rounded-lg p-4">
                        {offerItems.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p className="text-base sm:text-lg">{item.text}</p></div>
                            <p className="text-neutral-500 line-through font-normal text-sm sm:text-base whitespace-nowrap ml-2">{item.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="text-center space-y-4 bg-gradient-to-tr from-neutral-800 to-neutral-900 border border-neutral-700 rounded-lg p-6">
                          <p className="text-lg text-neutral-400">De <span className="line-through">R$735</span> por apenas:</p>
                          <p className="text-5xl sm:text-6xl font-bold text-yellow-400 animate-pulse">12x de R$ 9,74</p>
                          <p className="font-medium text-white text-lg">ou <span className="bg-yellow-400/10 text-yellow-300 px-3 py-1 rounded-md font-bold">R$ 97 à vista</span></p>
                      </div>

                      <div className="pt-4">
                        <Link href="https://pay.hotmart.com/P100679254E?checkoutMode=10">
                          <Button size="lg" className="w-full text-lg font-bold px-10 py-8 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                            QUERO ACESSO IMEDIATO <Rocket className="w-5 h-5"/>
                          </Button>
                        </Link>
                      </div>
                  </CardContent>
              </Card>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 text-left p-6 rounded-lg bg-sky-950/30 border border-sky-800/40">
              <Shield className="w-16 h-16 text-sky-400 flex-shrink-0" />
              <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Garantia Incondicional de 7 Dias</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed">Seu risco é zero. Se, por qualquer motivo, você não estiver 100% satisfeito, basta enviar um e-mail e nós devolveremos cada centavo do seu investimento. <strong className="text-yellow-400">Simples assim.</strong></p>
              </div>
          </div>

          <Separator className="bg-neutral-700 my-12" />

          <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-100">❓ Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full text-lg">
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className="border-b-neutral-800"><AccordionTrigger className="text-neutral-100 hover:no-underline text-left py-6">{item.question}</AccordionTrigger><AccordionContent className="text-neutral-400 text-base text-left leading-relaxed pb-6">{item.answer}</AccordionContent></AccordionItem>
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
      <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1198526755291146&ev=PageView&noscript=1" /></noscript>
    </>
  )
}
