import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {

  @Input() movie: {title: string; year: number; description: string} = { title: '', year: 0, description: '' };

  @Output() movieSelected = new EventEmitter<string>();

  selectMovie() : void {
    if(this.movie) {
      this.movieSelected.emit(this.movie.title);
    }
  }

}
