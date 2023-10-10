import { API_TYPES} from '@api/const';
import {
  IRouterValidator,
} from '@api/infrastructure/http/router';
import {
  inject,
  singletonProvide,
} from '@api/infrastructure/ioc';
import { ILogger } from '@shared-library/utils/logger';
import {AuthRouter} from "@api/infrastructure/http/router/auth/auth.router";

@singletonProvide(API_TYPES.ROUTER)
export class ValidateAuthRouter extends AuthRouter {

  constructor(
    @inject(API_TYPES.LOGGER)
    logger: ILogger,
    @inject(API_TYPES.ROUTER_VALIDATOR)
    validator: IRouterValidator,
  ) {
    super(logger, validator);
    this.stack.push(ValidateAuthRouter.prefix);
  }

  static get prefix() {
    return 'validate';
  }

  id = Symbol.for('VALIDATE_ROUTER');
}
