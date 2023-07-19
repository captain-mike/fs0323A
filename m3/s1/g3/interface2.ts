interface IUser2{

    nome:string;
    cognome:string;
    anni:number;
    materie:IStudent

    presentazione():string;

}
interface IStudent{

    materie:string[];

}