import { sharedUtilsUuidValidation } from './shared-utils-uuid-validation';

describe('sharedUtilsUuidValidation', () => {
  it('should work', () => {
    expect(sharedUtilsUuidValidation()).toEqual('shared-utils-uuid-validation');
  });
});
