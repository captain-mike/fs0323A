import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Hello World';

  pizze:{gusto:string, prezzo:number}[] = [
    {
      gusto:'Margherita',
      prezzo:5
    },
    {
      gusto:'Diavola',
      prezzo:1
    }
  ]

}
