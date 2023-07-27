import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngNotIf]'
})
export class NgNotIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,//tipizzando come templateRef facciamo riferimento all'elemento associato alla direttiva
    private containerRef: ViewContainerRef//il contenitore
  ) { }

  @Input() set ngNotIf(variabile:boolean){//il metodo ngNotIf di fatto permette di creare una sintassi simile a quella del *ngIf, e riceve un booleano

    if(!variabile){//se il booleano è false
      //è come fare append() o after()/before()
      this.containerRef.createEmbeddedView(this.templateRef);//ricreo l'elemento, che ora è visibile
    }else{
      //è come fare DOMelement.remove()
      this.containerRef.clear();//distruggo l'elemento
    }

  }

}
