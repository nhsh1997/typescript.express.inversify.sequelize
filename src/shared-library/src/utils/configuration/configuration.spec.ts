import { Configuration } from '@shared-library/utils/configuration';

describe('@shared-library :: UTILS :: CONFIGURATION :: CONSTRUCTOR', () => {
  test('when empty', () => {
    it('should not throw error', () => {
      const config = new Configuration();

      expect(() => {
        expect(config.get).toBe('function');
        expect(config.has).toBe('function');
      }).not.toThrow(Error);
    });
  });
});

describe('@shared-library :: UTILS :: CONFIGURATION :: METHOD', () => {
  test('when config has not in config file', () => {
    const config = new Configuration();
    it('get setting should return undefined', () => {
      expect(config.get('setting')).toBeUndefined();
    });

    it('has setting should return false', () => {
      expect(config.has('setting')).toEqual(false);
    });
  });

  test('when config has in config file', () => {
    const config = new Configuration();
    it('get setting should return not undefined', () => {
      expect(config.get('a')).not.toBeUndefined();
    });

    it('has setting should return true', () => {
      expect(config.has('a')).toEqual(true);
    });
  });
});
