'use strict'

const fp = require('../lib/fp');

describe('forEach function', () => {
  describe('Multiply numbers', () => {
    it('should multiply each number in the array by 2', () => {
      let arr = [1, 2, 3, 4, 5];
      let result = fp.forEach(arr, num => num * 2);
      let expected = [2, 4, 6, 8, 10];
      expect(result).toEqual(expected);
    });
  });
});

describe('map function', () => {
  describe('Multiply numbers', () => {
    it('should multiply each number in the array by 2', () => {
      let arr = [2, 4, 8];
      let result = fp.map(arr, num => num * 2);
      let expected = [4, 8, 16];
      expect(result).toEqual(expected);
    });
  });
});

describe('filter function', () => {
  describe('Filter out odd numbers', () => {
    it('Should remove odd numbers from array', () => {
      let arr = [1, 4, 8, 3, 9];
      let result = fp.filter(arr, num => num % 2 === 0);
      let expected = [4, 8];
      expect(result).toEqual(expected);
    });
  });
});

describe('reduce function', () => {
  describe('Add all numbers in array and reduce to one value', () => {
    it('Should add all numbers and return 15', () => {
      let arr = [3, 3, 8, 1];
      let result = fp.reduce(arr, (a, b) => a + b, 0);
      let expected = 15;
      expect(result).toEqual(expected);
    });
  });
});
