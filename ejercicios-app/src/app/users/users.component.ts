import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  title = 'Los usuarios de este componente';

  users: Array<{id: number; name: string; age: number; active: boolean}> = [];

  //Esto era el ejercicio 4 solo
  // users = [
  //   {id: 2, name: 'Juan', age: 25, active: false},
  //   {id: 3, name:"Pedro", age: 19, active: true},
  //   {id: 4, name:"Lucia", age: 20, active: true},
  //   {id: 5, name:"Pilar", age: 27, active: false}
  // ];

  constructor(private usersService: UsersService) {
    this.users = usersService.getUsers();
  }
  
}
