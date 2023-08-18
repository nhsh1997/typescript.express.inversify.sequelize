import { inject, injectable } from '@shared-library/ioc';
import { TYPES, LOGGER } from '@shared-library/const';
import { ILogger, ILog } from '@shared-library/utils/logger';

@injectable()
export abstract class BaseController {
  @inject(TYPES.LOGGER)
  protected logger: ILogger;

  get log(): ILog {
    return this.logger.get(
      Symbol.keyFor(LOGGER.DELIVERY)!.toLowerCase(),
      Symbol.keyFor(this.id)!.toLowerCase(),
    );
  }
  abstract id: symbol;
}
