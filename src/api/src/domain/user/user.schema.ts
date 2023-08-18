import {singletonNamedProvide} from "@shared-library/ioc";
import {API_TYPES} from "@api/const";
import {API_DOMAINS} from "@api/const/domain";
import {ISchema} from "@shared-library/base/schema";

@singletonNamedProvide(API_TYPES.SCHEMA, API_DOMAINS.USER)
export class UserSchema implements ISchema {
    $id = 'UserEntity';
    title = 'user-entity';
    type = 'object';
    required = ['id', 'email'];
}

