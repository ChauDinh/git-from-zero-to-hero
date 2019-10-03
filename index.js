var chalk = require('chalk');

function Dog(name) {
  this.name = name;
  this.stomach = [];
}

function Cat(name) {
  this.name = name;
  this.stomach = [];
}

Dog.prototype.eat = function(cat) {
  this.stomach.push(cat);
};

Dog.prototype.sayHi = function() {
  console.log('Hi, I am a dog, my name is ' + chalk.red(this.name));
};

Cat.prototype.eat = function(dog) {
  this.stomach.push(dog);
};

Cat.prototype.sayHi = function() {
  console.log('Hi, I am a cat, my name is ' + chalk.green(this.name));
};

module.exports = Dog;
