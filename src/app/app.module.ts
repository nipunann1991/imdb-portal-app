import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { HeaderModule } from './common/header/header.module';
import { SharedModule } from './shared/shared-module';

 

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,  
    SharedModule
  ],

  exports:[], 
  bootstrap: [AppComponent]
})
export class AppModule { }
