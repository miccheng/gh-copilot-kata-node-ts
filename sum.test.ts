import Sum from './sum';

describe('Sum', () => {
  test('sum of 1 and 1', () => {
    expect(Sum(1, 1)).toEqual(2);
  });
});
