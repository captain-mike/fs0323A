class Test{

    public prop1!:string
    public prop2!:string
    public prop3!:string
    public prop4!:string
    public prop5!:string
    public prop6!:string
    public prop7!:string
    public prop8!:string
    public prop9!:string
    public prop10!:string
    public prop11!:string
    public prop12!:string
    public prop13!:string
    public prop14!:string
    public prop15!:string
    public prop16!:string
    public prop17!:string
    public prop18!:string
    public prop19!:string
    constructor(obj?:Test){
        if(obj){
            this.prop1 = obj.prop1
        }
    }

}

let test = new Test();


//esempio di utilizzo di classi ed interfacce fatte per la tipizzazione

//uso una classe quando devo istanziare per creare oggetti
class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
//se devo solo tipizzare va benissimo una interface o un type
interface IProductResponse{
    product:Product[];
    total: number;
    skip: number;
    limit: number;
}

