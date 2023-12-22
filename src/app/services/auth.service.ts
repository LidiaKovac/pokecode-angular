import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, lsAuth } from '../interfaces/user.interface';
import {
  BehaviorSubject,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  private $isLoggedIn = new BehaviorSubject(false);
  isLoggedIn = this.$isLoggedIn.asObservable();

  private $user = new BehaviorSubject<Partial<User> | null>(null);
  user = this.$user.asObservable() as Observable<User>;

  constructor(private http: HttpClient, private router: Router, private loadingSrv: LoadingService) {}

  signup(user: Partial<User>) {
    const cleanUser = user;
    delete cleanUser.passwordConfirm;
    return this.http.post('http://localhost:3000/signup', cleanUser).pipe(

    );
  }

  login(loginData: Partial<User>) {
    return this.http
      .post<lsAuth>('http://localhost:3000/login', loginData)
      .pipe(
        switchMap((res) => {
          localStorage.setItem('pkmn-token', res.accessToken);
          this.$isLoggedIn.next(true);
          return this.http.get<User>(
            'http://localhost:3000/users/' + res.user.id
          );
        }),
        tap((res) => {
          const noPassUser = res as Partial<User>;
          delete noPassUser.password;
          this.$user.next(noPassUser);
        })
      );
  }

  verifyLogin() {
    const ls = localStorage.getItem('pkmn-token');
    if (ls) {
      // ls !== null

      const tokenExpired = this.jwtHelper.isTokenExpired(ls);
      // const expiration = this.jwtHelper.getTokenExpirationDate(
      //   loginData.accessToken
      // );
      const decoded = this.jwtHelper.decodeToken(ls);
      console.log(decoded);
      this.http
        .get<User[]>('http://localhost:3000/users?email=' + decoded.email)
        .subscribe((res) => {
          this.$user.next(res[0]);
        });
      if (!tokenExpired) {
        this.$isLoggedIn.next(true);
        // this.router.navigate(['pokemon']);
        this.router.createUrlTree([''])
      } else {
        this.logout();
      }
    } else this.$isLoggedIn.next(false);
    this.loadingSrv.setLoading(false)
  }

  logout() {
    localStorage.removeItem('pkmn-token');
    this.$isLoggedIn.next(false);
    this.router.navigate(['']);
    this.$user.next(null);
  }

  editUser(id: number, newProfile: Partial<User>) {
    return this.http
      .patch('http://localhost:3000/users/' + id, newProfile)
      .pipe(
        tap((res) => {
          this.$user.next(res);
        })
      );
  }
}
