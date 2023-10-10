import { injectable, interfaces } from '@shared-library/ioc';
import {IDomain} from "@shared-library/base/domain";

export interface IMapper<T> {
  toEntity: (data: any) => T;
  toPrivateEntity: (domain: T) => any;
  toJSON: (domain: T) => any;
}

@injectable()
export class BaseMapper<T> implements IMapper<T> {
  constructor(private Domain: interfaces.Newable<T>) { }

  toEntity(context: any) {
    if (!context) throw new Error('context is missing');
    // @ts-ignore
    return new this.Domain(context);
  }

  toJSON(context: T) : any {
    if (!context) throw new Error('context is missing');
    // @ts-ignore
    return context['context'];
  }

  toPrivateEntity(domain: T): any {
  }
}
