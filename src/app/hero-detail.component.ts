import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';
//extract the Master/detail component
@Component({
  selector: 'hero-detail',
  //ngIf directive conditionally adds or removes content from 
  //the DOM based on whether or not an expression is true or false
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent  implements OnInit{
  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap)=>
  this.heroService.getHero(+params.get('id')))
  .subscribe(hero =>this.hero=hero);
  }
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location:Location
  ){}
  goBack():void{
    this.location.back();
  }
  save():void{
    this.heroService.update(this.hero)
    .then(()=>this.goBack());
  }
}