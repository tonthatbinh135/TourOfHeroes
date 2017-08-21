import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    providers: [HeroService],
    selector: 'my-dashboard',
    //template: `<h3>My Dashboard</h3>`
    templateUrl: './dashboard.component.html',
    styleUrls: [`./dashboard.component.css`]
    
})
export class DashboardComponent implements OnInit {
    //define an array property
    heroes: Hero[] = [];
    //inject the HeroService and store in a constructor
    constructor(private heroService: HeroService) { }
    //Call the service on the ngOnInit lifecycle
    ngOnInit(): void {
       this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(3, 7));
    }
}