// import { expect, should } from 'chai';

// import { BaseMapper } from '@shared-library/base/repository/mapper';

// class Domain {
//   id: number;
// }

// describe('@shared-library :: BASE ::BASE_MAPPER :: CONSTRUCTOR', () => {
//   context('when empty', () => {
//     it('should throw error', () => {
//       expect(() => {
//         const mapper = new BaseMapper(undefined);
//         should().exist(mapper);
//         expect(mapper.toEntity).to.be.a('function');
//         expect(mapper.toJSON).to.be.a('function');
//       }).to.not.throw();
//     });
//   });

//   context('when non empty', () => {
//     it('should not throw error', () => {
//       expect(() => {
//         const mapper = new BaseMapper(Domain);

//         should().exist(mapper);
//         expect(mapper.toEntity).to.be.a('function');
//         expect(mapper.toJSON).to.be.a('function');
//       }).to.not.throw();
//     });
//   });
// });

// describe('@shared-library :: BASE ::BASE_MAPPER :: TO_ENTITY', () => {
//   const mapper = new BaseMapper(Domain);

//   context('when build with empty', () => {
//     it('data null', () => {
//       const result = mapper.toEntity(undefined);
//       expect(result).to.be.equal(null);
//     });
//   });

//   context('when build with data ', () => {
//     it('data empty', () => {
//       const result = mapper.toEntity({ id: 1 });
//       expect(result instanceof Domain).to.be.true;
//     });
//   });
// });

// describe('@shared-library :: BASE ::BASE_MAPPER :: TO_JSON', () => {
//   const mapper = new BaseMapper(Domain);

//   context('when json with empty', () => {
//     it('data empty', () => {
//       const result = mapper.toJSON(undefined);
//       expect(result).to.be.equal(null);
//     });
//   });

//   context('when json with data ', () => {
//     it('data empty', () => {
//       const result = mapper.toJSON(1 as any);
//       expect(result).to.be.equal(1);
//     });
//   });
// });
