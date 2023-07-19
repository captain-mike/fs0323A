"use strict";
class Todo {
    constructor(selector) {
        this.target = document.querySelector(selector);
        this.createHTML();
        this.activateButton();
    }
    createHTML() {
        var _a;
        this.bottone = document.createElement('button');
        this.bottone.textContent = 'Inserisci';
        this.testo = document.createElement('input');
        this.testo.type = 'text';
        this.lista = document.createElement('div');
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.append(this.testo, this.bottone, this.lista);
    }
    activateButton() {
        this.bottone.addEventListener('click', function () {
        });
    }
}
let todo = new Todo('#todo');
