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
    private fb: FormBuilder
  ){}


  ngOnInit(){

    this.form = this.fb.group({
      nome:this.fb.control(null, [Validators.required]),
      authData: this.fb.group({
        email: this.fb.control(
          null,
          [Validators.required,Validators.email, this.emailProibiteValidator],//sincroni
          this.emailEsistente//asincrono
          ),
        password: this.fb.control(null)
      }),
      sports: this.fb.array([])
    })

  }

  send(){
    console.log(this.form);

  }








  addSport(){
    let control = new FormControl(null);
    (this.form.get('sports') as FormArray).push(control);
  }

  getSports(){
    return (this.form.get('sports') as FormArray).controls;
  }

  getMessage(fieldName: string) {
      return this.form.get(fieldName)?.errors!['message']
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
