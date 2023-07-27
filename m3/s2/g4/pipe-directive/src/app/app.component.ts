import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';

  pizza:{gusto:string, prezzo:number} = {
    gusto: 'Margherita',
    prezzo: 5
  }


  oggi:Date = new Date();

  testo:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam praesentium nam, nesciunt nulla adipisci? Similique dolorem recusandae quidem ex iusto voluptate illo nisi deserunt. Magnam sit doloribus sed adipisci.'

}
