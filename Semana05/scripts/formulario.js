const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const selectProduto = document.getElementById('produto');

  // Preenchimento dinâmico das opções
  produtos.forEach(prod => {
    const option = document.createElement('option');
    option.value = prod.id;
    option.textContent = prod.nome;
    selectProduto.appendChild(option);
  });

  // Atualização das informações no rodapé
  const anoAtualSpan = document.getElementById('anoatual');
  if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
  }

  const ultimaModificacaoP = document.getElementById('ultimaModificacao');
  if (ultimaModificacaoP) {
    ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;
  }
});