import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Camera,
  Globe,
  Wallet,
  Check,
  DollarSign,
  Euro,
  Zap,
  Shield,
  Briefcase,
  Target,
  Star,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LandingPage() {
  const studentCreations = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="min-h-screen bg-black text-gray-300 overflow-x-hidden font-sans">
      {/* Seus scripts de rastreamento */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight [text-shadow:_1px_1px_20px_rgb(0_0_0_/_50%)]">
            Crie Ensaios com IA em Menos de 1 Hora e Venda por R$300, R$600 ou Até R$1.000
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto [text-shadow:_1px_1px_10px_rgb(0_0_0_/_50%)]">
            Com apenas selfies e um método direto, você aprende a gerar imagens profissionais com inteligência artificial e transformar isso em uma fonte de renda recorrente — sem câmera, sem estúdio e sem experiência.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg font-bold px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/40 hover:shadow-pink-500/60 transition-all duration-300 transform hover:scale-105">
                Quero Acessar Agora
              </Button>
            </Link>
            <p className="font-medium text-white bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm">
              De <span className="line-through text-gray-400">R$157</span> por <span className="font-bold text-2xl text-white">R$47</span>
              <span className="text-sm text-gray-400"> ou 12x de R$5,22</span>
            </p>
          </div>
        </div>
      </section>

      {/* O Que É o Clone Perfeito? */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">O Que É o Clone Perfeito?</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                    O <strong className="text-white">Clone Perfeito</strong> é um treinamento prático e direto ao ponto, onde você aprende a criar ensaios fotográficos ultra-realistas usando IA.
                </p>
                <p className="text-gray-400">Mesmo que você nunca tenha usado IA antes.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-start gap-4 bg-zinc-900/50 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300"><strong>Criar um clone digital</strong> com fotos comuns do dia a dia.</p>
                </div>
                 <div className="flex items-start gap-4 bg-zinc-900/50 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300"><strong>Gerar imagens</strong> em qualquer estilo que o cliente quiser.</p>
                </div>
                 <div className="flex items-start gap-4 bg-zinc-900/50 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300"><strong>Estruturar e vender pacotes</strong> no Brasil ou no exterior.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Para Quem É? */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Para Quem É Essa Oportunidade?</h2>
            <p className="text-lg text-gray-400 mt-2">Ideal para quem quer transformar uma habilidade digital em uma nova fonte de renda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-950 p-8 rounded-xl text-center transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
                <Briefcase className="h-10 w-10 mx-auto text-gray-500 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Designers e Social Media</h3>
            </div>
            <div className="bg-zinc-950 p-8 rounded-xl text-center transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
                <Target className="h-10 w-10 mx-auto text-gray-500 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Gestores de Tráfego</h3>
            </div>
            <div className="bg-zinc-950 p-8 rounded-xl text-center transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
                <Camera className="h-10 w-10 mx-auto text-gray-500 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Fotógrafos</h3>
            </div>
            <div className="bg-zinc-950 p-8 rounded-xl text-center transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
                <Star className="h-10 w-10 mx-auto text-gray-500 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Freelancers e Empreendedores</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vendas Globais */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-12 w-12 mx-auto text-gray-600 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Uma Nova Fonte de Renda, em Várias Moedas</h2>
            <p className="text-lg text-gray-400 mt-6 leading-relaxed">
                Você não precisa ser expert nem saber falar inglês. No curso, <strong className="text-white">eu te dou o passo a passo completo</strong> para montar sua oferta e prospectar clientes no Brasil, na Europa e nos EUA. A IA faz o trabalho pesado. Você entrega o resultado e recebe o pagamento.
            </p>
            <div className="mt-12 bg-black/30 backdrop-blur-sm border border-zinc-800 rounded-xl text-left p-8">
                <p className="text-gray-300 text-center text-lg">Imagina seu fluxo de caixa:</p>
                <div className="grid md:grid-cols-3 gap-8 mt-6 text-center">
                    <div>
                        <p className="text-4xl font-bold text-green-400">R$347</p>
                        <p className="text-gray-400">Cliente no Brasil</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-pink-400">€39</p>
                        <p className="text-gray-400">Cliente na Europa</p>
                    </div>
                     <div>
                        <p className="text-4xl font-bold text-yellow-400">$39</p>
                        <p className="text-gray-400">Cliente nos EUA</p>
                    </div>
                </div>
                <p className="text-gray-500 text-center mt-8">Tudo isso sem sair de casa, entregando ensaios personalizados em minutos.</p>
            </div>
        </div>
      </section>

      {/* Provas Reais de Vendas */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">💸 Provas Reais de Vendas (Brasil e Exterior)</h2>
                <p className="text-lg text-gray-400 mt-2">Gente comum colocando o método em prática — e sendo paga por isso.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* DESIGN DE CARD PERSONALIZADO */}
                <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                    <div className="p-4 bg-zinc-950 border-b border-zinc-800">
                      <p className="text-sm font-semibold text-white">Venda em Reais (Brasil)</p>
                    </div>
                    <div className="p-6 aspect-video bg-zinc-800 flex items-center justify-center">
                        <Wallet className="h-12 w-12 text-zinc-600"/>
                    </div>
                </div>
                <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 lg:col-span-2">
                     <div className="p-4 bg-zinc-950 border-b border-zinc-800">
                      <p className="text-sm font-semibold text-white">Venda em Euro (Instagram)</p>
                    </div>
                    <div className="p-6 aspect-video bg-zinc-800 flex items-center justify-center">
                        <Euro className="h-12 w-12 text-zinc-600"/>
                    </div>
                </div>
                <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 lg:col-span-2">
                    <div className="p-4 bg-zinc-950 border-b border-zinc-800">
                      <p className="text-sm font-semibold text-white">Pagamento em Dólar (PayPal)</p>
                    </div>
                    <div className="p-6 aspect-video bg-zinc-800 flex items-center justify-center">
                        <DollarSign className="h-12 w-12 text-zinc-600"/>
                    </div>
                </div>
                <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                    <div className="p-4 bg-zinc-950 border-b border-zinc-800">
                      <p className="text-sm font-semibold text-white">Prospecção de Cliente</p>
                    </div>
                    <div className="p-6 aspect-video bg-zinc-800 flex items-center justify-center">
                        <Camera className="h-12 w-12 text-zinc-600"/>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* Qualidade dos Ensaios */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Veja a Qualidade dos Ensaios Criados com o Método</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
              Isto não é teoria. Veja com seus próprios olhos o tipo de ensaio que <strong className="text-white">você será capaz de criar</strong>.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {studentCreations.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-black">
                    <img src={`/images/gerada-${num}.jpg`} alt={`Ensaio gerado ${num}`} className="w-full h-full object-cover"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" />
            <CarouselNext className="hidden md:flex bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" />
          </Carousel>
           <div className="text-center mt-12 max-w-2xl mx-auto">
                <p className="text-xl text-gray-400 italic">“Mas essas imagens foram feitas com celular e IA mesmo?”</p>
                <p className="text-lg text-white mt-2"><strong>Sim. E seus clientes vão jurar que você tem um estúdio fotográfico completo.</strong></p>
           </div>
        </div>
      </section>

      {/* Sobre o Criador */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto bg-zinc-950 rounded-2xl p-8 md:p-12 border border-zinc-800">
            <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <img src="/images/sua-foto.jpg" alt="Gabriel Araújo, criador do Clone Perfeito" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-zinc-800 shadow-lg"/>
                </div>
                <div className="md:col-span-2 space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white">Gabriel Araújo</h3>
                    <p className="font-semibold text-gray-400">Criador do Método Clone Perfeito</p>
                    <p className="text-gray-400 leading-relaxed">
                        Trabalho com marketing, tecnologia e vendas há anos. Agora, ensino exatamente como estou faturando com IA — criando ensaios que parecem reais usando apenas selfies e comandos simples. Tudo o que você aprende aqui é o que eu aplico no meu dia a dia.
                    </p>
                </div>
            </div>
        </div>
      </section>
      
      {/* O Método: Do Zero à Venda */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">O Método: Do Zero à Venda</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-white">1</div>
                    <h4 className="text-xl font-semibold text-white">Aprenda o Processo</h4>
                    <p className="text-gray-400">Em menos de 2 horas.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-white">2</div>
                    <h4 className="text-xl font-semibold text-white">Crie Seu Portfólio</h4>
                    <p className="text-gray-400">Com suas próprias fotos.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-white">3</div>
                    <h4 className="text-xl font-semibold text-white">Monte Seus Pacotes</h4>
                    <p className="text-gray-400">Use nossos modelos.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-white">4</div>
                    <h4 className="text-xl font-semibold text-white">Venda no Mundo Todo</h4>
                    <p className="text-gray-400">Com nossas estratégias.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Oferta Final */}
      <section id="oferta" className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Card com borda gradiente */}
          <div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-black">
            <div className="bg-black rounded-[15px] p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Comece Agora Por R$47</h2>
              <p className="text-lg text-gray-400 mb-8">Seu investimento se paga com a primeira venda.</p>
              
              <div className="max-w-md mx-auto space-y-3 text-left my-8 bg-zinc-950/50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white text-center mb-4">O Que Você Vai Receber:</h4>
                <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" /><span>Acesso vitalício ao curso completo</span></div>
                <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" /><span><strong>Bônus:</strong> Aula com método gratuito via ChatGPT</span></div>
                <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" /><span><strong>Bônus:</strong> Agente GPT para gerar prompts</span></div>
                <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" /><span>Suporte por WhatsApp e e-mail</span></div>
                <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" /><span>Todas as atualizações futuras</span></div>
              </div>

              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full mt-8 inline-block">
                <Button size="lg" className="w-full text-lg font-bold px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/40 hover:shadow-pink-500/60 transition-all duration-300 transform hover:scale-105">
                  Quero Acessar Agora
                </Button>
              </Link>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
                <Shield className="w-8 h-8 text-gray-600"/>
                <div>
                  <p className="font-semibold text-white">Sua Garantia de Risco Zero</p>
                  <p className="text-sm">7 dias para testar. Reembolso de 100% se não gostar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-zinc-900 bg-zinc-950">
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
