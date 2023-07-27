import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective implements OnInit {

  constructor(
    private ref: ElementRef
  ) { }

  @Input() colore!:string;

  ngOnInit() {
    console.log(this.ref);

    this.ref.nativeElement.style.color = this.colore

  }


}
