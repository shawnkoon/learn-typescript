// To make this a module
export {};

/**
 * Basic class
 */

class Vehicle {
    public drive(): void {
        console.log('I am driving');
    }

    public honk(): void {
        console.log('HONK');
    }
}

const vehicle = new Vehicle();

vehicle.drive();
vehicle.honk();

/**
 * Inheritance
 */

// You extend Vehicle fields/methods
class Car extends Vehicle {
    // Override
    public drive(): void {
        super.drive();
        console.log('Vroom~');
    }
}

const car = new Car();

car.drive();
car.honk();

/**
 * Fields in Class
 */

class SchoolPerson {
    constructor(protected id: number) {}

    protected sayId(): void {
        console.log(`My id is ${this.id}`);
    }
}

class Student extends SchoolPerson {
    public name: string;

    public constructor(name: string = 'Shawn') {
        super(Math.round(Math.random() * 10000));
        this.name = name;
    }

    public introduce(): void {
        console.log(`I am ${this.name}`);
    }
}

const student = new Student();
student.introduce();
