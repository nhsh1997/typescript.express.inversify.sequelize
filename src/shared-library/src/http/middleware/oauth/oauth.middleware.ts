import { TYPES } from '@shared-library/const';
import { singletonProvide, inject } from '@shared-library/ioc';
import { BaseMiddleware } from '@shared-library/http/middleware/base';

@singletonProvide(TYPES.MIDDLEWARE)
export class OauthMiddleware extends BaseMiddleware {
  constructor() {
    super();
  }

  get id() {
    return Symbol.for('OAUTH');
  }
}
