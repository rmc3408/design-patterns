abstract class Car{
  public description!: string;
  public abstract cost(): number;  
  
  public getDescription() : string{
      return this.description;
  };
}

abstract class CarOptions extends Car{
  decoratedCar!: Car;
  public abstract getDescription(): string;
}


class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
      return 70;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
      return 50
  }
}

class EnhancedAutoPilot extends CarOptions {
  constructor(car: Car) {
      super();
      this.decoratedCar = car;
  }

  public getDescription(): string {
      return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
  }

  public cost(): number {
      return this.decoratedCar.cost() + 5;
  }
}

class RearFacingSeats extends CarOptions {
  constructor(car: Car) {
      super();
      this.decoratedCar = car;
  }

  public getDescription(): string {
      return this.decoratedCar.getDescription() + ', Rear Facing Seats';
  }

  public cost(): number {
      return this.decoratedCar.cost() + 10;
  }
}

class SmartAirSuspension extends CarOptions {
  constructor(car: Car) {
      super();
      this.decoratedCar = car;
  }

  public getDescription(): string {
      return this.decoratedCar.getDescription() + ', Smart Air Suspension';
  }

  public cost(): number {
      return this.decoratedCar.cost() + 3;
  }
}

let myTesla = new ModelX();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
