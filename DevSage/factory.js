const employeeList = []

class Developer {
  constructor(fname) {
    this.fname = fname
    this.type = "Developer"
    console.log('Developer created')
  }
}

class Tester {
  constructor(fname) {
    this.fname = fname
    this.type = "Tester" 
    console.log('Tester created')
  }
}

class EmployeeCreator {
  constructor() {
    console.log('Employee created')
  }

  create(name, typeNum) {
    switch (typeNum) {
      case 1:
        return new Developer(name)
        break;
      case 2:
        return new Tester(name)
        break;
    }
  }
}

function say() {
  console.log(`name: ${this.fname} and job title: ${this.type}`)
}

const employeeFactory = new EmployeeCreator()

employeeList.push(employeeFactory.create('John', 1))
employeeList.push(employeeFactory.create('Jane', 2))
employeeList.push(employeeFactory.create('Sarah', 1))
employeeList.push(employeeFactory.create('Anthony', 2))

employeeList.forEach(emp => say.call(emp))