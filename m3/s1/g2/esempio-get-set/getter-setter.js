"use strict";
class Pizza {
    constructor(prezzo) {
        this.prezzo = prezzo;
    }
    get getPrezzo() {
        return this.prezzo + '€';
    }
    set setPrezzo(n) {
        this.prezzo = n;
    }
}
let margherita = new Pizza(5);
console.log(margherita.getPrezzo);
margherita.setPrezzo = 8;
console.log(margherita.getPrezzo);
