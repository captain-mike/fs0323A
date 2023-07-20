"use strict";
function scrivi(testo, fn) {
    let target = document.getElementById('target');
    if (target)
        target.innerHTML += fn(testo);
}
function grassetto(testo) {
    return `<b>${testo}</b>`;
}
function corsivo(testo) {
    return `<i>${testo}</i>`;
}
scrivi('ciao', grassetto);
scrivi('ciao', corsivo);
scrivi('ciao', (testo) => testo);
