import { expect } from 'chai';

import { constructorProvide } from '@shared-library/ioc/';

describe('@shared-library :: IOC ::CONSTRUCTOR_PROVIDE', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        @constructorProvide('DOMAIN')
        class Domain {}
        const domain = new Domain();
      }).to.not.throw();
    });
  });
});
