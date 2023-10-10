import {API_CONTROLLER, API_INPUT, API_OUTPUT, API_TYPES} from '@api/const';
import {
  IRouterValidator,
} from '@api/infrastructure/http/router';
import {
  inject, interfaces, namedInject,
  singletonProvide,
} from '@api/infrastructure/ioc';
import { ILogger } from '@shared-library/utils/logger';
import {AuthRouter} from "@api/infrastructure/http/router/auth/auth.router";
import {IAuthController, ISignUpInput, ISignUpOutput} from "@api/delivery";

@singletonProvide(API_TYPES.ROUTER)
export class SignUpRouter extends AuthRouter {
  @namedInject(API_TYPES.CONTROLLER, API_CONTROLLER.AUTH)
  private controller: IAuthController;

  @inject(API_INPUT.SIGN_UP)
  private input: interfaces.Newable<ISignUpInput>;

  @inject(API_OUTPUT.SIGN_UP)
  private output: interfaces.Newable<ISignUpOutput>;


  constructor(
    @inject(API_TYPES.LOGGER)
    logger: ILogger,
    @inject(API_TYPES.ROUTER_VALIDATOR)
    validator: IRouterValidator,
  ) {
    super(logger, validator);
    this.stack.push(SignUpRouter.prefix);
    this.signUp();
  }

  static get prefix() {
    return 'sign-up';
  }

  id = Symbol.for('SIGNUP_ROUTER');

  private signUp() {
    this.router.post(`${this.path}`, this.validator.validate, async (req, res) => {
      this.log.info(
        `${req.method}::${this.path} comming:`,
      );

      // @ts-ignore
      this.controller.signUp(new this.input(req), new this.output(res));
    });
  }
}
