import log4js from 'log4js';

import { TYPES } from '@shared-library/const';
import { singletonProvide, inject } from '@shared-library/ioc';
import { IConfiguration } from '@shared-library/utils/configuration';

export interface ILogger {
  get(level: string, ...namespaces: string[]): log4js.Logger;
  has(...namespaces: string[]): boolean;
}

export enum LEVEL {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal',
}

export interface ILog {
  debug(message: any, ...args: any[]): void;

  info(message: any, ...args: any[]): void;

  warn(message: any, ...args: any[]): void;

  error(message: any, ...args: any[]): void;

  fatal(message: any, ...args: any[]): void;
}

@singletonProvide(TYPES.LOGGER)
export class Logger {
  private routes = new Map<string, log4js.Logger>();

  constructor(@inject(TYPES.CONFIG) config: IConfiguration) {
    log4js.configure(config.get('log'));
  }

  private namespace(...namespaces: string[]) {
    return namespaces.join(':');
  }

  has(...namespaces: string[]) {
    const namespace = this.namespace(...namespaces);

    return this.routes.has(namespace);
  }

  get(...namespaces: string[]) {
    if (Array.isArray(namespaces) && namespaces.length !== 0) {
      const namespace = this.namespace(...namespaces);

      const [layer, ...contexts] = namespaces;

      if (!this.has(...namespaces)) {
        const logger = log4js.getLogger(layer);
        logger.addContext('context', contexts.join('::'));
        this.routes.set(namespace, logger);
      }

      return this.routes.get(namespace);
    }

    return log4js.getLogger();
  }
}
