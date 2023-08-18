import { expect, should } from 'chai';

import { BaseMiddleware } from '@shared-library/http/middleware/base';

describe('@shared-library :: ROUTER :: BASE_MIDDLEWARE :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const middleware = new BaseMiddleware(<any>{ get: () => {} });

        should().exist(middleware);
      }).to.not.throw();
    });
  });
});
