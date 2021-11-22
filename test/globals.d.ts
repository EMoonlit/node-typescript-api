declare namespace NodeJS {
  interface CallSite {
    //https://stackoverflow.com/a/51114250
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
// declare namespace globalThis {
//   declare var testRequest: import('supertest').SuperTest<
//     import('supertest').Test
//     >
// }