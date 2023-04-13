function navbar() {
    const menu = document.querySelector('.menu-2');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    console.log("clicked");
}