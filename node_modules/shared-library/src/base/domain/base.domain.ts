import { inject, injectable } from '@shared-library/ioc';
import { TYPES, LOGGER } from '@shared-library/const';
import { IValidator } from '@shared-library/utils/validator';
import { ILogger, ILog } from '@shared-library/utils/logger';

export interface IDomain {
  id: number;
}

@injectable()
export abstract class BaseDomain<T> {
  protected abstract nameContext: symbol;

  @inject(TYPES.VALIDATOR)
  protected validator: IValidator;

  constructor(protected context: T) {}

  abstract toString(): string;
  abstract json(): any;

  @inject(TYPES.LOGGER)
  protected logger: ILogger;

  get log(): ILog {
    return this.logger.get(
      Symbol.keyFor(LOGGER.DOMAIN)!.toLowerCase(),
      Symbol.keyFor(this.nameContext)!.toLowerCase(),
    );
  }

  isValid() {
    const { valid, errors } = this.validator.validate(
      Symbol.keyFor(this.nameContext)!,
      this.context,
    );

    !valid && this.log.error(errors);

    return valid;
  }

  get isEmpty() {
    return !Object.keys(this.context).length;
  }
}
