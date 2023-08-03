import { Component } from '@angular/core';
import { AuthService } from '../pages/auth/auth.service';
import { IUser } from '../pages/auth/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authSvc: AuthService
  ){}

  loggedUser!:IUser;


  ngOnInit(){
    this.authSvc.user$.subscribe(accessData => {
      this.loggedUser = accessData?.user as IUser
    })
  }

}
