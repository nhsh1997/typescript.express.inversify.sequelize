import { inject, injectable } from '@shared-library/ioc';
import { IDebugger } from '@shared-library/utils/debugger';
import { TYPES } from '@shared-library/const';

export interface IStep<I, O> {
  id: symbol;
  run(params: I): O;
}

@injectable()
export abstract class BaseStep {
  @inject(TYPES.DEBUGGER)
  protected debugger: IDebugger;

  abstract id: symbol;

  get debug() {
    return this.debugger.get(
      Symbol.keyFor(TYPES.STEP)!.toLowerCase(),
      Symbol.keyFor(this.id)!.toLowerCase(),
    );
  }
}
