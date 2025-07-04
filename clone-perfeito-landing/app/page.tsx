<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O Clone Perfeito | Crie Ensaios com IA e Fature Alto</title>
    
    <!-- Adicionando Font Awesome para os ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Estilos CSS (embutidos para facilitar a cópia) -->
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
            text-align: center;
        }
        h1, h2, h3 {
            color: #1a1a1a;
            line-height: 1.2;
        }
        h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
        }
        h2 {
            font-size: 2.2rem;
            margin-top: 60px;
            margin-bottom: 20px;
            border-top: 1px solid #eee;
            padding-top: 40px;
        }
        .subtitle {
            font-size: 1.2rem;
            color: #555;
            max-width: 600px;
            margin: 0 auto 30px auto;
        }
        .cta-button {
            display: inline-block;
            background-color: #28a745;
            color: #fff;
            padding: 18px 35px;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease;
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
        }
        .cta-button:hover {
            background-color: #218838;
        }
        .price-box {
            background-color: #fff;
            border: 2px solid #28a745;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .price-box .old-price {
            text-decoration: line-through;
            color: #999;
            font-size: 1.2rem;
        }
        .price-box .new-price {
            font-size: 3.5rem;
            font-weight: bold;
            color: #1a1a1a;
            margin: 0;
        }
        .price-box .subtext {
            font-size: 1.1rem;
            color: #555;
        }
        .cta-support-text {
            font-size: 0.9rem;
            color: #666;
            margin-top: 10px;
        }
        .features-grid, .benefits-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 25px;
            text-align: left;
            margin-top: 40px;
        }
        .feature-card, .benefit-item {
            background: #fff;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .feature-card i, .benefit-item i {
            font-size: 2.5rem;
            color: #28a745;
            margin-bottom: 15px;
        }
        .testimonial-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        .testimonial-card {
            background: #fff;
            border-left: 5px solid #28a745;
            padding: 20px;
            border-radius: 8px;
            text-align: left;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .testimonial-card img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            float: left;
            margin-right: 15px;
        }
        .testimonial-card .author {
            font-weight: bold;
            margin-top: 15px;
            color: #333;
        }
        .testimonial-card .author span {
            display: block;
            font-weight: normal;
            color: #777;
        }
        .image-comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 40px;
        }
        .image-comparison img {
            width: 100%;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .final-offer-box {
            background: #f0fff4;
            border: 1px solid #cce8d4;
            padding: 30px;
            border-radius: 10px;
            margin-top: 40px;
        }
        ul.checklist {
            list-style: none;
            padding: 0;
            text-align: left;
            max-width: 400px;
            margin: 20px auto;
        }
        ul.checklist li {
            margin-bottom: 10px;
            font-size: 1.1rem;
        }
        ul.checklist i {
            color: #28a745;
            margin-right: 10px;
        }
        .guarantee-box {
            margin-top: 40px;
            border: 2px dashed #f0ad4e;
            padding: 20px;
            border-radius: 8px;
            background: #fffaf0;
        }
        footer {
            margin-top: 60px;
            padding: 20px;
            background-color: #333;
            color: #ccc;
        }
        footer a { color: #fff; text-decoration: none; }

        /* --- ESTILOS DA NOVA GALERIA --- */
        .student-gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 30px;
        }
        .student-gallery-grid img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Garante que a imagem preencha o espaço sem distorcer */
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .student-gallery-grid img:hover {
            transform: scale(1.05);
        }
        /* --- FIM DOS ESTILOS DA GALERIA --- */

    </style>
</head>
<body>

    <main class="container">
        <!-- HERO SECTION -->
        <header>
            <h1>Transforme Fotos Comuns em Ensaios de Luxo com IA (e Crie um Negócio Lucrativo em Horas)</h1>
            <p class="subtitle">
                O único método que você precisa para criar ensaios fotográficos hiper-realistas para clientes em menos de 2 horas e adicionar uma fonte de renda previsível ao seu negócio. <strong>Nenhuma experiência com IA é necessária.</strong>
            </p>
        </header>

        <!-- PREÇO E CTA PRINCIPAL -->
        <div class="price-box">
            <p class="subtext">Acesso completo ao método e todos os bônus:</p>
            <span class="old-price">De R$157</span>
            <p class="new-price">por R$47</p>
            <p class="subtext">à vista ou até 12x de R$ 5,22 — <strong>uma nova fonte de renda pelo preço de um delivery.</strong></p>
        </div>
        <a href="#link-de-checkout" class="cta-button">QUERO CRIAR ENSAIOS LUCRATIVOS AGORA</a>
        <p class="cta-support-text">Compra Segura | Acesso Imediato | Garantia de 7 Dias</p>

        <!-- INTRODUÇÃO / CONEXÃO EMOCIONAL -->
        <section>
            <h2>Deixe de Vender seu Tempo. Venda um Resultado Mágico.</h2>
            <p>
                Imagine poder oferecer ao seu cliente um ensaio fotográfico em Paris, um retrato corporativo em um escritório de luxo ou fotos de aventura na Patagônia... <strong>sem que ele precise sair de casa.</strong> O Clone Perfeito não é só sobre IA. É sobre destravar um poder criativo e financeiro que antes era restrito a grandes produções. Aqui, você aprende a habilidade prática para transformar essa magia em lucro real.
            </p>
            <p>Em menos de <strong>2 horas de curso</strong>, você estará pronto para criar e vender seu primeiro ensaio. O método é 100% focado na prática.</p>
        </section>

        <!-- PILARES DO MÉTODO -->
        <section class="features-grid">
            <div class="feature-card">
                <i class="fa-solid fa-robot"></i>
                <h3>Crie o Ativo Principal: O Clone Digital</h3>
                <p>Aprenda a treinar a IA com fotos comuns de qualquer pessoa para gerar um "clone" hiper-realista e versátil para seus clientes.</p>
            </div>
            <div class="feature-card">
                <i class="fa-solid fa-camera-retro"></i>
                <h3>Produza Ensaios de Alto Nível</h3>
                <p>Gere imagens profissionais em qualquer cenário imaginável, de fotos corporativas a posts de lifestyle para redes sociais.</p>
            </div>
            <div class="feature-card">
                <i class="fa-solid fa-sack-dollar"></i>
                <h3>Estruture e Venda o Serviço</h3>
                <p>Entenda como empacotar, precificar e oferecer essa nova habilidade para adicionar uma fonte de receita sólida ao seu negócio.</p>
            </div>
        </section>

        <!-- PROVA SOCIAL (DEPOIMENTOS) -->
        <section>
            <h2>A Prova de que o Método Funciona (e Gera Lucro Rápido)</h2>
            <p>Veja o que nossos alunos, de iniciantes a profissionais, estão conquistando.</p>
            
            <div class="testimonial-section">
                <!-- NOTA: Substitua estes exemplos pelos seus depoimentos reais! -->
                <div class="testimonial-card">
                    <img src="https://via.placeholder.com/60" alt="Foto Aluno 1">
                    <p>"Fechei meu primeiro pacote de R$350 na primeira semana! Os clientes ficam chocados com a qualidade. O curso se pagou em 2 dias."</p>
                    <p class="author">Joana Silva <span>Social Media</span></p>
                </div>
                <div class="testimonial-card">
                    <img src="https://via.placeholder.com/60" alt="Foto Aluno 2">
                    <p>"Como fotógrafo, eu tinha receio da IA. Agora, ofereço ensaios digitais como um extra e aumentei meu ticket médio em 30% sem sair de casa."</p>
                    <p class="author">Marcos Andrade <span>Fotógrafo Profissional</span></p>
                </div>
                <div class="testimonial-card">
                    <img src="https://via.placeholder.com/60" alt="Foto Aluno 3">
                    <p>"Simplesmente o melhor custo-benefício. O Agente GPT para extrair prompts vale 10x o preço do curso. É fácil e o resultado é incrível."</p>
                    <p class="author">Carla Vianna <span>Designer Freelancer</span></p>
                </div>
            </div>
        </section>

        <!-- ======================================= -->
        <!-- === NOVA SEÇÃO: GALERIA DOS ALUNOS === -->
        <!-- ======================================= -->
        <section>
            <h2>Veja o que Nossos Alunos Estão Criando</h2>
            <p class="subtitle">Imagens 100% geradas com o método Clone Perfeito, por alunos de todos os níveis. O próximo pode ser o seu!</p>
            <div class="student-gallery-grid">
                <!-- SUBSTITUA O CAMINHO E O ALT TEXT DAS IMAGENS -->
                <img src="./gerada-1.jpg" alt="Ensaio profissional gerado por aluno do Clone Perfeito">
                <img src="./gerada-2.jpg" alt="Retrato corporativo gerado por aluno do Clone Perfeito">
                <img src="./gerada-3.jpg" alt="Foto lifestyle gerada por aluno do Clone Perfeito">
                <img src="./gerada-4.jpg" alt="Imagem para rede social gerada por aluno do Clone Perfeito">
                <img src="./gerada-5.jpg" alt="Foto de aventura gerada por aluno do Clone Perfeito">
                <img src="./gerada-6.jpg" alt="Imagem artística gerada por aluno do Clone Perfeito">
                <img src="./gerada-7.jpg" alt="Retrato em estúdio gerado por aluno do Clone Perfeito">
                <img src="./gerada-8.jpg" alt="Foto casual profissional gerada por aluno do Clone Perfeito">
            </div>
        </section>
        
        <!-- PARA QUEM É -->
        <section>
            <h2>Esta Oportunidade é um Atalho Para Você que é...</h2>
            <div class="benefits-list">
                <div class="benefit-item">
                    <i class="fa-solid fa-pen-ruler"></i>
                    <h3>Designer ou Social Media</h3>
                    <p>Quer oferecer um banco de imagens infinito e personalizado para seus clientes, aumentando seu faturamento mensal.</p>
                </div>
                <div class="benefit-item">
                    <i class="fa-solid fa-chart-line"></i>
                    <h3>Gestor de Tráfego ou Agência</h3>
                    <p>Quer criar anúncios de alta conversão com o rosto dos clientes em qualquer cenário, com velocidade e custo imbatíveis.</p>
                </div>
                <div class="benefit-item">
                    <i class="fa-solid fa-camera"></i>
                    <h3>Fotógrafo</h3>
                    <p>Quer adicionar um serviço digital inovador ao seu portfólio, alcançando novos clientes e aumentando o ticket médio.</p>
                </div>
                <div class="benefit-item">
                    <i class="fa-solid fa-rocket"></i>
                    <h3>Freelancer ou Empreendedor</h3>
                    <p>Busca um novo negócio de baixo custo inicial, alta margem de lucro e altíssima demanda no mercado digital.</p>
                </div>
            </div>
        </section>
        
        <!-- ANTES E DEPOIS -->
        <section>
            <h2>Do "Comum" ao "Impressionante"</h2>
            <p class="subtitle">"Seus clientes vão se surpreender com a qualidade. E só você saberá que não precisou de uma câmera, estúdio ou fotógrafo."</p>
            <div class="image-comparison">
                <div>
                    <h3>O PONTO DE PARTIDA</h3>
                    <p>Fotos comuns, sem impacto e que não vendem.</p>
                    <img src="https://via.placeholder.com/400x400.png?text=Foto+Antes+1" alt="Selfie casual no quarto">
                </div>
                <div>
                    <h3>O RESULTADO FINAL</h3>
                    <p>Imagens profissionais que seus clientes pagarão para ter.</p>
                    <img src="https://via.placeholder.com/400x400.png?text=Foto+Depois+1" alt="Retrato profissional corporativo">
                </div>
            </div>
        </section>

        <!-- POTENCIAL DE FATURAMENTO -->
        <section>
            <h2>Seu Potencial de Faturamento (Sendo Conservador)</h2>
            <p class="subtitle">Não se trata de ficar rico da noite para o dia, mas de construir uma fonte de renda sólida com um serviço inovador. Veja um plano realista.</p>
            <div class="features-grid">
                <div class="feature-card">
                    <h3>Pacote Essencial (1 Cliente)</h3>
                    <p>Ideal para um profissional que precisa de fotos para o LinkedIn. (Ex: 15 imagens).</p>
                    <p><strong>Preço de venda: R$ 197,00</strong></p>
                    <p><strong>Seu Lucro Estimado: ~R$ 147,00</strong></p>
                </div>
                <div class="feature-card">
                    <h3>Pacote Conteúdo (1 Cliente)</h3>
                    <p>Perfeito para um criador de conteúdo que precisa de variedade para o Instagram. (Ex: 40 imagens).</p>
                    <p><strong>Preço de venda: R$ 347,00</strong></p>
                    <p><strong>Seu Lucro Estimado: ~R$ 297,00</strong></p>
                </div>
                <div class="feature-card">
                    <h3>Retainer Mensal (Cliente Fixo)</h3>
                    <p>O jogo real. Fornecer imagens sob demanda para um cliente fixo. (Ex: 20 novas imagens/mês).</p>
                    <p><strong>Preço: R$ 400 a R$ 900 / mês</strong></p>
                    <p><strong>Seu Lucro: R$ 350 a R$ 850 / mês (por cliente)</strong></p>
                </div>
            </div>
        </section>

        <!-- O QUE VOCÊ VAI APRENDER -->
        <section>
            <h2>Seu Arsenal Completo Para Começar a Faturar</h2>
            <div class="benefits-list">
                <div class="benefit-item">
                    <i class="fa-solid fa-user-astronaut"></i>
                    <h3>Criar um Clone Digital de Qualquer Pessoa</h3>
                    <p>O passo a passo para treinar a IA com as fotos do seu cliente, garantindo um resultado hiper-realista e profissional, do zero.</p>
                </div>
                <div class="benefit-item">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <h3>Engenharia de Prompts (Nossa Arma Secreta)</h3>
                    <p>Você terá acesso ao nosso <strong>Agente GPT de Reengenharia Visual</strong>, uma ferramenta exclusiva que transforma QUALQUER imagem de referência no prompt perfeito.</p>
                </div>
                <div class="benefit-item">
                    <i class="fa-solid fa-box-archive"></i>
                    <h3>Empacotar e Precificar seu Serviço</h3>
                    <p>Vou te mostrar como estruturar pacotes, quanto cobrar e como apresentar essa solução para seus clientes de forma irresistível.</p>
                </div>
                 <div class="benefit-item">
                    <i class="fa-solid fa-repeat"></i>
                    <h3>Repetir o Processo de Forma Escalável</h3>
                    <p>O método é seu. Você saberá como replicar o processo para dezenas de clientes, transformando a habilidade em um negócio real.</p>
                </div>
            </div>
        </section>

        <!-- OFERTA FINAL E CTA -->
        <section class="final-offer-box">
            <h2>Seu Kit para Começar a Faturar Hoje</h2>
            <ul class="checklist">
                <li><i class="fa-solid fa-circle-check"></i> Acesso vitalício ao curso e método completo</li>
                <li><i class="fa-solid fa-circle-check"></i> <strong>Bônus:</strong> Agente GPT de Reengenharia Visual</li>
                <li><i class="fa-solid fa-circle-check"></i> Suporte direto por e-mail e WhatsApp</li>
                <li><i class="fa-solid fa-circle-check"></i> Todas as atualizações futuras do método</li>
            </ul>
            <p>Com um único cliente, você pode faturar 5x o valor deste curso. Hoje, você adquire a habilidade para sempre por um investimento que se paga no seu primeiro trabalho.</p>
            <div class="price-box" style="border-color: #333; margin-top: 10px;">
                 <span class="old-price">De R$157</span>
                 <p class="new-price">por R$47</p>
                 <p class="subtext">ou até 12x de R$ 5,22 no cartão</p>
            </div>
            <a href="#link-de-checkout" class="cta-button">GARANTIR MINHA VAGA COM DESCONTO</a>
            <p class="cta-support-text">Vagas com este valor podem encerrar a qualquer momento.</p>
        </section>
        
        <!-- GARANTIA -->
        <section class="guarantee-box">
            <h3>Sua Garantia Blindada de Risco Zero</h3>
            <p>Você tem <strong>7 dias</strong> para acessar todo o material. Se por qualquer motivo achar que o Clone Perfeito não é para você, basta enviar um e-mail e nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.</p>
        </section>
        
        <!-- FAQ (PERGUNTAS FREQUENTES) -->
        <section>
             <h2>Perguntas Frequentes</h2>
             <!-- NOTA: Adicione suas perguntas e respostas aqui. O formato <details> cria um accordion clicável. -->
             <details style="text-align: left; background: #fff; padding: 15px; margin-bottom: 10px; border-radius: 5px; cursor: pointer;">
                <summary style="font-weight: bold;">Preciso ter um computador potente?</summary>
                <p style="margin-top: 10px;">Não! Ensinamos a usar ferramentas online que não exigem nada do seu computador. Você pode fazer tudo até mesmo de um notebook básico.</p>
             </details>
             <details style="text-align: left; background: #fff; padding: 15px; margin-bottom: 10px; border-radius: 5px; cursor: pointer;">
                <summary style="font-weight: bold;">É muito difícil aprender os prompts?</summary>
                <p style="margin-top: 10px;">De forma alguma. Além de entregarmos prompts prontos, nosso Agente GPT exclusivo faz o trabalho pesado por você. Se você sabe descrever uma imagem, você consegue criar prompts.</p>
             </details>
        </section>

    </main>

    <footer>
        <div class="container">
            <p><strong>Clone Perfeito</strong></p>
            <p>© 2025 Clone Perfeito - Todos os direitos reservados.</p>
            <p>CNPJ: 50.243.188/2023-04 - GABRIEL MKT LTDA</p>
            <a href="#link-politica">Política de Privacidade</a> | <a href="#link-termos">Termos de Uso</a>
        </div>
    </footer>

</body>
</html>
