# Lesson 8 - React, Redux, and TypeScript

This lesson, we are going to learning about how to integrate `TypeScript` in your `React` and `Redux` application. In order to do so, we are going to building small web application (Todo App) where we use public api to fetch list of Todo items, display them, and when user clicks on one it will remove that specific todo item.

Basic application, but we can learn about the basics that are need to make this work.

## How to Execute 💻

1. Install package dpendencies.

    ```bash

    $ npm install

    ...
    ```

1. Execute following script.

   ```bash

   $ npm run start

   ...
   ```

1. Access the application via through `http://localhost:3000`.

1. Click on `Fetch` button to fetch list of todo items.

1. Click on **any todo item** to remove it from the list.

## Key Takeaways 🎯

- Basic React/Redux/TypeScript integration.
- How to use TypeGuard and enum to properly scope action types.

## Misc

I had a bit of trouble wiring `Redux Thunk Type Action` into `mapDispatchToProps`. Originally used `dispatch: Dispatch` from `react-redux` library but it was struggling to understand that `fetchTodos()` was also **dispatchable action**.

Endedup going with `ThunkDispatch` to work around the type error message, but it is defintely something I need to re-visit.
