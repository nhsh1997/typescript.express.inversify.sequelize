import { expect, should } from 'chai';

import { MethodOverrideMiddleware } from '@shared-library/http/middleware/method-override';

describe('@shared-library :: ROUTER :: METHOD_OVERRIDE_MIDDLEWARE :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const middleware = new MethodOverrideMiddleware(<any>{
          get: () => {
            return { info: () => {} };
          },
        });

        should().exist(middleware);
      }).to.not.throw();
    });
  });
});
