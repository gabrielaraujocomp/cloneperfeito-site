import type { NextPage } from 'next';
import Head from 'next/head';

// Você pode substituir estes por ícones reais de uma biblioteca como react-icons
const IconPlaceholder = ({ className }: { className?: string }) => (
  <svg
    className={`w-16 h-16 text-indigo-600 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="py-6">
    <dt className="text-lg">
      <button className="text-left w-full flex justify-between items-start text-gray-400">
        <span className="font-medium text-gray-900">{question}</span>
      </button>
    </dt>
    <dd className="mt-2 pr-12">
      <p className="text-base text-gray-500">{answer}</p>
    </dd>
  </div>
);

const LandingPage: NextPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Head>
        <title>Crie seu Simulado ENEM com IA | InLead + Duolingo Style</title>
        <meta name="description" content="Gere um simulado personalizado do ENEM com Inteligência Artificial." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="py-24 sm:py-32 text-center bg-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900">
              📚 Crie seu simulado ENEM com IA
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Sim, a IA já aprendeu o que mais cai. Agora ela cria questões só pra você.
            </p>
            <div className="mt-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Chega de baixar PDF velho.
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-base text-gray-500">
                Responda um quiz rapidinho e receba um simulado personalizado com base nas provas reais do ENEM — gerado com Inteligência Artificial e enviado direto pro seu e-mail.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <ul className="space-y-4">
              <li className="flex items-start text-lg">
                <span className="text-2xl mr-3">🧠</span>
                <span className="text-gray-700">Questões inéditas, criadas com base no que mais cai no ENEM</span>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-2xl mr-3">✍️</span>
                <span className="text-gray-700">Escolha a matéria, o nível e o número de questões</span>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-2xl mr-3">📬</span>
                <span className="text-gray-700">Receba por e-mail em até 24h</span>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-2xl mr-3">🎁</span>
                <span className="text-gray-700">Ganhe um plano de estudos com base no seu desempenho</span>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-2xl mr-3">💡</span>
                <span className="text-gray-700">Feito por IA, mas parece que foi feito por um professor que te conhece</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center bg-indigo-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900">
              👋 Bora testar sem pagar nada?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              👉 Responda o quiz e receba seu simulado personalizado com IA.
            </p>
            <button className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300">
              Quero meu simulado com IA
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              🔍 Como funciona?
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-lg font-semibold text-gray-800">Você responde um quiz</h3>
                <p className="mt-2 text-gray-500">Sério, leva menos de 1 minuto.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-lg font-semibold text-gray-800">A IA analisa suas respostas</h3>
                <p className="mt-2 text-gray-500">E monta um simulado com base no que MAIS cai.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-lg font-semibold text-gray-800">Você recebe o PDF</h3>
                <p className="mt-2 text-gray-500">Um PDF lindão com questões + gabarito no seu e-mail.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">4️⃣</div>
                <h3 className="text-lg font-semibold text-gray-800">Bônus: Plano de estudos</h3>
                <p className="mt-2 text-gray-500">E se pedir, ainda leva um plano de estudos feito sob medida 🎁</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                🤔 Ainda com dúvidas?
              </h2>
              <div className="mt-6 pt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
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
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8 text-center">
            <div className="mt-8 md:mt-0">
              <h3 className="text-2xl font-bold text-gray-900">
                Pronto pra ver como a IA pode turbinar seus estudos?
              </h3>
              <button className="mt-8 px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300">
                Criar meu simulado com IA
              </button>
              <p className="mt-4 text-base text-gray-400">
                📬 Você vai receber em até 24h no seu e-mail. Fácil, rápido e inteligente.
              </p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default LandingPage;
