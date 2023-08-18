import { expect, should } from 'chai';

import { Logger, LEVEL } from '@shared-library/utils/logger';

const Config = <any>{
  get: (setting: string) => {
    return {
      appenders: {
        out: {
          type: 'stdout',
          layout: {
            type: 'pattern',
            pattern: '%[[%d] [%p] [%c::%X{context}]%] - %m',
          },
        },
      },
      categories: {
        default: {
          appenders: ['out'],
          level: 'info',
        },
      },
    };
  },
};

describe('@shared-library :: UTILS :: LOGGER :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const logger = new Logger(Config);
        should().exist(logger);
        expect(logger.get).to.be.a('function');
        expect(logger.has).to.be.a('function');
      }).to.not.throw(Error);
    });
  });
});

describe('@shared-library :: UTILS :: LOGGER :: METHOD', () => {
  context('when get logger info with namespace one level ', () => {
    const logger = new Logger(Config);

    it('should return log one level', () => {
      expect(logger.get('usecase').info).to.be.a('function');
      expect(logger.get('usecase').isInfoEnabled()).to.be.equal(true);
    });
  });

  context('when get logger info with namespace zero level ', () => {
    const logger = new Logger(Config);

    it('should return log zero level', () => {
      expect(logger.get(LEVEL.INFO).info).to.be.a('function');
      expect(logger.get(LEVEL.INFO).isInfoEnabled()).to.be.equal(true);
    });
  });

  context('when get logger with namespace mutil level ', () => {
    const config = new Logger(Config);

    it('should return log mutil level', () => {
      expect(config.get('usecase', 'do_something_usecase', 'do_something_step').info).to.be.a(
        'function',
      );
      expect(
        config.get('usecase', 'do_something_usecase', 'do_something_step').isInfoEnabled(),
      ).to.be.equal(true);
    });
  });

  context('when get logger with empty ', () => {
    const config = new Logger(Config);

    it('should return log defalut', () => {
      expect(config.get().info).to.be.a('function');
      expect(config.get().isInfoEnabled()).to.be.equal(true);
    });
  });
});
