import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './views/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { PokemonListGuard } from './components/pokemon-list/pokemon-list.guard';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonListComponent,
    canActivate: [PokemonListGuard],
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailsComponent,
    canActivate: [PokemonListGuard],

  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'join',
    component: SignupComponent,
  },
  {
    path: "profile",
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
