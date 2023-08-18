import { Sequelize, ModelAttributes, ModelOptions } from '@shared-library/orm/sequelizejs';
import { injectable } from '@shared-library/ioc';
import { ModelStatic } from "sequelize";

export interface IPostgresTable {
  model: ModelStatic<any>;
}

@injectable()
export abstract class BasePostgresTable {
  model: ModelStatic<any>;

  abstract tableName: string;
  abstract attribute: ModelAttributes;
  abstract options: ModelOptions;

  set postgres(postgres: Sequelize) {
    this.model = postgres.define(this.tableName, this.attribute, this.options) as any;
  }
}

