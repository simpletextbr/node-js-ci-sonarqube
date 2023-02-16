const { sum, sub, split, times }  = require('./calcs')


test("test function sum to calc a simple sum", () => {
  expect(sum(21, 2)).toBe(23);
})

test("test function sub to calc a simple sub", () => {
  expect(sub(33, 10)).toBe(23);
})

test("test function times to calc a simple times", () => {
  expect(times(5, 20)).toBe(100);
})

test("test function split to calc a simple split", () => {
  expect(split(100, 10)).toBe(10);
})