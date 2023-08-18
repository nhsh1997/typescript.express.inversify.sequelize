import { TYPES, LOGGER } from '@shared-library/const';
import { singletonProvide, inject } from '@shared-library/ioc';
import { IValidator } from '@shared-library/utils/validator';
import { Request, Response, NextFunction } from '@shared-library/http';
import { ILogger, ILog } from '@shared-library/utils/logger';

export interface IRouterValidator {
  validate: (req: Request, res: Response, next: NextFunction) => void;
}

@singletonProvide(TYPES.ROUTER_VALIDATOR)
export class RouterValidator {
  @inject(TYPES.VALIDATOR) validator: IValidator;

  @inject(TYPES.LOGGER)
  protected logger: ILogger;

  get log(): ILog {
    return this.logger.get(
      Symbol.keyFor(LOGGER.INFRASTRUCTURE)!.toLowerCase(),
      Symbol.keyFor(TYPES.ROUTER_VALIDATOR)!.toLowerCase(),
    );
  }

  get validate() {
    return (req: Request, res: Response, next: NextFunction) => {
      const shemaId = [req.method, req.route.path].join('::');

      const data = { ...req.params, ...req.body, ...req.query };

      const { valid, errors } = this.validator.validate(shemaId, data);

      if (!valid) {
        res.json({ status: 400, messages: errors });
        this.log.error(`shemaId: ${shemaId}: "${errors}" -`, data);
        return;
      }

      next();
    };
  }
}
