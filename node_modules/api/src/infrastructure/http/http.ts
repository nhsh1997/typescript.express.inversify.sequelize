import { Http } from '@api/infrastructure/http';
import { API_TYPES } from '@api/const';

import { singletonProvide } from '@api/infrastructure/ioc';

@singletonProvide(API_TYPES.HTTP)
export class APIHttp extends Http {
  constructor() {
    super();
  }
}
