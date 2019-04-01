import {FormControl} from "@angular/forms";
import _ from 'lodash';

export const TOTO_PREFIX: string = 'toto'
export const PREFIX_SEPARATOR: string = '-'

export function isPrefixTotoValidator(control: FormControl) {
  const prefix = _.split(control.value, PREFIX_SEPARATOR, 1);
  return _.isArray(prefix) && TOTO_PREFIX === prefix[0] ? null : {isPrefixToto: true};
};
