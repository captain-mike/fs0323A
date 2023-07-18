"use strict";
let pizze = [
    'Margherita',
    'Diavola',
    'Mimosa'
];
pizze.push('Capricciosa');
console.log(pizze);
let pizzeObj = [
    {
        nome: 'Margherita',
        prezzo: 5
    },
    {
        nome: 'Diavola',
        prezzo: 1
    },
    {
        nome: 'Capricciosa',
        prezzo: 7
    },
];
//riordino le pizze per prezzo crescente
pizzeObj.sort((a, b) => {
    return a.prezzo - b.prezzo;
});
console.log(pizzeObj);
class User {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.presentazione();
    }
    presentazione() {
        console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome}`);
    }
}
let mario = new User('Mario', 'Rossi');
console.log('======================================');
mario.cognome = 'Bianchi'; //modifico il cognome, posso farlo perché la prop è public(implicitamente)
console.log(mario);
//mario.presentazione(); non posso accedere al metodo, perché è protected
//console.log(mario.nome);
console.log('======================================');
var Mesi;
(function (Mesi) {
    Mesi[Mesi["Gennaio"] = 0] = "Gennaio";
    Mesi[Mesi["Febbraio"] = 1] = "Febbraio";
    Mesi[Mesi["Marzo"] = 2] = "Marzo";
})(Mesi || (Mesi = {}));
/*
Se non assegno valori, questi saranno assegnati automaticamente sotto forma di indice(partendo da zero)
*/
console.table(Mesi);
console.table(Mesi.Gennaio);
console.table(Mesi[0]);
//Esempio di utilizzo di un enum per la categorizzazione di libri
var TipiLibro;
(function (TipiLibro) {
    TipiLibro["Romanzo"] = "Romanzo";
    TipiLibro["Saggio"] = "Saggio";
    TipiLibro["Fantasy"] = "Fantasy";
    TipiLibro["Biografia"] = "Biografia";
})(TipiLibro || (TipiLibro = {}));
const libro1 = {
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkien",
    tipo: TipiLibro.Fantasy //vah che bello che è scritto così
};
console.log(libro1);
/**
 * in ts i parametri delle funzioni devono essere tipizzati
 */
function somma(a, b) {
    return a + b;
}
let res = somma(2, 2);
console.log(somma(2, 2));
//fn freccia in ts
let raddoppia = (n) => n * 2;
console.log(raddoppia(5));
/*versione con graffe
let raddoppia = (n:number):number => {
    return n * 2;
}
*/
/**
 * Parametri facoltativi
 * */
//inserire un valore di default rende facoltativo il dato
function multiSomma(a, b = 0, c = 0) {
    return a + b + c;
}
multiSomma(1);
//il simbolo ? equivale all'aggiunta di un tipo undefined
//il problema è che poi va gestita l'eventuale mancanza del dato
function multiSomma2(a, b, c) {
    if (!b)
        b = 0;
    if (!c)
        c = 0;
    return a + b + c;
}
let now = new Date();
now.getHours();
console.log(Date.parse('18/07/2023'));
Math.random();
try {
    throw Error("Errore generico");
}
catch (err) {
    console.log(err);
}
class Pizza {
    constructor(prezzo) {
        this.prezzo = prezzo;
    }
}
//# sourceMappingURL=app.js.map