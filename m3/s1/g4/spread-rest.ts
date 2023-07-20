
let numeri1 = [1,2,3];
let numeri2 = [4,5,6];

let tuttiNumeri = [...numeri1, ...numeri2]//[1,2,3,4,5,6]


let persona1 = {
   nome:'Mario'
}
let persona2 = {
   cognome:'Rossi'
}

let persona3 = {...persona1, ...persona2}

console.log(persona3);
