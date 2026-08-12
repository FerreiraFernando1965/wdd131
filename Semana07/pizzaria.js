// Array do Cardápio de Pizzas
const pizzas = [
    {
        nome: "Frango com Catupiry",
        categoria: "salgada",
        ingredientes: "Peito de frango desfioado, coberto com requeijão catupiry e azeitonas.",
        preco: "R$ 48,00",
        imagem: "frango.webp"
    },
    {
        nome: "Bacon Especial",
        categoria: "salgada",
        ingredientes: "Mussarela derretida, coberta com cubos crocantes de bacon e orégano.",
        preco: "R$ 50,00",
        imagem: "bacon sem fundo.webp"
    },
    {
        nome: "Marguerita",
        categoria: "salgada",
        ingredientes: "Mussarela, rodelas de tomate fresco, manjericão e azeitonas verdes.",
        preco: "R$ 45,00",
        imagem: "marguerita sem fundo.webp"
    },
    {
        nome: "Carne Seca com Catupiry",
        categoria: "salgada",
        ingredientes: "Carne seca desfiada, queijo coalho em cubos, catupiry e pimenta biquinho.",
        preco: "R$ 56,00",
        imagem: "carne seca.webp"
    },
    {
        nome: "Brócolis com Requeijão",
        categoria: "salgada",
        ingredientes: "Brócolis temperado, coberto com requeijão cremoso e orégano.",
        preco: "R$ 46,00",
        imagem: "pizzadebrocolierequeijao.webp"
    },
    {
        nome: "Banana Nevada",
        categoria: "doce",
        ingredientes: "banana fatiada, leite condensado, chocolate branco.",
        preco: "R$ 44,00",
        imagem: "banana nevada.webp"
    },
    {
        nome: "Nordestina",
        categoria: "salgada",
        ingredientes: "Calabresa fatiada, queijo coalho grelhado e molho especial.",
        preco: "R$ 52,00",
        imagem: "pizzanordestina.webp"
    },
    {
        nome: "Dois Chocolates",
        categoria: "doce",
        ingredientes: "Combinação especial de chocolate ao leite e chocolate branco trançado.",
        preco: "R$ 50,00",
        imagem: "chocolate sem fundo.webp"
    },
    {
        nome: "Sensação (Morango)",
        categoria: "doce",
        ingredientes: "Base de chocolate ao leite coberta com morangos frescos fatiados.",
        preco: "R$ 54,00",
        imagem: "morango com chocolate sem fundo.webp"
    }
];

// Função para renderizar as pizzas na tela
function renderizarCardapio(lista) {
    const grid = document.querySelector("#grid-cardapio-dinamico");
    grid.innerHTML = "";

    lista.forEach(pizza => {
        const card = document.createElement("article");
        card.classList.add("card-pizza");
        card.innerHTML = `
            <img src="img/${pizza.imagem}" alt="Pizza ${pizza.nome}" loading="lazy">
            <h3>${pizza.nome}</h3>
            <p>${pizza.ingredientes}</p>
            <span class="preco">${pizza.preco}</span>
        `;
        grid.appendChild(card);
    });
}

// Filtro de Categorias
const botoesFiltro = document.querySelectorAll(".btn-filtro");

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", (e) => {
        const categoria = e.target.getAttribute("data-categoria");
        
        // Atualiza estado ativo dos botões
        botoesFiltro.forEach(b => b.classList.remove("active"));
        document.querySelectorAll(`[data-categoria="${categoria}"]`).forEach(b => b.classList.add("active"));

        // Filtra a lista
        if (categoria === "todos") {
            renderizarCardapio(pizzas);
        } else {
            const pizzasFiltradas = pizzas.filter(pizza => pizza.categoria === categoria);
            renderizarCardapio(pizzasFiltradas);
        }
    });
});

// Inicialização de datas no rodapé
document.querySelector("#anoatual").textContent = new Date().getFullYear();

const dataModificacao = new Date(document.lastModified);
document.querySelector("#ultimaModificacao").textContent = `Última atualização: ${dataModificacao.toLocaleDateString("pt-BR")}`;

// Inicializar carregando todas as pizzas
renderizarCardapio(pizzas);