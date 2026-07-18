
function updateModificationDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('last-modification').textContent = `Last Modification: ${formattedDate}`;
}

// 2. Altera a imagem dependendo da largura da tela para bater com os modelos visualizados
function handleImageResponsiveness() {
    const imgElement = document.getElementById('dynamic-image');
    
    if (window.innerWidth <= 768) {
        // Imagem Vertical focada no Lêmure (Estilo Mobile)
        imgElement.src = "https://images.unsplash.com/photo-1535268647977-a403b69fc756?auto=format&fit=crop&q=80&w=600&h=900";
    } else {
        // Imagem Horizontal com grupo de Lêmures (Estilo Desktop)
        imgElement.src = "https://images.unsplash.com/photo-1574063413132-355dbfd83e82?auto=format&fit=crop&q=80&w=1200&h=600";
    }
}

// Executa as funções ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    updateModificationDate();
    handleImageResponsiveness();
});

// Atualiza a proporção da imagem caso a tela seja redimensionada
window.addEventListener('resize', handleImageResponsiveness);