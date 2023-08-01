import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {

  nome:string = ''
  cognome:string = ''

  submit(){
    //fai qualcosa
  }
}
