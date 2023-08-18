import { expect, should } from 'chai';

import { BaseHttpOutput, BaseMessageOutput } from '@shared-library/base/output';

class Output extends BaseHttpOutput {}

describe('@shared-library :: BASE ::BASE_OUTPUT :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should throw error', () => {
      expect(() => {
        new Output(undefined);
      }).to.throw();
    });
  });

  context('when non empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const input = new Output(<any>{
          json: () => {},
        });

        should().exist(input);
        expect(input.json).to.be.a('function');
        expect(input.build).to.be.a('function');
      }).to.not.throw();
    });
  });
});

describe('@shared-library :: BASE ::BASE_OUTPUT :: BUILD', () => {
  const output = new Output(<any>{});

  context('when build with empty', () => {
    it('data empty', () => {
      const result = output.build(undefined);
      expect(result.data).to.be.equal(undefined);
      expect(result.meta.message).to.be.equal('success');
      expect(result.meta.status).to.be.equal(200);
    });
  });

  context('when build with data ', () => {
    it('data empty', () => {
      const result = output.build({});
      expect(result.data).to.be.eql({});
      expect(result.meta.message).to.be.equal('success');
      expect(result.meta.status).to.be.equal(200);
    });
  });
});

describe('@shared-library :: BASE ::BASE_OUTPUT :: JSON', () => {
  const output = new Output(<any>{
    json: () => {
      throw new Error('json called');
    },
  });

  context('when json with empty', () => {
    it('data empty', () => {
      expect(() => {
        output.json(undefined);
      }).to.throw('json called');
    });
  });

  context('when json with data ', () => {
    it('data empty', () => {
      it('data empty', () => {
        expect(() => {
          output.json({});
        }).to.throw('json called');
      });
    });
  });
});

describe('@shared-library :: BASE ::BASE_OUTPUT :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should throw error', () => {
      expect(() => {
        new BaseMessageOutput(undefined);
      }).to.throw();
    });
  });

  context('when non empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const input = new BaseMessageOutput(<any>{
          json: () => {},
        });

        should().exist(input);
      }).to.not.throw();
    });
  });
});
