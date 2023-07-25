import { Component } from '@angular/core';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  users:User[] = [
  {
    email: 'mario@rossi.it',
    password:'password'
  }
  ];

  newUser:User = new User('','');

  invia(){
    //aggiungo i dati all'array
    this.users.push({...this.newUser});
    //svuoto il form
    this.newUser.email = '';
    this.newUser.password = '';
  }



}
