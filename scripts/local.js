
// var anoAtual = document.getElementById("anoatual");
// anoAtual.textContent = new Date().getFullYear();

// var ultimaModificacao = document.getElementById("ultimaModificacao");

// // Converte para objeto Date e formata para o padrão brasileiro (DD/MM/AAAA)
// var dataFormatada = new Date(document.lastModified).toLocaleDateString('pt-BR');

// ultimaModificacao.textContent = "Última modificação: " + dataFormatada;

 document.addEventListener("DOMContentLoaded", () => {
  // 1. Atualiza ano do rodapé e última modificação (apenas data)
 document.getElementById("anoatual").textContent = new Date().getFullYear();

    // Converte a data de modificação e formata para DD/MM/AAAA
  const dataModificacao = new Date(document.lastModified);
  const dataFormatada = dataModificacao.toLocaleDateString("pt-BR");
   document.getElementById("ultimaModificacao").textContent = `Última modificação: ${dataFormatada}`;

  // 2. Obter valores da temperatura e do vento do HTML
  const temp = parseFloat(document.getElementById("temp").textContent);
  const vento = parseFloat(document.getElementById("vento").textContent);
  const sensacaoEl = document.getElementById("sensacao");

  // 3. Função para calcular a sensação térmica (Wind Chill em °C)
  function calcularSensacaoTermica(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
  }

  // 4. Requisitos comuns de sensação térmica: Temp <= 10°C e Vento > 4.8 km/h
  if (temp <= 10 && vento > 4.8) {
    const sensacao = calcularSensacaoTermica(temp, vento);
    sensacaoEl.textContent = `${sensacao.toFixed(1)}°C`;           
  } 
  else {
    sensacaoEl.textContent = "N/A";
  }
});