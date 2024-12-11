import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-series',
  imports: [NgFor],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  episodes: any[] = [];
  titleShow: string = 'Modern Family';

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getEpisodes().subscribe(
      (data) => {
      console.log(data);
      this
      this.episodes = data.Episodes;
      }
    );
  }
}
