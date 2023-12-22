import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SinglePokemonComponent } from './components/single-pokemon/single-pokemon.component';
import { PokemonDetailsComponent } from './views/pokemon-details/pokemon-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptors/errorHandler.interceptor';
import { ProfileModule } from './views/profile/profile.module';
import { PokemonListModule } from './components/pokemon-list/pokemon-list.module';

@NgModule({
  // componenti
  declarations: [AppComponent, PokemonDetailsComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // Moduli custom:
    AppRoutingModule,
    ProfileModule,
    PokemonListModule,
  ],
  providers: [
    {
      useClass: ErrorInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
