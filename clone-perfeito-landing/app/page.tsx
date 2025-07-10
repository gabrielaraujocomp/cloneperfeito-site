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
  MessageSquare,
  Sparkles,
  Shield,
  Smartphone,
  Lock,
  LayoutDashboard,
  UserPlus,
  ImageIcon,
  ShoppingBag,
  Camera,
  Briefcase,
  Instagram,
  Star,
  Gift,
  Heart,
  MousePointerClick,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function ClonePerfeitoFinalPage() {
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8];

  // ===== LÓGICA PARA A BARRA DE CHECKOUT FLUTUANTE =====
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
  // ===== FIM DA LÓGICA =====


  const modules = [
    { icon: <LayoutDashboard className="text-sky-400"/>, title: "Módulo 1: Comece Aqui", description: "Boas-vindas e o guia inicial para preparar seu ambiente de criação em poucos minutos." },
    { icon: <UserPlus className="text-sky-400"/>, title: "Módulo 2: A Escolha das Fotos", description: "O segredo para escolher as fotos certas que garantirão um resultado hiper-realista e impressionante." },
    { icon: <Cpu className="text-sky-400"/>, title: "Módulo 3: Treinando a Inteligência Artificial", description: "O passo a passo para ensinar a IA a criar sua versão digital, com configurações simples e otimizadas." },
    { icon: <Wand2 className="text-sky-400"/>, title: "Módulo 4: A Mágica Acontece", description: "Como usar nossos comandos prontos (prompts) para gerar dezenas de fotos em qualquer estilo que você sonhar." },
    { icon: <ImageIcon className="text-sky-400"/>, title: "Módulo 5: Seu Primeiro Ensaio", description: "Dando vida às suas ideias: gerando suas primeiras imagens e aplicando os toques finais para um resultado profissional." },
  ];

  const bonuses = [
    { icon: <Brain />, title: "Bônus 1 – Agente GPT de Prompts Criativos", description: "Um robô que cria os comandos para você. Gere ideias de ensaios com seu nome, estilo e iluminação com 1 clique." },
    { icon: <Gift />, title: "Bônus 2 – Acesso Vitalício e Atualizações Futuras", description: "Receba todas as novas aulas e melhorias do método para sempre, sem pagar nada a mais por isso." },
  ];

  const faqItems = [
    { value: "item-1", question: "É difícil de fazer? Preciso entender de tecnologia?", answer: "De forma alguma! O método é 100% guiado, passo a passo, feito para iniciantes. Se você sabe seguir uma receita de bolo, você consegue criar suas fotos. É tudo visual e com cliques." },
    { value: "item-2", question: "Preciso de um computador potente?", answer: "Não! Todo o trabalho pesado é feito na nuvem pelas ferramentas. Seu computador será usado apenas para acessar os sites. Se ele roda vídeos no YouTube, ele é perfeito para o curso." },
    { value: "item-3", question: "Quanto tempo leva para aprender e criar as fotos?", answer: "Você aprende o método completo em menos de 1 hora. Depois disso, o processo de treinar a IA com suas fotos leva algumas horas (ela trabalha sozinha). Uma vez treinado, você cria um ensaio inteiro em menos de 20 minutos." },
    { value: "item-4", question: "Terei que pagar algo além do curso?", answer: "Sim. Há um custo de $10 (cerca de R$50) para treinar sua 'versão digital' na plataforma que usamos. Esse pagamento único cria seu modelo para sempre, e com ele você pode gerar milhares de fotos. É um investimento com um retorno visual gigantesco." },
    { value: "item-5", question: "As fotos ficam parecidas comigo de verdade?", answer: "Sim, o realismo é o ponto alto do método. Ao seguir nosso passo a passo na escolha das fotos e no treinamento, o resultado são imagens que as pessoas juram que foram feitas por um fotógrafo profissional." },
    { value: "item-6", question: "E se eu tiver alguma dúvida durante o processo?", answer: "Você terá acesso ao nosso suporte exclusivo para alunos. Qualquer dúvida que surgir, nossa equipe estará pronta para te ajudar a ter os melhores resultados." }
  ];

  const offerItems = [
    { text: "Curso Clone Perfeito (5 Módulos)", value: "R$197" },
    { text: "Suporte Individual para Alunos", value: "R$97" },
    { text: "Bônus 1 - Agente GPT de Prompts", value: "R$47" },
    { text: "Bônus 2 - Acesso Vitalício e Atualizações", value: "Inestimável" }
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

        <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-20">
          
          <section className="space-y-8">
              <Image src="/images/bg-cp.jpg" alt="Galeria de retratos hiper-realistas gerados por Inteligência Artificial" width={1200} height={500} className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-black/30" priority />
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-neutral-100 leading-tight">
                  Crie fotos suas que parecem de um ensaio profissional...
                </h1>
                <p className="text-lg md:text-xl text-yellow-400 font-medium">
                  sem câmera, sem estúdio e sem sair de casa.
                </p>
              </div>
              <div className="text-lg text-neutral-400 max-w-2xl mx-auto text-center leading-relaxed">
                  <p>Com o <strong className="text-white">Clone Perfeito</strong>, você aprende em <strong className="text-white">menos de 1 hora</strong> a usar inteligência artificial para gerar fotos lindas e profissionais, em qualquer estilo ou lugar do mundo.</p>
              </div>
          </section>

          <section className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 md:p-8 space-y-4 text-center">
            <h2 className="text-2xl font-bold text-white">É sério, qualquer um consegue.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-neutral-300">
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-8 h-8 text-rose-400"/>
                <p>Mesmo que <strong className="text-white">nunca tenha mexido</strong> com IA.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MousePointerClick className="w-8 h-8 text-rose-400"/>
                <p>Mesmo que <strong className="text-white">não entenda nada</strong> de tecnologia.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-rose-400"/>
                <p>O método é <strong className="text-white">guiado, simples e direto</strong> ao ponto.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 text-center mb-10">Veja o que você vai conseguir fazer:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Briefcase className="w-10 h-10 text-sky-400 flex-shrink-0"/><p className='text-lg'>Fotos de nível profissional para seu LinkedIn ou marca.</p></CardContent></Card>
              <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Instagram className="w-10 h-10 text-sky-400 flex-shrink-0"/><p className='text-lg'>Um feed de Instagram com uma estética impecável.</p></CardContent></Card>
              <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Camera className="w-10 h-10 text-sky-400 flex-shrink-0"/><p className='text-lg'>Ensaios em Paris, NY ou num café estiloso, sem sair do lugar.</p></CardContent></Card>
              <Card className="bg-neutral-800 border-neutral-700"><CardContent className="p-4 flex items-center gap-4"><Sparkles className="w-10 h-10 text-sky-400 flex-shrink-0"/><p className='text-lg'>Imagens criativas com o seu rosto para qualquer projeto.</p></CardContent></Card>
            </div>
          </section>

          <div className="w-full flex justify-center pt-4">
            <Link href="#checkout">
              <Button size="lg" className="w-full md:w-auto text-lg font-semibold px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 focus-visible:bg-green-600">
                QUERO TER FOTOS ASSIM
              </Button>
            </Link>
          </div>

          <Separator className="bg-neutral-700" />

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 text-center">Para quem é o Clone Perfeito?</h2>
            <p className="text-lg text-center text-neutral-400 max-w-2xl mx-auto">Se você se identifica com algum destes pontos, este método foi desenhado para você:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <Card className="bg-neutral-800 border-neutral-700/80">
                <CardHeader><CardTitle className="flex items-center gap-3"><Star className="text-yellow-400"/>Para quem quer se destacar</CardTitle></CardHeader>
                <CardContent><p className="text-neutral-300">Você quer um perfil mais bonito e profissional, que chame a atenção e gere uma primeira impressão incrível.</p></CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700/80">
                <CardHeader><CardTitle className="flex items-center gap-3"><Briefcase className="text-yellow-400"/>Para o profissional ambicioso</CardTitle></CardHeader>
                <CardContent><p className="text-neutral-300">Você precisa de fotos corporativas de alta qualidade para o LinkedIn e para sua marca pessoal, mas sem o custo de um fotógrafo.</p></CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700/80">
                <CardHeader><CardTitle className="flex items-center gap-3"><Heart className="text-yellow-400"/>Para quem valoriza a estética</CardTitle></CardHeader>
                <CardContent><p className="text-neutral-300">Você ama um feed organizado e fotos estilosas, mas não tem tempo ou paciência para produções fotográficas complexas.</p></CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700/80">
                <CardHeader><CardTitle className="flex items-center gap-3"><Rocket className="text-yellow-400"/>Para o criativo e curioso</CardTitle></CardHeader>
                <CardContent><p className="text-neutral-300">Você adora tecnologia, inovação e quer explorar o poder da IA para criar algo único e se divertir com sua própria imagem.</p></CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-yellow-400 pl-6 mt-8 text-xl text-center italic text-neutral-300 max-w-2xl mx-auto">
              É uma porta de entrada para uma nova estética pessoal. Uma nova forma de se ver. <strong className="text-white not-italic">E de ser visto.</strong>
            </blockquote>
          </section>

          <div className="pt-8"><h2 className="text-2xl font-bold text-left md:text-center text-neutral-100 mb-8 flex items-center justify-start md:justify-center gap-3"><Sparkles className="text-yellow-400"/> Criações de Alunos Comuns Como Você</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{studentCreations.map((num) => (<div key={num} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg"><Image src={`/images/gerada-${num}.jpg`} alt={`Ensaio gerado por aluno ${num}`} width={300} height={400} className="w-full h-full object-cover transition-transform hover:scale-105" /></div>))}</div></div>

          <Separator className="bg-neutral-700" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-neutral-100">O que você vai aprender (o passo a passo da mágica)</h2>
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

          <h2 className="text-3xl md:text-4xl font-bold text-left text-neutral-100 pt-8">E ainda leva 2 Bônus para acelerar seus resultados</h2>
          <div className="space-y-4">{bonuses.map((bonus, index) => (<Card key={index} className="bg-neutral-800/50 border-neutral-700"><CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4"><Check className="w-6 h-6 text-green-400" /><CardTitle className="text-xl text-left text-neutral-100">{bonus.title}</CardTitle></CardHeader><CardContent className="text-neutral-300 pl-16 pb-4 text-left">{bonus.description}</CardContent></Card>))}</div>

          <h2 id="checkout" className="text-3xl md:text-4xl font-bold text-center text-neutral-100 pt-12">Sua vez de ter uma imagem impactante</h2>

          <div className="relative mt-2">
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
                              <p className="text-green-400 font-bold text-sm sm:text-base whitespace-nowrap ml-2">INCLUSO</p>
                            )}
                          </div>
                        ))}
                      </div>

                      <Separator className="bg-neutral-700/50"/>
                      
                      <div className="text-center space-y-4">
                          <div className="inline-block bg-green-500/10 text-green-400 font-bold py-1 px-3 rounded-full text-sm">DESCONTO DE 80% HOJE</div>
                          <p className="text-lg text-neutral-400">De <span className="line-through">R$494</span> por apenas:</p>
                          <p className="text-4xl sm:text-5xl font-bold text-white">R$ 97</p>
                          <p className="text-2xl font-bold text-yellow-400">ou 12x de R$ 9,74</p>
                      </div>
                      
                      <div className="pt-4">
                          <Link href="https://pay.hotmart.com/P100679254E?checkoutMode=10">
                              <Button size="lg" className="w-full text-base sm:text-lg font-semibold px-4 sm:px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 focus-visible:bg-green-600">
                                  QUERO CRIAR MINHAS FOTOS COM DESCONTO
                              </Button>
                          </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-6 text-sm text-neutral-400">
                          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /><span>Garantia de 7 dias</span></div>
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
                  <p className="text-neutral-300 text-lg leading-relaxed">Você totalmente maravilhado ou seu dinheiro de volta. Se, por qualquer motivo, você achar que o método não é para você, basta enviar um e-mail e devolveremos 100% do seu investimento. <strong className="text-yellow-400">O risco é todo nosso.</strong></p>
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
