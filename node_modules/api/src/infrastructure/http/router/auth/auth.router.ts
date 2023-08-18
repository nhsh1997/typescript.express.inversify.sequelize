import { API_TYPES } from '@api/const';
import {
  ApiRouter,
  IRouterValidator,
} from '@api/infrastructure/http/router';
import {
  inject,
  singletonProvide,
} from '@api/infrastructure/ioc';
import { ILogger } from '@shared-library/utils/logger';

@singletonProvide(API_TYPES.ROUTER)
export class AuthRouter extends ApiRouter {
  constructor(
    @inject(API_TYPES.LOGGER)
    logger: ILogger,
    @inject(API_TYPES.ROUTER_VALIDATOR)
    validator: IRouterValidator,
  ) {
    super(logger, validator);
    this.stack.push(AuthRouter.prefix);
  }

  static get prefix() {
    return 'auth';
  }

  id = Symbol.for('API_ROUTER');
}
