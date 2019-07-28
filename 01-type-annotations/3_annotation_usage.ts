/**
 * 1. Function that returns the 'any' type.
 */

const json = '{ "name": "shawnkoon", "age": 100 }';
const person = JSON.parse(json); // returns 'any' type.
person.sdaflkasjdflaksjdfl; // Would work..

const person2: { name: string; age: number } = JSON.parse(json);
// person2.asdklfjaslkdjfaaslkfdj; // Would NOT work..

/**
 * 2. Declare variable but initialize it later.
 */

const animals = ['cat', 'dog', 'horse'];
let isFound: boolean; // Will be type 'any' if `: boolean` is not provided.

for (let i = 0; i < animals.length; i++) {
    if (animals[i] === 'dog') {
        isFound = true;
    }
}

/**
 * 3. Variables which TypeScript can't automatically make inference of.
 */

const numbers = [1, 2, 3];
let evenNumbers: boolean | number = false;

for (let i = 0; i < animals.length; i++) {
    if (numbers[i] & 1) {
        evenNumbers = numbers[i]; // Would throw error if '|' annoations is not used.
    }
}
