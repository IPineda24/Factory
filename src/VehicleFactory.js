import Car from './Car.js';
import Bike from './Bike.js';

class VehicleFactory {
    createVehicle(vehicleType, model) {
        switch (vehicleType) {
            case 'Car':
                return new Car(model);
            case 'Bike':
                return new Bike();
            default:
                throw new Error(`Vehicle type ${vehicleType} is not recognized.`);
        }
    }
}

export default VehicleFactory;
