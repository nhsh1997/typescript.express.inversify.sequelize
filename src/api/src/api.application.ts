import { API_TYPES, API_NAMES } from '@api/const';
import { BaseApplication } from '@shared-library/base/application';
import {inject, namedInject, singletonNamedProvide} from '@api/infrastructure/ioc';
import {IHttp} from "@shared-library/http";
import { Sequelize } from '@api/infrastructure/postgres';

@singletonNamedProvide(API_TYPES.APPLICATION, API_NAMES.API)
export class ApiApplication extends BaseApplication {
  @inject(API_TYPES.HTTP)
  private http: IHttp;
  @namedInject(
      API_TYPES.SEQUELIZE,
      API_NAMES.POSTGRES,
  )
  private postgres: Sequelize;

  get id() {
    return API_NAMES.API;
  }

  async load() {
    try {
      await this.postgres.authenticate();
    } catch (error: any) {
      this.log.error(error.message);
      process.exit();
    }
  }

  async start() {
    const port = Number(process.env.PORT) || (this.config.get('api.port') as number);
    await this.http.listen(port);
    this.log.info(`SERVER LISTENING ${port}`);
  }
}
