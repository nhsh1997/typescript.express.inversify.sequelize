// import { expect, should } from 'chai';

// import { BasePostgresRepository } from '@shared-library/base/repository/';
// import { Instance } from '@shared-library/orm';

// interface IDomain {
//   id: number;
// }
// export interface IInstance extends IDomain { }

// class PostgresRepository extends BasePostgresRepository<IDomain, IInstance> { }

// describe('@shared-library :: BASE ::BASE_POSTGRES_REPOSITORY :: CONSTRUCTOR', () => {
//   context('when empty', () => {
//     it('should not throw error', () => {
//       expect(() => {
//         new PostgresRepository(<any>{}, <any>{}, <any>{});
//       }).to.not.throw();
//     });
//   });

//   context('when non empty', () => {
//     it('should not throw error', () => {
//       expect(() => {
//         const repository = new PostgresRepository(
//           <any>{
//             findAll: () => {
//               return [1, 2, 3];
//             },
//             findById: (id: number) => {
//               return id;
//             },
//           },
//           <any>{
//             create: () => {
//               return 1;
//             },
//             update: () => { },
//             delete: () => { },
//           },
//           <any>{
//             toEntity: () => {
//               return 1;
//             },
//           },
//         );

//         should().exist(repository);
//         expect(repository.create).to.be.a('function');
//         expect(repository.delete).to.be.a('function');
//         expect(repository.findById).to.be.a('function');
//         expect(repository.findAll).to.be.a('function');
//         expect(repository.update).to.be.a('function');
//       }).to.not.throw();
//     });
//   });
// });

// describe('@shared-library :: BASE ::BASE_POSTGRES_REPOSITORY :: CREATE', () => {
//   const repository = new PostgresRepository(
//     <any>{},
//     <any>{
//       create: (context: any) => {
//         return context;
//       },
//     },
//     <any>{
//       toEntity: (context: any) => {
//         return context;
//       },
//     },
//   );

//   context('when create with data', () => {
//     it('data return 1', async () => {
//       const result = await repository.create(1);
//       expect(result).to.be.equal(1);
//     });
//   });

//   context('when create with empty', () => {
//     it('throw error', async () => {
//       try {
//         expect(await repository.create(null)).to.throw('context is missing');
//       } catch (error) {
//         expect(error.message).to.be.equal('context is missing');
//       }
//     });
//   });
// });

// describe('@shared-library :: BASE ::BASE_POSTGRES_REPOSITORY :: FIND_ALL', () => {
//   const repository = new PostgresRepository(
//     <any>{
//       findAll: (context: any) => {
//         return [1];
//       },
//     },
//     <any>{},
//     <any>{
//       toEntity: (context: any) => {
//         return context;
//       },
//     },
//   );

//   context('when find all', () => {
//     it('return data', async () => {
//       const result = await repository.findAll();
//       expect(result.length).to.be.equal(1);
//       expect(result[0]).to.be.equal(1);
//     });
//   });
// });

// describe('@shared-library :: BASE ::BASE_POSTGRES_REPOSITORY :: FIND_BY_ID', () => {
//   const repository = new PostgresRepository(
//     <any>{
//       findById: (id: number) => {
//         return id;
//       },
//     },
//     <any>{},
//     <any>{
//       toEntity: (context: any) => {
//         return context;
//       },
//     },
//   );

//   context('when find_by_id with empty', () => {
//     it('data must throw error', async () => {
//       try {
//         expect(await repository.findById(null)).to.throw('id is missing');
//       } catch (error) {
//         expect(error.message).to.be.equal('id is missing');
//       }
//     });
//   });

//   context('when find_by_id with data ', () => {
//     it('data empty', async () => {
//       expect(await repository.findById(1)).to.be.equal(1);
//     });
//   });
// });

// describe('@shared-library :: BASE ::BASE_POSTGRES_REPOSITORY :: UPDATE', () => {
//   const repository = new PostgresRepository(
//     <any>{},
//     <any>{
//       update: (context: any) => {
//         return context;
//       },
//     },
//     <any>{},
//   );

//   context('when update with missing id', () => {
//     it(' throw error', async () => {
//       try {
//         expect(await repository.update(undefined, { id: 1 })).to.throw('id is missing');
//       } catch (error) {
//         expect(error.message).to.be.equal('id is missing');
//       }
//     });
//   });

//   context('when update with missing context', () => {
//     it(' throw error', async () => {
//       try {
//         expect(await repository.update(1, undefined)).to.throw('context is missing');
//       } catch (error) {
//         expect(error.message).to.be.equal('context is missing');
//       }
//     });
//   });

//   context('when update with data ', () => {
//     it('dont return any', async () => {
//       expect(await repository.update(1, { id: 1 })).to.be.equal(undefined);
//     });
//   });
// });

// describe('@shared-library :: BASE ::BASE_POSTGRES_REPOSITORY :: DELETE', () => {
//   const repository = new PostgresRepository(
//     <any>{},
//     <any>{
//       destroy: (id: number) => {
//         return context;
//       },
//     },
//     <any>{},
//   );

//   context('when delete with missing id', () => {
//     it('data must throw error', async () => {
//       try {
//         expect(await repository.delete(undefined)).to.throw('id is missing');
//       } catch (error) {
//         expect(error.message).to.be.equal('id is missing');
//       }
//     });
//   });

//   context('when delete with data ', () => {
//     it('dont return any', async () => {
//       expect(await repository.delete(1)).to.be.equal(undefined);
//     });
//   });
// });
