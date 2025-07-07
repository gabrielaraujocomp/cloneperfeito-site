'use client'; // Adiciona a diretiva para indicar que este é um Componente de Cliente

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
  GraduationCap
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
    { icon: <LayoutDashboard className="text-sky-400"/>, title: "Módulo 1: Início da Jornada", description: "Boas-vindas, mentalidade correta e o que você vai aprender para ter resultados." },
    { icon: <Cpu className="text-sky-400"/>, title: "Módulo 2: Preparando o Terreno", description: "Criando sua conta, escolhendo o modelo e preparando o ambiente de criação." },
    { icon: <UserPlus className="text-sky-400"/>, title: "Módulo 3: Preparando seu Clone", description: "Como preparar suas fotos, escolher a Trigger Phrase e otimizar o treinamento." },
    { icon: <Wand2 className="text-sky-400"/>, title: "Módulo 4: Treinamento e Configurações", description: "Entendendo as configurações secretas para iniciar um treinamento de alta qualidade." },
    { icon: <ImageIcon className="text-sky-400"/>, title: "Módulo 5: Criando com seu Clone", description: "Como gerar imagens incríveis e extrair prompts otimizados para vender mais." },
    { icon: <MessageSquare className="text-yellow-400"/>, title: "Módulo 6: Prospecção e Fechamento", description: "Scripts prontos para DMs (BR, EUA, Europa) e estratégia de fechamento." },
    { icon: <Globe className="text-yellow-400"/>, title: "Módulo 7: Vendas Internacionais", description: "Como vender em Real, Dólar e Euro, usando as plataformas e carteiras certas." },
    { icon: <GraduationCap className="text-green-400"/>, title: "Módulo 8: Encerramento e Próximos Passos", description: "Conclusão do método e direcionamentos para escalar seus resultados." }
  ];

  const bonuses = [
    { icon: <Brain />, title: "Bônus 1 – Agente GPT de Prompts para Ensaios", description: "Gere prompts ultra detalhados com seu nome, estilo e iluminação com 1 clique." },
    { icon: <Film />, title: "Bônus 2 – Como criar Clones e Ensaios com o ChatGPT", description: "Aprenda a criar seus primeiros ensaios de forma 100% gratuita." },
    { icon: <Rocket />, title: "Bônus 3 – Estratégia Express de Renda Rápida com IA", description: "Como fazer sua primeira venda em 72h com um perfil novo." }
  ];

  const faqItems = [
    { value: "item-1", question: "Isso é um curso de inteligência artificial?", answer: "Não. É um método prático de como fazer dinheiro com IA, criando ensaios de fotos e vendendo como serviço." },
    { value: "item-2", question: "Eu preciso saber editar ou programar?", answer: "Não. Tudo é guiado. Você vai só seguir o passo a passo e usar as ferramentas com os templates prontos." },
    { value: "item-3", question: "Preciso ter seguidores?", answer: "Não. O curso ensina como prospectar com mensagens mesmo tendo 0 seguidores." },
    { value: "item-4", question: "Quanto eu preciso investir depois?", answer: "O custo para gerar o clone é de $10 dólares (você aprende como usar com lucro). Depois disso, você pode reinvestir parte das vendas." },
    { value: "item-5", question: "Esse método já funcionou pra outras pessoas?", answer: "Sim. A página tem vários exemplos reais. Gente que nunca mexeu com IA faturando com os ensaios." },
    { value: "item-6", question: "Posso vender pra fora do Brasil?", answer: "Sim! Você vai aprender como receber em euro, dólar e usar a escassez certa pra fechar clientes gringos." }
  ];

  const offerItems = [
    { text: "Curso Clone Perfeito Completo", value: "R$197" },
    { text: "Acesso Vitalício e Suporte", value: "R$97" },
    { text: "Mapa Mental do Curso", value: "R$27" },
    { text: "Bônus 1 - Agente GPT", value: "R$47" },
    { text: "Bônus 2 - Ensaios com ChatGPT", value: "R$29" },
    { text: "Bônus 3 - Estratégia de Renda Rápida", value: "R$97" }
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
            <span className="text-sm font-medium text-neutral-200 hidden sm:block">Garanta seu acesso com 80% OFF.</span>
            <span className="text-sm font-medium text-neutral-200 sm:hidden">Acesso com 80% OFF</span>
            <Link href="#checkout">
              <Button size="sm" className="bg-rose-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm">
                QUERO MEU ACESSO
              </Button>
            </Link>
          </div>
        </div>
        
        <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 space-y-10 md:space-y-12">
          
          <section className="space-y-8">
              <Image 
                  src="/images/bg-cp.jpg" 
                  alt="Galeria de retratos hiper-realistas gerados por Inteligência Artificial"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-black/30"
                  priority
              />
              <div className="flex items-start gap-4 p-6 rounded-lg bg-yellow-950/50 border border-yellow-800/30">
                  <AlertTriangle className="w-12 h-12 sm:w-10 sm:h-10 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-yellow-100">
                        Pessoas comuns estão faturando em dólar, euro e real com um método inédito que ensina a vender ensaios fotográficos hiper-realistas com IA.
                    </h1>
                    <p className="text-lg md:text-2xl font-bold text-neutral-50 mt-4">
                        E você pode ser o <span className="text-yellow-400">próximo.</span>
                    </p>
                  </div>
              </div>
          </section>
          
          <div className="w-full flex justify-center">
            <Link href="#checkout">
              <Button size="lg" className="w-full md:w-auto text-lg font-semibold px-8 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 focus-visible:bg-green-600">
                  Quero garantir meu acesso com desconto
              </Button>
            </Link>
          </div>

          <div className="pt-8 mb-8 md:mb-12">
              <h2 className="text-2xl font-bold text-left md:text-center text-neutral-100 mb-8 flex items-center justify-start md:justify-center gap-3"><Users className="text-yellow-400"/> A prova de que o método funciona</h2>
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
          
          <Separator className="bg-neutral-700" />

          <div className="flex items-start gap-4 p-6 rounded-lg bg-red-950/50 border border-red-800/30">
            <Flame className="w-8 h-8 md:w-6 md:h-6 text-red-500 mt-1 flex-shrink-0" />
            <p className="text-lg text-red-100">Se você está procurando uma maneira <strong className="text-red-400">real, prática e rápida</strong> de fazer dinheiro com algo novo, inovador e que poucas pessoas estão explorando (mas que tem demanda no mundo inteiro)... então <strong className="text-red-400">pare tudo</strong> e leia essa página até o fim.</p>
          </div>
          
          <blockquote className="border-l-4 border-neutral-700 pl-6 italic text-neutral-400 text-lg">Porque o que vou te mostrar agora tem o potencial de se tornar uma nova e empolgante <strong className="text-yellow-400 not-italic">fonte de renda na sua vida</strong> — e falo isso com total seriedade.</blockquote>

          <h2 className="text-3xl md:text-4xl font-bold text-left text-neutral-100 pt-12 border-b border-neutral-800 pb-4">Deixa eu te perguntar…</h2>

          <p className="text-lg leading-relaxed">Quantas vezes você já ficou com aquela sensação de:</p>
          
          <blockquote className="border-l-4 border-neutral-700 pl-6 my-6 text-xl italic text-neutral-400">“Se eu tivesse entrado nisso quando ainda era novidade… hoje estaria ganhando dinheiro fácil com isso.”</blockquote>

          <Card className="bg-neutral-800/50 border-neutral-700 my-8">
              <CardContent className="p-6 space-y-4">
                  <p className="text-lg text-neutral-300">Lembra de quando...</p>
                  <div className="flex items-start gap-4"><Users className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" /><p className="text-neutral-400">...os primeiros vídeos explodiram no <strong className="font-medium text-white">TikTok?</strong></p></div>
                  <div className="flex items-start gap-4"><Package className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" /><p className="text-neutral-400">...as pessoas começaram a vender na <strong className="font-medium text-white">Shopee</strong> e ganharam rios de dinheiro com dropshipping?</p></div>
                  <div className="flex items-start gap-4"><Brain className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" /><p className="text-neutral-400">...a galera começou a usar o <strong className="font-medium text-white">ChatGPT</strong> antes de todo mundo e virou referência só porque aprendeu antes?</p></div>
              </CardContent>
          </Card>

          <div className="space-y-6">
              <p className="text-xl leading-relaxed"><strong className="text-yellow-400">Pois é.</strong> Essa página aqui é exatamente esse momento.</p>
              <p className="text-xl leading-relaxed"><strong className="text-yellow-400">A diferença?</strong> É que dessa vez você chegou a tempo.</p>
          </div>

          <p className="text-lg leading-relaxed">Eu vou te mostrar um método que pouquíssimas pessoas conhecem… E que permite que qualquer pessoa — mesmo leiga — consiga criar ensaios de fotos ultra-realistas, com aparência profissional, usando Inteligência Artificial...</p>
          <p className="text-xl font-medium text-neutral-100">E mais importante:</p>
          <blockquote className="border-l-4 border-neutral-700 pl-6 text-neutral-400 text-lg">…vender esses ensaios por <span className="text-white not-italic">R$200, R$300,</span> ou até <span className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded-md not-italic">39 dólares/euros</span> para pessoas do Brasil, da Europa ou dos EUA — <span className="text-red-400 not-italic">sem câmera, sem estúdio, sem fotógrafo e sem sair de casa.</span></blockquote>
          <p className="text-lg leading-relaxed">Eu sei que isso parece absurdo à primeira vista. Mas continua comigo. Você vai ver que tudo faz sentido. E vai entender como isso pode se tornar sua fonte de renda ainda esse mês.</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-neutral-100 pt-12 border-b border-neutral-800 pb-4">O que você vai receber no Clone Perfeito</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700 border-l-4 border-l-yellow-400 overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <span className="text-neutral-400">{module.icon}</span>
                  <CardTitle className="text-xl text-left text-neutral-100">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-300 pl-16 text-left">{module.description}</CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-neutral-100 pt-12 border-b border-neutral-800 pb-4">E ainda leva 3 Bônus Especiais</h2>
          <div className="space-y-4">{bonuses.map((bonus, index) => (<Card key={index} className="bg-neutral-800/50 border-neutral-700"><CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2"><Plus className="w-5 h-5 text-green-400" /><CardTitle className="text-xl text-left text-neutral-100">{bonus.title}</CardTitle></CardHeader><CardContent className="text-neutral-300 pl-12 text-left">{bonus.description}</CardContent></Card>))}</div>
          
          <div className="pt-8"><h2 className="text-2xl font-bold text-left md:text-center text-neutral-100 mb-8 flex items-center justify-start md:justify-center gap-3"><Sparkles className="text-yellow-400"/> Criações dos Nossos Alunos</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{studentCreations.map((num) => (<div key={num} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg"><Image src={`/images/gerada-${num}.jpg`} alt={`Ensaio gerado por aluno ${num}`} width={300} height={400} className="w-full h-full object-cover transition-transform hover:scale-105" /></div>))}</div></div>

          <section className="pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8 text-left">
                  Prazer, sou o Gabriel. E eu criei o Clone Perfeito.
              </h2>
              <Image
                  src="/images/eu-gabriel.jpg"
                  alt="Foto de Gabriel, criador do Clone Perfeito"
                  width={800}
                  height={500}
                  className="w-full max-w-lg rounded-xl shadow-2xl shadow-black/40 mb-8"
              />
              <div className="max-w-2xl space-y-4 text-lg text-neutral-300 leading-relaxed text-left">
                  <p>Comecei a faculdade de Engenharia da Computação duas semanas antes da pandemia. Mas com tudo parado, tranquei e fui atrás de algo mais prático.</p>
                  <p>Entrei no marketing digital e, nos últimos 4 anos, passei por praticamente todas as áreas: tráfego pago, copywriting, funil, design... Me encontrei mesmo na parte visual e criativa — e acabei trabalhando exclusivamente com um cliente durante esse tempo, gerenciando mais de <strong className="text-white">R$1 milhão</strong> em campanhas.</p>
                  <p>Foi aí que descobri o potencial da IA para criar imagens hiper-realistas.</p>
                  <p>A princípio, minha ideia era só ensinar como gerar esses clones e criar ensaios incríveis com IA. Mas resolvi testar uma coisa: comecei a oferecer esses ensaios como serviço pra pessoas de outros países.</p>
                  <p>O resultado? <strong className="text-white">Mais de R$10.000 em menos de 1 mês.</strong></p>
                  <p>Percebi que isso não era só uma ferramenta legal. Era uma <strong className="text-yellow-400">nova fonte de renda, acessível, estética e vendável.</strong></p>
                  <p>Hoje, <strong className="text-yellow-400">ensino exatamente o que aplico</strong> — com método, clareza e foco total em resultado.</p>
              </div>
          </section>
          
          <h2 id="checkout" className="text-3xl md:text-4xl font-bold text-left text-neutral-100 pt-12 border-b border-neutral-800 pb-4">Sua Oferta Especial Hoje</h2>

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
                            <p className="text-neutral-400 font-normal text-sm sm:text-base whitespace-nowrap ml-2">(vale {item.value})</p>
                          </div>
                        ))}
                      </div>

                      <Separator className="bg-neutral-700/50"/>
                      
                      <div className="text-center space-y-4">
                          <div className="inline-block bg-green-500/10 text-green-400 font-bold py-1 px-3 rounded-full text-sm">DESCONTO DE 80%</div>
                          <p className="text-lg text-neutral-400">De <span className="line-through">R$494</span> por apenas:</p>
                          <p className="text-4xl sm:text-5xl font-bold text-white">R$ 97</p>
                          <p className="text-2xl font-bold text-yellow-400">ou 12x de R$ 9,74</p>
                      </div>
                      
                      <div className="pt-4">
                          <Link href="https://pay.hotmart.com/P100679254E?checkoutMode=10">
                              <Button size="lg" className="w-full text-base sm:text-lg font-semibold px-4 sm:px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 focus-visible:bg-green-600">
                                  Quero garantir meu acesso com desconto
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
                  <p className="text-neutral-300 text-lg leading-relaxed">Você totalmente satisfeito ou seu dinheiro de volta na hora. Se, por qualquer motivo, você não estiver 100% satisfeito, basta enviar um e-mail e nós devolveremos todo o seu investimento. <strong className="text-yellow-400">O risco é todo nosso.</strong></p>
              </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 text-left p-6 rounded-lg bg-green-950/30 border border-green-800/40">
              <MessageSquare className="w-16 h-16 text-green-400 flex-shrink-0" />
              <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ainda tem alguma dúvida?</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                      Se você precisa de mais alguma informação antes de decidir, clique no botão abaixo e fale diretamente com nossa equipe no WhatsApp. Estamos aqui para ajudar!
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
