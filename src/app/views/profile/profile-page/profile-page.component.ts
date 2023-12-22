import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { dateValidator } from 'src/app/validators/date.validator';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  user!: User;
  error!: string | null;
  editProfile = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // password: new FormControl(''),
    dob: new FormControl('1970-01-01', [dateValidator]),
    pronouns: new FormControl('She Her', [Validators.required]),
  });
  subscriptions: Subscription[] = [];
  constructor(private authSrv: AuthService) {
    this.subscriptions.push(
      this.authSrv.user.subscribe((res) => {
        this.user = res;
        delete this.user.password;
        this.editProfile.setValue(this.user);
      })
    );
  }
  edit() {
    if (this.editProfile.status === 'VALID') {
      this.error = null;
      this.authSrv.editUser(this.user.id, this.editProfile.value).subscribe();
    } else {
      this.error = 'Fill all forms';
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
