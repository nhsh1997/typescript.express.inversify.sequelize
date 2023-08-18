import { expect, should } from 'chai';

import { BaseSchema } from '@lib.dmp.advalue/base/schema';

class Schema extends BaseSchema {
  id = 'id';
  type = 'object';
}

describe('@LIB.DMP.ADVALUE :: BASE ::BASE_SCHEMA :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should throw error', () => {
      expect(() => {
        const schema = new Schema();
        should().exist(schema);
        expect(schema.id).to.be.equal('id');
        expect(schema.type).to.be.equal('object');
      }).to.not.throw();
    });
  });
});
