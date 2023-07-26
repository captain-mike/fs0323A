import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  users:User[] = [
    {
      id:0,
      nome:'Mario',
      cognome:'Rossi',
      foto: 'https://picsum.photos/200/100?random=1'
    },
    {
      id:1,
      nome:'Marina',
      cognome:'Bianchi',
      foto: 'https://picsum.photos/200/100?random=2'
    },
    {
      id:2,
      nome:'Raffaele',
      cognome:'Rossi',
      foto: 'https://picsum.photos/200/100?random=3'
    },
  ];


  removeUser(id:number){

    this.users = this.users.filter(u => u.id != id );

  }

}
