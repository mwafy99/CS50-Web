// Hola loop
let lang = ['Hello', 'Bonjour', 'Hallo', 'Hola', 'Salam', 'Salve'];

function hola() {
    let h1 = document.querySelector('#hola').innerHTML = lang[Math.floor(Math.random() * lang.length)];
}

// Page Counter
let counter = 0;

function count() {
    document.querySelector('.badge').innerHTML = "" + counter;
    counter++;
    setTimeout(count, 1000);
}

document.addEventListener("DOMContentLoaded", count);

// Change colors
document.querySelector('#color').onclick = function() {
    let colors = ['pink','hotpink','dodgerblue','purple','red','green','darkgray','lightgreen'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

// blinking
function blink() {
    let item = document.querySelector('#hola');
    let thing = document.querySelector('#thing');
    if (item.style.visibility === 'hidden' && thing.style.visibility === 'visible') {
        item.style.visibility = 'visible';
        thing.style.visibility = 'hidden';
    } else {
        item.style.visibility = 'hidden';
        thing.style.visibility = 'visible';
    }
}
window.setInterval(blink,900);

// location
navigator.geolocation.getCurrentPosition(function(p) {

    document.querySelector('#location').innerHTML = 'I got your location! <br>' + p.coords.latitude +' , ' + p.coords.longitude;
});
