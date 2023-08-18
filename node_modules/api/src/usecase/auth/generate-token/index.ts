export type IGenerateTokenUseCaseInput = {
    email: string;
    password: string;
};

export type IGenerateTokenUseCaseOutput = {
    token: string;
};

export * from '@api/usecase/auth/generate-token/generate-token.usecase';
