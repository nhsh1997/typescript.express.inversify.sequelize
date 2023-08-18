export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    isSuperAdmin: boolean;
    status: number;
    createdBy?: number;
    updatedBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserDomain extends IUser {
    id?: number;
}

export * from '@api/domain/user/user.domain';
export * from '@api/domain/user/user.schema';
