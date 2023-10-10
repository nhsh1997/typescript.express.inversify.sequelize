import { TYPES } from '@shared-library/const';
import { UserDomain } from "@api/domain";

export const API_TYPES = {
  APPLICATION: TYPES.APPLICATION,
  HTTP: TYPES.HTTP,
  ROUTER: TYPES.ROUTER,
  MIDDLEWARE: TYPES.MIDDLEWARE,
  LOGGER: TYPES.LOGGER,
  ROUTER_VALIDATOR: TYPES.ROUTER_VALIDATOR,
  CONTROLLER: TYPES.CONTROLLER,
  USECASE: TYPES.USECASE,
  SCHEMA: TYPES.SCHEMA,
  TABLE: TYPES.TABLE,
  SEQUELIZE: TYPES.SEQUELIZE,
  REPOSITORY: TYPES.REPOSITORY,
  MAPPER: TYPES.MAPPER,
  JWT_HELPER: TYPES.JWT_HELPER,
  PASSWORD_HELPER: TYPES.PASSWORD_HELPER,
  HTTP_HANDLER: Symbol.for('HTTP_HANDLER')
};

export type AppContext = {
  user?: UserDomain;
  token?: string;
};


export type TokenPayload = {
  id: number;
  email: string;
  phone: string,
  password: string;
  firstName: string;
  lastName: string;
  isSuperAdmin: boolean;
  iat: number;
  exp: number;
};
