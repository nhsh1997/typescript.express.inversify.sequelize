import { inject, injectable } from '@shared-library/ioc';
import { TYPES, LOGGER } from '@shared-library/const';
import { IConfiguration } from '@shared-library/utils/configuration';
import { ILogger, ILog } from '@shared-library/utils/logger';

export interface IUseCase<I, O> {
  id: symbol;
  execute(params: I): O;
}

@injectable()
export abstract class BaseUseCase {
  @inject(TYPES.CONFIG)
  protected config: IConfiguration;

  @inject(TYPES.LOGGER)
  protected logger: ILogger;

  get log(): ILog {
    return this.logger.get(
      Symbol.keyFor(LOGGER.USECASE)!.toLowerCase(),
      Symbol.keyFor(this.id)!.toLowerCase(),
    );
  }

  abstract id: symbol;
}
