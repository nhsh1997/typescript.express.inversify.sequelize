import { expect, should } from 'chai';

import { BaseUsecase } from '@shared-library/base/usecase';

class Usecase extends BaseUsecase {
  id = 'Usecase';
}

describe('@shared-library :: BASE ::BASE_USECASE :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const usecase = new Usecase();
        usecase['logger'] = <any>{
          get: () => {
            return console.log;
          },
        };
        should().exist(usecase);
        expect(usecase.id).to.be.equal('Usecase');
        expect(usecase.log).to.be.a('function');
      }).to.not.throw();
    });
  });
});
