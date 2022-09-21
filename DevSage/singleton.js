class ProcessManager {
  constructor(name){
    this.nameProcess = name
  }

  static getProcessManager(stringProcess) {
    if (!this.nameProcess) {
      this.nameProcess = new ProcessManager(stringProcess)
    }
    return this.nameProcess
  }
}

let p1 = ProcessManager.getProcessManager('mysqldb1')
let p2 = ProcessManager.getProcessManager('mysqldb2')

//the connections are the same
console.log("Process name 01: " + p1.nameProcess)
console.log("Process name 02: " + p2.nameProcess)
console.log(p1 === p2)
