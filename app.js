// Hola loop
let lang = ['Hello', 'Bonjour', 'Hallo', 'Hola', 'Salam', 'Salve'];

function hola() {
    let h1 = document.querySelector('#hola').innerHTML = lang[Math.floor(Math.random() * lang.length)] + ' Ducky';
}

// Page Counter
let counter = 0;

function count() {
    document.querySelector('.badge').innerHTML = "" + counter;
    counter++;
    setTimeout(count, 1000);
}

document.addEventListener("DOMContentLoaded", count);

