// var anoAtual = document.getElementById("anoatual");
// anoAtual.textContent = new Date().getFullYear();

// var ultimaModificacao = document.getElementById("ultimaModificacao");
// ultimaModificacao.textContent = "Última modificação: " + document.lastModified;

// var botaoMenu = document.getElementById("botao-menu");
// var menuNav = document.querySelector("nav");

// botaoMenu.addEventListener("click", function () {
//   menuNav.classList.toggle("show");

//   if (menuNav.classList.contains("show")) {
//     botaoMenu.textContent = "X";
//     botaoMenu.setAttribute("aria-label", "Fechar menu");
//   } 
//   else {
//     botaoMenu.textContent = "☰";
//     botaoMenu.setAttribute("aria-label", "Abrir menu");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
    // Formata a data para DD/MM/AAAA HH:MM:SS
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    
    // Atualiza o elemento no Footer
    const dateContainer = document.getElementById("last-mod-date");
    if (dateContainer) {
        dateContainer.textContent = formattedDate;
    }
});