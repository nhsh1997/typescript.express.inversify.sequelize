import {inject, interfaces, singletonNamedProvide} from "@shared-library/ioc";
import {BaseMapper} from "@shared-library/base/repository";
import {IUserDomain} from "@api/domain";
import {API_DOMAINS} from "@api/const/domain";
import {API_TYPES} from "@api/const";

@singletonNamedProvide(API_TYPES.MAPPER, API_DOMAINS.USER)
export class UserMapper extends BaseMapper<IUserDomain> {
  constructor(
    @inject(API_DOMAINS.USER)
    User: interfaces.Newable<IUserDomain>,
  ) {
    super(User);
  }

  toEntity(data: any) {
    const {
      id,
      firstName,
      lastName,
      email,
      username,
      isSuperAdmin,
      phone,
      status,
      createdAt,
      updatedAt,
    } = data;
    return super.toEntity({
      id,
      firstName,
      lastName,
      email,
      username,
      isSuperAdmin,
      phone,
      status,
      createdAt,
      updatedAt,
    });
  }

  toPrivateEntity(data: any) {
    if (!data) return null;
    const {
      id,
      firstName,
      lastName,
      email,
      username,
      isSuperAdmin,
      phone,
      status,
      password,
      createdAt,
      updatedAt,
    } = data;
    return super.toEntity({
      id,
      firstName,
      lastName,
      username,
      email,
      password,
      isSuperAdmin,
      phone,
      status,
      createdAt,
      updatedAt,
    });
  }

  toJSON(data: IUserDomain) {
    return data;
  }
}
