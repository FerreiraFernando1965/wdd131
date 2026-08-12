const cardapioPizzas = [
    {
        id: 1,
        nome: "Calabresa Especial",
        ingredientes: "Molho artesanal, muçarela, calabresa fatiada, cebola roxa e azeitonas pretas.",
        preco: 45.00,
        categoria: "tradicional"
    },
    {
        id: 2,
        nome: "Quatro Queijos",
        ingredientes: "Molho de tomate, muçarela, gorgonzola, provolone e catupiry original.",
        preco: 52.00,
        categoria: "especial"
    },
    {
        id: 3,
        nome: "Frango com Catupiry",
        ingredientes: "Peito de frango desfiado temperado, coberto com catupiry e milho verde.",
        preco: 48.00,
        categoria: "tradicional"
    },
    {
        id: 4,
        nome: "DoMendes da Casa",
        ingredientes: "Presunto, lombo defumado, palmito, ovos, bacon crocante e borda recheada.",
        preco: 58.00,
        categoria: "especial"
    }
];

// Função 1: Renderizar o cardápio usando Array Methods e Template Literals
function renderizarCardapio(pizzas) {
    const containerCardapio = document.querySelector("#grid-cardapio-dinamico");
    
    if (!containerCardapio) return; // Se a página atual não tiver o cardápio, encerra

    let htmlConteudo = "";

    pizzas.forEach(pizza => {
        htmlConteudo += `
            <article class="card-pizza">
                <div class="info-pizza">
                    <h3>${pizza.nome}</h3>
                    <p>${pizza.ingredientes}</p>
                </div>
                <span class="preco">R$ ${pizza.preco.toFixed(2).replace('.', ',')}</span>
            </article>
        `;
    });

    containerCardapio.innerHTML = htmlConteudo;
}

// Função 2: Salvar dados no localStorage
function salvarNoLocalStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
}

// Função 3: Carregar dados do localStorage
function obterDoLocalStorage(chave) {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : null;
}

// Função 4: Tratar o envio do formulário de contato
function manipularFormulario() {
    const form = document.querySelector("#form-contato");
    const containerMensagem = document.querySelector("#mensagem-retorno");

    if (!form) return;

    // Carrega o nome armazenado anteriormente, se existir (localStorage)
    const ultimoUsuario = obterDoLocalStorage("ultimo_cliente");
    if (ultimoUsuario && ultimoUsuario.nome) {
        const campoNome = document.querySelector("#nome");
        const campoEmail = document.querySelector("#email");
        if (campoNome) campoNome.value = ultimoUsuario.nome;
        if (campoEmail) campoEmail.value = ultimoUsuario.email;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão da página

        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const assunto = document.querySelector("#assunto").value;
        const mensagem = document.querySelector("#mensagem").value;

        // Salvar dados no localStorage para lembrança futura
        const dadosCliente = { nome, email };
        salvarNoLocalStorage("ultimo_cliente", dadosCliente);

        // Uso de Condicionais (Branch Condicional)
        let textoStatus = "";
        if (assunto === "pedido") {
            textoStatus = `Obrigado pelo pedido, ${nome}! Entraremos em contato via WhatsApp rapidamente.`;
        } else if (assunto === "reserva") {
            textoStatus = `Sua solicitação de reserva foi recebida com sucesso, ${nome}!`;
        } else {
            textoStatus = `Obrigado por sua mensagem, ${nome}! Responderemos em breve no e-mail: ${email}.`;
        }

        // Modificação do DOM com Template Literals
        containerMensagem.innerHTML = `<p class="sucesso-mensagem">${textoStatus}</p>`;
        containerMensagem.classList.remove("mensagem-oculta");

        form.reset();
    });
}

// Função 5: Atualização das informações de rodapé
function atualizarRodape() {
    const elAno = document.querySelector("#anoatual");
    const elModificacao = document.querySelector("#ultimaModificacao");

    if (elAno) {
        elAno.textContent = new Date().getFullYear();
    }

    if (elModificacao) {
        const dataModificacao = new Date(document.lastModified);
        const dataFormatada = dataModificacao.toLocaleDateString("pt-BR");
        elModificacao.textContent = `Última modificação: ${dataFormatada}`;
    }
}

// Inicialização de todas as rotinas após carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    renderizarCardapio(cardapioPizzas);
    manipularFormulario();
    atualizarRodape();
});

CSS
/* Correção de variável no Rodapé */
.footer-site, .footer-site a {
    font-family: var(--fonte-texto);
}

/* Estilos do Formulário */
.form-pizzaria {
    background-color: var(--cor-amarelo);
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
}

