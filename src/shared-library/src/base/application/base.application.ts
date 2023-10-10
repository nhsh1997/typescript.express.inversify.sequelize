import { TYPES, LOGGER } from '@shared-library/const';

import { inject, injectable } from '@shared-library/ioc';
import { IConfiguration } from '@shared-library/utils/configuration';
import { IDebugger } from '@shared-library/utils/debugger';
import { ILogger, ILog } from '@shared-library/utils/logger';

export interface IApplication {
    load(): Promise<void>;
    start(): Promise<void>;
}

@injectable()
export abstract class BaseApplication implements IApplication {
    @inject(TYPES.CONFIG)
    protected config: IConfiguration;

    @inject(TYPES.DEBUGGER)
    protected debug: IDebugger;

    @inject(TYPES.LOGGER)
    protected logger: ILogger;

    get log(): ILog {
        return this.logger.get(
            Symbol.keyFor(LOGGER.APPLICATION)!.toLowerCase(),
            Symbol.keyFor(this.id)!.toLowerCase(),
        );
    }

    abstract id: symbol;
    abstract load(): Promise<void>;
    abstract start(): Promise<void>;
}
