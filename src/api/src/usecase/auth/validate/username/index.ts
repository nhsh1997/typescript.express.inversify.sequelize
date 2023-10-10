import {ValidationResult} from "@api/usecase";

export type IValidateUsernameUseCaseInput = {
    username: string;
};

export type IValidateUsernameUseCaseOutput = {
    result: ValidationResult;
    message?: string;
};

export * from '@api/usecase/auth/validate/username/validate-username.usecase';
