import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IRegister } from '../interfaces/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formData:IRegister = {
    nome : '',
    cognome : '',
    email : '',
    password : ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  register(){
    this.authSvc.signUp(this.formData)
    .subscribe(res => {
      console.log('registrato')
      this.router.navigate(['/register'])
    })
  }


}
