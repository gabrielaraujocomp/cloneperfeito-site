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
  Briefcase,
  Target,
  Cpu,
  Palette,
  Clock,
  Package
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]
  const modules = [
    { imageSrc: "/images/modulo-1.jpg", title: "Módulo Bônus: Clone com ChatGPT (Grátis)", description: "Comece com o pé direito! Neste módulo bônus, você aprende a criar seu primeiro clone e gerar um ensaio de forma 100% gratuita, usando apenas o ChatGPT. É o caminho ideal para construir seu portfólio sem nenhum custo inicial." },
    { imageSrc: "/images/modulo-2.jpg", title: "Módulo 1: Início da Jornada", description: "Aqui preparamos o terreno para o seu sucesso. Você vai entender a mentalidade correta, o potencial de mercado deste serviço e faremos as configurações iniciais das ferramentas, deixando tudo pronto para a ação." },
    { imageSrc: "/images/modulo-3.jpg", title: "Módulo 2: Preparando o seu Clone", description: "O coração do método. Você aprenderá o passo a passo detalhado para selecionar as fotos ideais do seu cliente, treinar a inteligência artificial e criar o 'ativo digital': um clone hiper-realista e de alta qualidade." },
    { imageSrc: "/images/modulo-4.jpg", title: "Módulo 3: Criando com seu Clone", description: "Hora de soltar a criatividade. Domine a arte de usar prompts para gerar ensaios incríveis em qualquer cenário. Você terá acesso ao nosso Agente GPT exclusivo para transformar qualquer imagem de referência em um prompt perfeito." },
    { imageSrc: "/images/modulo-5.jpg", title: "Módulo 4: Encerramento e Próximos Passos", description: "Com a técnica dominada, vamos transformar sua habilidade em dinheiro. Aprenda a empacotar, precificar e vender seu serviço. Mostraremos como encontrar seus primeiros clientes e transformar o Clone Perfeito em um negócio lucrativo." }
  ]
  
  return (
    <div className="min-h-screen bg-[#1c1a1d] text-gray-300 overflow-x-hidden font-sans">
      {/* Scripts */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      {/* Hero Section [NOVO DESIGN PROFISSIONAL] */}
      <section className="relative w-full bg-black py-24 lg:py-32 overflow-hidden">
        {/* Fundo com Imagens Desfocadas */}
        <div className="absolute inset-0 z-0 opacity-20 blur-md scale-110">
          <div className="grid grid-cols-2 lg:grid-cols-4 h-full w-full">
            <img src="/images/gerada-1.jpg" className="w-full h-full object-cover"/>
            <img src="/images/gerada-2.jpg" className="w-full h-full object-cover"/>
            <img src="/images/gerada-3.jpg" className="w-full h-full object-cover"/>
            <img src="/images/gerada-4.jpg" className="w-full h-full object-cover"/>
          </div>
        </div>
        {/* Sobreposição de Gradiente */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1c1a1d] via-[#1c1a1d]/70 to-transparent"></div>
        
        {/* Conteúdo Central */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Torne-se um <span className="text-white">Criador de Ensaios com IA</span> e construa um negócio lucrativo
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Aprenda as técnicas para transformar qualquer rosto em ensaios profissionais e venda esse serviço no Brasil e no exterior.
            </p>

            <div className="flex flex-col items-center gap-6">
                <Link href="#oferta" className="w-full max-w-sm">
                    <Button size="lg" className="w-full bg-pink-600 text-white font-bold hover:bg-pink-700 rounded-lg py-7 text-lg shadow-lg shadow-pink-900/40 transition-all transform hover:scale-105">
                        INSCREVA-SE NO CLONE PERFEITO
                    </Button>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-400 max-w-2xl w-full">
                    <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4"/>
                        <span>Ensaios prontos em minutos</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Package className="w-4 h-4"/>
                        <span>Sem necessidade de equipamento</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Globe className="w-4 h-4"/>
                        <span>Potencial de venda Global</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Provas Reais de Vendas */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">A Prova Irrefutável: Vendas em 3 Moedas</h2>
                <p className="text-lg text-gray-400 mt-2">Nossos alunos não aprendem, eles faturam.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3 transform lg:rotate-[-2deg] transition-all hover:rotate-0 hover:scale-105">
                    <p className="text-sm font-semibold text-green-400">Venda em R$ (Brasil)</p>
                    <div className="aspect-[4/3] bg-zinc-900 rounded-md flex items-center justify-center"><Wallet className="h-10 w-10 text-zinc-700"/></div>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3 transform lg:scale-105 z-10 transition-all hover:scale-110">
                    <p className="text-sm font-semibold text-blue-400">Pagamento em € (Europa)</p>
                    <div className="aspect-[4/3] bg-zinc-900 rounded-md flex items-center justify-center"><Euro className="h-10 w-10 text-zinc-700"/></div>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3 transform lg:rotate-[2deg] transition-all hover:rotate-0 hover:scale-105">
                    <p className="text-sm font-semibold text-yellow-400">Recebimento em $ (EUA)</p>
                    <div className="aspect-[4/3] bg-zinc-900 rounded-md flex items-center justify-center"><DollarSign className="h-10 w-10 text-zinc-700"/></div>
                </div>
            </div>
        </div>
      </section>
      
      {/* O Que é o Clone Perfeito? */}
      <section className="py-24 px-4 bg-[#1c1a1d]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Transforme uma Habilidade de IA em um Negócio Lucrativo</h2>
                <p className="text-lg text-gray-400 leading-relaxed">O <strong>Clone Perfeito</strong> é um treinamento prático que te ensina a criar e vender um serviço de alto valor. Esqueça a teoria. Aqui você aprende uma habilidade para gerar renda.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-start gap-4 bg-black/30 p-4 rounded-lg"><Cpu className="w-8 h-8 text-gray-500 mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-white">Crie o Clone Digital</h4><p className="text-gray-400">Aprenda a treinar a IA com fotos de qualquer pessoa.</p></div></div>
                <div className="flex items-start gap-4 bg-black/30 p-4 rounded-lg"><Palette className="w-8 h-8 text-gray-500 mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-white">Produza Ensaios de Alto Nível</h4><p className="text-gray-400">Gere imagens profissionais em qualquer cenário.</p></div></div>
                <div className="flex items-start gap-4 bg-black/30 p-4 rounded-lg"><Wallet className="w-8 h-8 text-gray-500 mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-white">Estruture e Venda o Serviço</h4><p className="text-gray-400">Entenda como empacotar, precificar e oferecer.</p></div></div>
            </div>
        </div>
      </section>

      {/* Qualidade dos Ensaios */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">A Qualidade dos Ensaios Fala por Si</h2></div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {studentCreations.map((num) => (<CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3"><div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-black"><img src={`/images/gerada-${num}.jpg`} alt={`Ensaio gerado ${num}`} className="w-full h-full object-cover"/></div></CarouselItem>))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" /><CarouselNext className="hidden md:flex bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" />
          </Carousel>
        </div>
      </section>

      {/* Módulos do Curso */}
      <section className="py-24 px-4 bg-[#1c1a1d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16"><BookOpen className="h-12 w-12 mx-auto text-gray-600 mb-4"/><h2 className="text-3xl font-bold text-white">A Estrutura Completa</h2></div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {modules.map((module, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-black/50 border border-zinc-800 rounded-lg overflow-hidden transition-all data-[state=open]:border-pink-500/30">
                <AccordionTrigger className="text-left text-lg p-4 text-white hover:no-underline font-semibold w-full">
                    <div className="flex items-center gap-6 w-full"><img src={module.imageSrc} alt={module.title} className="w-20 h-20 rounded-md object-cover flex-shrink-0"/><span className="flex-1">{module.title}</span></div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base p-6 pt-2 pl-28">{module.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto"><div className="text-center mb-16"><Gift className="h-12 w-12 mx-auto text-gray-600 mb-4"/><h2 className="text-3xl font-bold text-white">2 Bônus de Ação Rápida</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800"><h3 className="text-xl font-bold text-white">Bônus #1: Portfólio Custo Zero</h3><p className="text-gray-400 mt-2">Uma aula completa ensinando a criar seu primeiro portfólio 100% gratuito com o ChatGPT.</p></div>
            <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800"><h3 className="text-xl font-bold text-white">Bônus #2: Agente Extrator de Prompts</h3><p className="text-gray-400 mt-2">Um Agente GPT exclusivo. Envie uma imagem de referência e ele extrai o prompt para você.</p></div>
          </div>
        </div>
      </section>
      
      {/* Oferta */}
      <section id="oferta" className="py-24 px-4 bg-[#1c1a1d]">
        <div className="max-w-4xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-[#1c1a1d]">
            <div className="bg-[#151316] rounded-[15px] p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Tenha acesso a tudo isso hoje</h2>
              <div className="max-w-lg mx-auto space-y-4 text-left my-8">
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-lg"><span className="text-white">Acesso ao Curso Completo</span><span className="text-gray-500 line-through">R$ 297,00</span></div>
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-lg"><span className="text-white">Bônus: Portfólio Custo Zero</span><span className="text-gray-500 line-through">R$ 97,00</span></div>
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-lg"><span className="text-white">Bônus: Agente GPT Extrator</span><span className="text-gray-500 line-through">R$ 97,00</span></div>
                <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-lg mt-4"><span className="font-bold text-white">VALOR TOTAL</span><span className="font-bold text-red-500 line-through">R$ 491,00</span></div>
              </div>
              <div className="mt-12"><p className="text-gray-400">De <span className="line-through">R$157</span> por apenas:</p><p className="text-6xl font-bold text-white my-4">12x de <span className="text-pink-500">R$ 9,74</span></p><p className="text-gray-400">ou R$97 à vista</p></div>
              <Link href="https://pay.kiwify.com.br/SUA_URL_DE_PAGAMENTO" target="_blank" className="w-full max-w-md mx-auto mt-8 inline-block">
                <Button size="lg" className="w-full text-lg font-bold px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/40 hover:shadow-pink-500/60 transition-all duration-300 transform hover:scale-105"><Zap className="mr-3"/>GARANTIR MINHA VAGA</Button>
              </Link>
            </div>
          </div>
      </section>

      {/* Garantia */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
            <Shield className="w-32 h-32 md:w-48 md:h-48 text-green-500 flex-shrink-0" />
            <div className="text-center md:text-left"><h2 className="text-2xl font-bold text-white">Sua Garantia Blindada de Risco Zero</h2><p className="text-gray-400 mt-2 leading-relaxed">Você tem 7 dias completos para acessar todo o material. Se, por qualquer motivo, você achar que não é para você, basta me enviar um único e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo meu.</p></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-[#1c1a1d]">
        <div className="max-w-4xl mx-auto"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Perguntas Frequentes</h2></div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-black/50 border border-zinc-800 rounded-lg"><AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">Preciso de um computador potente?</AccordionTrigger><AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">Não. Todo o processamento é feito na nuvem. Você pode fazer todo o trabalho usando um computador básico ou até mesmo 100% pelo seu celular.</AccordionContent></AccordionItem>
            <AccordionItem value="item-2" className="bg-black/50 border border-zinc-800 rounded-lg"><AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">Como recebo pagamentos de clientes de fora?</AccordionTrigger><AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">É simples. Ferramentas como PayPal ou Wise permitem que você crie um link de pagamento e receba em Dólar ou Euro, transferindo o valor para sua conta no Brasil já convertido.</AccordionContent></AccordionItem>
             <AccordionItem value="item-3" className="bg-black/50 border border-zinc-800 rounded-lg"><AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">Quanto eu gasto com ferramentas por cliente?</AccordionTrigger><AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">O custo é muito baixo. O treinamento de um clone (que você faz uma vez) e a geração de dezenas de imagens custa cerca de $2 a $4 dólares. Um valor irrisório perto do que você cobra.</AccordionContent></AccordionItem>
            <AccordionItem value="item-4" className="bg-black/50 border border-zinc-800 rounded-lg"><AccordionTrigger className="text-left text-lg p-6 text-white hover:no-underline font-semibold">O acesso ao curso expira?</AccordionTrigger><AccordionContent className="text-gray-400 text-base p-6 pt-0 pl-8">Não. O acesso é vitalício. Você pode assistir às aulas no seu ritmo, quantas vezes quiser, e terá acesso a todas as futuras atualizações do método sem custo adicional.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-zinc-900 bg-black">
        <div className="max-w-4xl mx-auto">
          <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="h-10 mx-auto mb-6 brightness-0 invert" />
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
