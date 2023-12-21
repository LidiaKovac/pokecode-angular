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
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { FormComponent } from './components/form/form.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { ErrorInterceptor } from './interceptors/errorHandler.interceptor';

@NgModule({
  // componenti
  declarations: [
    AppComponent,
    PokemonListComponent,
    SinglePokemonComponent,
    PokemonDetailsComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FormComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
