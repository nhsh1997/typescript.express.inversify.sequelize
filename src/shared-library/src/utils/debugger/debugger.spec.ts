import { expect, should } from 'chai';

import { Debugger } from '@shared-library/utils/debugger';
import {
  IConfiguration,
  Configuration
} from '@shared-library/utils/configuration';

describe('@shared-library :: UTILS :: DEBUGGER :: CONSTRUCTOR', () => {
  context('when namespace debug in config file', () => {
    it('should not throw error', () => {
      expect(() => {
        const debuger = new Debugger(<IConfiguration>{
          get: (setting: string) => {
            return setting;
          }
        });
        should().exist(debuger);
        expect(debuger.get).to.be.a('function');
        expect(debuger.has).to.be.a('function');
      }).to.not.throw(Error);
    });
  });

  context('when namespace debug not in config file', () => {
    it('should throw error', () => {
      expect(() => {
        new Debugger(<IConfiguration>{
          get: (setting: string) => {
            return;
          }
        });
      }).to.throw(Error);
    });
  });

  context('when empty', () => {
    it('should throw error', () => {
      expect(() => {
        new Debugger(undefined);
      }).to.throw(Error);
    });
  });
});

describe('@shared-library :: UTILS :: DEBUGGER :: METHOD', () => {
  context('when get debugger with namespace zero level ', () => {
    const debug = new Debugger(new Configuration());

    it('should return debug zero level (default)', () => {
      expect(debug.get('usecase')).to.be.a('function');
      expect(debug.get().namespace.split(':').length).to.be.equal(1);
    });
  });

  context('when get debugger with namespace one level ', () => {
    const debug = new Debugger(new Configuration());

    it('should return debug one level', () => {
      expect(debug.get('usecase')).to.be.a('function');
      expect(
        debug
          .get('usecase')
          .namespace.split(':')
          .pop()
      ).to.be.equal('usecase');
    });
  });

  context('when get debugger with namespace mutil level ', () => {
    const debug = new Debugger(new Configuration());

    it('should return debug mutil level', () => {
      expect(
        debug.get('usecase', 'do_something_usecase', 'do_something_step')
      ).to.be.a('function');
      expect(
        debug
          .get('usecase', 'do_something_usecase', 'do_something_step')
          .namespace.split(':')
          .pop()
      ).to.be.equal('do_something_step');
    });
  });
});
