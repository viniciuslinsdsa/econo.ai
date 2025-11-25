const METODOLOGIAS = {
    "PIB (índice)": {
        titulo: "PIB (Produto Interno Bruto)",
        explicacao: "Representa a soma de todos os bens e serviços finais finais produzidos no Brasil em um determinado período. É o principal indicador de riqueza e atividade econômica. A série em índice (base 2018=100) mostra a evolução do volume produzido, com o ano-base como referência (100).",
        calculo: "Calculado pelo <strong>IBGE</strong> pela ótica da <strong>Produção</strong> ou <strong>Despesa</strong>. Utiliza o método de <strong>Laspeyres de base fixa em cadeia</strong>, onde a ponderação dos setores é periodicamente atualizada para refletir a estrutura atual da economia."
    },
    "IBC-Br (prévia do PIB)": {
        titulo: "IBC-Br (Índice de Atividade Econômica do BCB)",
        explicacao: "É uma prévia mensal do comportamento do PIB, calculada pelo Banco Central do Brasil. É um indicador de frequência mensal que antecipa a tendência da economia, utilizando informações de produção na agropecuária, indústria, serviços e comércio.",
        calculo: "Estimado pelo <strong>Banco Central (BCB)</strong> a partir de variáveis de produção (oferta) e consumo (demanda) de curto prazo. Embora não seja o PIB oficial, seu cálculo é estatisticamente correlacionado à metodologia do IBGE para o PIB."
    },
    "Produção Industrial": {
        titulo: "Produção Industrial (Variação Mensal)",
        explicacao: "Mede o desempenho da indústria nacional. A variação mensal, com ajuste sazonal, compara o nível de produção do mês atual com o mês imediatamente anterior, expurgando efeitos típicos da época do ano.",
        calculo: "Medida pela <strong>Pesquisa Industrial Mensal - Produção Física (PIM-PF)</strong> do <strong>IBGE</strong>. É um <strong>índice de quantidade</strong> que utiliza o método de Laspeyres adaptado. A variação é o cálculo percentual de M/M-1 (mês contra mês anterior)."
    },
    "Varejo": {
        titulo: "Volume de Vendas no Varejo",
        explicacao: "Mede a evolução do volume de vendas do comércio varejista, refletindo o consumo das famílias e a confiança na economia. A variação mensal é um indicador de curto prazo do dinamismo do comércio.",
        calculo: "Medida pela <strong>Pesquisa Mensal de Comércio (PMC)</strong> do <strong>IBGE</strong>. Assim como a Produção Industrial, utiliza o método de índice de quantidade (Laspeyres) para o cálculo da variação mensal real (descontada a inflação)."
    },
    "IPCA (inflação oficial)": {
        titulo: "IPCA (Índice Nacional de Preços ao Consumidor Amplo)",
        explicacao: "É o índice oficial de inflação do Brasil, utilizado como meta pelo Banco Central. Mede a variação dos preços para famílias com rendimento entre 1 e 40 salários mínimos, abrangendo as principais áreas urbanas do país.",
        calculo: "Calculado pelo <strong>IBGE</strong>. É uma <strong>média ponderada</strong> das variações de preços de uma cesta de bens e serviços. A ponderação reflete a importância (peso) que cada item tem no orçamento das famílias pesquisadas."
    },
    "IGP-M (aluguéis)": {
        titulo: "IGP-M (Índice Geral de Preços - Mercado)",
        explicacao: "Conhecido como a 'inflação do aluguel', mede a variação dos preços de forma ampla: 60% atacado (IPA), 30% consumidor (IPC) e 10% construção civil (INCC). É amplamente utilizado no reajuste de contratos e tarifas.",
        calculo: "Calculado pela <strong>FGV</strong>. Sua composição ponderada (%IPA + %IPC + %INCC) o torna mais sensível à taxa de câmbio (dólar), pois o atacado tem forte peso de produtos <strong>commodities</strong>."
    },
    "INPC (baixa renda)": {
        titulo: "INPC (Índice Nacional de Preços ao Consumidor)",
        explicacao: "Mede a variação dos preços para famílias com rendimento entre 1 e 5 salários mínimos, refletindo o custo de vida da parcela de baixa renda da população.",
        calculo: "Calculado pelo <strong>IBGE</strong>. Utiliza metodologia similar ao IPCA, mas com uma cesta de consumo e ponderação que reflete o perfil de gastos das famílias com menor poder aquisitivo."
    },
    "Taxa de Desemprego": {
        titulo: "Taxa de Desocupação (Desemprego)",
        explicacao: "Representa a porcentagem de pessoas na força de trabalho que estão desocupadas (não trabalhando) e que tomaram providências efetivas para conseguir trabalho no período de referência.",
        calculo: "Calculado pelo <strong>IBGE</strong> através da <strong>PNAD Contínua (Pesquisa Nacional por Amostra de Domicílios)</strong>. A fórmula é: (Pessoas Desocupadas / Força de Trabalho) * 100."
    },
    "Renda Média do Trabalho": {
        titulo: "Rendimento Médio Real Habitual",
        explicacao: "Mede o valor médio do rendimento recebido pelas pessoas ocupadas no mercado de trabalho, descontada a inflação (rendimento real). É um indicador crucial do poder de compra da população.",
        calculo: "Calculado pelo <strong>IBGE</strong> através da <strong>PNAD Contínua</strong>. É a média dos rendimentos habitualmente recebidos por todos os trabalhos (principal e secundários) no mês de referência."
    },
    "Dólar Comercial": {
        titulo: "Taxa de Câmbio (Dólar Comercial)",
        explicacao: "É o preço da moeda americana no Brasil, usado como referência para operações de importação e exportação de bens e serviços. Sua flutuação reflete a oferta e demanda por Dólar no país e a confiança na economia.",
        calculo: "Calculado pelo <strong>Banco Central (BCB)</strong> através da <strong>taxa PTAX</strong>, que é a média das taxas de compra e venda de Dólar informada por um grupo de <strong>dealers</strong> (bancos) a cada dia."
    },
    "Balança Comercial": {
        titulo: "Saldo da Balança Comercial",
        explicacao: "É a diferença entre o valor total das <strong>Exportações</strong> (vendas do Brasil para o exterior) e o valor total das <strong>Importações</strong> (compra do Brasil do exterior). Um saldo positivo é um superávit (entrou mais dólar do que saiu).",
        calculo: "Compilado pela <strong>Secretaria de Comércio Exterior (SECEX)</strong>. O saldo é: Valor das Exportações (FOB) - Valor das Importações (FOB)."
    },
    "Reservas Internacionais": {
        titulo: "Reservas Internacionais (Total)",
        explicacao: "São os ativos em moeda estrangeira (Dólar, Euro, etc.), ouro e direitos especiais de saque (FMI) mantidos pelo Banco Central. Servem como um 'colchão' para o Brasil, garantindo liquidez e estabilidade em crises cambiais.",
        calculo: "Calculado pelo <strong>Banco Central (BCB)</strong> diariamente, somando o estoque de ativos internacionais disponíveis do país."
    }
};

