import {API_CONTROLLER, API_INPUT, API_OUTPUT, API_TYPES} from '@api/const';
import {
  IRouterValidator,
} from '@api/infrastructure/http/router';
import {
  inject, interfaces, namedInject,
  singletonProvide,
} from '@api/infrastructure/ioc';
import { ILogger } from '@shared-library/utils/logger';
import {ValidateAuthRouter} from "@api/infrastructure/http/router/auth/validate/validate.router";
import {
  IAuthController,
  IValidateUsernameInput,
  IValidateUsernameOutput
} from "@api/delivery";

@singletonProvide(API_TYPES.ROUTER)
export class ValidateUsernameRouter extends ValidateAuthRouter {

  @inject(API_INPUT.VALIDATE_USERNAME)
  private input: interfaces.Newable<IValidateUsernameInput>;

  @inject(API_OUTPUT.VALIDATE_USERNAME)
  private output: interfaces.Newable<IValidateUsernameOutput>;

  @namedInject(API_TYPES.CONTROLLER, API_CONTROLLER.AUTH)
  private controller: IAuthController;

  constructor(
    @inject(API_TYPES.LOGGER)
    logger: ILogger,
    @inject(API_TYPES.ROUTER_VALIDATOR)
    validator: IRouterValidator,
  ) {
    super(logger, validator);
    this.stack.push(ValidateUsernameRouter.prefix);
    this.validateUsername();
  }

  static get prefix() {
    return 'username';
  }

  id = Symbol.for('VALIDATE_USERNAME_ROUTER');

  private validateUsername() {
    this.router.post(`${this.path}`, this.validator.validate, async (req, res) => {
      this.log.info(
        `${req.method}::${this.path} comming:`,
      );

      // @ts-ignore
      this.controller.validateUsername(new this.input(req), new this.output(res));
    });
  }
}
