document.addEventListener("DOMContentLoaded", () => {
  // Toggle do Menu Mobile
  const botaoMenu = document.querySelector("#botao-menu");
  const menuNavegacao = document.querySelector("#menu-navegacao");

  if (botaoMenu && menuNavegacao) {
    botaoMenu.addEventListener("click", () => {
      menuNavegacao.classList.toggle("show");
      const estaAberto = menuNavegacao.classList.contains("show");
      botaoMenu.setAttribute("aria-expanded", estaAberto);
      botaoMenu.textContent = estaAberto ? "✕" : "☰";
    });
  }

  // Atualização do ano no rodapé
  const elementoAno = document.querySelector("#anoatual");
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }

  // Data da última modificação
  const elementoModificacao = document.querySelector("#ultimaModificacao");
  if (elementoModificacao) {
    const dataModificacao = new Date(document.lastModified);
    const dataFormatada = dataModificacao.toLocaleDateString("pt-BR");
    elementoModificacao.textContent = `Última modificação: ${dataFormatada}`;
  }
});