class Vehicle {
    constructor(height, width, weight, color) {
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.color = color;
    }
    getHeight() {
        console.log(`Height: ${this.height}m`);
    }

    getWidth() {
        console.log(`Width: ${this.width}m`);
    }

    getWeight() {
        console.log(`Weight: ${this.weight}kg`);
    }

    getColor() {
        console.log(`Color: ${this.color}`);
    }

    getParametersVehicle() {
        return this.getHeight(), this.getWidth(), this.getWeight(), this.getColor();
    }
}

class Car extends Vehicle {
    constructor(height, width, weight, color, numberOfDoors, passangers) {
        super(height, width, weight, color);
        this.numberOfDoors = numberOfDoors;
        this.passangers = passangers;
    }

    getNumberOfDoors() {
        console.log(`Number of Doors: ${this.numberOfDoors}`);
    }

    getMaxPassangers() {
        console.log(`Max Passengers: ${this.passangers}`);
    }

    getParametersCar() {
        return this.getParametersVehicle(), this.getNumberOfDoors(), this.getMaxPassangers();
    }
}

class Bike extends Vehicle {
    constructor(height, width, weight, color, wheels) {
        super(height, width, weight, color);
        this.wheels = wheels;
    }

    getNumberWheels() {
        console.log(`Number of Wheels: ${this.wheels}`);
    }

    getParametersBike() {
        return this.getParametersVehicle(), this.getNumberWheels();
    }
}

console.log("------Vehicle boat------");
const boat = new Vehicle(30, 50, 51000, "lightblue");
boat.getParametersVehicle();

console.log("------Car Mercedes------");
const mercedes = new Car(1.5, 5.5, 2290, "black", 4, 5);
mercedes.getParametersCar();

console.log("------Bike KROSS------");
const kross = new Bike(0.8, 1.8, 20, "white", 2);
kross.getParametersBike();