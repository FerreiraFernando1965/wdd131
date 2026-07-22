document.querySelector("#anoatual").textContent = new Date().getFullYear();

// Obtém a data da última modificação
const dataModificacao = new Date(document.lastModified);

// Formata para exibir APENAS a data (dia/mês/ano)
const dataFormatada = dataModificacao.toLocaleDateString("pt-BR");

// Exibe no rodapé apenas a data
document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${dataFormatada}`;

var botaoMenu = document.getElementById("botao-menu");
var menuNav = document.querySelector("nav");

botaoMenu.addEventListener("click", function () {
  menuNav.classList.toggle("show");

  if (menuNav.classList.contains("show")) {
    botaoMenu.textContent = "X";
    botaoMenu.setAttribute("aria-label", "Fechar menu");
  } else {
    botaoMenu.textContent = "☰";
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  }
});