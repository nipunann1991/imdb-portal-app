import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { Subscription, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchMovieService } from 'src/app/shared/services/search-movie.service';
import { IMovieDataTemplate, IMoviesListErrorTemplate, IMoviesListTemplate } from './models/iMovieTemplate';
import { MovieService } from "./services/movie.service";
import { PaginationService } from "../../common/pagination/services/pagination.service";
import { NotificationService } from "../../common/notification/services/notification.service";

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss']
})
export class SearchResultsPageComponent implements OnInit {

  searchString:string;
  searchMovieSubscription: Subscription;
  paginationSubscription: Subscription;
  moviesList: IMoviesListTemplate & IMoviesListErrorTemplate
  error: object;
  movieData: IMovieDataTemplate;  
  currentPage: number;
  isLoading: boolean = false;

  constructor(
     private search: SearchMovieService,
     private movie: MovieService,
     private pagination: PaginationService,
     private notify: NotificationService
  ) { }

  ngOnInit() {  
     /// listen to the string user searches and call the api.  
    this.searchMovieSubscription = this.search.searchMovie.subscribe((searchString: string) => {
      this.searchString = searchString;      
      this.searchString ? this.getMovieList() : this.notify.notifyError({ Response: "Fasle", Error: "Search can't be empty. Please try again"});  
    })

    this.paginationSubscription = this.pagination.setPaginationIndex.subscribe((pageIndex: number) => {
      pageIndex ? this.getMovieList(pageIndex) : ""; 
    })
  }
 

  /// get the movie list on search and update the properties.
  getMovieList(page: number = 1){ 

    this.notify.notifyHide();
    this.isLoading = true;

    let parms = {movieTitle: this.searchString, page: page };
    this.currentPage = page; 

    this.movie.getMovieBySearchTerm(parms).pipe(
      map( (res: IMoviesListTemplate & IMoviesListErrorTemplate) => {  
        (this.checkResponse(res.Response)) ? res.Search.map(x => { x.Expand = false; x.MovieData = {} }) : "" ;
        return res; 
      })

    ).subscribe({
        next: (res: IMoviesListTemplate & IMoviesListErrorTemplate) =>{ 
          this.moviesList = res;    

          if(this.checkResponse(this.moviesList.Response)){ 
            let collection = Array.from(Array(parseInt(this.moviesList?.totalResults)).keys())
            this.pagination.getPageData({ pageIndex: this.currentPage, collection: collection })

          }else{
            this.notify.notifyError(this.moviesList)
          }
          
          this.isLoading = false;
        },
        error: err =>{
          console.log(err)
        } 
    })  
     
  }
  
  /// Get details a perticuler movie.  
  expandDetails(id, i){ 
    this.moviesList.Search[i].Expand =  !this.moviesList.Search[i].Expand;
    this.moviesList.Search[i].Expand ? this.getMovieData(id, i) : ""; 
  }

  /// Call the endpoint to get details a perticuler movie.  
  getMovieData(id, index){
    this.movie.getMovieData(id).subscribe({
        next: (res: IMovieDataTemplate) =>{  
          this.moviesList.Search[index].MovieData = res; 
          
        },
        error: err =>{
          console.log(err)
        } 
    })  
  }


  checkResponse(string): boolean{ 
    return (string != null)?  JSON.parse(string.toLowerCase()) : "";
  }
  
  
  ngOnDestroy() {
    this.searchMovieSubscription.unsubscribe();
    this.paginationSubscription.unsubscribe();
  }

}
