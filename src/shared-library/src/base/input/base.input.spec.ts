import { expect, should } from 'chai';

import { BaseHttpInput } from '@shared-library/base/input';

class Input extends BaseHttpInput {}

describe('@shared-library :: BASE ::BASE_DOMAIN :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should throw error', () => {
      expect(() => {
        new Input(undefined);
      }).to.throw();
    });
  });
  context('when non empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const input = new Input(<any>{
          body: {
            a: 1,
          },
          params: {
            b: 2,
          },
          query: {
            c: 3,
          },
        });

        should().exist(input);
      }).to.not.throw();
    });
  });
});
