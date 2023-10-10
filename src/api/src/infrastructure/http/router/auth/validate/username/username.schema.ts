import { ISchema } from '@shared-library/base/schema';
import { singletonProvide } from '@shared-library/ioc';
import { TYPES } from '@shared-library/const';

@singletonProvide(TYPES.SCHEMA)
export class ValidateUsernameInputSchema implements ISchema {
  $id = 'POST::/api/auth/validate/username';
  type = 'object';
  required = ['username'];
  properties = {
    username: { type: 'string' },
  };
}
