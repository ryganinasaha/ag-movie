import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import {NotFoundComponent} from './pages/notFound.component';
import {HomeComponent} from './pages/home.component';
import {AboutComponent} from './pages/about.component';
import {DinamicComponent} from './pages/dinamic.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dinamic/', component: DinamicComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
