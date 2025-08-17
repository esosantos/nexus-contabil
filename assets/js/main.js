// Fecha o menu Bootstrap quando um link é clicado (para menus responsivos)
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o menu colapsável do Bootstrap
    const navbarCollapse = document.getElementById('navbarNav');
    
    // Seleciona todos os links dentro do menu
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    
    // Para cada link, adiciona o evento de clique
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se o menu está aberto (tem a classe 'show')
            if (navbarCollapse.classList.contains('show')) {
                // Cria uma instância do Collapse do Bootstrap
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                
                // Fecha o menu
                bsCollapse.hide();
            }
        });
    });
});