const CATEGORIAS = {
  atividade: {
    titulo: "Atividade Econômica", cor: "#00d4ff",
    explicacao: "São os indicadores que mostram se o Brasil está <strong>produzindo e vendendo mais ou menos</strong>. PIB alto = país mais rico. IBC-Br em alta = economia aquecida. Produção industrial forte = fábricas a todo vapor. Varejo crescendo = brasileiro comprando mais.",
    series: { 
      "PIB (índice)": { codigo: 22109, unidade: "Índice (2018=100)" }, 
      "IBC-Br (prévia do PIB)": { codigo: 24363, unidade: "Índice (2003=100)" }, 
      "Produção Industrial": { codigo: 21859, unidade: "% (variação mensal)" }, 
      "Varejo": { codigo: 1455, unidade: "% (variação mensal)" } 
    },
    impacto: "Quando esses números sobem, geralmente aparecem <strong>mais vagas de emprego</strong> e as empresas faturam mais. É o momento em que a economia está aquecida e as oportunidades aumentam. Quando caem, o mercado esfria e é hora de ter mais cautela."
  },
  inflacao: {
    titulo: "Inflação", cor: "#ff6b6b",
    explicacao: "É a velocidade com que <strong>os preços estão subindo</strong>. Inflação em 0,5% ao mês significa que, na média, tudo está 0,5% mais caro. O IPCA é o índice oficial que o Banco Central persegue - a meta é manter em torno de <strong>3% ao ano</strong> (0,25% ao mês).",
    series: { 
      "IPCA (inflação oficial)": { codigo: 433, unidade: "% (variação mensal)" }, 
      "IGP-M (aluguéis)": { codigo: 189, unidade: "% (variação mensal)" }, 
      "INPC (baixa renda)": { codigo: 188, unidade: "% (variação mensal)" } 
    },
    impacto: "Quando a inflação dispara, <strong>seu salário perde valor</strong> - você compra menos com o mesmo dinheiro. Combustível, comida, aluguel... tudo fica mais caro. Inflação controlada é bom para todos, pois mantém o poder de compra estável."
  },
  emprego: {
    titulo: "Emprego", cor: "#39ff94",
    explicacao: "Esses dados mostram <strong>quantas pessoas estão trabalhando</strong> e quanto elas ganham. Taxa de desemprego alta = muita gente procurando emprego. Renda média em alta = trabalhador ganhando mais e com mais poder de compra.",
    series: { 
      "Taxa de Desemprego": { codigo: 24369, unidade: "%" }, 
      "Renda Média do Trabalho": { codigo: 24379, unidade: "R$" } 
    },
    impacto: "Desemprego baixo significa que <strong>é mais fácil conseguir emprego</strong> e os trabalhadores têm mais poder para negociar salários melhores. Quando a renda média sobe, as famílias consomem mais, movimentando a economia inteira."
  },
  externo: {
    titulo: "Setor Externo", cor: "#06d6a0",
    explicacao: "Mostram <strong>como o Brasil se relaciona economicamente com outros países</strong>. Dólar em alta = real fraco. Balança comercial positiva = exportamos mais do que importamos. Reservas internacionais = dinheiro guardado para emergências.",
    series: { 
      "Dólar Comercial": { codigo: 3698, unidade: "R$/US$" }, 
      "Balança Comercial": { codigo: 22707, unidade: "US$ Milhões" }, 
      "Reservas Internacionais": { codigo: 3546, unidade: "US$ Milhões" } 
    },
    impacto: "Dólar alto encarece <strong>viagens internacionais, eletrônicos importados, e até a gasolina</strong> (porque o petróleo é cotado em dólar). Por outro lado, favorece quem exporta. Dólar baixo tem o efeito inverso: bom para consumidor, ruim para exportador."
  }
};

