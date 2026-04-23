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
    }
};

const CATEGORIAS = {
  atividade: {
    titulo: "Atividade Econômica", cor: "#00d4ff",
    explicacao: "Esses indicadores medem o <strong>pulso da produção nacional</strong>. O PIB é a fotografia anual da riqueza gerada; o IBC-Br é o raio-X mensal que antecipa o resultado. Quando a produção industrial avança e o varejo cresce, a economia está em expansão — empresas contratam mais, salários sobem e o crédito se afrouxa.",
    series: { 
      "PIB (índice)": { codigo: 22109, unidade: "Índice (2018=100)" }, 
      "IBC-Br (prévia do PIB)": { codigo: 24363, unidade: "Índice (2003=100)" }, 
      "Produção Industrial": { codigo: 21859, unidade: "% (variação mensal)" }, 
      "Varejo": { codigo: 1455, unidade: "% (variação mensal)" } 
    },
    impacto: "Na prática: quando a atividade econômica cresce, surgem <strong>mais vagas, mais crédito e mais oportunidade</strong>. Quando recua, o mercado de trabalho esfria, empresas adiam investimentos e o consumo das famílias cai. É o ciclo econômico funcionando — e saber onde ele está te ajuda a tomar decisões melhores."
  },
  inflacao: {
    titulo: "Inflação", cor: "#ff6b6b",
    explicacao: "Inflação é a <strong>velocidade com que os preços sobem</strong>. O IPCA é o termômetro oficial usado pelo Banco Central para definir a política monetária — a meta vigente é de 3% ao ano, com tolerância até 4,5%. O IGP-M reflete mais o atacado e as commodities; o INPC, o custo de vida de quem ganha até 5 salários mínimos.",
    series: { 
      "IPCA (inflação oficial)": { codigo: 433, unidade: "% (variação mensal)" }, 
      "IGP-M (aluguéis)": { codigo: 189, unidade: "% (variação mensal)" }, 
      "INPC (baixa renda)": { codigo: 188, unidade: "% (variação mensal)" } 
    },
    impacto: "Quando a inflação corre acima da meta, o Banco Central sobe os juros para desaquecer a economia — <strong>crédito fica mais caro, financiamentos encarecem</strong> e o consumo cai. No dia a dia, isso aparece na conta de mercado, no reajuste do aluguel (IGP-M) e na pressão sobre o salário real. Inflação sob controle é condição básica para o poder de compra não se deteriorar."
  },
  emprego: {
    titulo: "Emprego", cor: "#39ff94",
    explicacao: "O mercado de trabalho é onde a economia se torna concreta para a maioria dos brasileiros. A taxa de desocupação mede a parcela da força de trabalho que está sem emprego e ativamente buscando vaga. A renda média real já desconta a inflação — é o que o trabalhador efetivamente consegue comprar com o salário recebido.",
    series: { 
      "Taxa de Desemprego": { codigo: 24369, unidade: "%" }, 
      "Renda Média do Trabalho": { codigo: 24379, unidade: "R$" } 
    },
    impacto: "Desemprego em queda significa <strong>mais famílias com renda, mais consumo e mais arrecadação</strong> — um ciclo que sustenta o crescimento. Quando a renda média sobe acima da inflação, o trabalhador ganha poder de compra real. O inverso também é verdadeiro: desemprego alto comprime o consumo e tende a puxar salários para baixo."
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

function parseBCBDateToISO(dateStr) {
  if (!dateStr) return '';
  if (dateStr.includes('-')) return dateStr;
  const [day, month, year] = dateStr.split('/');
  if (!day || !month || !year) return '';
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

async function fetchBCB(codigo, n = 100) { 
  const proxies = [
    (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    (url) => url
  ];
  
  const apiUrl = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/${n}?formato=json`;
  const cacheKey = `bcb_${codigo}_v2`; 
  const cached = localStorage.getItem(cacheKey);
  const cacheTime = localStorage.getItem(`${cacheKey}_time`);
  
  if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < 3600000) {
    const dadosEmCache = JSON.parse(cached);
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
        
        const dadosTratados = dadosBrutos
            .map(item => ({
                data: parseBCBDateToISO(item.data),
                valor: item.valor
            }))
            .filter(d => d.data && d.valor && d.data <= hojeString)
            .sort((a, b) => a.data.localeCompare(b.data));

        if (dadosTratados.length > 0) {
            localStorage.setItem(cacheKey, JSON.stringify(dadosTratados));
            localStorage.setItem(`${cacheKey}_time`, Date.now().toString());
        }
        
        return dadosTratados;

      } catch (err) {
        console.warn(`Tentativa ${tentativa + 1} falhou no proxy ${proxyIndex}:`, err.message);
      }
    }
  }
  return cached ? JSON.parse(cached) : [];
}

function formatarValor(valor, unidade) {
  if (isNaN(valor)) return "N/D";
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function setActiveButton(page) {
  document.querySelectorAll('nav button').forEach(button => button.classList.remove('active'));
  if (page) {
    const button = document.querySelector(`nav button[data-page="${page}"]`);
    if (button) button.classList.add('active');
  }
}

function gerarInsightIA(key, ultimoValor, variacao, dados, primeiraSerie) {
    const cat = CATEGORIAS[key];
    const ultimoDadoIndex = dados.length > 0 ? dados.length - 1 : -1;
    if (ultimoDadoIndex === -1) return `<p>⚠️ Dados indisponíveis.</p>`;

    const ultimaData = dados[ultimoDadoIndex].data; 
    const dataFormatada = formatarData(ultimaData, 'completo');
    const varAbs = Math.abs(variacao).toFixed(2);
    const isDesemprego = key === 'emprego' && primeiraSerie && primeiraSerie.includes('Desemprego');

    const insights = {
        atividade: {
            pos: `A leitura de <strong style="color:${cat.cor}">${ultimoValor}</strong> representa expansão em relação ao período anterior. O avanço de ${varAbs}% sugere que o nível de atividade segue em trajetória ascendente — contexto favorável para geração de emprego e maior utilização da capacidade instalada.`,
            neg: `A leitura de <strong style="color:${cat.cor}">${ultimoValor}</strong> registrou recuo de ${varAbs}% ante o período anterior. Desaceleração isolada não configura recessão, mas dois ou mais trimestres negativos seguidos são o sinal clássico de contração econômica.`,
            stable: `A leitura de <strong style="color:${cat.cor}">${ultimoValor}</strong> manteve-se praticamente estável. Estabilidade pode indicar acomodação num patamar já atingido.`
        },
        inflacao: {
            pos: `O indicador marcou <strong style="color:${cat.cor}">${ultimoValor}</strong>, aceleração de ${varAbs}% frente ao mês anterior. Pressão inflacionária crescente tende a manter o Banco Central vigilante quanto à Selic.`,
            neg: `O indicador marcou <strong style="color:${cat.cor}">${ultimoValor}</strong>, desaceleração de ${varAbs}% em relação ao período anterior. Alivia a pressão sobre o poder de compra.`,
            stable: `O indicador marcou <strong style="color:${cat.cor}">${ultimoValor}</strong>, variação mínima frente ao mês anterior.`
        },
        emprego_desemprego: {
            pos: `A taxa de desocupação avançou para <strong style="color:${cat.cor}">${ultimoValor}</strong>, alta de ${varAbs}% ante o período anterior. Desemprego em alta comprime a renda e reduz o consumo.`,
            neg: `A taxa de desocupação recuou para <strong style="color:${cat.cor}">${ultimoValor}</strong>, queda de ${varAbs}% ante o período anterior. Menos desemprego significa mais famílias com renda regular.`,
            stable: `A taxa de desocupação se manteve em <strong style="color:${cat.cor}">${ultimoValor}</strong>, sem variação relevante.`
        },
        emprego_renda: {
            pos: `A renda média real avançou para <strong style="color:${cat.cor}">${ultimoValor}</strong>, alta de ${varAbs}% ante o período anterior. Ganho real de renda significa que o trabalhador está conseguindo comprar mais.`,
            neg: `A renda média real recuou para <strong style="color:${cat.cor}">${ultimoValor}</strong>, queda de ${varAbs}% ante o período anterior. O poder de compra das famílias se deteriora.`,
            stable: `A renda média real se manteve em <strong style="color:${cat.cor}">${ultimoValor}</strong>, preservando o poder de compra atual.`
        }
    };

    let blocoKey = (key === 'emprego') ? (isDesemprego ? 'emprego_desemprego' : 'emprego_renda') : key;
    const bloco = insights[blocoKey];
    let analise = (variacao > 0.01) ? bloco.pos : (variacao < -0.01 ? bloco.neg : bloco.stable);

    return `
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px; font-weight:600;">Último dado disponível · ${dataFormatada} · variação de ${variacao >= 0 ? '+' : ''}${variacao.toFixed(2)}%</p>
      <p style="font-size:1.05rem; line-height:1.8;">${analise}</p>
    `;
}

async function renderHome() {
  const container = document.getElementById('cards');
  container.innerHTML = '<div class="loading">Buscando dados no Banco Central...</div>';
  let html = '';
  const resultados = [];
  
  for (const [key, cat] of Object.entries(CATEGORIAS)) {
    const primeira = Object.keys(cat.series)[0];
    const dados = await fetchBCB(cat.series[primeira].codigo, 6);
    if (dados.length < 2) continue;
    
    const ultimo = dados[dados.length - 1].valor;
    const variacao = ((ultimo - dados[dados.length - 2].valor) / dados[dados.length - 2].valor * 100).toFixed(2);
    resultados.push({ key, cat, valor: ultimo, variacao, dadosGrafico: dados.slice(-5), primeira });
  }
  
  for (const { key, cat, valor, variacao, dadosGrafico, primeira } of resultados) {
    const isUp = parseFloat(variacao) >= 0;
    let classCor = isUp ? 'up' : 'down';
    if (key === 'inflacao' || (key === 'emprego' && primeira.includes('Desemprego'))) {
        classCor = isUp ? 'down' : 'up';
    }

    html += `
      <div class="card" onclick="showCategory('${key}')">
        <h3>${cat.titulo}</h3>
        <div class="value">${formatarValor(valor, "")}</div>
        <div class="var ${classCor}">${isUp ? '▲' : '▼'} ${Math.abs(variacao)}%</div>
        <canvas id="mini-${key}" height="100"></canvas>
      </div>`;
  }
  container.innerHTML = html;
  resultados.forEach(({ key, cat, dadosGrafico }) => {
    const ctx = document.getElementById(`mini-${key}`);
    if (ctx) new Chart(ctx, { type: 'line', data: { labels: dadosGrafico.map(d => d.data), datasets: [{ data: dadosGrafico.map(d => d.valor), borderColor: cat.cor, backgroundColor: cat.cor + '30', fill: true, pointRadius: 0 }] }, options: { plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } } });
  });
}

async function showCategory(key) {
  setActiveButton(key);
  document.getElementById("home").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");
  const cat = CATEGORIAS[key];
  const content = document.getElementById("category-content");
  
  const primeiraSerie = Object.keys(cat.series)[0];
  const dados = await fetchBCB(cat.series[primeiraSerie].codigo, 24);
  const ultimo = dados[dados.length - 1];
  const variacao = ((ultimo.valor - dados[dados.length - 2].valor) / dados[dados.length - 2].valor * 100);
  
  content.innerHTML = `
    <h1>${cat.titulo}</h1>
    <div class="ia-analysis" style="--cat-color: ${cat.cor}">
        ${gerarInsightIA(key, formatarValor(ultimo.valor, ""), variacao, dados, primeiraSerie)}
    </div>
    <div class="info-container">
        <div class="explicacao">${cat.explicacao}</div>
        <div class="impacto">${cat.impacto}</div>
    </div>
    <canvas id="bigchart"></canvas>
  `;

  new Chart(document.getElementById("bigchart"), {
    type: 'line',
    data: {
      labels: dados.map(d => formatarData(d.data, 'eixo')),
      datasets: [{ label: primeiraSerie, data: dados.map(d => d.valor), borderColor: cat.cor, fill: false }]
    }
  });
}

function showHome() {
  setActiveButton('home');
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("category-page").classList.add("hidden");
  renderHome();
}

renderHome();
