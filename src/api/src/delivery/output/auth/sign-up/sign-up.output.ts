import { API_OUTPUT } from '@api/const';
import { BaseHttpOutput, Response, IHttpOutput } from '@api/delivery/output';
import { constructorProvide } from '@api/infrastructure/ioc';

export interface ISignUpOutput extends IHttpOutput {

}

@constructorProvide(API_OUTPUT.SIGN_UP)
export class SignUpOutput extends BaseHttpOutput {
    constructor(res: Response) {
        super(res);
    }

    json(output: any) {
        this.out.json(this.build(output));
    }
}
