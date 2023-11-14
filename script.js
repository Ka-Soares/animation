const menu = document.querySelector('nav')

function ativaScroll(){
    menu.classList.toggle('ativo', scrollY >50);
}

window.addEventListener('scroll', ativaScroll)