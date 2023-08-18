import { TYPES, LOGGER } from '@shared-library/const';

import { Http, Request } from '@shared-library/http';
import { inject, injectable } from '@shared-library/ioc';
import { IConfiguration } from '@shared-library/utils/configuration';
import { ILogger, ILog } from '@shared-library/utils/logger';
import { IRouterValidator } from '@shared-library/http/router/base/router-validator';

@injectable()
export class BaseRouter {
  protected router = Http.SERVER;

  @inject(TYPES.CONFIG)
  protected config: IConfiguration;

  protected stack: string[] = [];

  constructor(
    protected logger: ILogger,
    protected validator: IRouterValidator,
  ) {}

  get log(): ILog {
    return this.logger.get(
      Symbol.keyFor(LOGGER.INFRASTRUCTURE)!.toLowerCase(),
      Symbol.keyFor(TYPES.ROUTER)!.toLowerCase(),
      Symbol.keyFor(this.id)!.toLowerCase(),
    );
  }

  load() {
    this.log.info('LOADED');
  }

  protected id: symbol;

  protected getContext(req: Request) {
    return JSON.stringify({ ...req.body, ...req.params, ...req.query });
  }

  static get prefix() {
    return '';
  }
  get path() {
    return [BaseRouter.prefix, ...this.stack].join('/');
  }
}
