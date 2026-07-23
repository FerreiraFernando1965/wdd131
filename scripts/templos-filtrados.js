

// Atualização do ano no rodapé
document.querySelector("#anoatual").textContent = new Date().getFullYear();

// Fornece  a data da última modificação
const dataModificacao = new Date(document.lastModified);

// Formata para exibir APENAS a data (dia/mês/ano) Padrão brasileiro
const dataFormatada = dataModificacao.toLocaleDateString("pt-BR");

// Exibe no rodapé apenas a data
document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${dataFormatada}`;

// Menu Hambúrguer (Mobile)
const botaoMenu = document.getElementById("botao-menu");
const menuNav = document.querySelector("nav");

botaoMenu.addEventListener("click", () => {
  menuNav.classList.toggle("show");
  if (menuNav.classList.contains("show")) {
    botaoMenu.textContent = "✕";
    botaoMenu.setAttribute("aria-label", "Fechar menu");
  } else {
    botaoMenu.textContent = "☰";
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  }
});

// Array de Templos ( imagens de Templos obtidas no site da Igreja)
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  
    
  {
    nomeDoTemplo: "Madrid, Espanha",
    localizacao: "Madrid, Espanha",
    consagracao: "1999, 19 de março",
    area: 45800,
    urlDaImagem: "https://content.churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    nomeDoTemplo: "Campinas, Brasil",
    localizacao: "Campinas, Brasil",
    consagracao: "2002, 17 de maio",
    area: 48100,
    urlDaImagem: "https://content.churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
  {
    nomeDoTemplo: "Manaus, Brasil",
    localizacao: "Manaus, Brasil",
    consagracao: "2012, 10 de junho",
    area: 32032,
    urlDaImagem: "https://content.churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
  },
  {
    nomeDoTemplo: "Anchorage, Alaska",
    localizacao: "Alaska, Estados Unidos",
    consagracao: "2004, 09 de janeiro",
    area: 32032,
    urlDaImagem: "https://content.churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-57454-main.jpg"
  },
  {
    nomeDoTemplo: "Logan, Utah",
    localizacao: "Utah, Estados Unidos",
    consagracao: "1884, 17 de maio",
    area: 32032,
    urlDaImagem: "https://content.churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    nomeDoTemplo: "Idaho Falls, Idaho",
    localizacao: "Idaho, Estados Unidos",
    consagracao: "1945, 23 de setembro",
    area: 32032,
    urlDaImagem: "https://content.churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-55801-main.jpg"
  }
];

// Renderização dos cards
function createTemplateCard(filteredTemples) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = "";

  filteredTemples.forEach(templo => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy" width="400" height="250">
      <figcaption>
        <h3>${templo.nomeDoTemplo}</h3>
        <p><strong>Localização:</strong> ${templo.localizacao}</p>
        <p><strong>Dedicação:</strong> ${templo.consagracao}</p>
        <p><strong>Área:</strong> ${templo.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    container.appendChild(card);
  });
}

// Destacar link ativo
function toggleActive(element) {
  document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
  element.classList.add("active");
}

// Extrair ano da data
function getYear(consagracao) {
  return parseInt(consagracao.split(",")[0], 10);
}

// Eventos de Filtro   mostra todos as imagens 
document.querySelector("#all").addEventListener("click", (e) => {
  e.preventDefault();
  toggleActive(e.target);
  document.querySelector("#titulo-filtro").textContent = "Álbum de Templos";
  createTemplateCard(templos);
});
 // filtro para Templos antigos  antes de 1º de janeiro de 1950 
document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  toggleActive(e.target);
  document.querySelector("#titulo-filtro").textContent = "Templos Antigos (Anteriores a 1º de janeiro de 1950)";
  createTemplateCard(templos.filter(templo => getYear(templo.consagracao) < 1900));
});
 // Filtro para Templos novos depois de 1º de janeiro de 1950
document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  toggleActive(e.target);
  document.querySelector("#titulo-filtro").textContent = "Templos Novos (Construídos a partir de 1º de janeiro de 1950)";
  createTemplateCard(templos.filter(templo => getYear(templo.consagracao) >= 2000));
});
// filtro para Templos grandes, com mais de 50000 pés quadrados
document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  toggleActive(e.target);
  document.querySelector("#titulo-filtro").textContent = "Templos Grandes (Mais de 50.000 pés² )";
  createTemplateCard(templos.filter(templo => templo.area > 50000));
});
// filtro para Templos pequenos, com menos de 50000 pés quadrados
document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  toggleActive(e.target);
  document.querySelector("#titulo-filtro").textContent = "Templos Pequenos (Menos de 50.000 pés² )";
  createTemplateCard(templos.filter(templo => templo.area < 50000));
});

// Exibe todos os templos na inicialização Tem que ser colocado no final, caso contrário não apresenta as imagens.
createTemplateCard(templos);