"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Menu,
  X,
  MessageCircle,
  Camera,
  Video,
  Brain,
  Star,
  Check,
  ChevronRight,
  Eye,
  Sparkles,
  Play,
  Target,
  Users,
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#191919] text-white">
      {/* Fixed Header with Video Background */}
      <header className="fixed top-0 w-full z-50 border-b border-gray-800 relative overflow-hidden">
        {/* Video Background Wrapper */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
          {/* Desktop Video */}
          <video autoPlay loop muted playsInline className="hidden sm:block w-full h-full object-cover">
            <source src="/videos/bg-desk-video.mp4" type="video/mp4" />
          </video>
          {/* Mobile Video */}
          <video autoPlay loop muted playsInline className="block sm:hidden w-full h-full object-cover">
            <source src="/videos/bg-mobile-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Wrapper with Overlay */}
        <div className="relative z-10 bg-[#191919]/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-semibold text-xs sm:text-sm">C</span>
              </div>
              <span className="text-base sm:text-lg font-medium">Clone Perfeito</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
              >
                O que é
              </button>
              <button
                onClick={() => scrollToSection("criar")}
                className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
              >
                O que você vai criar
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("valor")}
                className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
              >
                Investimento
              </button>
            </nav>

            <Button
              size="sm"
              className="hidden lg:flex bg-green-600 hover:bg-green-700 transition-all duration-300 text-white text-sm px-3 py-2"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-1 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-[#191919] border-t border-gray-800">
              <nav className="flex flex-col p-4 space-y-3">
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm py-2"
                >
                  O que é
                </button>
                <button
                  onClick={() => scrollToSection("criar")}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm py-2"
                >
                  O que você vai criar
                </button>
                <button
                  onClick={() => scrollToSection("resultados")}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm py-2"
                >
                  Resultados
                </button>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm py-2"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection("valor")}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm py-2"
                >
                  Investimento
                </button>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white w-full mt-3"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="font-serif italic text-gray-300">Crie</span>{" "}
            <span className="font-sans font-black">fotos, vídeos e criativos</span>{" "}
            <span className="text-yellow-400 font-extrabold inline-block transition-transform duration-300 cursor-default font-mono tracking-wider">
              ultra realistas
            </span>{" "}
            <span className="block sm:inline font-serif italic text-gray-300">com</span>{" "}
            <span className="text-blue-400 font-extrabold inline-block transition-transform duration-300 cursor-default font-sans tracking-tight">
              Inteligência Artificial
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Ensaios, comerciais, thumbnails, estampas e composições visuais com aparência profissional. Tudo isso criado
            por você, sem câmera, estúdio ou equipe — apenas com IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="cursor-pointer bg-white text-black border border-white/10 rounded-lg px-6 sm:px-8 py-3 text-base sm:text-lg font-medium shadow-sm hover:bg-gray-100 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200"
              onClick={() => scrollToSection("valor")}
            >
              Começar Agora
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer bg-white/10 text-white border border-white/20 rounded-lg px-6 sm:px-8 py-3 text-base sm:text-lg font-medium shadow-sm hover:bg-white/20 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200"
              onClick={() => scrollToSection("sobre")}
            >
              Ver Como Funciona
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            O Clone Perfeito não é só um{" "}
            <span className="text-purple-400 font-extrabold inline-block transition-transform duration-300 cursor-default">
              curso
            </span>
            .
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed">
            É uma{" "}
            <span className="text-green-400 font-bold inline-block transition-transform duration-300 cursor-default">
              central criativa
            </span>{" "}
            onde você aprende a usar IA para criar imagens e vídeos que parecem feitos por uma
            <span className="text-pink-400 font-bold inline-block transition-transform duration-300 cursor-default">
              {" "}
              equipe profissional
            </span>{" "}
            — mas feitos só por você.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 sm:p-8 hover:bg-gray-800/70 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-base sm:text-lg leading-relaxed">
                  "Você vai aprender a gerar imagens que parecem ensaios reais, vídeos com estética de propaganda e
                  conteúdos visuais com altíssima percepção de valor."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section id="criar" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              🔍 O que você vai aprender a criar
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Domine as ferramentas mais avançadas de IA para criação de conteúdo visual profissional
            </p>
          </div>

          {/* Ensaios Fotográficos */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-xl flex items-center justify-center transition-transform duration-300">
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Ensaios fotográficos com IA</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                  Crie fotos com{" "}
                  <span className="text-pink-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    qualidade de estúdio profissional
                  </span>
                  . Retratos, editoriais e imagens comerciais com luz, enquadramento e estilo impecável — tudo feito com{" "}
                  <span className="text-blue-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    inteligência artificial
                  </span>
                  .
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Retratos ultra realistas</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Ensaios editoriais profissionais</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Fotos comerciais para produtos</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <div className="text-gray-500">
                    <Camera className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-50" />
                    <p className="text-sm sm:text-base">Galeria de ensaios criados com IA</p>
                    <p className="text-xs sm:text-sm mt-2">4-6 imagens de exemplo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vídeos Cinematográficos */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-1">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <div className="text-gray-500">
                    <Play className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-50" />
                    <p className="text-sm sm:text-base">Vídeos cinematográficos</p>
                    <p className="text-xs sm:text-sm mt-2">2 vídeos ou GIF demonstrativo</p>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="flex items-start space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Vídeos cinematográficos com IA</h3>
                    <span className="bg-pink-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-transform duration-300">
                      NOVO
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                  Produza vídeos com{" "}
                  <span className="text-purple-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    qualidade de trailer
                  </span>
                  , propaganda e teaser usando o poder do{" "}
                  <span className="text-green-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    Veo3
                  </span>
                  . Crie conteúdo que parece ter sido feito por uma{" "}
                  <span className="text-yellow-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    produtora profissional
                  </span>
                  .
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Vídeos promocionais e comerciais</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Trailers e teasers cinematográficos</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Conteúdo para redes sociais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biblioteca de Prompts */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center transition-transform duration-300">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Biblioteca de Prompts Otimizados</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                  Acesse centenas de prompts testados e aprovados, organizados por categoria. Copie, cole e obtenha
                  <span className="text-green-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    {" "}
                    resultados profissionais instantaneamente
                  </span>
                  .
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">+200 prompts categorizados</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Prompts para diferentes estilos</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Atualizações constantes</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <div className="text-gray-500">
                    <Brain className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-50" />
                    <p className="text-sm sm:text-base">Interface da biblioteca</p>
                    <p className="text-xs sm:text-sm mt-2">Screenshot da plataforma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GPT Agents Section */}
          <div className="border-t border-gray-800 pt-16 sm:pt-20">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">🤖 Agentes GPT exclusivos</h3>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-2">
                Ferramentas inteligentes que automatizam seu processo criativo e garantem resultados profissionais
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">PromptVision</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">(Agente Extrator de Prompts)</p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Analise qualquer imagem e descubra o prompt exato usado para criá-la. Reverse engineering visual
                    para replicar estilos que funcionam.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">CloneMaker</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">(Agente Gerador de Ensaios)</p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Gera prompts personalizados para ensaios ultra realistas. Define estilo, iluminação, pose e ambiente
                    automaticamente.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">VeoCraft</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">(Agente de Vídeos com IA)</p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Cria storyboards detalhados para vídeos com Veo3. Define câmera, movimento, iluminação e estilo
                    cinematográfico.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">📊 O que você vai conseguir com isso</h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6">
              {[
                "Criar portfólios e perfis com imagens impressionantes",
                "Lançar produtos com visuais de alto impacto",
                "Trabalhar como freelancer criando conteúdos visuais com IA",
                "Produzir campanhas completas com estética profissional",
                "Economizar milhares em produção de conteúdo",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">👀 Veja com seus olhos</h3>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 text-center min-h-[200px] flex items-center justify-center hover:shadow-lg transition-all duration-300">
                <div className="text-gray-500 text-sm sm:text-base">
                  📂 Espaço reservado para galeria antes/depois, memes criados com IA, thumbnails, mockups de produtos e
                  campanhas geradas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Monetization Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              💰 Olha só, vou ser bem{" "}
              <span className="bg-green-400/20 text-green-400 px-1 rounded font-extrabold inline-block transition-transform duration-300 cursor-default">
                direto contigo sobre o que você vai APRENDER
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-2 leading-relaxed">
              Você pode achar que R$ 147 é caro pra um curso. Mas deixa eu te mostrar uma coisa...
            </p>
          </div>

          {/* Reality Check */}
          <div className="mb-12 sm:mb-16 bg-gray-800/20 rounded-2xl p-8 sm:p-12 border-l-4 border-yellow-400">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">🤔 Vamos fazer as contas juntos?</h3>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-yellow-400">
                  Se você fosse APRENDER isso em outros lugares:
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-sm sm:text-base">1 curso de fotografia profissional</span>
                    <span className="text-red-400 font-semibold text-sm sm:text-base">R$ 1.200</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-sm sm:text-base">1 curso de produção de vídeo</span>
                    <span className="text-red-400 font-semibold text-sm sm:text-base">R$ 1.500</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-sm sm:text-base">1 curso de design gráfico</span>
                    <span className="text-red-400 font-semibold text-sm sm:text-base">R$ 800</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-sm sm:text-base">Mentoria individual (3 meses)</span>
                    <span className="text-red-400 font-semibold text-sm sm:text-base">R$ 2.000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 font-bold text-lg pt-3 border-t border-gray-600">
                    <span className="text-white">Total:</span>
                    <span className="text-red-400">R$ 5.500</span>
                  </div>
                </div>
              </div>

              <div className="text-center bg-green-900/20 rounded-xl p-6 border border-green-700">
                <h4 className="text-lg font-semibold mb-4 text-green-400">Com o Clone Perfeito:
                </h4 >
                <p className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">R$ 147</p>
                <p className="text-gray-400 mb-4">ACESSO VITALÍCIO</p>
                <p className="text-sm text-gray-500">Aprenda tudo isso e mais</p>

                <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-700">
                  <p className="text-yellow-400 font-bold text-lg">Economia: R$ 5.353</p>
                  <p className="text-xs text-gray-400">só no primeiro mês!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories with Realistic Values */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
              📈 E olha o que nossos alunos estão fazendo
            </h3>
            <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
              (E esses valores são sendo{" "}
              <span className="bg-yellow-400/20 text-yellow-400 px-1 rounded font-bold">conservadores</span>, viu? A
              galera tá ganhando bem mais que isso)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 text-center bg-pink-900/10 rounded-xl border border-pink-700/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Ana, Fotógrafa</h4>
                <p className="text-xl sm:text-2xl font-bold text-pink-400 mb-1">R$ 2.800/mês</p>
                <p className="text-xs text-gray-400">"Faço 6 ensaios por mês a R$ 450 cada"</p>
              </div>

              <div className="p-4 sm:p-6 text-center bg-blue-900/10 rounded-xl border border-blue-700/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Carlos, Freelancer</h4>
                <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">R$ 3.500/mês</p>
                <p className="text-xs text-gray-400">"Criativos pra agências, R$ 800 o pacote"</p>
              </div>

              <div className="p-4 sm:p-6 text-center bg-green-900/10 rounded-xl border border-green-700/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Júlia, Social Media</h4>
                <p className="text-xl sm:text-2xl font-bold text-green-400 mb-1">R$ 1.800/mês</p>
                <p className="text-xs text-gray-400">"Conteúdo pra 3 clientes fixos"</p>
              </div>

              <div className="p-4 sm:p-6 text-center bg-purple-900/10 rounded-xl border border-purple-700/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Pedro, Designer</h4>
                <p className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">R$ 4.200/mês</p>
                <p className="text-xs text-gray-400">"Identidades visuais completas"</p>
              </div>
            </div>
          </div>

          {/* The Real Talk */}
          <div className="mb-12 sm:mb-16 bg-gray-800/20 rounded-2xl p-8 sm:p-12 border-l-4 border-blue-400">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              💡 Agora vem a parte que eu preciso te falar
            </h3>

            <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                Esses valores que eu mostrei ali em cima?{" "}
                <span className="bg-yellow-400/20 text-yellow-400 px-1 rounded font-bold">São pensando baixo</span>.
                Muito baixo mesmo.
              </p>

              <p className="text-base sm:text-lg">
                Porque quando você APRENDE a dominar IA pra criar conteúdo visual, você não tá aprendendo uma skill
                qualquer. Você tá aprendendo a fazer o trabalho de estúdios profissionais.
              </p>

              <p className="text-base sm:text-lg">
                E sabe quanto custa APRENDER a fazer o que um estúdio faz? Milhares de reais em cursos, equipamentos e
                anos de prática. Aqui você aprende em semanas.
              </p>

              <div className="p-4 sm:p-6 my-6 bg-yellow-900/20 rounded-lg border border-yellow-700">
                <p className="text-yellow-400 font-semibold mb-2">Aqui vai a real:</p>
                <p className="text-sm sm:text-base">
                  Se você APLICAR o que aprendeu e conseguir apenas 1 cliente que pague R$ 800 por um ensaio com IA,
                  você já pagou o curso{" "}
                  <span className="bg-yellow-400/20 text-yellow-400 px-1 rounded font-bold">5 vezes</span>.
                </p>
              </div>

              <p className="text-base sm:text-lg">
                Mas eu não quero que você pense só no dinheiro. Pensa na{" "}
                <span className="bg-purple-400/20 text-purple-400 px-1 rounded font-bold">liberdade</span>:
              </p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>APRENDER a trabalhar de casa, no seu tempo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>APRENDER a não depender de equipamento caro</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>APRENDER a criar conteúdo que impressiona qualquer cliente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>DOMINAR uma skill que pouquíssima gente tem</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Price Justification */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-2xl border border-gray-700 p-8 sm:p-12">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                🎯 Então, R$ 147 é{" "}
                <span className="text-red-400 line-through">caro</span>{" "}
                <span className="text-green-400">um investimento?</span>
              </h3>

              {/* Comparison Cards */}
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-2xl font-bold text-red-400 mb-2">R$ 800</p>
                  <p className="text-sm text-gray-400">1 ensaio profissional</p>
                  <p className="text-xs text-red-300 mt-2">Você usa 1 vez</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-yellow-500/20 rounded-full p-4 animate-pulse">
                    <p className="text-2xl font-bold text-yellow-400">VS</p>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-2xl font-bold text-green-400 mb-2">R$ 147</p>
                  <p className="text-sm text-gray-400">Ensaios ILIMITADOS</p>
                  <p className="text-xs text-green-300 mt-2">Para sempre</p>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 sm:p-8 mb-8 border border-green-700/30">
                <div className="text-center mb-6">
                  <p className="text-green-400 font-bold text-xl mb-2">💡 Pensa assim:</p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    É menos que você gasta num final de semana. Mas vai te dar uma habilidade que pode{" "}
                    <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded font-bold">
                      mudar sua vida financeira
                    </span>
                    .
                  </p>
                </div>

                {/* Quick Math */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">Se você fizer apenas</p>
                    <p className="text-3xl font-bold text-blue-400">1 ensaio</p>
                    <p className="text-sm text-gray-400">por mês a R$ 400</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">Em 3 meses você fez</p>
                    <p className="text-3xl font-bold text-green-400">R$ 1.200</p>
                    <p className="text-sm text-gray-400">8x o investimento!</p>
                  </div>
                </div>
              </div>

              {/* Risk Reversal */}
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center">
                <p className="text-blue-400 font-semibold text-lg mb-3">🛡️ E se não der certo?</p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Você perdeu o valor de{" "}
                  <span className="text-red-400 font-semibold">uma pizza grande com refrigerante</span>.
                  <br />
                  Mas se der certo...{" "}
                  <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded font-bold">
                    você nunca mais vai se preocupar com dinheiro pra criar conteúdo
                  </span>
                  .
                </p>

                <div className="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-700/50">
                  <p className="text-green-300 text-sm font-medium">
                    ✅ Risco: R$ 147 | Potencial: R$ 1.000+ por mês
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Creator */}
          <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">👤 Sobre mim</h2>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Fala, aqui é o Gabriel. Eu criei o Clone Perfeito porque vi o potencial absurdo da IA para transformar
                    ideias visuais em realidade. Comecei sozinho, testando ferramentas, quebrando a cabeça... até dominar.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Hoje, uso isso pra criar imagens que parecem saídas de um set profissional — e ensino você a fazer o
                    mesmo, sem enrolação.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Esse projeto é meu xodó. E eu estou dentro dele com você: atualizando, melhorando e respondendo suas
                    dúvidas de verdade.
                  </p>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 text-center min-h-[200px] flex items-center justify-center hover:shadow-lg transition-all duration-300">
                    <div className="text-gray-500 text-sm sm:text-base">
                      📂 Espaço para colocar sua foto com fundo escuro ou estúdio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">💬 Depoimentos</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  "Eu não sabia nem o que era prompt, agora vendo gente pedindo ensaio meu com IA.",
                  "Fiz um vídeo com o Veo3 e parece que contratei uma agência.",
                  "O suporte do Gabriel é insano. Parece que o cara tá do meu lado mesmo.",
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current transition-transform duration-300"
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">"{testimonial}"</p>
                      <div className="bg-gray-700 rounded p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-500 hover:bg-gray-600 transition-colors duration-300">
                        📂 Espaço para foto, nome e print do resultado
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="valor" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">💸 O que você leva</h2>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden mb-8 sm:mb-12 hover:bg-gray-800/70 transition-colors duration-300">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[500px]">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 sm:py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                            O que está incluso
                          </th>
                          <th className="text-right py-3 sm:py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                            Valor estimado
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors duration-300">
                          <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">
                            Curso completo de ensaios com IA (Fall.AI)
                          </td>
                          <td className="text-right py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">R$ 497,00</td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors duration-300">
                          <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">Curso de vídeos com IA (Veo3)</td>
                          <td className="text-right py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">R$ 497,00</td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors duration-300">
                          <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">
                            Biblioteca de Prompts estruturados
                          </td>
                          <td className="text-right py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">R$ 197,00</td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors duration-300">
                          <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">
                            Agentes GPT personalizados (3 no total)
                          </td>
                          <td className="text-right py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">R$ 297,00</td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors duration-300">
                          <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">Suporte direto + Atualizações</td>
                          <td className="text-right py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">R$ 147,00</td>
                        </tr>
                        <tr className="border-t-2 border-blue-500 bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                          <td className="py-3 sm:py-4 px-4 sm:px-6 font-semibold text-white text-sm sm:text-base">
                            Total real
                          </td>
                          <td className="text-right py-3 sm:py-4 px-4 sm:px-6 font-semibold text-white text-sm sm:text-base">
                            R$ 1.635,00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="text-center mb-8 sm:mb-12">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 hover:bg-gray-800/70 transition-all duration-300">
                    <p className="text-lg sm:text-xl mb-3 sm:mb-4">📅 Valor de Lançamento</p>
                    <p className="text-gray-400 line-through text-base sm:text-lg mb-3 sm:mb-4">
                      De R$ 1.635,00 por apenas:
                    </p>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                      <span className="text-green-400 font-extrabold inline-block transition-transform duration-300 cursor-default">
                        R$ 147,00
                      </span>
                    </div>
                    <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">à vista ou em até 12x no cartão</p>

                    <div className="bg-green-900/20 border border-green-700 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-sm mx-auto transition-transform duration-300">
                      <p className="text-green-400 font-medium text-sm sm:text-base">
                        🟢 Use o cupom{" "}
                        <span className="bg-green-600 text-white px-2 py-1 rounded font-mono text-xs sm:text-sm transition-transform duration-300">
                          CLONE10
                        </span>{" "}
                        e ganhe{" "}
                        <span className="text-yellow-400 font-bold inline-block transition-transform duration-300 cursor-default">
                          10% de desconto!
                        </span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">(Ative no checkout enquanto durar a promoção)</p>
                    </div>

                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 hover:shadow-lg transition-all duration-300 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open("https://checkout.exemplo.com", "_blank")}
                    >
                      🔵 Quero Começar Agora
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 hover:bg-gray-800/70 transition-colors duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">✅ Resumindo o que você leva hoje:</h3>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      "Acesso vitalício ao curso de ensaios com IA (Fall.AI)",
                      "Curso de vídeos com IA (Veo3)",
                      "Biblioteca de prompts por categoria",
                      "3 agentes GPT exclusivos para geração de conteúdo com IA",
                      "Suporte direto e atualizações futuras",
                      "Tudo isso com valor promocional de lançamento",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                    E mais: quem garantir agora também leva:
                  </h4>
                  <ul className="text-gray-300 space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-sm">
                    <li className="hover:translate-x-2 transition-transform duration-300">
                      • Acesso futuro à criação de estampas com IA
                    </li>
                    <li className="hover:translate-x-2 transition-transform duration-300">
                      • Módulo de criativos e anúncios com IA
                    </li>
                    <li className="hover:translate-x-2 transition-transform duration-300">
                      • Desafio visual: crie toda a identidade de uma loja virtual usando IA
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-400">
                    O preço vai subir assim que os novos módulos forem adicionados. Mas se você entrar agora, já garante
                    tudo isso com{" "}
                    <span className="text-green-400 font-bold inline-block transition-transform duration-300 cursor-default">
                      valor congelado
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">❓ FAQ</h2>

              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {[
                  {
                    question: "Preciso saber usar IA?",
                    answer: "Não. Tudo é explicado passo a passo, com linguagem acessível.",
                  },
                  {
                    question: "Funciona no meu computador?",
                    answer: "Sim. Você só precisa de um navegador atualizado. As ferramentas são online.",
                  },
                  {
                    question: "Tem que pagar pelas ferramentas?",
                    answer:
                      "Algumas têm planos gratuitos. Outras exigem créditos, mas são bem baratas. Dentro do curso te mostro as melhores opções.",
                  },
                  {
                    question: "O acesso é vitalício?",
                    answer: "Sim, incluindo futuras atualizações.",
                  },
                  {
                    question: "Tem suporte?",
                    answer: "Sim. Você fala direto comigo. Nada de ser ignorado por robô.",
                  },
                ].map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 sm:px-6 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:text-gray-300 text-sm sm:text-base py-3 sm:py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 text-sm sm:text-base pb-3 sm:pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 sm:p-12 hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">💥 Frase final</h2>
                <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                  Você não precisa de uma{" "}
                  <span className="text-red-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    câmera
                  </span>{" "}
                  para impressionar. Só da{" "}
                  <span className="text-yellow-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    ideia certa
                  </span>{" "}
                  — e das{" "}
                  <span className="text-blue-400 font-bold inline-block transition-transform duration-300 cursor-default">
                    ferramentas certas
                  </span>{" "}
                  para executá-la.
                </p>

                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Fale comigo no WhatsApp
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-3 transition-transform duration-300">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-black font-semibold text-xs sm:text-sm">C</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Clone Perfeito</div>
                    <div className="text-xs sm:text-sm text-gray-400">Criado por Gabriel Araújo</div>
                  </div>
                </div>
                <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-all duration-300">
                    Política de Privacidade
                  </a>
                  <a href="#" className="hover:text-white transition-all duration-300">
                    Termos de Uso
                  </a>
                </div>
              </div>
            </div>
          </footer>

          {/* Floating WhatsApp Button */}
          <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            <Button
              className="bg-green-600 hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
              title="Dúvidas? Me chama aqui"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
         </div>
 </div>
  </section>
</div>

    

);
}
