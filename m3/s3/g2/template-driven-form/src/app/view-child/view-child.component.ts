import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

  generi:string[] = ['uomo','donna','altro'];//dati che uso solo per costruire una parte del form con un ngFor nell'html

  @ViewChild('f',{static:true}) form!:NgForm;//cerco l'elemento identificato da #f grazie al decoratore viewChild e lo inserisco nella variabile form

  submit(form:NgForm) {

    console.log(form);
    console.log(form.form.value);//qui ci sono tutti i valori sotto forma di oggetto unico

    this.form.reset();//resetto tutti i campi che hanno la direttiva ngModel
  }

  setDati(){

    //questo metodo, se lanciato andrà a valorizzare i campi del form

    //L'oggetto deve ricalcare la struttura del form
    //i campi che hanno la direttiva ngModel hanno anche un name, questi name compongono l'oggetto sottostante
    let datiDaInserire = {
      authData:{
        email:'esempio@esempio.it',
        password:'password'
      },
      cap:42124
    }

    this.form.form.patchValue(datiDaInserire);
  }

  ngOnInit(){
 //esegue una operazione ad ogni cambio di stato del form
    this.form.statusChanges?.subscribe(status => console.log(status)//valid | invalid
    )

  }

}
