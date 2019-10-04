var Dog = require('./index');

var LeetCode = require('./leetcode');

var dog1 = new Dog('Tom');
dog1.sayHi();

var leetcode1 = new LeetCode();

leetcode1.getPoint(true);
leetcode1.checkComplete();

console.log(leetcode1.points);
