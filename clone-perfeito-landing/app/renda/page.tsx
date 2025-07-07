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
  Users,
  Film,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ClonePerfeitoFinalPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7];
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8];

  const modules = [
    { icon: <Brain />, title: "Aula 1 – Boas-vindas e mentalidade", description: "O exato caminho mental para transformar o método em resultado financeiro (só isso já vale R$97)." },
    { icon: <Cpu />, title: "Aula 2 – Como criar seu clone com IA", description: "Configurações secretas e otimizações que tornam seus ensaios incomparáveis (valor estimado: R$197)." },
    { icon: <Target />, title: "Aula 3 – Gerando ensaios com qualidade absurda", description: "Domine cada detalhe para gerar pacotes com 15, 30 ou 50 fotos que vendem (valor de mercado: R$247)." },
    { icon: <Palette />, title: "Aula 4 – Edição, variações e estilos visuais", description: "Estilos cinematográficos, fashion, vintage, e mais para encantar o cliente." },
    { icon: <Package />, title: "Aula 5 – Montando pacotes e precificando", description: "Estrutura de pacotes, nomes atrativos, valores e margem de lucro." },
    { icon: <MessageSquare />, title: "Aula 6 – Scripts prontos de prospecção", description: "Mensagens testadas para DMs (BR, EUA, Europa), estratégia de promoção e fechamento (R$197 fácil)." },
    { icon: <Globe />, title: "Aula 7 – Como vender em real, dólar e euro", description: "Plataformas, carteira digital, recebimento internacional e estratégia de escassez." }
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

  return (
    <div className="bg-[#191919] text-neutral-300 font-sans antialiased">
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 space-y-12">
        
        {/* ===== NOVA SEÇÃO HERO ===== */}
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
                <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 mt-1 flex-shrink-0" />
                <h1 className="text-2xl md:text-4xl font-bold text-yellow-100">
                    Pessoas comuns estão faturando em dólar com um método inédito que ensina a vender ensaios fotográficos hiper-realistas com IA
                </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50">
                E você pode ser o <span className="text-yellow-400">próximo.</span>
            </h2>
        </section>
        {/* ===== FIM DA SEÇÃO HERO ===== */}
        
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
                            <Card className="bg-neutral-800/50 border-neutral-700 overflow-hidden"><CardContent className="p-0"><Image src={`/images/d${num}.jpg`} alt={`Depoimento de aluno ${num}`} width={400} height={800} className="w-full h-auto" /></CardContent></Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" /><CarouselNext className="hidden sm:flex bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white" />
            </Carousel>
        </div>
        
        <Separator className="bg-neutral-700 my-12" />

        <div className="flex items-start gap-4 p-6 rounded-lg bg-red-950/50 border border-red-800/30">
          <Flame className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <p className="text-lg text-red-100">Se você está procurando uma maneira <strong className="text-red-400">real, prática e rápida</strong> de fazer dinheiro com algo novo, inovador e que poucas pessoas estão explorando (mas que tem demanda no mundo inteiro)... então <strong className="text-red-400">pare tudo</strong> e leia essa página até o fim.</p>
        </div>
        
        <blockquote className="border-l-4 border-neutral-700 pl-6 italic text-neutral-400 text-lg">Porque se você entender o que vou te mostrar agora, sua vida pode <strong className="text-yellow-400 not-italic">mudar completamente</strong> — e não estou exagerando.</blockquote>

        {/* O título da seção */}
<h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">
    Deixa eu te perguntar…
</h2>

<p className="text-lg leading-relaxed">
    Quantas vezes você já ficou com aquela sensação de:
</p>

{/* Citação principal, com mais destaque */}
<blockquote className="border-l-4 border-neutral-700 pl-6 my-6 text-xl italic text-neutral-400">
    “Se eu tivesse entrado nisso quando ainda era novidade… hoje estaria ganhando dinheiro fácil com isso.”
</blockquote>

{/* Bloco de Exemplos Visuais */}
<Card className="bg-neutral-800/50 border-neutral-700 my-8">
    <CardContent className="p-6 space-y-4">
        <p className="text-lg text-neutral-300">
            Lembra de quando...
        </p>
        <div className="flex items-start gap-4">
            <Users className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
            <p className="text-neutral-400">
                ...os primeiros vídeos explodiram no <strong className="font-medium text-white">TikTok?</strong>
            </p>
        </div>
        <div className="flex items-start gap-4">
            <Package className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
            <p className="text-neutral-400">
                ...as pessoas começaram a vender na <strong className="font-medium text-white">Shopee</strong> e ganharam rios de dinheiro com dropshipping?
            </p>
        </div>
        <div className="flex items-start gap-4">
            <Brain className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
            <p className="text-neutral-400">
                ...a galera começou a usar o <strong className="font-medium text-white">ChatGPT</strong> antes de todo mundo e virou referência só porque aprendeu antes?
            </p>
        </div>
    </CardContent>
</Card>

{/* Transições com Ênfase */}
<div className="space-y-6">
    <p className="text-xl leading-relaxed">
        <strong className="text-yellow-400">Pois é.</strong> Essa página aqui é exatamente esse momento.
    </p>
    <p className="text-xl leading-relaxed">
        <strong className="text-yellow-400">A diferença?</strong> É que dessa vez você chegou a tempo.
    </p>
</div>

<p className="text-lg leading-relaxed">
    Eu vou te mostrar um método que pouquíssimas pessoas conhecem… E que permite que qualquer pessoa — mesmo leiga — consiga criar ensaios de fotos ultra-realistas, com aparência profissional, usando Inteligência Artificial...
</p>
        <p className="text-xl font-medium text-neutral-100">E mais importante:</p>
        <blockquote className="border-l-4 border-neutral-700 pl-6 text-neutral-400 text-lg">…vender esses ensaios por <span className="text-white not-italic">R$200, R$300,</span> ou até <span className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded-md not-italic">39 dólares/euros</span> para pessoas do Brasil, da Europa ou dos EUA — <span className="text-red-400 not-italic">sem câmera, sem estúdio, sem fotógrafo e sem sair de casa.</span></blockquote>
        <p className="text-lg leading-relaxed">Eu sei que isso parece absurdo à primeira vista. Mas continua comigo. Você vai ver que tudo faz sentido. E vai entender como isso pode se tornar sua fonte de renda ainda esse mês.</p>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">Mas dá dinheiro de verdade?</h2>
        <p className="text-lg leading-relaxed">Dá. Vamos olhar com seriedade:</p>
        <ul className="space-y-3 text-lg list-none"><li className="flex items-center gap-3"><span className="text-xl">🇧🇷</span> Um pacote com 15 fotos pode ser vendido por <strong className="text-white">R$250 no Brasil</strong></li><li className="flex items-center gap-3"><span className="text-xl">🇺🇸</span> Ou por <strong className="text-white">$39 a $59 dólares</strong> no exterior</li><li className="flex items-center gap-3"><span className="text-xl">🇪🇺</span> Ou por <strong className="text-white">€39 a €69 euros</strong> na Europa</li></ul>
        <p className="text-lg leading-relaxed font-bold text-yellow-400">Agora imagina:</p>
        <ul className="space-y-4 text-lg list-none"><li className="flex items-start gap-3"><span className="text-xl text-sky-400">🔹</span> <div>Vendendo 3 ensaios por semana:<br/><strong className="text-white">3 x R$250 = R$750 por semana = R$3.000 por mês</strong></div></li><li className="flex items-start gap-3"><span className="text-xl text-sky-400">🔹</span> <div>Ou 2 pacotes para gringos por $59 cada:<br/><strong className="text-white">$118 ≈ R$660 por semana = R$2.640 por mês</strong></div></li></ul>
        <p className="text-lg leading-relaxed">E você não precisa pagar fotógrafo, estúdio, nem designer. <strong className="text-red-500">Só saber o método certo.</strong></p>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">O que você vai receber no Clone Perfeito</h2>
        <div className="space-y-4">{modules.map((module, index) => (<Card key={index} className="bg-neutral-800/50 border-neutral-700"><CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2"><span className="text-neutral-400">{module.icon}</span><CardTitle className="text-xl text-neutral-100">{module.title}</CardTitle></CardHeader><CardContent className="text-neutral-300 pl-14">{module.description}</CardContent></Card>))}</div>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">E ainda leva 3 Bônus Especiais</h2>
        <div className="space-y-4">{bonuses.map((bonus, index) => (<Card key={index} className="bg-neutral-800/50 border-neutral-700"><CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2"><Plus className="w-5 h-5 text-green-400" /><CardTitle className="text-xl text-neutral-100">{bonus.title}</CardTitle></CardHeader><CardContent className="text-neutral-300 pl-12">{bonus.description}</CardContent></Card>))}</div>
        <div className="pt-8"><h2 className="text-2xl font-bold text-center text-neutral-100 mb-8 flex items-center justify-center gap-3"><Sparkles className="text-yellow-400"/> Criações dos Nossos Alunos</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{studentCreations.map((num) => (<div key={num} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg"><Image src={`/images/gerada-${num}.jpg`} alt={`Ensaio gerado por aluno ${num}`} width={300} height={400} className="w-full h-full object-cover transition-transform hover:scale-105" /></div>))}</div></div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">Sua Oferta Especial Hoje</h2>
        <Card className="bg-neutral-800/70 border-neutral-700">
            <CardContent className="p-8 space-y-6">
                <div className="space-y-3 text-neutral-300"><div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p>Curso Completo Clone Perfeito <span className="text-neutral-500 line-through">R$297</span></p></div><div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><p>Bônus 1, 2 e 3 <span className="text-neutral-500 line-through">R$197</span></p></div></div>
                <Separator className="bg-neutral-700"/>
                <div className="text-center space-y-4">
                    <p className="text-lg text-neutral-400">De <span className="line-through">R$494</span> por apenas:</p>
                    <p className="text-5xl font-bold text-white">R$ 97</p>
                    <p className="text-neutral-300">ou 12x de R$9,74</p>
                    <div id="checkout" className="pt-4"><Button size="lg" className="w-full text-lg px-10 py-7 bg-rose-600 hover:bg-rose-700 text-white shadow-lg transform hover:scale-105 transition-transform">QUERO GARANTIR MEU ACESSO COM DESCONTO <Flame className="w-5 h-5 ml-2" /></Button></div>
                </div>
            </CardContent>
        </Card>
        
        <Separator className="bg-neutral-700 my-12" />

        <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 text-center">❓ Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full text-lg">
              {faqItems.map(item => (
                <AccordionItem key={item.value} value={item.value} className="border-b-neutral-800">
                  <AccordionTrigger className="text-neutral-100 hover:no-underline text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-neutral-400 text-base">{item.answer}</AccordionContent>
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
  )
}
