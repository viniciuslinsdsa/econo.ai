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
  },
  externo: {
    titulo: "Setor Externo", cor: "#06d6a0",
    explicacao: "O setor externo revela <strong>como o Brasil se posiciona no comércio global</strong>. O câmbio reflete a oferta e demanda por dólares no mercado brasileiro — e influencia desde o preço da gasolina até o custo de importar insumos industriais. A balança comercial mostra se o país está ganhando ou perdendo dólares nas trocas com o exterior. As reservas internacionais são o colchão de segurança do BCB.",
    series: { 
      "Dólar Comercial": { codigo: 3698, unidade: "R$/US$" }, 
      "Balança Comercial": { codigo: 22707, unidade: "US$ Milhões" }, 
      "Reservas Internacionais": { codigo: 3546, unidade: "US$ Milhões" } 
    },
    impacto: "Dólar alto encarece <strong>importações, combustíveis, eletrônicos e passagens internacionais</strong> — mas beneficia exportadores e quem tem receita em dólar. Superávit na balança comercial significa entrada líquida de divisas, o que ajuda a estabilizar o câmbio. Reservas robustas dão ao BCB munição para intervir em momentos de turbulência no mercado de câmbio."
  }
};

function formatarData(dataISO, tipo = 'mini') {
  if (!dataISO) return 'N/D';
  // Agora dataISO vem sempre como yyyy-mm-dd do fetchBCB, então o split funciona corretamente
  const partes = dataISO.split('-');
  if (partes.length !== 3) return dataISO;
  const [ano, mes, dia] = partes;
  if (tipo === 'completo') return `${dia}/${mes}/${ano}`;
  if (tipo === 'eixo') return `${mes}/${ano}`;
  return `${dia}/${mes}`; 
}

/**
 * Função auxiliar para converter data do formato dd/mm/yyyy para yyyy-mm-dd (ISO)
 */
