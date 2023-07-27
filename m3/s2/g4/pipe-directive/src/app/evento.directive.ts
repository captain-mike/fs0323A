import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvento]'
})
export class EventoDirective {

  constructor(
    private ref: ElementRef
  ) { }

  @HostListener('click') onClick(){

    this.ref.nativeElement.textContent = 'Evento Scatenato';

  }

}
