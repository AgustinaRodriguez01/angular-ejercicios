import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [NgFor, MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  selectedMovie: string | null = null;

  movies: Array<{title: string; year: number; description: string}> = [];

  constructor (private movieService: MovieService) {
    this.movies = movieService.getMovies();
  }

  onMovieSelected(movieTitle: string) : void {
    this.selectedMovie = movieTitle;
  }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
  
}
