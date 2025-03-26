function toggleMenuMobile(menuMobile) {
    if (menuMobile.style.display === 'flex') {
        menuMobile.style.display = 'none';
    } else {
        menuMobile.style.display = 'flex';
    }
}

const menuDiv = document.querySelector('#menu-mobile');

const menuMobile = document.querySelector('header .nav-center .links ul');

function atualizarPosicaoIconHamburguer() {
    if (window.getComputedStyle(menuMobile).display === 'flex') {
        menuDiv.style.position = 'fixed';
    } else {
        menuDiv.style.position = 'absolute';
    }
}

const observer = new MutationObserver(atualizarPosicaoIconHamburguer);
observer.observe(menuMobile, { attributes: true, attributeFilter: ['style'] });

atualizarPosicaoIconHamburguer();

menuDiv.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMenuMobile(menuMobile);
});

document.addEventListener('click', function (event) {
    if (menuMobile.style.display === 'flex' && !menuMobile.contains(event.target) && !menuDiv.contains(event.target)) {
        menuMobile.style.display = 'none';
    }
});