const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = document.querySelector('.btn-fechar');

// abrir menu
btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
    overlay.classList.add('ativo');
});

// fechar menu (X)
btnFechar.addEventListener('click', fecharMenu);

// fechar menu clicando no overlay
overlay.addEventListener('click', fecharMenu);

// fechar menu ao clicar em qualquer link
document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

function fecharMenu() {
    menuMobile.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (!target) return;

        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    });
});



