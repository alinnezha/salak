// JavaScript code with a theme of fruits

// Define a Fruit class
class Fruit {
  constructor(name, color, taste) {
    this.name = name;
    this.color = color;
    this.taste = taste;
  }

  describe() {
    console.log(`A ${this.color} ${this.name} with a ${this.taste} taste.`);
  }
}

// Define some fruit objects
const apple = new Fruit("apple", "red", "sweet");
const banana = new Fruit("banana", "yellow", "creamy");
const orange = new Fruit("orange", "orange", "citrusy");
const grape = new Fruit("grape", "purple", "juicy");

// Define a Basket class to store fruits
class Basket {
  constructor() {
    this.fruits = [];
  }

  addFruit(fruit) {
    this.fruits.push(fruit);
  }

  describe() {
    console.log("This basket contains the following fruits:");
    this.fruits.forEach((fruit, index) => {
      console.log(`${index + 1}. ${fruit.name}`);
    });
  }
}

// Create a basket and add fruits
const basket = new Basket();
basket.addFruit(apple);
basket.addFruit(banana);
basket.addFruit(orange);
basket.addFruit(grape);

// Describe the fruits in the basket
basket.describe();
