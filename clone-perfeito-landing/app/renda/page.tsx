import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Quote,
  MessageCircle,
  Sparkles,
  Bot,
  Camera,
  Clock,
  X,
  Check,
  Puzzle,
  Smartphone,
  Briefcase,
  FileText,
  Heart,
  User,
  Users,
  Target,
  Lightbulb,
  Film,
  Brain,
  Settings,
  Shield,
  GraduationCap,
  Package,
  Gem,
  DollarSign,
  Star,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Meta Pixel Code */}
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
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1198526755291146&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}

      {/* ======================================================================= */}
      {/* ===================   HEADER - BANNER RESPONSIVO   ==================== */}
      {/* ======================================================================= */}
      <header>
        {/* Imagem do banner responsivo */}
        <img
          src="/images/header-banner-mobile.jpg"
          alt="Banner do Clone Perfeito para mobile"
          className="block w-full h-auto md:hidden"
        />
        <img
          src="/images/header-banner-desktop.jpg"
          alt="Banner do Clone Perfeito para desktop"
          className="hidden w-full h-auto md:block"
        />
      </header>

      {/* ======================================================================= */}
      {/* ==============   SEÇÃO HERO (ESTRUTURA CORRIGIDA)   ================= */}
      {/* ======================================================================= */}
      <section
        className="relative bg-black 
                   md:bg-cover md:bg-center md:bg-no-repeat md:bg-[url('/images/bg-cp-desk.jpg')]"
      >
        <div
          className="relative max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 
                     md:min-h-[600px] md:flex md:items-center"
        >
          {/* Coluna de Texto Principal */}
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-2xl font-bold text-white mb-4 leading-tight 
                           md:text-5xl">
              Gere imagens que parecem feitas por fotógrafos profissionais — e venda por R$300, R$500 ou mais, usando Inteligência Artificial
            </h1>
            <p className="text-base text-white leading-normal mb-8 
                          md:text-lg md:leading-relaxed">
              Você aprende um método completo pra gerar retratos hiper-realistas com IA — e transformar isso em uma fonte de renda. Faça ensaios para outras pessoas, entregue como serviço e cobre caro por isso.
            </p>
            <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="inline-block">
              <Button size="lg" className="text-base px-10 py-3 bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg font-bold 
                                         md:text-lg md:px-12 md:py-4">
                Quero criar meu negócio com IA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* ==============   O RESTO DA PÁGINA CONTINUA ABAIXO   =================== */}
      {/* ======================================================================= */}
      
      {/* Antes e Depois Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Antes */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-200 p-8 rounded-r-xl">
              <p className="text-xl font-semibold text-gray-800">
                <strong>ANTES:</strong> fotos comuns de clientes, sem apelo profissional, que não geram autoridade nem vendas.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-1.jpg"
                  alt="Foto antes - selfie casual de um possível cliente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-2.jpg"
                  alt="Foto antes - selfie de baixa qualidade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-3.jpg"
                  alt="Foto antes - imagem amadora"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-4.jpg"
                  alt="Foto antes - selfie sem tratamento"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-5.jpg"
                  alt="Foto antes - selfie no espelho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Depois */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-200 p-8 rounded-r-xl">
              <p className="text-xl font-semibold text-gray-800">
                <strong>DEPOIS:</strong> seu serviço. Imagens de alto valor que geram autoridade, engajamento e vendas para seus clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-1.jpg"
                  alt="Foto depois - retrato profissional que você pode vender"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-2.jpg"
                  alt="Foto depois - imagem lifestyle para campanhas de marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-3.jpg"
                  alt="Foto depois - imagem corporativa para empresas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-4.png"
                  alt="Foto depois - conteúdo para redes sociais de clientes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-5.jpg"
                  alt="Foto depois - retrato profissional para portfólios"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vamos falar a real */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50/30">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <MessageCircle className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">Vamos falar a real sobre o mercado?</h2>
              </div>
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hoje, toda empresa e profissional precisa de uma imagem forte online. Mas a maioria não tem tempo ou dinheiro para ensaios fotográficos caros. Aí que você entra: oferecendo um serviço rápido, acessível e de altíssima qualidade, você resolve um problema real e cria uma oportunidade de negócio lucrativa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Elemento de transição */}
      <div className="flex justify-center py-8">
        <div className="w-16 h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full"></div>
      </div>

      {/* Agora imagine isso */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <Sparkles className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">Agora imagine sua nova rotina</h2>
              </div>
              <div className="bg-purple-50/50 border border-purple-100 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Seu cliente te envia algumas selfies. Em poucos minutos, você usa a IA para transformar essas fotos em retratos profissionais, conteúdo para redes sociais ou imagens para campanhas. Você entrega um trabalho incrível, seu cliente fica satisfeito, e você é pago por isso — tudo sem sair de casa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Frase de Impacto */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-pink-200 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-pink-400 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
                "Seus clientes vão perguntar qual agência fez as fotos. E só você vai saber que foi com o seu serviço de Inteligência Artificial."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O que é o Clone Perfeito */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <Bot className="w-8 h-8 text-indigo-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">O que é o Clone Perfeito?</h2>
              </div>
              <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  O Clone Perfeito é um método prático e direto, em formato de minicurso, que ensina como transformar uma ferramenta de IA em um negócio lucrativo. Você aprende não só a criar os retratos, mas a monetizar essa habilidade. Em menos de 2h, você vai:
                </p>

                {/* Flow visual com setas */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-indigo-100">
                    <Camera className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Gerar imagens com qualidade de estúdio para vender</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-indigo-100">
                    <Target className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Dominar os estilos que os clientes mais procuram</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-indigo-100">
                    <Star className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Estruturar e oferecer seu serviço de criação</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">E ainda conta com:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Aulas passo a passo para criar e vender</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Suporte via e-mail e WhatsApp para suas dúvidas de negócio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Um agente GPT que cria os prompts ideais para os projetos dos seus clientes
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Preciso saber mexer com IA ou negócios?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. O curso ensina o passo a passo técnico para criar as imagens e o passo a passo de negócio para começar a vender, mesmo que você seja 100% iniciante nos dois.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">O método funciona para criar imagens de qualquer pessoa?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Você aprenderá a criar imagens de alta qualidade para qualquer cliente. Inclusive, o curso ensina como orientar seus futuros clientes a tirar as fotos certas para um resultado perfeito.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Precisa pagar alguma ferramenta para trabalhar?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim, a ferramenta de IA profissional tem um custo por uso. O valor é baixo (cerca de R$50 para um lote grande de imagens) e você vai incluir esse custo no preço do seu serviço, garantindo uma excelente margem de lucro.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Consigo gerenciar esse negócio pelo celular?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Todo o processo, desde a criação das imagens até a comunicação com clientes, pode ser feito 100% pelo celular.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Como vou conseguir meus primeiros clientes?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    O curso foca em te dar a habilidade técnica e a confiança para começar. O primeiro passo é criar seu próprio portfólio (com suas fotos), que já será sua maior ferramenta de vendas para mostrar o que você é capaz de fazer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Em quanto tempo eu posso começar a ganhar dinheiro?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Você pode ter seu portfólio de serviços pronto em menos de 2 horas. O retorno financeiro dependerá do seu esforço em divulgar seu novo negócio, mas o método te dá o produto pronto para vender. Com um ou dois clientes, você já recupera o investimento do curso.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-7" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Preciso de conhecimento técnico em design ou fotografia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. O método foi criado para iniciantes. A IA faz todo o trabalho pesado de fotografia e iluminação. Seu papel será seguir o passo a passo para guiar a ferramenta e entregar o resultado ao cliente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Terei suporte se tiver dúvidas sobre o negócio?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Você terá acesso ao nosso suporte por e-mail e WhatsApp para tirar dúvidas tanto da parte técnica quanto de como estruturar e vender seu serviço.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-gray-200 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-2">© 2025 Clone Perfeito</p>
          <p className="text-gray-500 text-sm mb-4">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a
              href="https://www.notion.so/Clone-Perfeito-2239d41a264b80c197ecf9e0fe11122c?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="https://www.notion.so/Clone-Perfeito-2239d41a264b80c197ecf9e0fe11122c?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
