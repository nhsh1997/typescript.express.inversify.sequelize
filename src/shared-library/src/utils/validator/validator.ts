import ajv from 'ajv';
import { TYPES } from '@shared-library/const';
import { singletonProvide, multiInject } from '@shared-library/ioc';
import { ISchema } from '@shared-library/base/schema';
const addFormats = require('ajv-formats').default;

const AJV = new ajv();

addFormats(AJV)

export interface IValidator {
  validate(
    schemaId: string,
    data: any,
  ): {
    valid: boolean;
    errors: string;
  };
}

@singletonProvide(TYPES.VALIDATOR)
export class Validator {
  static AJV = AJV;

  constructor(@multiInject(TYPES.SCHEMA) schemas: ISchema[]) {
    for (const schema of schemas) {
      Validator.AJV.addSchema(schema, schema.$id);
    }
  }

  validate(schemaId: string, data: any) {
    const validator = Validator.AJV.getSchema(schemaId);
    const valid = <boolean>validator!(data);
    return { valid, errors: Validator.AJV.errorsText(validator?.errors) };
  }
}
