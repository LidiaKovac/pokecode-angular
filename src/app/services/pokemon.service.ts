import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Pokemon, PokemonAPIResponse } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // separazione delle competenze

  constructor(private http: HttpClient) {
  }

  getPokemon() {
    // "https://pokeapi.co/api/v2/pokemon/"
    // await fetch("https://pokeapi.co/api/v2/pokemon/", {
    //   method: "GET"
    // })

    // rxjs
    // this => classe con constructor etc. etc.
    return this.http.get<PokemonAPIResponse>("https://pokeapi.co/api/v2/pokemon/")
    /*
      Observable => oggetto "osservabile"
      paradigma rxjs

      Observable {
        subscribe() {
          .........
        }
      }
    */
  }

  getPokemonByName(name:string) {
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + name)
  }
}
