import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  title = 'Los usuarios de este componente';

  users = [
    {id: 2, name: 'Juan', age: 25, active: false},
    {id: 3, name:"Pedro", edad: 19, active: true},
    {id: 4, name:"Lucia", edad: 20, active: true},
    {id: 5, name:"Pilar", edad: 27, active: false}
  ];
}
