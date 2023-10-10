import { API_OUTPUT } from '@api/const';
import { BaseHttpOutput, Response, IHttpOutput } from '@api/delivery/output';
import { constructorProvide } from '@api/infrastructure/ioc';

export interface IValidateEmailOutput extends IHttpOutput {

}

@constructorProvide(API_OUTPUT.VALIDATE_EMAIL)
export class ValidateEmailOutput extends BaseHttpOutput {
    constructor(res: Response) {
        super(res);
    }

    json(output: any) {
        this.out.json(this.build(output));
    }
}
