import debug from 'debug';

import { TYPES } from '@shared-library/const';
import { singletonProvide, inject } from '@shared-library/ioc';
import { IConfiguration } from '@shared-library/utils/configuration';

export interface IDebugger {
  get(...namespaces: string[]): debug.IDebugger;
}

@singletonProvide(TYPES.DEBUGGER)
export class Debugger implements IDebugger {
  private routes = new Map<string, debug.IDebugger>();
  private readonly debugger: debug.IDebugger;

  constructor(@inject(TYPES.CONFIG) config: IConfiguration) {
    const namespace: string = config.get('debug');

    if (!namespace) throw new Error('Can not get config debug');

    this.debugger = debug(namespace);
  }

  private namespace(...namespaces: string[]) {
    return namespaces.join(':');
  }

  has(...namespaces: string[]) {
    const namespace = this.namespace(...namespaces);

    return this.routes.has(namespace);
  }

  get(...namespaces: string[]) : debug.IDebugger {
    if (Array.isArray(namespaces) && namespaces.length !== 0) {
      const namespace = this.namespace(...namespaces);

      if (!this.has(...namespaces)) {
        this.routes.set(namespace, this.debugger.extend(namespace));
      }

      return this.routes.get(namespace) || this.debugger.extend(namespace);
    }

    return this.debugger;
  }
}
