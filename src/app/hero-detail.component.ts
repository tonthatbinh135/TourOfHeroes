import {Component, Input} from '@angular/core';
import { Hero } from './hero';
//extract the Master/detail component
@Component({
    selector:'hero-detail',
    //ngIf directive conditionally adds or removes content from 
    //the DOM based on whether or not an expression is true or false
    template:`
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="Hero's name"> 
      </div>
    </div>`,
})
export class HeroDetailComponent{
   @Input() hero :Hero;
}