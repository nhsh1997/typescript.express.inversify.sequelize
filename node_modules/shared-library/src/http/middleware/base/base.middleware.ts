import { TYPES, LOGGER } from '@shared-library/const';
import { Http } from '@shared-library/http';
import { inject, injectable } from '@shared-library/ioc';
import { IConfiguration } from '@shared-library/utils/configuration';
import { ILogger, ILog } from '@shared-library/utils/logger';

@injectable()
export abstract class BaseMiddleware {
  protected middleware = Http.SERVER;

  @inject(TYPES.LOGGER)
  private logger: ILogger;

  protected get log(): ILog {
    return this.logger.get(
      Symbol.keyFor(LOGGER.INFRASTRUCTURE)!.toLowerCase(),
      Symbol.keyFor(this.id)!.toLowerCase(),
    );
  }

  load() {
    this.log.info(Symbol.keyFor(this.id)?.toLowerCase());
  }

  @inject(TYPES.CONFIG)
  protected config: IConfiguration;

  abstract id: symbol;
}
