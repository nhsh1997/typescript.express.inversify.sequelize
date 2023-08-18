import { Request } from '@shared-library/http';
import { injectable } from '@shared-library/ioc';

@injectable()
export class BaseHttpInput {
  protected input: any;

  constructor(input: Request) {
    if (!input) throw new Error('BaseHttpInput input missing');
    this.input = {
      ...input.body,
      ...input.params,
      ...input.query,
    };
  }
}

