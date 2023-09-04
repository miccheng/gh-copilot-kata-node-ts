# GitHub Copilot - TDD Verification

## Test 1 - Basic Sum

- Wrote a test for the `sum` method (i.e. `sum.test.ts`).
- Ask GitHub Copilot Chat to provide an implementation.
- Gave an implementation of `sum` that passes the test.

## Test 2 - FizzBuzz

- Wrote test for first 3 return value for FizzBuzz.
- GitHub Copilot Chat provided the full implementation of FizzBuzz.
- Suspect this is due to the coding puzzle being quite well known.

## Test 3 - Changed implementation of FizzBuzz

miccheng: I need an implementation based on the test.

GitHub Copilot: Certainly! Here's an implementation of `FizzBuzz` that passes the tests you provided:

```typescript
export default function FizzBuzz(n: number): Array<number | string> {
  const result: Array<number | string> = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}
``` 

Let me know if you have any questions!

miccheng: I need the return value to be a string

GitHub Copilot: Sure, I can modify the implementation to return a comma-separated string instead of an array. Here's the updated implementation:

```typescript
export default function FizzBuzz(n: number): string {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz';
    } else if (i % 3 === 0) {
      result += 'Fizz';
    } else if (i % 5 === 0) {
      result += 'Buzz';
    } else {
      result += i;
    }
    if (i !== n) {
      result += ', ';
    }
  }
  return result;
}
```

This implementation returns a comma-separated string instead of an array. Let me know if you have any other requirements!

miccheng: I updated the test. Can try again?

GitHub Copilot: Sure, please provide the updated test and let me know what changes you made.

miccheng: import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {
  test('first 3 items', () => {
    expect(FizzBuzz(1)).toContain("1");
    expect(FizzBuzz(2)).toEqual("1|2");
    expect(FizzBuzz(3)).toEqual("1|2|Fizz");
  });

  test('first 5 items', () => {
    expect(FizzBuzz(4)).toEqual("1|2|Fizz|4");
    expect(FizzBuzz(5)).toEqual("1|2|Fizz|4|Buzz");
  });
});

GitHub Copilot: Here's the updated implementation that passes the updated tests:

```typescript
export default function FizzBuzz(n: number): string {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz';
    } else if (i % 3 === 0) {
      result += 'Fizz';
    } else if (i % 5 === 0) {
      result += 'Buzz';
    } else {
      result += i;
    }
    if (i !== n) {
      result += '|';
    }
  }
  return result;
}
```

This implementation returns a pipe-separated string instead of a comma-separated string, which matches the updated tests you provided. Let me know if you have any other requirements!

