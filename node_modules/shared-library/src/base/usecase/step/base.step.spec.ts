import { expect, should } from 'chai';

import { BaseStep } from '@shared-library/base/usecase';

class Step extends BaseStep {
  id = 'STEP';
}

describe('@shared-library :: BASE ::BASE_STEP :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const step = new Step();
        step['debugger'] = <any>{
          get: () => {
            return console.log;
          },
        };
        should().exist(step);
        expect(step.id).to.be.equal('STEP');
        expect(step.debug).to.be.a('function');
      }).to.not.throw();
    });
  });
});
