import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsPageRoutingModule } from './search-results-page-routing.module';
import { SearchResultsPageComponent } from './search-results-page.component';
import { MovieService } from './services/movie.service'; 
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [SearchResultsPageComponent],
  imports: [
    CommonModule,
    SearchResultsPageRoutingModule,  
    SharedModule
  ],
  providers: [MovieService]
  
})
export class SearchResultsPageModule { }
