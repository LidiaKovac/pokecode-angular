import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonListGuard implements CanActivate {
  isLoggedIn!: boolean;
  constructor(private router: Router, private authSrv: AuthService) {
    authSrv.isLoggedIn.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (this.isLoggedIn) {
      // l'utente è loggato
      return true;
    } else {
      // this.router.createUrlTree(["/pippo"]) "/login/pippo"
      this.router.navigate(['']);
      return false;
    }
  }
}
