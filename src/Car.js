import Vehicle from './Vehicle.js';

class Car extends Vehicle {
    constructor(model) {
        super('Car');
        this.model = model;
    }

    drive() {
        return `Driving a car! ${this.model}`;
    }
}

export default Car;
