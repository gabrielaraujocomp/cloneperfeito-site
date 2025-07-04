// /app/page.tsx (ou onde seu componente estiver)
// VERSÃO TURBINADA - FUSÃO DAS PESQUISAS GEMINI + GPT

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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scripts de Rastreamento (Meta & Clarity) - Mantidos */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <noscript>{`...`}</noscript>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      {/* SEÇÃO 1: NOVA HERO SECTION (Gemini 2.1 + GPT 6) */}
      {/* Foco em resultado específico (R$), quebra de objeções (sem câmera/experiência) e emoção. */}
      <section
        className="relative w-full h-auto min-h-[700px] md:min-h-[720px] bg-cover bg-center flex items-center py-20 md:py-0"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]">
              Transforme seu Computador em uma Fonte de Renda de R$1.500/mês
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto md:mx-0 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">
              Descubra o método passo a passo para criar ensaios fotográficos com Inteligência Artificial e vender seu primeiro pacote em 7 dias — mesmo que você nunca tenha usado uma ferramenta de IA na vida.
            </p>
            <div className="flex flex-col items-center justify-center md:justify-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 max-w-2xl">
              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full">
                <Button size="lg" className="w-full text-xl px-8 py-7 bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform">
                  QUERO TRANSFORMAR IA EM RENDA
                </Button>
              </Link>
              <p className="text-lg font-semibold text-white text-center">
                Acesso imediato por apenas R$ 47
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: NOVA SEÇÃO PASO (Problema-Agitação-Solução) (Gemini 1.1 & 2.2) */}
      {/* Essencial para criar conexão emocional e empatia antes de apresentar o produto. */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Se você se identifica com isso, você está no lugar certo...
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Você sente que está correndo em círculos? A conta do mês fecha, mas nunca sobra o que você gostaria. Você vê oportunidades online, mas tudo parece <strong className="text-indigo-600">complicado demais, caro demais</strong>, ou exige um tempo que você simplesmente não tem.
            </p>
            <p>
              A ideia de 'renda extra' parece um sonho distante, reservado para quem já tem alguma habilidade especial ou dinheiro para investir. Essa sensação de estar 'preso', de ter potencial mas não saber como transformá-lo em dinheiro, é frustrante. Ela te impede de planejar o futuro, de ter mais tranquilidade e de sentir que está no controle da sua vida financeira.
            </p>
          </div>
          <div className="my-12 border-t border-gray-200"></div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mas e se existisse uma nova porta?</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Uma habilidade que (ainda) poucos dominam, que não exige faculdade, equipamentos caros ou anos de prática. Uma habilidade que transforma a tecnologia mais falada do momento em um <strong className="text-green-600">serviço real, que clientes estão dispostos a pagar... e pagar bem.</strong>
            </p>
            <p className="text-xl font-bold text-gray-900 mt-6">
              É exatamente para isso que criei o Clone Perfeito.
            </p>
          </div>
        </div>
      </section>
      
      {/* SEÇÃO 3: ANTES E DEPOIS - A PROVA VISUAL DA TRANSFORMAÇÃO */}
      {/* Mantida e reforçada com títulos claros para enquadrar a transformação. */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-200 p-8 rounded-r-xl mb-8">
              <p className="text-xl font-semibold text-gray-800">
                <strong>O PONTO DE PARTIDA:</strong> Fotos comuns que não vendem e não passam profissionalismo.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {/* Imagens 'Antes' aqui... */}
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-200 p-8 rounded-r-xl mb-8">
              <p className="text-xl font-semibold text-gray-800">
                <strong>O RESULTADO FINAL (Resultado):</strong> Imagens de nível profissional que clientes pagam para ter.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {/* Imagens 'Depois' aqui... */}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: NOVO "MOTOR DE ROI" - Potencial de Lucratividade (Gemini 1.3 & 2.3) */}
      {/* Seção crucial para justificar o investimento, sendo transparente sobre todos os custos. */}
      <section className="py-20 px-4 bg-indigo-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Isso não é sobre 'dinheiro fácil'. É sobre matemática simples.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Você faz um investimento mínimo para adquirir uma habilidade que te permite cobrar 3x, 5x, até 10x mais no seu primeiro projeto. Veja o potencial real:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Coluna da Esquerda: O Investimento */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Seu Investimento Inicial ÚNICO para Começar</h3>
                <div className="space-y-4 text-lg">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Curso Clone Perfeito:</span>
                        <span className="font-bold text-indigo-600">R$ 47</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Créditos na Ferramenta de IA (seu 'kit de ferramentas'):</span>
                        <span className="font-bold text-indigo-600">~R$ 50</span>
                    </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center text-xl font-bold">
                    <span>Investimento Total para Começar:</span>
                    <span className="text-green-600">~R$ 97</span>
                </div>
            </div>

            {/* Coluna da Direita: A Tabela de Lucro */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cenários de Lucratividade</h3>
                {/* Tabela de Lucratividade */}
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center font-semibold text-gray-500 text-sm">
                        <span>Pacote Vendido</span>
                        <span>Lucro (1º Cliente)</span>
                        <span>Lucro (5 Clientes)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center p-4 bg-green-50 rounded-lg items-center">
                        <span className="font-semibold text-gray-800">Pacote Essencial (R$197)</span>
                        <span className="font-bold text-2xl text-green-700">+R$ 100</span>
                        <span className="font-bold text-2xl text-green-700">+R$ 888</span>
                    </div>
                     <div className="grid grid-cols-3 gap-2 text-center p-4 bg-blue-50 rounded-lg items-center">
                        <span className="font-semibold text-gray-800">Pacote Conteúdo (R$347)</span>
                        <span className="font-bold text-2xl text-blue-700">+R$ 250</span>
                        <span className="font-bold text-2xl text-blue-700">+R$ 1.638</span>
                    </div>
                </div>
            </div>
          </div>
          <div className="mt-12 text-center bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg max-w-4xl mx-auto">
            <p className="text-xl font-semibold">
              Com a venda de um único Pacote Essencial, você já <strong className="underline">recupera todo o seu investimento e sai no lucro</strong>. Cada cliente depois disso é praticamente 100% lucro no seu bolso.
            </p>
          </div>
        </div>
      </section>
      
      {/* SEÇÃO 5: PROVA SOCIAL - DEPOIMENTOS (Gemini 2.4) */}
      {/* Mantida a estrutura, mas com título que foca em resultado, conforme sugerido. */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">De Iniciante a Gerando Renda em Poucos Dias</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
              Veja o que nossos alunos, de iniciantes a profissionais, já conquistaram com o método.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                    <CardContent className="flex justify-center items-center bg-gray-50 p-2">
                      <img src={`/images/d${num}.jpg`} alt={`Depoimento ${num}`} className="w-full h-auto rounded-lg" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* SEÇÃO 6: PARA QUEM É - AVATARES (Gemini 1.2) */}
      {/* Seção aprimorada com a linguagem específica de cada avatar para máxima relevância. */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Esta oportunidade é perfeita para você que...</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <Star className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-lg text-gray-800">Busca Renda Extra Rápida</strong>
                    <p className="text-gray-600">Quer uma fonte de renda de baixo risco, baixo custo inicial e com retorno rápido para complementar seu salário e ter mais liberdade financeira.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <Briefcase className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-lg text-gray-800">É Freelancer Criativo (Social Media/Designer)</strong>
                    <p className="text-gray-600">Cansado de entregar o mesmo? Adicione Ensaios Fotográficos com IA ao seu portfólio e dobre o valor dos seus pacotes de serviços.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <Target className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-lg text-gray-800">É Dono de Agência / Gestor de Tráfego</strong>
                    <p className="text-gray-600">Precisa de criativos de alta conversão sob demanda? Reduza custos e escale as campanhas dos seus clientes com o rosto deles em qualquer cenário.</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <Camera className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-lg text-gray-800">É Fotógrafo</strong>
                    <p className="text-gray-600">Quer adicionar um serviço digital inovador, alcançar novos clientes e vender mesmo sem precisar sair para fotografar.</p>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* SEÇÃO 7: NOVA SEÇÃO DE AUTORIDADE "QUEM É GABRIEL?" (Gemini 2.5 + GPT 3) */}
      {/* Constrói confiança e conexão ao mostrar a pessoa por trás do produto. */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-2xl">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <img src="/images/gabriel-foto.png" alt="Gabriel, criador do Clone Perfeito" className="w-48 h-48 rounded-full object-cover border-4 border-indigo-400"/>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Deixe-me ser seu Guia nesta Jornada</h2>
                        <p className="text-gray-300 mb-4">
                            Olá, eu sou o Gabriel. Há não muito tempo, eu estava exatamente onde você talvez esteja agora: buscando formas de usar a tecnologia para criar novas fontes de renda. Testei de tudo, perdi tempo e dinheiro... até que descobri esse método.
                        </p>
                         <p className="text-gray-300 mb-4">
                            Eu mergulhei fundo, refinei o processo e transformei o que era complexo em um passo a passo simples e replicável. O resultado é o 'Clone Perfeito' — o exato método que eu uso e que agora quero compartilhar com você.
                        </p>
                        <p className="text-indigo-300 font-semibold">
                            Minha missão não é vender um curso. É entregar um atalho. Um caminho claro para você também transformar essa tecnologia incrível em uma fonte de renda real e sólida.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* SEÇÃO 8: A OFERTA IRRESISTÍVEL - VALUE STACK (Gemini 1.3 & 2.6) */}
      {/* O clímax persuasivo da página, onde o valor percebido explode. */}
      <section className="py-20 px-4 bg-indigo-50/50" id="oferta">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Aqui está tudo o que você recebe ao entrar para o Clone Perfeito hoje:</h2>
            </div>
            <Card className="bg-white shadow-2xl border-2 border-indigo-500">
                <CardContent className="p-8 md:p-12">
                    <div className="space-y-6">
                        {/* Item 1: Curso Principal */}
                        <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                            <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Treinamento Principal: O Método Clone Perfeito</h3>
                                <p className="text-gray-600">O passo a passo completo para criar e vender ensaios de IA, do zero ao primeiro cliente.</p>
                            </div>
                            <span className="ml-auto font-semibold text-gray-500 whitespace-nowrap">Valor: R$ 157</span>
                        </div>
                        {/* Bônus */}
                        <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                            <Star className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Bônus #1: Agente GPT Exclusivo de Extração de Prompts</h3>
                                <p className="text-gray-600">Nossa ferramenta secreta que economiza horas de tentativa e erro.</p>
                            </div>
                            <span className="ml-auto font-semibold text-gray-500 whitespace-nowrap">Valor: R$ 97</span>
                        </div>
                         <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                            <Star className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Bônus #2: Biblioteca de Prompts "Cenários Lucrativos"</h3>
                                <p className="text-gray-600">Prompts prontos para cenários corporativos, de estilo de vida e mídias sociais.</p>
                            </div>
                            <span className="ml-auto font-semibold text-gray-500 whitespace-nowrap">Valor: R$ 67</span>
                        </div>
                         <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                            <Star className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Bônus #3: Guia de Precificação e Pacotes</h3>
                                <p className="text-gray-600">Um guia em PDF mostrando exatamente como estruturar e vender os serviços.</p>
                            </div>
                            <span className="ml-auto font-semibold text-gray-500 whitespace-nowrap">Valor: R$ 47</span>
                        </div>
                         <div className="flex items-start gap-4">
                            <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Acesso Vitalício e Atualizações Futuras</h3>
                                <p className="text-gray-600">Pague uma vez e receba todas as novas aulas e melhorias para sempre.</p>
                            </div>
                            <span className="ml-auto font-semibold text-gray-500 whitespace-nowrap">Valor: Incalculável</span>
                        </div>
                    </div>
                    {/* O Fechamento */}
                    <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-300 text-center">
                        <p className="text-lg text-gray-600">Valor Total de tudo que você recebe:</p>
                        <p className="text-4xl font-bold text-red-500 line-through my-2">R$ 368,00</p>
                        <p className="text-xl font-semibold text-gray-800">Seu Investimento Hoje:</p>
                        <p className="text-6xl font-extrabold text-green-600 my-4">Apenas R$ 47</p>
                        <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full">
                            <Button size="lg" className="w-full max-w-lg mx-auto text-xl px-8 py-7 bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform">
                                SIM, QUERO ACESSO IMEDIATO COM DESCONTO!
                            </Button>
                        </Link>
                         <p className="text-sm text-gray-500 mt-4">Compra 100% segura. Acesso liberado imediatamente.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* SEÇÃO 9: GARANTIA - Quebra da objeção final (Risco) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-200 shadow-sm bg-green-50/50">
            <CardContent className="p-8 md:p-12 text-center">
              <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sua Garantia de Risco Zero</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Você tem 7 dias para acessar todo o material. Se por qualquer motivo achar que o Clone Perfeito não é para você, basta pedir o reembolso e nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. <strong className="text-green-700">O risco é todo meu.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO 10: FAQ - Respostas estratégicas (Gemini 2.7) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg">Preciso de mais alguma coisa além do curso?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Sim. Para criar seus clones, você precisará de créditos em uma ferramenta de IA que ensinamos no curso. O investimento inicial é de apenas 10 dólares (cerca de R$ 50). Pense nisso como o 'aluguel do seu estúdio digital'. Com este pequeno investimento, você gera centenas de imagens e, como mostramos, seu primeiro cliente já paga por tudo e ainda te dá lucro.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg">E se eu for um completo iniciante? Funciona pra mim?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Com certeza. O Clone Perfeito foi desenhado do zero para iniciantes. Se você sabe seguir um passo a passo e clicar com o mouse, você tem tudo o que precisa para ter sucesso. Não é necessário nenhum conhecimento prévio de IA, design ou fotografia.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg">Em quanto tempo eu vejo o retorno do meu investimento?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Embora os resultados variem, nosso método é projetado para ser rápido. Muitos alunos conseguem o primeiro cliente na primeira semana após concluir o curso. Com a venda de um único 'Pacote Essencial' por R$197, você já mais do que dobrou seu investimento inicial de ~R$97 (curso + ferramenta).
                  </AccordionContent>
                </AccordionItem>
                {/* Outras perguntas do FAQ original podem ser mantidas aqui */}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Mantido */}
      <footer className="py-12 px-4 text-center border-t border-gray-200 bg-white">
        {/* Conteúdo do footer... */}
      </footer>
    </div>
  )
}
