import cors from 'cors';

import { TYPES } from '@shared-library/const';
import { singletonProvide } from '@shared-library/ioc';
import { BaseMiddleware } from '@shared-library/http/middleware/base';

@singletonProvide(TYPES.MIDDLEWARE)
export class CorsMiddleware extends BaseMiddleware {
  constructor() {
    super();
    this.middleware.use(cors());
  }

  get id() {
    return Symbol.for('CORS_MIDDLEWARE');
  }
}
