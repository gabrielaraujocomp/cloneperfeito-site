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
      {/* ===================   NOVO HEADER SECTION   =========================== */}
      {/* ======================================================================= */}
      <section
        className="relative flex items-center bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[700px]"
        style={{ backgroundImage: "url('/images/bg-gabriel.jpeg')" }}
      >
        {/* Overlay para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        {/* Conteúdo do Header */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight md:text-6xl">
              Transforme IA em Renda: Aprenda a Criar e Vender Imagens Profissionais com seu Clone Digital
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-10 md:text-xl">
              Descubra o método passo a passo para gerar uma nova fonte de renda criando retratos hiper-realistas com Inteligência Artificial para clientes e projetos — em poucos minutos e sem nenhuma experiência prévia.
            </p>

            {/* CTA Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button size="lg" className="text-lg px-12 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                  Quero criar meu negócio com IA!
                </Button>
              </Link>
              <p className="text-base font-semibold text-gray-300">
                De R$157 por R$47 à vista ou até 12x — comece a lucrar agora!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ======================================================================= */}
      {/* ===================   FIM DO NOVO HEADER   ============================ */}
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

      {/* Ou gere só por diversão */}
      <section className="py-20 px-4 bg-gradient-to-b from-yellow-50/30 to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900">Amplie seu Portfólio com Criatividade</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Além de retratos profissionais, domine a criação de imagens criativas e conceituais. Perfeito para construir um portfólio irresistível e atrair clientes que buscam algo único e inovador para suas marcas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-1.jpg"
                alt="Exemplo de imagem criativa para portfólio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-2.jpg"
                alt="Exemplo de imagem criativa para campanhas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-3.jpg"
                alt="Exemplo de imagem lifestyle para marcas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-4.jpg"
                alt="Exemplo de imagem conceitual para publicidade"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-5.jpg"
                alt="Exemplo de imagem fantástica para projetos especiais"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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

      {/* Por que vale mais */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <Gem className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Por que o Clone Perfeito é um investimento, não um custo
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <Camera className="w-6 h-6 text-red-500" />
                    <span className="text-gray-700">Ensaio profissional tradicional: R$300 a R$1200</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <Clock className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Custo com agenda, deslocamento, fotógrafo, edição</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <X className="w-6 h-6 text-red-500" />
                    <span className="text-gray-700">Dependência de terceiros e pouca flexibilidade</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200 text-center">
                    <Check className="w-8 h-8 text-green-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-800">
                      Clone Perfeito: aprenda uma habilidade para criar um negócio lucrativo, com baixo investimento inicial e alta margem de lucro, oferecendo um serviço inovador.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Aplicações reais */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Puzzle className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900">Serviços que você pode oferecer</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Instagram */}
            <Card className="border-pink-200 shadow-sm bg-gradient-to-br from-white to-pink-50/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6 text-pink-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Gestão de Imagem para Instagram</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Ofereça pacotes de imagens para criadores de conteúdo que precisam de um feed com estética e profissionalismo. Um serviço de alto valor para quem vive de imagem.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/instagram-mountain.jpg"
                    alt="Serviço de imagem para Instagram"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="border-blue-200 shadow-sm bg-gradient-to-br from-white to-blue-50/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Retratos Corporativos para Profissionais
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Crie retratos que transmitem autoridade para executivos e freelancers. Um serviço essencial que gera mais conexões e oportunidades de negócio para seus clientes.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/linkedin-professional.jpg"
                    alt="Serviço de retratos corporativos para LinkedIn"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Currículo */}
            <Card className="border-green-200 shadow-sm bg-gradient-to-br from-white to-green-50/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Imagens para Sites e Portfólios
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Ajude designers, desenvolvedores e outros profissionais a terem uma foto de perfil que impressiona à primeira vista e valoriza seu trabalho.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/portfolio-casual.jpg"
                    alt="Serviço de fotos para portfólios e sites"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tinder */}
            <Card className="border-red-200 shadow-sm bg-gradient-to-br from-white to-red-50/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Branding Pessoal e Marcas com Alma</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Ajude marcas e profissionais a construir uma imagem autêntica que gera conexão. Use a IA para criar fotos que contam uma história e humanizam a marca.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/tinder-lifestyle.png"
                    alt="Serviço de branding pessoal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é isso */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <User className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">Para quem é este método?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                  <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Quem quer uma nova fonte de renda usando tecnologia e criatividade.</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Freelancers que querem adicionar um novo serviço de alto valor.</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-lg border border-green-100">
                  <Briefcase className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Profissionais de marketing e social media que querem inovar.</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Star className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Quem busca um negócio online com baixo custo inicial e flexibilidade.</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-pink-50/50 rounded-lg border border-pink-100 md:col-span-2">
                  <Heart className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Empreendedores que querem aprender uma habilidade lucrativa para aplicar em seus próprios projetos.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <GraduationCap className="w-8 h-8 text-indigo-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">O que você vai aprender na prática</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-blue-50/50 rounded-lg border border-blue-100">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Criar seu serviço de geração de imagens, do zero</p>
                    <p className="text-gray-600">Você vai aprender a estruturar sua oferta, precificar, captar clientes e entregar o trabalho, transformando a IA em um negócio real.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Lightbulb className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Usar prompts testados para atender clientes</p>
                    <p className="text-gray-600">Vou te dar os prompts exatos para atender às demandas mais comuns do mercado (fotos corporativas, lifestyle, etc.) e como adaptá-los para cada projeto.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-green-50/50 rounded-lg border border-green-100">
                  <Film className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Selecionar os estilos e ângulos que vendem
                    </p>
                    <p className="text-gray-600">Entenda o que compõe uma imagem profissional pela qual os clientes estão dispostos a pagar, garantindo a satisfação e fidelização.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-pink-50/50 rounded-lg border border-pink-100">
                  <Brain className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Argumentar e vender o valor do seu trabalho
                    </p>
                    <p className="text-gray-600">Aprenda como mostrar aos clientes que seu serviço não é apenas sobre "fotos bonitas", mas uma ferramenta para gerar autoridade e resultados para eles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Settings className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Repetir o processo para escalar seu negócio
                    </p>
                    <p className="text-gray-600">O método é seu. Você saberá como otimizar seu fluxo de trabalho para atender mais clientes, testar novos nichos e aumentar seus lucros.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preço */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Tudo o que você leva */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Package className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold text-gray-900">Tudo o que você leva para começar</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Acesso vitalício ao método completo</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Agente GPT exclusivo para criar prompts para clientes</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Suporte focado em negócio por e-mail e WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Atualizações futuras sobre o mercado e ferramentas</span>
                </div>
              </div>
            </div>

            {/* Right Column - Preço */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold text-gray-900">Seu Investimento para Começar</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Um curso de negócios pode custar centenas de reais. Com o Clone Perfeito, você aprende um modelo de negócio completo, pronto para ser aplicado, por um valor simbólico. É o seu passaporte para uma nova fonte de renda com IA.
              </p>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">R$47 à vista</h3>
              <p className="text-lg text-gray-600 mb-8">ou até 12x de R$5,22 no cartão</p>
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button
                  size="lg"
                  className="text-xl px-12 py-6 bg-green-600 hover:bg-green-700 text-white shadow-lg mb-8"
                >
                  Quero começar a lucrar com IA
                </Button>
              </Link>
              <div className="text-center">
                <p className="text-gray-600 mb-4">Tem dúvidas sobre como gerar renda com o método?</p>
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
                <h2 className="text-3xl font-bold text-gray-900">Garantia de Risco Zero</h2>
              </div>
              <div className="bg-green-50/50 border border-green-100 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Você tem 7 dias para acessar o método. Se achar que não é para você ou não vir potencial de negócio, basta pedir o reembolso. Devolvemos 100% do seu dinheiro, sem perguntas. O risco é todo nosso.
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

      {/* Minha história */}
      {/* REMOVED */}

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
