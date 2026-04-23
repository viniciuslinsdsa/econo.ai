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
    return JSON.parse(cached);
  }
  
  const hoje = new Date();
  const hojeString = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`;
  
  for (let proxyIndex = 0; proxyIndex < proxies.length; proxyIndex++) {
    const proxyUrl = proxies[proxyIndex](apiUrl);
    try {
      const res = await fetch(proxyUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      let dadosBrutos = proxyIndex === 0 ? JSON.parse(data.contents) : data;
      
      const dadosTratados = dadosBrutos
          .map(item => ({ data: parseBCBDateToISO(item.data), valor: item.valor }))
          .filter(d => d.data && d.valor && d.data <= hojeString)
          .sort((a, b) => a.data.localeCompare(b.data));

      if (dadosTratados.length > 0) {
          localStorage.setItem(cacheKey, JSON.stringify(dadosTratados));
          localStorage.setItem(`${cacheKey}_time`, Date.now().toString());
      }
      return dadosTratados;
    } catch (err) { console.warn(`Proxy ${proxyIndex} falhou:`, err.message); }
  }
  return cached ? JSON.parse(cached) : [];
}

function formatarValor(valor, unidade) {
  if (isNaN(valor)) return "N/D";
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function setActiveButton(page) {
  document.querySelectorAll('nav button').forEach(button => button.classList.remove('active'));
  const button = document.querySelector(`nav button[data-page="${page}"]`);
  if (button) button.classList.add('active');
}

function gerarInsightIA(key, ultimoValor, variacao, dados, primeiraSerie) {
    const cat = CATEGORIAS[key];
    if (dados.length === 0) return `<p>⚠️ Dados indisponíveis.</p>`;
    const varAbs = Math.abs(variacao).toFixed(2);
    const isDesemprego = key === 'emprego' && primeiraSerie && primeiraSerie.includes('Desemprego');

    const insights = {
        atividade: {
            pos: `A leitura de <strong>${ultimoValor}</strong> sugere expansão econômica (+${varAbs}%).`,
            neg: `A leitura de <strong>${ultimoValor}</strong> aponta contração de ${varAbs}%.`,
            stable: `A atividade em <strong>${ultimoValor}</strong> mostra estabilidade.`
        },
        inflacao: {
            pos: `Aceleração para <strong>${ultimoValor}</strong> indica pressão nos preços.`,
            neg: `Desaceleração para <strong>${ultimoValor}</strong> alivia o custo de vida.`,
            stable: `Inflação em <strong>${ultimoValor}</strong> segue estável.`
        },
        emprego_desemprego: {
            pos: `Desemprego subiu para <strong>${ultimoValor}</strong>, sinal de alerta.`,
            neg: `Desemprego caiu para <strong>${ultimoValor}</strong>, cenário favorável.`,
            stable: `Taxa de desocupação em <strong>${ultimoValor}</strong> sem grandes mudanças.`
        },
        emprego_renda: {
            pos: `Renda subiu para <strong>${ultimoValor}</strong>, maior poder de compra.`,
            neg: `Renda caiu para <strong>${ultimoValor}</strong>, poder de compra afetado.`,
            stable: `Renda em <strong>${ultimoValor}</strong> permanece estável.`
        }
    };

    let blocoKey = (key === 'emprego') ? (isDesemprego ? 'emprego_desemprego' : 'emprego_renda') : key;
    const bloco = insights[blocoKey];
    let analise = (variacao > 0.01) ? bloco.pos : (variacao < -0.01 ? bloco.neg : bloco.stable);

    return `<p>${analise}</p>`;
}

async function renderHome() {
  const container = document.getElementById('cards');
  container.innerHTML = '<div class="loading">Buscando dados...</div>';
  let html = '';
  const resultados = [];

  for (const [key, cat] of Object.entries(CATEGORIAS)) {
    const primeira = Object.keys(cat.series)[0];
    const dados = await fetchBCB(cat.series[primeira].codigo, 6);
    if (dados.length < 2) continue;
    
    const ultimo = dados[dados.length - 1].valor;
    const variacao = ((ultimo - dados[dados.length - 2].valor) / dados[dados.length - 2].valor * 100).toFixed(2);
    resultados.push({ key, cat, valor: ultimo, variacao, dadosGrafico: dados.slice(-5) });

    const classCor = (variacao >= 0) ? (['inflacao', 'emprego'].includes(key) ? 'down' : 'up') : (['inflacao', 'emprego'].includes(key) ? 'up' : 'down');

    html += `
      <div class="card" onclick="showCategory('${key}')">
        <h3>${cat.titulo}</h3>
        <div class="value">${formatarValor(ultimo, "")}</div>
        <div class="var ${classCor}">${variacao}%</div>
        <canvas id="mini-${key}" height="100"></canvas>
      </div>`;
  }
  container.innerHTML = html;
  resultados.forEach(res => {
    const ctx = document.getElementById(`mini-${res.key}`);
    if (ctx) new Chart(ctx, { type: 'line', data: { labels: res.dadosGrafico.map(d => d.data), datasets: [{ data: res.dadosGrafico.map(d => d.valor), borderColor: res.cat.cor, fill: false }] }, options: { scales: { x: { display: false }, y: { display: false } }, plugins: { legend: { display: false } } } });
  });
}

async function showCategory(key) {
  setActiveButton(key);
  document.getElementById("home").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");
  const cat = CATEGORIAS[key];
  const content = document.getElementById("category-content");
  content.innerHTML = `<h1>${cat.titulo}</h1><p>${cat.explicacao}</p>`;
  // Renderização detalhada da categoria...
}

function showHome() {
  setActiveButton('home');
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("category-page").classList.add("hidden");
  renderHome();
}

renderHome();
