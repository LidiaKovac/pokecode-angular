import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from 'src/app/components/form/form.component';

@NgModule({
  declarations: [
    LoginComponent,
    ProfilePageComponent,
    SignupComponent,
    FormComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileModule {}
