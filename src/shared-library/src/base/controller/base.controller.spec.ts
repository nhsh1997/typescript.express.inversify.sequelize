import { expect, should } from 'chai';

import { BaseController } from '@shared-library/base/controller';

describe('@shared-library :: BASE ::BASE_CONTROLLER :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      class Controller extends BaseController {
        get id() {
          return 'Controller';
        }
      }
      const controller = new Controller();
      controller['logger'] = <any>{
        get: () => {
          return console.log;
        },
      };

      expect(() => {
        should().exist(controller);
        expect(controller.log).to.be.a('function');
      }).to.not.throw(Error);
    });
  });
});
