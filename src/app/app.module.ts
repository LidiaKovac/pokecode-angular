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
import { NotFoundComponent } from './views/404/404.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  // componenti
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // Moduli custom:
    AppRoutingModule,
    ProfileModule,
    PokemonListModule,
    // Angular Material:
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    // MatInputModule,
    // MatFormFieldModule
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
