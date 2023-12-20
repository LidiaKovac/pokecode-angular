import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { checkboxValidator } from 'src/app/validators/checkbox.validator';
import { dateValidator } from 'src/app/validators/date.validator';
import { emailValidator } from 'src/app/validators/email.validator';
import { requiredValidator } from 'src/app/validators/form.validator';
import {
  passwordMatchValidator,
  passwordValidator,
} from 'src/app/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private authSrv: AuthService, private router: Router) {}

  registerData = new FormGroup(
    {
      name: new FormControl('', [requiredValidator]),
      // name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [requiredValidator]),
      email: new FormControl('', [requiredValidator, emailValidator]),
      // password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")]),
      password: new FormControl('', [requiredValidator, passwordValidator]),
      passwordConfirm: new FormControl('', [requiredValidator]),
      dob: new FormControl('2005-12-31', [requiredValidator, dateValidator]),
      pronouns: new FormControl('She Her', [requiredValidator]),
      terms: new FormControl(false, [checkboxValidator]),
    },
    [passwordMatchValidator]
  );
  error!: string;
  signup() {
    if (this.registerData.status === 'VALID') {
      this.authSrv.signup(this.registerData.value).subscribe((res) => {
        if (typeof res === 'string') {
          this.error = res;
        } else {
          this.router.navigate(['login']);
        }
      });
    } else alert('Form is invalid');
  }
}
