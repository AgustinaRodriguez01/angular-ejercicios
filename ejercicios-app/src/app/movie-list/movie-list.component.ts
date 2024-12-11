import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  imports: [NgFor, MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  selectedMovie: string | null = null;

  movies = [
    {
      title: 'Inception', year: 2010, 
      description: 'Un ladrón experto en infiltrarse en los sueños de otros es contratado para implantar una idea en la mente de un empresario, enfrentándose a peligrosos desafíos en mundos oníricos.'
    },
    {
      title: 'The Shawshank Redemption', year: 1994, 
      description: 'La historia de un hombre condenado injustamente a cadena perpetua y su lucha por la esperanza y la redención en una prisión brutal.'
    },
    {
      title: 'The Godfather', year: 1972, 
      description: 'Un épico relato sobre una familia mafiosa liderada por Vito Corleone, y cómo su hijo Michael se involucra en el oscuro negocio familiar.'
    },
    {
      title: 'The Dark Knight', year: 2008, 
      description: 'Batman enfrenta a su mayor enemigo, el Joker, en un caótico enfrentamiento que pone a prueba su moralidad y su lucha por Gotham City.'
    },
    {
      title: 'Pulp Fiction', year: 1994, 
      description: 'Historias entrelazadas de crimen, humor y drama que giran en torno a dos sicarios, un boxeador, y otros personajes en Los Ángeles.'
    },
    {
      title: 'Forrest Gump', year: 1994, 
      description: 'La entrañable vida de Forrest, un hombre con discapacidad intelectual que participa involuntariamente en grandes momentos históricos mientras busca el amor de su vida.'
    },
    {
      title: 'The Matrix', year: 1999, 
      description: 'Un hacker descubre que la realidad es una simulación y se une a una rebelión para liberar a la humanidad de un control opresivo.'
    },
    {
      title: 'Interstellar', year: 2014, 
      description: 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad mientras enfrentan dilemas emocionales y científicos.'
    },
    {
      title: 'Parasite', year: 2019, 
      description: 'Una familia pobre se infiltra en la vida de una familia adinerada, desatando una serie de eventos que exploran las diferencias sociales y económicas.'
    },
    {
      title: 'Gladiator', year: 2000, 
      description: 'Un general romano cae en desgracia y se convierte en gladiador para vengar la muerte de su familia y confrontar al corrupto emperador.'
    }
  ]

  onMovieSelected(movieTitle: string) : void {
    this.selectedMovie = movieTitle;
  }
  
}
