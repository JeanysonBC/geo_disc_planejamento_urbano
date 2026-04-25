
const loteamentos = [
  {loteamento:'Aeroporto',bairro:'Aeroporto',area:4.81,quadras:6,lotes:96,licenca:false},
  {loteamento:'Arizona',bairro:'Chico Cajá',area:10.00,quadras:12,lotes:284,licenca:false},
  {loteamento:'Boa Vista',bairro:'São Geraldo',area:5.24,quadras:6,lotes:94,licenca:false},
  {loteamento:'Campos Bello',bairro:'Riacho do Meio',area:10.50,quadras:13,lotes:264,licenca:false},
  {loteamento:'Campos do Alto',bairro:'Nova Pau dos Ferros',area:10.00,quadras:19,lotes:224,licenca:false},
  {loteamento:'Cascatinha',bairro:'Alto do Açude',area:2.66,quadras:4,lotes:33,licenca:false},
  {loteamento:'Colinas do Alto Oeste',bairro:'Riacho do Meio',area:14.72,quadras:9,lotes:281,licenca:false},
  {loteamento:'Colinas Zona Sul',bairro:'Chico Cajá',area:2.31,quadras:23,lotes:43,licenca:false},
  {loteamento:'Colinas Zona Sul II',bairro:'Chico Cajá',area:3.52,quadras:6,lotes:102,licenca:false},
  {loteamento:'Colinas Zona Sul III',bairro:'Chico Cajá',area:4.89,quadras:2,lotes:34,licenca:false},
  {loteamento:'Colinas Zona Sul IV',bairro:'Chico Cajá',area:5.93,quadras:11,lotes:68,licenca:false},
  {loteamento:'Gentil Estevam do Rego',bairro:'Paraíso',area:5.70,quadras:5,lotes:54,licenca:true},
  {loteamento:'Inácia Fernandes da Costa',bairro:'Zeca Pedro',area:7.33,quadras:9,lotes:166,licenca:false},
  {loteamento:'Jardim América',bairro:'João Catingueira',area:7.58,quadras:9,lotes:73,licenca:false},
  {loteamento:'Jardim América II',bairro:'João Catingueira',area:8.95,quadras:10,lotes:109,licenca:false},
  {loteamento:'Jardim São Paulo',bairro:'Zeca Pedro',area:4.90,quadras:11,lotes:null,licenca:false},
  {loteamento:'Nova Pau dos Ferros',bairro:'Nova Pau dos Ferros',area:12.60,quadras:19,lotes:232,licenca:true},
  {loteamento:'Oeste Village',bairro:'Nações Unidas',area:7.00,quadras:17,lotes:278,licenca:false},
  {loteamento:'Parque União',bairro:'João Catingueira',area:6.08,quadras:6,lotes:57,licenca:false},
  {loteamento:'Pedra Azul',bairro:'Chico Cajá',area:8.96,quadras:9,lotes:179,licenca:false},
  {loteamento:'Planalto',bairro:'Chico Cajá',area:6.76,quadras:3,lotes:42,licenca:false},
  {loteamento:'Segundo Melo',bairro:'Manoel Domingos',area:16.93,quadras:36,lotes:619,licenca:false},
  {loteamento:'Ubiranilton Deodato',bairro:'Princesinha do Oeste',area:3.69,quadras:6,lotes:110,licenca:true}
];

const voos = [
  {loteamento:'Aeroporto',tempo:6.27,area:5,imagens:81,resolucao:2.4},
  {loteamento:'Arizona',tempo:7.55,area:11,imagens:108,resolucao:3.4},
  {loteamento:'Boa Vista',tempo:5.48,area:6,imagens:77,resolucao:2.4},
  {loteamento:'Campos do Alto',tempo:8.78,area:11,imagens:145,resolucao:2.4},
  {loteamento:'Campos Bello',tempo:8.18,area:11,imagens:115,resolucao:3.4},
  {loteamento:'Cascatinha',tempo:3.58,area:3,imagens:34,resolucao:3.4},
  {loteamento:'Colinas do Alto Oeste',tempo:11.88,area:15,imagens:191,resolucao:2.4},
  {loteamento:'Colinas Zona Sul',tempo:11.17,area:17,imagens:166,resolucao:3.4},
  {loteamento:'Gentil Estevam do Rego',tempo:6.03,area:6,imagens:62,resolucao:3.4},
  {loteamento:'Inácia Fernandes da Costa',tempo:7.88,area:8,imagens:111,resolucao:2.4},
  {loteamento:'Jardim América',tempo:8.83,area:17,imagens:124,resolucao:3.4},
  {loteamento:'Jardim São Paulo',tempo:5.02,area:6,imagens:58,resolucao:3.4},
  {loteamento:'Nova Pau dos Ferros',tempo:8.20,area:13,imagens:88,resolucao:3.4},
  {loteamento:'Oeste Village',tempo:7.30,area:8,imagens:105,resolucao:2.4},
  {loteamento:'Parque União',tempo:5.55,area:7,imagens:69,resolucao:3.4},
  {loteamento:'Pedra Azul',tempo:9.53,area:10,imagens:130,resolucao:2.4},
  {loteamento:'Planalto',tempo:6.63,area:7,imagens:75,resolucao:3.4},
  {loteamento:'Segundo Melo',tempo:9.75,area:18,imagens:130,resolucao:3.4},
  {loteamento:'Ubiranilton Deodato',tempo:5.40,area:4,imagens:55,resolucao:2.4}
];

