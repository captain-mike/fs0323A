import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl:string = "http://localhost:3000/pizza";

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl);
  }

  getById(id:number):Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.apiUrl+'?id='+id);
  }

  create(pizza:Partial<Pizza>):Observable<Pizza>{
    return this.http.post<Pizza>(this.apiUrl, pizza);
  }

  update(pizza:Pizza):Observable<Pizza>{
    return this.http.put<Pizza>(this.apiUrl+'/'+pizza.id,pizza);
  }

  delete(pizza:Pizza){
    return this.http.delete(this.apiUrl+'/'+pizza.id);
  }

}
