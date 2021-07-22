import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { SearchMovieService } from '../../shared/services/search-movie.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  
  movieTitle = new FormControl('');

  constructor(
    private router: Router,
    private search: SearchMovieService
  ) { }

  ngOnInit(): void {
    
  }

  searchMovie() { 
    if((this.movieTitle.value != "" && typeof this.movieTitle.value != "undefined" )){
      this.search.search(this.movieTitle.value);
      this.router.navigate(["/search-results"]);
    }
    
  }

}
