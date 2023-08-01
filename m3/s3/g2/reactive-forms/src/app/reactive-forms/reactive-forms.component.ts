import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  form!:FormGroup;

  constructor(
    private fb: FormBuilder//formBuilder permette di creare forms reattivi
  ){}


  ngOnInit(){


    this.form = this.fb.group({//il form
      nome:this.fb.control(null, [Validators.required]),//campo nome
      authData: this.fb.group({//il form group chiamato authData
        email: this.fb.control(//campo e-mail
          null,//valore del campo
          [Validators.required,Validators.email, this.emailProibiteValidator],//validatori sincroni
          this.emailEsistente//validatore asincrono
          ),
        password: this.fb.control(null)//il campo password
      }),
      sports: this.fb.array([])//un array di campi, vuoto ma ne aggiungeremo successivamente
    })

  }

  send(){
    console.log(this.form.value);//mostra i valori inseriti
  }







/**
 * metodi per la gestione dei campi sport
 */
  addSport(){
    let control = new FormControl(null);//creo un campo per il form
    (this.form.get('sports') as FormArray).push(control);//accedo all'array sports della riga 31 e aggiungo il campo appena creato
  }

  getSports(){
    return (this.form.get('sports') as FormArray).controls;//restituisce tutti i campi nell'array sports
  }





  /**
   * vetodi per la gestione della validazione
  */

  isValid(fieldName: string) {
   return this.form.get(fieldName)?.valid //true se il campo cercato è valido
  }
  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched //true se il campo cercato ha subito interazioni dall'utente
  }

  getMessage(fieldName: string) {
      return this.form.get(fieldName)?.errors!['message']//restituisce il messaggio di errore dei custom validators
  }









  emailProibite:string[] = ['mario@gmail.com','mirko@gmail.com'];

  //validatore custom sincrono
  //verifica l'inserimento di e-mails presenti nell'array della riga 85
  emailProibiteValidator = (formC:FormControl):ValidationErrors|null => {//formC sarà il campo a cui si collega il validatore

    if(this.emailProibite.includes(formC.value)){//se la mail inserita dall'utente viene trovata anche nell'array della riga 85
      return {//restituisce un oggetto contenente dettagli della validazione
        invalid:true,
        message:'Email non utilizzabile'
      }
    }

    return null;//altrimnenti restituisce null
    //null significa che non ci sono errori di inserimento da parte dell'utente

  }

  //validatore asincrono
  //simula la richiesta al server per verificare se la mail inserita è già in uso
  emailEsistente(formC:AbstractControl) {

    return new Promise<ValidationErrors|null>((resolve, reject) => {//con la promise possiamo rendere asincrona l'esecuzione

      setTimeout(()=>{//simuliamo l'attesa dovuta ad una chiamata ajax

        if(formC.value == 'prova@test.it'){//creo una situazione in cui la validazione si attiva
          resolve({//in caso di successo invio i dettagli dell'errore
            invalid:true,
            message:'Email già presente'
          })
        }else{
          reject(null);//se la validazione non si attiva invio null
        }

      }, 2000)

    })

  }


}
