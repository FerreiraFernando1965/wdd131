document.addEventListener("DOMContentLoaded", () => {
  // 1. Atualiza ano do rodapé e última modificação (apenas data)
 document.getElementById("anoatual").textContent = new Date().getFullYear();

    // Converte a data de modificação e formata para DD/MM/AAAA
  const dataModificacao = new Date(document.lastModified);
  const dataFormatada = dataModificacao.toLocaleDateString("pt-BR");
   document.getElementById("ultimaModificacao").textContent = `Última modificação: ${dataFormatada}`;