const gallery = [
  ['figura_1_localizacao.webp','Figura 1 - Localização de Pau dos Ferros/RN','Mapa de localização do município no Brasil e no Rio Grande do Norte.'],
  ['figura_2_planejamento_voo.webp','Figura 2 - Planejamento de voo','Tela do DroneDeploy com polígono de voo, altura e estimativa de imagens.'],
  ['figura_3_drone_phantom4.webp','Figura 3 - VANT DJI Phantom 4','Equipamento utilizado para aquisição das imagens aéreas.'],
  ['loteamento_aeroporto.webp','Figura 4.1 - Loteamento Aeroporto','Ortomosaico do loteamento Aeroporto.'],
  ['loteamento_arizona.webp','Figura 4.2 - Loteamento Arizona','Ortomosaico e vetorização do loteamento Arizona.'],
  ['loteamento_boa_vista.webp','Figura 4.3 - Loteamento Boa Vista','Ortomosaico do loteamento Boa Vista.'],
  ['loteamento_campos_bello.webp','Figura 4.4 - Loteamento Campos Bello','Ortomosaico e vetorização do loteamento Campos Bello.'],
  ['loteamento_cascatinha.webp','Figura 4.5 - Loteamento Cascatinha','Ortomosaico e vetorização do loteamento Cascatinha.'],
  ['loteamento_campos_do_alto.webp','Figura 4.6 - Loteamento Campos do Alto','Ortomosaico e vetorização do loteamento Campos do Alto.'],
  ['loteamento_colinas_alto_oeste.webp','Figura 4.7 - Colinas do Alto Oeste','Ortomosaico e vetorização do loteamento Colinas do Alto Oeste.'],
  ['loteamento_colinas_zona_sul.webp','Figura 4.8 - Colinas Zona Sul','Ortomosaico e vetorização do conjunto Colinas Zona Sul.'],
  ['loteamento_gentil_est_rego.webp','Figura 4.9 - Gentil Estevam do Rego','Ortomosaico e vetorização do loteamento Gentil Estevam do Rego.'],
  ['loteamento_inacia_costa.webp','Figura 4.10 - Inácia Fernandes da Costa','Ortomosaico e vetorização do loteamento Inácia Fernandes da Costa.'],
  ['loteamento_jardim_america.webp','Figura 4.11 - Jardim América','Ortomosaico e vetorização do loteamento Jardim América.'],
  ['loteamento_jardim_sao_paulo.webp','Figura 4.12 - Jardim São Paulo','Ortomosaico e vetorização do loteamento Jardim São Paulo.'],
  ['loteamento_nova_pdf.webp','Figura 4.13 - Nova Pau dos Ferros','Ortomosaico e vetorização do loteamento Nova Pau dos Ferros.'],
  ['loteamento_oeste_village.webp','Figura 4.14 - Oeste Village','Ortomosaico e vetorização do loteamento Oeste Village.'],
  ['loteamento_parque_uniao.webp','Figura 4.15 - Parque União','Ortomosaico e vetorização do loteamento Parque União.'],
  ['loteamento_pedra_azul.webp','Figura 4.16 - Pedra Azul','Ortomosaico do loteamento Pedra Azul.'],
  ['loteamento_planalto.webp','Figura 4.17 - Planalto','Ortomosaico do loteamento Planalto.'],
  ['loteamento_segundo_melo.webp','Figura 4.18 - Segundo Melo','Ortomosaico e vetorização do loteamento Segundo Melo.'],
  ['loteamento_ubiranilton_deodato.webp','Figura 4.19 - Ubiranilton Deodato','Ortomosaico e vetorização do loteamento Ubiranilton Deodato.']
];

function chartDefaults(){
  Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
  Chart.defaults.color = '#314441';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
}

