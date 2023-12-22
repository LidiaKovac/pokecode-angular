import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, catchError, of, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
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
  subscriptions: Subscription[] = [];
  loginError!: string | null;
  constructor(
    private authSrv: AuthService,
    private router: Router,
    private errorSrv: ErrorService
  ) {
    this.subscriptions.push(
      this.errorSrv.error.subscribe((res) => {
        this.loginError = res;
      })
    );
  }

  login() {
    // login

    this.authSrv.login(this.loginData.value).subscribe((res) => {
      if (typeof res !== 'string') {
        this.router.navigate(['pokemon']);
      } else {
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
