import React, { ReactNode } from 'react';

// --- COMPONENTES DE ESTILO REUTILIZÁVEIS (Inspirado no Notion) ---

/**
 * Cria um bloco de destaque visual com um ícone à esquerda.
 * Ótimo para "callouts", avisos ou depoimentos.
 */
const IconBlock = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <div className="flex items-start gap-4 rounded-lg border border-gray-700 bg-gray-800/50 p-4 md:p-5 text-left">
    <div className="flex-shrink-0 mt-1 text-xl">{icon}</div>
    <div className="text-gray-300">{children}</div>
  </div>
);

/**
 * Cria um título de seção padronizado com um ícone e uma linha divisória.
 */
const SectionTitle = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <div>
    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white">
      {icon}
      <span>{children}</span>
    </h2>
    <hr className="mt-4 mb-8 border-gray-700" />
  </div>
);

/**
 * Cria um item de lista com um marcador de ponto customizado para um visual mais limpo.
 */
const CustomListItem = ({ children }: { children: ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500"></span>
        <span>{children}</span>
    </li>
);

// --- COMPONENTE PRINCIPAL DA PÁGINA ---

const ClonePerfeitoPage = () => {
  // --- DADOS DA PÁGINA (Facilita a manutenção) ---

  const aulas = [
    { icon: "🧠", title: "Aula 1 – Boas-vindas e mentalidade", description: "O caminho mental certo pra transformar o método em renda.", value: "R$97" },
    { icon: "🧬", title: "Aula 2 – Como criar seu clone com IA", description: "Configurações secretas, trigger phrase e detalhes que fazem toda a diferença.", value: "R$147" },
    { icon: "🎯", title: "Aula 3 – Como gerar ensaios com qualidade absurda", description: "Pacotes de 15, 30 ou 50 fotos que parecem profissionais.", value: "R$147" },
    { icon: "🎨", title: "Aula 4 – Edição, variações e estilos visuais", description: "Estilos cinematográficos, vintage, clean, fashion editorial, etc." },
    { icon: "💼", title: "Aula 5 – Como montar pacotes e precificar como profissional", description: "Nome dos pacotes, precificação inteligente e margem de lucro." },
    { icon: "📲", title: "Aula 6 – Scripts prontos de prospecção (BR, EUA, Europa)", description: "Mensagens testadas, técnicas de promoção, e modelo de escassez." },
    { icon: "🌍", title: "Aula 7 – Como vender em real, dólar e euro", description: "Recebimentos, conversão de moeda, estratégias de fechamento rápido." },
  ];

  const bonus = [
    { icon: "🎁", title: "Bônus 1 – Agente GPT de Prompts para Ensaios", description: "Com seu nome e estilo, prontos para gerar imagens com 1 clique." },
    { icon: "🖼️", title: "Bônus 2 – Como criar Clones e Ensaios com o ChatGPT", description: "Passo a passo complementar para gerar ensaios por outro caminho." },
    { icon: "💸", title: "Bônus 3 – Estratégia Express de Renda Rápida com IA", description: "Plano para fazer sua primeira venda em até 72h." },
  ];

  const faqItems = [
    { q: "Isso é um curso de inteligência artificial?", a: "Não. É um método prático de renda com IA. Você aprende a gerar ensaios e vender como serviço visual." },
    { q: "Preciso saber programar, editar ou ser designer?", a: "Nada disso. Tudo é passo a passo. Qualquer pessoa consegue seguir." },
    { q: "Tenho que aparecer ou ter seguidores?", a: "Não. Você pode usar um perfil anônimo e as estratégias de prospecção funcionam com 0 seguidores." },
    { q: "Quanto eu gasto depois que compro?", a: "A única despesa é criar seu clone com IA, que custa $10 dólares (explicado no curso). Depois disso, só reinvestir das próprias vendas." },
    { q: "Posso vender pra fora do Brasil?", a: "Sim! Você vai aprender como receber em euro, dólar, montar pacotes e usar estratégias pra fechar com estrangeiros." },
    { q: "Esse método já funcionou pra outras pessoas?", a: "Sim. Tem diversos depoimentos e casos reais de quem já lucrou com o Clone Perfeito." },
  ];

  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      <main className="relative isolate overflow-hidden bg-gray-900">
        {/* Efeito de fundo com gradiente */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8000ff] to-[#3300ff] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>

        {/* Seção Principal (Hero) */}
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
            <div className="mt-12 max-w-3xl mx-auto">
                <IconBlock icon="⚠️">
                    <div>
                        <p>
                           Pessoas comuns estão faturando em dólar, euro e real com um método inédito que ensina a vender ensaios fotográficos hiper-realistas com IA.
                        </p>
                        <p className="mt-3 font-bold text-white">
                           E você pode ser o próximo.
                        </p>
                    </div>
                </IconBlock>
            </div>
            <div className="text-center mt-12">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
                    🚨 Se você busca uma forma <span className="text-cyan-400">rápida e prática</span> de fazer dinheiro com algo novo...
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400 max-w-3xl mx-auto">
                    ...então pare tudo e leia essa página até o fim. Porque se você entender o que vou te mostrar agora, sua vida pode mudar completamente — e não estou exagerando.
                </p>
            </div>
        </div>
        
        {/* Seção de Depoimentos */}
        <section className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
            <SectionTitle icon="🗣️">O que dizem sobre o método</SectionTitle>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <IconBlock icon="💬">
                    <div>
                        <p>“Fechei meu primeiro pacote com uma gringa por $49 usando só o script que ele dá. Nem precisei aparecer.”</p>
                        <footer className="mt-3 text-sm text-gray-500">— Lucas, 24 anos</footer>
                    </div>
                </IconBlock>
                <IconBlock icon="💬">
                    <div>
                        <p>“Eu nunca editei uma imagem na vida. Mesmo assim gerei um ensaio meu, postei no Instagram e uma menina do Canadá me chamou. Fechei por $39 em dois dias.”</p>
                        <footer className="mt-3 text-sm text-gray-500">— Mari, 19 anos</footer>
                    </div>
                </IconBlock>
                <IconBlock icon="💬">
                    <div>
                        <p>“Fiz 6 vendas no primeiro mês. Uma delas foi um pacote de €59. Tudo só usando os exemplos e mensagens do curso.”</p>
                        <footer className="mt-3 text-sm text-gray-500">— Caio, 27 anos</footer>
                    </div>
                </IconBlock>
            </div>
        </section>

        {/* Seção da Oportunidade */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <IconBlock icon="🤔">
                <div>
                    <h3 className="font-bold text-white text-xl mb-3">Deixa eu te perguntar…</h3>
                    <p className="text-gray-400">Quantas vezes você já ficou com aquela sensação de: “Se eu tivesse entrado nisso quando ainda era novidade… hoje estaria ganhando dinheiro fácil com isso.”</p>
                </div>
            </IconBlock>
            <div className="mt-6 space-y-4 text-gray-400">
                <CustomListItem>Lembra de quando começaram os primeiros vídeos no TikTok?</CustomListItem>
                <CustomListItem>Ou quando as pessoas começaram a vender na Shopee e ganharam rios de dinheiro com dropshipping?</CustomListItem>
                <CustomListItem>Ou quando a galera começou a usar o ChatGPT antes de todo mundo e virou referência só porque aprendeu antes?</CustomListItem>
            </div>
            <p className="mt-8 text-xl text-center font-semibold text-white">
                Pois é. <span className="text-cyan-400">Essa página aqui é exatamente esse momento.</span> A diferença? É que dessa vez você chegou a tempo.
            </p>
        </section>

        {/* Seção "Quem Sou Eu" */}
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
                Meu nome é Gabriel, e nos últimos meses, eu vivi uma obsessão silenciosa. Descobri uma ferramenta de IA que gera imagens fotográficas com realismo assustador. Mas não me contentei. Fucei cada configuração, testei, errei dezenas de vezes... até descobrir um conjunto de técnicas que transformam essas imagens em ensaios dignos de capa de revista.
              </p>
              <p className="mt-4 font-semibold text-white">Foi aí que nasceu o Clone Perfeito.</p>
            </div>
          </div>
        </section>

        {/* Seção "O que é o Clone Perfeito" */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <h2 className="text-center text-4xl font-bold text-white mb-10">O que é o <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Clone Perfeito</span>?</h2>
            <IconBlock icon="💡">
                É um método completo, passo a passo, onde ensino você a transformar IA numa fonte de renda real e prática — sem precisar ser designer ou expert em tecnologia.
            </IconBlock>
            <div className="mt-6 space-y-4">
                <CustomListItem>Criar ensaios de fotos ultra-realistas com IA.</CustomListItem>
                <CustomListItem>Usar configurações secretas que desbloqueiam qualidade absurda nas imagens.</CustomListItem>
                <CustomListItem>Fazer prospecção ativa no Instagram, com scripts prontos.</CustomListItem>
                <CustomListItem>Montar pacotes e precificar de forma inteligente.</CustomListItem>
                <CustomListItem>Vender em reais, dólares e euros, sem sair de casa.</CustomListItem>
            </div>
        </section>

        {/* Seção "O que você recebe" */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <SectionTitle icon="📦">O que você vai receber no Clone Perfeito</SectionTitle>
            <div className="space-y-4">
                {aulas.map((aula) => (
                    <IconBlock key={aula.title} icon={aula.icon}>
                        <div>
                            <strong className="text-white">{aula.title}</strong>
                            <p className="text-gray-400 text-sm mt-1">{aula.description} {aula.value && <span className="text-gray-500">(valor: {aula.value})</span>}</p>
                        </div>
                    </IconBlock>
                ))}
            </div>
            
            <div className="mt-16">
                <SectionTitle icon="✨">E ainda leva 3 Bônus Especiais</SectionTitle>
                <div className="space-y-4">
                    {bonus.map((item) => (
                        <IconBlock key={item.title} icon={item.icon}>
                            <div>
                                <strong className="text-yellow-300">{item.title}</strong>
                                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                            </div>
                        </IconBlock>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Seção de Oferta Final */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-green-500 text-center">
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

        {/* Seção de FAQ */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <SectionTitle icon="❓">Perguntas Frequentes</SectionTitle>
            <div className="space-y-6">
                {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-800 pb-6 last:border-b-0">
                        <h3 className="font-semibold text-white">{item.q}</h3>
                        <p className="mt-2 text-gray-400">{item.a}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Rodapé */}
        <footer className="text-center py-8 text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Clone Perfeito. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
};

export default ClonePerfeitoPage;