function formatarData(dataISO, tipo = 'mini') {
  if (!dataISO) return 'N/D';
  const partes = dataISO.split('-');
  if (partes.length !== 3) return dataISO;
  const [ano, mes, dia] = partes;
  if (tipo === 'completo') return `${dia}/${mes}/${ano}`;
  if (tipo === 'eixo') return `${mes}/${ano}`;
  return `${dia}/${mes}`; 
}

/**
 * Novo fetchBCB: Sempre retorna os dados ordenados cronologicamente (Antigo -> Recente)
 */
async function fetchBCB(codigo, n = 100, reverseOrder = true) { 
  const proxies = [
    (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    (url) => url
  ];
  
  const apiUrl = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/${n}?formato=json`;
  const cacheKey = `bcb_${codigo}`;
  const cached = localStorage.getItem(cacheKey);
  const cacheTime = localStorage.getItem(`${cacheKey}_time`);
  
  if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < 3600000) {
    setTimeout(() => fetchBCB(codigo, n), 100);
    return JSON.parse(cached);
  }
  
  const hoje = new Date();
  const hojeString = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`;
  
  async function fetchComTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(id);
      return response;
    } catch (error) {
      clearTimeout(id);
      throw error;
    }
  }
  
  for (let proxyIndex = 0; proxyIndex < proxies.length; proxyIndex++) {
    const proxyUrl = proxies[proxyIndex](apiUrl);
    for (let tentativa = 0; tentativa < 2; tentativa++) {
      try {
        const res = await fetchComTimeout(proxyUrl, 5000);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        
        let dadosBrutos;
        if (proxyIndex === 0) {
          dadosBrutos = JSON.parse(data.contents);
        } else if (proxyIndex === 1) {
          dadosBrutos = typeof data === 'string' ? JSON.parse(data) : data;
        } else {
          dadosBrutos = data;
        }
        
        if (!Array.isArray(dadosBrutos) || dadosBrutos.length === 0) {
          throw new Error('Dados inválidos');
        }
        
        const dadosFiltrados = dadosBrutos.filter(d => {
          return d.data && d.valor && d.data.substring(0, 10) <= hojeString;
        });

        // NOVO: Inverte e salva no cache, e sempre retorna na ordem cronológica (Antigo -> Recente)
        const dadosOrdenados = reverseOrder ? dadosFiltrados.reverse() : dadosFiltrados;

        if (dadosOrdenados.length > 0) {
            // Salvamos no cache na ordem do BCB (mais novo -> mais antigo)
            localStorage.setItem(cacheKey, JSON.stringify(dadosFiltrados));
            localStorage.setItem(`${cacheKey}_time`, Date.now().toString());
        }
        
        return dadosOrdenados;
      } catch (err) {
        console.warn(`Tentativa ${tentativa + 1} falhou no proxy ${proxyIndex}:`, err.message);
        if (tentativa < 1) await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  }
  
  if (cached) {
    // Se usou cache, ele está na ordem do BCB (Mais Recente -> Mais Antigo), então inverte
    const dadosEmCache = JSON.parse(cached);
    return reverseOrder ? dadosEmCache.reverse() : dadosEmCache;
  }
  
  console.error(`Falha total ao carregar série ${codigo}`);
  return [];
}


// --- Funções Auxiliares (mantidas) ---

function formatarValor(valor, unidade) {
  if (isNaN(valor)) return "N/D";
  if (unidade.includes("R$") || unidade.includes("US$") || unidade.includes("Milhões") || unidade.includes("Bilhões")) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function setActiveButton(page) {
  document.querySelectorAll('nav button').forEach(button => button.classList.remove('active'));
  if (page) {
    const button = document.querySelector(`nav button[data-page="${page}"]`);
    if (button) button.classList.add('active');
  }
}

// FUNÇÃO GERAR INSIGHT IA (REVISADA COM MAIOR RIGOR E CONTEXTO)
function gerarInsightIA(key, ultimoValor, variacao, dados) {
    const cat = CATEGORIAS[key];
    
    const ultimoDadoIndex = dados.length > 0 ? dados.length - 1 : -1;

    if (ultimoDadoIndex === -1) {
        return `<p style="font-size:1.15rem;">⚠️ Ops! Não consegui acessar dados recentes para <strong>${cat.titulo}</strong>. Tente em instantes.</p>`;
    }

    const ultimaData = dados[ultimoDadoIndex].data; 
    const dataFormatada = formatarData(ultimaData, 'completo');
    
    let analise = "";
    let texto = `<p style="font-size:1.1rem; margin-bottom:12px;">Última Leitura em <strong>${dataFormatada}</strong>: <strong style="color:${cat.cor};">${ultimoValor}</strong>.</p>`;

    if (variacao !== 0 && !isNaN(variacao) && Math.abs(variacao) > 0.01) {
        
        const sinal = variacao >= 0 ? '+' : '';
        const variacaoAbs = Math.abs(variacao).toFixed(2);
        
        texto += `<p style="font-size:1.1rem; margin-bottom:20px; color:${variacao >= 0 ? '#00ff88' : '#ff4d6e'};">📊 VARIAÇÃO MENSAL: <strong>${sinal}${variacaoAbs}%</strong>.</p>`;
        
        // Lógica de Análise Setorial 
        const principal = Object.keys(cat.series)[0];
        
        // ************************************************************
        // NOVO BLOCO DE ANÁLISE RIGOROSA (Curto, Médio, Longo Prazo)
        // ************************************************************

        if (key === 'atividade') {
            if (variacao > 0) {
                analise = `<strong>ANÁLISE:</strong> O indicador reflete um <strong>ciclo de expansão na atividade econômica</strong>.
                <br>• <strong>Curto Prazo:</strong> Geração de mais empregos e aumento do faturamento empresarial.
                <br>• <strong>Risco:</strong> Se o crescimento for muito acelerado, pode gerar pressão inflacionária futura (demanda > oferta).`;
            } else {
                analise = `<strong>ANÁLISE:</strong> Foi registrada uma <strong>retração no dinamismo econômico</strong>.
                <br>• <strong>Curto Prazo:</strong> Cautela no mercado de trabalho e nas decisões de investimento.
                <br>• <strong>Sinal:</strong> Pode indicar uma demanda fraca, que em tese, ajuda a manter a inflação sob controle.`;
            }
        } else if (key === 'inflacao') {
            if (variacao < 0) {
                analise = `<strong>ANÁLISE:</strong> Houve uma <strong>desaceleração/deflação</strong> no nível de preços.
                <br>• <strong>Curto Prazo:</strong> Alívio no orçamento das famílias, especialmente na baixa renda (INPC).
                <br>• <strong>Política Monetária:</strong> Reduz a pressão sobre o Banco Central para manter juros altos.`;
            } else {
                analise = `<strong>ANÁLISE:</strong> O indicador aponta para uma <strong>pressão inflacionária ascendente</strong>.
                <br>• <strong>Curto Prazo:</strong> Redução do poder de compra e encarecimento dos custos de produção.
                <br>• <strong>Política Monetária:</strong> Aumenta a probabilidade de intervenção do COPOM com elevação da SELIC para resfriar a demanda.`;
            }
        } else if (key === 'emprego') {
            if (principal.includes('Desemprego')) {
                if (variacao < 0) {
                    analise = `<strong>ANÁLISE:</strong> A taxa de desemprego registrou <strong>queda</strong>.
                    <br>• <strong>Curto Prazo:</strong> O mercado de trabalho está mais aquecido e absorvendo mais mão de obra.
                    <br>• <strong>Médio Prazo:</strong> Maior poder de negociação salarial para os trabalhadores e aumento da massa de rendimento, o que impulsiona o consumo.`;
                } else {
                    analise = `<strong>ANÁLISE:</strong> A taxa de desemprego registrou <strong>aumento</strong>.
                    <br>• <strong>Curto Prazo:</strong> Sinal de desaquecimento da economia e dificuldade na recolocação profissional.
                    <br>• <strong>Impacto:</strong> A retração do emprego e da renda habitual limita a capacidade de consumo das famílias.`;
                }
            } else { // Renda Média
                if (variacao > 0) {
                    analise = `<strong>ANÁLISE:</strong> O <strong>Rendimento Real Médio Subiu</strong>.
                    <br>• <strong>Fator Chave:</strong> Isso significa que o salário médio (descontado a inflação) aumentou, elevando o poder de compra.
                    <br>• <strong>Implicações:</strong> Suporta o crescimento do Varejo e da Atividade Econômica como um todo.`;
                } else {
                    analise = `<strong>ANÁLISE:</strong> O <strong>Rendimento Real Médio Caiu</strong>.
                    <br>• <strong>Fator Chave:</strong> O poder de compra do trabalhador foi corroído, provavelmente por conta da inflação ou estagnação salarial.
                    <br>• <strong>Implicações:</strong> Contrai o consumo e pressiona por reajustes futuros.`;
                }
            }
        } else if (key === 'externo') {
            if (principal.includes('Dólar')) {
                const acao = variacao < 0 ? "apreciação" : "depreciação";
                
                if (variacao < 0) { 
                    analise = `<strong>ANÁLISE:</strong> O Real passou por um processo de <strong>${acao}</strong> frente ao Dólar.
                    <br>• <strong>Curto Prazo (Consumidor):</strong> Viagens e produtos importados ficam mais baratos, aliviando a inflação de bens cotados na moeda americana (commodities).
                    <br>• <strong>Médio/Longo Prazo:</strong> O setor de exportação perde competitividade, pois vende em Dólar e tem custos em Real valorizado.`;
                } else {
                    analise = `<strong>ANÁLISE:</strong> O Real passou por um processo de <strong>${acao}</strong> frente ao Dólar.
                    <br>• <strong>Curto Prazo (Consumidor):</strong> O Dólar mais caro gera forte pressão inflacionária nos insumos e bens importados (custo de vida aumenta).
                    <br>• <strong>Médio/Longo Prazo:</strong> O setor de exportação ganha competitividade no mercado internacional, pois o produto brasileiro fica mais barato para o comprador estrangeiro.`;
                }
            } else {
                analise = `<strong>ANÁLISE CAMBIAL:</strong> Nossas relações comerciais com o mundo estão mudando.`;
            }
        }
        
        texto += `<div class="ia-context-box" style="--cat-color: ${cat.cor};"><p style="margin-bottom:0; font-size:1.05rem;">${analise}</p></div>`;
        // ************************************************************
        // FIM NOVO BLOCO DE ANÁLISE RIGOROSA
        // ************************************************************
        
    } else {
        texto += `<p style="font-size:1.1rem; color:#fff;">📊 O indicador manteve-se estável em relação ao período anterior. Sem alteração registrada.</p>`;
    }
    
    return texto;
}

async function renderHome() {
  setActiveButton('home');
  const container = document.getElementById("cards");
  container.innerHTML = "<div class='loading'>Carregando dados oficiais do Banco Central...</div>";

    // Usa Object.keys(CATEGORIAS) para iterar apenas sobre as categorias definidas atualmente
  const promises = Object.keys(CATEGORIAS).map(async (key) => {
    const cat = CATEGORIAS[key];
    const primeira = Object.keys(cat.series)[0];
    const codigo = cat.series[primeira].codigo;
    // Buscando 12 pontos, que já virão ordenados Antigo -> Recente (dadosGrafico)
    const dadosGrafico = await fetchBCB(codigo, 12);
    // Para calcular a variação, precisamos dos dois últimos valores
    const ultimo = dadosGrafico[dadosGrafico.length - 1] || {};
    const anterior = dadosGrafico[dadosGrafico.length - 2] || {};
    // Garantindo que a variação seja calculada na ordem correta
    const dadosBrutos = [ultimo, anterior].filter(d => d.valor !== undefined); // Os dois últimos valores
    
    return { key, cat, primeira, dadosBrutos, dadosGrafico };
  });
  
  const resultados = await Promise.all(promises);
  
  let html = "";
  for (const { key, cat, primeira, dadosBrutos, dadosGrafico } of resultados) {
    
    // NOVO CÁLCULO DE VARIAÇÃO: usando os dados já ordenados
    const ultimo = dadosBrutos[0] || {};
    const anterior = dadosBrutos[1] || {};
    const valor = parseFloat(ultimo.valor || 0);
    const valorAnterior = parseFloat(anterior.valor || 0);
    const variacao = anterior.valor ? ((valor - valorAnterior) / Math.abs(valorAnterior) * 100).toFixed(2) : 0;
    
    // TRATAMENTO (REMOVIDO: Resultado Primário)
    let valorParaFormatar = valor;
    let unidadeParaFormatar = cat.series[primeira].unidade;


    const valorFormatado = formatarValor(valorParaFormatar, unidadeParaFormatar);
    
    // TRATAMENTO LÓGICO DE TENDÊNCIA (PARA DISPLAY DE SETA)
    let variacaoDisplay = parseFloat(variacao);
    let isUp = variacaoDisplay >= 0;
    
    // CORREÇÃO: Invertendo a lógica da seta para o painel principal, mantendo a interpretação econômica
    if (key === 'emprego' && primeira.includes('Desemprego')) {
        isUp = variacaoDisplay < 0; // Desemprego diminuindo é positivo (seta para baixo)
    } else if (key === 'inflacao') {
        isUp = variacaoDisplay < 0; // Inflação diminuindo é positivo (seta para baixo)
    } else if (key === 'externo' && primeira.includes('Dólar')) {
        isUp = variacaoDisplay < 0; // Dólar caindo é positivo (seta para baixo)
    } 


    html += `
      <div class="card" onclick="showCategory('${key}')">
        <h3>${cat.titulo}</h3>
        <div class="value">${valorFormatado}</div>
        <div class="var ${isUp ? 'up' : 'down'}">
          ${isNaN(variacao) || variacao == 0 ? "Estável" : (isUp ? '▲' : '▼') + " " + Math.abs(variacao) + "%"}
        </div>
        <canvas id="mini-${key}" height="100"></canvas>
      </div>`;
  }
  
  container.innerHTML = html;
  
  resultados.forEach(({ key, cat, dadosGrafico }) => {
    setTimeout(() => {
      const ctx = document.getElementById(`mini-${key}`);
      if (ctx && dadosGrafico.length > 1) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: dadosGrafico.map(d => formatarData(d.data)),
            datasets: [{
              data: dadosGrafico.map(d => parseFloat(d.valor) || 0),
              borderColor: cat.cor,
              backgroundColor: cat.cor + '30',
              tension: 0.4,
              fill: true,
              pointRadius: 0,
              borderWidth: 3
            }]
          },
          options: {
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      }
    }, 100);
  });
}

// FUNÇÃO PARA EXIBIR O MODAL DE METODOLOGIA
function showMetodologia(nomeSerie) {
    const info = METODOLOGIAS[nomeSerie];
    if (info) {
        // Usando uma estrutura HTML simples para simular um modal/tooltip
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:9999;">
                <div style="background:var(--bg-secondary); padding:30px; border-radius:10px; max-width:600px; color:var(--text); box-shadow:0 0 20px rgba(0,0,0,0.5);">
                    <h3 style="color:#00d4ff; margin-top:0;">${info.titulo}</h3>
                    <p><strong>Descrição:</strong> ${info.explicacao}</p>
                    <p><strong>Cálculo Oficial:</strong> ${info.calculo}</p>
                    <button onclick="this.parentNode.parentNode.remove()" style="margin-top:20px; padding:10px 20px; background:#00d4ff; color:black; border:none; border-radius:5px; cursor:pointer;">Fechar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        alert("Metodologia não encontrada para este indicador.");
    }
}

/**
 * Função utilitária para filtrar dados de juros (Selic/CDI)
 * Função mantida APENAS para evitar erros de referência em outras partes que possam chamá-la.
 */
function filterInterestRateData(data) {
    if (!data || data.length === 0) return [];
    
    // Aqui, o 'data' já vem ordenado Antigo -> Recente
    const sortedData = data; 

    let filteredData = [];
    let lastValue = null;

    for (let i = 0; i < sortedData.length; i++) {
        const currentDataPoint = sortedData[i];
        const currentValue = parseFloat(currentDataPoint.valor);
        
        if (currentValue !== lastValue) {
            // Se o valor mudou (e não é o primeiro ponto)
            // Adiciona um ponto com a data de *hoje* e valor *anterior* para fechar o degrau horizontal
            if (i > 0 && lastValue !== null) {
                 const lastPoint = { 
                     data: currentDataPoint.data, // Usa a data da mudança
                     valor: lastValue.toString() // Usa o valor antigo (para fechar o degrau)
                 };
                 // Verifica se o ponto de fechamento não é idêntico ao ponto de abertura anterior
                 if (filteredData.length === 0 || 
                     filteredData[filteredData.length - 1].data !== lastPoint.data ||
                     parseFloat(filteredData[filteredData.length - 1].valor) !== parseFloat(lastPoint.valor)) {
                     filteredData.push(lastPoint);
                 }
            }
            // Adiciona o novo ponto com o valor atual
            filteredData.push(currentDataPoint);
            lastValue = currentValue;
        }
    }
    
    // Limita a, por exemplo, os últimos 40 pontos de mudança (aumentado para melhor visualização)
    const maxPoints = 40;
    if (filteredData.length > maxPoints) {
        return filteredData.slice(filteredData.length - maxPoints);
    }

    return filteredData;
}


// FUNÇÃO SHOW CATEGORY (REVISADA SEM REFERÊNCIAS A JUROS)
async function showCategory(key) {
  setActiveButton(key);
  document.getElementById("home").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");

  const cat = CATEGORIAS[key];
  const content = document.getElementById("category-content");
  content.innerHTML = `<div class="loading">Carregando ${cat.titulo}...</div>`;

  let seriesHTML = "<div class='series-grid'>";
  let codigoPrincipal = cat.series[Object.keys(cat.series)[0]].codigo;
  let primeiraSerie = Object.keys(cat.series)[0];
  let chartTitle = cat.titulo; 

  // Lógica de Indicador Principal (para definir o título do gráfico e a série)
  if (key === 'inflacao') {
      chartTitle = 'Histórico do IPCA (Inflação Oficial)';
  } else if (key === 'atividade') {
      chartTitle = 'Histórico do PIB (Índice)';
  } else if (key === 'emprego') {
      chartTitle = 'Histórico da Taxa de Desemprego';
  } else if (key === 'externo') {
      chartTitle = 'Histórico da Taxa de Câmbio (Dólar Comercial)';
  }
  
  // NOVO: Busca dados de variação (2 pontos, já ordenados Antigo->Recente)
  const dadosParaVariacao = await fetchBCB(codigoPrincipal, 2); 

  // NOVO: O último dado é o último elemento [dados.length - 1]
  const ultimo = dadosParaVariacao[dadosParaVariacao.length - 1] || {};
  const anterior = dadosParaVariacao[dadosParaVariacao.length - 2] || {};
  const valor = parseFloat(ultimo.valor || 0);
  const valorAnterior = parseFloat(anterior.valor || 0);
  const variacao = anterior.valor ? ((valor - valorAnterior) / Math.abs(valorAnterior) * 100) : 0;

  // Busca dados mais extensos para o gráfico grande (já ordenados Antigo->Recente)
  let dadosBrutosGrafico = await fetchBCB(codigoPrincipal, 20); 

  let dadosGrafico;
  // A lógica de filtro para juros foi removida, usando apenas os dados brutos ordenados
  dadosGrafico = dadosBrutosGrafico; 

 
  let valorDisplay = valor;
  let unidadeDisplay = cat.series[primeiraSerie] ? cat.series[primeiraSerie].unidade : '%';
 
  const ultimoValorFormatado = formatarValor(valorDisplay, unidadeDisplay);
  // Passamos os dois últimos pontos para a IA
  const insightIA = gerarInsightIA(key, ultimoValorFormatado, variacao, dadosParaVariacao);

  // Lógica do Status 
  let tagStatus = "";
  let tagClass = "stable";
  let isPositive = variacao > 0;
  let statusText = "CENÁRIO ESTÁVEL";
  let statusEmoji = "📊";


  // LÓGICA ATUALIZADA (SEM FISCAL E JUROS)
  if (key === 'emprego' && primeiraSerie.includes('Desemprego')) {
    isPositive = variacao < 0; 
  } else if (key === 'inflacao') {
    isPositive = variacao < 0; 
  } else if (key === 'externo' && primeiraSerie.includes('Dólar')) {
    isPositive = variacao < 0; 
  }
  
  if (variacao === 0 || isNaN(variacao) || Math.abs(variacao) < 0.01) {
    statusText = "CENÁRIO ESTÁVEL";
    tagClass = "stable";
    statusEmoji = "📊";
  } else if (isPositive) {
    statusText = "CENÁRIO POSITIVO";
    tagClass = "positive";
    statusEmoji = "✅";
  } else {
    statusText = "CENÁRIO NEGATIVO";
    tagClass = "negative";
    statusEmoji = "❌";
  }

  tagStatus = `<span class="status-tag ${tagClass}">${statusText} ${statusEmoji}</span>`;

  
  // Renderização das Séries Secundárias (mantida a lógica de exibição)
  for (const [nome, serieInfo] of Object.entries(cat.series)) {
    const codigo = serieInfo.codigo;
    const unidade = serieInfo.unidade;
    // Buscando apenas os 12 últimos pontos (já ordenados Antigo->Recente)
    const dados = await fetchBCB(codigo, 12); 
    const ultimoDado = dados[dados.length - 1]; // O último dado é o último elemento
    
    let valorSerie = parseFloat(ultimoDado?.valor || 0);
    let unidadeSerie = unidade;
    
    const valorFormatadoSerie = ultimoDado ? formatarValor(valorSerie, unidadeSerie) : "N/D";


    seriesHTML += `
      <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;">
        <div style="color:var(--text-muted);font-size:1rem;margin-bottom:8px;">${nome}</div>
        <div style="color:var(--text-muted);font-size:0.85rem;margin-bottom:12px;"><strong>${unidadeSerie}</strong></div>
        <div class="value" style="font-size:2.2rem;font-weight:800;margin:12px 0;color:${cat.cor};">${valorFormatadoSerie}</div>
        <div onclick="showMetodologia('${nome}')" style="font-size:0.8rem; color: ${cat.cor}; font-weight: bold; margin-top: 10px; cursor:pointer; text-decoration:underline;">(i) Ver Metodologia</div>
        </div>`;
  }
  seriesHTML += "</div>";

  // Estrutura Principal da Categoria
  content.innerHTML = `
    <h1 style="font-size:4rem;font-family:'Space Grotesk';margin:20px 0;">
      <span style="background:linear-gradient(135deg,${cat.cor},var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
        ${cat.titulo}
      </span>
      </h1>
    
    <div class="main-indicator-box" style="--cat-color: ${cat.cor};">
        <div class="main-indicator-value-group">
            <div class="main-indicator-value-label">Última Leitura de <strong>${primeiraSerie}</strong> (${unidadeDisplay})</div>
            <div class="main-indicator-value" style="color:${cat.cor};">
                ${ultimoValorFormatado}
            </div>
        </div>
        <div>
            ${tagStatus}
            <div style="font-size:0.9rem; color:var(--text-muted); margin-top:10px; text-align:right;">Data: ${formatarData(ultimo.data, 'completo')}</div>
        </div>
    </div>
    
    <div class="ia-analysis" style="--cat-color: ${cat.cor}">
        <h3 style="color:${cat.cor}; font-size:1.6rem; margin-bottom: 20px; font-family:'Space Grotesk'; display:flex; align-items:center; gap:12px;">
          🤖 ANÁLISE OPERACIONAL (Econo.AI)
        </h3>
        ${insightIA}
    </div>
    
    <div style="display:flex; gap:30px; margin-bottom: 50px; width: 100%; max-width: 1000px;">
        <div class="explicacao" style="flex:1; background:var(--bg); border:2px solid ${cat.cor}50; border-radius:12px; padding:25px; font-size:1.15rem; line-height:1.9;">
            <h3 style="color:${cat.cor}; font-size:1.3rem; margin-bottom: 16px; display:flex; align-items:center; gap:10px;">
                📌 Entenda o indicador
              </h3>
            ${cat.explicacao}
        </div>
    
        <div class="impacto" style="flex:1; background:var(--bg); border:2px solid ${cat.cor}50; border-radius:12px; padding:25px; font-size:1.15rem; line-height:1.9;">
              <h3 style="color:${cat.cor}; font-size:1.3rem; margin-bottom: 16px; display:flex; align-items:center; gap:10px;">
                💰 Como isso afeta seu bolso
              </h3>
              ${cat.impacto}
        </div>
    </div>

    
    <h2 style="font-family:'Space Grotesk'; font-size:1.8rem; color:${cat.cor}; margin-top:50px; margin-bottom:15px; text-align: center;">
        Gráfico: ${chartTitle}
    </h2>
    <canvas id="bigchart" style="height: 300px !important; max-height: 300px !important;"></canvas>

    <h2 style="font-family:'Space Grotesk'; font-size:2.2rem; color:var(--text); margin-top:50px; margin-bottom:30px;">
        Séries Detalhadas
    </h2>
    ${seriesHTML}
  `;

  if (dadosGrafico.length > 1) {
    const datasets = [{
          label: primeiraSerie,
          data: dadosGrafico.map(d => parseFloat(d.valor) || 0),
          borderColor: cat.cor,
          backgroundColor: cat.cor + '30',
          tension: 0.0, 
          fill: true,
          pointRadius: 4, // Juros foi removido, então volta o ponto normal
          borderWidth: 4,
          stepped: false // Juros foi removido, então volta linha normal
    }];
    
    // Remoção da lógica de dataset secundário SELIC


    // Configurações do gráfico
    new Chart(document.getElementById("bigchart"), {
        type: 'line',
        data: {
          labels: dadosGrafico.map(d => formatarData(d.data, 'eixo')), 
          datasets: datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, 
          aspectRatio: 2.5,
          plugins: { 
            // A legenda só aparece se tiver mais de um dataset, o que agora é raro
            legend: { display: datasets.length > 1, labels: { color: '#e8eef7' } },
            tooltip: {
              callbacks: {
                label: function(context) {
                    const label = context.dataset.label || '';
                    let valor = context.parsed.y;
                    let unidade = cat.series[primeiraSerie]?.unidade || '%';
                    
                    // Lógica SELIC removida
                    
                    return `${label}: ${formatarValor(valor, unidade)}`;
                }
              }
            }
          },
          scales: { 
            x: { 
              ticks: { color: '#8b949e', maxRotation: 45, minRotation: 45, callback: function(val) { return this.getLabelForValue(val); } },
              grid: { color: '#30363d50' }
            }, 
            y: { 
              ticks: { 
                color: '#8b949e',
                callback: function(value) { 
                  let unidadeY = cat.series[primeiraSerie]?.unidade || '%';
                  let valorY = value;
                  
                  return formatarValor(valorY, unidadeY);
                }
              },
              grid: { color: '#30363d50' }
            } 
          }
        }
    });
 }
}

function showHome() {
  setActiveButton('home');
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("category-page").classList.add("hidden");
  renderHome();
}

renderHome();