class Vehicle {
    constructor(type) {
        this.type = type;
    }

    drive() {
        throw new Error("Method 'drive()' must be implemented.");
    }
}

export default Vehicle;
