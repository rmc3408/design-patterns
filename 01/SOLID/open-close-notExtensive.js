let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue',
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    yuge: 'huge',
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// OCP = open for extension, closed for modification
class ProductFilter {
    filterByColor(products, color) {
        return products.filter((p) => p.color === color);
    }

    filterBySize(products, size) {
        return products.filter((p) => p.size === size);
    }

    filterBySizeAndColor(products, size, color) {
        return products.filter((p) => p.size === size && p.color === color);
    }

    // state space explosion, if 3 criteria (+weight) = 7 methods
}

let apple = new Product('Apple', Color.green, Size.small);
let tree  = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log(`Green products (old):`);
for (let p of pf.filterByColor(products, Color.green)) {
  console.log(` * ${p.name} is green`);
}
