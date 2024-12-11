import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  ejercicios: string = 'Ejercicios de Angular';

  peliculas: string = 'Peliculas';

  episodios: string = 'Episodios';

}