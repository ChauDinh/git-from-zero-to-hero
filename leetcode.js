/**
 * This is a collection of challenges from LeetCode
 */

function LeetCode() {
  this.isComplete = false;
  this.points = 0;
}

LeetCode.prototype.getPoint = function(answer) {
  if (answer) {
    this.points = this.points + 1;
    return;
  }
  this.points = thisn.points - 1;
};

LeetCode.prototype.checkComplete = function() {
  if (this.points > 10) {
    this.isComplete = true;
    return;
  }
  this.isComplete = false;
};

module.exports = LeetCode;
