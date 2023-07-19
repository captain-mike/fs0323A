class Persona2{

    constructor(
        public nome:string, 
        public cognome:string, 
        public anni:number
    ){}

    private presentazione():string{
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni}anni`;
    }

}

let persona2:Persona2 = new Persona2('Mario','Rossi',30);

console.log(persona.presentazione());

class Studente2 extends Persona2{

    constructor(nome:string,cognome:string, anni:number, public materie:string[]){
        super(nome,cognome, anni);
    }

    presentazione(): string {
        //essendo private, i richiami a presentazione non sono concessi per le classi derivate
        return super.presentazione() + `, le materie che studio sono: ${this.materie}`;
    }

}

let studente2 = new Studente('Maria','Rossi',25,['JS','CSS','HTML']);

console.log(studente2.presentazione());