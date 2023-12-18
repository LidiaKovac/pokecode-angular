import { Component } from '@angular/core';
import { PokemonAPIResponse } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  pkmns!: PokemonAPIResponse;
  // dependency injection => aggiunta del service al component
  constructor(private pkmnSrv: PokemonService) {
    pkmnSrv.getPokemon().subscribe((data) => {
      this.pkmns = data;
    });
    /*
      Observable {
        subscribe() {
          ......
        }
      }

    */
  }
}
