import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  login() {
    // login
    console.log(this.loginData);
  }
}
