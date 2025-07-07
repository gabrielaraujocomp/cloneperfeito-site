import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { 
  AlertTriangle, 
  Flame, 
  ArrowRight,
  Brain,
  Wand2,
  Settings,
  Target,
  Package,
  DollarSign,
  Rocket,
  Check,
  Cpu,
  Palette,
  MessageSquare,
  Globe,
  Plus,
  Sparkles,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ClonePerfeitoFinalPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7];
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8];

  const modules = [
    { icon: <Brain />, title: "Aula 1 – Boas-vindas e mentalidade", description: "O exato caminho mental que você precisa seguir para transformar o método em resultado financeiro." },
    { icon: <Cpu />, title: "Aula 2 – Como criar seu clone com IA", description: "Configurações secretas, trigger phrase e otimizações que tornam seus ensaios incomparáveis." },
    { icon: <Target />, title: "Aula 3 – Gerando ensaios com qualidade absurda", description: "Domine cada detalhe para gerar pacotes com 15, 30 ou 50 fotos que vendem." },
    { icon: <Palette />, title: "Aula 4 – Edição, variações e estilos visuais", description: "Estilos cinematográficos, fashion, vintage, clean, conceitual e mais para encantar o cliente." },
    { icon: <Package />, title: "Aula 5 – Montando pacotes e precificando", description: "Estrutura de pacotes, nomes atrativos, valores, ancoragem e margem de lucro." },
    { icon: <MessageSquare />, title: "Aula 6 – Scripts prontos de prospecção", description: "Mensagens testadas para DMs (BR, EUA, Europa), estratégia de promoção e fechamento." },
    { icon: <Globe />, title: "Aula 7 – Como vender em real, dólar e euro", description: "Plataformas, carteira digital, recebimento internacional e estratégia de escassez." }
  ];

  return (
    <div className="bg-[#191919] text-neutral-300 font-sans antialiased">
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 space-y-12">
        
        <div className="flex items-start gap-4 p-6 rounded-lg bg-yellow-950/50 border border-yellow-800/30">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
          <p className="text-lg text-yellow-100">
            <strong>Pessoas comuns estão faturando em dólar</strong> com um método inédito que ensina a vender ensaios fotográficos hiper-realistas com IA
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 leading-tight">
          E você pode ser o <span className="text-yellow-400">próximo</span>.
        </h1>
        
        <a href="#checkout" className="inline-block text-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg px-6 py-3 transition-colors text-neutral-100 font-medium">
          → Quero aprender a criar e vender ensaios!
        </a>

        {/* Depoimentos em Carrossel */}
        <div className="pt-8">
            <h2 className="text-2xl font-bold text-center text-neutral-100 mb-8 flex items-center justify-center gap-3"><Users className="text-yellow-400"/> A prova de que o método funciona</h2>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                    {testimonials.map((num) => (
                        <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                            <Card className="bg-neutral-800/50 border-neutral-700 overflow-hidden">
                                <CardContent className="p-0">
                                    <Image
                                        src={`/images/d${num}.jpg`}
                                        alt={`Depoimento de aluno ${num}`}
                                        width={400}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
                <CarouselNext className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
            </Carousel>
        </div>
        
        <Separator className="bg-neutral-700 my-12" />

        <div className="flex items-start gap-4 p-6 rounded-lg bg-red-950/50 border border-red-800/30">
          <Flame className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <p className="text-lg text-red-100">
            Se você está procurando uma maneira <strong className="text-red-400">real, prática e rápida</strong> de fazer dinheiro com algo novo, inovador e que poucas pessoas estão explorando (mas que tem demanda no mundo inteiro)... então <strong className="text-red-400">pare tudo</strong> e leia essa página até o fim.
          </p>
        </div>
        
        <blockquote className="border-l-4 border-neutral-700 pl-6 italic text-neutral-400 text-lg">
          Porque se você entender o que vou te mostrar agora, sua vida pode <strong className="text-yellow-400 not-italic">mudar completamente</strong> — e não estou exagerando.
        </blockquote>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">O que é o Clone Perfeito?</h2>
        <p className="text-lg leading-relaxed">É um método completo, passo a passo, onde eu ensino você a:</p>
        <div className="space-y-4 text-lg">
          <div className="flex items-start gap-4"><Wand2 className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1">Criar ensaios de fotos <strong className="text-yellow-400">ultra-realistas</strong> com IA (sem saber nada de design).</p></div>
          <div className="flex items-start gap-4"><Settings className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1">Usar <strong className="text-yellow-400">configurações secretas</strong> que desbloqueiam qualidade absurda nas imagens.</p></div>
          <div className="flex items-start gap-4"><Target className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1"><strong className="text-red-500">Prospecção ativa:</strong> Como oferecer seus ensaios com scripts prontos.</p></div>
          <div className="flex items-start gap-4"><Package className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1">Como montar pacotes de ensaio e <strong className="text-yellow-400">precificar de forma inteligente.</strong></p></div>
          <div className="flex items-start gap-4"><Rocket className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1">E principalmente: como transformar isso numa <strong className="text-red-500">fonte de renda real.</strong></p></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">O que você vai receber</h2>
        <div className="space-y-4">
          {modules.map((module, index) => (
            <Card key={index} className="bg-neutral-800/50 border-neutral-700">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <span className="text-neutral-400">{module.icon}</span>
                <CardTitle className="text-xl text-neutral-100">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-300 pl-14">{module.description}</CardContent>
            </Card>
          ))}
        </div>

        {/* Galeria dos Alunos */}
        <div className="pt-8">
            <h2 className="text-2xl font-bold text-center text-neutral-100 mb-8 flex items-center justify-center gap-3"><Sparkles className="text-yellow-400"/> Criações dos Nossos Alunos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {studentCreations.map((num) => (
                    <div key={num} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={`/images/gerada-${num}.jpg`}
                            alt={`Ensaio gerado por aluno ${num}`}
                            width={300}
                            height={400}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">Sua Oferta Especial Hoje</h2>
        <Card className="bg-neutral-800/70 border-neutral-700">
            <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p>Curso Completo Clone Perfeito <span className="text-neutral-500 line-through">R$297</span></p></div>
                    <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p>Bônus 1: Agente GPT de Prompts <span className="text-neutral-500 line-through">R$97</span></p></div>
                    <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p>Bônus 2: Ensaios com ChatGPT <span className="text-neutral-500 line-through">R$47</span></p></div>
                    <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p>Bônus 3: Estratégia de Renda Rápida <span className="text-neutral-500 line-through">R$57</span></p></div>
                </div>
                <Separator className="bg-neutral-700"/>
                <div className="text-center space-y-4">
                    <p className="text-lg text-neutral-400">De <span className="line-through">R$498</span> por apenas:</p>
                    <p className="text-5xl font-bold text-white">R$ 97</p>
                    <p className="text-neutral-300">ou 12x de R$9,74</p>
                    <div id="checkout" className="pt-4">
                        <Button size="lg" className="w-full text-lg px-10 py-7 bg-rose-600 hover:bg-rose-700 text-white shadow-lg transform hover:scale-105 transition-transform">
                            QUERO GARANTIR MEU ACESSO AGORA <Flame className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <Separator className="bg-neutral-700 my-12" />

        <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 text-center">❓ Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full text-lg">
                <AccordionItem value="item-1" className="border-b-neutral-800">
                    <AccordionTrigger className="text-neutral-100 hover:no-underline text-left">Isso é um curso de inteligência artificial?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 text-base">Não. É um método prático de como fazer dinheiro com IA, criando ensaios de fotos e vendendo como serviço.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-neutral-800">
                    <AccordionTrigger className="text-neutral-100 hover:no-underline text-left">Eu preciso saber editar ou programar?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 text-base">Não. Tudo é guiado. Você vai só seguir o passo a passo e usar as ferramentas com os templates prontos.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b-neutral-800">
                    <AccordionTrigger className="text-neutral-100 hover:no-underline text-left">Posso vender pra fora do Brasil?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 text-base">Sim! Você vai aprender como receber em euro, dólar e usar a escassez certa pra fechar clientes gringos.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        
        <footer className="text-center text-neutral-500 pt-16 border-t border-neutral-800 space-y-4">
            <p>© {new Date().getFullYear()} Clone Perfeito</p>
            <p className="text-sm">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
            <div className="flex justify-center space-x-6 text-sm text-neutral-400">
                <Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
                <Link href="/termos-de-uso" className="hover:text-white">Termos de Uso</Link>
            </div>
        </footer>
        
      </main>
    </div>
  )
}
