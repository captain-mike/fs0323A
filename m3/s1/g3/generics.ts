// function somma(a:number, b:number):number{
//     return a + b;
// }
// function concatena(a:string, b:string):string{
//     return a + b;
// }


/*
La lettera T che vedi tra le parentesi uncinate indica che la funzione andrà ad utilizzare un generic chiamato T(ma poteva essere chiamato anche diversamente)
Questo permnetterà di "parametrizzare" anche i tipi di dato, quindi successivamente andremo a dire che T corrisponde ad un tipo di dato specifico
*/
function sommaConcatena<T>(a:T, b:T):T{
    return (a as any) + (b as any);
}

/**
 * Siccome sommaConcatena() utilizza un generic(quello chiamato T alla riga 13)
 * l'indicazione <string> o <number> va ad indicare quale sarà il tipo di dato che viene utilizzato per sopstituire il generic
 * In parole povere se scrivo <string> è come se la funzione cambiasse così => sommaConcatena(a:string, b:string):string
 */
console.log( sommaConcatena<string>('ciao',' ciao') );
console.log( sommaConcatena<number>(5,5) );


interface KeyPair<T,U>{
    key:T,
    value:U;
}

let a:KeyPair<string, number> = {
    key: "",
    value: 0
}


