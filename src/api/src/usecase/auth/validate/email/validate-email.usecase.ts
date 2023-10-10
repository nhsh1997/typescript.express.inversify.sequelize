import {namedInject, singletonNamedProvide} from "@shared-library/ioc";
import {API_TYPES, API_USECASES} from "@api/const";
import {BaseUseCase, IUseCase, ValidationResult} from "@api/usecase";
import {API_TABLES} from "@api/const/table";
import {IUserDBRepository} from "@api/infrastructure";
import {IValidateEmailUseCaseInput, IValidateEmailUseCaseOutput} from "@api/usecase/auth/validate/email/index";


@singletonNamedProvide(API_TYPES.USECASE, API_USECASES.VALIDATE_EMAIL)
export class ValidateEmailUseCase extends BaseUseCase implements IUseCase<IValidateEmailUseCaseInput, Promise<IValidateEmailUseCaseOutput>> {
    @namedInject(API_TYPES.REPOSITORY, API_TABLES.USER)
    private userRepository: IUserDBRepository;

    get id() {
        return API_USECASES.VALIDATE_EMAIL;
    }

    public async execute(credential: IValidateEmailUseCaseInput): Promise<IValidateEmailUseCaseOutput> {
        const user = await this.userRepository.findByEmail(credential.email);

        if (user) {
            return {
                result: ValidationResult.Fail,
                message: "That email is already taken"
            }
        }

        return {
            result: ValidationResult.Success,
        };
    }

}
