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

  create(pizza:Pizza):Promise<Pizza>{
    return fetch(this.apiUrl,{
      body: JSON.stringify(pizza)
    }).then(res => res.json());
  }

}
