import { injectable } from '@shared-library/ioc';

export interface IMapper<T> {
  toEntity: (data: any) => T;
  toPrivateEntity: (domain: T) => any;
  toJSON: (domain: T) => any;
}

@injectable()
export class BaseMapper<T> implements IMapper<T> {
  constructor(private Domain) { }

  toEntity(context: any) {
    if (!context) return null;
    return new this.Domain(context!);
  }

  toJSON(context: T) {
    if (!context) return null;

    return context!['context'];
  }

  toPrivateEntity(domain: T): any {
  }
}
