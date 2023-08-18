import { TYPES, NAMES } from '@shared-library/const';
import { singletonNamedProvide, inject } from '@shared-library/ioc';
import { IConfiguration } from '@shared-library/utils/configuration';
import { operatorsAliases, Sequelize } from '@shared-library/orm';

@singletonNamedProvide(TYPES.SEQUELIZE, NAMES.POSTGRES)
export class Postgres {
  constructor(@inject(TYPES.CONFIG) config: IConfiguration) {
    const info = {
      ...config.get('postgres'),
      operatorsAliases,
    };
    return new Sequelize(info);
  }
}
