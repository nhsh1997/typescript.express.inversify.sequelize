import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { singletonProvide } from '@shared-library/ioc';
import { TYPES } from '@shared-library/const';

export interface IPasswordHelper {
  encrypt(password: string): string;
  compare(password: string, encodedPassword: string): boolean;
}

@singletonProvide(TYPES.PASSWORD_HELPER)
export class PasswordHelper {
  encrypt(password: string): string {
    if (!password) throw new Error('missing password');

    const salt = genSaltSync();

    return hashSync(password, salt);
  }

  compare(password: string, encodedPassword: string): boolean {
    if (!password) throw new Error('missing password');
    if (!encodedPassword) throw new Error('missing encoded password');

    return compareSync(password, encodedPassword);
  }
}
