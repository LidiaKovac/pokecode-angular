import { AbstractControl, FormControl } from '@angular/forms';

export const checkboxValidator = (input: AbstractControl<FormControl>) => {
  if (input.value) {
    return null;
  } else return { userHasAgreed: false };
};
