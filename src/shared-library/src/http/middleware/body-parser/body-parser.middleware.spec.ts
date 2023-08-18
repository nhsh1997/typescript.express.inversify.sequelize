import { expect, should } from 'chai';

import { BodyParserMiddleware } from '@shared-library/http/middleware/body-parser';

describe('@shared-library :: ROUTER :: BODY_PARSER_MIDDLEWARE :: CONSTRUCTOR', () => {
  context('when empty', () => {
    it('should not throw error', () => {
      expect(() => {
        const middleware = new BodyParserMiddleware(<any>{
          get: () => {
            return { info: () => {} };
          },
        });

        should().exist(middleware);
      }).to.not.throw();
    });
  });
});