function parseBCBDateToISO(dateStr) {
  if (!dateStr) return '';
  // Se já estiver em formato ISO (tem traço), retorna direto
  if (dateStr.includes('-')) return dateStr;
  
  const [day, month, year] = dateStr.split('/');
  if (!day || !month || !year) return '';
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

/**
 * Novo fetchBCB com ORDENAÇÃO FORÇADA E CACHE BUSTER
 * Adicionamos '_v2' ao cacheKey para invalidar dados antigos que estavam errados.
 */
async function fetchBCB(codigo, n = 100) { 
  const proxies = [
    (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    (url) => url
  ];
  
  const apiUrl = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/${n}?formato=json`;
  
  // ALTERAÇÃO IMPORTANTE: Mudamos a chave para _v2 para ignorar caches antigos e invertidos
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
        
        if (!Array.isArray(dadosBrutos) || dadosBrutos.length === 0) {
          throw new Error('Dados inválidos');
        }
        
        // 1. Normaliza as datas para ISO (yyyy-mm-dd) para garantir ordenação correta
        // 2. Filtra datas futuras
        // 3. Ordena explicitamente do mais antigo para o mais novo
        const dadosTratados = dadosBrutos
            .map(item => ({
                data: parseBCBDateToISO(item.data),
                valor: item.valor
            }))
            .filter(d => d.data && d.valor && d.data <= hojeString)
            .sort((a, b) => a.data.localeCompare(b.data)); // ORDENAÇÃO ANTIGO -> NOVO

        if (dadosTratados.length > 0) {
            localStorage.setItem(cacheKey, JSON.stringify(dadosTratados));
            localStorage.setItem(`${cacheKey}_time`, Date.now().toString());
        }
        
        return dadosTratados;

      } catch (err) {
        console.warn(`Tentativa ${tentativa + 1} falhou no proxy ${proxyIndex}:`, err.message);
        if (tentativa < 1) await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  }
  
  // Se falhar tudo, tenta usar cache antigo se existir (último recurso)
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

// FUNÇÃO GERAR INSIGHT
function gerarInsightIA(key, ultimoValor, variacao, dados) {
    const cat = CATEGORIAS[key];
    
    const ultimoDadoIndex = dados.length > 0 ? dados.length - 1 : -1;

    if (ultimoDadoIndex === -1) {
        return `<p style="font-size:1.05rem; color:var(--text-muted);">⚠️ Não foi possível carregar dados recentes para <strong>${cat.titulo}</strong>. Verifique sua conexão e tente novamente.</p>`;
    }

    const ultimaData = dados[ultimoDadoIndex].data; 
    const dataFormatada = formatarData(ultimaData, 'completo');

    const varDir = variacao > 0 ? 'subiu' : variacao < 0 ? 'recuou' : 'ficou estável';
    const varAbs = Math.abs(variacao).toFixed(2);

    const insights = {
        atividade: {
            pos: `A leitura de <strong style="color:${cat.cor}">${ultimoValor}</strong> representa expansão em relação ao período anterior. O avanço de ${varAbs}% sugere que o nível de atividade segue em trajetória ascendente — contexto favorável para geração de emprego e maior utilização da capacidade instalada. Acompanhe os próximos meses para confirmar se é tendência ou movimento pontual.`,
            neg: `A leitura de <strong style="color:${cat.cor}">${ultimoValor}</strong> registrou recuo de ${varAbs}% ante o período anterior. Desaceleração isolada não configura recessão, mas dois ou mais trimestres negativos seguidos são o sinal clássico de contração econômica. Produção industrial e varejo merecem atenção especial nos próximos dados.`,
            stable: `A leitura de <strong style="color:${cat.cor}">${ultimoValor}</strong> manteve-se praticamente estável. Estabilidade pode indicar acomodação num patamar já atingido ou compasso de espera antes de nova direção — dados de curto prazo ganham relevância para identificar o próximo movimento.`
        },
        inflacao: {
            pos: `O indicador marcou <strong style="color:${cat.cor}">${ultimoValor}</strong>, aceleração de ${varAbs}% frente ao mês anterior. Pressão inflacionária crescente tende a manter o Banco Central vigilante: se o IPCA seguir acima da meta por mais períodos, a resposta costuma ser elevação da taxa Selic — o que encarece crédito e financiamentos.`,
            neg: `O indicador marcou <strong style="color:${cat.cor}">${ultimoValor}</strong>, desaceleração de ${varAbs}% em relação ao período anterior. Queda nos índices de preços alivia a pressão sobre o poder de compra das famílias e amplia o espaço do BCB para manter ou reduzir os juros — o que favorece consumo e investimento.`,
            stable: `O indicador marcou <strong style="color:${cat.cor}">${ultimoValor}</strong>, variação mínima frente ao mês anterior. Estabilidade próxima à meta é o cenário ideal para a política monetária: reduz incerteza e permite ao Banco Central agir com mais previsibilidade.`
        },
        emprego: {
            pos: `O mercado de trabalho registrou <strong style="color:${cat.cor}">${ultimoValor}</strong>. A variação de ${varAbs}% no período sinaliza melhora: mais pessoas ocupadas ou renda crescendo significa maior capacidade de consumo das famílias — e, por consequência, mais pressão inflacionária se o crescimento for forte.`,
            neg: `O mercado de trabalho registrou <strong style="color:${cat.cor}">${ultimoValor}</strong>, deterioração de ${varAbs}% ante o período anterior. Quando o desemprego sobe ou a renda recua, o consumo das famílias tende a retrair — o que pode criar um ciclo de desaceleração que se retroalimenta.`,
            stable: `O mercado de trabalho registrou <strong style="color:${cat.cor}">${ultimoValor}</strong>, sem variação relevante frente ao período anterior. Estabilidade no emprego reduz incerteza das famílias e tende a sustentar o consumo no patamar atual.`
        },
        externo: {
            pos: `A leitura foi de <strong style="color:${cat.cor}">${ultimoValor}</strong>, alta de ${varAbs}% no período. No setor externo, variações positivas têm leitura ambígua: dólar mais alto favorece exportadores, mas pressiona a inflação de bens importados e encarece insumos industriais. Balança ou reservas em alta, por outro lado, reforçam a posição externa do país.`,
            neg: `A leitura foi de <strong style="color:${cat.cor}">${ultimoValor}</strong>, recuo de ${varAbs}% no período. Dólar em queda alivia a inflação de itens importados e reduz custo de insumos, mas pode comprimir margens de exportadores. Queda nas reservas merece atenção: sinaliza menor capacidade de intervenção do BCB em eventuais crises cambiais.`,
            stable: `A leitura foi de <strong style="color:${cat.cor}">${ultimoValor}</strong>, com pouca variação no período. Câmbio estável reduz incerteza para empresas que importam ou exportam e contribui para ancoragem das expectativas de inflação.`
        }
    };

    const bloco = insights[key] || {};
    let analise = '';
    if (variacao > 0.01) analise = bloco.pos || '';
    else if (variacao < -0.01) analise = bloco.neg || '';
    else analise = bloco.stable || '';

    return `
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px; letter-spacing:0.04em; text-transform:uppercase; font-weight:600;">Leitura de ${dataFormatada} · variação de ${variacao >= 0 ? '+' : ''}${variacao.toFixed(2)}% ante o período anterior</p>
      <p style="font-size:1.05rem; line-height:1.8;">${analise}</p>
    `;
}

async function renderHome() {
  const container = document.getElementById('cards');
  container.innerHTML = '<div class="loading">Buscando dados no Banco Central...</div>';
  
  const categorias = Object.entries(CATEGORIAS);
  const resultados = [];
  
  for (const [key, cat] of categorias) {
    const primeira = Object.keys(cat.series)[0];
    const codigo = cat.series[primeira].codigo;
    const unidade = cat.series[primeira].unidade;
    
    const dados = await fetchBCB(codigo, 6);
    if (dados.length < 2) continue;
    
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
    
    let variacaoDisplay = parseFloat(variacao);
    let isUp = variacaoDisplay >= 0;
    
    let classCor = 'up'; 
    
    if (isUp) { 
        if (key === 'inflacao' || (key === 'emprego' && primeira.includes('Desemprego')) || (key === 'externo' && primeira.includes('Dólar'))) {
             classCor = 'down'; 
        } else {
             classCor = 'up'; 
        }
    } else { 
        if (key === 'inflacao' || (key === 'emprego' && primeira.includes('Desemprego')) || (key === 'externo' && primeira.includes('Dólar'))) {
             classCor = 'up'; 
        } else {
             classCor = 'down'; 
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

function showMetodologia(nomeSerie) {
    const info = METODOLOGIAS[nomeSerie];
    if (info) {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); display:flex; justify-content:center; align-items:center; z-index:9999; backdrop-filter:blur(6px); padding:20px;">
                <div style="background:var(--bg-secondary); padding:40px; border-radius:20px; max-width:600px; width:100%; color:var(--text); border:1px solid rgba(0,245,255,0.2); box-shadow:0 0 60px rgba(0,245,255,0.1);">
                    <div style="font-size:0.7rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--text-muted); margin-bottom:10px;">Ficha técnica</div>
                    <h3 style="color:#00d4ff; margin:0 0 24px; font-family:'Space Grotesk'; font-size:1.5rem; letter-spacing:-0.02em; line-height:1.2;">${info.titulo}</h3>
                    <div style="margin-bottom:20px;">
                        <div style="font-size:0.75rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">Descrição</div>
                        <p style="font-size:0.975rem; line-height:1.75; color:var(--text); margin:0;">${info.explicacao}</p>
                    </div>
                    <div style="border-top:1px solid var(--border); padding-top:20px; margin-bottom:28px;">
                        <div style="font-size:0.75rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">Metodologia de cálculo</div>
                        <p style="font-size:0.975rem; line-height:1.75; color:var(--text); margin:0;">${info.calculo}</p>
                    </div>
                    <button onclick="this.closest('[style*=\"position:fixed\"]').remove()" style="padding:12px 28px; background:var(--accent); color:#000; border:none; border-radius:10px; cursor:pointer; font-size:0.9rem; font-weight:700; font-family:'Space Grotesk'; letter-spacing:0.04em; transition:opacity 0.2s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">Fechar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        alert("Metodologia não encontrada para este indicador.");
    }
}

async function showCategory(key) {
  setActiveButton(key);
  document.getElementById("home").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");

  const cat = CATEGORIAS[key];
  const content = document.getElementById("category-content");
  content.innerHTML = `<div class="loading">Carregando ${cat.titulo}…</div>`;

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
  
  const dadosParaVariacao = await fetchBCB(codigoPrincipal, 2); 

  const ultimo = dadosParaVariacao[dadosParaVariacao.length - 1] || {};
  const anterior = dadosParaVariacao[dadosParaVariacao.length - 2] || {};
  const valor = parseFloat(ultimo.valor || 0);
  const valorAnterior = parseFloat(anterior.valor || 0);
  const variacao = anterior.valor ? ((valor - valorAnterior) / Math.abs(valorAnterior) * 100) : 0;

  let dadosGrafico = await fetchBCB(codigoPrincipal, 24); 

  let valorDisplay = valor;
  let unidadeDisplay = cat.series[primeiraSerie] ? cat.series[primeiraSerie].unidade : '%';
 
  const ultimoValorFormatado = formatarValor(valorDisplay, unidadeDisplay);
  const insightIA = gerarInsightIA(key, ultimoValorFormatado, variacao, dadosParaVariacao);

  let tagStatus = "";
  let tagClass = "stable";
  let isPositive = variacao > 0;
  let statusText = "CENÁRIO ESTÁVEL";
  let statusEmoji = "📊";

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

  
  for (const [nome, serieInfo] of Object.entries(cat.series)) {
    const codigo = serieInfo.codigo;
    const unidade = serieInfo.unidade;
    const dados = await fetchBCB(codigo, 12); 
    const ultimoDado = dados[dados.length - 1]; 
    
    let valorSerie = parseFloat(ultimoDado?.valor || 0);
    let unidadeSerie = unidade;
    
    const valorFormatadoSerie = ultimoDado ? formatarValor(valorSerie, unidadeSerie) : "N/D";

    seriesHTML += `
      <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;">
        <div style="color:var(--text-muted);font-size:1rem;margin-bottom:8px;">${nome}</div>
        <div style="color:var(--text-muted);font-size:0.85rem;margin-bottom:12px;"><strong>${unidadeSerie}</strong></div>
        <div class="value" style="font-size:2.2rem;font-weight:800;margin:12px 0;color:${cat.cor};">${valorFormatadoSerie}</div>
        <div onclick="showMetodologia('${nome}')" style="font-size:0.78rem; color: ${cat.cor}; font-weight:700; margin-top:14px; cursor:pointer; letter-spacing:0.06em; text-transform:uppercase; opacity:0.75; transition:opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.75'">↗ Ficha técnica</div>
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
        <h3 style="color:${cat.cor}; font-size:1.3rem; margin-bottom: 20px; font-family:'Space Grotesk'; display:flex; align-items:center; gap:12px; letter-spacing:-0.02em;">
          Leitura do indicador
        </h3>
        ${insightIA}
    </div>
    
    <div class="info-container">
        <div class="explicacao" style="flex:1; background:var(--bg); border:2px solid ${cat.cor}50; border-radius:12px; padding:25px; font-size:1.05rem; line-height:1.9;">
            <h3 style="color:${cat.cor}; font-size:1rem; margin-bottom: 16px; display:flex; align-items:center; gap:10px; letter-spacing:0.06em; text-transform:uppercase; font-weight:700;">
                O que esse indicador mede
            </h3>
            ${cat.explicacao}
        </div>
    
        <div class="impacto" style="flex:1; background:var(--bg); border:2px solid ${cat.cor}50; border-radius:12px; padding:25px; font-size:1.05rem; line-height:1.9;">
            <h3 style="color:${cat.cor}; font-size:1rem; margin-bottom: 16px; display:flex; align-items:center; gap:10px; letter-spacing:0.06em; text-transform:uppercase; font-weight:700;">
                Como isso afeta seu bolso
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
