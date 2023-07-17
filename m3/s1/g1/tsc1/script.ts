console.log('Hello World!');

//tipizzazione variabili
let nome:string = "Paolo";

nome = "Mario";//funziona
//nome = 5 -> non funziona, non posso assegnare un numero ad una variabile string 


let numero:number = 0;
let lista:[] = [];//la var deve contenere una lista vuota
let lista2:string[] = ['a','b','c']//array di sole stringhe
let lista3:number[] = [0,1,2]//array di soli numeri

let persona:{nome:string, cognome:string, anni:number} = {
    nome: "",
    cognome: "",
    anni: 0
}

let bool:boolean = false;


let qualsiasi:any = 0;

let union:string|number|boolean = 'Stringa';
union = 0

let a:undefined|string;
let b!:string;

//tipizzazione funzioni
function restituisciStringa():string{
    return 'Hello World!';
}
function mostraStringa():void{
    alert('Hello World!');
}

//esempio di funzione in una variabile
const fn = function():void{

}
