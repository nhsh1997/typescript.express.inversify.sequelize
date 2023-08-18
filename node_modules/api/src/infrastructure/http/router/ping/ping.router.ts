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
export class PingRouter extends ApiRouter {
  constructor(
    @inject(API_TYPES.LOGGER)
    logger: ILogger,
    @inject(API_TYPES.ROUTER_VALIDATOR)
    validator: IRouterValidator,
  ) {
    super(logger, validator);
    this.stack.push(PingRouter.prefix);
    this.ping();
  }

  static get prefix() {
    return 'ping';
  }

  id = Symbol.for('PING_ROUTER');

  private ping() {
    this.router.get(`${this.path}`, (req, res) => {
      this.log.info(
        `${req.method}::${this.path} comming:`,
        this.getContext(req),
      );
      res.json('Ok');
    });
  }
}
