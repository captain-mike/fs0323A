// function somma(a:number, b:number):number{
//     return a + b;
// }
// function concatena(a:string, b:string):string{
//     return a + b;
// }


function sommaConcatena<T>(a:T, b:T):T{
    return (a as any) + (b as any);
}


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


