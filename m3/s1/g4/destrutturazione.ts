type pizza2 = {
    gusto:string,
    prezzo:number,
    disponibile:boolean
}

let pizze2:pizza2[] = [
    {
        gusto:'Margherita',
        prezzo:5,
        disponibile:true
    },
    {
        gusto:'Diavola',
        prezzo:1,
        disponibile:true
    },
    {
        gusto:'Hawayana',
        prezzo:500,
        disponibile:false
    }
]

//destrutturazione array
let [margherita, diavola, hawayana] = pizze2;

console.log(margherita, diavola);


//destrutturazione oggetti

let {gusto, prezzo, disponibile} = margherita;

console.log(gusto, prezzo);





