import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ComponentOneComponent } from "./component-one/component-one.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ComponentOneComponent, UserComponent, UsersComponent, FooterComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios-app';
}
