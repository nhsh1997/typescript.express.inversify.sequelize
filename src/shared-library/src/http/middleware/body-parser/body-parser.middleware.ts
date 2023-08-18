import bodyParser from 'body-parser';

import { TYPES } from '@shared-library/const';
import { singletonProvide } from '@shared-library/ioc';
import { BaseMiddleware } from '@shared-library/http/middleware/base';

@singletonProvide(TYPES.MIDDLEWARE)
export class BodyParserMiddleware extends BaseMiddleware {
  constructor() {
    super();
    this.middleware.use(bodyParser.json());
  }

  get id() {
    return Symbol.for('BODY_PARSER_MIDDLEWARE');
  }
}
