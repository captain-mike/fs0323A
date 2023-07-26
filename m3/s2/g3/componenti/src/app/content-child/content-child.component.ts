import { AfterViewInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent{

  @ContentChild('paragrafo') paragrafo!:ElementRef;


  ngAfterContentInit() {

    console.log(this.paragrafo.nativeElement.textContent);

  }

}
