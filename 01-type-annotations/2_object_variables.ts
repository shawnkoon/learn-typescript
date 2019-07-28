/**
 * JavaScript built-in Object
 */

let newDate: Date;
newDate = new Date();

/**
 * Array of 'type'
 */

let names: string[];
names = ['shawn', 'hahnium', 'etc'];

let numbers: number[];
numbers = [1, 2, 3];

/**
 * Class
 */

class Student {}

let student: Student;
student = new Student();

/**
 * Object literal
 */

let point: { x: number; y: number } = {
    x: 15,
    y: 30,
    // z: 100 - This will throw an error.
};

/**
 * Function
 */

const saySomething: (x: any) => void = x => {
    console.log(x);
};
