# Lesson 4 - Web Framework with TypeScript

This lesson, we are going to be building basic web framework application. The application is called **Auction Simulator**.

## How to Execute 💻

1. Navigate back up to root(`/learn-typescript`) folder.

2. Execute following script.

    ```bash

    $ npm run lesson4

    ...

    ```

3. DB can be accessed using HTTP requests. **`http://localhost:3000/items`**
     - GET `http://localhost:3000/items` - Fetch All Items.
     - GET `http://localhost:3000/items/{id}` - Fetch Specific {id} Item.
     - etc...

4. Website can be accessed. **`http://localhost:1234`**

## Key Takeaways 🎯

- Generics
- Inheritance/Compositions
- Class binding Context `ex) func() {} vs func = () => {}`
- Strict Mode `ex) number vs number | undefined`
- HTML Document operations.
- Basic Web Framework development.

## Misc

- Using `parcel-bundler`, reduces overhead of having to wire up **HTML** & **TypeScript**.
