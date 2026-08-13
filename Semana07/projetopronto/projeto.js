

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
        ingredientes: "Camada generosa de goiabada cremosa coberta com queijo minas.",
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

// ==========================================================================
// 2. CARDÁPIO E FILTROS (Manipulação do DOM & Array Methods)
// ==========================================================================
function renderizarCardapio(categoriaFiltro = "todos") {
    const containerCardapio = document.querySelector("#grid-cardapio-dinamico");
    if (!containerCardapio) return; // Se a página não tiver o cardápio, ignora

    // Filtragem via .filter()
    const produtosFiltrados = categoriaFiltro === "todos" 
        ? cardapioPizzas 
        : cardapioPizzas.filter(item => item.categoria === categoriaFiltro);

    let htmlConteudo = "";

    if (produtosFiltrados.length === 0) {
        htmlConteudo = `<p class="mensagem-vazia">Nenhum item encontrado nesta categoria.</p>`;
    } else {
        // Construção do HTML via Template Literals
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

function configurarFiltros() {
    const botoesFiltro = document.querySelectorAll(".btn-filtro, .link-categoria");

    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", function(event) {
            const categoria = this.getAttribute("data-categoria");
            
            // Marca o botão ativo
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

// ==========================================================================
// 3. PERSISTÊNCIA DE DADOS (localStorage)
// ==========================================================================
function salvarNoLocalStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
}

function obterDoLocalStorage(chave) {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : null;
}

// ==========================================================================
// 4. FORMULÁRIO DE CONTATO (Eventos e Validação)
// ==========================================================================
function manipularFormulario() {
    const form = document.querySelector("#form-contato");
    const containerMensagem = document.querySelector("#mensagem-retorno");

    if (!form) return;

    // Preenche automaticamente nome e e-mail se salvos anteriormente
    const ultimoUsuario = obterDoLocalStorage("ultimo_cliente");
    if (ultimoUsuario && ultimoUsuario.nome) {
        const campoNome = document.querySelector("#nome");
        const campoEmail = document.querySelector("#email");
        if (campoNome) campoNome.value = ultimoUsuario.nome;
        if (campoEmail) campoEmail.value = ultimoUsuario.email;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const assunto = document.querySelector("#assunto").value;

        // Salva dados no localStorage
        salvarNoLocalStorage("ultimo_cliente", { nome, email });

        // Mensagem dinâmica de acordo com o assunto selecionado
        let textoStatus = "";
        if (assunto === "pedido") {
            textoStatus = `Obrigado pelo pedido, ${nome}! Entraremos em contato via WhatsApp rapidamente.`;
        } else if (assunto === "reserva") {
            textoStatus = `Sua solicitação de reserva foi recebida com sucesso, ${nome}!`;
        } else {
            textoStatus = `Obrigado por sua mensagem, ${nome}! Responderemos em breve no e-mail: ${email}.`;
        }

        // Exibe mensagem de confirmação
        if (containerMensagem) {
            containerMensagem.innerHTML = `<p class="sucesso-mensagem">${textoStatus}</p>`;
            containerMensagem.classList.remove("mensagem-oculta");
        }

        form.reset();
    });
}

// ==========================================================================
// 5. ACESSIBILIDADE E NAVEGAÇÃO MOBILE
// ==========================================================================
function configurarMenuMobile() {
    const menuToggle = document.querySelector("#menu-toggle");
    const hamburgerBtn = document.querySelector(".hamburger-btn");

    if (menuToggle && hamburgerBtn) {
        menuToggle.addEventListener("change", function() {
            hamburgerBtn.setAttribute("aria-expanded", this.checked);
        });
    }
}

// ==========================================================================
// 6. INFORMAÇÕES DO RODAPÉ (Data dinâmica e modificação)
// ==========================================================================
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

// ==========================================================================
// 7. INICIALIZAÇÃO
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
    renderizarCardapio("todos");
    configurarFiltros();
    manipularFormulario();
    configurarMenuMobile();
    atualizarRodape();
});