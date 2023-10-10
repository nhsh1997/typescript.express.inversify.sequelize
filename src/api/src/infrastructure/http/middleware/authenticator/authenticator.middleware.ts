import {inject, singletonNamedProvide} from '@shared-library/ioc';
import {NextFunction, Request, Response} from "@shared-library/http";
import {API_NAMES, API_TYPES, AppContext, TokenPayload} from "@api/const";
import {IJwtHelper} from "@shared-library/utils/jwt-helper";
import {ILog, ILogger} from "@shared-library/utils/logger";
import {LOGGER} from "@shared-library/const";
import {UserDomain, UserStatuses} from "@api/domain";

export interface IAuthenticatorMiddleware {
  authenticate: (req: Request, res: Response, next: NextFunction) => void;
}

@singletonNamedProvide(API_TYPES.HTTP_HANDLER, API_NAMES.AUTHENTICATOR)
export class AuthenticatorMiddleware implements IAuthenticatorMiddleware {

  constructor(
      @inject(API_TYPES.LOGGER)
      private logger: ILogger,
      @inject(API_TYPES.JWT_HELPER)
      private jwtHelper: IJwtHelper) {
  }

  get id() {
    return Symbol.for('AUTHENTICATOR_MIDDLEWARE');
  }

  get log(): ILog {
    return this.logger.get(
        Symbol.keyFor(LOGGER.INFRASTRUCTURE)!.toLowerCase(),
        Symbol.keyFor(this.id)!.toLowerCase(),
    );
  }

  private getToken(req: Request): string | null {
    const token = null;
    if (req.query.token) return <string>req.query.token;
    if (req.headers.authorization) return req.headers.authorization.split(' ')[1];

    return token;
  }

  get authenticate() {
    return (req: Request, res: Response, next: NextFunction) => {
      let appContext: AppContext;
      let payload: TokenPayload;

      const token = this.getToken(req);
      if (!token) {
        res.json({
          meta: {
            status: 401,
            message: "Missing Token",
          },
          data: null,
        });
        return;
      }


      try {
        payload = <TokenPayload>this.jwtHelper.verify(token);
      } catch (err) {
        let err_str=JSON.stringify(err);
        res.json({
          meta: {
            status: 401,
            message: `Token Invalid Token:${token} - ${err_str}`,
          },
          data: err,
        });
        this.log.error(err);
        return;
      }

      // initial app context
      const user = new UserDomain({
        id: payload.id,
        password: payload.password,
        phone: payload.phone,
        status: UserStatuses.Active,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        isSuperAdmin: payload.isSuperAdmin
      });

      appContext = {
        user,
        token,
      };

      console.log(appContext);

      next();
    };
  }
}
