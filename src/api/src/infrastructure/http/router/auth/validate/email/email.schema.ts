import { ISchema } from '@shared-library/base/schema';
import { singletonProvide } from '@shared-library/ioc';
import { TYPES } from '@shared-library/const';

@singletonProvide(TYPES.SCHEMA)
export class ValidateEmailInputSchema implements ISchema {
  $id = 'POST::/api/auth/validate/email';
  type = 'object';
  required = ['email'];
  properties = {
    email: { type: 'string', format: 'email' },
  };
}
