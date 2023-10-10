import {namedInject, singletonNamedProvide, inject} from "@shared-library/ioc";
import {API_TYPES, API_USECASES} from "@api/const";
import {BaseUseCase, IUseCase} from "@api/usecase";
import {API_TABLES} from "@api/const/table";
import {IJwtHelper, IPasswordHelper, IUserDBRepository} from "@api/infrastructure";
import {ISignUpUseCaseInput, ISignUpUseCaseOutput} from "@api/usecase/auth/sign-up/index";


@singletonNamedProvide(API_TYPES.USECASE, API_USECASES.SIGN_UP)
export class SignUpUsecase extends BaseUseCase implements IUseCase<ISignUpUseCaseInput, Promise<ISignUpUseCaseOutput>> {
    @namedInject(API_TYPES.REPOSITORY, API_TABLES.USER)
    private userRepository: IUserDBRepository;

    @inject(API_TYPES.JWT_HELPER)
    private jwtHelper: IJwtHelper;

    @inject(API_TYPES.PASSWORD_HELPER)
    private passwordHelper: IPasswordHelper;

    get id() {
        return API_USECASES.SIGN_UP;
    }

    public async execute(input: ISignUpUseCaseInput): Promise<ISignUpUseCaseOutput> {
        let user = await this.userRepository.findByEmail(input.email);

        if (user) throw new Error(`User with email ${input.email} existed`);

        user = await this.userRepository.findByUsername(input.username);

        if (user) throw new Error(`User with username ${input.username} existed`);


        user = await this.userRepository.create({
            username: input.username,
            email: input.email,
            password: this.passwordHelper.encrypt(input.password),
            firstName: input.firstName,
            lastName: input.lastName,
        })

        const token = this.jwtHelper.signin({
            id: user.id,
            email: user.email,
            phone: user.phone,
            firstName: user.firstName,
            lastName: user.lastName,
            isSuperAdmin: user.isSuperAdmin,
        });

        return {
            token
        };
    }

}
