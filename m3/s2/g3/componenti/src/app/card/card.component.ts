import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() immagine!:string;
  @Input() nome!:string;
  @Input() cognome!:string;


  @Input() id!:number;
  @Output() onDelete = new EventEmitter();//stiamo creando un evento custom


  delete(id:number){
    this.onDelete.emit(id);
  }
}
