// // Atualização do ano no rodapé
// document.querySelector("#anoatual").textContent = new Date().getFullYear();

// // Fornece  a data da última modificação
// const dataModificacao = new Date(document.lastModified);

// // Formata para exibir APENAS a data (dia/mês/ano) Padrão brasileiro
// const dataFormatada = dataModificacao.toLocaleDateString("pt-BR");

// // Exibe no rodapé apenas a data
// document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${dataFormatada}`;

// document.addEventListener("DOMContentLoaded", () => {
//   // Array de produtos fornecido
//   const produtos = [
    
//   ];

//   // Elemento <select>
//   const selectProduto = document.getElementById("produto");

//   // Criação dinâmica das <option> a partir do Array
//   produtos.forEach((produto) => {
//     const option = document.createElement("option");
    
//     // O valor do atributo 'value' é o nome do produto
//     option.value = produto;
//     option.textContent = produto;

//     selectProduto.appendChild(option);
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form');
//   const mensagemAgradecimento = document.getElementById('mensagem-agradecimento');

//   form.addEventListener('submit', (event) => {
//     // Impede o recarregamento padrão da página
//     event.preventDefault();

//     // Oculta o formulário
//     form.style.display = 'none';

//     // Exibe a mensagem de agradecimento
//     mensagemAgradecimento.style.display = 'block';
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form');
//   const mensagemAgradecimento = document.getElementById('mensagem-agradecimento');
//   const btnSubmit = document.getElementById('btn-submit');

//   form.addEventListener('submit', (event) => {
//     // 1. Impede o recarregamento da página
//     event.preventDefault();

//     // 2. Valida se os campos obrigatórios foram preenchidos (caso o novalidate do form esteja ativo)
//     if (form.checkValidity()) {
//       // 3. Exibe a mensagem de agradecimento
//       mensagemAgradecimento.style.display = 'block';

//       // 4. (Opcional) Esconde o botão ou reseta o formulário
//       btnSubmit.style.display = 'none';
//       form.reset();
//     } else {
//       // Força o navegador a mostrar as mensagens nativas de validação
//       form.reportValidity();
//     }
//   });

//   // Atualizar ano atual e última modificação no rodapé
//   const anoAtualSpan = document.getElementById('anoatual');
//   if (anoAtualSpan) {
//     anoAtualSpan.textContent = new Date().getFullYear();
//   }

//   const ultimaModificacaoP = document.getElementById('ultimaModificacao');
//   if (ultimaModificacaoP) {
//     ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;
//   }
// });