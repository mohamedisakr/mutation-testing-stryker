const {add} = require('../calculator')


//
describe("calculator", () => {
  //
  test("add", () => {
    const a = 90;
    const b = 90;
    const expected = 180;
    const actual = add(a, b);
    expect(actual).toBe(expected);
  });
})