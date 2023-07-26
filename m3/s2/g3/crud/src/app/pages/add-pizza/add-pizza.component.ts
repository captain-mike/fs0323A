import { Component } from '@angular/core';
import { Pizza } from 'src/app/pizza';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss']
})
export class AddPizzaComponent {

  newPizza:Partial<Pizza> = new Pizza('',0);

}
