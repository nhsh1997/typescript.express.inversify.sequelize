export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
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

export enum UserStatuses {
    Active = 1,
    Inactive = 2,
    Deleted = -1,
}


export * from '@api/domain/user/user.domain';
export * from '@api/domain/user/user.schema';
