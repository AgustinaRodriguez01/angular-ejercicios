import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users = [
  {id: 2, name: 'Juan', age: 25, active: false},
  {id: 3, name:"Pedro", age: 19, active: true},
  {id: 4, name:"Lucia", age: 20, active: true},
  {id: 5, name:"Pilar", age: 27, active: false}
  ];

  getUsers() {
    return this.users;
  }

}
