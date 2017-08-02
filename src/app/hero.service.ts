import { Injectable } from '@angular/core';
//A single service provides that provides the data and share that service with all components that need the data.
import { Hero } from './hero';
import { HEROESarr } from './mock-heroes';
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> { 
        return Promise.resolve(HEROESarr);
    }
    //simulate a slow connection with 2 secs delay
    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve=>{
            setTimeout(()=>resolve(this.getHeroes()),2000);
        });
    }
    getHero(id:number):Promise<Hero>{
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
    }
}