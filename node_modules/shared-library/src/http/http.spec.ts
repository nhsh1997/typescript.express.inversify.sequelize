import { expect, should } from 'chai';

import { Http } from '@shared-library/http';

describe('@shared-library :: HTTP ::HTTP :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const http = new Http();

        should().exist(http);
        expect(http.listen).to.be.a('function');
      }).to.not.throw();
    });
  });
});

describe('@shared-library :: HTTP ::HTTP :: LISTEN', () => {
  context('when empty', () => {
    it('dont action any thing', async () => {
      const http = new Http();
      http['server'] = <any>{
        listen: () => {},
      };
      expect(await http.listen(undefined)).to.be.undefined;
    });
  });

  context('when port invalid', () => {
    it('throw error', () => {
      const http = new Http();
      http['server'] = <any>{
        listen: () => {},
      };
      expect(() => {
        http.listen(<any>'a');
      }).to.throw(Error);
    });
  });

  context('when port valid', () => {
    it('listen on port', () => {
      const http = new Http();
      http['server'] = <any>{
        listen: () => {},
      };
      expect(http.listen(1)).to.be.undefined;
    });
  });
});
