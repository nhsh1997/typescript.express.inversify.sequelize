import {API_CONTROLLER, API_INPUT, API_OUTPUT, API_TYPES} from '@api/const';
import {
  IRouterValidator,
} from '@api/infrastructure/http/router';
import {
  inject, namedInject,
  singletonProvide,
    interfaces,
} from '@api/infrastructure/ioc';
import { ILogger } from '@shared-library/utils/logger';
import {AuthRouter} from "@api/infrastructure/http/router/auth/auth.router";
import {IAuthController, IGenerateTokenInput, IGenerateTokenOutput} from "@api/delivery";

@singletonProvide(API_TYPES.ROUTER)
export class LoginRouter extends AuthRouter {
  @namedInject(API_TYPES.CONTROLLER, API_CONTROLLER.AUTH)
  private controller: IAuthController;

  @inject(API_INPUT.GENERATE_TOKEN)
  private input: interfaces.Newable<IGenerateTokenInput>;

  @inject(API_OUTPUT.GENERATE_TOKEN)
  private output: interfaces.Newable<IGenerateTokenOutput>;

  constructor(
    @inject(API_TYPES.LOGGER)
    logger: ILogger,
    @inject(API_TYPES.ROUTER_VALIDATOR)
    validator: IRouterValidator,
  ) {
    super(logger, validator);
    this.stack.push(LoginRouter.prefix);
    this.getToken();
  }

  static get prefix() {
    return 'login';
  }

  id = Symbol.for('LOGIN_ROUTER');

  private getToken() {
    this.router.post(`${this.path}`, this.validator.validate, async (req, res) => {
      this.log.info(
        `${req.method}::${this.path} comming:`,
      );

      // @ts-ignore
      await this.controller.generateToken(new this.input(req), new this.output(res));
    });
  }
}
