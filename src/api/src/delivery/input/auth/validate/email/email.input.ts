import { BaseHttpInput, Request } from '@api/delivery/input';
import { constructorProvide } from '@api/infrastructure/ioc';
import {API_INPUT} from "@api/const";

export interface IValidateEmailInput {
    email: string;
}

@constructorProvide(API_INPUT.VALIDATE_EMAIL)
export class ValidateEmailInput extends BaseHttpInput implements IValidateEmailInput {
    constructor(req: Request) {
        super(req);
    }

    get email() {
        return this.input.email;
    }
}
