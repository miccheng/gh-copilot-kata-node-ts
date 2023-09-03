import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {
  test('first 3 items', () => {
    expect(FizzBuzz(1)).toContain(1);
    expect(FizzBuzz(2)).toEqual(expect.arrayContaining([1, 2]));
    expect(FizzBuzz(3)).toEqual(expect.arrayContaining([1, 2, 'Fizz']));
  });

  test('first 5 items', () => {
    expect(FizzBuzz(4)).toEqual(expect.arrayContaining([1, 2, 'Fizz', 4]));
    expect(FizzBuzz(5)).toEqual(
      expect.arrayContaining([1, 2, 'Fizz', 4, 'Buzz'])
    );
  });
});
