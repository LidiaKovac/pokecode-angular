import { AbstractControl } from '@angular/forms';

export const checkboxValidator = (input: AbstractControl) => {
  if (input.value) {
    return null;
  } else return { userHasAgreed: false };
};
