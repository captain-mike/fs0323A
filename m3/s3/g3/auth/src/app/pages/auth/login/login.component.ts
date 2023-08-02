import { Component } from '@angular/core';
import { ILogin } from '../interfaces/login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData:ILogin = {
    email : '',
    password : ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  login(){
    this.authSvc.login(this.formData).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }


}
