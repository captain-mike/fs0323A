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








  addSport(){
    let control = new FormControl(null);//creo un campo per il form
    (this.form.get('sports') as FormArray).push(control);//accedo all'array sports della riga 31 e aggiungo il campo appena creato
  }

  getSports(){
    return (this.form.get('sports') as FormArray).controls;//restituisce tutti i campi nell'array sports
  }

  getMessage(fieldName: string) {
      return this.form.get(fieldName)?.errors!['message']//restituisce il messaggio di errore dei custom validators
  }






  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid
  }
  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched
  }










  emailProibite:string[] = ['mario@gmail.com','mirko@gmail.com'];

  emailProibiteValidator = (formC:FormControl):ValidationErrors|null => {

    if(this.emailProibite.includes(formC.value)){
      return {
        invalid:true,
        message:'Email non utilizzabile'
      }
    }

    return null;

  }

  emailEsistente(formC:AbstractControl) {

    return new Promise<ValidationErrors|null>((resolve, reject) => {

      setTimeout(()=>{

        if(formC.value == 'prova@test.it'){
          resolve({
            invalid:true,
            message:'Email già presente'
          })
        }else{
          reject(null);
        }

      }, 2000)

    })

  }


}
