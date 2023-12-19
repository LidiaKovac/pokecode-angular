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
  pageNo: number[] = [];
  displayPageNo: number[] = [];
  currentPage = 1;

  // dependency injection => aggiunta del service al component
  constructor(private pkmnSrv: PokemonService) {
    pkmnSrv.getPokemon().subscribe((data) => {
      this.pkmns = data;
      for (let i = 0; i < this.pkmnSrv.pageNo; i++) {
        this.pageNo.push(i);
        if (i < 5) {
          this.displayPageNo.push(i);
        }
      }
    });
    /*
      Observable {
        subscribe() {
          ......
        }
      }
    */
  }

  fetchByPage(page: number) {
    this.currentPage = page;
    this.pkmnSrv.getPokemon(page).subscribe((pkmn) => {
      this.pkmns = pkmn;
      // page 3 => 2,3,4,5,6
      this.displayPageNo = this.pageNo.slice(
        this.currentPage - 1 < 0 ? 0 : this.currentPage - 1, //2
        this.currentPage + 4 //7 ( -1)
      );
    });
  }
}
