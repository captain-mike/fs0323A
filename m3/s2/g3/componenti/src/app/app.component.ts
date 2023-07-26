import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //cerca un elemento con la localvariable #elemento e lo inserisce nella prop elementoCercato
  @ViewChild('elemento') elementoCercato!:ElementRef;

  title = 'componenti';


  ngAfterViewInit() {

    console.log(this.elementoCercato.nativeElement.textContent);


  }

}
