import { Component } from '@angular/core';
import { Pizza } from 'src/app/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  pizze: Pizza[] = [];

  constructor(
    private pizzaSvc: PizzaService
  ){}

  ngOnInit(){

    this.pizzaSvc.getAll()//chiedo al server di fornirmi le pizze
    .subscribe(pizze => {//una volta ricevute le metto nell'array del componente
      this.pizze = pizze;
    })

  }

  eliminaPizza(pizza:Pizza){

    this.pizzaSvc.delete(pizza)//chiedo al server di eliminare il dato
    .subscribe(() => {//se il then viene scatenato significa che il server ha eliminato la pizza
      this.pizze = this.pizze.filter(p => p.id != pizza.id)//ora non mi resta che eliminarla anche dall'array
    })

  }

}
