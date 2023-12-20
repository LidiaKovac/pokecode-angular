import { AbstractControl } from '@angular/forms';

export const emailValidator = (formControl: AbstractControl) => {
  if (formControl.value.includes('@') && formControl.value.includes('.')) {
    return null;
  } else return { isValidEmail: false };
};

