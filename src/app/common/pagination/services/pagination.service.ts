import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
 
  private setPagination = new Subject();
  private getPagination = new BehaviorSubject({ pageIndex: 1, collection: [] });
  
  setPaginationIndex = this.setPagination.asObservable();
  getPaginationData = this.getPagination.asObservable();

  constructor() { }

  setPage(page){
    this.setPagination.next(page);
  }

  getPageData(page){
    this.getPagination.next(page);
  }
}
