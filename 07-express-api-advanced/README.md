# Lesson 7 - Express API with TypeScript (Advanced w/ Decorators & Design Pattern)

This lesson, we are going to be building advanced authentication api app using popular serverside framework `express`, and `TypeScript`.

Compared to `lesson 05 - Basic Express Api`, API in this lesson will be using Decorators and Design Patterns to take maximum benefit of TypeScript.

## How to Execute 💻

1. Navigate back up to root(`/learn-typescript`) folder.

1. Execute following script.

   ```bash

   $ npm run lesson7

   ...

   [tsc] 13:11:44 - Found 0 errors. Watching for file changes.
   [nodemon][nodemon] 1.19.1
   [nodemon][nodemon] to restart at any time, enter `rs`
   [nodemon][nodemon] watching: _._
   [nodemon][nodemon] starting `node ./07-express-api-advanced/build/index.js`
   [nodemon] Server is listening at http://localhost:3000 🚀
   ```

1. Access the application via through `http://localhost:3000`.

1. Try out different routes.
    - `http://localhost:3000/` - Main page.
    - `http://localhost:3000/auth/login` - LogIn page.
    - `http://localhost:3000/auth/logout` - LogOut page.
    - `http://localhost:3000/protected` - Protected page.
      - Can only access this page when you are looged in.

## Key Takeaways 🎯

- How to use Express with TypeScript.
- How you can make TypeScript worth implementing.
  - Q) What kind of benefits do you gain?
- Implementation alike [ts-express-decorators](https://www.npmjs.com/package/ts-express-decorators) module.
- Usage of [Reflect Metatadata](https://www.npmjs.com/package/reflect-metadata) module.
- Custom validations/middlewares on REST API.
- TypeScript Enums.
- Singleton pattern for express Route object.

## Misc

This is an **Advanced** version of Express + TypeScript. If you want to get the feel of basic approach first, please refer `lesson 05` before continuing
