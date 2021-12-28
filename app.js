const menu = document.querySelector(".menu");
const openmenubtn = document.querySelector(".open-menu");
const closemenubtn = document.querySelector(".Close-menú");

function toggleMenu() {
    menu.classList.toggle("menu_opened")
}

openmenubtn.addEventListener("click", toggleMenu);
closemenubtn.addEventListener("click", toggleMenu);