"use strict";
class Pizza {
    constructor(gusto, prezzo) {
        this.gusto = gusto;
        this.prezzo = prezzo;
    }
    changePrice(n) {
        //this.prezzo = n non posso, è readonly
    }
}
let pizza = new Pizza('Margherita', 5);
console.log(pizza.prezzo);
