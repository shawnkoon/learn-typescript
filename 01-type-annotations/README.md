# Type Annotations

In this section, we will go over 'What type annotation is' and 'How they are used' within typescript.

## Definitions

- Type Annotations
    > Developer defines the type is.

- Type Inference
    > TypeScript tries to guess what the type is.

## Examples

> Checkout `.ts` files in order!

## Key Points

- If you are doing 'Variable Initialization' along with 'Variable Delclaration' on the same line, **Type Annotation** becomes optional. This is called **Type Inference** provided by TypeScript.

- Good practice - rely on **Type Inference** if you can.

- When should we explicitly set **Type Annotations** on variables?
  - Function that returns the `any` type.
  - Declare variable but initialize it later.
  - Variables which TypeScript can't automatically make inference of.

- When should we explicitly set **Type Annotations** on Functions?
  - Parameters.
  - Return types.
