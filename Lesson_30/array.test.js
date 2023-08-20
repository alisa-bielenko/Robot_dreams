const dataFromArray = require('./array');

test('adds 1 + 2 to equal 3', () => {
  expect(dataFromArray.sum(1, 2)).toBe(3);
});

describe('test find max value from array', () => {
    it('should return 50 if max value is 50', () => {
        expect(dataFromArray.findMaxElementArray([1, -5, 50, 13])).toBe(50);
    });
});

describe('test find min value from array', () => {
  it('should return -5 if mix value is -5', () => {
      expect(dataFromArray.findMinElementArray([1, -5, 50, 13])).toBe(-5);
  });
});

describe('test sum of all element of array', () => {
  it('should return 59 if array = arr', () => {
    expect(dataFromArray.sumOfAllArray([1, -5, 50, 13])).toBe(59);
  });
});