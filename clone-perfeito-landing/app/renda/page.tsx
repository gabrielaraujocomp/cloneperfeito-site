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
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7]
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]

  const modules = [
    {
      id: "item-1",
      imageSrc: "/images/modulo-1.jpg",
      title: "Módulo Bônus: Clone com ChatGPT (Grátis)",
      description: "Comece com o pé direito! Neste módulo bônus, você aprende a criar seu primeiro clone e gerar um ensaio de forma 100% gratuita, usando apenas o ChatGPT. É o caminho ideal para construir seu portfólio sem nenhum custo inicial.",
    },
    {
      id: "item-2",
      imageSrc: "/images/modulo-2.jpg",
      title: "Módulo 1: Início da Jornada",
      description: "Aqui preparamos o terreno para o seu sucesso. Você vai entender a mentalidade correta, o potencial de mercado deste serviço e faremos as configurações iniciais das ferramentas, deixando tudo pronto para a ação.",
    },
    {
      id: "item-3",
      imageSrc: "/images/modulo-3.jpg",
      title: "Módulo 2: Preparando o seu Clone",
      description: "O coração do método. Você aprenderá o passo a passo detalhado para selecionar as fotos ideais do seu cliente, treinar a inteligência artificial e criar o 'ativo digital': um clone hiper-realista e de alta qualidade.",
    },
    {
      id: "item-4",
      imageSrc: "/images/modulo-4.jpg",
      title: "Módulo 3: Criando com seu Clone",
      description: "Hora de soltar a criatividade. Domine a arte de usar prompts para gerar ensaios incríveis em qualquer cenário. Você terá acesso ao nosso Agente GPT exclusivo para transformar qualquer imagem de referência em um prompt perfeito.",
    },
    {
      id: "item-5",
      imageSrc: "/images/modulo-5.jpg",
      title: "Módulo 4: Encerramento e Próximos Passos",
      description: "Com a técnica dominada, vamos transformar sua habilidade em dinheiro. Aprenda a empacotar, precificar e vender seu serviço. Mostraremos como encontrar seus primeiros clientes e transformar o Clone Perfeito em um negócio lucrativo.",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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

      {/* Microsoft Clarity Code */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s98m9z0sda");
        `}
      </Script>
      {/* End Microsoft Clarity Code */}
      
      {/* [NOVA] Header Section - VISUALMENTE REFORMULADA */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight [text-shadow:_2px_2px_6px_rgb(0_0_0_/_50%)]">
              Aprenda a Criar Ensaios com IA em Menos de 1 Hora e Venda por R$300, R$600, R$1000+
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_50%)]">
              Transforme fotos amadoras em ensaios profissionais, treine a IA com qualquer rosto e comece a vender esse serviço sem precisar de equipamento.
            </p>

            {/* CTA Block Reformulado */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto text-lg px-10 py-7 bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform">
                  QUERO CRIAR ENSAIOS COM IA
                </Button>
              </Link>
              <p className="text-base font-medium text-white text-center md:text-left">
                De <span className="line-through">R$157</span> por <span className="font-bold text-lg">R$97</span> à vista ou até 12x de R$10,03.
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
                <DollarSign className="w-10 h-10 text-indigo-500 flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Transforme uma Habilidade de IA em um Negócio Lucrativo
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Clone Perfeito é um treinamento prático que te ensina a criar e vender um serviço de alto valor: ensaios fotográficos gerados por Inteligência Artificial. Esqueça a teoria. Aqui você aprende uma habilidade para gerar renda.
              </p>
              <div className="bg-indigo-50/50 border-l-4 border-indigo-200 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-800">
                  Em menos de 2 horas, você estará pronto para criar e vender seu primeiro ensaio. O método é direto ao ponto.
                </p>
              </div>
            </div>

            {/* Right Column: Key Learnings */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <User className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Crie o Ativo Principal: O Clone Digital</h3>
                  <p className="text-gray-600">
                    Aprenda a treinar a IA com fotos de qualquer pessoa para gerar um clone hiper-realista para seus clientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Camera className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Produza Ensaios de Alto Nível</h3>
                  <p className="text-gray-600">
                    Gere imagens profissionais em qualquer cenário que seu cliente desejar, de fotos corporativas a posts para redes sociais.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Briefcase className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Estruture e Venda o Serviço</h3>
                  <p className="text-gray-600">
                    Entenda como empacotar, precificar e oferecer essa nova habilidade para adicionar uma fonte de receita ao seu negócio.
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
              <h2 className="text-3xl font-bold text-gray-900">A Prova de que o Método Funciona</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veja o que nossos alunos, de iniciantes a profissionais, estão dizendo sobre o curso.
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

      {/* Para quem é isso */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <Users className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">Esta oportunidade é para você que é...</h2>
              </div>
              <div className="grid md:grid-cols-1 gap-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Designer ou Social Media</strong> e quer oferecer um banco de imagens infinito e personalizado para seus clientes, aumentando seu faturamento mensal.
                  </span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Target className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Gestor de Tráfego ou Agência</strong> e quer criar anúncios de alta conversão com o rosto dos clientes em qualquer cenário, com velocidade e custo imbatíveis.
                  </span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-lg border border-green-100">
                  <Camera className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Fotógrafo</strong> e quer adicionar um serviço digital inovador ao seu portfólio, alcançando novos clientes e aumentando o ticket médio.
                  </span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Star className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Freelancer ou Empreendedor</strong> e busca um novo negócio de baixo custo inicial, alta margem de lucro e altíssima demanda no mercado digital.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Estimativa de Ganhos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Seu Caminho para Faturar com Ensaios de IA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Não se trata de ficar rico da noite para o dia, mas de construir uma fonte de renda sólida com um serviço inovador. Veja um plano realista.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Coluna da Esquerda: O Roadmap */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 text-center lg:text-left">Seu Plano de Ação</h3>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-indigo-100 text-indigo-500 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Aprenda o Método</h4>
                  <p className="text-gray-600">
                    Em menos de 2 horas, conclua o curso e domine a técnica para criar clones e gerar imagens de alta qualidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-indigo-100 text-indigo-500 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Crie seu Portfólio</h4>
                  <p className="text-gray-600">
                    Use o método em si mesmo para criar um portfólio impressionante. Essas serão suas primeiras peças de venda.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-indigo-100 text-indigo-500 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Defina seus Pacotes</h4>
                  <p className="text-gray-600">
                    Use nossos exemplos para criar suas próprias ofertas. Comece com pacotes simples para ganhar confiança e seus primeiros clientes.
                  </p>
                </div>
              </div>
               <div className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-indigo-100 text-indigo-500 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Divulgue e Venda</h4>
                  <p className="text-gray-600">
                    Ofereça para sua rede de contatos, clientes atuais (se for social media/designer) e em grupos de freelancers. Seu primeiro "sim" virá rápido.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Estimativa de Ganhos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center lg:text-left">Potencial de Faturamento</h3>
              <Card className="bg-green-50/70 border border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-green-800">Pacote Essencial (1 Cliente)</h4>
                  <p className="text-gray-700 mt-2 mb-4">Ideal para um profissional que precisa de fotos para o LinkedIn. (Ex: 15 imagens em alta resolução).</p>
                  <p className="text-gray-600">Preço de venda sugerido: <strong className="text-gray-900">R$ 197,00</strong></p>
                  <p className="text-sm text-gray-500">Custo da ferramenta: ~R$ 50,00</p>
                  <p className="font-bold text-green-700 mt-2">Seu Lucro Estimado: ~R$ 147,00</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50/70 border border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-blue-800">Pacote Conteúdo (1 Cliente)</h4>
                  <p className="text-gray-700 mt-2 mb-4">Perfeito para um criador de conteúdo que precisa de variedade para o Instagram. (Ex: 40 imagens, 2 estilos diferentes).</p>
                  <p className="text-gray-600">Preço de venda sugerido: <strong className="text-gray-900">R$ 347,00</strong></p>
                  <p className="text-sm text-gray-500">Custo da ferramenta: ~R$ 50,00</p>
                  <p className="font-bold text-blue-700 mt-2">Seu Lucro Estimado: ~R$ 297,00</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50/70 border border-purple-200">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-purple-800">Retainer Mensal (Agências/Social Media)</h4>
                  <p className="text-gray-700 mt-2 mb-4">O jogo real. Fornecer imagens sob demanda para um cliente fixo. (Ex: 20 novas imagens por mês).</p>
                  <p className="text-gray-600">Preço de venda sugerido: <strong className="text-gray-900">R$ 400 a R$ 900 / mês</strong></p>
                  <p className="text-sm text-gray-500">Custo da ferramenta: ~R$ 50,00 / mês</p>
                  <p className="font-bold text-purple-700 mt-2">Seu Lucro Estimado: R$ 350 a R$ 850 / mês (por cliente)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Criações dos Alunos */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-indigo-500" />
              <h2 className="text-3xl font-bold text-gray-900">A Criatividade dos Nossos Alunos em Ação</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De retratos corporativos a cenas de lifestyle, veja a qualidade e a versatilidade dos ensaios que você também poderá criar.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {studentCreations.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={`/images/gerada-${num}.jpg`}
                      alt={`Ensaio gerado por aluno ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                <strong>O PONTO DE PARTIDA:</strong> fotos comuns que não vendem e não passam profissionalismo.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/antes-1.jpg" alt="Foto antes - selfie casual no quarto" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/antes-2.jpg" alt="Foto antes - selfie ao ar livre" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/antes-3.jpg" alt="Foto antes - selfie no jardim" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/antes-4.jpg" alt="Foto antes - selfie close-up" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/antes-5.jpg" alt="Foto antes - selfie no espelho" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Depois */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-200 p-8 rounded-r-xl">
              <p className="text-xl font-semibold text-gray-800">
                <strong>O RESULTADO FINAL:</strong> imagens de nível profissional que clientes pagam para ter. Versatilidade, qualidade e impacto para qualquer nicho.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/depois-1.jpg" alt="Foto depois - retrato profissional corporativo" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/depois-2.jpg" alt="Foto depois - lifestyle em Paris" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/depois-3.jpg" alt="Foto depois - executivo no escritório" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/depois-4.png" alt="Foto depois - lifestyle com carro" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                <img src="/images/depois-5.jpg" alt="Foto depois - casual profissional no café" className="w-full h-full object-cover" />
              </div>
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
                "Seus clientes vão se surpreender com a qualidade. E só você saberá que não precisou de uma câmera, estúdio ou fotógrafo."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== INÍCIO DA SEÇÃO REFORMULADA ===== */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Puzzle className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900">Para Quem Você Pode Vender Este Serviço</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A demanda por conteúdo visual de alta qualidade é enorme. Veja os mercados que mais precisam (e pagam) por essa solução.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Social Media */}
            <Card className="border-pink-200 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100 rounded-full"><Smartphone className="w-6 h-6 text-pink-600" /></div>
                  <h3 className="text-xl font-semibold text-gray-800">Social Media e Criadores</h3>
                </div>
                <p className="text-gray-600">
                  Ajude seus clientes a manter um feed profissional e atualizado sem o custo e a logística de sessões de fotos.
                </p>
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold text-gray-700">Aplicações Práticas:</p>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Posts para Instagram e TikTok</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Atualização de fotos de perfil</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Imagens para carrosséis e Stories</span></div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Corporativo */}
            <Card className="border-blue-200 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full"><Briefcase className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="text-xl font-semibold text-gray-800">Marcas e Profissionais</h3>
                </div>
                <p className="text-gray-600">
                  Forneça imagens de autoridade para sites, LinkedIn e materiais de marketing. Uma imagem profissional é crucial para negócios.
                </p>
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold text-gray-700">Aplicações Práticas:</p>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Fotos para LinkedIn e sites</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Imagens para apresentações</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Headshots para equipes inteiras</span></div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Anúncios */}
            <Card className="border-green-200 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full"><Target className="w-6 h-6 text-green-600" /></div>
                  <h3 className="text-xl font-semibold text-gray-800">Anúncios e Vendas</h3>
                </div>
                <p className="text-gray-600">
                  Crie uma infinidade de criativos para campanhas de tráfego pago, testando variações para aumentar a conversão.
                </p>
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold text-gray-700">Aplicações Práticas:</p>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Criativos para Facebook e Instagram Ads</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Testar ângulos e expressões</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Banners para Google Ads e Taboola</span></div>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Fotógrafos */}
            <Card className="border-orange-200 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-full"><Camera className="w-6 h-6 text-orange-600" /></div>
                  <h3 className="text-xl font-semibold text-gray-800">Fotógrafos e Videomakers</h3>
                </div>
                <p className="text-gray-600">
                  Adicione um serviço digital inovador ao seu portfólio para atrair novos clientes e aumentar o valor dos seus pacotes atuais.
                </p>
                 <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold text-gray-700">Aplicações Práticas:</p>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Oferecer ensaios de IA como upsell</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Criar um produto de entrada acessível</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>Expandir o portfólio com opções digitais</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Block 2 */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-lg">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <p className="text-xl font-semibold text-gray-800">Pronto para atender esses mercados?</p>
                <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                  <Button size="lg" className="text-lg px-10 py-3 bg-green-600 hover:bg-green-700 text-white shadow-md">
                    Sim, quero começar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* ===== FIM DA SEÇÃO REFORMULADA ===== */}

      {/* O que você vai aprender */}
      <section className="py-20 px-4 bg-white">
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
                    <p className="text-lg font-semibold text-gray-800 mb-2">A criar um clone digital de qualquer pessoa</p>
                    <p className="text-gray-600">
                      O passo a passo para treinar a IA com as fotos do seu cliente, garantindo um resultado hiper-realista e profissional, do zero.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Lightbulb className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      A usar prompts para gerar ensaios completos
                    </p>
                    <p className="text-gray-600">
                      Você terá acesso a prompts validados e ao nosso Agente GPT exclusivo, que extrai o prompt de qualquer imagem de referência, para entregar exatamente o que o cliente pediu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-green-50/50 rounded-lg border border-green-100">
                  <Package className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      A empacotar e precificar seu novo serviço
                    </p>
                    <p className="text-gray-600">
                      Não basta a técnica. Vou te mostrar como estruturar pacotes de serviços, quanto cobrar e como apresentar essa solução para seus clientes de forma irresistível.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Settings className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      A repetir o processo de forma escalável
                    </p>
                    <p className="text-gray-600">
                      O método é seu. Você saberá como replicar o processo para dezenas de clientes, transformando a habilidade em um negócio real e escalável.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* A Estrutura Completa do Clone Perfeito */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-indigo-500" />
              <h2 className="text-3xl font-bold text-gray-900">A Estrutura Completa do Clone Perfeito</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada módulo foi desenhado para te levar do zero absoluto a um profissional capaz de vender esse serviço.
            </p>
          </div>
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-4 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {modules.map((module) => (
                  <AccordionItem key={module.id} value={module.id} className="border-b last:border-b-0 border-gray-200">
                    <AccordionTrigger className="text-left text-lg hover:no-underline p-4">
                      <div className="flex items-center gap-4 w-full">
                        <img 
                          src={module.imageSrc} 
                          alt={`Capa do ${module.title}`}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover shadow-sm flex-shrink-0"
                        />
                        <span className="flex-1 font-semibold text-gray-800">{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base leading-relaxed p-4 pt-0 pl-24 md:pl-28">
                      {module.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Bônus Especial */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Gem className="w-8 h-8 text-indigo-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-indigo-600 font-semibold">BÔNUS ESPECIAL</p>
                  <h2 className="text-3xl font-bold text-gray-900">Crie seu Primeiro Portfólio de Graça</h2>
                </div>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Para acelerar seus primeiros resultados, adicionei uma <strong>aula bônus completa</strong> onde ensino duas formas de criar um clone e gerar um ensaio com IA de forma <strong>100% gratuita</strong>, usando apenas o ChatGPT.
                </p>
                <p>
                  É a maneira perfeita de montar um portfólio inicial, praticar a técnica e até mesmo conseguir seu primeiro cliente sem gastar um único real com ferramentas.
                </p>
                <div className="mt-6 bg-indigo-100/70 border-l-4 border-indigo-300 p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800">
                    <strong>Importante:</strong> Este método bônus é uma excelente porta de entrada, mas não substitui a qualidade e o controle do método profissional definitivo ensinado no curso. Pense nele como seu "aquecimento" para começar a faturar.
                  </p>
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
                <h2 className="text-3xl font-bold text-gray-900">Seu Kit para Começar a Faturar</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Acesso vitalício ao curso e método completo (4 Módulos)</span>
                </div>
                 <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Bônus:</strong> Aula de criação com ChatGPT (gratuito)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Bônus:</strong> Agente GPT exclusivo de extração de prompts</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Suporte direto por e-mail e WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Todas as atualizações futuras do método</span>
                </div>
              </div>
            </div>

            {/* Right Column - Preço */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold text-gray-900">Investimento Único</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Um único ensaio fotográfico para um cliente pode ser vendido por R$300 a R$1.200. Hoje, você adquire a habilidade para vender inúmeros ensaios por um investimento que se paga no seu primeiro trabalho.
              </p>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">R$97 à vista</h3>
              <p className="text-lg text-gray-600 mb-8">ou até 12x de R$10,03 no cartão</p>
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button
                  size="lg"
                  className="text-lg sm:text-xl px-8 sm:px-12 py-6 bg-green-600 hover:bg-green-700 text-white shadow-lg mb-8"
                >
                  GARANTIR MINHA VAGA E COMEÇAR
                </Button>
              </Link>
              <div className="text-center">
                <p className="text-gray-600 mb-4">Tem dúvidas se isso é para você?</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5511978610717"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar com o suporte no WhatsApp
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
                  Você tem 7 dias para acessar todo o material. Se por qualquer motivo achar que não é para você, basta pedir o reembolso e nós devolvemos 100% do seu dinheiro. Simples assim.
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
                  <AccordionTrigger className="text-left text-lg">Preciso saber mexer com IA ou ser designer?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. O curso foi feito para iniciantes. Ensina o passo a passo de forma clara, sem termos técnicos complicados. Você só precisa seguir as aulas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Funciona com qualquer tipo de cliente?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim, o método funciona com qualquer pessoa — homens, mulheres, de qualquer idade ou etnia. O importante é seguir as orientações do curso para coletar as fotos certas do seu cliente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Precisa pagar alguma ferramenta cara?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Não. A ferramenta que ensinamos tem um custo acessível (em torno de R$50) para gerar um grande volume de imagens. Este custo é facilmente repassado no valor que você cobra do seu cliente, garantindo sua margem de lucro. Além disso, no bônus, ensinamos um método 100% gratuito para começar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">Posso fazer todo o trabalho pelo celular?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Todo o processo, desde a criação do clone até a geração das imagens para o seu cliente, pode ser feito 100% pelo celular.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Em quanto tempo eu consigo meu primeiro cliente?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Você termina o curso em menos de 2 horas. A partir daí, você já terá a habilidade e o conhecimento para prospectar e fechar seu primeiro cliente. O retorno sobre o investimento pode ser imediato.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="border-gray-200">
                  <AccordionTrigger className="text-left text-lg">
                    Terei suporte se eu ou meu cliente tivermos dúvidas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    Sim. Você terá acesso ao nosso suporte prioritário por e-mail e WhatsApp. Qualquer dúvida técnica ou estratégica, estaremos lá para te ajudar a resolver.
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
