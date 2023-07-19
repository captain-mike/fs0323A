interface IUser{

    nome:string;
    cognome:string;
    anni:number;

    presentazione():string;

}
interface IStudent{

    materie:string[];

}

class User implements IUser, IStudent{

    materie: string[] = [];
    
    constructor(
        public nome:string, 
        public cognome:string, 
        public anni:number
    ){}

    presentazione():string{
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni}anni`;
    }

}

let utente:IUser;//non può avere la prop materie
let utente2:User;