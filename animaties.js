document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
    document.querySelector('.vlakje2').classList.toggle('vlakje__naar-links');
});

setTimeout( () => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
    document.querySelector('.vlakje2').classList.toggle('vlakje__naar-links');    
}, 2000);

const menuKnop = document.querySelector('.nav__knop');
const navItems = document.querySelectorAll('.nav__link');

menuKnop.addEventListener('click', () => {
    navItems.forEach((item, index) => {
        setTimeout( () => {
            item.classList.toggle('nav__link--shuif-in');

        }, 100 * index);
    });
});