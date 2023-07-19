class Pizza{

    constructor(public gusto:string, readonly prezzo:number){}

    changePrice(n:number){
        //this.prezzo = n non posso, è readonly
    }

}

let pizza = new Pizza('Margherita',5);
console.log(pizza.prezzo);
