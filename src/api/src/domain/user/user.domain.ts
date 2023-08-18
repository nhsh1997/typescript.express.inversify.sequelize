import {BaseDomain} from "@api/domain";
import {constructorProvide} from "@shared-library/ioc";
import {API_DOMAINS} from "@api/const/domain";
import { IUserDomain } from "@api/domain/user";

@constructorProvide(API_DOMAINS.USER)
export class UserDomain extends BaseDomain<IUserDomain> implements IUserDomain {

    get id() {
        return this.context.id;
    }

    get email() {
        return this.context.email;
    }

    get firstName() {
        return this.context.firstName;
    }
    get isSuperAdmin() {
        return this.context.isSuperAdmin;
    }
    get lastName() {
        return this.context.lastName;
    }

    get password() {
        return this.context.password;
    }

    get phone() {
        return this.context.password;
    }

    get status() {
        return this.context.status;
    }

    json(): any {
        return this.context;
    }

    toString() {
        return JSON.stringify(this.json());
    }

    nameContext = API_DOMAINS.USER;
}
