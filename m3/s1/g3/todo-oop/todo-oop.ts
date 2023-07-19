class Todo{
    protected bottone!:HTMLButtonElement;
    protected testo!:HTMLInputElement;
    protected lista!:HTMLDivElement;
    protected target!:HTMLDivElement|null;
    
    constructor(selector:string){
        this.target = document.querySelector(selector);
        this.createHTML();
        this.activateButton();
    }

    protected createHTML(){

        this.bottone = document.createElement('button');
        this.bottone.textContent = 'Inserisci';

        this.testo = document.createElement('input');
        this.testo.type = 'text';

        this.lista = document.createElement('div');

        this.target?.append(this.testo, this.bottone, this.lista)

    }

    activateButton(){
        this.bottone.addEventListener('click',function(){
            
        })
    }
}

let todo =  new Todo('#todo');