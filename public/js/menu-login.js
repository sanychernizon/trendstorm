const menuLogin = document.querySelector('#nav-login');
const thumb = document.querySelector('#menu-login');
const menu = document.querySelector('.box-nav-login');

let thumbClicked = false;

function toggleMenu() {

    if (thumbClicked === false) {
        menuLogin.style.display = 'flex';
        thumbClicked = true;
    } else {
        menuLogin.style.display = 'none';
        thumbClicked = false;
    }
}

function hideMenu() {
    menuLogin.style.display = 'none';
}

thumb.addEventListener('click', toggleMenu);

// Fechar quando clicar fora do menu

document.addEventListener('click', function (event) {
    var isClickInside = menu.contains(event.target);

    if (!isClickInside) {
        menuLogin.style.display = 'none';
        thumbClicked = false;
    }
});
