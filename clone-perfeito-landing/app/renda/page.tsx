import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Camera,
  Globe,
  Wallet,
  Check,
  DollarSign,
  Euro,
  Zap,
  Shield,
  Star,
  Gift,
  BookOpen,
  Quote
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

// A cor de fundo principal será usada através da classe customizada `bg-main-dark`
// Para este exemplo, vou usar a notação de colchetes do Tailwind: bg-[#1c1a1d]

export default function LandingPage() {
  const testimonials = [
    {
      quote: "O método é direto ao ponto. Fechei meu primeiro cliente em 5 dias e o investimento já se pagou 5x. Incrível!",
      author: "Juliana R.",
      role: "Social Media",
    },
    {
      quote: "Eu era cético, mas a qualidade das imagens é surreal. Meus clientes amaram e agora tenho um novo serviço de alta margem.",
      author: "Marcos V.",
      role: "Fotógrafo",
    },
    {
      quote: "Vender pra fora parecia impossível. Com os scripts do Gabriel, fechei um pacote de $50 USD na primeira semana. Surreal.",
      author: "Beatriz L.",
      role: "Freelancer",
    },
  ]

  const modules = [
    {
      title: "Módulo 1: A Base do Negócio",
      description: "Configuração de ferramentas, mentalidade de mercado e entendimento do potencial financeiro. Preparamos o terreno para você construir uma fonte de renda, não apenas aprender uma técnica."
    },
    {
      title: "Módulo 2: A Criação do Clone Perfeito",
      description: "O coração do método. O passo a passo detalhado para treinar a IA com as fotos do cliente, criando um 'ativo digital' hiper-realista que será a base para todos os ensaios."
    },
    {
      title: "Módulo 3: A Fábrica de Ensaios",
      description: "Domine a arte dos prompts para gerar imagens incríveis em qualquer cenário. Use nossos modelos prontos para entregar resultados que impressionam e garantem a satisfação do cliente."
    },
    {
      title: "Módulo 4: Estrutura de Vendas e Escala",
      description: "A técnica não vale nada sem vendas. Aprenda a empacotar, precificar e vender no Brasil (R$) e no exterior ($/€). Inclui modelos de mensagens e estratégias de prospecção."
    }
  ]
  
  return (
    <div className="min-h-screen bg-[#1c1a1d] text-gray-300 overflow-x-hidden font-sans">
      {/* Seus scripts de rastreamento */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight [text-shadow:_1px_1px_20px_rgb(0_0_0_/_50%)]">
            Crie Ensaios com IA em Menos de 1 Hora e Venda por R$300, R$600 ou Até R$1.000
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto [text-shadow:_1px_1px_10px_rgb(0_0_0_/_50%)]">
            Com apenas selfies e um método direto, você aprende a gerar imagens profissionais com inteligência artificial e transformar isso em uma fonte de renda recorrente.
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Já são dezenas de alunos faturando com o método</h2>
            <p className="text-lg text-gray-400 mt-2">Veja o que eles estão dizendo.</p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-zinc-950 p-8 rounded-xl h-full flex flex-col border border-zinc-800">
                    <Quote className="w-8 h-8 text-pink-600 mb-4"/>
                    <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
                    <div className="mt-6 pt-6 border-t border-zinc-800">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" />
            <CarouselNext className="hidden md:flex bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" />
          </Carousel>
        </div>
      </section>
      
      {/* Provas Reais de Vendas */}
      <section className="py-24 px-4 bg-[#1c1a1d]">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">💸 Provas Reais de Vendas (Brasil e Exterior)</h2>
                <p className="text-lg text-gray-400 mt-2">Gente comum colocando o método em prática — e sendo paga por isso.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/50 rounded-xl overflow-hidden border border-zinc-800">
                    <div className="p-4 bg-zinc-950/50 border-b border-zinc-800"><p className="text-sm font-semibold text-white">Venda em Reais (Brasil)</p></div>
                    <div className="p-6 aspect-video bg-zinc-900 flex items-center justify-center"><Wallet className="h-12 w-12 text-zinc-600"/></div>
                </div>
                <div className="bg-black/50 rounded-xl overflow-hidden border border-zinc-800">
                     <div className="p-4 bg-zinc-950/50 border-b border-zinc-800"><p className="text-sm font-semibold text-white">Venda em Euro (Instagram)</p></div>
                    <div className="p-6 aspect-video bg-zinc-900 flex items-center justify-center"><Euro className="h-12 w-12 text-zinc-600"/></div>
                </div>
                <div className="bg-black/50 rounded-xl overflow-hidden border border-zinc-800">
                    <div className="p-4 bg-zinc-950/50 border-b border-zinc-800"><p className="text-sm font-semibold text-white">Pagamento em Dólar (PayPal)</p></div>
                    <div className="p-6 aspect-video bg-zinc-900 flex items-center justify-center"><DollarSign className="h-12 w-12 text-zinc-600"/></div>
                </div>
            </div>
        </div>
      </section>

      {/* Módulos do Curso */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <BookOpen className="h-12 w-12 mx-auto text-gray-600 mb-4"/>
            <h2 className="text-3xl font-bold text-white">O Que Você Vai Dominar: A Estrutura Completa</h2>
            <p className="text-lg text-gray-400 mt-2">Um passo a passo lógico para te levar do zero absoluto à sua primeira venda.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {modules.map((module, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-zinc-950 border border-zinc-800 rounded-lg">
                <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">
                  <span className="text-pink-500 mr-4">0{index+1}</span>{module.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-16">
                  {module.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-24 px-4 bg-[#1c1a1d]">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Gift className="h-12 w-12 mx-auto text-gray-600 mb-4"/>
              <h2 className="text-3xl font-bold text-white">E Ainda Leva 2 Bônus de Ação Rápida</h2>
              <p className="text-lg text-gray-400 mt-2">Ferramentas para acelerar seus primeiros resultados.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-8 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-bold text-white">Bônus #1: Portfólio Custo Zero</h3>
                <p className="text-gray-400 mt-2">Uma aula completa te ensinando a criar seu primeiro portfólio de forma 100% gratuita usando o ChatGPT. Comece a prospectar sem gastar R$1.</p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-bold text-white">Bônus #2: Agente Extrator de Prompts</h3>
                <p className="text-gray-400 mt-2">Um Agente GPT exclusivo que criamos para você. Basta enviar uma imagem de referência e ele extrai o prompt para você replicar o estilo.</p>
              </div>
            </div>
        </div>
      </section>
      
      {/* Oferta com Ancoragem de Valor */}
      <section id="oferta" className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-black">
            <div className="bg-[#1c1a1d] rounded-[15px] p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Tenha acesso a tudo isso hoje</h2>
              <p className="text-lg text-gray-400 mb-12">Um investimento único para uma nova fonte de renda.</p>
              
              <div className="max-w-lg mx-auto space-y-4 text-left my-8">
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-lg">
                  <span className="text-white">Acesso ao Curso Completo</span>
                  <span className="text-gray-500 line-through">R$ 297,00</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-lg">
                  <span className="text-white">Bônus: Portfólio Custo Zero</span>
                  <span className="text-gray-500 line-through">R$ 97,00</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-lg">
                  <span className="text-white">Bônus: Agente GPT Extrator</span>
                  <span className="text-gray-500 line-through">R$ 97,00</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-lg mt-4">
                  <span className="font-bold text-white">VALOR TOTAL</span>
                  <span className="font-bold text-red-500 line-through">R$ 491,00</span>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-gray-400">De <span className="line-through">R$157</span> por apenas:</p>
                <p className="text-6xl font-bold text-white my-4">12x de <span className="text-pink-500">R$ 9,74</span></p>
                <p className="text-gray-400">ou R$97 à vista</p>
              </div>
              
              <Link href="https://pay.kiwify.com.br/SUA_URL_DE_PAGAMENTO" target="_blank" className="w-full max-w-md mx-auto mt-8 inline-block">
                <Button size="lg" className="w-full text-lg font-bold px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/40 hover:shadow-pink-500/60 transition-all duration-300 transform hover:scale-105">
                  <Zap className="mr-3"/>
                  GARANTIR MINHA VAGA
                </Button>
              </Link>
            </div>
          </div>
      </section>

      {/* Garantia */}
      <section className="py-24 px-4 bg-[#1c1a1d]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-black/30 p-8 rounded-2xl border border-zinc-800">
            <Shield className="w-32 h-32 md:w-48 md:h-48 text-green-500 flex-shrink-0" />
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">Sua Garantia Blindada de Risco Zero</h2>
                <p className="text-gray-400 mt-2 leading-relaxed">
                    Você tem 7 dias completos para acessar todo o material, assistir às aulas e testar o método. Se, por qualquer motivo, você achar que não é para você, basta me enviar um único e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo meu.
                </p>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-zinc-950 border border-zinc-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">Preciso de um computador potente?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">Não. Todo o processamento é feito na nuvem. Você pode fazer todo o trabalho usando um computador básico ou até mesmo 100% pelo seu celular.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-zinc-950 border border-zinc-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">Como recebo pagamentos de clientes de fora?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">É simples. Ferramentas como PayPal ou Wise permitem que você crie um link de pagamento e receba em Dólar ou Euro, transferindo o valor para sua conta no Brasil já convertido.</AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3" className="bg-zinc-950 border border-zinc-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">Quanto eu gasto com ferramentas por cliente?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">O custo é muito baixo. O treinamento de um clone (que você faz uma vez) e a geração de dezenas de imagens custa cerca de $2 a $4 dólares. Um valor irrisório perto do que você cobra.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-zinc-950 border border-zinc-800 rounded-lg">
              <AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">O acesso ao curso expira?</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">Não. O acesso é vitalício. Você pode assistir às aulas no seu ritmo, quantas vezes quiser, e terá acesso a todas as futuras atualizações do método sem custo adicional.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-zinc-900 bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-500 mb-2">© 2025 Clone Perfeito. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-sm mb-4">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="https://..." target="_blank" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="https://..." target="_blank" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
