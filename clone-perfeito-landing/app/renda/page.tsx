import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// ========================================================================
// Estilos Globais (Notion Look & Feel)
// ========================================================================

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  body {
    background-color: #191919;
    color: #E0E0E0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;

// ========================================================================
// Componentes Estilizados (Blocos de Construção da Página)
// ========================================================================

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.main`
  width: 100%;
  max-width: 720px;
  font-size: 1.1rem;
  line-height: 1.7;

  & > * + * {
    margin-top: 1.25em;
  }
`;

const H1 = styled.h1`
  font-size: 2.8rem;
  color: #ffffff;
  line-height: 1.2;
  font-weight: 700;
  margin: 1.5em 0;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: #fafafa;
  line-height: 1.3;
  font-weight: 700;
  margin-top: 2.5em;
  margin-bottom: 1em;
  border-bottom: 1px solid #333;
  padding-bottom: 0.3em;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Paragraph = styled.p`
  margin: 1em 0;
`;

const Callout = styled.div<{ bgColor?: string }>`
  background-color: ${props => props.bgColor || 'rgba(55, 65, 81, 0.4)'};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  p {
    margin: 0;
    color: #f0f0f0;
    line-height: 1.6;
  }

  span {
    font-size: 1.5rem;
    line-height: 1.6;
  }
`;

const Blockquote = styled.blockquote`
  margin: 1.5em 0;
  padding-left: 1.5em;
  border-left: 3px solid #555;
  font-style: italic;
  color: #b0b0b0;

  p {
    margin: 0;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #333;
  margin: 3em 0;
`;

const Highlight = styled.span`
  background-color: rgba(235, 137, 50, 0.15);
  color: #ffc999;
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-weight: 500;
`;

const ListItem = styled.li`
  list-style: none;
  padding-left: 2em;
  position: relative;
  margin-bottom: 0.75em;
  
  &::before {
    content: attr(data-icon);
    position: absolute;
    left: 0;
    top: 0;
    color: #888;
    font-size: 1.1em;
  }
`;

const ModuleCard = styled.div`
  background-color: #222;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #333;

  h3 {
    margin: 0 0 0.5rem 0;
    color: #fff;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #bbb;
    font-size: 1rem;
  }

  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const PriceSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background-color: #202020;
  border-radius: 8px;

  p {
    margin: 0;
  }
`;

const Strikethrough = styled.span`
  text-decoration: line-through;
  color: #777;
`;

const MainPrice = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin: 0.5rem 0 !important;
`;

const CtaButton = styled.button`
  background: linear-gradient(90deg, #f56565, #e53e3e);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.5rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 2rem !important;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(229, 62, 62, 0.2);
  }
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #333;
  padding: 1.5rem 0;

  &:last-child {
    border-bottom: none;
  }
  
  h4 {
    margin: 0;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    margin: 0.75rem 0 0 0;
    padding-left: 1.75rem;
    color: #bbb;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #777;
  font-size: 0.9rem;
`;

// ========================================================================
// Componente Principal da Página
// ========================================================================

const ClonePerfeitoPage = () => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Content>
          <Callout bgColor="rgba(235, 137, 50, 0.15)">
            <span>⚠️</span>
            <p><strong>Pessoas comuns estão faturando em dólar com um método inédito que ensina a vender ensaios fotográficos hiper-realistas com IA</strong></p>
          </Callout>

          <H1>E você pode ser o próximo.</H1>
          
          <Paragraph style={{textAlign: "center", fontSize: "1.2rem", color: "#ddd"}}>
            <a href="#checkout" style={{ color: "#38bdf8", textDecoration: 'none' }}>→ Quero aprender a criar e vender ensaios!</a>
          </Paragraph>

          <Divider />

          <Callout bgColor="rgba(229, 62, 62, 0.15)">
            <span>🚨</span>
            <p>Se você está procurando uma maneira <strong>real, prática e rápida</strong> de fazer dinheiro com algo novo, inovador e que poucas pessoas estão explorando (mas que tem demanda no mundo inteiro)... então pare tudo e leia essa página até o fim.</p>
          </Callout>

          <Blockquote>
            <p>Porque se você entender o que vou te mostrar agora, sua vida pode mudar completamente — e não estou exagerando.</p>
          </Blockquote>

          <H2>Deixa eu te perguntar…</H2>
          <Paragraph>Quantas vezes você já ficou com aquela sensação de:</Paragraph>
          <Blockquote>
            <p>“Se eu tivesse entrado nisso quando ainda era novidade… hoje estaria ganhando dinheiro fácil com isso.”</p>
          </Blockquote>

          <Paragraph>Lembra de quando começaram os primeiros vídeos no TikTok?<br />
          Ou quando as pessoas começaram a vender produtos na Shopee e ganharam rios de dinheiro com dropshipping?<br />
          Ou quando a galera começou a usar o ChatGPT antes de todo mundo e virou referência só porque aprendeu antes?</Paragraph>
          
          <Paragraph><strong>Pois é.</strong></Paragraph>
          <Paragraph>Essa página aqui é exatamente esse momento.</Paragraph>
          <Paragraph><strong>A diferença?</strong></Paragraph>
          <Paragraph>É que dessa vez você chegou a tempo.<br />
          Eu vou te mostrar um método que pouquíssimas pessoas conhecem…</Paragraph>
          
          <Paragraph>E que permite que qualquer pessoa — mesmo leiga — consiga criar ensaios de fotos ultra-realistas, com aparência profissional, usando Inteligência Artificial...</Paragraph>

          <Paragraph><strong>E mais importante:</strong></Paragraph>

          <Blockquote>
            <p>…vender esses ensaios por R$300, R$400, ou até <Highlight>39 dólares/euros</Highlight> para pessoas do Brasil, da Europa ou dos EUA — sem câmera, sem estúdio, sem fotógrafo e sem sair de casa.</p>
          </Blockquote>

          <Paragraph>Eu sei que isso parece absurdo à primeira vista. Mas continua comigo.<br/>
          Você vai ver que tudo faz sentido. E vai entender como isso pode se tornar sua fonte de renda ainda esse mês.</Paragraph>
          
          <H2>Antes de mais nada: quem sou eu para te falar isso?</H2>
          <Paragraph>Meu nome é Gabriel, e nos últimos meses, eu vivi uma obsessão silenciosa:</Paragraph>
          <Paragraph>Descobri uma ferramenta de IA que gera imagens fotográficas com realismo assustador (não é freepik, não é krea e nem chatgpt).</Paragraph>
          <Paragraph>Mas não me contentei em usar como todo mundo. Eu fucei cada configuração oculta, fiz testes, investi dinheiro, errei dezenas de vezes...</Paragraph>
          <Paragraph>Até descobrir um conjunto de técnicas que transformam essas imagens em ensaios dignos de capa de revista — realistas, estéticos, prontos para serem vendidos.</Paragraph>
          <Paragraph>Só que aí veio a pergunta:</Paragraph>
          <Blockquote>
            <p>“Se eu posso criar esses ensaios incríveis... por que não vender isso como serviço?”</p>
          </Blockquote>
          <Paragraph>Foi aí que nasceu o Clone Perfeito.</Paragraph>

          <H2>O que é o Clone Perfeito?</H2>
          <Paragraph>É um método completo, passo a passo, onde eu ensino você a:</Paragraph>
          <ul>
            <ListItem data-icon="🧬">Criar ensaios de fotos ultra-realistas com IA (sem saber nada de design, prompt, ou tecnologia);</ListItem>
            <ListItem data-icon="⚙️">Usar configurações secretas que desbloqueiam qualidade absurda nas imagens (que a maioria nem sabe que existe);</ListItem>
            <ListItem data-icon="🎯"><strong>Prospecção ativa:</strong> Como oferecer seus ensaios no Instagram para brasileiros, americanos e europeus — com scripts prontos;</ListItem>
            <ListItem data-icon="📦">Como montar pacotes de ensaio (15, 30, 50 fotos) e precificar de forma inteligente;</ListItem>
            <ListItem data-icon="💸">Como vender em reais, dólares e euros — inclusive com uma técnica para usar o argumento de <Highlight>“promoção para os 3 primeiros”</Highlight> e fechar mais rápido;</ListItem>
            <ListItem data-icon="🚀">E principalmente: <strong>como transformar isso numa fonte de renda real.</strong></ListItem>
          </ul>
          <Paragraph>Você não vai sair do curso com mais “informação” — <strong>você vai sair com um plano prático para lucrar.</strong></Paragraph>

          <H2>Mas dá dinheiro de verdade?</H2>
          <Paragraph>Dá. Vamos olhar com seriedade:</Paragraph>
          <ul>
            <ListItem data-icon="🇧🇷">Um pacote com 15 fotos pode ser vendido por <strong>R$250 no Brasil</strong></ListItem>
            <ListItem data-icon="🇺🇸">Ou por <strong>$39 a $59 dólares</strong> no exterior</ListItem>
            <ListItem data-icon="🇪🇺">Ou por <strong>€39 a €69 euros</strong> na Europa</ListItem>
          </ul>
          <Paragraph><strong>Agora imagina:</strong></Paragraph>
          <ul>
            <ListItem data-icon="🔹"><strong>Vendendo 3 ensaios por semana:</strong><br/>3 x R$250 = R$750 por semana = <strong>R$3.000 por mês</strong></ListItem>
            <ListItem data-icon="🔹"><strong>Ou 2 pacotes para gringos por $59 cada:</strong><br/>$118 ≈ R$660 por semana = <strong>R$2.640 por mês</strong></ListItem>
          </ul>
          <Paragraph>E você não precisa pagar fotógrafo, estúdio, nem designer. Só saber o método certo.</Paragraph>

          <H2>Mas por que alguém pagaria por isso?</H2>
          <Paragraph>Porque o resultado parece mágico. E se destaca completamente nas redes.</Paragraph>
          <Paragraph>Você mostra 2 imagens… e a pessoa já pede:</Paragraph>
          <Blockquote>
            <p>“Quanto você cobra pra fazer um ensaio meu assim?”</p>
          </Blockquote>
          <Paragraph>E o melhor: isso funciona mesmo que você tenha 0 seguidores. Você vai aprender exatamente como:</Paragraph>
          <ul>
            <ListItem data-icon="✔️">Criar seu próprio ensaio</ListItem>
            <ListItem data-icon="✔️">Postar da forma certa</ListItem>
            <ListItem data-icon="✔️">Abordar as pessoas com mensagens prontas</ListItem>
            <ListItem data-icon="✔️">Fechar vendas rápidas — em real, dólar ou euro</ListItem>
          </ul>

          <H2>O que você vai receber no Clone Perfeito:</H2>
          <Paragraph style={{color: "#aaa"}}>(E aqui já entra a ancoragem de valor real👇)</Paragraph>

          <ModuleCard><h3><span>🧠</span>Aula 1 – Boas-vindas e mentalidade</h3><p>O exato caminho mental que você precisa seguir para transformar o método em resultado financeiro (só isso já vale R$97)</p></ModuleCard>
          <ModuleCard><h3><span>🧬</span>Aula 2 – Como criar seu clone com IA</h3><p>Configurações secretas, trigger phrase e otimizações que tornam seus ensaios incomparáveis (valor estimado: R$197)</p></ModuleCard>
          <ModuleCard><h3><span>🎯</span>Aula 3 – Como gerar ensaios com qualidade absurda</h3><p>Você vai dominar cada detalhe para gerar pacotes com 15, 30 ou 50 fotos que vendem (valor de mercado: R$247)</p></ModuleCard>
          <ModuleCard><h3><span>🎨</span>Aula 4 – Edição, variações e estilos visuais</h3><p>Estilos cinematográficos, fashion, vintage, clean, conceitual e mais para encantar o cliente</p></ModuleCard>
          <ModuleCard><h3><span>💼</span>Aula 5 – Como montar pacotes e precificar</h3><p>Estrutura de pacotes, nomes atrativos, valores, ancoragem e margem de lucro</p></ModuleCard>
          <ModuleCard><h3><span>📲</span>Aula 6 – Scripts prontos de prospecção</h3><p>Mensagens testadas que convertem para DMs (BR, EUA, Europa) e estratégia de promoção inicial (R$197 fácil)</p></ModuleCard>
          <ModuleCard><h3><span>🌍</span>Aula 7 – Como vender em real, dólar e euro</h3><p>Plataformas, carteira digital, recebimento internacional, e estratégia de escassez</p></ModuleCard>
          
          <H2>Bônus Exclusivos</H2>
          <ModuleCard><h3><span>🧠</span>Bônus 1 – Agente GPT de Prompts</h3><p>Gere prompts ultra detalhados com seu nome, estilo e iluminação com 1 clique</p></ModuleCard>
          <ModuleCard><h3><span>🖼️</span>Bônus 2 – Clones com ChatGPT</h3><p>Como criar Clones e Ensaios com o ChatGPT</p></ModuleCard>
          <ModuleCard><h3><span>💸</span>Bônus 3 – Estratégia de Renda Rápida</h3><p>Como fazer sua primeira venda em 72h com um perfil novo</p></ModuleCard>

          <PriceSection>
            <p>Valor total real do pacote: <Strikethrough>R$1.497</Strikethrough></p>
            <Paragraph>Mas você vai acessar tudo por apenas</Paragraph>
            <MainPrice>R$127 à vista</MainPrice>
            <p>(ou em até 12x)</p>
          </PriceSection>
          
          <Paragraph style={{textAlign: "center", fontSize: "1.2rem", fontWeight: "bold"}}>Sim: menos do que uma pizza te dá acesso a uma renda em euro.</Paragraph>

          <H2>Veja o que outras pessoas estão fazendo com o método:</H2>
          {/* Placeholder for testimonials/images */}
          <div style={{
            border: '2px dashed #444', 
            borderRadius: '8px', 
            padding: '4rem', 
            textAlign: 'center',
            color: '#888'
          }}>
            [Área para depoimentos ou imagens de ensaios]
          </div>

          <H2>Agora é com você:</H2>
          <Paragraph>Você pode continuar scrollando por aí…</Paragraph>
          <Paragraph>…ou clicar abaixo e aprender a criar um serviço novo, original, visualmente incrível e vendável, que paga em dólar, euro ou real — usando apenas seu notebook.</Paragraph>
          <Blockquote>
            <p>O Clone Perfeito é o tipo de oportunidade que daqui a 6 meses vai estar em todo lugar. Mas hoje ainda é você quem chega primeiro.</p>
          </Blockquote>

          <Paragraph style={{textAlign: "center", fontSize: "1.2rem", fontWeight: "bold", marginTop: "2rem"}}>👇 Garanta agora seu acesso ao Clone Perfeito</Paragraph>
          <Paragraph style={{textAlign: "center", color: "#f6ad55"}}>Preço promocional de R$47 — por tempo limitado</Paragraph>
          
          <CtaButton id="checkout">
            Quero Faturar em Dólar com IA 🔥
          </CtaButton>

          <Divider />

          <H2>❓ FAQ – Perguntas Frequentes</H2>
          <FaqItem>
            <h4><span>→</span>Isso é um curso de inteligência artificial?</h4>
            <p>Não. É um método prático de como fazer dinheiro com IA, criando ensaios de fotos e vendendo como serviço.</p>
          </FaqItem>
          <FaqItem>
            <h4><span>→</span>Eu preciso saber editar ou programar?</h4>
            <p>Não. Tudo é guiado. Você vai só seguir o passo a passo e usar as ferramentas com os templates prontos.</p>
          </FaqItem>
          <FaqItem>
            <h4><span>→</span>Preciso ter seguidores?</h4>
            <p>Não. O curso ensina como prospectar com mensagens mesmo tendo 0 seguidores.</p>
          </FaqItem>
          <FaqItem>
            <h4><span>→</span>Quanto eu preciso investir depois?</h4>
            <p>O custo para gerar o clone é de $10 dólares (você aprende como usar com lucro). Depois disso, você pode reinvestir parte das vendas.</p>
          </FaqItem>
          <FaqItem>
            <h4><span>→</span>Esse método já funcionou pra outras pessoas?</h4>
            <p>Sim. A página tem vários exemplos reais. Gente que nunca mexeu com IA faturando com os ensaios.</p>
          </FaqItem>
          <FaqItem>
            <h4><span>→</span>Posso vender pra fora do Brasil?</h4>
            <p>Sim! Você vai aprender como receber em euro, dólar e usar a escassez certa pra fechar clientes gringos.</p>
          </FaqItem>

          <Footer>
            Copyright © {new Date().getFullYear()} Clone Perfeito. Todos os direitos reservados.
          </Footer>

        </Content>
      </PageContainer>
    </>
  );
};

export default ClonePerfeitoPage;
