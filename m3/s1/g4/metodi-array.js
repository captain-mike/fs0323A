"use strict";
const numeri = [1, 2, 3, 4, 5];
console.log(numeri.map(n => n * 2), numeri);
console.log(numeri.filter(n => n > 2));
console.log(numeri.find(n => n > 2));
let pizze = [
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
//eliminare da array usando findindex e splice
/**
 * DECOMMENTA PER VEDERE L'OUTPUT
 *
let index = pizze.findIndex(p => p.gusto == 'Hawayana');//trova l'indice della pizza il cui gusto è Hawayana
pizze.splice(index,1)
*/
pizze = pizze.filter(p => p.gusto != 'Hawayana');
console.log(pizze);
