// app/page.tsx
// Use 'use client' se precisar de interatividade no futuro, mas para uma página estática não é necessário.

import React from 'react';

// Um componente de ícone simples para simular o globo do GitHub, adicionando um toque visual.
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block h-5 w-5 mr-2 text-cyan-400"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);


const ClonePerfeitoPage = () => {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      <main className="relative isolate overflow-hidden bg-gray-900">
        {/* Fundo com gradiente e formas, inspirado no GitHub */}
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8000ff] to-[#3300ff] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* Seção Principal (Hero) */}
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
              🚨 Se você busca uma forma <span className="text-cyan-400">rápida e prática</span> de fazer dinheiro com algo novo...
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 max-w-3xl mx-auto">
              ...então pare tudo e leia essa página até o fim. Porque se você entender o que vou te mostrar agora, sua vida pode mudar completamente — e não estou exagerando.
            </p>
          </div>
        </div>

        {/* Seção de Depoimentos */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-center text-2xl font-semibold leading-8 text-white mb-12">
            Dá uma olhada no que algumas pessoas estão fazendo com esse método 👇
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <blockquote className="text-gray-300">
                “Fechei meu primeiro pacote com uma gringa por $49 usando só o script que ele dá. Nem precisei aparecer.”
              </blockquote>
              <footer className="mt-4 text-sm text-gray-500">— Lucas, 24 anos</footer>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <blockquote className="text-gray-300">
                “Eu nunca editei uma imagem na vida. Mesmo assim gerei um ensaio meu, postei no Instagram e uma menina do Canadá me chamou pedindo o dela. Fechei por $39 em dois dias.”
              </blockquote>
              <footer className="mt-4 text-sm text-gray-500">— Mari, 19 anos</footer>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <blockquote className="text-gray-300">
                “Fiz 6 vendas no primeiro mês. Uma delas foi um pacote de €59. Tudo só usando os exemplos e mensagens do curso.”
              </blockquote>
              <footer className="mt-4 text-sm text-gray-500">— Caio, 27 anos</footer>
            </div>
          </div>
        </section>

        {/* Seção da Oportunidade */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl font-bold text-white">Deixa eu te perguntar…</h2>
          <p className="mt-4 text-lg text-gray-400">
            Quantas vezes você já ficou com aquela sensação de: “Se eu tivesse entrado nisso quando ainda era novidade… hoje estaria ganhando dinheiro fácil com isso.”
          </p>
          <div className="mt-8 text-gray-500 text-left space-y-2 border-l-2 border-cyan-500 pl-6">
            <p>Lembra de quando começaram os primeiros vídeos no TikTok?</p>
            <p>Ou quando as pessoas começaram a vender na Shopee e ganharam rios de dinheiro?</p>
            <p>Ou quando a galera começou a usar o ChatGPT e virou referência só porque aprendeu antes?</p>
          </div>
          <p className="mt-8 text-2xl font-semibold text-white">
            Pois é. <span className="text-cyan-400">Essa página aqui é exatamente esse momento.</span>
          </p>
          <p className="mt-2 text-xl font-semibold text-white">A diferença? É que dessa vez você chegou a tempo.</p>
        </section>

        {/* Apresentação do Método */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Um método que pouquíssimas pessoas conhecem…</h2>
            <p className="mt-4 text-lg text-gray-400">
              E que permite que qualquer pessoa — mesmo leiga — consiga criar ensaios de fotos ultra-realistas, com aparência profissional, usando Inteligência Artificial...
            </p>
            <p className="mt-6 text-xl font-bold text-white">
              E mais importante: vender esses ensaios por <span className="text-green-400">R$200</span>, <span className="text-green-400">R$300</span>, ou até <span className="text-green-400">39 dólares/euros</span> para pessoas do Brasil e do mundo — sem câmera, sem estúdio e sem sair de casa.
            </p>
          </div>
        </section>

        {/* Quem Sou Eu */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">G</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Antes de mais nada: quem sou eu para te falar isso?</h3>
              <p className="mt-4 text-gray-400">
                Meu nome é Gabriel, e nos últimos meses, eu vivi uma obsessão silenciosa. Descobri uma ferramenta de IA que gera imagens fotográficas com realismo assustador. Mas não me contentei em usar como todo mundo. Fucei cada configuração oculta, fiz testes, investi dinheiro, errei dezenas de vezes... Até descobrir um conjunto de técnicas que transformam essas imagens em ensaios dignos de capa de revista — realistas, estéticos, prontos para serem vendidos.
              </p>
              <p className="mt-4 font-semibold text-white">Foi aí que nasceu o Clone Perfeito.</p>
            </div>
          </div>
        </section>
        
        {/* O que é o Clone Perfeito */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <h2 className="text-center text-4xl font-bold text-white">O que é o <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Clone Perfeito</span>?</h2>
            <p className="mt-4 text-center text-lg text-gray-400">É um método completo, passo a passo, onde eu ensino você a:</p>
            <ul className="mt-10 space-y-4">
                <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Criar ensaios de fotos ultra-realistas com IA (sem saber nada de design).</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Usar configurações secretas que desbloqueiam qualidade absurda nas imagens.</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Fazer prospecção ativa no Instagram, com scripts prontos para abordar brasileiros, americanos e europeus.</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Montar pacotes de ensaio e precificar de forma inteligente.</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>Vender em reais, dólares e euros.</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">✅</span><span>E principalmente: transformar tudo isso numa fonte de renda real.</span></li>
            </ul>
            <div className="mt-10 text-center bg-gray-800 p-6 rounded-lg border border-gray-700">
                <p className="text-xl font-semibold text-white">Você não vai sair do curso com mais “informação” — <span className="text-cyan-400">você vai sair com um plano prático para lucrar.</span></p>
            </div>
        </section>

        {/* Prova Financeira */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="bg-gray-800 rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white text-center">Mas dá dinheiro de verdade?</h2>
            <p className="mt-4 text-center text-gray-400">Dá. Vamos olhar com seriedade:</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="font-mono text-sm text-cyan-400">PACOTE BRASIL</p>
                    <p className="text-2xl font-bold text-white">R$250</p>
                    <p className="text-xs text-gray-500">por 15 fotos</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="font-mono text-sm text-cyan-400">PACOTE EUA</p>
                    <p className="text-2xl font-bold text-white">$59</p>
                    <p className="text-xs text-gray-500">por 15 fotos</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="font-mono text-sm text-cyan-400">PACOTE EUROPA</p>
                    <p className="text-2xl font-bold text-white">€59</p>
                    <p className="text-xs text-gray-500">por 15 fotos</p>
                </div>
            </div>
            <p className="mt-8 text-center text-white text-lg">Agora imagina: vendendo 3 ensaios por semana, são <strong>R$3.000 por mês.</strong></p>
            <p className="mt-2 text-center text-gray-400">E você não precisa pagar fotógrafo, nem estúdio, nem designer. Só saber o método certo.</p>
          </div>
        </section>

        {/* O que você recebe */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <h2 className="text-center text-4xl font-bold text-white">O que você vai receber no Clone Perfeito</h2>
            <p className="mt-2 text-center text-gray-500">(com valor de mercado realista e justo 👇)</p>

            <div className="mt-12 space-y-6">
                {/* Aulas */}
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/30"><strong>🧠 Aula 1 – Boas-vindas e mentalidade:</strong> O caminho mental certo pra transformar o método em renda. <span className="text-gray-500">(R$97)</span></div>
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/30"><strong>🧬 Aula 2 – Como criar seu clone com IA:</strong> Configurações secretas, trigger phrase e detalhes. <span className="text-gray-500">(R$147)</span></div>
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/30"><strong>🎯 Aula 3 – Como gerar ensaios com qualidade absurda:</strong> Pacotes de 15, 30 ou 50 fotos. <span className="text-gray-500">(R$147)</span></div>
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/30"><strong>🎨 Aula 4 – Edição, variações e estilos visuais:</strong> Cinematográficos, vintage, clean, etc.</div>
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/30"><strong>💼 Aula 5 – Como montar pacotes e precificar:</strong> Nome dos pacotes e margem de lucro.</div>
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/30"><strong>📲 Aula 6 – Scripts prontos de prospecção (BR, EUA, Europa):</strong> Mensagens testadas e técnicas de promoção.</div>
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/30"><strong>🌍 Aula 7 – Como vender em real, dólar e euro:</strong> Recebimentos e estratégias de fechamento.</div>
                
                {/* Bônus */}
                <div className="mt-8 pt-6 border-t border-dashed border-gray-700">
                    <h3 className="text-center text-2xl font-bold text-white mb-6">E ainda leva 3 Bônus Especiais:</h3>
                    <div className="space-y-4">
                        <div className="p-4 rounded-lg border border-yellow-400/30 bg-yellow-400/10"><strong className="text-yellow-300">🎁 Bônus 1 – Agente GPT de Prompts:</strong> Gere imagens com 1 clique.</div>
                        <div className="p-4 rounded-lg border border-yellow-400/30 bg-yellow-400/10"><strong className="text-yellow-300">🖼️ Bônus 2 – Crie Clones com o ChatGPT:</strong> Passo a passo complementar.</div>
                        <div className="p-4 rounded-lg border border-yellow-400/30 bg-yellow-400/10"><strong className="text-yellow-300">💸 Bônus 3 – Estratégia Express de Renda Rápida:</strong> Faça sua primeira venda em até 72h.</div>
                    </div>
                </div>
            </div>

            {/* Oferta Final */}
            <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-green-500 text-center">
                <p className="text-lg text-gray-400">Valor total real do pacote: <span className="line-through">R$627</span></p>
                <p className="mt-2 text-white">Mas hoje, você acessa tudo por apenas</p>
                <p className="mt-4 text-5xl font-extrabold text-green-400">R$97 à vista</p>
                <p className="mt-2 text-gray-400">(ou em até 12x)</p>
                
                <button className="mt-8 w-full max-w-md mx-auto bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20">
                    🔥 Garanta agora seu acesso ao Clone Perfeito 🔥
                </button>
                <p className="mt-4 text-sm text-gray-500">Preço promocional por tempo limitado</p>
            </div>
        </section>

        {/* Última Chamada e Urgência */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">Agora é com você:</h2>
            <p className="mt-4 text-lg text-gray-400">
                Você pode continuar scrollando por aí… ou clicar acima e aprender a criar um serviço novo, original, visualmente incrível e vendável, que paga em dólar, euro ou real — usando apenas seu notebook.
            </p>
            <p className="mt-6 text-xl font-semibold text-white">
                O Clone Perfeito é o tipo de oportunidade que daqui a 6 meses vai estar em todo lugar.
            </p>
            <p className="mt-2 text-2xl font-bold text-cyan-400">Mas hoje ainda é você quem chega primeiro.</p>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <h2 className="text-center text-3xl font-bold text-white mb-12">❓ FAQ – Perguntas Frequentes</h2>
            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-white">Isso é um curso de inteligência artificial?</h3>
                    <p className="mt-2 text-gray-400">Não. É um método prático de renda com IA. Você aprende a gerar ensaios e vender como serviço visual.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Preciso saber programar, editar ou ser designer?</h3>
                    <p className="mt-2 text-gray-400">Nada disso. Tudo é passo a passo. Qualquer pessoa consegue seguir.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Tenho que aparecer ou ter seguidores?</h3>
                    <p className="mt-2 text-gray-400">Não. Você pode usar um perfil anônimo e as estratégias de prospecção funcionam com 0 seguidores.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Quanto eu gasto depois que compro?</h3>
                    <p className="mt-2 text-gray-400">A única despesa é criar seu clone com IA, que custa $10 dólares (explicado no curso). Depois disso, só reinvestir das próprias vendas.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Posso vender pra fora do Brasil?</h3>
                    <p className="mt-2 text-gray-400">Sim! Você vai aprender como receber em euro, dólar, montar pacotes e usar estratégias pra fechar com estrangeiros.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Esse método já funcionou pra outras pessoas?</h3>
                    <p className="mt-2 text-gray-400">Sim. Tem diversos depoimentos e casos reais de quem já lucrou com o Clone Perfeito.</p>
                </div>
            </div>
        </section>

        <footer className="text-center py-8 text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Clone Perfeito. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
};

export default ClonePerfeitoPage;
