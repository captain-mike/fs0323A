class Persona{

    constructor(
        public nome:string, 
        public cognome:string, 
        public anni:number
    ){}

    presentazione():string{
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni}anni`;
    }

}

let persona:Persona = new Persona('Mario','Rossi',30);

console.log(persona.presentazione());

class Studente extends Persona{

    constructor(nome:string,cognome:string, anni:number, public materie:string[]){
        super(nome,cognome, anni)
    }

    presentazione(): string {
        return super.presentazione() + `, le materie che studio sono: ${this.materie}`
    }

}

let studente = new Studente('Maria','Rossi',25,['JS','CSS','HTML']);

console.log(studente.presentazione());