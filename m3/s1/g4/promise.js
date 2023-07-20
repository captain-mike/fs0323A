"use strict";
let promise = new Promise((resolve, reject) => {
    let password = 'password';
    setTimeout(() => {
        if (password == 'password') {
            resolve('Successo');
        }
        else {
            reject('Insucceso');
        }
    }, 5000);
});
//console.log(promise); => non è possibile leggere il contenuto
promise.then((successo) => console.log(successo), (insuccesso) => console.error(insuccesso));
//versione semplificata
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Successo');
    }, 5000);
});
promise2.then(res => console.log(res));
