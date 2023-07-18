/**
 * in ts i parametri delle funzioni devono essere tipizzati
 */
function somma(a:number,b:number):number{
    return a + b
}

let res:number = somma(2,2);

console.log( somma(2,2) );


//fn freccia in ts

let raddoppia = (n:number):number => n * 2; 

console.log( raddoppia(5) );

/*versione con graffe
let raddoppia = (n:number):number => {
    return n * 2; 
}
*/

/**
 * Parametri facoltativi 
 * */

//inserire un valore di default rende facoltativo il dato
function multiSomma(a:number,b:number = 0,c:number = 0):number{
    return a + b + c;
}

multiSomma(1)

//il simbolo ? equivale all'aggiunta di un tipo undefined
//il problema è che poi va gestita l'eventuale mancanza del dato
function multiSomma2(a:number,b?:number,c?:number):number{
    if(!b) b = 0;
    if(!c) c = 0;

    return a + b + c;
}



