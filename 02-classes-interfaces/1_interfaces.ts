// To make this file a module
export {};

/**
 * Interface
 */

interface Vehicle {
    name: string;
    year: number;
    isBroken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

const oldCamaro = {
    name: 'Camaro',
    year: 2004,
    isBroken: false,
    summary() {
        return 'This is Camaro!';
    },
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`name ${vehicle.name}`);
    console.log(`year ${vehicle.year}`);
    console.log(`isBroken ${vehicle.isBroken}`);
};

const printSummary = (item: Reportable): void => {
    console.log(`name ${item.summary()}`);
};

printVehicle(oldCamaro);

printSummary(oldCamaro);

const coke = {
    color: 'brown',
    isCarbonated: true,
    sugar: 100,
    summary() {
        return `This coke has ${this.sugar} grams of sugar!`;
    },
};

printSummary(coke); // coke is also type `Reportable`.
