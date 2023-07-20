"use strict";
let pizze2 = [
    {
        gusto: 'Margherita',
        prezzo: 5,
        disponibile: true
    },
    {
        gusto: 'Diavola',
        prezzo: 1,
        disponibile: true
    },
    {
        gusto: 'Hawayana',
        prezzo: 500,
        disponibile: false
    }
];
//destrutturazione array
let [margherita, diavola, hawayana] = pizze2;
console.log(margherita, diavola);
//destrutturazione oggetti
let { gusto, prezzo, disponibile } = margherita;
console.log(gusto, prezzo);
