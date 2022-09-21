class Document {}

// interface
class Machine {
    constructor() {
        if (this.constructor.name === 'Machine') throw new Error('Machine is abstract!');
    }

    print(doc) {}
    fax(doc) {}
    scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
    print(doc) {}
    fax(doc) {}
    scan(doc) {}
}

class OldFashionedPrinter extends Machine {
    print(doc) {
        //do something
    }

    // fax(doc) {} old printer dont fax

    scan(doc) {
        // throw new Error('not implemented!');
        throw new NotImplementedError('OldFashionedPrinter.scan');
    }
}

class NotImplementedError extends Error {
    constructor(name) {
        let msg = `${name} is not implemented!`;
        super(msg);
        // maintain proper stack trace
        if (Error.captureStackTrace) Error.captureStackTrace(this, NotImplementedError);
        // your custom stuff here :)
    }
}

let printer = new OldFashionedPrinter();
printer.fax(); // nothing happens
//printer.scan();


class Printer {
    constructor() {
        if (this.constructor.name === 'Printer') throw new Error('Printer is abstract!');
    }

    print() {}
}

class Scanner {
    constructor() {
        if (this.constructor.name === 'Scanner') throw new Error('Scanner is abstract!');
    }

    scan() {}
}

class Photocopier extends aggregation(Printer, Scanner) {
    print() {}
    scan() {}
}

