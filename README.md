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

Tried changing the expected response from an array to a comma separated and pipe separated string. After some prompting, it was able to return the updated implementation.

### Chat Conversation

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

## Test 4 - Login form

Tried to use the [Login Form Kata](https://github.com/tdd-workshops/tdd-lab-login-form-nodejs) to see if the Copilot Chat can understand what the new test was meant to do.

### Added test scenario

```javascript
describe('POST /signup with error', function () {
  it('Error when password is less than 12 characters', function (done) {
    request.agent(app)
      .post('/signup')
      .send({ username: 'demo3', password: 'demo1234', password_confirm: 'demo1234', email: 'demo3@example.com' })
      .expect(200, /Your password is too short/, done)
  })

  it('Error when password is 11 characters', function (done) {
    request.agent(app)
      .post('/signup')
      .send({ username: 'demo4', password: 'demo1234567', password_confirm: 'demo1234567', email: 'demo4@example.com' })
      .expect(200, /Your password is too short/, done)
  })

  it('Error when password has symbol characters', function (done) {
    request.agent(app)
      .post('/signup')
      .send({ username: 'demo5', password: 'demo1234567@', password_confirm: 'demo1234567@', email: 'demo5@example.com' })
      .expect(200, /Your password must not contain symbol characters/, done)
  })
})
```

### Chat Conversation

miccheng: Let's implement the changes needed for this test

GitHub Copilot: Sure, what changes do you want to make to this test?

miccheng: Let's implement the changes to signup according to this test.

GitHub Copilot: I'm sorry, but I'm not sure what changes you want to make to the signup functionality based on this test. Could you please provide more information or context?

miccheng: Signup should return an error if the password is too short

GitHub Copilot: To return an error if the password is too short, you can modify the `signup` function in `signup.js` to check the length of the password and return an error message if it is too short. Here's an example implementation:

```javascript
function signup(req, res) {
  const { username, password, password_confirm, email } = req.body;

  if (password.length < 8) {
    return res.status(400).send('Your password is too short');
  }

  // rest of the signup logic
}
```

This implementation checks if the length of the password is less than 8 characters and returns a 400 Bad Request status with the error message if it is. You can customize the error message to your liking.

miccheng: How do i implement the code to check for symbol characters?

GitHub Copilot: To check if the password contains symbol characters, you can use a regular expression to match the password against a pattern that includes symbol characters. Here's an example implementation:

```javascript
function signup(req, res) {
  const { username, password, password_confirm, email } = req.body;

  if (password.length < 8) {
    return res.status(400).send('Your password is too short');
  }

  const symbolPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!symbolPattern.test(password)) {
    return res.status(400).send('Your password must contain at least one symbol character');
  }

  // rest of the signup logic
}
```

This implementation checks if the length of the password is less than 8 characters and returns a 400 Bad Request status with the error message if it is. It then checks if the password contains at least one symbol character using a regular expression pattern and returns a 400 Bad Request status with the error message if it doesn't. You can customize the error messages to your liking.

miccheng: Password must not contain a symbol.

GitHub Copilot: To modify the code to check that the password does not contain a symbol, you can remove the regular expression check for symbol characters and replace it with a regular expression check for non-symbol characters. Here's an example implementation:

```javascript
function signup(req, res) {
  const { username, password, password_confirm, email } = req.body;

  if (password.length < 12) {
    return res.render('signup', { errorMsg: 'Your password is too short', username, email });
  }

  const nonSymbolPattern = /^[a-zA-Z0-9]*$/;
  if (!nonSymbolPattern.test(password)) {
    return res.render('signup', { errorMsg: 'Your password must not contain symbol characters', username, email });
  }

  // rest of the signup logic
}
```

This implementation checks if the length of the password is less than 12 characters and returns an error message if it is. It then checks if the password contains only alphanumeric characters using a regular expression pattern and returns an error message if it doesn't. You can customize the error messages to your liking.

### Code added based on suggestions:

```javascript
if (req.body.password.length < 12) {
  errorMessage += 'Your password is too short. '
  return res.render('signup', { errorMsg: errorMessage, username: req.body.username, email: req.body.email })
}

const nonSymbolPattern = /^[a-zA-Z0-9]*$/;
if (!nonSymbolPattern.test(req.body.password)) {
  errorMessage += 'Your password must not contain symbol characters. '
  return res.render('signup', { errorMsg: errorMessage, username: req.body.username, email: req.body.email })
}
```

### Conclusion

Copilot was not able to discipher the current implementation. After some prompting, it gave a generic implementation for the password length check.

It did give a refactored version of the response. However, it did not understand the test scenario.

## Test 5

Using ChatGPT 3.5, implement the Sum and FizzBuzz method with just the test.

Chat conversation: <https://chat.openai.com/share/bb43e0d6-3e15-433a-9a3c-21077935016f>