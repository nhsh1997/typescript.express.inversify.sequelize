import { inject, named } from 'inversify';

export function namedInject(identifier: symbol, name: symbol) {
  const injectFn = inject(identifier);
  const namedFn = named(name.toString());

  return function (target: any, key: string, index?: number | undefined) {
    injectFn(target, key, index);
    namedFn(target, key, index);
  };
}
