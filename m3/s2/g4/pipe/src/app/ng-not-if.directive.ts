import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngNotIf]'
})
export class NgNotIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,//tipizzando come templateRef facciamo riferimento all'elemento associato alla direttiva
    private containerRef: ViewContainerRef//il contenitore
  ) { }

  @Input() set ngNotIf(variabile:boolean){

    if(!variabile){
      //è come fare append() o after()/before()
      this.containerRef.createEmbeddedView(this.templateRef);
    }else{
      //è come fare DOMelement.remove()
      this.containerRef.clear();
    }

  }

}
