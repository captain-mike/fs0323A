import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.scss']
})
export class EditPizzaComponent {

  pizza:Pizza = new Pizza('',0);

  constructor(
    private pizzaSvc: PizzaService,
    private route:ActivatedRoute
  ){}

  ngOnInit(){

    this.route.params.subscribe((params:any) => {

      this.pizzaSvc.getById(params.id).then(res => {

        this.pizza = res;

      })

    })

  }

  aggiornaPizza(){

    this.pizzaSvc.update(this.pizza).then(res => {
      //faccio qualcosa per dare conferma
      //magari faccio anche un redirect al menu
    })

  }


}
