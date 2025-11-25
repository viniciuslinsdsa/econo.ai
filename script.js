const METODOLOGIAS = {
    "PIB (índice)": {
        titulo: "PIB (Produto Interno Bruto)",
        explicacao: "Representa a soma de todos os bens e serviços finais produzidos no Brasil em um determinado período. É o principal indicador de riqueza e atividade econômica. A série em índice (base 2018=100) mostra a evolução do volume produzido, com o ano-base como referência (100).",
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
 * Função auxiliar para converter data do formato dd/mm/yyyy para yyyy-mm-dd
 */
function parseBCBDateToISO(dateStr) {
  if (!dateStr) return '';
  const [day, month, year] = dateStr.split('/');
  if (!day || !month || !year) return '';
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

/**
 * Novo fetchBCB: CORRIGIDO para garantir ordem cronológica (Antigo -> Recente)
 * Removemos o parâmetro de reverseOrder que estava invertendo a lógica.
 */
async function fetchBCB(codigo, n = 100) { 
  const proxies = [
    (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    (url) => url
  ];
  
  const apiUrl = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/${n}?formato=json`;
  const cacheKey = `bcb_${codigo}`;
  const cached = localStorage.getItem(cacheKey);
  const cacheTime = localStorage.getItem(`${cacheKey}_time`);
  
  // Se o cache existir e for recente (menos de 1 hora)
  if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < 3600000) {
    const dadosEmCache = JSON.parse(cached);
    // Retorna direto do cache. Assumimos que o cache já foi salvo na ordem correta (Antigo -> Recente)
    // Pequeno delay para simular assincronia suave se necessário, mas pode ser removido
    await new Promise(r => setTimeout(r, 50)); 
    return dadosEmCache;
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
        
        // Filtra datas futuras ou inválidas
        const dadosFiltrados = dadosBrutos.filter(d => {
          const dataISO = parseBCBDateToISO(d.data);
          return d.data && d.valor && dataISO <= hojeString;
        });

        // A API do BCB (endpoint /ultimos/) geralmente retorna do mais antigo para o mais novo.
        // Se quisermos ordem cronológica (para gráficos), mantemos como está.
        // Se quiséssemos o mais recente primeiro (para tabelas), inverteríamos.
        // Para a Econo.AI, queremos CRONOLÓGICO: [Antigo, ..., Novo]
        
        if (dadosFiltrados.length > 0) {
            // Salvamos no cache
            localStorage.setItem(cacheKey, JSON.stringify(dadosFiltrados));
            localStorage.setItem(`${cacheKey}_time`, Date.now().toString());
        }
        
        return dadosFiltrados;

      } catch (err) {
        console.warn(`Tentativa ${tentativa + 1} falhou no proxy ${proxyIndex}:`, err.message);
        if (tentativa < 1) await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  }
  
  // Fallback final: se tudo falhar, tenta o cache mesmo expirado
  if (cached) {
    return JSON.parse(cached);
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
    
    // Como agora os dados estão em ordem cronológica (Antigo -> Novo), o último dado é o último do array.
    const ultimoDadoIndex = dados.length > 0 ? dados.length - 1 : -1;

    if (ultimoDadoIndex === -1) {
        return `<p style="font-size:1.15rem;">⚠️ Ops! Não consegui acessar dados recentes para <strong>${cat.titulo}</strong>. Tente em instantes.</p>`;
    }

    const ultimaData = dados[ultimoDadoIndex].data; 
    const dataFormatada = formatarData(ultimaData, 'completo');
    
    let analise = "";
    let texto = `<p style="font-size:1.1rem; margin-bottom:12px;">Última Leitura em <strong>${dataFormatada}</strong>: <strong style="color:${cat.cor};">${ultimoValor}</strong> (variação de <strong>${variacao.toFixed(2)}%</strong> em relação ao anterior).</p>`;
    
    // Lógica de análise simplificada
    if (key === 'atividade') {
        analise = variacao > 0 ? "A economia está em expansão, com produção e vendas em alta. Isso pode indicar um ciclo positivo." : "Há uma desaceleração na atividade, o que pode afetar investimentos.";
    } else if (key === 'inflacao') {
        analise = variacao > 0 ? "Pressão inflacionária aumentando, o que pode levar a juros mais altos." : "Inflação controlada, favorável para o consumo.";
    } 
    
    return texto + `<p style="font-size:1.15rem;">${analise}</p>`;
}

async function renderHome() {
  const container = document.getElementById('cards');
  container.innerHTML = '<div class="loading">Carregando dados...</div>';
  
  const categorias = Object.entries(CATEGORIAS);
  const resultados = [];
  
  for (const [key, cat] of categorias) {
    const primeira = Object.keys(cat.series)[0];
    const codigo = cat.series[primeira].codigo;
    const unidade = cat.series[primeira].unidade;
    
    // Busca os últimos 6 meses para garantir que tenhamos dados suficientes para variação e minigráfico
    const dados = await fetchBCB(codigo, 6);
    if (dados.length < 2) continue;
    
    // Dados estão em ordem: [Antigo, ..., Novo]
    const ultimo = dados[dados.length - 1].valor;
    const penultimo = dados[dados.length - 2].valor;
    const variacao = ((ultimo - penultimo) / penultimo * 100).toFixed(2);
    
    // Pega os últimos 5 para o gráfico (Tail)
    const dadosGrafico = dados.slice(-5);
    
    resultados.push({ key, cat, valor: ultimo, variacao, dadosGrafico, unidade, primeira });
  }
  
  let html = '';
  for (const { key, cat, valor, variacao, dadosGrafico, unidade, primeira } of resultados) {
    let valorParaFormatar = valor;
    let unidadeParaFormatar = unidade;


    const valorFormatado = formatarValor(valorParaFormatar, unidadeParaFormatar);
    
    // TRATAMENTO LÓGICO DE TENDÊNCIA
    let variacaoDisplay = parseFloat(variacao);
    let isUp = variacaoDisplay >= 0;
    
    // Lógica econômica: Para desemprego e inflação, "subir" é geralmente ruim (vermelho/down visualmente, mas aqui tratamos cor)
    // Se quiser que a seta siga o número (sobe=up), mantenha. Se quiser que siga o "bom/ruim", inverta.
    // O padrão visual costuma ser: Seta Para Cima = Número Maior. Cor = Verde/Vermelho dependendo do contexto.
    // Vamos manter Seta = Direção do Número. Cor = Contexto.
    // Mas o CSS usa classe 'up' (verde) e 'down' (vermelho).
    
    let classCor = 'up'; // Default Verde
    
    if (isUp) { // Subiu
        if (key === 'inflacao' || (key === 'emprego' && primeira.includes('Desemprego')) || (key === 'externo' && primeira.includes('Dólar'))) {
             classCor = 'down'; // Subiu, mas é ruim (Vermelho)
        } else {
             classCor = 'up'; // Subiu e é bom (Verde)
        }
    } else { // Caiu
        if (key === 'inflacao' || (key === 'emprego' && primeira.includes('Desemprego')) || (key === 'externo' && primeira.includes('Dólar'))) {
             classCor = 'up'; // Caiu e é bom (Verde)
        } else {
             classCor = 'down'; // Caiu e é ruim (Vermelho)
        }
    }


    html += `
      <div class="card" onclick="showCategory('${key}')">
        <h3>${cat.titulo}</h3>
        <div class="value">${valorFormatado}</div>
        <div class="var ${classCor}">
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

// FUNÇÃO SHOW CATEGORY
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

  if (key === 'inflacao') {
      chartTitle = 'Histórico do IPCA (Inflação Oficial)';
  } else if (key === 'atividade') {
      chartTitle = 'Histórico do PIB (Índice)';
  } else if (key === 'emprego') {
      chartTitle = 'Histórico da Taxa de Desemprego';
  } else if (key === 'externo') {
      chartTitle = 'Histórico da Taxa de Câmbio (Dólar Comercial)';
  }
  
  // Busca dados de variação (2 últimos pontos)
  const dadosParaVariacao = await fetchBCB(codigoPrincipal, 2); 

  // Dados Cronológicos: [Penúltimo, Último]
  const ultimo = dadosParaVariacao[dadosParaVariacao.length - 1] || {};
  const anterior = dadosParaVariacao[dadosParaVariacao.length - 2] || {};
  const valor = parseFloat(ultimo.valor || 0);
  const valorAnterior = parseFloat(anterior.valor || 0);
  const variacao = anterior.valor ? ((valor - valorAnterior) / Math.abs(valorAnterior) * 100) : 0;

  // Busca dados mais extensos para o gráfico grande (24 meses)
  let dadosGrafico = await fetchBCB(codigoPrincipal, 24); 

  let valorDisplay = valor;
  let unidadeDisplay = cat.series[primeiraSerie] ? cat.series[primeiraSerie].unidade : '%';
 
  const ultimoValorFormatado = formatarValor(valorDisplay, unidadeDisplay);
  const insightIA = gerarInsightIA(key, ultimoValorFormatado, variacao, dadosParaVariacao);

  // Lógica do Status 
  let tagStatus = "";
  let tagClass = "stable";
  let isPositive = variacao > 0;
  let statusText = "CENÁRIO ESTÁVEL";
  let statusEmoji = "📊";

  // Ajuste semântico do "Positivo/Negativo"
  if (key === 'emprego' && primeiraSerie.includes('Desemprego')) {
    isPositive = variacao < 0; // Desemprego cair é bom
  } else if (key === 'inflacao') {
    isPositive = variacao < 0; // Inflação cair é bom
  } else if (key === 'externo' && primeiraSerie.includes('Dólar')) {
    isPositive = variacao < 0; // Dólar cair é bom (geralmente, para inflação)
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

  
  // Renderização das Séries Secundárias
  for (const [nome, serieInfo] of Object.entries(cat.series)) {
    const codigo = serieInfo.codigo;
    const unidade = serieInfo.unidade;
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
          pointRadius: 4,
          borderWidth: 4,
          stepped: false
    }];
    
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
            legend: { display: datasets.length > 1, labels: { color: '#e8eef7' } },
            tooltip: {
              callbacks: {
                label: function(context) {
                    const label = context.dataset.label || '';
                    let valor = context.parsed.y;
                    let unidade = cat.series[primeiraSerie]?.unidade || '%';
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