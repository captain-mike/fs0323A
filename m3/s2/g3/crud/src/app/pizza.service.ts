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

  getById(id:number):Promise<Pizza>{
    return fetch(this.apiUrl+'?id='+id).then(res => res.json());
    //utilizzo un query param per ottenere i dati già filtrati, siccome il nostro backend lo permette
    //l'url così composto potrebbe essere: http://localhost:3000/pizza?id=1 se 1 è l'id della pizza
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

  update(pizza:Pizza):Promise<Pizza>{
    return fetch(this.apiUrl+'/'+pizza.id,{//l'url così composto potrebbe essere: http://localhost:3000/pizza/1 se 1 è l'id della pizza
      method: 'PUT',//richiesta di modifica
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
