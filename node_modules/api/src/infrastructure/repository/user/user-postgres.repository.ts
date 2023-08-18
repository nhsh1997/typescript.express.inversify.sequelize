import {IUserDomain} from "@api/domain";
import {IRepository, BasePostgresRepository} from "@api/infrastructure/repository";
import {namedInject, singletonNamedProvide} from "@api/infrastructure/ioc";
import {API_TYPES} from "@api/const";
import {IPostgresTable} from "@api/infrastructure";
import {API_TABLES} from "@api/const/table";
import {API_DOMAINS} from "@api/const/domain";
import {IMapper} from "@shared-library/base/repository";
export interface IUserDBRepository extends IRepository<IUserDomain> {
    findByEmail(email: string): Promise<IUserDomain>;
}

@singletonNamedProvide(API_TYPES.REPOSITORY, API_TABLES.USER)
export class UserPostgresRepository extends BasePostgresRepository<IUserDomain> implements IUserDBRepository {
    constructor(
        @namedInject(API_TYPES.TABLE, API_TABLES.USER)
            userTable: IPostgresTable,
        @namedInject(API_TYPES.MAPPER, API_DOMAINS.USER)
            mapper: IMapper<IUserDomain>,
        ) {
        super(userTable.model, mapper);
    }

    public async findByEmail(email: string): Promise<IUserDomain> {
        const record = await this.model.findOne({
            where: {
                email
            }
        });
        return this.mapper.toPrivateEntity(record);
    }

}
