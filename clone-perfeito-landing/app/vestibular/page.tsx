import type { NextPage } from 'next';
import Head from 'next/head';
import { FiCheck, FiArrowRight, FiInstagram, FiTwitter, FiLinkedin, FiBarChart2, FiCpu, FiEdit, FiClipboard, FiZap, FiBookOpen } from 'react-icons/fi';

// --- Componente: Card de Preço ---
interface PricingCardProps {
  planName: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  ctaText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, description, features, isHighlighted, ctaText }) => (
  <div className={`p-8 border rounded-xl flex flex-col ${isHighlighted ? 'bg-gray-800 text-white border-purple-400' : 'bg-white border-gray-200'}`}>
    {isHighlighted && <span className="text-xs font-bold text-center bg-purple-500 text-white rounded-full px-3 py-1 self-center mb-4">MAIS POPULAR</span>}
    <h3 className="text-xl font-bold">{planName}</h3>
    <p className={`mt-2 text-4xl font-extrabold ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>{price}</p>
    <p className={`mt-4 text-sm ${isHighlighted ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>
    <ul className="mt-6 space-y-3 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <FiCheck className={`mr-3 ${isHighlighted ? 'text-green-400' : 'text-purple-600'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-8 w-full py-3 font-bold rounded-lg transition-all duration-300 ${isHighlighted ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-white border border-purple-600 text-purple-600 hover:bg-purple-50'}`}>
      {ctaText}
    </button>
  </div>
);

// --- Componente Principal da Página ---
const SimuladoAILandingPage: NextPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Head>
        <title>Simulado IA | Simulados personalizados para o ENEM</title>
        <meta name="description" content="O Simulado IA cria simulados inéditos com base nas questões que mais caem no ENEM — personalizados de acordo com o seu nível e suas dificuldades." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --- Header Fixo --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-700">Simulado IA</div>
          <nav className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
            <a href="#funcionalidades" className="hover:text-purple-700">Funcionalidades</a>
            <a href="#como-funciona" className="hover:text-purple-700">Como funciona</a>
            <a href="#precos" className="hover:text-purple-700">Preços</a>
            <a href="#blog" className="hover:text-purple-700">Blog</a>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <button className="font-bold text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-50">Entrar</button>
            <button className="font-bold bg-purple-600 text-white py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors">Criar simulado</button>
          </div>
          <div className="lg:hidden">
            {/* Ícone de Menu para mobile */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </header>

      <main className="pt-20"> {/* Padding top para compensar o header fixo */}
        
        {/* --- Hero Section --- */}
        <section className="relative text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-blue-800 to-gray-900"></div>
          <div className="container mx-auto px-6 py-24 sm:py-32 lg:py-40 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Simulados personalizados com IA
              </h1>
              <p className="mt-4 text-lg text-purple-200">Rumo ao vestibular, com foco no que mais cai.</p>
              <p className="mt-6 text-base md:text-lg text-purple-200 max-w-xl mx-auto lg:mx-0">
                O Simulado IA cria simulados inéditos com base nas questões que mais caem no ENEM — personalizados de acordo com o seu nível e suas dificuldades.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto font-bold bg-mint-400 text-purple-900 py-3 px-8 rounded-lg hover:bg-mint-300 transition-colors text-lg">
                  Criar meu simulado
                </button>
                <button className="w-full sm:w-auto font-bold bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white/10 transition-colors text-lg">
                  Ver como funciona
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-80 lg:h-96 bg-black/20 rounded-lg flex items-center justify-center border border-white/20">
                <span className="text-purple-300">[Mockup de celular com simulado]</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Bloco de Confiança --- */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Bancos de Provas Analisados</p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-gray-500 font-semibold">
              <span>ENEM</span><span>•</span><span>Fuvest</span><span>•</span><span>Unicamp</span><span>•</span><span>UFRGS</span><span>•</span><span>UFPR</span><span>•</span><span>IFs</span><span>•</span><span>UERJ</span>
            </div>
          </div>
        </section>

        {/* --- Diferenciais em números --- */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Primeira plataforma de simulados com IA para vestibulares
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-500">
              Ajudamos estudantes a estudarem de forma estratégica, com simulados que seguem o padrão real das bancas e evoluem junto com seu desempenho.
            </p>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-extrabold text-purple-600">+100 mil</p>
                <p className="mt-2 text-gray-500">questões analisadas</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-extrabold text-purple-600">+8 mil</p>
                <p className="mt-2 text-gray-500">simulados gerados</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-extrabold text-purple-600">+5 mil</p>
                <p className="mt-2 text-gray-500">estudantes impactados</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-extrabold text-purple-600">1ª</p>
                <p className="mt-2 text-gray-500">Plataforma 100% automatizada com IA</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* --- Benefícios Centrais --- */}
        <section id="funcionalidades" className="py-20 sm:py-28 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Estude com inteligência, não com sorte.
            </h2>
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <FiCpu className="w-10 h-10 text-purple-600" />
                <h3 className="mt-4 text-xl font-bold">Questões inéditas com IA</h3>
                <p className="mt-2 text-gray-500">A IA cria questões com base no histórico das provas anteriores do ENEM — e entrega simulados únicos, só pra você.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <FiClipboard className="w-10 h-10 text-purple-600" />
                <h3 className="mt-4 text-xl font-bold">Plano de estudos personalizado</h3>
                <p className="mt-2 text-gray-500">Ao final do simulado, você pode receber um plano com base no seu desempenho e suas respostas.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <FiCheck className="w-10 h-10 text-purple-600" />
                <h3 className="mt-4 text-xl font-bold">Correção automática com gabarito</h3>
                <p className="mt-2 text-gray-500">Cada questão vem com gabarito e explicação (em breve, com análise da IA).</p>
              </div>
            </div>
            <button className="mt-12 font-bold bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
              Criar meu simulado
            </button>
          </div>
        </section>

        {/* --- Seção Demonstração --- */}
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Crie simulados sem esforço</h2>
                    <p className="mt-4 text-lg text-gray-500">Tudo direto no seu navegador, em poucos cliques.</p>
                    <ul className="mt-8 space-y-4 text-left">
                        <li className="flex items-start"><FiArrowRight className="w-6 h-6 text-mint-500 mt-1 mr-3 flex-shrink-0" /><span><strong className="text-gray-800">Escolha a matéria e dificuldade</strong> e deixe a IA fazer o resto.</span></li>
                        <li className="flex items-start"><FiArrowRight className="w-6 h-6 text-mint-500 mt-1 mr-3 flex-shrink-0" /><span><strong className="text-gray-800">Responda um quiz rápido</strong> para personalizar ainda mais sua experiência.</span></li>
                        <li className="flex items-start"><FiArrowRight className="w-6 h-6 text-mint-500 mt-1 mr-3 flex-shrink-0" /><span><strong className="text-gray-800">Receba tudo por e-mail</strong>, pronto para imprimir ou usar no tablet.</span></li>
                        <li className="flex items-start"><FiArrowRight className="w-6 h-6 text-mint-500 mt-1 mr-3 flex-shrink-0" /><span><strong className="text-gray-800">Estude com direcionamento</strong> e saiba exatamente onde precisa melhorar.</span></li>
                    </ul>
                     <button className="mt-8 font-bold text-purple-600 border border-purple-600 py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors">
                        Ver exemplo
                    </button>
                </div>
                 <div className="lg:w-1/2">
                    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span>[Tela mostrando o quiz de entrada]</span>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Seção Planos e Preços --- */}
        <section id="precos" className="py-20 sm:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planos flexíveis para sua aprovação</h2>
              <p className="mt-4 text-gray-500">Comece de graça e evolua quando estiver pronto.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard 
                planName="Gratuito"
                price="R$0"
                description="Perfeito para começar."
                features={["1 simulado por mês", "5 questões", "Gabarito incluso", "Sem plano de estudos"]}
                ctaText="Começar grátis"
              />
              <PricingCard 
                planName="Simulado PRO"
                price="R$14,90"
                description="O mais popular para quem quer ir além."
                features={["Simulado com até 15 questões", "Gabarito + plano de estudos", "PDF completo", "Correção automática (em breve)"]}
                ctaText="Quero esse"
                isHighlighted
              />
               <PricingCard 
                planName="Plano Mensal"
                price="R$29,90/mês"
                description="Para um estudo contínuo e aprofundado."
                features={["4 simulados por mês", "Histórico de desempenho", "Desafios semanais", "Suporte e novidades"]}
                ctaText="Assinar plano"
              />
            </div>
          </div>
        </section>
        
        {/* --- Como Funciona --- */}
        <section id="como-funciona" className="py-20 sm:py-28">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Como funciona?</h2>
                <div className="mt-16 grid md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-3xl font-bold">1</div>
                        <h3 className="mt-4 font-bold">Você responde um quiz</h3>
                        <p className="mt-1 text-gray-500">É super rápido!</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-3xl font-bold">2</div>
                        <h3 className="mt-4 font-bold">A IA gera seu simulado</h3>
                        <p className="mt-1 text-gray-500">Totalmente personalizado.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-3xl font-bold">3</div>
                        <h3 className="mt-4 font-bold">Você recebe por e-mail</h3>
                        <p className="mt-1 text-gray-500">Pronto para usar.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-3xl font-bold">4</div>
                        <h3 className="mt-4 font-bold">Corrige, analisa e estuda</h3>
                        <p className="mt-1 text-gray-500">Com foco e direção.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Blog --- */}
        <section id="blog" className="py-20 sm:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Aprenda mais sobre provas e estratégias</h2>
              <p className="mt-4 text-gray-500">Conteúdos para turbinar seus estudos.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="w-full h-48 bg-gray-200">[Imagem do Post]</div>
                <div className="p-6">
                  <h3 className="font-bold text-lg group-hover:text-purple-600 transition-colors">Os temas que mais caem no ENEM</h3>
                  <p className="mt-2 text-sm text-gray-500">Analisamos os últimos 10 anos de provas para você.</p>
                  <a href="#" className="mt-4 inline-block font-bold text-purple-600">Ler mais <FiArrowRight className="inline" /></a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="w-full h-48 bg-gray-200">[Imagem do Post]</div>
                <div className="p-6">
                  <h3 className="font-bold text-lg group-hover:text-purple-600 transition-colors">Como simular o dia da prova em casa</h3>
                  <p className="mt-2 text-sm text-gray-500">Dicas práticas para um ensaio realista e eficaz.</p>
                  <a href="#" className="mt-4 inline-block font-bold text-purple-600">Ler mais <FiArrowRight className="inline" /></a>
                </div>
              </div>
               <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="w-full h-48 bg-gray-200">[Imagem do Post]</div>
                <div className="p-6">
                  <h3 className="font-bold text-lg group-hover:text-purple-600 transition-colors">Técnica Pomodoro para vestibulandos</h3>
                  <p className="mt-2 text-sm text-gray-500">Aumente seu foco e produtividade nos estudos.</p>
                  <a href="#" className="mt-4 inline-block font-bold text-purple-600">Ler mais <FiArrowRight className="inline" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Seção Final CTA --- */}
        <section className="relative text-white overflow-hidden py-20 sm:py-28">
           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div>
           <div className="container mx-auto px-6 relative z-10 text-center">
             <h2 className="text-3xl lg:text-4xl font-extrabold">Bora começar com seu primeiro simulado?</h2>
             <p className="mt-4 text-lg text-purple-200">Em até 24h, ele estará na sua caixa de entrada. Comece agora, é gratuito.</p>
             <button className="mt-8 font-bold bg-mint-400 text-purple-900 py-4 px-10 rounded-lg hover:bg-mint-300 transition-colors text-lg">
                Criar meu simulado com IA
            </button>
           </div>
        </section>

      </main>

      {/* --- Rodapé --- */}
      <footer className="bg-gray-800 text-gray-400">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-white">Simulado IA</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Termos de uso</a>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white"><FiInstagram /></a>
              <a href="#" className="hover:text-white"><FiTwitter /></a>
              <a href="#" className="hover:text-white"><FiLinkedin /></a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
            <p>Copyright 2025 © Simulado IA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimuladoAILandingPage;
