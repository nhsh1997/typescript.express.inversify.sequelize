export * from '@shared-library/base/repository/mapper';

export * from '@shared-library/base/repository/base-postgres.repository';

export interface IReadableRepository<T> {
  findAll: () => Promise<T[]>;
  findById: (id: string | number) => Promise<T>;
}

export interface IWritableRepository<T> {
  create: (item: any) => Promise<T>;
  update: (id: string | number, item: any) => Promise<void>;
  delete: (id: string | number) => Promise<void>;
}

export interface ISettableRepository {
  keyOfSet(id: string | number): string;
  createSet(id: string | number, items: string[]): Promise<void>;
  buildSet(id: string | number, keys: string[]): Promise<void>;
}

export interface IRepository<T> extends IReadableRepository<T>, IWritableRepository<T> { }
