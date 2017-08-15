import { Injectable } from '@angular/core';
//A single service provides that provides the data and share that service with all components that need the data.
import { Hero } from './hero';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'api/heroes'; //URL to heroes web api
    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {
        //return the api to json format and parse as Hero array
        return this.http.get(this.heroesUrl).toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error has occured', error);
        return Promise.reject(error.message || error);
    }
    //simulate a slow connection with 2 secs delay
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
    getHero(id: number): Promise<Hero> {
        /*get all heroes and filter by ID
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));*/
        //Get by id request and return as an object
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
    //update hero information
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            //the put() 
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    //create new hero
    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }
    //delete a hero base on the hero id
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}