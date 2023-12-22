import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from 'src/app/views/pokemon-details/pokemon-details.component';
import { SinglePokemonComponent } from '../single-pokemon/single-pokemon.component';
const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: ':name',
    component: PokemonDetailsComponent,
  },
];

@NgModule({
  declarations: [PokemonListComponent, SinglePokemonComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
})
export class PokemonListModule {}
