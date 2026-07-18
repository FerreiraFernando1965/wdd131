

var ultimaModificacao = document.getElementById("ultimaModificacao");
// Converte a string de modificação em um objeto Date
var dataObjeto = new Date(document.lastModified); 

// Formata apenas a data no padrão brasileiro (sem o horário)
var dataFormatada = dataObjeto.toLocaleDateString("pt-BR");

ultimaModificacao.textContent = "Última modificação: " + dataFormatada;