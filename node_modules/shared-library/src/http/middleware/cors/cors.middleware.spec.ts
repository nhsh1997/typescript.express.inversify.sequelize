import { expect, should } from 'chai';

import { CorsMiddleware } from '@shared-library/http/middleware/cors';

describe('@shared-library :: ROUTER :: CORS_MIDDLEWARE :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const middleware = new CorsMiddleware(<any>{
          get: () => {
            return { info: () => {} };
          },
        });

        should().exist(middleware);
      }).to.not.throw();
    });
  });
});
