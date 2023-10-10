import { BaseHttpInput, Request } from '@api/delivery/input';
import { constructorProvide } from '@api/infrastructure/ioc';
import {API_INPUT} from "@api/const";

export interface IValidateUsernameInput {
    username: string;
}

@constructorProvide(API_INPUT.VALIDATE_USERNAME)
export class ValidateUsernameInput extends BaseHttpInput implements IValidateUsernameInput {
    constructor(req: Request) {
        super(req);
    }

    get username() {
        return this.input.username;
    }
}
