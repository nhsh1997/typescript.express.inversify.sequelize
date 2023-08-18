import {API_INPUT} from "@api/const/input";
import { BaseHttpInput, Request } from '@api/delivery/input';
import { constructorProvide } from '@api/infrastructure/ioc';

export interface IGenerateTokenInput {
    email: string;
    password: string;
}

@constructorProvide(API_INPUT.GENERATE_TOKEN)
export class GenerateTokenInput extends BaseHttpInput implements IGenerateTokenInput {
    constructor(req: Request) {
        super(req);
    }

    get email() {
        return this.input.email;
    }

    get password() {
        return this.input.password;
    }
}
