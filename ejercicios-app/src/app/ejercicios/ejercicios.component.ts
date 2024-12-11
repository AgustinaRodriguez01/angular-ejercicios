import { Component } from '@angular/core';
import { ComponentOneComponent } from "../component-one/component-one.component";
import { UserComponent } from "../user/user.component";
import { UsersComponent } from "../users/users.component";

@Component({
  selector: 'app-ejercicios',
  imports: [ComponentOneComponent, UserComponent, UsersComponent],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}
