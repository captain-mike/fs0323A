"use strict";
class Veicolo {
    constructor(maxVel, nRuote = 4) {
        this.maxVel = maxVel;
        this.nRuote = nRuote;
    }
    stop() {
        this.vel = 0;
    }
}
class Bici extends Veicolo {
    constructor() {
        super(40, 2);
        this.vel = 0;
    }
    togliMettiRotelle() {
        this.nRuote = this.nRuote == 4 ? 2 : 4;
    }
    accelera() {
        this.vel++;
    }
    frena() {
        this.vel--;
    }
}
let bicicletta = new Bici();
console.log(bicicletta);
bicicletta.accelera(); //vel + 1
bicicletta.accelera(); //vel + 1
bicicletta.frena(); //vel - 1 
console.log(bicicletta.vel);
class Auto extends Veicolo {
    constructor(marca, modello) {
        super(300);
        this.marca = marca;
        this.modello = modello;
        this.vel = 0;
    }
    accelera(n) {
        this.vel += n;
    }
    frena(n) {
        this.vel -= n;
    }
}
let bmw = new Auto('Bmw', 'Serie 4');
bmw.accelera(5);
bmw.stop();
console.log(bmw);
