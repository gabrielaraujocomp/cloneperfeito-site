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
      {/* Header Section */}
      <section className="relative">
        {/* Cover Image */}
        <div className="h-64 md:h-80 bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0">
            <img
              src="/images/header-cover.jpg"
              alt="Clone Perfeito - Transformação com IA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Header Content */}
        <div className="relative -mt-32 md:-mt-40 px-4 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight md:text-7xl">
                Domine o método para criar seu clone e fotos de alto impacto com IA — mesmo sendo iniciante
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto md:text-2xl">
                Um método passo a passo para você criar retratos hiper-realistas com Inteligência Artificial — em estilo profissional, lifestyle ou viagem, em poucos minutos e sem nenhuma experiência.
              </p>

              {/* CTA Block */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                  <Button size="lg" className="text-lg px-12 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                    Quero aprender agora!
                  </Button>
                </Link>
                <p className="text-lg font-semibold text-gray-700 text-center">
                  De R$157 por R$47 à vista ou até 12x — desconto até 08/07!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antes e Depois Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Antes */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-200 p-8 rounded-r-xl">
              <p className="text-xl font-semibold text-gray-800">
                <strong>ANTES:</strong> fotos comuns, mal iluminadas, sem ângulo, sem presença.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-1.jpg"
                  alt="Foto antes - selfie casual no quarto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-2.jpg"
                  alt="Foto antes - selfie ao ar livre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-3.jpg"
                  alt="Foto antes - selfie no jardim"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/antes-4.jpg"
                  alt="Foto antes - selfie close-up"
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
                <strong>DEPOIS:</strong> sua melhor versão. Postura. Luz. Presença. Uma imagem que parece feita por um
                profissional.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-1.jpg"
                  alt="Foto depois - retrato profissional corporativo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-2.jpg"
                  alt="Foto depois - lifestyle em Paris"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-3.jpg"
                  alt="Foto depois - executivo no escritório"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-4.png"
                  alt="Foto depois - lifestyle com carro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/depois-5.jpg"
                  alt="Foto depois - casual profissional no café"
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
                <h2 className="text-3xl font-bold text-gray-900">Vamos falar a real?</h2>
              </div>
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hoje, todo mundo está online. E se a sua imagem não convence, você está perdendo oportunidades. Seja
                  num feed, num perfil, num portfólio — a verdade é que quem se apresenta melhor, ganha mais atenção. E
                  atenção é poder.
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
                <h2 className="text-3xl font-bold text-gray-900">Agora imagine isso</h2>
              </div>
              <div className="bg-purple-50/50 border border-purple-100 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Você envia algumas selfies simples. Em poucos minutos, a inteligência artificial devolve retratos
                  profissionais que transmitem presença, estilo, iluminação perfeita. Fotos que fazem as pessoas pararem
                  o scroll e pensarem: "uau" — tudo sem sair de casa.
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
              <h2 className="text-3xl font-bold text-gray-900">Ou gere só por diversão</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Crie versões suas em qualquer cenário que imaginar. Aventura, viagem, lifestyle — sem limites para sua
              criatividade.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-1.jpg"
                alt="Diversão - cenário com dinheiro e efeito fisheye"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-2.jpg"
                alt="Diversão - Times Square com grillz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-3.jpg"
                alt="Diversão - festa na piscina lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-4.jpg"
                alt="Diversão - executivo com grillz dourado"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/diversao-5.jpg"
                alt="Diversão - cenário fantástico com asas e magia"
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
                "As pessoas vão perguntar onde você fez o ensaio. E só você vai saber que foi com inteligência
                artificial."
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
                <h2 className="text-3xl font-bold text-gray-900">O que é o Clone Perfeito</h2>
              </div>
              <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  O Clone Perfeito é um método prático e direto ao ponto, em formato de minicurso, que ensina como você pode usar uma ferramenta moderna de IA para criar retratos realistas e impressionantes. Em menos de
                  2h, você vai:
                </p>

                {/* Flow visual com setas */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-indigo-100">
                    <Camera className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Gerar imagens com qualidade de estúdio</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-indigo-100">
                    <Target className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Dominar os estilos, poses e ângulos ideais</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-indigo-100">
                    <Star className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Usar seu clone para brilhar onde quiser</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">E ainda conta com:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Aulas passo a passo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Suporte via e-mail e WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Um agente GPT que cria os prompts ideais pra você usar seu clone
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
                  Por que o Clone Perfeito vale mais do que você paga
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <Camera className="w-6 h-6 text-red-500" />
                    <span className="text-gray-700">Ensaio profissional: R$300 a R$1200</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <Clock className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Agenda, deslocamento, fotógrafo, edição</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <X className="w-6 h-6 text-red-500" />
                    <span className="text-gray-700">Sem controle do estilo ou resultado final</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200 text-center">
                    <Check className="w-8 h-8 text-green-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-800">
                      Clone Perfeito: imagens de alta qualidade, no seu estilo, feitas em minutos por IA — direto da sua
                      casa, com liberdade total
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tudo o que você leva */}
      {/* REMOVED */}

      {/* Aplicações reais */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Puzzle className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900">Aplicações reais do seu clone</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Instagram */}
            <Card className="border-pink-200 shadow-sm bg-gradient-to-br from-white to-pink-50/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6 text-pink-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Instagram — Para atrair mais seguidores</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Tenha um feed com estética, estilo e identidade. A diferença entre parecer amador ou parecer alguém
                  que as pessoas querem seguir.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/instagram-mountain.jpg"
                    alt="Foto estilo Instagram - aventura nas montanhas"
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
                    LinkedIn — Para passar autoridade e profissionalismo
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Um retrato com presença transforma seu perfil. Mostra que você leva sua imagem a sério. Gera mais
                  conexões e oportunidades reais.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/linkedin-professional.jpg"
                    alt="Foto profissional para LinkedIn"
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
                    Currículo/Portfólio — Para se destacar em meio a dezenas
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Na hora de se candidatar, a imagem fala por você. Impressione à primeira vista.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/portfolio-casual.jpg"
                    alt="Foto para currículo e portfólio"
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
                  <h3 className="text-xl font-semibold text-gray-800">Tinder — Para gerar mais matches com estilo</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  A imagem certa muda tudo. Seu clone profissional mostra uma versão autêntica, segura e com presença.
                </p>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/tinder-lifestyle.png"
                    alt="Foto estilo lifestyle para apps de relacionamento"
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
                <h2 className="text-3xl font-bold text-gray-900">Para quem é isso?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                  <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Quem quer melhorar sua imagem pessoal online</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Criadores de conteúdo</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-lg border border-green-100">
                  <Briefcase className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Profissionais autônomos e freelancers</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Star className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Pessoas que querem ser notadas, em qualquer rede</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-pink-50/50 rounded-lg border border-pink-100 md:col-span-2">
                  <Heart className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Até quem quer se destacar nos apps de relacionamento</span>
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
                <h2 className="text-3xl font-bold text-gray-900">O que você vai aprender</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-blue-50/50 rounded-lg border border-blue-100">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Como criar seu clone realista com IA</p>
                    <p className="text-gray-600">Mesmo sendo leigo, com instruções simples e diretas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Lightbulb className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Como gerar ensaios com uma frase</p>
                    <p className="text-gray-600">Aprenda a usar prompts certeiros para guiar a IA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-green-50/50 rounded-lg border border-green-100">
                  <Film className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Como escolher ângulos, estilos, expressões
                    </p>
                    <p className="text-gray-600">Entenda o que valoriza você em imagem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-pink-50/50 rounded-lg border border-pink-100">
                  <Brain className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Como usar as fotos para atrair atenção e autoridade
                    </p>
                    <p className="text-gray-600">Em redes sociais, sites, portfólios</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Settings className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Como repetir o processo sempre que quiser
                    </p>
                    <p className="text-gray-600">Um conhecimento seu pra vida inteira</p>
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
                <h2 className="text-3xl font-bold text-gray-900">Tudo o que você leva</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Acesso vitalício ao mini curso</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Agente GPT exclusivo de prompts</span>
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

            {/* Right Column - Preço */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold text-gray-900">Preço</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Um ensaio profissional pode custar de R$300 a R$1.200.
                Com o Clone Perfeito, você aprende a gerar imagens incríveis com IA por apenas R$47 — e ainda leva um minicurso, um agente de prompts, atualizações e suporte vitalício.
              </p>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">R$47 à vista</h3>
              <p className="text-lg text-gray-600 mb-8">ou até 12x de R$5,22 no cartão</p>
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button
                  size="lg"
                  className="text-xl px-12 py-6 bg-green-600 hover:bg-green-700 text-white shadow-lg mb-8"
                >
                  Quero aprender agora
                </Button>
              </Link>
              <div className="text-center">
                <p className="text-gray-600 mb-4">Tem dúvidas sobre o Clone Perfeito?</p>
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
                <h2 className="text-3xl font-bold text-gray-900">Garantia sem enrolação</h2>
              </div>
              <div className="bg-green-50/50 border border-green-100 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Você tem 7 dias de garantia. Se não curtir, devolvemos seu dinheiro. Sem complicação.
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
                  <AccordionTrigger className="text-left text-lg">Preciso saber mexer com IA?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. O curso ensina passo a passo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Funciona com qualquer pessoa?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim, funciona com qualquer pessoa — homens, mulheres, qualquer idade ou estilo.
                    Durante o curso, eu explico exatamente quais fotos tirar (com exemplos e modelos) para que o resultado fique o melhor possível, sem complicação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Precisa pagar alguma ferramenta?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim, para gerar suas fotos você precisa usar uma ferramenta profissional externa (que ensino no curso). O valor é acessível: em torno de R$50 você já consegue gerar mais de 50 imagens profissionais.
                    Essa mesma produção, se feita com fotógrafo, figurino, viagem e edição, sairia por centenas de reais — aqui você faz direto de casa.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Funciona no celular?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Todo processo pode ser feito do celular.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Preciso de muitas fotos para começar?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Basta seguir os passos do curso. A preparação ideal está explicada lá dentro.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Em quanto tempo eu vejo resultado?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Você pode gerar suas primeiras fotos em menos de 2 horas após assistir às aulas. O processo é extremamente rápido, prático e automatizado.
                    Você não precisa dominar nada técnico — só seguir o que eu mostro no passo a passo.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-7" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Preciso saber algo sobre IA, edição ou fotografia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. O curso foi criado para iniciantes.
                    Tudo é explicado com clareza, com exemplos visuais e orientações diretas. Se você sabe usar o celular, consegue aplicar o método sem problema.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Eu tenho suporte se travar em alguma parte?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Você terá acesso ao suporte por e-mail e WhatsApp.
                    Qualquer dúvida, você pode mandar mensagem e te ajudarei a resolver o que for necessário.
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
