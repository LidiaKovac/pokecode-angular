import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { checkboxValidator } from 'src/app/validators/checkbox.validator';
import { dateValidator } from 'src/app/validators/date.validator';
import { emailValidator } from 'src/app/validators/email.validator';
import { requiredValidator } from 'src/app/validators/form.validator';
import { passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  registerData = new FormGroup({
    name: new FormControl('', [requiredValidator]),
    lastName: new FormControl('', [requiredValidator]),
    email: new FormControl('', [requiredValidator, emailValidator]),
    password: new FormControl('', [requiredValidator, passwordValidator]),
    passwordConfirm: new FormControl('', [requiredValidator]),
    dob: new FormControl("2005-12-31", [requiredValidator, dateValidator]),
    pronouns: new FormControl('She Her', [requiredValidator]),
    terms: new FormControl(false, [checkboxValidator]),
  });
}
