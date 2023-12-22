import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Pokemon, PokemonAPIResponse } from '../interfaces/pokemon.interface';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  // separazione delle competenze
  pageNo = 1;
  constructor(private http: HttpClient, private loadingSrv: LoadingService) {}

  getPokemon(page: number = 0) {
    this.loadingSrv.setLoading
    // "https://pokeapi.co/api/v2/pokemon/"
    // https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20 => page 2
    // "?offset=0&limit=20"
    // await fetch("https://pokeapi.co/api/v2/pokemon/", {
    //   method: "GET"
    // })

    // rxjs
    // this => classe con constructor etc. etc.
    return this.http
      .get<PokemonAPIResponse>(
        'https://pokeapi.co/api/v2/pokemon/' + `?offset=${page * 20}&limit=20`
      )
      .pipe(
        tap((pokemonResults) => {
          this.pageNo = Math.ceil(
            pokemonResults.count / pokemonResults.results.length
          );
        })
      );
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

  getPokemonByName(name: string) {
    return this.http
      .get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
