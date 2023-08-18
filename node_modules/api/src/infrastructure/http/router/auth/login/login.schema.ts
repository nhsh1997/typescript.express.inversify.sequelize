import { ISchema } from '@shared-library/base/schema';
import { singletonProvide } from '@shared-library/ioc';
import { TYPES } from '@shared-library/const';

@singletonProvide(TYPES.SCHEMA)
export class GetTokenInputSchema implements ISchema {
  $id = 'POST::/api/auth/login';
  type = 'object';
  required = ['email', 'password'];
  properties = {
    email: { type: 'string', format: 'email' },
    password: { type: 'string' },
  };
}
