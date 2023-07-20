function sommaConcatena(a:number, b:number):number;

function sommaConcatena(a:string, b:string):string;

function sommaConcatena(a:any, b:any):any{
    return a + b
}

console.log( sommaConcatena(5,5) );
console.log( sommaConcatena('Ciao','Ciao') );
