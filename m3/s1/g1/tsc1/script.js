"use strict";
console.log('Hello World!');
//tipizzazione variabili
let nome = "Paolo";
nome = "Mario"; //funziona
//nome = 5 -> non funziona, non posso assegnare un numero ad una variabile string 
let numero = 0;
let lista = []; //la var deve contenere una lista vuota
let lista2 = ['a', 'b', 'c']; //array di sole stringhe
let lista3 = [0, 1, 2]; //array di soli numeri
let persona = {
    nome: "",
    cognome: "",
    anni: 0
};
let bool = false;
let qualsiasi = 0;
let union = 'Stringa';
union = 0;
let a;
let b;
//tipizzazione funzioni
function restituisciStringa() {
    return 'Hello World!';
}
function mostraStringa() {
    alert('Hello World!');
}
//esempio di funzione in una variabile
const fn = function () {
};
