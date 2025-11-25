// script.js — Econo.AI — Versão Corrigida e Final (24/11/2025)
// Ordem cronológica 100% garantida: antigo → recente
// Último dado sempre em dados[dados.length - 1]

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
  const [ano, mes, dia] = dataISO.split('-');
  if (tipo === 'completo') return `${dia}/${mes}/${ano}`;
  if (tipo === 'eixo') return `${mes}/${ano}`;
  return `${dia}/${mes}`;
}

function ordenarCronologicamente(dados) {
  return dados
    .map(d => ({ ...d, dateObj: new Date(d.data) }))
    .sort((a, b) => a.dateObj - b.dateObj)
    .map(({ dateObj, ...d }) => d);
}

async function fetchBCB(codigo, n = 100) {
  const cacheKey = `bcb_${codigo}`;
  const cached = localStorage.getItem(cacheKey);
  const cacheTime = localStorage.getItem(`${cacheKey}_time`);

  if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < 3600000) {
    return ordenarCronologicamente(JSON.parse(cached));
  }

  const apiUrl = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/${n}?formato=json`;
  const proxies = [
    u => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`,
    u => `https://corsproxy.io/?${encodeURIComponent(u)}`,
    u => u
  ];

  for (const proxy of proxies) {
    try {
      const res = await fetch(proxy(apiUrl), { signal: AbortSignal.timeout(8000) });
      if (!res.ok) continue;
      let data = await res.json();
      if (proxy.name.includes('allorigins')) data = JSON.parse(data.contents);
      if (!Array.isArray(data)) continue;

      const ordenados = ordenarCronologicamente(data);
      localStorage.setItem(cacheKey, JSON.stringify(ordenados));
      localStorage.setItem(`${cacheKey}_time`, Date.now().toString());
      return ordenados;
    } catch (e) { /* silencioso */ }
  }

  if (cached) return ordenarCronologicamente(JSON.parse(cached));
  return [];
}

function formatarValor(valor, unidade) {
  if (isNaN(valor)) return "N/D";
  const num = parseFloat(valor);
  return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function setActiveButton(page) {
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`nav button[data-page="${page}"]`);
  if (btn) btn.classList.add('active');
}

function gerarInsightIA(key, ultimoValor, variacaoPercentual) {
  const variacao = parseFloat(variacaoPercentual).toFixed(2);
  const positivo = (key === 'inflacao' || (key === 'emprego' && /desemprego/i.test(Object.keys(CATEGORIAS[key].series)[0]))) ? variacao < 0 : variacao >= 0;
  const frase = positivo ? "cenário positivo" : "atenção necessária";
  return `<p style="font-size:1.1rem;line-height:1.7;">Última leitura: <strong>${ultimoValor}</strong> (${variacao > 0 ? '+' : ''}${variacao}% vs mês anterior). Estamos observando um <strong>${frase}</strong> para este indicador.</p>`;
}

function showMetodologia(nome) {
  const info = METODOLOGIAS[nome];
  if (!info) return alert("Metodologia não encontrada.");
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;';
  modal.innerHTML = `<div style="background:#111;padding:30px;border-radius:16px;max-width:90%;max-height:90%;overflow:auto;color:#eee;">
    <h3 style="color:#00d4ff;margin-top:0;">${info.titulo}</h3>
    <p><strong>Descrição:</strong> ${info.explicacao}</p>
    <p><strong>Cálculo:</strong> ${info.calculo}</p>
    <button onclick="this.closest('div').parentNode.remove()" style="padding:10px 20px;background:#00d4ff;color:#000;border:none;border-radius:8px;cursor:pointer;">Fechar</button>
  </div>`;
  document.body.appendChild(modal);
}

