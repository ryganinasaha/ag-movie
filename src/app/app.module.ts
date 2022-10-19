import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MovieModule } from './movie/movie.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
