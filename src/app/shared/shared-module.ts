/// Commonly used directives, pipes, and components are placed in a 'Shared Module'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '../common/pagination/pagination.component';
import { SearchBoxComponent } from '../common/search-box/search-box.component';
import { NotificationComponent } from '../common/notification/notification.component';

@NgModule({
  declarations: [ 
    PaginationComponent,
    SearchBoxComponent, 
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[ 
    SearchBoxComponent,
    NgxPaginationModule,
    PaginationComponent,
    NotificationComponent,
    FormsModule
  ], 
  bootstrap: []
})

export class SharedModule { }
