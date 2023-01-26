import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCatComponent } from './show-cat/show-cat.component';
import { CatFactService } from './_services/caft-fact.services';
import { GifService } from './_services/gif.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatFactService, GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
