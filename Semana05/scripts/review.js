document.addEventListener('DOMContentLoaded', () => {
  // Controle do localStorage para contagem de envios
  let avaliacoesContador = Number(localStorage.getItem('avaliacoesContador')) || 0;
  avaliacoesContador++;
  localStorage.setItem('avaliacoesContador', avaliacoesContador);

  const elementoContador = document.getElementById('contador-avaliacoes');
  if (elementoContador) {
    elementoContador.textContent = avaliacoesContador;
  }

  // Atualização do rodapé
  const anoAtualSpan = document.getElementById('anoatual');
  if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
  }

  const ultimaModificacaoP = document.getElementById('ultimaModificacao');
  if (ultimaModificacaoP) {
    ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;
  }
});