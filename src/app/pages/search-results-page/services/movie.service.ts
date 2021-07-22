import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { IMoviesListTemplate, IMovieDataTemplate } from "../models/iMovieTemplate";

const OMDB_API = `https://www.omdbapi.com/?apikey=${environment.OMDB_API_KEY}`

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) {  }

  // : Observable<IMoviesListTemplate[]> <IMoviesListTemplate[]>
  getMovieBySearchTerm(parms): Observable<IMoviesListTemplate> {   
      return this.http.get<IMoviesListTemplate>(`${OMDB_API}&s=${parms.movieTitle}&page=${parms.page}`);
  }

  // Observable<IMovieDataTemplate[]> <IMovieDataTemplate[]>
  getMovieData(id: string):  Observable<IMovieDataTemplate>{   
      return this.http.get<IMovieDataTemplate>(`${OMDB_API}&i=${id}`);
  }
  
}
