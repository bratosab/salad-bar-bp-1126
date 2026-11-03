import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// 06 / 07 followed by 8 digits, with optional +33 / 0033 prefix
// and optional space, dot or dash separators between digit pairs.
const FRENCH_MOBILE_REGEX = /^(?:(?:\+|00)33[\s.-]?|0)[67](?:[\s.-]?\d{2}){4}$/;

export function frenchMobileValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Empty values are left to Validators.required
    if (value === null || value === undefined || value === '') {
      return null;
    }
    return FRENCH_MOBILE_REGEX.test(String(value).trim()) ? null : { frenchMobile: { value } };
  };
}
