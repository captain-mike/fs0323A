import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  title:string="Hello World!"

  toggle:boolean = false;


  immagine:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";


  cambiaTesto(){
    return this.toggle ? 'Nascondi' : 'Mostra'
  }

  saluta(){
    alert('Ciao')
  }

}
