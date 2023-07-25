import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent {
  constructor(private userSvc: UserService){}

  getUsers():User[]{
    return this.userSvc.getUsers();
  }
}
