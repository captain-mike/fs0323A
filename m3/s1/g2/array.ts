let pizze:string[] = [
    'Margherita',
    'Diavola',
    'Mimosa'
];

pizze.push('Capricciosa');

console.log(pizze);

//posso creare un type custom, per indicare da adesso in poi oggetti di tipo Pizza
type Pizza = {
    nome:string,
    prezzo:number
}

let pizzeObj:Pizza[] = [
    {
        nome: 'Margherita',
        prezzo: 5
    },
    {
        nome: 'Diavola',
        prezzo: 1
    },
    {
        nome: 'Capricciosa',
        prezzo: 7
    },
]

//riordino le pizze per prezzo crescente
pizzeObj.sort((a,b)=>{
    return a.prezzo - b.prezzo
})

console.log(pizzeObj);

