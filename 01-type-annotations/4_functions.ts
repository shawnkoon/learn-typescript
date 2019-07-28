/**
 * Basic function annotations
 *  - Prameters
 *  - Return Types
 */

const add = (a: number, b: number): number => {
    return a + b;
};

function hey(a: string, b: string): string {
    return 'hey';
}

/**
 * Dangerous case of relaying on 'Type Inference'.
 *
 * TypeScript can let error (not returning a value) pass, thinking
 * developer meant to do this on purpose.
 */

const subtract = (a: number, b: number) => {
    a - b;
};

/**
 * Function with destructuring
 */

const destructuringEx = ({ name, age }: { name: string; age: number }): void => {
    console.log(name);
    console.log(age);
};
