import VehicleFactory from './src/VehicleFactory.js';

const factory = new VehicleFactory();

const car = factory.createVehicle('Car', 'toyota');
console.log(car.drive()); // Output: Driving a car!

const bike = factory.createVehicle('Bike');
console.log(bike.drive()); // Output: Riding a bike!
