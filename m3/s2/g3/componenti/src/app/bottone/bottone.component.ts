import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.scss']
})
export class BottoneComponent {


  @Input() testo!:string;

}
