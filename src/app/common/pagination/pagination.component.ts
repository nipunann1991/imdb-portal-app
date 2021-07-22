import { Component, OnInit } from '@angular/core';
import { PaginationService } from "./services/pagination.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pageOfItems: Array<number>;
  collection: Array<number> = [];
  currentPage: number;
  itemsPerPage: number = 10;

  constructor(
    private pagination: PaginationService
  ) { }

  ngOnInit(): void {
    this.pagination.getPaginationData.subscribe((param) => {  
      this.currentPage = param.pageIndex;
      this.collection = param.collection;
   })
  }

   /// Call the endpoint to get details a perticuler movie.  
   pageChanged(e){  
     this.pagination.setPage(e);
  }

}
