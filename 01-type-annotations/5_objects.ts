/**
 * nested objects
 */

const profile = {
    name: 'shawn',
    age: 100,
    job: {
        title: 'SDE',
        isGood: true,
    },
    setAge(age: number) {
        this.age = age;
    },
};

const { age }: { age: number } = profile;

const {
    job: { title, isGood },
}: { job: { title: string; isGood: boolean } } = profile;

/**
 * Array
 */

const colors = ['red', 'green'];
const dates = [new Date(), new Date()];

// Prevents possible incompatible value insertion.
// colors.push(3) // will error.

// Helps with Array methods
colors.map(
    (color: string): string => {
        return color;
    }
);

// Flexible array types

const nestedArray = ['I am string', 5]; // (string | number)[] type

/**
 * Tuple
 */

const drink = {
    color: 'Dark Brown',
    isCarbonated: true,
    sugar: 100,
};

type Drink = [string, boolean, number];

const drPepper: Drink = ['brown', true, 100];
// const sprite: Drink = ['brown', true, 50, 'oops']; // error
