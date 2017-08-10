import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // simulates communication with the remote server by adding the InMemoryWebApiModule to the module imports, 
    //effectively replacing the Http client's XHR backend service with an in-memory alternative.
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //the InMemoryWebApiModule must be import before AppRoutingModule in order to be able to fetch data from API
    AppRoutingModule
    
    ],
  declarations: [
    AppComponent, 
    HeroDetailComponent, 
    HeroesComponent, 
    DashboardComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
