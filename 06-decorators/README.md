# Lesson 6 - Decorators 🧁

This lesson, we are going to be learning about what/how to use Decorators in TypeScript.

## Definitions 🔍

Decorator - Functions, which can be used in order to modify properties and methods in a class.

```typescript

// Example

class Tester {
  @functionDecorator
  function hello() {
    // ...
  }
}

function functionDecorator(target: any, key: string, desc: PropertyDescriptor) {
  // target (first element) - prototype of object.
  // key (second element) - key of propery, method, and accessor.
  // desc (third element) - JavaScript PropertyDescriptor obj of the key.
  ...
}

```

## How to Execute 💻

1. Navigate back up to root(`/learn-typescript`) folder.

2. Execute following script.

    ```bash

    $ npm run lesson6

    ...

    [tsc] 7:30:28 PM - Found 0 errors. Watching for file changes.
    [nodemon] [nodemon] restarting due to changes...
    [nodemon] [nodemon] starting `node ./06-decorators/build/index.js`
    [nodemon]
    [nodemon] >> Executing Property Decorator.
    [nodemon]
    [nodemon] target Car { formatColor: [Getter], drive: [Function], race: [Function] }
    [nodemon] key color
    [nodemon]
    [nodemon] >> Executing Function Decorator.
    [nodemon]
    [nodemon] target Car { formatColor: [Getter], drive: [Function], race: [Function] }
    [nodemon] key formatColor
    [nodemon] propertyDescriptor { get: [Function: get],
    [nodemon]   set: undefined,
    [nodemon]   enumerable: true,
    [nodemon]   configurable: true }
    [nodemon]
    [nodemon] >> Executing Decorator Factory.
    [nodemon]
    [nodemon] Something went wrong! I am custom msg!
    [nodemon]
    [nodemon] >> Executing Parameter Decorator.
    [nodemon]
    [nodemon] key race index 0
    [nodemon]
    [nodemon] >> Executing Class Decorator.
    [nodemon]
    [nodemon] constructor function Car() {
    [nodemon]         this.color = 'red';
    [nodemon]         this.hp = 100;
    [nodemon]     }
    [nodemon] [nodemon] clean exit - waiting for changes before restart
    ```

## Key Takeaways 🎯

- Decorators in TypeScript is still **experimental** atm. So please enable options in `tsconfig.json`.
- Basic TypeScript Decorator example.
- Different types of Decorators.
  - **Decorator Factory**.
  - **Property** Decorator.
  - **Function** Decorator.
  - **Parameter** Decorator.
  - **Class** Decorator.
- Decorators are essentially just syntactic sugar.
- Decorators executed **once** on run. (No need to execute manually)
- Logic inside decorators are async.

## Misc

There will be more basic/advanced use case for these decorators in `lesson 7`.
So please refer that lesson source code to understand where/how decorators in TypeScript can be useful.

More can be found [here](https://www.typescriptlang.org/docs/handbook/decorators.html)
