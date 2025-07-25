const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav-list');

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})