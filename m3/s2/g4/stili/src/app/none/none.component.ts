import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  templateUrl: './none.component.html',
  styleUrls: ['./none.component.scss'],
  encapsulation:ViewEncapsulation.None
  //gli stili del componente diventano globali
})
export class NoneComponent {

}
