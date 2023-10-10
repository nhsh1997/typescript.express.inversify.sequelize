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
  IValidateEmailInput,
  IValidateEmailOutput
} from "@api/delivery";

@singletonProvide(API_TYPES.ROUTER)
export class ValidateEmailRouter extends ValidateAuthRouter {

  @inject(API_INPUT.VALIDATE_EMAIL)
  private input: interfaces.Newable<IValidateEmailInput>;

  @inject(API_OUTPUT.VALIDATE_EMAIL)
  private output: interfaces.Newable<IValidateEmailOutput>;

  @namedInject(API_TYPES.CONTROLLER, API_CONTROLLER.AUTH)
  private controller: IAuthController;

  constructor(
    @inject(API_TYPES.LOGGER)
    logger: ILogger,
    @inject(API_TYPES.ROUTER_VALIDATOR)
    validator: IRouterValidator,
  ) {
    super(logger, validator);
    this.stack.push(ValidateEmailRouter.prefix);
    this.validateEmail();
  }

  static get prefix() {
    return 'email';
  }

  id = Symbol.for('VALIDATE_EMAIL_ROUTER');

  private validateEmail() {
    this.router.post(`${this.path}`, this.validator.validate, async (req, res) => {
      this.log.info(
        `${req.method}::${this.path} comming:`,
      );

      // @ts-ignore
      this.controller.validateEmail(new this.input(req), new this.output(res));
    });
  }
}
