"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json));
function Call(url) {
    return __awaiter(this, void 0, void 0, function* () {
        //let todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
        //let users = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        let [todos, users] = yield Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()),
            fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()) //10
        ]);
    });
}
