import { expect, should } from 'chai';

import { BaseRouter } from '@shared-library/http/router/base';

describe('@shared-library :: ROUTER ::BASE_ROUTER :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const router = new BaseRouter(
          <any>{
            get: () => {
              return console.log;
            },
          },
          <any>{},
        );

        should().exist(router);
        expect(router.path).to.be.equal('');
        expect(router.log).to.be.a('function');
        expect(router['getContext']).to.be.a('function');
        expect(router['getContext'](<any>{})).to.be.eql('{}');
      }).to.not.throw();
    });
  });
});
