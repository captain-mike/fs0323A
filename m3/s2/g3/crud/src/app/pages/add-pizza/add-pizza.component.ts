import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss']
})
export class AddPizzaComponent {

  newPizza:Partial<Pizza> = new Pizza('',0);//oggetto collegato al form
  message:string = '';//questa servirà a mostrare messaggi all'utente

  constructor(
    private pizzaSvc: PizzaService,
    private router: Router
    ){}

  check():boolean{
    //ho aggiunto questa funzione che restituisce false se uno sei due campi è vuoto
    if(!this.newPizza.gusto) return true
    if(!this.newPizza.prezzo) return true
    return false
  }


  creaPizza(){
    this.pizzaSvc.create(this.newPizza)
    .then(res => {
      this.message = `Pizza creata`;//avviso l'utente dell'avvenuta creazione

      //qui sotto ho scelto di inserire un'attesa di 3 secondi e poi mandare l'utente alla pagina menu
      setTimeout(()=>{
        this.router.navigate(['/menu'])//redirect alla pagina menu
      },3000)
    })
  }


}
