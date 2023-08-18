import methodOverride from 'method-override';

import { TYPES } from '@shared-library/const';
import { singletonProvide } from '@shared-library/ioc';
import { BaseMiddleware } from '@shared-library/http/middleware/base';

@singletonProvide(TYPES.MIDDLEWARE)
export class MethodOverrideMiddleware extends BaseMiddleware {
  constructor() {
    super();

    this.middleware.use(methodOverride('X-HTTP-Method'));
    this.middleware.use(methodOverride('X-HTTP-Method-Override'));
    this.middleware.use(methodOverride('X-Method-Override'));
    this.middleware.use(methodOverride('_method'));
  }

  get id() {
    return Symbol.for('METHOD_OVERRIDE_MIDDLEWARE');
  }
}
