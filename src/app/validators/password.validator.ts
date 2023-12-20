import { AbstractControl } from '@angular/forms';

export const passwordValidator = (input: AbstractControl) => {
  if (input.value.length >= 8) {
    return null;
  } else return { isPasswordValid: false };
};
