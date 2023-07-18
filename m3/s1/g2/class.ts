class User{

    protected nome!:string;
    cognome!:string;

    constructor(nome:string, cognome:string){
        this.nome = nome;
        this.cognome = cognome;
        this.presentazione();
    }

    protected presentazione(){
        console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome}`);
    }
    
}

let mario = new User('Mario','Rossi');

console.log('======================================');
mario.cognome = 'Bianchi';//modifico il cognome, posso farlo perché la prop è public(implicitamente)
console.log(mario);
//mario.presentazione(); non posso accedere al metodo, perché è protected
//console.log(mario.nome);
console.log('======================================');


