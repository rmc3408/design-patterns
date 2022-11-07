interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number): void;
}

// ------------------------------------------------------
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  registerObserver(temp: Observer) {
      this.observers.push(temp);
  }

  removeObserver(o: Observer) {
      let index = this.observers.indexOf(o);
      this.observers.splice(index, 1);
  }

  notifyObservers() {
      for (let observer of this.observers) {
          observer.update(this.temperature);
      }
  }

  setTemperature(temp: number) {
      console.log('WeatherStation: ' + temp);
      this.temperature = temp;
      this.notifyObservers();
  }
}

// ------------------------------------------------------
class TemperatureDisplay implements Observer {

  constructor(weatherStation: Subject) {
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
      console.log('TemperatureDisplay: ', temperature);
  }
}

class Fan implements Observer {

  constructor(weatherStation: Subject) {
      weatherStation.registerObserver(this);
  }

  update(temperature: number) {
      if (temperature > 25) {
          console.log('Fan: Its hot here, turning myself ON...');
      } else {
          console.log('Fan: Its nice and cool, turning myself OFF...');
      }
  }
}

let weatherStation = new WeatherStation();
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(40);