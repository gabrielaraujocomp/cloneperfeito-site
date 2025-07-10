'use client'; // Adiciona a diretiva para indicar que este é um Componente de Cliente

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
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
  Camera,
  Briefcase,
  Instagram,
  Star,
  Gift,
  Heart,
  MousePointerClick,
  Users,
  ImageUp,
  BrainCircuit,
  Download,
  DollarSign
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function ClonePerfeitoFinalPage() {
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
    { value: "item-1", question: "É muito difícil? Preciso entender de tecnologia?", answer: "De forma alguma! Essa é a maior vantagem do método. Ele foi desenhado para ser 100% visual e guiado, passo a passo. Se você sabe usar redes sociais e seguir instruções simples, você está mais do que preparado. Não precisa de nenhum conhecimento técnico." },
    { value: "item-2", question: "Preciso de um computador da NASA?", answer: "Definitivamente não. Todo o processamento pesado é feito online, nos servidores das ferramentas que usamos. Seu computador serve apenas para acessar os sites. Se ele consegue rodar vídeos no YouTube sem travar, ele é perfeito para o curso." },
    { value: "item-3", question: "Quanto tempo até eu ver minhas primeiras fotos prontas?", answer: "O aprendizado é rápido: você entende todo o método em menos de 1 hora. O treinamento da IA com suas fotos leva algumas horas (mas ela trabalha sozinha, você pode ir fazer outra coisa). Depois que sua 'versão digital' estiver pronta, você cria um ensaio completo, com dezenas de fotos, em menos de 20 minutos." },
    { value: "item-4", question: "Terei outros custos além do valor do curso?", answer: "Sim, e somos 100% transparentes sobre isso. Para criar sua 'versão digital' (o chamado clone) na plataforma profissional que ensinamos, há um custo único de $10 dólares. Esse valor é pago diretamente à plataforma e cria seu modelo de forma permanente. Com ele, você pode gerar milhares de fotos, tornando o custo-benefício absurdo." },
    { value: "item-5", question: "As fotos ficam realmente parecidas comigo?", answer: "Sim, o realismo é o ponto mais impressionante. O segredo está no Módulo 2, onde ensinamos a técnica exata para selecionar as fotos de treino. Seguindo esse passo, o resultado são imagens que as pessoas ao seu redor jurarão que foram feitas em um estúdio profissional." },
    { value: "item-6", question: "E se eu me sentir travado ou com dúvidas?", answer: "Impossível ficar travado. Ao entrar, você ganha acesso ao nosso suporte exclusivo para alunos. Qualquer pergunta, qualquer dificuldade, nossa equipe estará a uma mensagem de distância para te ajudar a ter os melhores resultados possíveis." }
  ];

  const offerItems = [
    { text: "Curso Clone Perfeito (5 Módulos)", value: "R$197" },
    { text: "Suporte Individual para Alunos", value: "R$97" },
    { text: "Bônus 1 - Agente GPT de Prompts", value: "R$47" },
    { text: "Bônus 2 - Acesso Vitalício e Atualizações", value: "Inestimável" }
  ];


  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      <div className="bg-[#191919] text-neutral-300 font-sans antialiased overflow-x-hidden">

        <div className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-700/50 transition-transform duration-300 ${isBarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="max-w-4xl mx-auto flex items-center justify-between p-3 px-4">
            <span className="text-sm font-medium text-neutral-200 hidden sm:block">A estética que você sempre quis, com 80% OFF.</span>
            <span className="text-sm font-medium text-neutral-200 sm:hidden">Seu acesso com 80% OFF</span>
            <Link href="#checkout">
              <Button size="sm" className="bg-rose-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm">QUERO CRIAR MINHAS FOTOS</Button>
            </Link>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-20 md:space-y-24">
          
          <section className="space-y-8 text-center">
              <Image src="/images/bg-cp.jpg" alt="Galeria de retratos hiper-realistas gerados por Inteligência Artificial" width={1200} height={500} className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-black/30" priority />
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Crie fotos suas que parecem de um ensaio profissional...</h1>
                <p className="text-xl md:text-2xl text-yellow-400 font-medium">sem câmera, sem estúdio e sem sair de casa.</p>
              </div>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">Com o <strong className="text-white">Clone Perfeito</strong>, você aprende em <strong className="text-white">menos de 1 hora</strong> a usar inteligência artificial para gerar fotos lindas e profissionais, em qualquer estilo ou lugar do mundo.</p>
          </section>
          
          <section className="py-8">
            <div className="text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">De selfies comuns a um perfil de capa de revista.</h2>
              <p className="text-lg text-neutral-400 text-center">Veja a mágica acontecer com o método Clone Perfeito.</p>
            </div>
            <div className="mt-12 space-y-12">
              <div className="space-y-4">
                <h3 className="text-center text-lg font-semibold text-neutral-400 tracking-wider">ANTES</h3>
                <Image src="/images/antescp.jpg" alt="Fotos de selfie usadas como base para o treinamento da IA" width={1200} height={343} className="rounded-xl shadow-lg w-full h-auto" />
                <p className="text-center text-neutral-500 text-sm">Apenas algumas fotos comuns do seu celular.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-center text-xl font-bold text-yellow-400 tracking-wider">✨ DEPOIS ✨</h3>
                <Image src="/images/depoiscp.jpg" alt="Ensaios fotográficos profissionais gerados por inteligência artificial" width={1200} height={343} className="rounded-xl shadow-2xl shadow-yellow-500/10 w-full h-auto" />
                <p className="text-center text-neutral-500 text-sm">Ensaios incríveis gerados com a sua 'versão digital'.</p>
              </div>
            </div>
          </section>

          <Separator className="bg-neutral-800" />
          
          <section className="space-y-8 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Deixa eu te perguntar…</h2>
            <p className="text-lg leading-relaxed text-neutral-300">Quantas vezes você viu um perfil incrível no Instagram, com fotos super estéticas, e pensou: <strong className="text-white">“Se eu tivesse fotos assim, minha vida online seria outra”</strong>?</p>
            <blockquote className="border-l-4 border-yellow-400 pl-6 my-4 text-xl italic text-neutral-300">
              A verdade é que a imagem certa abre portas. Ela gera respeito, admiração, oportunidades e, acima de tudo, <strong className="text-white not-italic">aumenta nossa própria confiança.</strong>
            </blockquote>
            <p className="text-lg leading-relaxed text-neutral-300">Se você sempre quis ter esse poder, mas a ideia de contratar um fotógrafo, achar um estúdio e fazer poses parecia cara, demorada ou intimidadora... <strong className="text-yellow-400">sua hora chegou.</strong></p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Como funciona na prática?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><span className="text-2xl font-bold text-sky-400">1</span></div>
                <h3 className="text-xl font-bold text-white mb-2">Envie Suas Fotos</h3>
                <p className="text-neutral-400">Você escolhe de 10 a 15 fotos suas (selfies, de corpo) e faz o upload na plataforma.</p>
              </Card>
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><span className="text-2xl font-bold text-sky-400">2</span></div>
                <h3 className="text-xl font-bold text-white mb-2">Treine a IA</h3>
                <p className="text-neutral-400">Com um clique, você manda a IA estudar suas fotos para criar sua "versão digital" perfeita.</p>
              </Card>
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><span className="text-2xl font-bold text-sky-400">3</span></div>
                <h3 className="text-xl font-bold text-white mb-2">Descreva a Cena</h3>
                <p className="text-neutral-400">Use nossos modelos prontos para escrever o que você quer: "em Paris", "no escritório", etc.</p>
              </Card>
              <Card className="bg-neutral-800/50 border-neutral-700 p-6 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-900/50 border border-sky-700 mb-4"><span className="text-2xl font-bold text-sky-400">4</span></div>
                <h3 className="text-xl font-bold text-white mb-2">Receba a Mágica</h3>
                <p className="text-neutral-400">Em minutos, a IA te entrega dezenas de fotos profissionais e realistas para você usar como quiser.</p>
              </Card>
            </div>
            <p className="text-center mt-10 text-xl text-yellow-400 font-semibold">É simples assim. É tecnologia com o método certo.</p>
          </section>

          <div className="w-full flex justify-center pt-4">
            <Link href="#checkout">
              <Button size="lg" className="w-full md:w-auto text-lg font-semibold px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">QUERO COMEÇAR AGORA</Button>
            </Link>
          </div>

          <Separator className="bg-neutral-800" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-white">O que você vai aprender (o passo a passo da mágica)</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700 border-l-4 border-l-sky-400 overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-5">
                  <span className="text-neutral-400">{module.icon}</span>
                  <CardTitle className="text-xl text-left text-white">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-300 pl-20 pb-5 text-left -mt-2">{module.description}</CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-white pt-8">E ainda leva 2 Bônus para acelerar seus resultados</h2>
          <div className="space-y-4">{bonuses.map((bonus, index) => (<Card key={index} className="bg-neutral-800/50 border-neutral-700"><CardHeader className="flex flex-row items-center gap-4 space-y-0 p-5"><Check className="w-6 h-6 text-green-400" /><CardTitle className="text-xl text-left text-white">{bonus.title}</CardTitle></CardHeader><CardContent className="text-neutral-300 pl-16 pb-4 text-left">{bonus.description}</CardContent></Card>))}</div>

          <section className="bg-green-950/40 border border-green-800/50 rounded-xl p-8 text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3"><DollarSign className="w-8 h-8 text-green-400" /> E se você pudesse ganhar dinheiro com isso?</h3>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">Embora o foco seja sua transformação pessoal, vamos te mostrar em uma aula bônus como você pode facilmente oferecer esse serviço e fazer uma <strong className="text-green-400">renda extra</strong>, vendendo ensaios para pessoas e empresas do mundo todo.</p>
            <p className="text-lg text-white font-semibold">É uma habilidade valiosa que pode se pagar em poucos dias.</p>
          </section>


          <h2 id="checkout" className="text-4xl md:text-5xl font-bold text-center text-white pt-12">Sua vez de ter uma imagem impactante</h2>

          <div className="relative mt-2">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-yellow-500 rounded-2xl blur-xl opacity-20"></div>
              <Card className="relative bg-neutral-800/60 backdrop-blur-md border border-neutral-700/50 shadow-2xl shadow-black/30 rounded-xl">
                  <CardContent className="p-6 md:p-8 space-y-6">
                      <div className="space-y-4 text-neutral-200">
                        {offerItems.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <p className="text-base sm:text-lg text-white">{item.text}</p>
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
                              <Button size="lg" className="w-full text-base sm:text-lg font-semibold px-4 sm:px-10 py-7 bg-rose-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">QUERO CRIAR MINHAS FOTOS COM DESCONTO</Button>
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

          <div className="mt-12 flex flex-col md:flex-row items-center gap-8 text-left p-8 rounded-lg bg-sky-950/30 border border-sky-800/40">
              <Shield className="w-20 h-20 text-sky-400 flex-shrink-0" />
              <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sua Satisfação ou seu Dinheiro de Volta</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed">Você tem 7 dias de garantia incondicional. Entre, assista às aulas, explore o método e, se por qualquer motivo, você não ficar absolutamente maravilhado com o que é possível criar, basta enviar um e-mail. Devolveremos 100% do seu investimento, sem perguntas. <strong className="text-yellow-400">O risco é todo nosso.</strong></p>
              </div>
          </div>
          
          <Separator className="bg-neutral-800 my-12" />

          <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center text-white">❓ Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full text-lg">
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className="border-b-neutral-800">
                    <AccordionTrigger className="text-white hover:no-underline text-left py-6">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-neutral-300 text-base text-left leading-relaxed pb-6">{item.answer}</AccordionContent>
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
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1198526755291146&ev=PageView&noscript=1" />
      </noscript>
    </>
  )
}
