import {ValidationResult} from "@api/usecase";

export type IValidateEmailUseCaseInput = {
    email: string;
};

export type IValidateEmailUseCaseOutput = {
    result: ValidationResult;
    message?: string;
};

export * from '@api/usecase/auth/validate/email/validate-email.usecase';
