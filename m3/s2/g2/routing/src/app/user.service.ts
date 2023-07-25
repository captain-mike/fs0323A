import { Injectable } from '@angular/core';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[] = [];

  constructor() { }


  addUser(user:User):void {
    this.users.push(user);
  }

  getUsers():User[] {
    return this.users;
  }


}
