var chalk = require('chalk');
var Horse = require('./horse');

function Dog(name) {
  this.name = name;
  this.stomach = [];
}

function Cat(name) {
  this.name = name;
  this.stomach = [];
}

Dog.prototype.eat = function(animal) {
  if (animal instanceof Horse) {
    this.stomach.push(animal);
    return;
  } else {
    throw new Error('oops, something went wrong!');
  }
};

Dog.prototype.sayHi = function() {
  console.log('Hi, I am a dog, my name is ' + chalk.red(this.name));
};

Cat.prototype.eat = function(animal) {
  this.stomach.push(animal);
};

Cat.prototype.sayHi = function() {
  console.log('Hi, I am a cat, my name is ' + chalk.green(this.name));
};

module.exports = Dog;
