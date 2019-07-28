// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};

/**
 * Type String
 */

// We pre-define 'name' variable as `string`.
let name: string;
name = 'shawnkoon';

// This will throw an error because Type '3'(number) is not assignable to type 'string'.
// name = 3;

/**
 * Type Number
 */

// We pre-define 'tempreture' variable as `number`.
let tempreture: number;
tempreture = 30;

// This will throw an error because Type '"hello"'(string) is not assignable to type 'number'.
// tempreture = 'hello';

/**
 * Type Boolean
 */

// We pre-define 'isActive' variable as 'boolean'.
let isActive: boolean;
isActive = true;

//  This will throw an error because Type '"hi"'(string) is not assignable to type 'boolean'.
//  isActive = 'hi';

/**
 * Type Null
 */

// We pre-define 'nothing' variable as 'null'.
let nothing: null;
nothing = null;

//This will throw an error because Type Type 'false'(boolean) is not assignable to type 'null'.
// nothing = false;

/**
 * Type Undefined
 */

// We pre-define 'empty' variable as 'undefined'.
let empty: undefined;
empty = undefined;

//This will throw an error because Type Type 'false'(boolean) is not assignable to type 'undefined'.
// empty = false;
