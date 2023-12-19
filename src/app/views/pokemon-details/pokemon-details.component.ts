import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  pokemon!: Pokemon;
  error: string|null = null
  constructor(private route: ActivatedRoute, private pkmnSrv: PokemonService) {
    // route.paramMap.subscribe((param) => {
    //   console.log(param.get("name"));
    //   pkmnSrv.getPokemonByName().subscribe()
    // });
    // fetch("url").then(res => {return res.json()}).then((songs)=> {})

    /*
      ! tap => devo fare qualcosa in base ai dati, ma non cambiarli (es. lanciare un alert di errore o messaggi)
      ! map => devo fare qualcosa in base ai dati e ritornarli cambiati (es. route params, manipolazione etc.)
      ! switchMap => permette di "concatenare" gli observable
      ? https://raghuvardhankaranam.medium.com/tap-map-and-switchmap-10cc79006b4a
      */
    route.paramMap
      .pipe(
        // Observable param => string
        map((param) => {
          const name = param.get('name');
          return name;
        }),
        // Observable pokemon => Observable
        switchMap((name) => {
          if (name) {
            return pkmnSrv.getPokemonByName(name);
          } else throw 'Name param not found!';
        })
      )
      .subscribe((pkmn) => {
        if(typeof pkmn === "string") {
          // C'è stato un errore
          this.error = pkmn
        } else {
          this.error = null
          this.pokemon = pkmn
        }
      });
  }
}
