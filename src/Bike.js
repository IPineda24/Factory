import Vehicle from './Vehicle.js';

class Bike extends Vehicle {
    constructor() {
        super('Bike');
    }

    drive() {
        return 'Riding a bike!';
    }
}

export default Bike;
