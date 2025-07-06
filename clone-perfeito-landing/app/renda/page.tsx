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
  Sparkles,
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
    <div className="min-h-screen bg-gray-950 text-gray-300 overflow-x-hidden font-sans">
      {/* Seus scripts de rastreamento (Meta, Clarity) podem ser mantidos aqui */}
      <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`...`}</Script>

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/bgcpdesk.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
            Crie Ensaios com IA em Menos de 1 Hora e Venda por R$300, R$600 ou Até R$1.000
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)]">
            Com apenas selfies e um método direto, você aprende a gerar imagens profissionais com inteligência artificial e transformar isso em uma fonte de renda recorrente — sem câmera, sem estúdio e sem experiência.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg font-bold px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-900/50 transform hover:scale-105 transition-transform">
                Quero Acessar Agora
              </Button>
            </Link>
            <p className="font-medium text-white bg-black/50 px-4 py-2 rounded-lg">
              De <span className="line-through text-red-400">R$157</span> por <span className="font-bold text-2xl text-pink-400">R$47</span>
              <span className="text-sm text-gray-400"> ou 12x de R$5,22</span>
            </p>
          </div>
        </div>
      </section>

      {/* O Que É o Clone Perfeito? */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">O Que É o Clone Perfeito?</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                    O <strong className="text-pink-400">Clone Perfeito</strong> é um treinamento prático e direto ao ponto, onde você aprende a criar ensaios fotográficos ultra-realistas usando IA.
                </p>
                <p className="text-gray-400">Mesmo que você nunca tenha usado IA antes.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300"><strong>Criar um clone digital</strong> com fotos comuns do dia a dia.</p>
                </div>
                 <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300"><strong>Gerar imagens</strong> em qualquer estilo que o cliente quiser (corporativo, lifestyle, etc).</p>
                </div>
                 <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300"><strong>Estruturar e vender pacotes</strong> que podem ser oferecidos no Brasil ou no exterior.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Para Quem É? */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Para Quem É Essa Oportunidade?</h2>
            <p className="text-lg text-gray-400 mt-2">Ideal para quem quer transformar uma habilidade digital em uma nova fonte de renda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <Briefcase className="h-10 w-10 mx-auto text-pink-400 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Designers e Social Media</h3>
                <p className="text-gray-400 mt-2">Crie bancos de imagens personalizados para seus clientes.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <Target className="h-10 w-10 mx-auto text-pink-400 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Gestores de Tráfego</h3>
                <p className="text-gray-400 mt-2">Gere criativos ilimitados com o rosto do cliente.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <Camera className="h-10 w-10 mx-auto text-pink-400 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Fotógrafos</h3>
                <p className="text-gray-400 mt-2">Adicione um serviço digital com alta margem ao seu portfólio.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <Star className="h-10 w-10 mx-auto text-pink-400 mb-4"/>
                <h3 className="text-xl font-semibold text-white">Freelancers e Empreendedores</h3>
                <p className="text-gray-400 mt-2">Venda no Brasil, EUA, Europa e ganhe em múltiplas moedas.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vendas Globais */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-12 w-12 mx-auto text-pink-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Uma Nova Fonte de Renda, em Várias Moedas</h2>
            <p className="text-lg text-gray-400 mt-6 leading-relaxed">
                Você não precisa ser expert nem saber falar inglês. No curso, <strong className="text-white">eu te dou o passo a passo completo</strong> para montar sua oferta e prospectar clientes no Brasil (em Real), na Europa (em Euro) e nos EUA (em Dólar). A IA faz o trabalho pesado. Você entrega o resultado e recebe o pagamento.
            </p>
            <Card className="mt-12 bg-gray-950 border border-pink-500/30 text-left p-8">
                <p className="text-gray-300">Imagina isso:</p>
                <ul className="space-y-4 mt-4">
                    <li className="flex items-center gap-4">
                        <span className="font-bold text-2xl text-green-400">R$347</span>
                        <p className="text-gray-400">de um cliente no Brasil por um pacote de fotos.</p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="font-bold text-2xl text-pink-400">€39</span>
                        <p className="text-gray-400">de um cliente na Europa pelo mesmo serviço.</p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="font-bold text-2xl text-yellow-400">$39</span>
                        <p className="text-gray-400">de um cliente nos EUA, pago em Dólar via PayPal.</p>
                    </li>
                </ul>
                <p className="text-gray-400 mt-6">Você no centro de tudo, sem sair de casa, entregando ensaios personalizados em minutos.</p>
            </Card>
        </div>
      </section>

      {/* Provas Reais de Vendas */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">💸 Provas Reais de Vendas (Brasil e Exterior)</h2>
                <p className="text-lg text-gray-400 mt-2">Gente comum colocando o método em prática — e sendo paga por isso.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* PLACEHOLDER 1 */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 space-y-3">
                    <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center">
                        <Wallet className="h-10 w-10 text-gray-600"/>
                    </div>
                    <p className="text-gray-300 text-sm">Aluna vendendo pacote de R$347 no Brasil usando apenas o celular.</p>
                </div>
                {/* PLACEHOLDER 2 */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 space-y-3">
                    <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center">
                        <Euro className="h-10 w-10 text-gray-600"/>
                    </div>
                    <p className="text-gray-300 text-sm">Aluno fechando €39 com cliente espanhol pelo Instagram.</p>
                </div>
                {/* PLACEHOLDER 3 */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 space-y-3">
                    <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center">
                        <DollarSign className="h-10 w-10 text-gray-600"/>
                    </div>
                    <p className="text-gray-300 text-sm">Print de aluno recebendo via PayPal de um cliente dos EUA.</p>
                </div>
                {/* PLACEHOLDER 4 */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 space-y-3">
                    <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center">
                        <Camera className="h-10 w-10 text-gray-600"/>
                    </div>
                    <p className="text-gray-300 text-sm">Conversas reais com clientes internacionais pedindo ensaios personalizados.</p>
                </div>
            </div>
            <p className="text-center text-gray-500 mt-8">Você verá os bastidores e poderá copiar exatamente o que está funcionando para mim e para meus alunos.</p>
        </div>
      </section>
      
      {/* Qualidade dos Ensaios */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Veja a Qualidade dos Ensaios Criados com o Método</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
              Isto não é teoria. Veja com seus próprios olhos o tipo de ensaio que <strong className="text-white">você será capaz de criar</strong>.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {studentCreations.map((num) => (
                <CarouselItem key={num} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300">
                    <img src={`/images/gerada-${num}.jpg`} alt={`Ensaio gerado ${num}`} className="w-full h-full object-cover"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-gray-800 hover:bg-gray-700 text-white border-gray-600" />
            <CarouselNext className="hidden md:flex bg-gray-800 hover:bg-gray-700 text-white border-gray-600" />
          </Carousel>
           <div className="text-center mt-10 max-w-2xl mx-auto">
                <p className="text-xl text-pink-300 italic">“Mas essas imagens foram feitas com celular e IA mesmo?”</p>
                <p className="text-lg text-gray-300 mt-2"><strong>Sim. E seus clientes vão jurar que você tem um estúdio fotográfico completo.</strong></p>
           </div>
        </div>
      </section>

      {/* Sobre o Criador */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
            <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                    {/* SUBSTITUA PELA SUA FOTO */}
                    <img src="/images/sua-foto.jpg" alt="Gabriel Araújo, criador do Clone Perfeito" className="w-48 h-48 rounded-full object-cover border-4 border-pink-500 shadow-lg"/>
                </div>
                <div className="md:col-span-2 space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white">Gabriel Araújo</h3>
                    <p className="text-pink-400 font-semibold">Criador do Método Clone Perfeito</p>
                    <p className="text-gray-400 leading-relaxed">
                        Trabalho com marketing, tecnologia e vendas há anos. Agora, ensino exatamente como estou faturando com IA — criando ensaios que parecem reais usando apenas selfies e comandos simples. Tudo o que você aprende aqui é o que eu aplico no meu dia a dia.
                    </p>
                </div>
            </div>
        </div>
      </section>
      
      {/* O Método: Do Zero à Venda */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">O Método: Do Zero à Venda</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
                {/* Linha conectora (para desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 -z-10"></div>
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-pink-500/50 -translate-y-1/2 -z-10 animate-pulse"></div>

                <div className="space-y-3">
                    <div className="w-16 h-16 bg-gray-800 border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-pink-400">1</div>
                    <h4 className="text-xl font-semibold text-white">Aprenda o Processo</h4>
                    <p className="text-gray-400">Em menos de 2 horas, domine o método.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-gray-800 border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-pink-400">2</div>
                    <h4 className="text-xl font-semibold text-white">Crie Seu Portfólio</h4>
                    <p className="text-gray-400">Use suas próprias fotos pra mostrar o que sabe fazer.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-gray-800 border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-pink-400">3</div>
                    <h4 className="text-xl font-semibold text-white">Monte Seus Pacotes</h4>
                    <p className="text-gray-400">Use nossos modelos prontos para precificar.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-gray-800 border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-pink-400">4</div>
                    <h4 className="text-xl font-semibold text-white">Venda no Brasil e Exterior</h4>
                    <p className="text-gray-400">Use as estratégias do curso para fechar suas primeiras vendas.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Oferta Final */}
      <section id="oferta" className="py-20 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500 shadow-2xl shadow-pink-900/30">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Comece Agora Por R$47</h2>
              <p className="text-lg text-gray-400 mb-8">Seu investimento se paga com a primeira venda.</p>
              
              <div className="max-w-md mx-auto space-y-3 text-left my-8 bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white text-center mb-4">O Que Você Vai Receber:</h4>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span>Acesso vitalício ao curso completo (4 módulos)</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span><strong>Bônus:</strong> Aula com método gratuito via ChatGPT</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span><strong>Bônus:</strong> Agente GPT para gerar prompts</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span>Suporte por WhatsApp e e-mail</span></div>
                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span>Todas as atualizações futuras</span></div>
              </div>

              <Link href="https://pay.kiwify.com.br/0oD9zKC" target="_blank" className="w-full mt-8 inline-block">
                <Button size="lg" className="w-full text-lg font-bold px-10 py-7 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-900/50 transform hover:scale-105 transition-transform">
                  Quero Acessar Agora
                </Button>
              </Link>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
                <Shield className="w-8 h-8 text-green-400"/>
                <div>
                  <p className="font-semibold text-white">Sua Garantia de Risco Zero</p>
                  <p className="text-sm">7 dias para testar. Se não for para você, devolvemos 100% do valor.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-500 mb-2">© 2025 Clone Perfeito. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-sm mb-4">CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="https://..." target="_blank" className="hover:text-pink-400 transition-colors">Política de Privacidade</Link>
            <Link href="https://..." target="_blank" className="hover:text-pink-400 transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
