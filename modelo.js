 document.addEventListener("DOMContentLoaded", function() {
            // Atualiza dinamicamente o texto da imagem com base no tamanho da tela
            const heroBg = document.getElementById('hero-bg');
            
            function updateImageText() {
                if (window.innerWidth < 768) {
                    heroBg.innerText = "Small Image";
                } else {
                    heroBg.innerText = ""; // O CSS assume com o pseudo-elemento ::after
                }
            }

            // Define a data de modificação atualizada automaticamente no rodapé
            const dateSpan = document.getElementById('last-modified-date');
            const today = new Date();
            dateSpan.textContent = today.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
               
            });

            // Executa a checagem de tamanho de tela
            window.addEventListener('resize', updateImageText);
            updateImageText();
        });