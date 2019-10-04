var Dog = require('./index');
var Horse = require('./horse');

var LeetCode = require('./leetcode');

var dog1 = new Dog('Tom');
dog1.sayHi();

var leetcode1 = new LeetCode();

leetcode1.getPoint(true);
leetcode1.checkComplete();

console.log(leetcode1.points);

var horse1 = new Horse('horse1');

try {
  dog1.eat(leetcode1);
} catch (err) {
  console.log('Error while dog1 eating a leetcode');
}

console.log(dog1);
