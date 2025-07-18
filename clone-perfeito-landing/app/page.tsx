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
  HelpCircle,
  Folder,
  UploadCloud
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ClonePerfeitoFinalPage() {
  const [isBarVisible, setIsBarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
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

  // NOVO PASSO A PASSO, INSPIRADO NA IMAGEM
  const simpleSteps = [
    { number: "1", icon: <Folder className="w-10 h-10 text-yellow-400"/>, title: "Seleciona suas fotos", subtitle: "Sem se preocupar com ângulo ou luz profissional." },
    { number: "2", icon: <UploadCloud className="w-10 h-10 text-yellow-400"/>, title: "Sobe elas para a ferramenta", subtitle: "Tudo ensinado passo a passo, clique a clique." },
    { number: "3", icon: <Wand2 className="w-10 h-10 text-yellow-400"/>, title: "Cria seu clone com 1 clique", subtitle: "Usando as configurações otimizadas que eu passo." },
    { number: "4", icon: <Sparkles className="w-10 h-10 text-yellow-400"/>, title: "Recebe dezenas de ensaios", subtitle: "Em minutos, a IA entrega suas fotos profissionais." },
  ];

  const bonuses = [
    { text: "Agente GPT de Prompts Criativos", value: "R$47" },
    { text: "Aula de Renda Extra com Ensaios", value: "R$97" },
  ];
  
  const upcomingUpdates = [
    { text: "Atualização para Vídeos Cinematográficos", value: "R$150" },
  ];

  const faqItems = [
    { value: "item-1", question: "É muito difícil? Preciso entender de tecnologia?", answer: "De forma alguma! Essa é a maior vantagem do método. Ele foi desenhado para ser 100% visual e guiado, passo a passo. Se você sabe usar redes sociais e seguir instruções simples, você está mais do que preparado. Não precisa de nenhum conhecimento técnico." },
    { value: "item-2", question: "Preciso de um computador da NASA?", answer: "Definitivamente não. Todo o processamento pesado é feito online, nos servidores das ferramentas que usamos. Seu computador serve apenas para acessar os sites. Se ele consegue rodar vídeos no YouTube sem travar, ele é perfeito para o curso." },
    { value: "item-3", question: "Quanto tempo até eu ver minhas primeiras fotos prontas?", answer: "O aprendizado é rápido: você entende todo o método em menos de 1 hora. O treinamento da IA com suas fotos leva algumas horas (mas ela trabalha sozinha, você pode ir fazer outra coisa). Depois que sua 'versão digital' estiver pronta, você cria um ensaio completo, com dezenas de fotos, em menos de 20 minutos." },
    { value: "item-4", question: "Terei outros custos além do valor do curso?", answer: "Sim, e somos 100% transparentes sobre isso. Para criar sua 'versão digital' (o chamado clone) na plataforma profissional que ensinamos, há um custo único de $10 dólares. Esse valor é pago diretamente à plataforma e cria seu modelo de forma permanente. Com ele, você pode gerar milhares de fotos, tornando o custo-benefício absurdo." },
    { value: "item-5", question: "As fotos ficam realmente parecidas comigo?", answer: "Sim, o realismo é o ponto mais impressionante. O segredo está na técnica exata que ensinamos para selecionar as fotos de treino. Seguindo esse passo, o resultado são imagens que as pessoas ao seu redor jurarão que foram feitas em um estúdio profissional." },
    { value: "item-6", question: "E se eu me sentir travado ou com dúvidas?", answer: "Impossível ficar travado. Ao entrar, você ganha acesso ao nosso suporte exclusivo para alunos. Qualquer pergunta, qualquer dificuldade, nossa equipe estará a uma mensagem de distância para te ajudar a ter os melhores resultados possíveis." }
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
          
          {/* 1. O GANCHO */}
          <section className="space-y-6 md:space-y-8 text-center">
              <Image src="/images/bg-cp.jpg" alt="Galeria de retratos hiper-realistas gerados por Inteligência Artificial" width={1200} height={500} className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-black/30" priority />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mt-8">
                  Transforme selfies comuns em ensaios fotográficos profissionais com IA — <br className="hidden md:block" />
                  <span className="text-yellow-400">sem precisar de câmera, fotógrafo ou estúdio.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-300">
                  Em menos de 1 hora, você aprende o passo a passo para criar retratos hiper-realistas que impressionam — usando apenas seu celular e a IA.
              </p>
              <div className="w-full flex justify-center pt-4"><Link href="#checkout"><Button size="lg" className="w-full md:w-auto text-lg font-semibold px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">Quero Criar Ensaios Profissionais</Button></Link></div>
          </section>
          
          {/* 2. A TRANSFORMAÇÃO */}
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
                </CardContent>
            </Card>
          </section>
          
          {/* 3. O "COMO" - PASSO A PASSO SIMPLIFICADO */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">O Processo é Simples Assim:</h2>
            <div className="max-w-2xl mx-auto space-y-12">
              {simpleSteps.map((step) => (
                <div key={step.number} className="flex items-center gap-6 md:gap-8">
                  <span className="text-6xl md:text-7xl font-bold text-neutral-700/80">{step.number}</span>
                  <div className="bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/20">{step.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-lg text-neutral-400">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. A POSSIBILIDADE (FONTE DE RENDA) */}
          <section>
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-700 p-8">
              <CardHeader className="p-0 mb-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Além do Perfil Pessoal: <span className="text-green-400">Uma Nova Fonte de Renda</span></h2>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <p className="text-center text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                    O que começa como uma forma de ter fotos incríveis, rapidamente se torna uma habilidade valiosa. Temos alunos que hoje <strong className="text-white">vendem ensaios fotográficos com IA</strong>, criando para clientes no Brasil e internacionalmente, cobrando por pacotes de fotos <strong className="text-yellow-400">sem precisar de equipamentos caros.</strong>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {studentCreations.slice(0, 4).map((num) => (
                        <div key={num} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                            <Image src={`/images/gerada-${num}.jpg`} alt={`Ensaio fotográfico gerado por aluno ${num}`} width={300} height={400} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 5. A CONFIANÇA (OBJEÇÕES + CRIADOR) */}
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

          <section className="pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Seu Mentor Nessa Jornada</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image src="/images/eu-gabriel.jpg" alt="Foto de Gabriel, criador do Clone Perfeito" width={800} height={500} className="w-full max-w-xs md:max-w-sm rounded-xl shadow-2xl shadow-black/40" />
                <div className="max-w-2xl space-y-4 text-lg text-neutral-300 leading-relaxed text-left">
                    <p>Prazer, sou o Gabriel. Comecei na Engenharia da Computação, mas minha paixão sempre foi o lado prático e criativo da tecnologia. Nos últimos 4 anos, gerenciei mais de <strong className="text-white">R$1 milhão</strong> em campanhas visuais e mergulhei de cabeça na IA.</p>
                    <p>Descobri que o poder de criar clones não era só uma ferramenta legal. Era uma <strong className="text-yellow-400">nova fonte de renda, acessível e vendável.</strong> Criei o Clone Perfeito para te dar esse mesmo poder.</p>
                </div>
              </div>
          </section>

          {/* 6. A OFERTA IRRESISTÍVEL */}
          <h2 id="checkout" className="text-4xl md:text-5xl font-bold text-center text-white pt-12">Sua Oferta Especial de Lançamento</h2>
          
          <div className="relative mt-2">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-yellow-500 rounded-2xl blur-xl opacity-20"></div>
              <Card className="relative bg-neutral-800/60 backdrop-blur-md border border-neutral-700/50 shadow-2xl shadow-black/30 rounded-xl">
                  <CardContent className="p-6 md:p-8 space-y-6">
                      <p className="text-xl font-bold text-white text-center">Acesso completo ao ecossistema Clone Perfeito:</p>
                      <div className="space-y-3 text-neutral-200">
                          <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p className="text-lg text-white">Curso Completo Clone Perfeito (<span className="line-through text-neutral-400">R$197</span>)</p></div>
                          <p className="text-lg font-bold text-white mt-4">E você ainda leva de presente:</p>
                          {bonuses.map((item, index) => (<div key={index} className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p className="text-white">{item.text} (<span className="line-through text-neutral-400">{item.value}</span>)</p></div>))}
                          <p className="text-lg font-bold text-white mt-4">Garanta Acesso a Futuras Atualizações (Grátis por tempo limitado):</p>
                          {upcomingUpdates.map((item, index) => (<div key={index} className="flex items-center gap-3"><Check className="w-5 h-5 text-purple-400 flex-shrink-0" /><p className="text-white">{item.text} (<span className="line-through text-neutral-400">{item.value}</span>)</p></div>))}
                      </div>

                      <Separator className="bg-neutral-700/50"/>

                      <div className="text-center space-y-4">
                          <p className="text-lg text-neutral-400">De <span className="line-through">R$591</span> por apenas:</p>
                          <p className="text-4xl sm:text-5xl font-bold text-yellow-400 animate-pulse">9x de R$ 8,80</p>
                          <p className="text-xl font-medium text-white">ou R$ 67 à vista</p>
                      </div>
                      
                      <div className="pt-4"><Link href="https://pay.hotmart.com/P100679254E?off=82l7lflg&checkoutMode=10"><Button size="lg" className="w-full text-base sm:text-lg font-semibold px-4 sm:px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">QUERO GARANTIR MEU ACESSO COM DESCONTO</Button></Link></div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 pt-6 text-sm text-neutral-400">
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
