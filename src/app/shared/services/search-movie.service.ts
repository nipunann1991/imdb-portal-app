import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  private listenToSearch = new BehaviorSubject('');
  searchMovie = this.listenToSearch.asObservable();

  constructor() { }

  search(search: string) {
    this.listenToSearch.next(search)
  }
  
}


