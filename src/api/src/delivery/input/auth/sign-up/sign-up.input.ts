import { BaseHttpInput, Request } from '@api/delivery/input';
import { constructorProvide } from '@api/infrastructure/ioc';
import {API_INPUT} from "@api/const";

export interface ISignUpInput {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
}

@constructorProvide(API_INPUT.SIGN_UP)
export class SignUpInput extends BaseHttpInput implements ISignUpInput {
    constructor(req: Request) {
        super(req);
    }

    get email() {
        return this.input.email;
    }

    get username() {
        return this.input.username;
    }

    get password() {
        return this.input.password;
    }

    get firstName() {
        return this.input.username;
    }

    get lastName() {
        return this.input.password;
    }
}
