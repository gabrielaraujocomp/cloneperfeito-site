import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
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
  Plus
} from "lucide-react"

export default function ClonePerfeitoNotionPage() {
  const faqItems = [
    {
      value: "item-1",
      question: "Isso é um curso de inteligência artificial?",
      answer: "Não. É um método prático de como fazer dinheiro com IA, criando ensaios de fotos e vendendo como serviço.",
    },
    {
      value: "item-2",
      question: "Eu preciso saber editar ou programar?",
      answer: "Não. Tudo é guiado. Você vai só seguir o passo a passo e usar as ferramentas com os templates prontos.",
    },
    {
      value: "item-3",
      question: "Preciso ter seguidores?",
      answer: "Não. O curso ensina como prospectar com mensagens mesmo tendo 0 seguidores.",
    },
    {
      value: "item-4",
      question: "Quanto eu preciso investir depois?",
      answer: "O custo para gerar o clone é de $10 dólares (você aprende como usar com lucro). Depois disso, você pode reinvestir parte das vendas.",
    },
    {
      value: "item-5",
      question: "Esse método já funcionou pra outras pessoas?",
      answer: "Sim. A página tem vários exemplos reais. Gente que nunca mexeu com IA faturando com os ensaios.",
    },
    {
      value: "item-6",
      question: "Posso vender pra fora do Brasil?",
      answer: "Sim! Você vai aprender como receber em euro, dólar e usar a escassez certa pra fechar clientes gringos.",
    },
  ];

  return (
    <div className="bg-[#191919] text-neutral-300 font-sans antialiased">
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 space-y-10">
        
        {/* Callout Inicial */}
        <div className="flex items-start gap-4 p-6 rounded-lg bg-yellow-950/50 border border-yellow-800/30">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
          <p className="text-lg text-yellow-100">
            <strong>Pessoas comuns estão faturando em dólar com um método inédito</strong> que ensina a vender ensaios fotográficos hiper-realistas com IA
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 leading-tight">
          E você pode ser o próximo.
        </h1>
        
        <div className="text-center">
          <a href="#checkout" className="text-lg text-sky-400 hover:text-sky-300 transition-colors">
            → Quero aprender a criar e vender ensaios!
          </a>
        </div>
        
        <Separator className="bg-neutral-700 my-12" />

        {/* Callout de Alerta */}
        <div className="flex items-start gap-4 p-6 rounded-lg bg-red-950/50 border border-red-800/30">
          <Flame className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
          <p className="text-lg text-red-100">
            Se você está procurando uma maneira <strong>real, prática e rápida</strong> de fazer dinheiro com algo novo, inovador e que poucas pessoas estão explorando (mas que tem demanda no mundo inteiro)... então pare tudo e leia essa página até o fim.
          </p>
        </div>
        
        <blockquote className="border-l-4 border-neutral-700 pl-6 italic text-neutral-400 text-lg">
          Porque se você entender o que vou te mostrar agora, sua vida pode mudar completamente — e não estou exagerando.
        </blockquote>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">Deixa eu te perguntar…</h2>
        <p className="text-lg leading-relaxed">Quantas vezes você já ficou com aquela sensação de:</p>
        <blockquote className="border-l-4 border-neutral-700 pl-6 italic text-neutral-400 text-lg">
          “Se eu tivesse entrado nisso quando ainda era novidade… hoje estaria ganhando dinheiro fácil com isso.”
        </blockquote>
        <p className="text-lg leading-relaxed">Lembra de quando começaram os primeiros vídeos no TikTok?<br />Ou quando as pessoas começaram a vender produtos na Shopee e ganharam rios de dinheiro com dropshipping?<br />Ou quando a galera começou a usar o ChatGPT antes de todo mundo e virou referência só porque aprendeu antes?</p>
        <p className="text-lg leading-relaxed"><strong>Pois é.</strong><br/>Essa página aqui é exatamente esse momento.</p>
        <p className="text-lg leading-relaxed"><strong>A diferença?</strong><br/>É que dessa vez você chegou a tempo. Eu vou te mostrar um método que pouquíssimas pessoas conhecem…</p>
        <p className="text-lg leading-relaxed">E que permite que qualquer pessoa — mesmo leiga — consiga criar ensaios de fotos ultra-realistas, com aparência profissional, usando Inteligência Artificial...</p>
        <p className="text-xl font-medium text-neutral-100">E mais importante:</p>
        <blockquote className="border-l-4 border-neutral-700 pl-6 italic text-neutral-400 text-lg">
          …vender esses ensaios por R$300, R$400, ou até <span className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded-md not-italic">39 dólares/euros</span> para pessoas do Brasil, da Europa ou dos EUA — sem câmera, sem estúdio, sem fotógrafo e sem sair de casa.
        </blockquote>

        {/* Mais seções aqui */}
        <p className="text-lg leading-relaxed">Eu sei que isso parece absurdo à primeira vista. Mas continua comigo. Você vai ver que tudo faz sentido. E vai entender como isso pode se tornar sua fonte de renda ainda esse mês.</p>
        
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">O que é o Clone Perfeito?</h2>
        <p className="text-lg leading-relaxed">É um método completo, passo a passo, onde eu ensino você a:</p>
        <div className="space-y-4">
          <div className="flex items-start gap-4"><Wand2 className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1 text-lg">Criar ensaios de fotos ultra-realistas com IA (sem saber nada de design, prompt, ou tecnologia);</p></div>
          <div className="flex items-start gap-4"><Settings className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1 text-lg">Usar configurações secretas que desbloqueiam qualidade absurda nas imagens (que a maioria nem sabe que existe);</p></div>
          <div className="flex items-start gap-4"><Target className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1 text-lg"><strong>Prospecção ativa:</strong> Como oferecer seus ensaios no Instagram para brasileiros, americanos e europeus — com scripts prontos;</p></div>
          <div className="flex items-start gap-4"><Package className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1 text-lg">Como montar pacotes de ensaio (15, 30, 50 fotos) e precificar de forma inteligente;</p></div>
          <div className="flex items-start gap-4"><DollarSign className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1 text-lg">Como vender em reais, dólares e euros — inclusive com uma técnica de <span className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded-md">promoção</span> para fechar mais rápido;</p></div>
          <div className="flex items-start gap-4"><Rocket className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" /><p className="flex-1 text-lg">E principalmente: <strong>como transformar isso numa fonte de renda real.</strong></p></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">O que você vai receber:</h2>
        <p className="text-neutral-500">(E aqui já entra a ancoragem de valor real👇)</p>
        
        <div className="space-y-4">
          <Card className="bg-neutral-800/50 border-neutral-700">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <Brain className="w-6 h-6 text-neutral-400" />
              <CardTitle className="text-xl text-neutral-100">Aula 1 – Boas-vindas e mentalidade</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-300">O exato caminho mental que você precisa seguir para transformar o método em resultado financeiro (só isso já vale R$97)</CardContent>
          </Card>
          <Card className="bg-neutral-800/50 border-neutral-700">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <Cpu className="w-6 h-6 text-neutral-400" />
              <CardTitle className="text-xl text-neutral-100">Aula 2 – Como criar seu clone com IA</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-300">Configurações secretas, trigger phrase e otimizações que tornam seus ensaios incomparáveis (valor estimado: R$197)</CardContent>
          </Card>
          {/* Adicione mais cards de módulos aqui... */}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 pt-12 border-b border-neutral-800 pb-4">Bônus Inclusos</h2>
        <div className="space-y-4">
          <Card className="bg-neutral-800/50 border-neutral-700">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <Plus className="w-5 h-5 text-green-400" />
              <CardTitle className="text-xl text-neutral-100">Bônus 1 – Agente GPT de Prompts</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-300">Gere prompts ultra detalhados com seu nome, estilo e iluminação com 1 clique.</CardContent>
          </Card>
          <Card className="bg-neutral-800/50 border-neutral-700">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <Plus className="w-5 h-5 text-green-400" />
              <CardTitle className="text-xl text-neutral-100">Bônus 2 – Ensaios com ChatGPT</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-300">Como criar Clones e Ensaios com o ChatGPT, de graça.</CardContent>
          </Card>
          <Card className="bg-neutral-800/50 border-neutral-700">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <Plus className="w-5 h-5 text-green-400" />
              <CardTitle className="text-xl text-neutral-100">Bônus 3 – Renda Rápida com IA</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-300">Como fazer sua primeira venda em 72h com um perfil novo.</CardContent>
          </Card>
        </div>

        {/* Seção de Preço */}
        <div className="bg-neutral-800/70 border border-neutral-700 rounded-lg p-8 text-center space-y-4 my-16">
          <p className="text-lg text-neutral-400">Valor total real do pacote: <span className="line-through">R$1.497</span></p>
          <p className="text-xl text-neutral-100">Mas você vai acessar tudo por apenas</p>
          <p className="text-5xl font-bold text-white">R$127 à vista</p>
          <p className="text-neutral-300">(ou em até 12x)</p>
        </div>

        <blockquote className="border-l-4 border-neutral-700 pl-6 italic text-neutral-400 text-lg">
          O Clone Perfeito é o tipo de oportunidade que daqui a 6 meses vai estar em todo lugar. Mas hoje ainda é você quem chega primeiro.
        </blockquote>

        {/* CTA Final */}
        <div id="checkout" className="text-center space-y-4 pt-8">
           <p className="text-xl font-bold text-white">👇 Garanta agora seu acesso ao Clone Perfeito</p>
           <p className="text-yellow-400">Preço promocional de R$47 — por tempo limitado</p>
           <Button size="lg" className="w-full md:w-auto text-lg px-10 py-7 bg-red-600 hover:bg-red-700 text-white shadow-lg transform hover:scale-105 transition-transform">
            [Botão de checkout 🔥]
           </Button>
        </div>
        
        <Separator className="bg-neutral-700 my-12" />

        {/* FAQ */}
        <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 text-center">❓ FAQ – Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full text-lg">
                {faqItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value} className="border-b-neutral-800">
                        <AccordionTrigger className="text-neutral-100 hover:no-underline text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-neutral-400 text-base">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-neutral-500 pt-16 border-t border-neutral-800">
            <p>Footer</p>
        </footer>
        
      </main>
    </div>
  )
}
