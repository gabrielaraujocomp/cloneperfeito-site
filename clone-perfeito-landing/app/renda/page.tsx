import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7]
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]
  
  const businessModels = [
    {
      icon: Briefcase,
      title: "Social Medias & Agências",
      description: "Ofereça pacotes de imagens profissionais para seus clientes e nunca mais dependa de fotos ruins. Agregue valor e aumente seu faturamento.",
    },
    {
      icon: Target,
      title: "Gestores de Tráfego",
      description: "Crie criativos de alto impacto para seus anúncios em minutos. Aumente a performance das campanhas com visuais que convertem.",
    },
    {
      icon: TrendingUp,
      title: "Empreendedores Iniciantes",
      description: "Comece um negócio de criação de conteúdo com baixíssimo investimento. Venda ensaios de IA para negócios locais, amigos e online.",
    },
    {
      icon: User,
      title: "Criadores e Influencers",
      description: "Tenha um feed profissional e de alto padrão sem gastar rios de dinheiro com fotógrafos. Crie conteúdo visual ilimitado.",
    },
  ]

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
      
      {/* Header Section [REFINED HEADLINE] */}
      <section
        className="relative w-full h-auto min-h-[640px] md:min-h-[700px] bg-cover bg-center flex items-center py-20 md:py-0"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]">
              Domine o Método para Criar seu Clone com IA e Transforme sua Imagem em Lucro.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto md:mx-0 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">
              Aprenda a criar retratos hiper-realistas para você ou para clientes. Uma nova habilidade de alto valor para alavancar sua carreira, seu negócio ou iniciar uma nova fonte de renda.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button size="lg" className="text-lg px-12 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                  Quero dominar essa habilidade
                </Button>
              </Link>
              <p className="text-lg font-semibold text-white text-center md:text-left">
                De R$157 por R$47. O investimento se paga no primeiro serviço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seu Estúdio de IA no Bolso */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Bot className="w-10 h-10 text-indigo-500 flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Seu Estúdio de IA no Bolso
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Clone Perfeito não é só sobre criar fotos suas. É sobre dominar uma ferramenta para **produzir imagens de alta qualidade para qualquer pessoa**. Nós te entregamos o método para transformar simples selfies em ensaios profissionais que clientes pagariam caro para ter.
              </p>
              <div className="bg-indigo-50/50 border-l-4 border-indigo-200 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-800">
                  Aprenda uma vez, lucre para sempre. Você terá uma nova fonte de renda nas mãos.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Camera className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Clone Qualquer Pessoa</h3>
                  <p className="text-gray-600">
                    Aprenda a treinar a IA com as fotos de qualquer cliente para gerar um clone hiper-realista dele.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Target className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Crie Qualquer Ensaio</h3>
                  <p className="text-gray-600">
                    Use nosso guia de prompts para criar o estilo que seu cliente desejar: corporativo, lifestyle, casual ou artístico.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <DollarSign className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Venda o Serviço</h3>
                  <p className="text-gray-600">
                    Entregue um produto final de alto valor percebido que impressiona e gera resultados para seus clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelos de Negócio Lucrativos */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900">Modelos de Negócio Lucrativos</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Esta não é uma habilidade qualquer. É um ativo que pode ser monetizado de várias formas. Veja como profissionais estão usando o método:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {businessModels.map((model, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <model.icon className="w-8 h-8 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-800">{model.title}</h3>
                  </div>
                  <p className="text-gray-700">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Depoimentos Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Users className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">Aprovação de quem já está aplicando</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pessoas como você que investiram no método e já estão vendo o potencial de transformação e renda.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                    <CardContent className="flex justify-center items-center bg-gray-50 p-2">
                      <img
                        src={`/images/d${num}.jpg`}
                        alt={`Depoimento de aluno ${num}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <p className="text-center text-gray-500 text-sm mt-4 md:hidden">Arraste para o lado para ver mais</p>
        </div>
      </section>
      
      {/* Student Creations Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900">Portfolio de Possibilidades</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estes são exemplos reais de ensaios que você será capaz de produzir e vender para seus clientes. A qualidade e a variedade falam por si.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {studentCreations.map((num) => (
              <div key={num} className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={`/images/gerada-${num}.jpg`}
                  alt={`Imagem gerada por aluno ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 shadow-lg">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <p className="text-xl font-semibold text-gray-800">Pronto para ter um novo serviço lucrativo?</p>
                <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                  <Button size="lg" className="text-lg px-10 py-3 bg-green-600 hover:bg-green-700 text-white shadow-md">
                    Quero iniciar meu negócio
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preço */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-48 mx-auto mb-6" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Uma oferta que se paga sozinha</h2>
              <p className="text-lg text-gray-700">Um único ensaio de IA pode ser vendido por R$100, R$200, ou até R$500. Você está investindo em uma habilidade que traz retorno financeiro imediato. O acesso ao método completo é seu por um valor que você recupera — e multiplica — já no primeiro cliente.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Acesso vitalício ao método completo</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Agente GPT exclusivo para criar prompts</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Suporte por e-mail e WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Atualizações futuras incluídas</span>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-xl border">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Gem className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold text-gray-900">Investimento Único</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                 De <span className="line-through">R$157</span> por apenas:
              </p>
              <h3 className="text-5xl font-bold text-gray-900 mb-4">R$47</h3>
              <p className="text-lg text-gray-600 mb-8">ou até 12x de R$5,22 no cartão</p>
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button
                  size="lg"
                  className="text-xl w-full px-12 py-6 bg-green-600 hover:bg-green-700 text-white shadow-lg mb-8"
                >
                  Garantir meu acesso lucrativo
                </Button>
              </Link>
              <div className="text-center">
                <p className="text-gray-600 mb-4">Tem alguma dúvida?</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5511978610717"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">Sua Garantia de Risco Zero</h2>
              </div>
              <div className="bg-green-50/50 border border-green-100 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Você tem 7 dias para testar o método. Se você não vir o potencial de retorno ou simplesmente não gostar, basta pedir seu dinheiro de volta. Simples assim. O risco é todo nosso.
                </p>
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
                  <AccordionTrigger className="text-left text-lg">Preciso saber mexer com IA ou design?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. O curso foi feito para iniciantes. Se você sabe usar um celular, consegue aplicar o método para atender clientes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Posso usar para os meus clientes?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim! O objetivo principal do curso é te capacitar a oferecer isso como um serviço. Você pode criar imagens para quantos clientes quiser.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Precisa pagar alguma outra ferramenta?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim, para gerar as fotos você usa uma ferramenta profissional externa (que ensinamos no curso). O custo é baixo (cerca de R$50 por um pacote grande de imagens), e você pode embutir esse valor no preço que cobra do seu cliente, garantindo sempre o lucro.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Em quanto tempo eu consigo meu primeiro cliente?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    O processo de aprendizado é rápido. Em menos de 2 horas você já domina a técnica. Muitos alunos conseguem o primeiro cliente na mesma semana, oferecendo para amigos, conhecidos ou negócios locais.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Eu tenho suporte se travar em alguma parte?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Você terá acesso ao suporte por e-mail e WhatsApp para tirar qualquer dúvida, seja técnica ou sobre como abordar clientes.
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
          <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-40 mx-auto mb-6" />
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
