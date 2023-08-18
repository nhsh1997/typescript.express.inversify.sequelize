import { Response } from '@shared-library/http';
import { injectable } from '@shared-library/ioc';

export interface IHttpOutput {
  json(output: any): void;
  error(error: Error): void;
}

@injectable()
export class BaseHttpOutput implements IHttpOutput {
  constructor(protected out: Response) {
    if (!out) throw new Error('param out mising');
  }

  build(input: any) {
    return {
      meta: {
        status: 200,
        message: 'success',
      },
      data: input,
    };
  }

  json(output: any) {
    this.out.json(this.build(output));
  }

  error(error: Error) {
    this.out.json({
      meta: {
        status: 500,
        message: error.message,
      },
      data: error,
    });
  }
}
