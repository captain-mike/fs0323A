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
    private route:ActivatedRoute//mi servirà per poter leggere i parametri della rotta
  ){}

  ngOnInit(){
    //this.route.params restituisce un observable quindi possiamo/dobbiamo usare subscribe come metodo per gestire il dato asincrono in arrivo
    this.route.params.subscribe((params:any) => {//tipizziamo params ad any per spegnere gli errori

      //una volta letti i dati della rotta li uso per chiedere al service di usare il metodo get by id, fornendo params.id come argomento(id recuperato dalla rotta attuale)
      //in questo modo recupererà la pizza che voglio modificare
      this.pizzaSvc.getById(params.id).subscribe(res => {

        this.pizza = res[0];//arrivata la pizza dal server la assegno alla variabile d'istanza "pizza"

      })

    })

  }

  aggiornaPizza(){

    this.pizzaSvc.update(this.pizza).subscribe(res => {
      //faccio qualcosa per dare conferma
      //magari faccio anche un redirect al menu
    })

  }


}
