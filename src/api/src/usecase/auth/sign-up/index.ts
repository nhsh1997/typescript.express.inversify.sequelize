export type ISignUpUseCaseInput = {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type ISignUpUseCaseOutput = {
    token: string;
};

export * from '@api/usecase/auth/sign-up/sign-up.usecase';
