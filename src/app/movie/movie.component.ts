import { Component } from '@angular/core';

import { MovieService } from './movie.service';


@Component({
  selector: 'movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  constructor(private movieService: MovieService) {}
  movie: Object | null = null

  ngOnInit() {
    this.movieService.findMovie('Shrek').subscribe((res) => {
      this.movie = res
    })
  }
}
