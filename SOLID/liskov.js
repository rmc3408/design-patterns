class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }

    set width(value) {
        this._width = value;
    }
    set height(value) {
        this._height = value;
    }

    get area() {
        return this._width * this._height;
    }

    toString() {
        return `${this._width}×${this._height}`;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }

    set width(value) {
        this._width = this._height = value;
    }

    set height(value) {
        this._width = this._height = value;
    }
}

let rc = new Rectangle(2, 3);
console.log(rc.toString());
rc.height = 4;
console.log(rc.toString());

let sq = new Square(5);
console.log(sq.toString());
sq.width = 10;
console.log(sq.toString());

let useIt = function (shape) {
    shape.height = 10;
    console.log(`Expected area of ${10 * shape._width}, ` + `got ${shape.area}`);
};

useIt(rc);
useIt(sq);