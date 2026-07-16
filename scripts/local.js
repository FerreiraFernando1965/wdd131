var anoAtual = document.getElementById("anoatual");
anoAtual.textContent = new Date().getFullYear();

var ultimaModificacao = document.getElementById("ultimaModificacao");
ultimaModificacao.textContent = "Última modificação: " + document.lastModified;

var botaoMenu = document.getElementById("botao-menu");
var menuNav = document.querySelector("nav");

botaoMenu.addEventListener("click", function () {
  menuNav.classList.toggle("show");

  if (menuNav.classList.contains("show")) {
    botaoMenu.textContent = "X";
    botaoMenu.setAttribute("aria-label", "Fechar menu");
  } 
  else {
    botaoMenu.textContent = "☰";
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  }
});