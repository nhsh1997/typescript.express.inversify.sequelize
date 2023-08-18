import { expect, should } from 'chai';

import { BaseDomain } from '@shared-library/base/domain';

class Domain extends BaseDomain<{}> {
  protected nameContext: string = 'Domain';
  toString() {
    return '';
  }
  json() {
    return {};
  }
  logger = <any>{
    get: () => {
      return { error: () => {} };
    },
  };

  validator = <any>{
    validate: () => {
      return this.context['valid'] ? { valid: true } : { valid: false, errors: 'errors' };
    },
  };
}

describe('@shared-library :: BASE ::BASE_DOMAIN :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      const domain = new Domain({});

      expect(() => {
        should().exist(domain);
        expect(domain.toString).to.be.a('function');
        expect(domain.json).to.be.a('function');
        expect(domain.isEmpty).to.be.true;
        expect(domain.isValid).to.be.a('function');
      }).to.not.throw(Error);
    });
  });
});

describe('@shared-library :: BASE ::BASE_DOMAIN :: ISVALID', () => {
  context('when domain valid', () => {
    it('isValid() is true', () => {
      const domain = new Domain({
        valid: true,
      });

      should().exist(domain);
      expect(domain.toString).to.be.a('function');
      expect(domain.json).to.be.a('function');
      expect(domain.isEmpty).to.be.false;
      expect(domain.isValid).to.be.a('function');
      expect(domain.isValid()).to.be.true;
    });
  });

  context('when domain invalid', () => {
    it('isValid() is false', () => {
      const domain = new Domain({
        valid: false,
      });

      should().exist(domain);
      expect(domain.toString).to.be.a('function');
      expect(domain.json).to.be.a('function');
      expect(domain.isEmpty).to.be.false;
      expect(domain.isValid).to.be.a('function');
      expect(domain.isValid()).to.be.false;
    });
  });
});