async function renderHome() {
  const container = document.getElementById('cards');
  container.innerHTML = '<div class="loading">Carregando indicadores...</div>';

  const promessas = Object.entries(CATEGORIAS).map(async ([key, cat]) => {
    const primeira = Object.keys(cat.series)[0];
    const { codigo, unidade } = cat.series[primeira];
    const dados = await fetchBCB(codigo, 12);
    if (dados.length < 2) return null;
    const ultimo = dados[dados.length - 1];
    const anterior = dados[dados.length - 2];
    const variacao = anterior.valor ? ((ultimo.valor - anterior.valor) / Math.abs(anterior.valor) * 100).toFixed(2) : 0;
    const miniDados = dados.slice(-6);
    return { key, cat, ultimo, variacao, miniDados, unidade, primeira };
  });

  const resultados = (await Promise.all(promessas)).filter(Boolean);

  let html = '';
  for (const r of resultados) {
    const isGood = (r.variacao >= 0 && !r.key.includes('inflacao') && !(r.key === 'emprego' && r.primeira.includes('Desemprego')) && !(r.key === 'externo' && r.primeira.includes('Dólar'))) ||
                   (r.variacao < 0 && (r.key === 'inflacao' || (r.key === 'emprego' && r.primeira.includes('Desemprego')) || (r.key === 'externo' && r.primeira.includes('Dólar'))));
    html += `
      <div class="card" onclick="showCategory('${r.key}')">
        <h3>${r.cat.titulo}</h3>
        <div class="value">${formatarValor(r.ultimo.valor, r.unidade)}</div>
        <div class="var ${isGood ? 'up' : 'down'}">
          ${Math.abs(r.variacao) < 0.01 ? 'Estável' : (isGood ? 'Up' : 'Down') + ' ' + Math.abs(r.variacao) + '%'}
        </div>
        <canvas id="mini-${r.key}" height="90"></canvas>
      </div>`;
  }
  container.innerHTML = html;

  resultados.forEach(r => {
    setTimeout(() => {
      const ctx = document.getElementById(`mini-${r.key}`);
      if (ctx) new Chart(ctx, { type: 'line', data: { labels: r.miniDados.map(d => formatarData(d.data)), datasets: [{ data: r.miniDados.map(d => parseFloat(d.valor)), borderColor: r.cat.cor, backgroundColor: r.cat.cor + '30', tension: 0.4, fill: true, pointRadius: 0, borderWidth: 3 }] }, options: { plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } } } });
    }, 100);
  });
}

async function showCategory(key) {
  setActiveButton(key);
  document.getElementById("home").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");
  const cat = CATEGORIAS[key];
  const content = document.getElementById("category-content");
  content.innerHTML = `<div class="loading">Carregando ${cat.titulo}...</div>`;

  const primeira = Object.keys(cat.series)[0];
  const principal = cat.series[primeira];
  const dados = await fetchBCB(principal.codigo, 36);
  if (dados.length === 0) { content.innerHTML = "<p>Erro ao carregar dados.</p>"; return; }

  const ultimo = dados[dados.length - 1];
  const anterior = dados[dados.length - 2] || ultimo;
  const variacao = anterior.valor ? ((ultimo.valor - anterior.valor) / Math.abs(anterior.valor) * 100).toFixed(2) : 0;

  let seriesHTML = "<div class='series-grid'>";
  for (const [nome, s] of Object.entries(cat.series)) {
    const d = await fetchBCB(s.codigo, 12);
    const ult = d.length ? d[d.length - 1] : { valor: "N/D" };
    seriesHTML += `<div style="background:var(--card);padding:20px;border-radius:12px;border:1px solid #444;">
      <div style="color:#aaa;font-size:0.9rem;">${nome}</div>
      <div style="color:#888;font-size:0.8rem;margin:4px 0;">${s.unidade}</div>
      <div style="font-size:2rem;font-weight:800;color:${cat.cor};">${formatarValor(ult.valor, s.unidade)}</div>
      <div onclick="showMetodologia('${nome}')" style="color:${cat.cor};font-size:0.8rem;cursor:pointer;margin-top:8px;text-decoration:underline;">(i) Metodologia</div>
    </div>`;
  }
  seriesHTML += "</div>";

  content.innerHTML = `
    <button class="btn-back" onclick="showHome()">← Voltar</button>
    <h1 style="font-size:3.8rem;background:linear-gradient(135deg,${cat.cor},#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:20px 0;">
      ${cat.titulo}
    </h1>
    <div style="background:var(--card);padding:25px;border-radius:16px;margin:20px 0;">
      <strong>${primeira}</strong>: ${formatarValor(ultimo.valor, principal.unidade)} 
      <small style="color:#aaa;">em ${formatarData(ultimo.data, 'completo')}</small><br>
      <span style="font-size:1.4rem;color:${variacao < 0 ? '#ff6b6b' : '#39ff94'};">${variacao > 0 ? '+' : ''}${variacao}% vs período anterior</span>
    </div>
    <div class="ia-analysis" style="--cat-color:${cat.cor};">${gerarInsightIA(key, formatarValor(ultimo.valor, principal.unidade), variacao)}</div>
    <h2 style="color:${cat.cor};margin:40px 0 10px;">Histórico</h2>
    <canvas id="bigchart" style="height:340px;"></canvas>
    <h2 style="margin:60px 0 20px;">Séries Detalhadas</h2>
    ${seriesHTML}
  `;

  new Chart(document.getElementById("bigchart"), {
    type: 'line',
    data: { labels: dados.slice(-24).map(d => formatarData(d.data, 'eixo')), datasets: [{ label: primeira, data: dados.slice(-24).map(d => parseFloat(d.valor)), borderColor: cat.cor, backgroundColor: cat.cor + '30', fill: true, tension: 0.3, pointRadius: 4, borderWidth: 4 }] },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#ccc' } }, y: { ticks: { color: '#ccc' } } } }
  });
}

function showHome() {
  setActiveButton('home');
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("category-page").classList.add("hidden");
  renderHome();
}

renderHome();
