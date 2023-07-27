import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvento]'
})
export class EventoDirective {

  constructor(
    private ref: ElementRef//l'elemento su cui viene applicata la direttiva
  ) { }

  @HostListener('click') onClick(){//associo l'evento click all'elemento su cui è applicata la direttiva

    this.ref.nativeElement.textContent = 'Evento Scatenato';//una volta cliccato, il testo del bottone cambia

  }

}
