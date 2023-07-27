import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl:string = "http://localhost:3000/pizza";

  constructor() { }

  getAll():Promise<Pizza[]>{
    return fetch(this.apiUrl).then(res => res.json());
  }

  create(pizza:Partial<Pizza>):Promise<Pizza>{
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizza)
    }).then(res => res.json());
  }

  delete(pizza:Pizza){
    return fetch(this.apiUrl+'/'+pizza.id,{
      method: 'DELETE'
    }).then(res => res.json());
  }

}
