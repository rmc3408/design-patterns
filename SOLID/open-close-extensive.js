let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue',
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    huge: 'huge',
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

class BetterFilter {
    filter(items, spec) {
        return items.filter((x) => spec.isSatisfied(x));
    }
}

let mySpecificFilter = new BetterFilter();
let myGreen = new ColorSpecification(Color.green);

console.log(`--- Green products ---`);

for (let prod of mySpecificFilter.filter(products, myGreen)) {
    console.log(` * ${prod.name} is green`);
}

class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every((x) => x.isSatisfied(item));
    }
}

console.log(`--- Large and green products ---`);
let spec = new AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large));
for (let prod of mySpecificFilter.filter(products, spec)) {
    console.log(` * ${prod.name} is large and green`);
}
  

