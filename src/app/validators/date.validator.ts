import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export const dateValidator = (input: AbstractControl) => {
  const isAbove18 = moment(input.value).isBefore(moment('2005-12-31'));
  if (isAbove18) {
    return null;
  } else return { userAbove18: false };
};
