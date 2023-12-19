import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-single-pokemon',

  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss'],
})
export class SinglePokemonComponent {
  @Input() pokemonName!: string;
  pokemon!: Pokemon;
  constructor(private pkmnSrv: PokemonService) {}

  ngOnInit() {

    this.pkmnSrv.getPokemonByName(this.pokemonName).subscribe((data) => {
      if(typeof data !== "string") {
        this.pokemon = data;
      }
      });
  }
}
