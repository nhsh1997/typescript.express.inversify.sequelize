import { expect, should } from 'chai';

import { ApiRouter } from '@shared-library/http/router/api';

describe('@shared-library :: ROUTER :: API_ROUTER :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const router = new ApiRouter(
          <any>{
            get: () => {
              return console.log;
            },
          },
          <any>{},
        );

        should().exist(router);
        expect(router.path).to.be.equal('/api');
      }).to.not.throw();
    });
  });
});
