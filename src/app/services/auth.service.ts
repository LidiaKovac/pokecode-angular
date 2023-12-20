import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: Partial<User>) {
    const cleanUser = user;
    delete cleanUser.passwordConfirm;
    return this.http.post('http://localhost:3000/signup', cleanUser).pipe(
      catchError((err) => {
        /*
        err => {
          error: "L'ERROR",
          ....
        }

        */
        return of([err.error]);
        // ritorniamo un Observable contenente err.error (il nostro errore)
      })
    );
  }

  login(loginData: Partial<User>) {
    return this.http.post('http://localhost:3000/login', loginData).pipe(
      catchError((err) => {
        // return throwError(() => new Error(err.error))
        return of(err.error);
        // return [err.error]
      })
    );
  }
}
