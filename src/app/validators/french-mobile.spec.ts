import { FormControl } from '@angular/forms';
import { frenchMobileValidator } from './french-mobile';

describe('frenchMobileValidator', () => {
  const validate = (value: string | null) => frenchMobileValidator()(new FormControl(value));

  it('should accept valid french mobile numbers', () => {
    for (const value of ['0612345678', '0712345678', '06 12 34 56 78', '06.12.34.56.78', '06-12-34-56-78', '+33612345678', '+33 6 12 34 56 78', '0033712345678']) {
      expect(validate(value)).toBeNull();
    }
  });

  it('should reject invalid numbers', () => {
    for (const value of ['0112345678', '061234567', '06123456789', '+330612345678', '06 12 34 56 7a', 'abc']) {
      expect(validate(value)).toEqual({ frenchMobile: { value } });
    }
  });

  it('should ignore empty values', () => {
    expect(validate('')).toBeNull();
    expect(validate(null)).toBeNull();
  });
});
