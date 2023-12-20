import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { emailValidator } from 'src/app/validators/email.validator';
import { requiredValidator } from 'src/app/validators/form.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData = new FormGroup({
    email: new FormControl('', [emailValidator, requiredValidator]),
    password: new FormControl('', [requiredValidator]),
  });

  loginError!: string | null

  constructor(private authSrv: AuthService, private router: Router) {}

  login() {
    // login

    this.authSrv.login(this.loginData.value).subscribe((res)=> {
      if(typeof res !== "string") {
        this.router.navigate([""])
        this.loginError = null
      } else {
        this.loginError = res
      }
    });
  }
}
