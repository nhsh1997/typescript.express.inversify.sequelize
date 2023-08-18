import {namedInject, singletonNamedProvide, inject} from "@shared-library/ioc";
import {API_TYPES, API_USECASES} from "@api/const";
import {BaseUseCase, IGenerateTokenUseCaseInput, IGenerateTokenUseCaseOutput, IUseCase} from "@api/usecase";
import {API_TABLES} from "@api/const/table";
import {IJwtHelper, IPasswordHelper, IUserDBRepository} from "@api/infrastructure";


@singletonNamedProvide(API_TYPES.USECASE, API_USECASES.GENERATE_TOKEN)
export class GenerateTokenUseCase extends BaseUseCase implements IUseCase<IGenerateTokenUseCaseInput, Promise<IGenerateTokenUseCaseOutput>> {
    @namedInject(API_TYPES.REPOSITORY, API_TABLES.USER)
    private userRepository: IUserDBRepository;

    @inject(API_TYPES.JWT_HELPER)
    private jwtHelper: IJwtHelper;

    @inject(API_TYPES.PASSWORD_HELPER)
    private passwordHelper: IPasswordHelper;

    get id() {
        return API_USECASES.GENERATE_TOKEN;
    }

    public async execute(credential: IGenerateTokenUseCaseInput): Promise<IGenerateTokenUseCaseOutput> {
        const user = await this.userRepository.findByEmail(credential.email);

        if (!user) throw new Error(`User with email ${credential.email} not found`);

        const isValidPassword = this.passwordHelper.compare(credential.password, user.password);

        if (!isValidPassword) throw new Error('Invalid credentials');

        const token = this.jwtHelper.signin({
            id: user.id,
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            isSuperAdmin: user.isSuperAdmin,
            isSwitchedAccount: false,
        });

        return {
            token
        };
    }

}
