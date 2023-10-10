import {INTEGER, STRING, BOOLEAN, DATE, BasePostgresTable, Sequelize} from "@api/infrastructure/postgres";
import {namedInject, singletonNamedProvide} from "@api/infrastructure/ioc";
import {API_TABLES} from "@api/const/table";
import {API_NAMES, API_TYPES} from "@api/const";

@singletonNamedProvide(API_TYPES.TABLE, API_TABLES.USER)
export class UserPostgresTable extends BasePostgresTable {
    constructor(
        @namedInject(API_TYPES.SEQUELIZE, API_NAMES.POSTGRES)
                    postgres: Sequelize
    ) {
        super();
        this.postgres = postgres;
    }

    get tableName() {
        return "users";
    }

    get options() {
        return  { tableName: 'users' };
    }

    get attribute() {
        return {
            id: {
                type:INTEGER,
                field: 'user_id',
                autoIncrement: true,
                primaryKey: true,
            },
            firstName: {
                type: STRING,
                field: 'first_name',
                allowNull: false,
            },
            lastName: {
                type: STRING,
                field: 'last_name',
                allowNull: false,
            },
            email: {
                type: STRING,
                allowNull: false,
                unique: true,
            },
            username: {
                type: STRING,
                allowNull: true,
                unique: true,
            },
            phone: {
                type: STRING,
                allowNull: true,
                unique: true,
            },
            password: {
                type: STRING,
                allowNull: false,
            },
            isSuperAdmin: {
                type: BOOLEAN,
                field: 'is_super_admin',
                allowNull: false,
                defaultValue: false,
            },
            status: {
                type: INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
            createdBy: {
                type: INTEGER,
                field: 'created_by',
                allowNull: true,
            },
            updatedBy: {
                type: INTEGER,
                field: 'updated_by',
            },
            createdAt: {
                type: DATE,
                field: 'created_at',
                allowNull: false,
            },
            updatedAt: {
                type: DATE,
                field: 'updated_at',
            },
        };
    }
}
