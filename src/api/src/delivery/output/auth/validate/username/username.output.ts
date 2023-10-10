import { API_OUTPUT } from '@api/const';
import { BaseHttpOutput, Response, IHttpOutput } from '@api/delivery/output';
import { constructorProvide } from '@api/infrastructure/ioc';

export interface IValidateUsernameOutput extends IHttpOutput {

}

@constructorProvide(API_OUTPUT.VALIDATE_USERNAME)
export class ValidateUsernameOutput extends BaseHttpOutput {
    constructor(res: Response) {
        super(res);
    }

    json(output: any) {
        this.out.json(this.build(output));
    }
}
