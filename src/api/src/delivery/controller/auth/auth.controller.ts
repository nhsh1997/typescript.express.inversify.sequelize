import {namedInject, singletonNamedProvide} from "@api/infrastructure/ioc";
import {API_TYPES, API_USECASES} from "@api/const";
import {API_CONTROLLER} from "@api/const/controller";
import {BaseController} from "@api/delivery/controller";
import {IGenerateTokenInput} from "@api/delivery/input/auth/generate-token/generate-token.input";
import {
    IGenerateTokenOutput, ISignUpInput, ISignUpOutput,
    IValidateEmailInput,
    IValidateEmailOutput,
    IValidateUsernameInput,
    IValidateUsernameOutput
} from "@api/delivery";
import {IUseCase} from "@api/usecase";

export interface IAuthController {
    generateToken(input: IGenerateTokenInput, output: IGenerateTokenOutput): void;
    validateEmail(input: IValidateEmailInput, output: IValidateEmailOutput): void;
    validateUsername(input: IValidateUsernameInput, output: IValidateUsernameOutput): void;
    signUp(input: ISignUpInput, output: ISignUpOutput): void;
}

@singletonNamedProvide(
    API_TYPES.CONTROLLER,
    API_CONTROLLER.AUTH,
)
export class AuthController extends BaseController
    implements IAuthController {

    @namedInject(API_TYPES.USECASE, API_USECASES.GENERATE_TOKEN)
    private generateTokenUseCase: IUseCase<IGenerateTokenInput, Promise<IGenerateTokenOutput>>;


    @namedInject(API_TYPES.USECASE, API_USECASES.VALIDATE_EMAIL)
    private validateEmailUseCase: IUseCase<IValidateEmailInput, Promise<IValidateEmailOutput>>;


    @namedInject(API_TYPES.USECASE, API_USECASES.VALIDATE_USERNAME)
    private validateUsernameUseCase: IUseCase<IValidateUsernameInput, Promise<IValidateUsernameOutput>>;


    @namedInject(API_TYPES.USECASE, API_USECASES.SIGN_UP)
    private signUpUseCase: IUseCase<ISignUpInput, Promise<ISignUpOutput>>;

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

    async validateEmail(input: IValidateEmailInput, output: IValidateEmailOutput) {
        try {
            const { email } = input;

            this.log.info('validate email: ', email);

            const data = await this.validateEmailUseCase.execute({
                email,
            })

            this.log.info('validate email done');
            output.json(data);
        } catch (error: any) {
            this.log.error(error);

            output.error(error);
        }
    }

    async validateUsername(input: IValidateUsernameInput, output: IValidateUsernameOutput) {
        try {
            const { username } = input;

            this.log.info('validate username: ', username);

            const data = await this.validateUsernameUseCase.execute({
                username,
            })

            this.log.info('validate username done');
            output.json(data);
        } catch (error: any) {
            this.log.error(error);

            output.error(error);
        }
    }

    async signUp(input: ISignUpInput, output: ISignUpOutput) {
        try {
            const { username, email } = input;

            this.log.info('sign up: ', username, email);

            const data = await this.signUpUseCase.execute(input)

            this.log.info('sign up done');
            output.json(data);
        } catch (error: any) {
            this.log.error(error);

            output.error(error);
        }
    }

}
