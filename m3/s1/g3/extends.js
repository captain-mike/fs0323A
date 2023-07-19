"use strict";
class Persona {
    constructor(nome, cognome, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.anni = anni;
    }
    presentazione() {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni}anni`;
    }
}
let persona = new Persona('Mario', 'Rossi', 30);
console.log(persona.presentazione());
class Studente extends Persona {
    constructor(nome, cognome, anni, materie) {
        super(nome, cognome, anni);
        this.materie = materie;
    }
    presentazione() {
        return super.presentazione() + `, le materie che studio sono: ${this.materie}`;
    }
}
let studente = new Studente('Maria', 'Rossi', 25, ['JS', 'CSS', 'HTML']);
console.log(studente.presentazione());
