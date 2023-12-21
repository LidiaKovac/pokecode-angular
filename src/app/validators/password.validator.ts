import { AbstractControl } from '@angular/forms';

export const passwordValidator = (input: AbstractControl) => {
  if (input.value.length >= 8) {
    return null;
  } else return { isPasswordValid: false };
};


export const passwordMatchValidator = (group: AbstractControl) => {
  // console.log(group)
  if(group.value.password === group.value.passwordConfirm && group.value.password.length > 0) {
    return null
  } else return {doPasswordsMatch: false}
}

