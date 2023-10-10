import {namedInject, singletonNamedProvide} from "@shared-library/ioc";
import {API_TYPES, API_USECASES} from "@api/const";
import {BaseUseCase, IUseCase, ValidationResult} from "@api/usecase";
import {API_TABLES} from "@api/const/table";
import {IUserDBRepository} from "@api/infrastructure";
import {IValidateUsernameUseCaseInput, IValidateUsernameUseCaseOutput} from "@api/usecase/auth/validate/username";


@singletonNamedProvide(API_TYPES.USECASE, API_USECASES.VALIDATE_USERNAME)
export class ValidateUsernameUsecase extends BaseUseCase implements IUseCase<IValidateUsernameUseCaseInput, Promise<IValidateUsernameUseCaseOutput>> {
    @namedInject(API_TYPES.REPOSITORY, API_TABLES.USER)
    private userRepository: IUserDBRepository;

    get id() {
        return API_USECASES.VALIDATE_USERNAME;
    }

    public async execute(input: IValidateUsernameUseCaseInput): Promise<IValidateUsernameUseCaseOutput> {
        const user = await this.userRepository.findByUsername(input.username);

        if (user) {
            return {
                result: ValidationResult.Fail,
                message: "That username is already taken"
            }
        }

        return {
            result: ValidationResult.Success,
        };
    }

}
