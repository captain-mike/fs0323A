import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newUser: User = new User('','');


  constructor(private userSvc: UserService){}

  getUsers():User[]{
    return this.userSvc.getUsers();
  }


  invia(){
    this.userSvc.addUser({...this.newUser});
  }

}
