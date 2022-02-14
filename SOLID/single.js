const fs = require('fs');

// SINGLE RESPONSABILITY is make separation of concerns. 
// try to create more components as possible.
// Each Class have simple and one responsability

class Journal {
    constructor() {
        this.propriedades = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${text}`;
        this.propriedades[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.propriedades[index];
    }

    toString() {
        return Object.values(this.propriedades).join('\n');
    }

    // save(filename)
    // {
    //   fs.writeFileSync(filename, this.toString());
    // }
    //
    // load(filename)
    // {
    //   //
    // }
    //
    // loadFromUrl(url)
    // {
    //   //
    // }
}
Journal.count = 0;

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j);


class PersistenceManager {
    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }
}

let p = new PersistenceManager();
let filename = './journal.txt';
p.saveToFile(j, filename);


