import express from 'express';
import { multiInject, injectable } from '@shared-library/ioc';
import { TYPES } from '@shared-library/const';

const SERVER = express();

export interface IHttp {
  listen(port: number): void;
}

@injectable()
export class Http {
  static SERVER = SERVER;

  protected server = SERVER;

  @multiInject(TYPES.MIDDLEWARE)
  protected middlewares: any[] = [];

  @multiInject(TYPES.ROUTER)
  protected routers: any[] = [];

  load() {
    this.middlewares.forEach(middleware => middleware.load());
    this.routers.forEach(router => router.load());
  }

  listen(port: number) {
    if (!port) return;
    if (typeof port !== 'number') throw new Error('port must invalid');
    this.server.listen(port);
  }
}
