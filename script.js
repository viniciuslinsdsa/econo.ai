// === script.js - VERSÃO CORRIGIDA E DEFINITIVA (24/11/2025) ===

const METODOLOGIAS = { /* ... seu objeto METODOLOGIAS permanece igual ... */ };

const CATEGORIAS = { /* ... seu objeto CATEGORIAS permanece igual ... */ };

function formatarData(dataISO, tipo = 'mini') {
  if (!dataISO) return 'N/D';
  const [ano, mes, dia] = dataISO.split('-');
  if (tipo === 'completo') return `${dia}/${mes}/${ano}`;
  if (tipo === 'eixo') return `${mes}/${ano}`;
  return `${dia}/${mes}`;
}

// FUNÇÃO CORRIGIDA: sempre retorna dados ordenados do mais antigo para o mais recente
async function fetchBCB(codigo, n = 100) {
  const apiUrl = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/${n}?formato=json`;
  const cacheKey = `bcb_${codigo}`;
  const cached = localStorage.getItem(cacheKey);
  const cacheTime = localStorage.getItem(`${cacheKey}_time`);

  // Cache de 1 hora
  if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < 3600000) {
    const dados = JSON.parse(cached);
    return ordenarCronologicamente(dados);
  }

  const proxies = [
    url => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    url => url
  ];

  for (const proxy of proxies) {
    try {
      const res = await fetch(proxy(apiUrl), { signal: AbortSignal.timeout(8000) });
      if (!res.ok) continue;

      let dados = await res.json();
      if (proxy.name.includes('allorigins')) dados = JSON.parse(dados.contents);

      if (!Array.isArray(dados) || dados.length === 0) continue;

      // Força ordenação cronológica ANTES de salvar no cache
      dados = ordenarCronologicamente(dados);

      // Salva no cache já ordenado (antigo → recente)
      localStorage.setItem(cacheKey, JSON.stringify(dados));
      localStorage.setItem(`${cacheKey}_time`, Date.now().toString());

      return dados;
    } catch (e) {
      console.warn(`Falha com proxy para série ${codigo}:`, e.message);
    }
  }

  // Se tudo falhar, tenta usar cache mesmo que expirado
  if (cached) {
    const dados = JSON.parse(cached);
    return ordenarCronologicamente(dados);
  }

  return [];
}

// FUNÇÃO PURA: garante ordem cronológica correta (antigo → recente)
function ordenarCronologicamente(dados) {
  return dados
    .map(d => ({ ...d, dateObj: new Date(d.data.split('-').join('-')) })) // yyyy-mm-dd
    .sort((a, b) => a.dateObj - b.dateObj)
    .map(({ dateObj, ...d }) => d); // remove dateObj auxiliar
}

// === Resto do código (renderHome, showCategory, etc.) com correções mínimas ===

function formatarValor(valor, unidade) {
  if (isNaN(valor)) return "N/D";
  return parseFloat(valor).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
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
    const penultimo = dados[dados.length - 2];
    const variacao = penultimo.valor ? ((ultimo.valor - penultimo.valor) / Math.abs(penultimo.valor) * 100) : 0;

    const miniDados = dados.slice(-6);

    return { key, cat, ultimo, variacao: variacao.toFixed(2), miniDados, unidade, primeira };
  });

  const resultados = (await Promise.all(promessas)).filter(Boolean);

  let html = '';
  for (const r of resultados) {
    const isGood = 
      (r.key === 'inflacao' && r.variacao < 0) ||
      (r.key === 'emprego' && r.primeira.includes('Desemprego') && r.variacao < 0) ||
      (r.key === 'externo' && r.primeira.includes('Dólar') && r.variacao < 0) ||
      (r.variacao >= 0 && !['inflacao', 'emprego', 'externo'].includes(r.key) || 
       (r.key === 'emprego' && !r.primeira.includes('Desemprego')));

    html += `
      <div class="card" onclick="showCategory('${r.key}')">
        <h3>${r.cat.titulo}</h3>
        <div class="value">${formatarValor(r.ultimo.valor, r.unidade)}</div>
        <div class="var ${isGood ? 'up' : 'down'}">
          ${Math.abs(r.variacao) < 0.01 ? 'Estável' : (isGood ? 'Up' : 'Down') + ' ' + Math.abs(r.variacao) + '%'}
        </div>
        <canvas id="mini-${r.key}"></canvas>
      </div>`;
  }
  container.innerHTML = html;

  resultados.forEach(r => {
    setTimeout(() => {
      const ctx = document.getElementById(`mini-${r.key}`);
      if (!ctx) return;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: r.miniDados.map(d => formatarData(d.data)),
          datasets: [{
            data: r.miniDados.map(d => parseFloat(d.valor)),
            borderColor: r.cat.cor,
            backgroundColor: r.cat.cor + '30',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            borderWidth: 3
          }]
        },
        options: { plugins: { legend: false, tooltip: false }, scales: { x: { display: false }, y: { display: false } } }
      });
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
  const dadosPrincipais = await fetchBCB(principal.codigo, 24);
  const ultimo = dadosPrincipais[dadosPrincipais.length - 1];
  const anterior = dadosPrincipais[dadosPrincipais.length - 2] || ultimo;
  const variacao = anterior ? ((ultimo.valor - anterior.valor) / Math.abs(anterior.valor) * 100).toFixed(2) : 0;

  // Gráfico grande
  const dadosGrafico = dadosPrincipais.slice(-20);

  // Séries detalhadas
  let seriesHTML = "<div class='series-grid'>";
  for (const [nome, s] of Object.entries(cat.series)) {
    const dados = await fetchBCB(s.codigo, 12);
    const ult = dados[dados.length - 1];
    seriesHTML += `
      <div style="background:var(--card); padding:20px; border-radius:12px; border:1px solid #333;">
        <div style="color:#aaa; font-size:0.9rem;">${nome}</div>
        <div style="color:#888; font-size:0.8rem; margin:4px 0;">${s.unidade}</div>
        <div style="font-size:2rem; font-weight:800; color:${cat.cor};">${formatarValor(ult.valor, s.unidade)}</div>
        <div onclick="showMetodologia('${nome}')" style="color:${cat.cor}; font-size:0.8rem; cursor:pointer; margin-top:8px; text-decoration:underline;">(i) Metodologia</div>
      </div>`;
  }
  seriesHTML += "</div>";

  content.innerHTML = `
    <button class="btn-back" onclick="showHome()">← Voltar</button>
    <h1 style="font-size:3.5rem; background:linear-gradient(135deg,${cat.cor},#fff); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
      ${cat.titulo}
    </h1>
    <div style="background:var(--card); padding:20px; border-radius:16px; margin:20px 0;">
      <strong>Última leitura (${primeira})</strong>: ${formatarValor(ultimo.valor, principal.unidade)} 
      <small>em ${formatarData(ultimo.data, 'completo')}</small>
      <div style="margin-top:10px; font-size:1.5rem;">
        Variação: <strong style="color:${variacao < 0 ? '#ff6b6b' : '#39ff94'}">${variacao > 0 ? '+' : ''}${variacao}%</strong>
      </div>
    </div>

    <h2 style="color:${cat.cor}; margin:40px 0 20px;">${cat.titulo} - Histórico</h2>
    <canvas id="bigchart" style="height:320px;"></canvas>

    <h2 style="margin:50px 0 20px;">Séries Detalhadas</h2>
    ${seriesHTML}
  `;

  // Gráfico grande
  new Chart(document.getElementById("bigchart"), {
    type: 'line',
    data: {
      labels: dadosGrafico.map(d => formatarData(d.data, 'eixo')),
      datasets: [{
        label: primeira,
        data: dadosGrafico.map(d => parseFloat(d.valor)),
        borderColor: cat.cor,
        backgroundColor: cat.cor + '30',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#ccc' } },
        y: { ticks: { color: '#ccc' } }
      }
    }
  });
}

function showHome() {
  setActiveButton('home');
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("category-page").classList.add("hidden");
  renderHome();
}

function setActiveButton(page) {
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`nav button[data-page="${page}"]`);
  if (btn) btn.classList.add('active');
}

// Inicia tudo
renderHome();
