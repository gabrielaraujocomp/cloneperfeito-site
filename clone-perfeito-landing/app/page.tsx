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
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7]
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]

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
      <section
        className="relative w-full h-auto min-h-[640px] md:min-h-[700px] bg-cover bg-center flex items-center py-20 md:py-0"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]">
              Domine o método para criar seu clone e fotos de alto impacto com IA — mesmo sendo iniciante
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">
              Um método passo a passo para você criar retratos hiper-realistas com Inteligência Artificial — em estilo
              profissional, lifestyle ou viagem, em poucos minutos e sem nenhuma experiência.
            </p>

            {/* CTA Block */}
            <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button size="lg" className="text-lg px-12 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                  Quero aprender agora!
                </Button>
              </Link>
              <p className="text-lg font-semibold text-white text-center md:text-left">
                De R$157 por R$47 à vista ou até 12x — desconto até 08/07!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Clone Perfeito [REDESIGNED] */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Title and Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Bot className="w-10 h-10 text-indigo-500 flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Sua Identidade Visual, Reinventada com IA
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Clone Perfeito é um minicurso prático que te transforma em um mestre da sua própria imagem. Esqueça
                ensaios caros e complicados. Aqui, você aprende a usar a inteligência artificial para criar retratos
                impressionantes que refletem sua melhor versão — com qualidade de estúdio, direto da sua casa.
              </p>
              <div className="bg-indigo-50/50 border-l-4 border-indigo-200 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-800">
                  Em menos de 2 horas, você domina o método completo, do zero ao resultado final.
                </p>
              </div>
            </div>

            {/* Right Column: Key Learnings */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Camera className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Crie seu Clone do Zero</h3>
                  <p className="text-gray-600">
                    Aprenda a treinar a IA com suas fotos para gerar um clone hiper-realista.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Target className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Domine os Prompts</h3>
                  <p className="text-gray-600">
                    Use nosso guia de prompts para criar qualquer estilo: profissional, casual, artístico ou de viagem.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Star className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Brilhe Onde Quiser</h3>
                  <p className="text-gray-600">
                    Use suas novas fotos para impactar no LinkedIn, Instagram, Tinder ou em seu portfólio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section [IMPROVED] */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Users className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">Aprovação de quem já fez o curso</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veja o que nossos alunos estão dizendo sobre o método Clone Perfeito e a transformação em suas imagens.
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

      {/* Student Creations Section [NEW] */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900">Veja o que é possível criar</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos alunos estão gerando imagens incríveis para todos os tipos de situação. A criatividade não tem
              limites.
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

          {/* CTA Block 1 [NEW] */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 shadow-lg">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <p className="text-xl font-semibold text-gray-800">Sua vez de impressionar está a um clique.</p>
                <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                  <Button size="lg" className="text-lg px-10 py-3 bg-green-600 hover:bg-green-700 text-white shadow-md">
                    Quero criar também
                  </Button>
                </Link>
              </CardContent>
            </Card>
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

      {/* Aplicações reais */}
      <section className="py-20 px-4">
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

          {/* CTA Block 2 [NEW] */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-lg">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <p className="text-xl font-semibold text-gray-800">Pronto para ter uma imagem que gera resultados?</p>
                <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                  <Button size="lg" className="text-lg px-10 py-3 bg-green-600 hover:bg-green-700 text-white shadow-md">
                    Sim, quero aprender
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é isso */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
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
                  <span className="text-lg text-gray-700">
                    Quem quer uma imagem mais profissional e convincente nas redes
                  </span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Criadores de conteúdo que precisam se destacar no feed</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-lg border border-green-100">
                  <Briefcase className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Profissionais autônomos, freelancers e empreendedores</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Star className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Pessoas comuns que querem se destacar de forma simples e inteligente
                  </span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-pink-50/50 rounded-lg border border-pink-100 md:col-span-2">
                  <Heart className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Até quem quer impressionar nos apps de relacionamento</span>
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
                    <p className="text-lg font-semibold text-gray-800 mb-2">Criar seu próprio clone com IA, do zero</p>
                    <p className="text-gray-600">
                      Você vai aprender a subir suas fotos corretamente, escolher o modelo ideal e configurar o
                      treinamento do seu clone com clareza, mesmo sem saber nada de IA.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Lightbulb className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Usar prompts prontos para gerar ensaios completos
                    </p>
                    <p className="text-gray-600">
                      Vou te mostrar como usar frases simples (já testadas) que geram resultados incríveis — e ainda
                      como adaptar para diferentes estilos e objetivos (profissional, lifestyle, divertido, etc).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-green-50/50 rounded-lg border border-green-100">
                  <Film className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Selecionar os melhores ângulos, poses e estilos
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
                    <p className="text-gray-600">
                      Você vai aprender onde e como usar as imagens geradas: para causar impacto no Instagram, se
                      destacar no LinkedIn, impressionar num currículo, ou até para gerar mais matches nos apps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Settings className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Repetir o processo sempre que quiser
                    </p>
                    <p className="text-gray-600">
                      O método é seu. Sempre que quiser atualizar seu visual, fazer um novo ensaio ou testar novos
                      estilos, você saberá como fazer — sem depender de ninguém.
                    </p>
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
          <div className="text-center mb-12">
            <img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-48 mx-auto mb-6" />
          </div>
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
                Um ensaio profissional pode custar de R$300 a R$1.200. Com o Clone Perfeito, você aprende a gerar
                imagens incríveis com IA por apenas R$47 — e ainda leva um minicurso, um agente de prompts,
                atualizações e suporte vitalício.
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
                    Sim, funciona com qualquer pessoa — homens, mulheres, qualquer idade ou estilo. Durante o curso, eu
                    explico exatamente quais fotos tirar (com exemplos e modelos) para que o resultado fique o melhor
                    possível, sem complicação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Precisa pagar alguma ferramenta?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim, para gerar suas fotos você precisa usar uma ferramenta profissional externa (que ensino no
                    curso). O valor é acessível: em torno de R$50 você já consegue gerar mais de 50 imagens
                    profissionais. Essa mesma produção, se feita com fotógrafo, figurino, viagem e edição, sairia por
                    centenas de reais — aqui você faz direto de casa.
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
                    Você pode gerar suas primeiras fotos em menos de 2 horas após assistir às aulas. O processo é
                    extremamente rápido, prático e automatizado. Você não precisa dominar nada técnico — só seguir o que
                    eu mostro no passo a passo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Preciso saber algo sobre IA, edição ou fotografia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. O curso foi criado para iniciantes. Tudo é explicado com clareza, com exemplos visuais e
                    orientações diretas. Se você sabe usar o celular, consegue aplicar o método sem problema.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Eu tenho suporte se travar em alguma parte?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Você terá acesso ao suporte por e-mail e WhatsApp. Qualquer dúvida, você pode mandar mensagem e
                    te ajudarei a resolver o que for necessário.
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
