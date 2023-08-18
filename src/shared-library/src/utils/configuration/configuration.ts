import config from 'config';

import { TYPES } from '@shared-library/const';
import { singletonProvide } from '@shared-library/ioc';

export interface IConfiguration {
  get(setting: string): any;
  has(setting: string): boolean;
}

@singletonProvide(TYPES.CONFIG)
export class Configuration {
  private config: config.IConfig;

  constructor() {
    this.config = config;
  }

  get(setting: string) {
    try {
      return this.config.get(setting);
    } catch (error) {
      return;
    }
  }

  has(setting: string) {
    return this.config.has(setting);
  }
}
