import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule,
    //add router and make it available  
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path :'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ])],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