function renderCharts(){
  chartDefaults();
  const bairros = {};
  loteamentos.forEach(d=> bairros[d.bairro] = (bairros[d.bairro] || 0) + 1);
  const bairrosOrdenados = Object.entries(bairros).sort((a,b)=>b[1]-a[1]);
  new Chart(document.getElementById('bairroChart'),{
    type:'bar',
    data:{labels:bairrosOrdenados.map(d=>d[0]),datasets:[{label:'Nº de loteamentos',data:bairrosOrdenados.map(d=>d[1]),borderRadius:10,backgroundColor:'#22c55e'}]},
    options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:(ctx)=>`${ctx.raw} loteamento(s)`}}},scales:{y:{beginAtZero:true,ticks:{precision:0}},x:{ticks:{maxRotation:60,minRotation:25}}}}
  });

  new Chart(document.getElementById('infraChart'),{
    type:'bar',
    data:{labels:['Energia elétrica','Iluminação pública','Água potável','Coleta de lixo','Pavimentação','Drenagem urbana','Esgotamento sanitário'],datasets:[{label:'Atendimento (%)',data:[96,78,70,70,22,0,0],borderRadius:10,backgroundColor:'#38bdf8'}]},
    options:{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,max:100,ticks:{callback:v=>v+'%'}}}}
  });

  new Chart(document.getElementById('licencaChart'),{
    type:'doughnut',
    data:{labels:['Com licença ambiental','Sem licença ambiental'],datasets:[{data:[13.04,86.96],backgroundColor:['#22c55e','#ef4444'],borderWidth:0}]},
    options:{plugins:{tooltip:{callbacks:{label:(ctx)=>`${ctx.label}: ${ctx.raw}%`}},legend:{position:'bottom'}},cutout:'68%'}
  });

  new Chart(document.getElementById('areaLotesChart'),{
    type:'scatter',
    data:{datasets:[{label:'Loteamentos',data:loteamentos.filter(d=>d.lotes!==null).map(d=>({x:d.area,y:d.lotes,loteamento:d.loteamento})),backgroundColor:'#f59e0b',pointRadius:6,pointHoverRadius:9}]},
    options:{plugins:{tooltip:{callbacks:{label:(ctx)=>`${ctx.raw.loteamento}: ${ctx.raw.x} ha, ${ctx.raw.y} lotes`}}},scales:{x:{title:{display:true,text:'Área (ha)'},beginAtZero:true},y:{title:{display:true,text:'Nº de lotes'},beginAtZero:true}}}
  });

  new Chart(document.getElementById('voosChart'),{
    type:'scatter',
    data:{datasets:[{label:'Aerolevantamentos',data:voos.map(d=>({x:d.area,y:d.tempo,r:d.imagens,loteamento:d.loteamento,imagens:d.imagens})),backgroundColor:'#22c55e',pointRadius:6,pointHoverRadius:9}]},
    options:{plugins:{tooltip:{callbacks:{label:(ctx)=>`${ctx.raw.loteamento}: ${ctx.raw.x} ha, ${ctx.raw.y.toFixed(2)} min, ${ctx.raw.imagens} imagens`}}},scales:{x:{title:{display:true,text:'Área do voo (ha)'},beginAtZero:true},y:{title:{display:true,text:'Tempo de voo (min)'},beginAtZero:true}}}
  });
}

function renderTable(){
  const tbody = document.querySelector('#loteamentosTable tbody');
  loteamentos.forEach(d=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${d.loteamento}</strong></td><td>${d.bairro}</td><td>${d.area.toLocaleString('pt-BR',{minimumFractionDigits:2})}</td><td>${d.quadras}</td><td>${d.lotes ?? 'Não informado'}</td><td>${d.licenca ? '<span class="badge text-bg-success">Sim</span>' : '<span class="badge text-bg-danger">Não</span>'}</td>`;
    tbody.appendChild(tr);
  });
}

function renderGallery(){
  const holder = document.getElementById('galleryGrid');
  gallery.forEach(([file,title,desc])=>{
    const col = document.createElement('div');
    col.className='col-12 col-sm-6 col-lg-4';
    col.innerHTML = `<div class="gallery-card card" data-aos="fade-up"><button class="p-0 border-0 bg-transparent text-start" data-img="assets/img/${file}" data-title="${title}" aria-label="Abrir imagem ${title}"><img src="assets/img/${file}" alt="${title}" loading="lazy"></button><div class="card-body"><h3 class="h6 fw-bold mb-1">${title}</h3><p class="small text-secondary mb-0">${desc}</p></div></div>`;
    holder.appendChild(col);
  });
}

function setupGalleryModal(){
  const modalEl = document.getElementById('imageModal');
  const modal = new bootstrap.Modal(modalEl);
  document.addEventListener('click',e=>{
    const btn = e.target.closest('[data-img]');
    if(!btn) return;
    document.getElementById('modalImage').src = btn.dataset.img;
    document.getElementById('modalImage').alt = btn.dataset.title;
    document.getElementById('modalTitle').textContent = btn.dataset.title;
    modal.show();
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  renderCharts();
  renderTable();
  renderGallery();
  setupGalleryModal();
  if(window.AOS){ AOS.init({duration:700,once:true,offset:60}); }
});
