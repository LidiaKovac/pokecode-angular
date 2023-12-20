import { AbstractControl } from "@angular/forms";

export const requiredValidator = (input: AbstractControl) => {
if(input.value.length > 0) {
  return null
} else return {isInvalid: false}
}
