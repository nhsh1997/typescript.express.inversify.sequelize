import { expect, should } from 'chai';

import { OauthMiddleware } from '@shared-library/http/middleware/oauth';

describe('@shared-library :: ROUTER :: OAUTH_MIDDLEWARE :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const middleware = new OauthMiddleware(<any>{
          get: () => {
            return { info: () => {} };
          },
        });

        should().exist(middleware);
      }).to.not.throw();
    });
  });
});
