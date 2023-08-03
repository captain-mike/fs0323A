import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material';

  items:string[] = Array.from({length:100000}).map((_,i) => `Elemento ${i}`);

}