.campo-form {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.campo-form label {
    font-family: var(--fonte-titulos);
    font-weight: bold;
    color: var(--cor-vermelho);
    margin-bottom: 0.3rem;
}

.campo-form input,
.campo-form select,
.campo-form textarea {
    padding: 0.8rem;
    border: 1px solid var(--cor-vermelho);
    border-radius: 4px;
    font-family: var(--fonte-texto);
    font-size: 1rem;
}

.btn-enviar {
    background-color: var(--cor-vermelho);
    color: var(--cor-branco);
    font-family: var(--fonte-titulos);
    font-size: 1.1rem;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-enviar:hover {
    background-color: #8B0000;
}

.mensagem-oculta {
    display: none;
}

.sucesso-mensagem {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #D4EDDA;
    color: #155724;
    border: 1px solid #C3E6CB;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
}

// Array completo do cardápio dividido por categorias
const cardapioPizzas = [
    {
        id: 1,
        nome: "Calabresa Especial",
        ingredientes: "Molho artesanal, muçarela, calabresa fatiada, cebola roxa e azeitonas pretas.",
        preco: 45.00,
        categoria: "salgada"
    },
    {
        id: 2,
        nome: "Quatro Queijos",
        ingredientes: "Molho de tomate, muçarela, gorgonzola, provolone e catupiry original.",
        preco: 52.00,
        categoria: "salgada"
    },
    {
        id: 3,
        nome: "Frango com Catupiry",
        ingredientes: "Peito de frango desfiado temperado, coberto com catupiry e milho verde.",
        preco: 48.00,
        categoria: "salgada"
    },
    {
        id: 4,
        nome: "Chocolate com Morango",
        ingredientes: "Chocolate ao leite derretido, morangos frescos fatiados e granulado.",
        preco: 50.00,
        categoria: "doce"
    },
    {
        id: 5,
        nome: "Romeu e Julieta",
        ingredientes: "Camada generosa de goiabada cremosa coberta com queijo queijo minas.",
        preco: 46.00,
        categoria: "doce"
    },
    {
        id: 6,
        nome: "Refrigerante 2 Litros",
        ingredientes: "Coca-Cola, Guaraná Antarctica ou Sprite bem gelados.",
        preco: 14.00,
        categoria: "bebida"
    },
    {
        id: 7,
        nome: "Suco Natural 500ml",
        ingredientes: "Sabores: Laranja, Limão ou Uva natural sem conservantes.",
        preco: 10.00,
        categoria: "bebida"
    }
];

// Função para renderizar o cardápio na tela
function renderizarCardapio(categoriaFiltro = "todos") {
    const containerCardapio = document.querySelector("#grid-cardapio-dinamico");
    if (!containerCardapio) return;

    // Uso do método de array .filter()
    const produtosFiltrados = categoriaFiltro === "todos" 
        ? cardapioPizzas 
        : cardapioPizzas.filter(item => item.categoria === categoriaFiltro);

    let htmlConteudo = "";

    if (produtosFiltrados.length === 0) {
        htmlConteudo = `<p class="mensagem-vazia">Nenhum item encontrado nesta categoria.</p>`;
    } else {
        // Uso de Template Literals
        produtosFiltrados.forEach(item => {
            htmlConteudo += `
                <article class="card-pizza">
                    <div class="info-pizza">
                        <h3>${item.nome}</h3>
                        <p>${item.ingredientes}</p>
                    </div>
                    <span class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                </article>
            `;
        });
    }

    containerCardapio.innerHTML = htmlConteudo;
}

// Configura os botões e links de navegação para alternar a categoria
function configurarFiltros() {
    const botoesFiltro = document.querySelectorAll(".btn-filtro, .link-categoria");

    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", function(event) {
            const categoria = this.getAttribute("data-categoria");
            
            // Atualiza botões ativos
            document.querySelectorAll(".btn-filtro").forEach(b => b.classList.remove("active"));
            const btnCorrespondente = document.querySelector(`.btn-filtro[data-categoria="${categoria}"]`);
            if (btnCorrespondente) btnCorrespondente.classList.add("active");

            // Fecha o menu mobile se estiver aberto
            const menuToggle = document.querySelector("#menu-toggle");
            if (menuToggle) menuToggle.checked = false;

            renderizarCardapio(categoria);
        });
    });
}

// Rodapé
function atualizarRodape() {
    const elAno = document.querySelector("#anoatual");
    const elModificacao = document.querySelector("#ultimaModificacao");

    if (elAno) elAno.textContent = new Date().getFullYear();
    if (elModificacao) {
        const dataModificacao = new Date(document.lastModified);
        elModificacao.textContent = `Última modificação: ${dataModificacao.toLocaleDateString("pt-BR")}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderizarCardapio("todos");
    configurarFiltros();
    atualizarRodape();
});