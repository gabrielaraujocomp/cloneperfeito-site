import type { NextPage } from 'next';
import Head from 'next/head';
import { FiChevronDown, FiBrain, FiEdit3, FiMail, FiAward, FiCheckCircle } from 'react-icons/fi'; // Exemplo de ícones

// Componente para o item do FAQ, que simula um accordion
const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group border-b border-gray-200 py-4">
    <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-800 list-none">
      {question}
      <FiChevronDown className="transform transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <p className="mt-2 text-gray-500">{answer}</p>
  </details>
);

const SimuladoLandingPage: NextPage = () => {
  return (
    <div className="bg-white font-sans">
      <Head>
        <title>Crie seu Simulado ENEM com IA</title>
        <meta name="description" content="Gere um simulado personalizado do ENEM com Inteligência Artificial." />
      </Head>

      {/* --- Seção Hero --- */}
      <header className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-gray-900 opacity-80"></div>
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:py-40 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                📚 Crie seu simulado ENEM com IA
              </h1>
              <p className="mt-4 text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                Sim, a IA já aprendeu o que mais cai. Agora ela cria questões só pra você.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#cta" className="bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-300 transition-all duration-300 text-center">
                  Quero meu simulado com IA
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              {/* Substitua esta div pela sua imagem */}
              <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Sua Imagem Aqui</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* --- Seção de Benefícios (Adaptada da seção "Pioneira") --- */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Feito para você ir direto ao ponto
            </h2>
            <p className="mt-3 text-gray-500">
              Chega de baixar PDF velho. Foque no que realmente importa para a sua aprovação.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Benefício 1 */}
              <div className="flex flex-col items-center text-center">
                <FiBrain className="w-12 h-12 text-purple-600" />
                <h3 className="mt-4 font-bold text-gray-800">Questões inéditas</h3>
                <p className="mt-1 text-sm text-gray-500">Criadas com base no que mais cai no ENEM.</p>
              </div>
              {/* Benefício 2 */}
              <div className="flex flex-col items-center text-center">
                <FiEdit3 className="w-12 h-12 text-purple-600" />
                <h3 className="mt-4 font-bold text-gray-800">Personalizado</h3>
                <p className="mt-1 text-sm text-gray-500">Escolha matéria, nível e número de questões.</p>
              </div>
              {/* Benefício 3 */}
              <div className="flex flex-col items-center text-center">
                <FiMail className="w-12 h-12 text-purple-600" />
                <h3 className="mt-4 font-bold text-gray-800">Receba por E-mail</h3>
                <p className="mt-1 text-sm text-gray-500">Seu PDF em até 24h, pronto para usar.</p>
              </div>
              {/* Benefício 4 */}
              <div className="flex flex-col items-center text-center">
                <FiAward className="w-12 h-12 text-purple-600" />
                <h3 className="mt-4 font-bold text-gray-800">Plano de Estudos</h3>
                <p className="mt-1 text-sm text-gray-500">Ganhe um plano com base no seu desempenho.</p>
              </div>
              {/* Benefício 5 */}
              <div className="flex flex-col items-center text-center">
                <FiCheckCircle className="w-12 h-12 text-purple-600" />
                <h3 className="mt-4 font-bold text-gray-800">Qualidade Premium</h3>
                <p className="mt-1 text-sm text-gray-500">Feito por IA, com a curadoria de professores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Seção Como Funciona? --- */}
        <section className="bg-gray-50 py-20 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">🔍 Como funciona?</h2>
                    <p className="mt-3 text-gray-500">É tão simples que parece mágica, mas é só tecnologia.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        {/* Substitua esta div pela sua imagem */}
                        <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Sua Imagem do Processo Aqui</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl text-gray-800">1️⃣ Responda o quiz</h3>
                            <p className="mt-2 text-gray-500">Sério, leva menos de 1 minuto. É só pra gente te conhecer melhor.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl text-gray-800">2️⃣ A IA entra em ação</h3>
                            <p className="mt-2 text-gray-500">Analisamos suas respostas e montamos um simulado focado no que MAIS cai no ENEM.</p>
                        </div>
                         <div className="p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl text-gray-800">3️⃣ Receba seu PDF lindão</h3>
                            <p className="mt-2 text-gray-500">Enviamos para o seu e-mail um simulado completo com gabarito.</p>
                        </div>
                         <div className="p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl text-gray-800">4️⃣ Bônus 🎁</h3>
                            <p className="mt-2 text-gray-500">E se pedir, ainda leva um plano de estudos feito sob medida.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Seção de CTA Central --- */}
        <section id="cta" className="py-20 sm:py-28 text-center bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              👋 Bora testar sem pagar nada?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              👉 Responda o quiz e receba seu simulado personalizado com IA. É o seu atalho inteligente para a aprovação.
            </p>
            <button className="mt-8 bg-gray-800 text-white font-bold py-4 px-10 rounded-lg hover:bg-gray-700 transition-all duration-300">
              Quero meu simulado com IA
            </button>
          </div>
        </section>

        {/* --- Seção de Perguntas Frequentes (FAQ) --- */}
        <section className="bg-gray-50 py-20 sm:py-28">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">🤔 Ainda com dúvidas?</h2>
              <p className="mt-3 text-gray-500">A gente responde sem enrolação.</p>
            </div>
            <div className="divide-y divide-gray-200">
              <FaqItem
                question="Isso é de graça mesmo?"
                answer="Sim! Totalmente gratuito. E sem letra miúda. Pode respirar."
              />
              <FaqItem
                question="A IA escreve as questões?"
                answer="Sim! Ela analisa as provas do ENEM dos últimos anos e cria perguntas novas no mesmo estilo."
              />
              <FaqItem
                question="É tipo um simulado padrão?"
                answer="Não! É feito sob medida, com base nas suas respostas. Como se fosse um personal trainer… mas de provas."
              />
              <FaqItem
                question="E se eu quiser mais simulados?"
                answer="Aí a gente conversa. Primeiro aproveita esse aqui 😉"
              />
            </div>
          </div>
        </section>

        {/* --- Rodapé com CTA Final --- */}
        <footer className="bg-gray-900">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Pronto pra ver como a IA pode turbinar seus estudos?
            </h2>
            <div className="mt-8">
              <button className="bg-cyan-400 text-gray-900 font-bold py-4 px-12 rounded-lg text-lg hover:bg-cyan-300 transition-all duration-300">
                Criar meu simulado com IA
              </button>
            </div>
            <p className="mt-6 text-gray-400">
              📬 Você vai receber em até 24h no seu e-mail. Fácil, rápido e inteligente.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SimuladoLandingPage;
