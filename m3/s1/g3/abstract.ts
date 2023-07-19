abstract class Veicolo{
    
    abstract vel:number;

    constructor(
        public maxVel:number,
        public nRuote:number = 4
        ){}

    abstract accelera(n?:number):void
    abstract frena(n?:number):void

    stop(){
        this.vel = 0;
    }

}

class Bici extends Veicolo{
    vel: number = 0;

    constructor(){
        super(40,2);
    }

    togliMettiRotelle(){
        this.nRuote = this.nRuote == 4 ? 2 : 4;
    }

    accelera(): void {
        this.vel++;
    }
    frena(): void {
        this.vel--;
    }

}

let bicicletta = new Bici();

console.log(bicicletta);
bicicletta.accelera();//vel + 1
bicicletta.accelera();//vel + 1
bicicletta.frena();//vel - 1 
console.log(bicicletta.vel);


class Auto extends Veicolo{
    vel: number = 0;

    constructor(public marca:string, public modello:string){
        super(300);
    }
    accelera(n:number): void {
       this.vel += n;
    }
    frena(n:number): void {
        this.vel -= n;
    }
}


let bmw = new Auto('Bmw','Serie 4');

bmw.accelera(5);
bmw.stop();
console.log(bmw);


