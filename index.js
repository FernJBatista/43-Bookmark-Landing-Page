const mobileMenuButton = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const closeMenuButton = document.querySelector('.close-menu-button');
const logo = document.querySelector('.logo');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.add('hidden');
    navList.classList.remove('hidden');
    closeMenuButton.classList.remove('hidden');
    logo.classList.add('active');
})

closeMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.remove('hidden');
    navList.classList.add('hidden');
    closeMenuButton.classList.add('hidden');
    logo.classList.remove('active');
})  