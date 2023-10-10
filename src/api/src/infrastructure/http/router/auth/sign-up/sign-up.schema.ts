import { ISchema } from '@shared-library/base/schema';
import { singletonProvide } from '@shared-library/ioc';
import { TYPES } from '@shared-library/const';

@singletonProvide(TYPES.SCHEMA)
export class SignUpInputSchema implements ISchema {
  $id = 'POST::/api/auth/sign-up';
  type = 'object';
  required = ['email', 'username', 'password', 'firstName', 'lastName'];
  properties = {
    email: { type: 'string', format: 'email' },
    username: { type: 'string' },
    password: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
  };
}
