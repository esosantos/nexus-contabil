// Seleciona o botão
const whatsappBtn = document.querySelector('.whatsapp-float');

// Função para mostrar o botão após rolar 200px
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        whatsappBtn.classList.add('show');
    } else {
        whatsappBtn.classList.remove('show');
    }
});
