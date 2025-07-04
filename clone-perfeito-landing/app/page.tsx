import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  Camera,
  Check,
  Puzzle,
  Smartphone,
  Briefcase,
  User,
  Users,
  Target,
  Settings,
  Shield,
  GraduationCap,
  Package,
  DollarSign,
  Star,
  WandSparkles,
  PlayCircle,
  Map,
  TrendingUp,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  const testimonials = [1, 2, 3, 4, 5, 6, 7]
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]

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
      
      {/* Hero Section */}
      <section
        className="relative w-full h-auto min-h-[640px] md:min-h-[700px] bg-cover bg-center flex items-center py-20 md:py-0"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]">
              Transforme Fotos Comuns em Ensaios de Luxo com IA e Crie um Negócio Altamente Lucrativo
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto md:mx-0 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">
              O minicurso direto ao ponto que te entrega a habilidade de criar ensaios fotográficos impossíveis e lucrar com eles em menos de 24 horas. <strong>Sem precisar de experiência ou de equipamentos caros.</strong>
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                <Button size="lg" className="text-lg px-8 sm:px-12 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform">
                  QUERO CRIAR ENSAIOS LUCRATIVOS AGORA
                </Button>
              </Link>
              <p className="text-lg font-semibold text-white text-center md:text-left">
                De R$157 por R$47 à vista ou até 12x — uma nova fonte de renda pelo preço de um <strong>delivery de fim de semana.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Ementa do Curso */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Um Minicurso Direto ao Ponto: Sua Jornada para a Renda com IA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Em apenas 7 aulas práticas, você vai do zero absoluto a um profissional pronto para vender. Veja o caminho exato que você vai percorrer:
            </p>
          </div>
          <Card className="shadow-lg border-gray-200">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="p-4 border rounded-lg bg-white">
                <h3 className="font-bold text-xl text-indigo-600 mb-3">[ Módulo 1 ] Início da Jornada</h3>
                <p className="flex items-center gap-3 text-gray-700 mb-2"><PlayCircle className="w-5 h-5 text-gray-400" /> <strong>Aula 1:</strong> O que você vai aprender (7 min) - O plano completo para seu sucesso.</p>
                <p className="flex items-center gap-3 text-gray-700 mb-2"><PlayCircle className="w-5 h-5 text-gray-400" /> <strong>Aula 2:</strong> Criando sua conta e escolhendo o plano (4 min) - A base para começar sem erros.</p>
                <p className="flex items-center gap-3 text-gray-700"><Map className="w-5 h-5 text-gray-400" /> <strong>Material:</strong> Mapa Mental do Curso - Seu guia de consulta rápida para nunca se perder.</p>
              </div>
              <div className="p-4 border rounded-lg bg-white">
                <h3 className="font-bold text-xl text-indigo-600 mb-3">[ Módulo 2 ] Preparando o seu Clone</h3>
                <p className="flex items-center gap-3 text-gray-700 mb-2"><PlayCircle className="w-5 h-5 text-gray-400" /> <strong>Aula 3:</strong> Como preparar suas fotos (6 min) - O segredo para garantir que seu clone fique idêntico a você.</p>
                <p className="flex items-center gap-3 text-gray-700"><PlayCircle className="w-5 h-5 text-gray-400" /> <strong>Aula 4:</strong> Entendendo as configurações de treino (4 min) - Ajustes finos para um resultado profissional.</p>
              </div>
              <div className="p-4 border rounded-lg bg-white">
                <h3 className="font-bold text-xl text-indigo-600 mb-3">[ Módulo 3 ] Criando com seu Clone</h3>
                <p className="flex items-center gap-3 text-gray-700"><PlayCircle className="w-5 h-5 text-gray-400" /> <strong>Aula 5:</strong> Como gerar imagens e extrair prompts (19 min) - A aula mais importante para criar qualquer imagem que você imaginar.</p>
              </div>
              <div className="p-4 border rounded-lg bg-white">
                <h3 className="font-bold text-xl text-indigo-600 mb-3">[ Módulo 4 ] Próximos Passos</h3>
                <p className="flex items-center gap-3 text-gray-700 mb-2"><PlayCircle className="w-5 h-5 text-gray-400" /> <strong>Aula 6:</strong> Encerramento e próximos passos (1 min) - Como transformar a habilidade em um negócio.</p>
                <p className="flex items-center gap-3 text-gray-700"><Rocket className="w-5 h-5 text-gray-400" /> <strong>Aula 7 (Bônus):</strong> Como vender seu serviço - Estratégias de preço e prospecção de clientes.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Star className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">A Prova de que o Método Funciona (e Gera Lucro Rápido)</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Veja o que nossos alunos, de iniciantes a profissionais, estão dizendo sobre o curso.</p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                    <CardContent className="flex justify-center items-center bg-gray-50 p-2">
                      <img src={`/images/d${num}.jpg`} alt={`Depoimento em imagem de aluno ${num}`} className="w-full h-auto rounded-lg" />
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
      
      {/* Galeria dos Alunos */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-pink-500" />
              <h2 className="text-3xl font-bold text-gray-900">Veja o Poder do Método: Criações Reais de Alunos</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Imagens 100% geradas com a técnica que você vai aprender em menos de 2 horas. O próximo resultado impressionante pode ser o seu.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {studentCreations.map((num) => (
              <div key={num} className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={`/images/gerada-${num}.jpg`} alt={`Criação de aluno ${num}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potencial de Faturamento */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <TrendingUp className="w-10 h-10 text-green-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Da Primeira Venda à Renda Mensal: Seu Potencial de Ganhos</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Isso não é sobre ganhar 'um trocado'. É sobre construir um negócio lucrativo e escalável. Veja uma projeção realista de ganhos:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-50/70 border-2 border-green-200 shadow-lg text-center transform hover:-translate-y-2 transition-transform">
              <CardHeader><CardTitle className="text-green-800 text-xl">🚀 Seu Primeiro Lucro</CardTitle><p className="text-sm text-gray-500">(A Primeira Venda)</p></CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Um pacote rápido para um profissional liberal (fotos para LinkedIn, etc.).</p>
                <p className="text-gray-800 text-lg">Preço de Venda: <strong>R$197</strong></p>
                <p className="text-gray-500 text-sm">- Custo Ferramenta: ~R$50</p>
                <div className="my-4 border-t border-green-200"></div>
                <p className="text-gray-800">Lucro Líquido Imediato</p>
                <p className="text-4xl font-bold text-green-600">R$ 147</p>
                <p className="text-xs text-green-700 mt-2 bg-green-100 rounded-full px-3 py-1 inline-block">CURSO PAGO + LUCRO!</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50/70 border-2 border-blue-200 shadow-lg text-center transform hover:-translate-y-2 transition-transform">
              <CardHeader><CardTitle className="text-blue-800 text-xl">✨ Renda Semanal Consistente</CardTitle><p className="text-sm text-gray-500">(O Jogo do Conteúdo)</p></CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Imagine fechar 2 clientes de conteúdo na semana (Ex: influencers, social media).</p>
                <p className="text-gray-800 text-lg">Faturamento: <strong>2x R$347 = R$694</strong></p>
                <p className="text-gray-500 text-sm">- Custo Ferramenta: ~R$100</p>
                <div className="my-4 border-t border-blue-200"></div>
                <p className="text-gray-800">Lucro Líquido Semanal</p>
                <p className="text-4xl font-bold text-blue-600">R$ 594</p>
                <p className="text-xs text-blue-700 mt-2 bg-blue-100 rounded-full px-3 py-1 inline-block">MAIS DE R$2.300/MÊS</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50/70 border-2 border-purple-200 shadow-lg text-center transform hover:-translate-y-2 transition-transform">
              <CardHeader><CardTitle className="text-purple-800 text-xl">💎 O Jogo de Alto Nível</CardTitle><p className="text-sm text-gray-500">(Renda Previsível)</p></CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Atenda 3 clientes fixos com pacotes mensais (agências, empresas, profissionais consolidados).</p>
                <p className="text-gray-800 text-lg">Faturamento: <strong>3x R$597 = R$1.791</strong></p>
                <p className="text-gray-500 text-sm">- Custo Ferramenta: ~R$150</p>
                <div className="my-4 border-t border-purple-200"></div>
                <p className="text-gray-800">Lucro Líquido Mensal</p>
                <p className="text-4xl font-bold text-purple-600">+R$ 1.641</p>
                <p className="text-xs text-purple-700 mt-2 bg-purple-100 rounded-full px-3 py-1 inline-block">RENDA MENSAL ESCALÁVEL</p>
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
                <Users className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">Esta oportunidade é para você que é...</h2>
              </div>
              <div className="grid md:grid-cols-1 gap-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700"><strong>Designer ou Social Media</strong> e quer oferecer um banco de imagens infinito e personalizado para seus clientes, aumentando seu faturamento mensal.</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50/50 rounded-lg border border-purple-100">
                  <Target className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700"><strong>Gestor de Tráfego ou Agência</strong> e quer criar anúncios de alta conversão com o rosto dos clientes em qualquer cenário, com velocidade e custo imbatíveis.</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-lg border border-green-100">
                  <Camera className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700"><strong>Fotógrafo</strong> e quer adicionar um serviço digital inovador ao seu portfólio, alcançando novos clientes e aumentando o ticket médio.</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50/50 rounded-lg border border-orange-100">
                  <Star className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700"><strong>Freelancer ou Empreendedor</strong> e busca um novo negócio de baixo custo inicial, alta margem de lucro e altíssima demanda no mercado digital.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Antes e Depois Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-200 p-8 rounded-r-xl">
              <p className="text-xl font-semibold text-gray-800"><strong>O PONTO DE PARTIDA:</strong> fotos comuns que não vendem e não passam profissionalismo.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/antes-1.jpg" alt="Foto antes - selfie casual" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/antes-2.jpg" alt="Foto antes - selfie" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/antes-3.jpg" alt="Foto antes - selfie" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/antes-4.jpg" alt="Foto antes - selfie" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/antes-5.jpg" alt="Foto antes - selfie" className="w-full h-full object-cover" /></div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-200 p-8 rounded-r-xl">
              <p className="text-xl font-semibold text-gray-800"><strong>O RESULTADO FINAL:</strong> imagens de nível profissional que clientes pagam para ter. Versatilidade, qualidade e impacto para qualquer nicho.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/depois-1.jpg" alt="Foto depois - retrato profissional" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/depois-2.jpg" alt="Foto depois - lifestyle" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/depois-3.jpg" alt="Foto depois - executivo" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/depois-4.png" alt="Foto depois - lifestyle" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm"><img src="/images/depois-5.jpg" alt="Foto depois - profissional casual" className="w-full h-full object-cover" /></div>
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
              <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">"Seus clientes vão se surpreender com a qualidade. E só você saberá que não precisou de uma câmera, estúdio ou fotógrafo."</blockquote>
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
              <h2 className="text-3xl font-bold text-gray-900">Mercados que Compram este Serviço</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-pink-200 shadow-sm bg-gradient-to-br from-white to-pink-50/30"><CardContent className="p-6"><div className="flex items-center gap-3 mb-4"><Smartphone className="w-6 h-6 text-pink-500" /><h3 className="text-xl font-semibold text-gray-800">Social Media e Criadores de Conteúdo</h3></div><p className="text-gray-700 mb-6">Ofereça pacotes de imagens para manter o feed de seus clientes sempre atualizado, com estética profissional e sem depender de sessões de fotos caras.</p><div className="aspect-square rounded-xl overflow-hidden"><img src="/images/instagram-mountain.jpg" alt="Foto estilo Instagram" className="w-full h-full object-cover" /></div></CardContent></Card>
            <Card className="border-blue-200 shadow-sm bg-gradient-to-br from-white to-blue-50/30"><CardContent className="p-6"><div className="flex items-center gap-3 mb-4"><Briefcase className="w-6 h-6 text-blue-500" /><h3 className="text-xl font-semibold text-gray-800">Profissionais e Marcas Corporativas</h3></div><p className="text-gray-700 mb-6">Venda retratos profissionais para LinkedIn, sites e materiais de apresentação. Uma imagem de autoridade é crucial e muitas empresas pagam por isso.</p><div className="aspect-square rounded-xl overflow-hidden"><img src="/images/linkedin-professional.jpg" alt="Foto profissional para LinkedIn" className="w-full h-full object-cover" /></div></CardContent></Card>
            <Card className="border-green-200 shadow-sm bg-gradient-to-br from-white to-green-50/30"><CardContent className="p-6"><div className="flex items-center gap-3 mb-4"><Target className="w-6 h-6 text-green-500" /><h3 className="text-xl font-semibold text-gray-800">Anúncios e Criativos de Venda</h3></div><p className="text-gray-700 mb-6">Gestores de tráfego e agências precisam de criativos que convertem. Crie imagens com o rosto do cliente em cenários de venda para testar e escalar campanhas.</p><div className="aspect-square rounded-xl overflow-hidden"><img src="/images/portfolio-casual.jpg" alt="Foto para portfólio" className="w-full h-full object-cover" /></div></CardContent></Card>
            <Card className="border-orange-200 shadow-sm bg-gradient-to-br from-white to-orange-50/30"><CardContent className="p-6"><div className="flex items-center gap-3 mb-4"><Camera className="w-6 h-6 text-orange-500" /><h3 className="text-xl font-semibold text-gray-800">Fotógrafos e Videomakers</h3></div><p className="text-gray-700 mb-6">Adicione um braço digital ao seu negócio. Ofereça ensaios de IA como um produto de entrada ou um complemento aos seus pacotes, expandindo seu leque de serviços.</p><div className="aspect-square rounded-xl overflow-hidden"><img src="/images/tinder-lifestyle.png" alt="Foto estilo lifestyle" className="w-full h-full object-cover" /></div></CardContent></Card>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-lg">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <p className="text-xl font-semibold text-gray-800">Pronto para atender esses mercados?</p>
                <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank">
                  <Button size="lg" className="text-lg px-10 py-3 bg-green-600 hover:bg-green-700 text-white shadow-md transform hover:scale-105 transition-transform">
                    Sim, Quero Começar a Lucrar!
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <Package className="w-8 h-8 text-indigo-500 mt-1 flex-shrink-0" />
                <h2 className="text-3xl font-bold text-gray-900">Seu Arsenal Completo Para Começar a Faturar</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-blue-50/50 rounded-lg border border-blue-100"><User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" /><div><p className="text-lg font-semibold text-gray-800 mb-2">A criar um clone digital de qualquer pessoa</p><p className="text-gray-600">O passo a passo para treinar a IA com as fotos do seu cliente, garantindo um resultado hiper-realista e profissional, do zero.</p></div></div>
                <div className="flex items-start space-x-4 p-6 bg-purple-50/50 rounded-lg border border-purple-200 shadow-inner"><WandSparkles className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" /><div><p className="text-lg font-semibold text-purple-800 mb-2">Engenharia de Prompts (Nossa Arma Secreta)</p><p className="text-gray-700">Esqueça o bloqueio criativo. Você terá acesso ao nosso <strong>Agente GPT de Reengenharia Visual</strong>, uma ferramenta exclusiva que transforma QUALQUER imagem de referência no prompt perfeito para recriá-la.</p></div></div>
                <div className="flex items-start space-x-4 p-6 bg-green-50/50 rounded-lg border border-green-100"><DollarSign className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" /><div><p className="text-lg font-semibold text-gray-800 mb-2">A empacotar e precificar seu novo serviço</p><p className="text-gray-600">Não basta a técnica. Vou te mostrar como estruturar pacotes, quanto cobrar e como apresentar essa solução para seus clientes de forma irresistível.</p></div></div>
                <div className="flex items-start space-x-4 p-6 bg-orange-50/50 rounded-lg border border-orange-100"><Settings className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" /><div><p className="text-lg font-semibold text-gray-800 mb-2">A repetir o processo de forma escalável</p><p className="text-gray-600">O método é seu. Você saberá como replicar o processo para dezenas de clientes, transformando a habilidade em um negócio real.</p></div></div>
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
            <div>
              <div className="flex items-center gap-4 mb-8"><Package className="w-8 h-8 text-green-500" /><h2 className="text-3xl font-bold text-gray-900">Seu Kit para Começar a Faturar</h2></div>
              <div className="space-y-4"><div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-gray-700">Acesso vitalício ao curso e método completo</span></div><div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-sm"><Star className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-gray-700"><strong>Bônus:</strong> Agente GPT de Reengenharia Visual</span></div><div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-gray-700">Suporte direto por e-mail e WhatsApp</span></div><div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-gray-700">Todas as atualizações futuras do método</span></div></div>
            </div>
            <div className="text-center bg-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-green-500">
              <div className="flex items-center justify-center gap-4 mb-6"><DollarSign className="w-8 h-8 text-green-500" /><h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investimento Único</h2></div>
              <p className="text-base md:text-lg text-gray-700 mb-8">Um único ensaio fotográfico para um cliente pode ser vendido por R$300 a R$1.200. Hoje, você adquire a habilidade para sempre por um investimento que se paga no seu primeiro trabalho.</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">R$47 à vista</h3>
              <p className="text-base md:text-lg text-gray-600 mb-8">ou até 12x de R$5,22 no cartão</p>
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank"><Button size="lg" className="w-full text-lg sm:text-xl px-8 sm:px-12 py-6 bg-green-600 hover:bg-green-700 text-white shadow-lg mb-8 transform hover:scale-105 transition-transform">QUERO GARANTIR MINHA VAGA COM DESCONTO</Button></Link>
              <div className="text-center"><p className="text-gray-600 mb-4">Tem dúvidas se isso é para você?</p><a href="https://api.whatsapp.com/send?phone=5511978610717" target="_blank" rel="noopener noreferrer"><Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"><MessageCircle className="w-4 h-4 mr-2" />Falar com o suporte no WhatsApp</Button></a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50/30 to-white">
        <div className="max-w-4xl mx-auto"><Card className="border-green-200 shadow-sm bg-white"><CardContent className="p-8 md:p-12"><div className="flex items-start gap-4 mb-6"><Shield className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" /><h2 className="text-3xl font-bold text-gray-900">Sua Garantia Blindada de Risco Zero</h2></div><div className="bg-green-50/50 border border-green-100 rounded-lg p-8"><p className="text-lg text-gray-700 leading-relaxed">Você tem <strong>7 dias</strong> para acessar todo o material. Se por qualquer motivo achar que não é para você, basta pedir o reembolso e nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. <strong>O risco é todo nosso.</strong></p></div></CardContent></Card></div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto"><Card className="border-gray-200 shadow-sm bg-white"><CardContent className="p-8 md:p-12"><h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h2><Accordion type="single" collapsible className="w-full"><AccordionItem value="item-1" className="border-gray-200"><AccordionTrigger className="text-left text-lg">Preciso saber mexer com IA ou ser designer?</AccordionTrigger><AccordionContent className="text-gray-700 text-base">Não. O curso foi feito para iniciantes. Ensina o passo a passo de forma clara, sem termos técnicos complicados. Você só precisa seguir as aulas.</AccordionContent></AccordionItem><AccordionItem value="item-2" className="border-gray-200"><AccordionTrigger className="text-left text-lg">Funciona com qualquer tipo de cliente?</AccordionTrigger><AccordionContent className="text-gray-700 text-base">Sim, o método funciona com qualquer pessoa — homens, mulheres, de qualquer idade ou etnia. O importante é seguir as orientações do curso para coletar as fotos certas do seu cliente.</AccordionContent></AccordionItem><AccordionItem value="item-3" className="border-gray-200"><AccordionTrigger className="text-left text-lg">Precisa pagar alguma ferramenta cara?</AccordionTrigger><AccordionContent className="text-gray-700 text-base">Não. A ferramenta que ensinamos tem um custo acessível (em torno de R$50) para gerar um grande volume de imagens. Este custo é facilmente repassado no valor que você cobra do seu cliente, garantindo sua margem de lucro.</AccordionContent></AccordionItem><AccordionItem value="item-4" className="border-gray-200"><AccordionTrigger className="text-left text-lg">Posso fazer todo o trabalho pelo celular?</AccordionTrigger><AccordionContent className="text-gray-700 text-base">Sim. Todo o processo, desde a criação do clone até a geração das imagens para o seu cliente, pode ser feito 100% pelo celular.</AccordionContent></AccordionItem><AccordionItem value="item-6" className="border-gray-200"><AccordionTrigger className="text-left text-lg">Em quanto tempo eu consigo meu primeiro cliente?</AccordionTrigger><AccordionContent className="text-gray-700 text-base">Você termina o curso em menos de 2 horas. A partir daí, você já terá a habilidade e o conhecimento para prospectar e fechar seu primeiro cliente. O retorno sobre o investimento pode ser imediato.</AccordionContent></AccordionItem><AccordionItem value="item-8" className="border-gray-200"><AccordionTrigger className="text-left text-lg">Terei suporte se eu ou meu cliente tivermos dúvidas?</AccordionTrigger><AccordionContent className="text-gray-700 text-base">Sim. Você terá acesso ao nosso suporte prioritário por e-mail e WhatsApp. Qualquer dúvida técnica ou estratégica, estaremos lá para te ajudar a resolver.</AccordionContent></AccordionItem></Accordion></CardContent></Card></div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-gray-200 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-4xl mx-auto"><img src="/images/logocp.svg" alt="Logo Clone Perfeito" className="w-40 mx-auto mb-6" /><p className="text-gray-600 mb-2">© 2024 Clone Perfeito</p><p className="text-gray-500 text-sm mb-4">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p><div className="flex justify-center space-x-6 text-sm text-gray-500"><a href="https://www.notion.so/Clone-Perfeito-2239d41a264b80c197ecf9e0fe11122c?source=copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">Política de Privacidade</a><a href="https://www.notion.so/Clone-Perfeito-2239d41a264b80c197ecf9e0fe11122c?source=copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">Termos de Uso</a></div></div>
      </footer>
    </div>
  )
}
