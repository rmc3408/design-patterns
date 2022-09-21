class Fedex {
  constructor() {
    this.price = () => 1.11
  }
}

class Dhl {
  constructor() {
    this.price = () => 5.45
  }
}

class Ups {
  constructor() {
    this.price = () => 3.78
  }
}

class Shipping {
  constructor() {
    this.company = ''
    this.setStrategy = (nameObj) => {
      this.company = nameObj
    }
    this.calculatePrice = () => {
      return this.company.price()
    }
  }
}

const package1 = new Fedex()
const package2 = new Dhl()
const package3 = new Ups()

//Instead one by one
//console.log(package1.price())

const delivery = new Shipping()

delivery.setStrategy(package1)
console.log('Shipping process name: ' + delivery.constructor.name)
console.log('Company name: ' + delivery.company.constructor.name)
console.log('Price calculated: ' + delivery.calculatePrice())

delivery.setStrategy(package2)
console.log('Shipping process name: ' + delivery.constructor.name)
console.log('Company name: ' + delivery.company.constructor.name)
console.log('Price calculated: ' + delivery.calculatePrice())

delivery.setStrategy(package3)
console.log('Shipping process name: ' + delivery.constructor.name)
console.log('Company name: ' + delivery.company.constructor.name)
console.log('Price calculated: ' + delivery.calculatePrice())