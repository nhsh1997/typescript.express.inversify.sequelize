import {namedInject, singletonNamedProvide} from "@api/infrastructure/ioc";
import {API_TYPES, API_USECASES} from "@api/const";
import {API_CONTROLLER} from "@api/const/controller";
import {BaseController} from "@api/delivery/controller";
import {IGenerateTokenInput} from "@api/delivery/input/auth/generate-token/generate-token.input";
import {IGenerateTokenOutput} from "@api/delivery";
import {IUseCase} from "@api/usecase";

export interface IAuthController {
    generateToken(input: IGenerateTokenInput, output: IGenerateTokenOutput);
}

@singletonNamedProvide(
    API_TYPES.CONTROLLER,
    API_CONTROLLER.AUTH,
)
export class AuthController extends BaseController
    implements IAuthController {

    @namedInject(API_TYPES.USECASE, API_USECASES.GENERATE_TOKEN)
    private generateTokenUseCase: IUseCase<IGenerateTokenInput, Promise<IGenerateTokenOutput>>;

    get id() {
        return API_CONTROLLER.AUTH;
    }

    async generateToken(input: IGenerateTokenInput, output: IGenerateTokenOutput) {
        try {
            const { email, password } = input;

            this.log.info('generate token for user with email: ', email);

            const data = await this.generateTokenUseCase.execute({
                email,
                password
            })

            this.log.info('generate token done');
            output.json(data);
        } catch (error: any) {
            this.log.error(error);

            output.error(error);
        }
    }
}
