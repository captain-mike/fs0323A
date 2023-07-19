"use strict";
class User {
    constructor(nome, cognome, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.anni = anni;
        this.materie = [];
    }
    presentazione() {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni}anni`;
    }
}
let utente; //non può avere la prop materie
let utente2;
