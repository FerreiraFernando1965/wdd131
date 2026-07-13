const dataModificacao = new Date(document.lastModified);
const dataFormatada = dataModificacao.toLocaleDateString('pt-BR');
ultimaModificacao.textContent = `Última modificação: ${dataFormatada}`;