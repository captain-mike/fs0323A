import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective implements OnInit {

  constructor(
    private ref: ElementRef//l'elemento su cui viene applicata la direttiva
  ) { }

  @Input() colore!:string;//grazie a questo è possibile attivare un attributo "colore" che permetterà a chi usa la direttiva di inserire dinamicamente un colore, senza modificare la presente classe

  ngOnInit() {
    console.log(this.ref.nativeElement);
    //this.ref.nativeElement => permette di accedere all'elemento del dom a cui è stata applicata la direttiva, e da lì manipolarlo

    this.ref.nativeElement.style.color = this.colore;

  }


}
