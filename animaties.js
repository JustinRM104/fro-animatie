document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
    document.querySelector('.vlakje2').classList.toggle('vlakje__naar-links');
});

setTimeout( () => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
    document.querySelector('.vlakje2').classList.toggle('vlakje__naar-links');    
}, 2000);