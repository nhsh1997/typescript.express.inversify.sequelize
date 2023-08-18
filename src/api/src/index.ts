export {
  BaseApplication,
  IApplication,
} from "@shared-library/base/application";

import {
  buildProviderModule,
  container,
} from '@api/infrastructure/ioc';

import '@api/domain';
import '@api/infrastructure';
import '@api/usecase';
import '@api/delivery';
import '@api/api.application';

container.load(buildProviderModule());

export { container };
