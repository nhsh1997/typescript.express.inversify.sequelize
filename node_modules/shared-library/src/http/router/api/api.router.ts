import { BaseRouter } from '@shared-library/http/router/base';
import { ILogger } from '@shared-library/utils/logger';
import { IRouterValidator } from '@shared-library/http/router/base/router-validator';
import { injectable } from '@shared-library/ioc';

@injectable()
export class ApiRouter extends BaseRouter {
  constructor(logger: ILogger, validator: IRouterValidator) {
    super(logger, validator);
    this.stack.push(ApiRouter.prefix);
  }

  static get prefix() {
    return 'api';
  }
}
