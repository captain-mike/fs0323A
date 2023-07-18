class Pizza{

    protected prezzo!:number;

    constructor(prezzo:number){
        this.prezzo = prezzo;
    }

    get getPrezzo():string{
        return this.prezzo + '€';
    }

    set setPrezzo(n:number){
        this.prezzo = n;
    }

}


let margherita = new Pizza(5);

console.log( margherita.getPrezzo );

margherita.setPrezzo = 8;

console.log( margherita.getPrezzo );