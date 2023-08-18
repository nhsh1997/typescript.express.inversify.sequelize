import { singletonProvide } from '@shared-library/ioc';
import { TYPES } from '@shared-library/const';

import { SignOptions, VerifyOptions, sign, verify } from 'jsonwebtoken';

export interface IJwtHelper {
  signin(payload: any, options?: SignOptions): string;
  verify(token: string, options?: VerifyOptions): string | object;
}

@singletonProvide(TYPES.JWT_HELPER)
export class JwtHelper {
  private readonly SECRET = 'momang.monster';

  signin(payload: any, options?: SignOptions) {
    const opt = Object.assign({}, options, { expiresIn: '6h' });
    return sign(payload, this.SECRET, opt);
  }

  verify(token: string, options?: VerifyOptions) {
    const opt = Object.assign({}, options);
    return verify(token, this.SECRET, opt);
  }
}
