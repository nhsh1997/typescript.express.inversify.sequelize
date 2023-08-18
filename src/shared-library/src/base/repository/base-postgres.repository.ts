import { IRepository } from '@shared-library/base/repository';
import { IMapper } from '@shared-library/base/repository/mapper';
import { unmanaged, injectable } from '@shared-library/ioc';
import { ModelStatic } from '@shared-library/orm';

@injectable()
export abstract class BasePostgresRepository<D> implements IRepository<D> {
  constructor(
    protected model: ModelStatic<any>,
    @unmanaged() protected mapper: IMapper<D>,
  ) {}

  async create(context: any) {
    if (!context) throw new Error('context is missing');

    const record = await this.model.create(context);

    return this.mapper.toEntity(record);
  }

  async findAll() {
    const records = await this.model.findAll({});

    const entites = records.map(record => this.mapper.toEntity(record));

    return entites;
  }

  async update(id: number | string, context: any) {
    if (!id) throw new Error('id is missing');
    if (!context) throw new Error('context is missing');
    await this.model.update(context, { where: { id } });
  }

  async delete(id: number | string) {
    if (!id) throw new Error('id is missing');
    this.model.destroy({ where: { id } });
  }

  async findById(id: number | string) {
    if (!id) throw new Error('id is missing');
    const record = await this.model.findByPk(id);

    return this.mapper.toEntity(record);
  }
}
