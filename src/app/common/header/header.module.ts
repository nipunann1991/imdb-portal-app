import { NgModule } from '@angular/core';


import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component'; 
import { SearchMovieService } from 'src/app/shared/services/search-movie.service';
import { SharedModule } from 'src/app/shared/shared-module';


@NgModule({
  declarations: [
    HeaderComponent, 
  ],
  imports: [
    HeaderRoutingModule,  
    SharedModule
  ],
  providers: [SearchMovieService],
  exports: [HeaderComponent]
})
export class HeaderModule { }
